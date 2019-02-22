import Api from '@/api/config'
import axios from '@/api/fetch'

export default {
  state: {
    commentList: []
  },

  mutations: {
    SET_LIST (state, payload) {
      state.commentList = payload.data
    }
  },

  actions: {
    getComment ({ commit }, filter) {
      return axios.post(Api.getComment, filter).then(res => {
        commit('SET_LIST', res.data)
      })
    },

    commentArticle ({ commit }, data) {
      return axios.post(Api.commentArticle, data)
    }
  }
}