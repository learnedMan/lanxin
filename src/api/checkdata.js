import request , { download } from '@/utils/request_old'


// 单位
export function getCompanyList(data) {
    return request({
        url: '/mall/company/list',
        method: 'post',
        data
    })
}

export function addCompanyList(data) {
    return request({
      url: '/mall/company/add',
      method: 'post',
      data
    })
}

export function editCompanyUpdate(data) {
    return request({
      url: '/mall/company/update',
      method: 'post',
      data
    })
}

export function deleteCompany(data) {
    return request({
      url: '/mall/company/delete',
      method: 'post',
      data
    })
}

// 用户
export function getCompanyUserList(data) {
    return request({
        url: '/mall/company/user/list',
        method: 'post',
        data
    })
}

export function addCompanyUserList(data) {
    return request({
      url: '/mall/company/user/add',
      method: 'post',
      data
    })
}

export function editCompanyUserUpdate(data) {
    return request({
      url: '/mall/company/user/update',
      method: 'post',
      data
    })
}

export function deleteCompanyUser(data) {
    return request({
      url: '/mall/company/user/delete',
      method: 'post',
      data
    })
}

// 人员考核统计
export function pointsAssessList(data) {
  return request({
    url: '/mall/points/assess/list',
    method: 'post',
    data
  })
}

// 导出
export function pointsAssessListImport(data) {
  return download('/mall/points/assess/export', data, `pointsAssessList.xlsx`)
}

// 人员考核统计详情
export function pointsAloneData(data) {
  return request({
    url: '/mall/points/alone/data',
    method: 'post',
    data
  })
}

// 积分行为列表
export function pointsActionItem(data) {
  return request({
    url: '/mall/points/action/item/data',
    method: 'post',
    data
  })
}


// 导出详情
export function pointsAloneImport(data) {
  return download('/mall/points/alone/export', data, `pointsAlone.xlsx`)
}


// 月统计
export function pointsMonthData(data) {
  return request({
    url: '/mall/points/month/data',
    method: 'post',
    data
  })
}
// 周统计
export function pointsWeekData(data) {
  return request({
    url: '/mall/points/week/data',
    method: 'post',
    data
  })
}
