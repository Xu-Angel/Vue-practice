import Vue from 'vue'
import App from './App.vue'

// tip
Vue.config.productionTip = false

// template -> render(h) -> createVnode()
new Vue({
  render: h => h(App)
}).$mount('#app')

// $mount() -> api
// el: '#app' -> config
