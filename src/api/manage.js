import request from '@/utils/request'
import request2 from '@/utils/request_old'

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

export function getChannels(query) {
  return request({
    url: '/api/channels',
    method: 'get',
    params:query
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

// 用户权限

export function getuserPermission(id) {
  return request({
    url: '/api/user/'+id+'/directPermission',
    method: 'get'
  })
}


export function assignuserPermission(id,data) {
  return request({
    url: '/api/user/'+id+'/assignPermission',
    method: 'post',
    params:{"permissions":data}
  })
}

// 用户角色
export function getuserroles(id) {
  return request({
    url: '/api/user/'+id+'/roles',
    method: 'get'
  })
}


export function assignuserroles(id,data) {
  return request({
    url: '/api/user/'+id+'/assignRole',
    method: 'post',
    params:{"roles":data}
  })
}


// 站点
export function getsites(query) {
  return request({
    url: '/api/sites',
    method: 'get',
    params:query
  })
}

export function addsites(data) {
  return request({
    url: '/api/sites',
    method: 'post',
    data:data
  })
}

export function editsites(id,data) {
  return request({
    url: '/api/sites/'+id,
    method: 'patch',
    data:data
  })
}

export function getzones() {
  return request({
    url: '/api/zones',
    method: 'get'
  })
}

export function getsitesinfo(id) {
  return request({
    url: '/api/sites/'+id,
    method: 'get'
  })
}

// 产品管理
export function getproduct(query) {
  return request({
    url: '/api/products',
    method: 'get',
    params:query
  })
}

export function addproducts(data) {
  return request({
    url: '/api/products',
    method: 'post',
    data:data
  })
}

export function editproducts(id,data) {
  return request({
    url: '/api/products/'+id,
    method: 'patch',
    data:data
  })
}

export function delproducts(id) {
  return request({
    url: '/api/products/'+id,
    method: 'delete',
  })
}

// 栏目管理

// getChannels
// getproduct
// getUser

export function addchannels(data) {
  return request({
    url: '/api/channels',
    method: 'post',
    data:data
  })
}

export function delchannels(id) {
  return request({
    url: '/api/channels/'+id,
    method: 'delete',
  })
}

export function setSortchannels(data) {
  return request({
    url: '/api/channels/setSort',
    method: 'post',
    data:data
  })
}

export function getchannelinfo(id) {
  return request({
    url: '/api/channels/'+id,
    method: 'get'
  })
}

export function editchannels(id,data) {
  return request({
    url: '/api/channels/'+id,
    method: 'patch',
    data:data
  })
}




// 回收站
export function getrecycleBin(query) {
  return request({
    url: '/api/news/recycleBin',
    method: 'get',
    params:query
  })
}

export function restore(data) {
  return request({
    url: '/api/news/restore',
    method: 'post',
    params:{"ids":data}
  })
}



// (媒体库)分类管理
export function getgories(query) {
  return request({
    url: '/api/categories',
    method: 'get',
    params:query
  })
}

export function addgories(data) {
  return request({
    url: '/api/categories',
    method: 'post',
    data:data
  })
}
export function editgories(id,data) {
  return request({
    url: '/api/categories/'+id,
    method: 'patch',
    data:data
  })
}
export function delgories(id) {
  return request({
    url: '/api/categories/'+id,
    method: 'delete'
  })
}


// 全部图片
// getgories
export function getresources(query) {
  return request({
    url: '/api/resources',
    method: 'get',
    params:query
  })
}

export function addresources(data) {
  return request({
    url: '/api/resources',
    method: 'post',
    data:data
  })
}
export function editresources(id,data) {
  return request({
    url: '/api/resources/'+id,
    method: 'post',
    data:data
  })
}
export function delresources(id) {
  return request({
    url: '/api/resources/'+id,
    method: 'delete'
  })
}


// 我的图片
// getgories
export function getmyresources(query) {
  return request({
    url: '/api/resources/myResources',
    method: 'get',
    params:query
  })
}


// 广电管理
// 电视频道
export function gettv_channel(query) {
  return request({
    url: '/api/channels/getSpecialChannels',
    method: 'get',
    params:query
  })
}

export function addtv_channel(data) {
  return request({
    url: '/api/channels',
    method: 'post',
    data:data
  })
}

export function deltv_channel(id) {
  return request({
    url: '/api/channels/'+id,
    method: 'delete'
  })
}

export function edittv_channel(id,data) {
  return request({
    url: '/api/channels/'+id,
    method: 'patch',
    data:data
  })
}

export function gettv_programs(query) {
  return request({
    url: '/api/programs',
    method: 'get',
    params:query
  })
}

export function addtv_programs(data) {
  return request({
    url: '/api/programs',
    method: 'post',
    data:data
  })
}

export function editprograms(id,data) {
  return request({
    url: '/api/programs/'+id,
    method: 'patch',
    data:data
  })
}

export function delprograms(id) {
  return request({
    url: '/api/programs/'+id,
    method: 'delete'
  })
}



// 图文直播
// 获取直播详情
export function getbroadcasts(id) {
  return request({
    url: `/api/broadcasts/${id}`,
    method: 'get'
  })
}
// 获取直播间发言列表
export function getbroadcastStatement(id,stream_id) {
  return request({
    url: `/api/broadcastStatement?broadcast_id=${id}&stream_id=${stream_id}`,
    method: 'get'
  })
}
// 添加直播间发言
export function addbroadcastStatement(data) {
  return request({
    url: '/api/broadcastStatement',
    method: 'post',
    data:data
  })
}

// 模板化样式接口
export function cateloglist() {
  return request2({
    url: '/catalog/list',
    method: 'get'
  })
}
export function stylelist(data) {
  return request2({
    url: '/styleByCode/list',
    method: 'post',
    data
  })
}
export function styleinfo(id) {
  return request2({
    url: `/style/info/${id}`,
    method: 'get',
  })
}

/*--------------------用户管理-用户列表---------------------------*/

/* 列表 */
export function getUserLists(data) {
  return request2({
    url: '/internal/uc/queryUserList',
    method: 'post',
    data
  })
}

/* 详情 */
export function getUserDetail(params) {
  return request2({
    url: '/internal/uc/queryUserInfo',
    method: 'get',
    params
  })
}

/* 修改详情 */
export function editDetail(data) {
  return request2({
    url: '/internal/uc/updateUserInfo',
    method: 'post',
    data
  })
}

/*邀请码列表 */
export function getInvited(data) {
  return request2({
    url: '/internal/uc/queryInvitationcodeList',
    method: 'post',
    data
  })
}

/* 获取登录日志 */
export function getLoginLists(data) {
  return request2({
    url: '/internal/uc/queryLoginLogList',
    method: 'post',
    data
  })
}
