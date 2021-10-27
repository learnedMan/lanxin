import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'
import { tokenIsOverdue } from '@/utils/auth'
const writeList = ['/login'] // token过期不需要重定向白名单

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// 是否正在刷新的标记 -- 防止重复发出刷新token接口--节流阀
let isRefreshing = false
// 失效后同时发送请求的容器 -- 缓存接口
let subscribers = []
// 刷新 token 后, 将缓存的接口重新请求一次
function onAccessTokenFetched (newToken) {
  subscribers.forEach((callback) => {
    callback(newToken)
  })
  // 清空缓存接口
  subscribers = []
}
// 添加缓存接口
function addSubscriber (callback) {
  subscribers.push(callback)
}

// 请求拦截器，拦截请求前对数据进行处理
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.headers.Authorization = sessionStorage.getItem('token')
  config.headers.TempZone = sessionStorage.getItem('TempZone') || ''
  config.headers.TempSite = sessionStorage.getItem('TempSite') || ''
  //判断是否登录过
  if(sessionStorage.getItem('token')) {
    //判断token是否要刷新
    if (tokenIsOverdue() && (!config.url.includes('/api/authorizations') || !config.url.includes('api/authorizations/wwwLogin'))) {
      if (!isRefreshing) {
        isRefreshing = true
        axios({
          url: '/api/authorizations/refresh',
          method: 'post',
          baseURL: process.env.VUE_APP_BASE_API,
          timeout: 5000,
          headers: {
            'Authorization': 'Basic ' + sessionStorage.getItem('token')
          }
        }).then(res => {
          isRefreshing = false
          // console.log(res)
            console.log(res.data)
            if(res.status === 200) {
              let response = res.data
              const token = response.token_type + ' ' + response.access_token;
              const tokenQueryTime = new Date().getTime()
              sessionStorage.setItem('token', token)
              sessionStorage.setItem('tokenQueryTime', tokenQueryTime)
                onAccessTokenFetched(token)
            }
        }).catch(() => {
          router.push({ path: '/login' })// 失败就跳转登陆
          isRefreshing = false
        })
      }
       // 将其他接口缓存起来 -- 这个Promise函数很关键
       const retryRequest = new Promise((resolve) => {
        // 这里是将其他接口缓存起来的关键, 返回Promise并且让其状态一直为等待状态,
        // 只有当token刷新成功后, 就会调用通过addSubscriber函数添加的缓存接口,
        // 此时, Promise的状态就会变成resolve
        addSubscriber((newToken) => {
          // 表示用新的token去替换掉原来的token
          config.headers.Authorization = newToken
          // 替换掉url -- 因为baseURL会扩展请求url
          config.url = config.url.replace(config.baseURL, '')
          // 返回重新封装的config, 就会将新配置去发送请求
          resolve(config)
        })
      })
      return retryRequest
    }
  }
  return config
}, error => {
  Message({
    //  饿了么的消息弹窗组件,类似toast
    showClose: true,
    message: error,
    duration: 5000,
    type: 'error.data.error.message'
  })
  return Promise.reject(error.data.error.message)
})

// 响应拦截器，拦截请求后对数据进行处理
service.interceptors.response.use(response => {
  // 对响应数据做些什么
  const tokenQueryTime = new Date().getTime()
  sessionStorage.setItem('tokenQueryTime', tokenQueryTime)
  if (response.status >= 200 && response.status < 300) {
    return response.data
  } else if (response.status === 401) {
    sessionStorage.removeItem('token')
  } else {
    return Promise.reject()
  }
}, error => {
  // 对响应发生错误时做些什么
  Message({
    //  饿了么的消息弹窗组件,类似toast
    showClose: true,
    message: error.response.data.errors ? Object.values(error.response.data.errors)[0][0] : (error.response.data.message ? error.response.data.message : '请求失败!'),
    duration: 3000,
    type: 'error'
  })
  if (error.response.status === 401) {
    sessionStorage.removeItem('token')
    const path = window.location.pathname
    if (!writeList.includes(path)) router.push('/login')
  }
  return Promise.reject(error)
})

export default service
