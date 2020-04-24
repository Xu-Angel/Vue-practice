import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * module 写法
 */
// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default {
  // https://vuex.vuejs.org/zh/guide/modules.html
  namespaced: true, //!! 不用使用true 使得，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
  // root state object.
// each Vuex instance is just a single state tree.
// 在module情況下 自动被分配 需要加上module名才可访问，但是在本内部内则不用
  state: {
    counts: 0,
    hi: 'ddd'
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
    incrementIfOdd: ({ commit, state, rootState }) => {
      console.log(';hi  i root ', rootState);
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
    evenOrOdd: state => state.counts % 2 === 0 ? 'even' : 'odd'
  }
}

const sleep = time => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, time)
})