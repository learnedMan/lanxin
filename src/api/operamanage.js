import request from '@/utils/request'

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