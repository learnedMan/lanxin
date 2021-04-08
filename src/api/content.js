import request from '@/utils/request'

/* 获取文稿列表 */
export function getScripts(query) {
  return request({
    url: '/api/scripts/',
    method: 'get',
    params: query
  })
}

/* 删除文稿 */
export function deleteScript(id) {
  return request({
    url: `/api/scripts/${id}`,
    method: 'delete'
  })
}

/* 发布文稿到多个栏目 */
export function PatchScript(id, data) {
  return request({
    url: `/api/scripts/${id}`,
    method: 'patch',
    params: data
  })
}

/* 获取文稿详情 */
export function getScriptDetail(id) {
  return request({
    url: `/api/scripts/${id}`,
    method: 'get'
  })
}

/* 修改新闻 */
export function changeNews(id, data) {
  return request({
    url: `/api/news/${id}`,
    method: 'patch',
    params: data
  })
}

/* 删除新闻 */
export function deleteNews(id) {
  return request({
    url: `/api/news/${id}`,
    method: 'delete'
  })
}
