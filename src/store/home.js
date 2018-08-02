import Api from '@/api/config'
import axios from '@/api/fetch'

export default {
  namespaced: true,
  state: {
  },

  mutations: {

  },

  actions: {
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
}
