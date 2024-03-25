import Vue from 'vue'
import Vuex from 'vuex'
import { apiLogin } from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    login (state, payload) {
      state.token = payload
      localStorage.setItem('token', payload)
    }
  },
  actions: {
    async login ({ commit }, payload) {
      const { token } = await apiLogin(payload)
      commit('login', token)
    }
  }
})

export default store
