import axios from 'axios'; // 引入axios
import { Message } from 'element-ui';
// create an axios instance
const service = axios.create({
    baseURL: 'http://10.30.10.158/api/v1', // url = base url + request url
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


//http response 拦截器
service.interceptors.response.use(
    response => {
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
                location.href = '/login';
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