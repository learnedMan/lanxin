import request from '@/utils/request'
import request2 from '@/utils/request_old'

/*-------------------------直播间列表--------------------------------*/

/* 获取列表 */
export function getStudioList(params) {
  return request({
    url: '/api/broadcasts',
    method: 'get',
    params
  })
}

/* 新增直播间 */
export function addStudio(data) {
  return request({
    url: '/api/broadcasts',
    method: 'post',
    data
  })
}

/* 修改直播间 */
export function editStudio(id, data) {
  return request({
    url: `/api/broadcasts/${id}`,
    method: 'patch',
    data
  })
}

/* 获取直播间详情 */
export function getStudio(id) {
  return request({
    url: `/api/broadcasts/${id}`,
    method: 'get'
  })
}

/* 直播间关联到栏目 */
export function publishStudio(data) {
  return request({
    url: '/api/broadcasts/recommendTo',
    method: 'post',
    data
  })
}

/* 删除直播间 */
export function deleteStudio(id) {
  return request({
    url: `/api/broadcasts/${id}`,
    method: 'delete'
  })
}

/* 修改直播间 */
export function changeStudio(id, data) {
  return request({
    url: `/api/broadcasts/${id}`,
    method: 'patch',
    data
  })
}

/* 删除机位 */
export function deleteReservation(id) {
  return request({
    url: `/api/broadcastStreams/${id}`,
    method: 'delete'
  })
}

/* 修改机位 */
export function editReservation(id, data) {
  return request({
    url: `/api/broadcastStreams/${id}`,
    method: 'patch',
    data
  })
}

/* 新增机位 */
export function addReservation(data) {
  return request({
    url: '/api/broadcastStreams',
    method: 'post',
    data
  })
}


/*-------------------------广告--------------------------------*/

/* 获取广告位列表 */
export function getAdvertList(params) {
  return request({
    url: '/api/ad_places',
    method: 'get',
    params
  })
}

/*添加广告位*/
export function addAdvertList(data) {
  return request({
    url: '/api/ad_places',
    method: 'post',
    data
  })
}

/* 修改广告位 */
export function changeAdvert(id, data) {
  return request({
    url: `/api/ad_places/${id}`,
    method: 'patch',
    data
  })
}

/* 删除广告位 */
export function deleteAdvert(id) {
  return request({
    url: `/api/product_versions/${id}`,
    method: 'delete'
  })
}

/* 获取广告列表 */
export function getAdvertChild(params) {
  return request({
    url: '/api/ads',
    method: 'get',
    params
  })
}

/* 添加广告 */
export function addAdvertChild(data) {
  return request({
    url: '/api/ads',
    method: 'post',
    data
  })
}

/*修改广告*/
export function changeAdvertChild(id, data) {
  return request({
    url: `/api/ads/${id}`,
    method: 'patch',
    data
  })
}

/* 删除广告 */
export function deleteAdvertChild(id) {
  return request({
    url: `/api/ads/${id}`,
    method: 'delete'
  })
}

/*-------------------------推送--------------------------------*/

/* 获取推送列表 */
export function getPushList(params) {
  return request({
    url: '/api/push',
    method: 'get',
    params
  })
}

/* 添加推送信息 */
export function addPushDetail(data) {
  return request({
    url: '/api/push',
    method: 'post',
    data
  })
}

/* 修改推送消息 */
export function changePushDetail(id, data) {
  return request({
    url: `/api/push/${id}`,
    method: 'patch',
    data
  })
}

/* 删除推送消息 */
export function deletePushDetail(id) {
  return request({
    url: `/api/push/${id}`,
    method: 'delete'
  })
}




/*-------------------------社区管理--------------------------------*/
/* 获取话题管理列表 */
export function getTopicList(params) {
  return request2({
    url: '/internal/social/topic/list',
    method: 'post',
    params
  })
}

/* 添加话题 */
export function addTopic(data) {
  return request2({
    url: '/internal/social/topic/add',
    method: 'post',
    data
  })
}

/* 修改话题 */
export function editTopic( data) {
  return request2({
    url: '/internal/social/topic/update',
    method: 'post',
    data
  })
}

/* 删除话题 */
export function delTopic(data) {
  return request2({
    url: '/internal/social/topic/del',
    method: 'post',
    data
  })
}

/* 获取分类管理列表 */
export function getClassifyList(params) {
  return request2({
    url: '/internal/social/classify/list',
    method: 'post',
    params
  })
}

/* 添加分类 */
export function addClassify(data) {
  return request2({
    url: '/internal/social/classify/add',
    method: 'post',
    data
  })
}

/* 修改分类 */
export function editClassify( data) {
  return request2({
    url: '/internal/social/classify/update',
    method: 'post',
    data
  })
}

/* 删除分类 */
export function delClassify(data) {
  return request2({
    url: '/internal/social/classify/del',
    method: 'post',
    data
  })
}