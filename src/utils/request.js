import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求拦截器，拦截请求前对数据进行处理
service.interceptors.request.use(config => {
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

// 响应拦截器，拦截请求后对数据进行处理
service.interceptors.response.use(response => {
  // 对响应数据做些什么
  if (response.status >= 200 && response.status < 300) {
      return response.data;
  } else if (response.status == 401) {
  sessionStorage.removeItem('token');
  } else {
      return Promise.reject();
  }
}, error => {

  // 对响应发生错误时做些什么
  Message({
      //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message:  error.response.data.errors?Object.values(error.response.data.errors)[0][0] :(error.response.data.message ? error.response.data.message : '请求失败!'),
      duration:3000,
      type: "error"
  });
if (error.response.status == 401) {
  sessionStorage.removeItem('token');
  location.href = '/login';
}
  return Promise.reject(error);
})

export default service;