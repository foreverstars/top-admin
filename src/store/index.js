import Vue from 'vue'
import Vuex from 'vuex'
import { LOGIN, LOGOUT } from './mutationTypes'
import Api from '@/api/config'
import axios from '@/api/fetch'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
      id: 3,
      name: 'deerschen',
      isAdmin: 1,
    },
    routeMenu: ''
  },
  getter: {
    hasRoutePermission: state => path => {
      return path
    }
  },
  mutations: {
    [LOGIN] (state, payload) {
      state.userInfo.id = payload.id
      state.userInfo.name = payload.username
      state.userInfo.isAdmin = payload.isAdmin
    },

    [LOGOUT] (state, payload) {

    },

    SET_ROUTE_MENU (state, payload) {
      state.routeMenu = payload.menu
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
    }
  }
})

export default store