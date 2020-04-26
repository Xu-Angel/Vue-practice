import Vue from 'vue'
import Vuex from 'vuex'
import storeCounter from '../page/counter/counterStore.js' // module store
import { cart, products } from '../page/shopping-cart/store' 
import storeChat from '../page/chat/store/index'
import storeTODO from '../page/todomvc/store/index'
import localStoragePlugin from './plugins'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    moduleCounter: storeCounter,
    cart,
    products,
    moduleChat: storeChat,
    moduleTODO: storeTODO
  },
  plugins: [localStoragePlugin]
})
// https://vuex.vuejs.org/zh/guide/hot-reload.html
// if (module.hot) {
//   console.log('hot ture');
//   //可热重载模块
//   module.hot.accept([cart], () => {
//     // 获取更新后的模块
//     // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
//     const newModuleA = cart
//     // 加载新模块
//     console.log('hotupdate');
//     store.hotUpdate({
//       modules: {
//         cart: newModuleA
//       }
//     })
//   })
// }

export default store