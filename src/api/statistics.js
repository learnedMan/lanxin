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

/* 稿件数量列表导出 */
export function fileImportNews(url, data) {
  return download(url, data, `statisticsNews.xlsx`)
}

// 员工发稿列表
export function kpiStatisticsByAuthor(data) {
  return request({
    url: '/api/statistics/kpi/statisticsByAuthor',
    method: 'post',
    data: data
  })
}

/* 员工发稿列表 */
export function fileImportAuthor(url, data) {
  return download(url, data, `statisticsAuthor.xlsx`)
}

/*来源列表*/
export function kpiStatisticsBySource(data) {
  return request({
    url: '/api/statistics/kpi/source/statistics',
    method: 'post',
    data: data
  })
}

export function fileImportSource(url, data) {
  return download(url, data, `statisticsSource.xlsx`)
}

/*部门列表*/
export function kpiStatisticsByDepartment(data) {
  return request({
    url: '/api/statistics/kpi/statisticsByDepartment',
    method: 'post',
    data: data
  })
}

export function fileImportDepartment(url, data) {
  return download(url, data, `statisticsByDepartment.xlsx`)
}

/*首页统计数据*/
export function getHomeData(query) {
  return request({
    url: '/api/statistics/analysis/getBasic',
    method: 'get',
    params: query
  })
}

/*首页折线图*/
export function getOnlineData(query) {
  return request({
    url: '/api/statistics/analysis/getTrendChart',
    method: 'get',
    params: query
  })
}