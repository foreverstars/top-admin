import Vue from 'vue'
import Vuex from 'vuex'
import { LOGIN, LOGOUT } from './mutationTypes'
import Api from '@/api/config'
import axios from '@/api/fetch'

import admin from './admin.js'
import home from './home.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
      id: 3,
      name: 'deerschen',
      isAdmin: 1
    }
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

    }
  },

  modules:{
    admin,
    home
  }
})

export default store