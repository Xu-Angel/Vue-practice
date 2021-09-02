/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('../page/index')
const Count = () => import('../page/counter')
const Cart = () => import('../page/shopping-cart')
const Chat = () => import('../page/chat')
const TODO = () => import('../page/todomvc')
const Select = () => import('../page/select')
const grandFather = () => import('../page/attrs/grandFather')
Vue.use(Router)
const routes = [
  {path: '/', component: HelloWorld},
  { path: '/index', component: HelloWorld},
  { path: '/count', component: Count},
  { path: '/Cart', component: Cart},
  { path: '/Chat', component: Chat},
  { path: '/todo', component: TODO},
  { path: '/select', component: Select},
  { path: '/Attrs', component: grandFather}
]


export  const router = new Router({ routes })
