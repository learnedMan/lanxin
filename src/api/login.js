import request from '@/utils/request'

export function getcode(id) {
  return request({
    url: '/api/verificationCodes?phone=' + id,
    method: 'post'
  })
}

export function getSiteList() {
  return request({
    url: '/api/getSiteList',
    method: 'get'
  })
}

// host == 'batrix-www.cztv.com' ? '/api/authorizations/' : 'api/authorizations/wwwLogin' 

export function login(data) {
  return request({
    url: window.host != 'localhost:9527'?'api/authorizations/wwwLogin':'/api/authorizations',
    method: 'post',
    data
  })
}

export function changePassword(data) {
  return request({
    url: '/api/user/resetPassword',
    method: 'patch',
    data
  })
}
