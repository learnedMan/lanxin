import request from '@/utils/request'

/* -------------------------新闻--------------------------------*/

/* 获取新闻列表 */
export function getScripts(query) {
  return request({
    url: '/api/scripts/',
    method: 'get',
    params: query
  })
}

/* 新增或修改稿件 */
export function changeScripts(id, data) {
  return request({
    url: `/api/scripts/${id || ''}`,
    method: id ? 'patch' : 'post',
    data
  })
}

/* 删除稿件 */
export function deleteScript(id) {
  return request({
    url: `/api/scripts/${id}`,
    method: 'delete'
  })
}

/* 发布稿件到多个栏目 */
export function PatchScript(id, data) {
  return request({
    url: `/api/scripts/${id}`,
    method: 'patch',
    data
  })
}

/* 批量发布到单个栏目 */
export function batchPublishScript(data) {
  return request({
    url: `/api/scripts/pushScriptsToChannel`,
    method: 'post',
    params: data
  })
}

/* 获取稿件详情 */
export function getScriptDetail(id) {
  return request({
    url: `/api/scripts/${id}`,
    method: 'get'
  })
}

/* 修改新闻内容 */
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
/* 获取指定新闻 */
export function getNewDetail(id) {
  return request({
    url: `/api/news/${id}`,
    method: 'get'
  })
}

/* 获取栏目下的新闻 */
export function getNews(params) {
  return request({
    url: `/api/news`,
    method: 'get',
    params
  })
}
/* 置顶和取消置顶新闻 */
export function setTop(data) {
  return request({
    url: '/api/news/setTop',
    method: 'post',
    data
  })
}

/* 修改新闻状态 */
export function changeNewsStatus(data) {
  return request({
    url: '/api/news/setStatus',
    method: 'post',
    data
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

/* 上传图片 */
export function uploadImg(option) {
  return request(option)
}

/* -------------------------编辑器资源--------------------------------*/

/* 获取编辑器图库资源 */
export function getEditImgLists(params, isMy) {
  return request({
    url: isMy ? '/api/resources/myResources' : '/api/resources',
    method: 'get',
    params
  })
}


/*-------------------------获取视频资源--------------------------------*/
/* 获取vms或新蓝云的栏目 */
export function getVideoChannel(params) {
  return request({
    url: '/api/videos/vms_channels',
    method: 'get',
    params
  })
}
