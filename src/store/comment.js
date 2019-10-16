import Api from '@/api/config'
import axios from '@/api/fetch'

export default {
  namespaced: true,
  state: {
  },

  mutations: {
  },

  actions: {
    getComment ({ commit }, filter) {
      return axios.post(Api.getComment, filter)
    },

    commentArticle ({ commit, rootState }, data) {
      const userInfo = rootState.userInfo
      data.userId = userInfo.id
      data.username = userInfo.username
      data.nickname = userInfo.nickname
      return axios.post(Api.commentArticle, data)
    }
  }
}