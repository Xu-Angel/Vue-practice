import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
