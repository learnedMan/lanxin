import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'
import { tokenIsOverdue } from '@/utils/auth'
const writeList = ['/login'] // token过期不需要重定向白名单

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
})

// 请求拦截器，拦截请求前对数据进行处理
service.interceptors.request.use(config => {
  if (sessionStorage.getItem('token')) {
    if (tokenIsOverdue() && (!config.url.includes('/api/authorizations/refresh'))) {
      return new Promise(resolve => {
        axios({
          url: '/api/authorizations/refresh',
          method: 'post',
          baseURL: process.env.VUE_APP_BASE_API,
          timeout: 5000,
          headers: {
            'Authorization': sessionStorage.getItem('token')
          }
        }).then(res => {
          // console.log(res)
          console.log(res.data)
          if (res.status === 200) {
            let response = res.data
            const token = response.token_type + ' ' + response.access_token;
            const tokenQueryTime = new Date().getTime()
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('tokenQueryTime', tokenQueryTime)
            config.headers.Authorization = token
            config.headers.TempZone = sessionStorage.getItem('TempZone') || ''
            config.headers.TempSite = sessionStorage.getItem('TempSite') || ''
            resolve(config);

          } else {
            sessionStorage.removeItem('token')
            router.push({ path: '/login' })// 失败就跳转登陆
          }
        }).catch(() => {
          sessionStorage.removeItem('token')
          router.push({ path: '/login' })// 失败就跳转登陆
        })
      });
    }

  }
  // 在发送请求之前做些什么
  config.headers.Authorization = sessionStorage.getItem('token')
  config.headers.TempZone = sessionStorage.getItem('TempZone') || ''
  config.headers.TempSite = sessionStorage.getItem('TempSite') || ''
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