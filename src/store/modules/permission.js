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
  generateRoutes({ commit }, { roles, permissions }) {
    return new Promise(resolve => {
      let accessedRoutes,arr = []
      arr = filterAsyncRoutes(asyncRoutes, roles, permissions)
      const filterarr =(list)=>{
        return list.filter(item=>{
          return item.name != 'All-media' && item.name != 'RecycleBox' //pub.cztvcloud.com
        }).map(item=>{
          item = Object.assign({},item)
          if(item.children && item.children.length) {
            item.children = filterarr(item.children)
          }
          return item
        })
      }
     accessedRoutes = window.location.host.indexOf('pub.cztvcloud.com')>-1 || window.location.host.indexOf('batrix-www-local') > -1 ? filterarr(arr) : arr
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
