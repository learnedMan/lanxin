import { asyncRoutes, constantRoutes, defaultRoutes } from '@/router'



/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles  用户角色
 * @param permissions  用户权限
 */
export function filterAsyncRoutes(routes, roles, permissions) {
  const res = []
  routes.map(route => {
    const tmp = { ...route }
    // hidden: 默认显示   defaultShow: 默认显示  roles: 根据角色决定
    if (tmp.hidden || tmp.defaultShow || tmp.roles && roles.find(role => tmp.roles.includes(role.name)) || permissions.find(n => n.name === tmp.permission)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles, permissions);
        (tmp.children.length !== 0 && !tmp.children.every(n => n.hidden) || tmp.allow) && res.push(tmp);
      }else {
        res.push(tmp)
      }
    }
  })
  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes).concat(defaultRoutes)
  }
}

const actions = {
  generateRoutes({ commit }, { roles, permissions,site }) {
    return new Promise(resolve => {
      let accessedRoutes,arr = [],siteName = site?.name,arr_ = []
      arr = filterAsyncRoutes(asyncRoutes, roles, permissions)
      const filterarr =(list,name1,name2)=>{
        return list.filter(item=>{
          if(name1 && name2) {
            return item.name != name1 && item.name != name2 //pub.cztvcloud.com
          }
          return item.name != name1
        }).map(item=>{
          item = Object.assign({},item)
          if(item.children && item.children.length) {
            item.children = filterarr(item.children,name1,name2)
          }
          return item
        })
      }
      accessedRoutes = window.location.host.indexOf('pub.cztvcloud.com')>-1 || window.location.host.indexOf('batrix-www-local') > -1 ? filterarr(arr,'All-media','RecycleBox') : arr
      if(siteName.indexOf('衢江') > -1) {
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      }else{
        let arr = []
        arr = filterarr(accessedRoutes,'Payment')
        commit('SET_ROUTES', arr)
        resolve(arr)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
