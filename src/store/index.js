import Vuex from 'vuex'

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