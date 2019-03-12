import Vue from 'vue'
import Vuex from 'vuex'
import { LOGIN, LOGOUT } from './mutationTypes'
import Api from '@/api/config'
import axios from '@/api/fetch'
import comment from './comment'
import { setCookie, getCookie } from '@/utils/common'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
      id: '',
      username: ''
    },
    routeMenu: '',
    blogTypes: []
  },
  getter: {
    hasRoutePermission: state => path => {
      return path
    }
  },
  mutations: {
    [LOGIN] (state, payload) {
      if (typeof payload !== 'undefined') {
        state.userInfo.id = payload.userId || ''
        state.userInfo.username = payload.username || ''
  
        setCookie('username', payload.username)
        setCookie('userId', payload.userId)
        setCookie('isLogin', true)
      } else {
        if (getCookie('username') && getCookie('userId')) {
          state.userInfo.id = getCookie('userId')
          state.userInfo.username = getCookie('username')
        }
      }
    },

    [LOGOUT] (state, payload) {
      setCookie('username', '')
      setCookie('userId', '')
      setCookie('isLogin', false)
    },

    SET_ROUTE_MENU (state, payload) {
      state.routeMenu = payload.menu
    },

    SET_BLOG_TYPES (state, payload) {
      state.blogTypes = payload.list
    }
  },
  actions: {
    register ({ state, commit}, data) {
      return axios.post(Api.register, data)
    },

    login ({ state, commit}, data) {
      return axios.post(Api.login, data)
    },

    getArticleList ({ state, commit }, params) {

    },

    getHomeList ({ commit }, filter) {
      return axios.post(Api.getHomeList, filter)
    },

    getTypeList ({ commit }, filter) {
      return axios.post(Api.getTypeList, filter)
    },

    getContent ({ commit }, filter) {
      return axios.post(Api.getContent, filter)
    },

    getTypes ({ commit }) {
      return axios.post(Api.getBlogTypes).then(res => {
        commit('SET_BLOG_TYPES', {
          list: res.data.data
        })
      })
    },

    initCommon ({ commit, dispatch }) {
      dispatch('getTypes')
      commit('LOGIN')
    }
  },

  modules: {
    comment
  }
})

export default store