import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return sessionStorage.getItem(TokenKey) 
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token) 
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}

export function tokenIsOverdue () { // token是否过期
  const time = window.sessionStorage.getItem('tokenTime') // token有效期，秒级，后端返回，浏览器存储的
  const queryTime = parseInt(window.sessionStorage.getItem('tokenQueryTime')) // token获取的时间，毫秒级
  const nowTime = new Date().getTime()
  const arealyTime = Math.ceil((nowTime - queryTime)/1000) // 已经过去的时间
  return time - arealyTime < 120 ? true : false
}
