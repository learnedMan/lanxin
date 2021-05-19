import request from '@/utils/request'
import request2 from '@/utils/request_old'
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
  return request2({
    url: '/intranet/uc/querySourceIdData',
    method: 'get'
  })
}

/* -------------------------用户反馈--------------------------------*/

/* 反馈列表 */
export function getFeedback(params) {
  return request2({
    url: '/intranet/uc/report/pageList',
    method: 'get',
    params
  })
}

/* 反馈详情 */
export function getFeedbackDetail(params) {
  return request2({
    url: '/intranet/uc/feedback/info',
    method: 'get',
    params
  })
}

/* 回复反馈 */
export function reply(data) {
  return request2({
    url: '/intranet/uc/feedback/reply',
    method: 'post',
    data
  })
};

/* -------------------------举报处理--------------------------------*/

/* 获取举报列表 */
export function getReport(params) {
  return request2({
    url: '/intranet/uc/report/pageList',
    method: 'get',
    params
  })
}

/* 举报详情 */
export function getReportDetail(params) {
  return request2({
    url: '/intranet/uc/report/info',
    method: 'get',
    params
  })
}

/* 举报回复 */
export function reportReply(data) {
  return request2({
    url: '/intranet/uc/report/reply',
    method: 'post',
    data
  })
}

/*-------------------------评论审核--------------------------------*/

/* 获取列表 */
export function getCommentLists(data) {
  return request2({
    url: '/intranet/comment/listConsole',
    method: 'post',
    data
  })
}

/* 通过或拒绝评论 */
export function commentAction(str) {
  return request2({
    url: `/intranet/comment/manage/${str}`,
    method: 'get'
  })
}

/* 批量通过或拒绝 */
export function batchCommentAction(data) {
  return request2({
    url: '/intranet/comment/operate',
    method: 'post',
    data
  })
}

/* 禁言用户 */
export function disableSendMsg(data) {
  return request2({
    url: '/intranet/comment/noTalkUser',
    method: 'post',
    data
  })
}

/* 取消禁言 */
export function releaseShutup(data) {
  return request2({
    url: '/intranet/comment/cancelNoTalkUser',
    method: 'post',
    data
  })
}

/*-------------------------爆料审核--------------------------------*/

/* 获取列表 */
export function getGossipLists(data) {
  return request2({
    url: '/internal/baoliao/getList',
    method: 'post',
    data
  })
}





























