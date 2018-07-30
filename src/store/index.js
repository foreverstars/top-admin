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
    register ({ state, commit}, data) {
      axios.post(Api.register, data).then(res => {
        if (res.code === 0) {
          alert(res.message)
        } else {
          alert(res.message)
        }
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