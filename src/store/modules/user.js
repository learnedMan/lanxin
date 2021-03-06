import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import Cookies from 'js-cookie'
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  u_info:{}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_INFO: (state, data) => {
    state.u_info = data
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        console.log(response)
        const token = response.token_type + ' ' + response.access_token;
        const tokenQueryTime = new Date().getTime()
        const tokenTime = response.expires_in
        commit('SET_TOKEN', token)
        setToken(token)
        sessionStorage.setItem('tokenTime', tokenTime)
        sessionStorage.setItem('tokenQueryTime', tokenQueryTime)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getuserinfo({ commit, state }){
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const data = response.data;
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        let { roles : { data: roles }, avatar, permissions: { data: permissions }, site } = data;
        // let siteObj = data.site
        if (!roles || roles.length <= 0) {
          roles = ['defaultRoles']
        }
        commit('SET_ROLES', roles)
        commit('SET_AVATAR', avatar)
        commit('SET_INFO', data)
        Cookies.set('site_id', data.site_id)
        Cookies.set('user_id', data.id)
        if(site) {
          resolve({ roles, permissions,site })
        }else{
          let site = {
            name: ''
          }
          resolve({ roles, permissions,site })
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '') // ??????token
      commit('SET_ROLES', []) // ????????????
      removeToken()
      resetRouter()
      dispatch('tagsView/delAllViews', null, { root: true }) // ??????tab
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },
  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
