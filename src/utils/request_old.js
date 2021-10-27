import axios from 'axios'; // 引入axios
import { Message } from 'element-ui';
import router from '@/router'
import { tokenIsOverdue } from '@/utils/auth'
import { 
    VUE_APP_REQUEST2_API } from '@/utils/judgmentEvn.js'
// create an axios instance
const service = axios.create({
    baseURL: VUE_APP_REQUEST2_API, // url = base url + request url
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
    //判断是否登录过
    if(sessionStorage.getItem('token')) {
        //判断token是否过期
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
                const tokenTime = response.expires_in
                sessionStorage.setItem('token', token)
                sessionStorage.setItem('tokenTime', tokenTime)
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
    return config;
}, error => {
    Message({
        //  饿了么的消息弹窗组件,类似toast
        showClose: true,
        message: error,
        duration:5000,
        type: "error.data.error.message"
    });
    return Promise.reject(error.data.error.message);
})


//http response 拦截器
service.interceptors.response.use(
    response => {
        // console.log(response)
        if (response.data.code == 200 || response.headers.success === "true") {
            return response.data
        } else {
            Message({
                showClose: true,
                message: response.data.msg || decodeURI(response.headers.msg),
                type: 'error',
            })
            if (response.data.data && response.data.data.reload) {
                sessionStorage.removeItem('token');
                router.push('/login')
            }
            return Promise.reject(response.data.msg)
        }
    },
    error => {
        Message({
            showClose: true,
            message: error,
            type: 'error'
        })
        return Promise.reject(error)
    }
)
export default service
