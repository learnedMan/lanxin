import request from '@/utils/request'
import $http from '@/utils/$http'

/* -------------------------审核拒绝原因--------------------------------*/

/* 获取列表 */
export function getReasons(params) {
  return request({
    url: '/api/refuseReasons',
    method: 'get',
    params
  })
}

/* 添加原因 */
export function addReasons(data) {
  return request({
    url: '/api/refuseReasons',
    method: 'post',
    data
  })
}

/* 修改原因 */
export function editReasons(id, data) {
  return request({
    url: `/api/refuseReasons/${id}`,
    method: 'PATCH',
    data
  })
}

/* 删除原因 */
export function deleteReasons(id) {
  return request({
    url: `/api/refuseReasons/${id}`,
    method: 'delete'
  })
}

/* -------------------------公共接口--------------------------------*/

/* 获取sourceId列表 */
export function getSourceList() {
  return $http({
    url: '/api/intranet/uc/querySourceIdData',
    baseURL: 'http://10.30.10.158',
    method: 'get'
  })
}

/* -------------------------用户反馈--------------------------------*/

/* 反馈列表 */
export function getFeedback(params) {
  return $http({
    url: '/api/intranet/uc/report/pageList',
    method: 'get',
    params
  })
}

/* 反馈详情 */
export function getFeedbackDetail(params) {
  return $http({
    url: '/api/intranet/uc/feedback/info',
    method: 'get',
    params
  })
}

/* 回复反馈 */
export function reply(data) {
  return $http({
    url: '/api/intranet/uc/feedback/reply',
    method: 'post',
    data
  })
};

/* -------------------------举报处理--------------------------------*/

/* 获取举报列表 */
export function getReport(params) {
  return $http({
    url: '/api/intranet/uc/report/pageList',
    method: 'get',
    params
  })
}

/* 举报详情 */
export function getReportDetail(params) {
  return $http({
    url: '/api/intranet/uc/report/info',
    method: 'get',
    params
  })
}

/* 举报回复 */
export function reportReply(data) {
  return $http({
    url: '/api/intranet/uc/report/reply',
    method: 'post',
    data
  })
}

/*-------------------------评论审核--------------------------------*/

/* 获取列表 */
export function getCommentLists(data) {
  return $http({
    url: '/api/intranet/comment/listConsole',
    method: 'post',
    data
  })
}

/* 通过或拒绝评论 */
export function commentAction(str) {
  return $http({
    url: `/api/intranet/comment/manage/${str}`,
    method: 'get'
  })
}

/* 批量通过或拒绝 */
export function batchCommentAction(data) {
  return $http({
    url: '/api/intranet/comment/operate',
    method: 'post',
    data
  })
}

/* 禁言用户 */
export function disableSendMsg(data) {
  return request({
    url: '/api/intranet/comment/isNoTalkUser',
    method: 'post',
    data
  })
}

/* 取消禁言 */
export function releaseShutup(data) {
  return request({
    url: '/api/intranet/comment/cancelNoTalkUser',
    method: 'post',
    data
  })
}
