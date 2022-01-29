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
              setTimeout(() => {
                resolve(config);
              }, 500);
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
        const tokenQueryTime = new Date().getTime()
        sessionStorage.setItem('tokenQueryTime', tokenQueryTime)
        if (response.data.code == 200 || response.headers.success === "true" || response.status==200) {
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

function tansParams(params) {
  let result = ''
  Object.keys(params).forEach((key) => {
    if (!Object.is(params[key], undefined) && !Object.is(params[key], null) && !Object.is(JSON.stringify(params[key]), '{}')) {
      result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
    }
  })
  return result
}
// 通用下载方法
export function download(url, params, filename) {
  return service.post(url, params, {
    headers: {
      'Content-Type': 'application/json'
    },
    responseType: 'blob'
  }).then((data) => {
    const content = data
    const blob = new Blob([content])
    if ('download' in document.createElement('a')) {
      const elink = document.createElement('a')
      elink.download = filename
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href)
      document.body.removeChild(elink)
    } else {
      navigator.msSaveBlob(blob, filename)
    }
  }).catch((r) => {
    console.error(r)
  })
}

export default service
