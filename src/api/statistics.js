import request, { download } from '@/utils/statistics'

/* 获取点击量 */
export function getMultiHits(data) {
  return request({
    url: '/api/algo/getMultiHits',
    method: 'post',
    data: data
  })
}

// 查询按部门发稿量
export function listDepartmentKpi(data) {
  return request({
    url: '/api/statistics/items/kpiStatistics',
    method: 'post',
    data: data
  })
}

// 查询按人员发稿量
export function listAuthorDetail(data) {
  return request({
    url: '/api/statistics/items/kpiStatisticsByAuthor',
    method: 'post',
    data: data
  })
}

// 查询详细发稿信息
export function listKpiDetail(data) {
  return request({
    url: '/api/statistics/items/pageKpiStatistics',
    method: 'post',
    data: data
  })
}

/* 导出 */
export function fileImport(url, data) {
  return download(url, data, `statistics_kpi.xlsx`)
}

// 查询按稿件数量
export function listnewsNum(data) {
  return request({
    url: '/api/statistics/kpi/pageNews',
    method: 'post',
    data: data
  })
}

