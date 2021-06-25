import { asyncRoutes, constantRoutes, defaultRoutes, AdminRoute } from '@/router'



/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, isAdministrator, permissions) {
  const res = []
  routes.map(route => {
    const tmp = { ...route }
    if (permissions.find(n => n.name === tmp.name) || tmp.hidden) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, isAdministrator, permissions)
        tmp.children.length !== 0 && !tmp.children.every(n => n.hidden) && res.push(tmp)
      }else {
        // 站点管理需要特殊处理
        if(tmp.name === 'Architec-site') {
          isAdministrator && res.push(tmp)
        }else {
          res.push(tmp)
        }
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
    let isAdministrator = !!roles.find(n => n.name === 'Administrator');
    let MBH = isAdministrator && !!roles.find(n => n.name === 'Admin');
    return new Promise(resolve => {
      let accessedRoutes;
      accessedRoutes = filterAsyncRoutes(asyncRoutes, isAdministrator, permissions)
      accessedRoutes = accessedRoutes.concat(MBH? AdminRoute : []);
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
