import Vue from 'vue'
import Vuex from 'vuex'
import MutationTypes from './mutationTypes'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    }
  },
  actions: {

  },
  getter: {},
  modules:{
    
  }
})

export default store