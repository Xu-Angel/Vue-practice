import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * module 写法
 */
// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default {
  // root state object.
// each Vuex instance is just a single state tree.
  state: {
    counts: 0
  },
  // mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
  mutations: {
    increment(state) {
      state.counts++
    },
    decrement(state) {
      state.counts--
    }
  },
  // actions are functions that cause side effects and can involve
// asynchronous operations.
  actions: {
    increment: ({commit}) => commit('increment'),
    decrement: ({commit}) => commit('decrement'),
    incrementIfOdd: ({ commit, state }) => {
      if ((state.counts + 1) % 2 === 0) {
        commit('increment')
      }
    },
    async incrementAsync({ commit }) {
      await sleep(2000)
      commit('increment')
    }
  },
  // getters are functions.
  getters: {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
  }
}

const sleep = time => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, time)
})