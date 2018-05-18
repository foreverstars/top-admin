import Vue from 'vue'
import Vuex from 'vuex'
import { LOGIN, LOGOUT } from './mutationTypes'
import Api from '@/api/config'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: ''
  },
  getter: {
    hasRoutePermission: state => path => {
      return path
    }
  },
  mutations: {
    [LOGIN] (state, payload) {

    },

    [LOGOUT] (state, payload) {

    }
  },
  actions: {
    login (data) {
      Vue.$http.get(Api.login, data).then(result => {
        console.log(result)
      })
    },

    getUserPermissionList ({ state, commit }) {

    },

    getArticleList ({ state, commit }, params) {

    }
  },

  modules:{
    
  }
})

export default store