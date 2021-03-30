import request from '@/utils/request_old'

// templatemanage.js
// 查询模板列表
export function listtemplate(query) {
    return request({
        url: '/template/list',
        method: 'get',
        params: query
    })
}

// 查询模板详情
export function infotemplate(id) {
    return request({
        url: '/template/info/' + id,
        method: 'get'
    })
}

// 修改模板
export function updatetemplate(data) {
    return request({
        url: '/template/update',
        method: 'post',
        data: data
    })
}

// 新增模板
export function addtemplate(data) {
    return request({
        url: '/template/add',
        method: 'post',
        data: data
    })
}

// 删除模板
export function deltemplate(id) {
    return request({
        url: '/template/del',
        method: 'delete',
        data:{
            "id":[id]
        }
    })
}


// 复制模板
export function copymeal(data) {
    return request({
        url: '/meal/copy',
        method: 'post',
        data: data
    })
}





// setmeal.js
// 查询套餐列表
export function listmeal(id) {
    return request({
        url: '/meal/list?templateId=' + id,
        method: 'get'
    })
}

// 获取套餐详情
export function getmealinfo(id) {
    return request({
        url: '/meal/info?id=' + id,
        method: 'get'
    })
}

// 查询套餐详情
export function listdetailmeal(id,sourceId) {
    return request({
        url: '/meal/detail/list?id=' + id+'&sourceId='+sourceId,
        method: 'get'
    })
}

// 查询默认套餐
export function listdefaultmeal(sourceId) {
    return request({
        url: '/meal/detail/default/list?sourceId='+sourceId,
        method: 'get'
    })
}

// 查询详情套餐
export function detailmeallist(id,sourceId) {
    return request({
        url: '/meal/detail/list?id='+id+'&sourceId='+sourceId,
        method: 'get'
    })
}

// 新增套餐
export function addmealdetail(data) {
    return request({
        url: '/meal/detail/add',
        method: 'post',
        data: data
    })
}

// 修改套餐
export function updatemealdetail(data) {
    return request({
        url: '/meal/detail/update',
        method: 'post',
        data: data
    })
}

export function updatemeal(data) {
    return request({
        url: '/meal/update',
        method: 'post',
        data: data
    })
}

// 删除套餐
export function delmeal(id) {
    return request({
        url: '/meal/del',
        method: 'delete',
        data:{
            "id":id
        }
    })
}

// 删除套餐某一条
export function delmealdetail(id) {
    return request({
        url: '/meal/detail/del',
        method: 'delete',
        data:{
            "id":id
        }
    })
}



// 选择布局后获取栏目
export function layouttocatalog(str) {
    return request({
        url: '/catalog/all?layout=' + str,
        method: 'get'
    })
}

// 增加一条套餐详情
export function mealaddOne(data) {
    return request({
        url: '/meal/detail/addOne',
        method: 'post',
        data: data
    })
}





// style.js
// 查询样式列表
export function liststyle(query) {
    return request({
        url: '/style/list',
        method: 'get',
        params: query
    })
}

// 查询样式详情
export function infostyle(id) {
    return request({
        url: '/style/info/' + id,
        method: 'get'
    })
}

// 修改样式
export function updatestyle(data) {
    return request({
        url: '/style/update',
        method: 'post',
        data: data
    })
}

// 修改样式（列表页修改）
export function updatestyle2(data) {
    return request({
        url: '/style/updateStatus',
        method: 'post',
        data: data
    })
}

// 新增样式
export function addstyle(data) {
    return request({
        url: '/style/add',
        method: 'post',
        data: data
    })
}

// 删除样式
export function delstyle(id) {
    return request({
        url: '/style/del',
        method: 'delete',
        data:{
            "id":[id]
        }
    })
}

// 查询栏目类型列表
export function listcatalog() {
    return request({
        url: '/catalog/list',
        method: 'get'
    })
}




// 查询基础样式列表
export function styletree() {
    return request({
        url: '/style/tree?sourceId=10000',
        method: 'get'
    })
}

export function productstyletree(sourceId) {
    return request({
        url: '/style/tree?sourceId='+sourceId,
        method: 'get'
    })
}
// 查询所有产品样式列表
export function templateall() {
    return request({
        url: '/template/all',
        method: 'get'
    })
}

// 查询所有产品样式列表
export function stylecopy(data) {
    return request({
        url: '/style/copy',
        method: 'post',
        data: data
    })
}

// 新增样式前询问用户
export function stylecheck(data) {
    return request({
        url: '/style/check',
        method: 'post',
        data: data
    })
}



// catlog.js
// 查询栏目列表
export function cataloglist(query) {
    return request({
        url: '/catalog/list',
        method: 'get',
        params: query
    })
}

// 修改栏目信息
export function updatecatalog(data) {
    return request({
        url: '/catalog/update',
        method: 'post',
        data: data
    })
}

// 查询栏目详情
export function infocatalog(id) {
    return request({
        url: '/catalog/info/' + id,
        method: 'get'
    })
}

// 新增栏目
export function addcatalog(data) {
    return request({
        url: '/catalog/add',
        method: 'post',
        data: data
    })
}
// 删除栏目
export function delcatalog(id) {
    return request({
        url: '/catalog/del',
        method: 'delete',
        data:{
            "id":[id]
        }
    })
}
