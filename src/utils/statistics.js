import axios from 'axios' // 引入axios
import { Message } from 'element-ui'
import router from '@/router'
import {
  VUE_APP_STATIS } from '@/utils/judgmentEvn.js'
// create an axios instance
const service = axios.create({
  baseURL: VUE_APP_STATIS, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000 // request timeout
})
// 请求拦截器，拦截请求前对数据进行处理
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.headers.Authorization = sessionStorage.getItem('token')
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

// http response 拦截器
service.interceptors.response.use(
  response => {
    if (response.data.code == 200 || response.data.status_code == 200 || response.headers.success === 'true' || response.data instanceof Blob) {
      return response.data
    } else {
      Message({
        showClose: true,
        message: response.data.msg || decodeURI(response.headers.msg),
        type: 'error'
      })
      if (response.data.data && response.data.data.reload) {
        sessionStorage.removeItem('token')
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
    transformRequest: [(params) => {
      return tansParams(params)
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
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
