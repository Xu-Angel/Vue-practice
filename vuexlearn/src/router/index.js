import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('../page/helloWorld')
const Count = () => import('../page/counter')
const Cart = () => import('../page/shopping-cart')
Vue.use(Router)
const routes = [
  {path: '/', component: HelloWorld},
  { path: '/hello', component: HelloWorld},
  { path: '/count', component: Count},
  { path: '/Cart', component: Cart}
]


const router = new Router({ routes })

export default router