import request from '@/utils/request'

export function getAllPermissions() {
    return request({
      url: '/api/permissions/getAllPermissions',
      method: 'get'
    })
}

export function getPermissions(query) {
  return request({
    url: '/api/system/data',
    method: 'get',
    params:query
  })
}

export function addpermissions(data) {
  return request({
    url: '/api/permissions',
    method: 'post',
    params:data
  })
}

export function editpermissions(id,data) {
  return request({
    url: '/api/permissions/'+id,
    method: 'patch',
    params:data
  })
}

export function delpermissions(id) {
  return request({
    url: '/api/permissions/'+id,
    method: 'delete',
  })
}

export function deletearrPermissions(data) {
  return request({
    url: '/api/permissions/deletePermissions',
    method: 'post',
    params:{"ids":data}
  })
}