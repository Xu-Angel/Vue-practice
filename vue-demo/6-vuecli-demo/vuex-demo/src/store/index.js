import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const strore = new Vuex.Store({
  state: {
    user: {
      name: 'zhangsan',
      age: 18
    },
    token: 123456789
  },
  mutations: {
    changeName(state, payload) {
      setTimeout(()=>{
        state.user.name = payload
      },2000)
      // state.user.name = payload.name
    },
    changeToken(state, payload) {
      // state.token = payload.token
      setTimeout(()=>{
        state.token = payload.token
      },1000)
    }
  }
})

export default strore