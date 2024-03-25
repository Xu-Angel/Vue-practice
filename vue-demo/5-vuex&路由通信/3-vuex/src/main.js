import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 挂载到Vue实例中，通过this.$store访问
  store, 
  render: h => h(App)
}).$mount('#app')
