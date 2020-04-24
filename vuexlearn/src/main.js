import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false
// import Vuex from 'vuex'
// import store  from './page/counter/store.js' // single store
// import storeCounter from './page/counter/counterStore.js' // module store
// import {cart,products} from './page/shopping-cart/store' 
import { currency } from './filter'

Vue.filter('currency', currency)

// const store = new Vuex.Store({
//   modules: {
//     moduleCounter: storeCounter,
//     cart,
//     products
//   }
// })

import store from './store'

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
