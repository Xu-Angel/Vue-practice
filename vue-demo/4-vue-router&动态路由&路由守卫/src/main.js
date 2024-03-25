import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// console.log(router)

// 3、将路由实例对象挂载到Vue实例对象中，
// 使应用可以通过this.$route访问当前路由，通过this.$router访问所有路由对象
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
