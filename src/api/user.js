import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

export function login(data) {
  return request({
    url: window.location.host == 'batrix-www.cztv.com'?'api/authorizations/wwwLogin':'/api/authorizations',
    method: 'post',
    data
  })
}


export function getInfo() {
  return request({
    url: '/api/user',
    method: 'get',
    params: {
      "include":"roles,permissions"
    }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
