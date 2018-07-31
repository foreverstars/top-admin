import Api from '@/api/config'
import axios from '@/api/fetch'

export default {
  namespaced: true,
  state: {
  },

  mutations: {

  },

  actions: {
    saveArticle ({ commit }, data) {
      return axios.post(Api.saveArticle, data)
    },

    getTypeList ({ commit }, filter) {
      return axios.post(Api.getTypeList, filter)
    },

    getUserList ({ commit }) {
      return axios.post(Api.getUserList)
    }
  }
}
