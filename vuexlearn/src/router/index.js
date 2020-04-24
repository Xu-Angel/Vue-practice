import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('../page/helloWorld')
const Count = () => import('../page/counter')
Vue.use(Router)
const routes = [
  {path: '/', component: HelloWorld},
  { path: '/hello', component: HelloWorld},
  { path: '/count', component: Count}
]


const router = new Router({ routes })

export default router