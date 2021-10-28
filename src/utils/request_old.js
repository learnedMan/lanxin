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
        const tokenQueryTime = new Date().getTime()
        sessionStorage.setItem('tokenQueryTime', tokenQueryTime)
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
