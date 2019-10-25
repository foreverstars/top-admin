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
      username: '',
      nickname: '',
      photo: ''
    },
    routeMenu: '',
    blogTypes: []
  },
  getters: {
    isLogin (state) {
      return state.userInfo.id
    },

    username (state) {
      return state.userInfo.username
    },

    nickname (state) {
      return state.userInfo.nickname
    }
  },
  mutations: {
    [LOGIN] (state, payload) {
      if (typeof payload !== 'undefined') {
        state.userInfo.id = payload.userId || ''
        state.userInfo.username = payload.username || ''
        state.userInfo.nickname = payload.nickname || ''
        state.userInfo.photo = payload.photo || ''
  
        setCookie('username', payload.username)
        setCookie('userId', payload.userId)
        setCookie('nickname', payload.nickname)
        setCookie('isLogin', true)
      } else {
        if (getCookie('username') && getCookie('userId') && getCookie('nickname')) {
          state.userInfo.id = getCookie('userId')
        }
      }
    },

    [LOGOUT] (state, payload) {
      setCookie('username', '')
      setCookie('userId', '')
      setCookie('nickname', '')
      setCookie('isLogin', false)
    },

    SET_ROUTE_MENU (state, payload) {
      state.routeMenu = payload.menu
    },

    SET_BLOG_TYPES (state, payload) {
      state.blogTypes = payload.list
    },

    UPDATE_PHOTO (state, payload) {
      state.userInfo.photo = payload.data
    }
  },
  actions: {
    register ({ state, commit}, data) {
      return axios.post(Api.register, data)
    },

    login ({ state, commit}, data) {
      return axios.post(Api.login, data)
    },

    getUserInfo ({state, commit}) {
      axios.post(Api.getUserInfo, {
        id: state.userInfo.id
      }).then(res => {
        if (res.data.code === 0) {
          commit('LOGIN', res.data.data);
        }
      })
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

    updatePersonal ({ state, commit, dispatch}, params) {
      return axios.post(Api.updatePersonal, {...params, id: state.userInfo.id}).then(res => {
        dispatch('getUserInfo');
      })
    },

    uploadPhoto ({ state, commit }, params) {
      return axios({
        url: Api.uploadPhoto, 
        data: params,
        method: 'post'
      })
        .then(res => {
        commit('UPDATE_PHOTO', {
          data: res.data.data.photo
        })
      })
    },

    initCommon ({ commit, dispatch }) {
      commit('LOGIN')
      dispatch('getUserInfo');
    }
  },

  modules: {
    comment
  }
})

export default store