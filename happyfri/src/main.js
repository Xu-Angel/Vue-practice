import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
	router,
	store, //  把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
})// .$mount('#app')
