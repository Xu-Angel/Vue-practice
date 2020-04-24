import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false
import Vuex from 'vuex'
// import store  from './page/counter/store.js' // single store
import storeCounter from './page/counter/counterStore.js' // module store
const store = new Vuex.Store({
  modules: {
    moduleCounter:storeCounter
  }
})
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
