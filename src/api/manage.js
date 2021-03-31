import request from '@/utils/request'

// 权限
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

// 角色
export function getRole(query) {
  return request({
    url: '/api/system/data',
    method: 'get',
    params:query
  })
}

export function addroles(data) {
  return request({
    url: '/api/roles',
    method: 'post',
    params:data
  })
}

export function editroles(id,data) {
  return request({
    url: '/api/roles/'+id,
    method: 'patch',
    params:data
  })
}

export function delroles(id) {
  return request({
    url: '/api/roles/'+id,
    method: 'delete',
  })
}

export function deletearrRoles(data) {
  return request({
    url: '/api/roles/deleteRoles',
    method: 'post',
    params:{"ids":data}
  })
}

export function getrolepermission(id) {
  return request({
    url: '/api/roles/'+id+'/permission',
    method: 'get'
  })
}

// 角色权限
export function assignrolepermission(id,data) {
  return request({
    url: '/api/roles/'+id+'/assignPermission',
    method: 'post',
    params:{"permissions":data}
  })
}

// 用户
export function getUser(query) {
  return request({
    url: '/api/system/data',
    method: 'get',
    params:query
  })
}

export function uploadImg(data) {
  return request({
    url: '/api/upload/image',
    method: 'post',
    data:data
  })
}

export function getChannels() {
  return request({
    url: '/api/channels',
    method: 'get'
  })
}

export function addusers(data) {
  return request({
    url: '/api/users',
    method: 'post',
    data:data
  })
}

export function editusers(id,data) {
  return request({
    url: '/api/user/'+id,
    method: 'patch',
    data:data
  })
}

export function changearrusersstatus(data,status) {
  return request({
    url: '/api/users/setStatus',
    method: 'post',
    params:{"ids":data,"status":status}
  })
}

export function delusers(id) {
  return request({
    url: '/api/user/'+id,
    method: 'delete',
  })
}

export function deletearrusers(data) {
  return request({
    url: '/api/user/deleteUsers',
    method: 'post',
    params:{"ids":data}
  })
}

export function getuserroles(id) {
  return request({
    url: '/api/user/'+id+'/directPermission',
    method: 'get'
  })
}

// 角色权限
export function assignuserroles(id,data) {
  return request({
    url: '/api/user/'+id+'/assignPermission',
    method: 'post',
    params:{"permissions":data}
  })
}