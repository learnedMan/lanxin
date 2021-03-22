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

export function login(data) {
  return request({
    url: '/api/authorizations',
    method: 'post',
    data
  })
}