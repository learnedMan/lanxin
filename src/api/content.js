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

/*复制文稿*/
export function copyScript(id, data) {
  return request({
    url: `/api/scripts/duplicate/${id}`,
    method: 'post',
    data
  })
}

/* 获取编辑人员 */
export function getEditorPerson(params) {
  return request({
    url: '/api/news/checkEditors',
    method: 'get',
    params
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
    data
  })
}

/* 文稿下新闻一键下线 */
export function offlineNews(id) {
  return request({
    url: `/api/scripts/pullAll/${id}`,
    method: 'post',
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

/* 修改新闻排序 */
export function changeNewsSort(data) {
  return request({
    url: '/api/news/setSort',
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
/* 获取新闻或文稿的操作记录 */
export function getHistory(params) {
  return request({
    url: '/api/operationLogs',
    methods: 'get',
    params
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

/* 获取视频列表 */
export function getVideos(params) {
  return request({
    url: '/api/videos',
    method: 'get',
    params
  })
}

/*-------------------------专题管理--------------------------------*/

/* 获取列表数据 */
export function getTopicList(params) {
  return request({
    url: '/api/channels/getSpecialChannels',
    method: 'get',
    params
  })
}

/* 新增专题 */
export function addTopic(data) {
  return request({
    url: '/api/channels',
    method: 'post',
    data
  })
}
/* 修改专题 */
export function changeTopic(id, data) {
  return request({
    url: `/api/channels/${id}`,
    method: 'patch',
    data
  })
}

/* 修改专题发布状态 */
export function changeTopicStatus(data) {
  return request({
    url: '/api/channels/setStatus',
    method: 'post',
    data
  })
}

/* 删除专题 */
export function deleteTopic(id) {
  return request({
    url: `/api/channels/${id}`,
    method: 'delete'
  })
}

/* 发布专题 */
export function publishTopic(data) {
  return request({
    url: '/api/channels/publishSpecialChannelAsNews',
    method: 'post',
    data
  })
}

/* 获取专题详情 */
export function getTopicDetail(id) {
  return request({
    url: `/api/channels/${id}/?include=father`,
    method: 'get'
  })
}

/* 获取子专题 */
export function getChildTopic(id) {
  return request({
    url: `/api/channels/${id}/getChild`,
    method: 'get'
  })
}
