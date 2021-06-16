import { asyncRoutes, constantRoutes, defaultRoutes } from '@/router'



/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, isAdministrator, permissions) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (permissions.find(n => n.name === tmp.name) || tmp.hidden) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, isAdministrator, permissions)
        tmp.children.length !== 0 && res.push(tmp)
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
    let isAdministrator = !!roles.find(n => n.name === 'Administrator');
    return new Promise(resolve => {
      let accessedRoutes;
      accessedRoutes = filterAsyncRoutes(asyncRoutes, isAdministrator, permissions)
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
