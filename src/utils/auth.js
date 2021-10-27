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

export function tokenIsOverdue () { // 
  const queryTime = parseInt(window.sessionStorage.getItem('tokenQueryTime')) // token获取的时间，毫秒级
  const nowTime = new Date().getTime()
  const arealyTime = Math.ceil((nowTime - queryTime)/1000) // 已经过去的时间
  return  arealyTime > 600 ? true : false
}
