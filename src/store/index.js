import Vue from 'vue'
import Vuex from 'vuex'
import { LOGIN, LOGOUT } from './mutationTypes'
import Api from '@/api/config'
import axios from '@/api/fetch'

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
    register (data) {
      console.log(222)
      axios.get(Api.register, data).then(result => {
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