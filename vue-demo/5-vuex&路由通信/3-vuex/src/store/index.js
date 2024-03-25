import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 注册vuex

console.log(Vuex); // 一个对象 Store是一个类/构造函数

const strore = new Vuex.Store({
  // 全局状态
  state: {
    user: {
      age: 18,
      name: 'xiaohei'
    },
    totken: ''
  },
  // 全局的计算属性，依赖state属性
  getters: {
    tenYearsOld(state) {
      return state.user.age + 10
    }
  },
  // 提交状态：类似自定义的事件类型
  mutations: {
    // payload是载荷：传入的额外参数
    changeName(state, payload) {
      state.user.name = payload
    },
    changeAge(state, payload) {
      state.user.age = payload.age
      // 同时多个组件触发时会有问题
      // setTimeout(() => {
      //   state.user.age = payload.age
      // }, 1000);
    },
  },
  actions: {
    // 异步解决方案
    changeName({commit}, payload) {
      setTimeout(() => {
        // 去请求后端接口
        commit('changeName', payload)
      }, 1000);
    }
  }
})

export default strore