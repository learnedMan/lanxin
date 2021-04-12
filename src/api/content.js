import request from '@/utils/request'

/* -------------------------媒资--------------------------------*/

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
    data
  })
}

/* 批量发布到单个文稿 */
export function batchPublishScript(data) {
  return request({
    url: `/api/scripts/pushScriptsToChannel`,
    method: 'post',
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
    data
  })
}

/* 删除新闻 */
export function deleteNews(id) {
  return request({
    url: `/api/news/${id}`,
    method: 'delete'
  })
}

/* -------------------------标签管理--------------------------------*/

/* 获取标签列表 */
export function getLabels(query) {
  return request({
    url: '/api/tags',
    method: 'get',
    params: query
  })
}

/* 删除标签 */
export function deleteLabels(id) {
  return request({
    url: `/api/tags/${id}`,
    method: 'delete'
  })
}

/* 编辑标签 */
export function editLabels(id, data) {
  return request({
    url: `/api/tags/${id}`,
    method: 'patch',
    data
  })
}

/* 新增标签 */
export function addLabels(data) {
  return request({
    url: '/api/tags',
    method: 'post',
    params: data
  })
}
