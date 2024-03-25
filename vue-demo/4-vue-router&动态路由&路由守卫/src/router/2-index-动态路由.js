import Vue from 'vue'
import VueRouter from 'vue-router'

const User = () => import('../views/User.vue')

Vue.use(VueRouter)

const routes = [
  // 1.路由参数变化,由/user/1导航到/user/2，
  // 直接复用组件，组件生命周期钩子不会重新调用
  {
    path: '/user/:id',
    component: User
  }
]

const router = new VueRouter({
  routes
})

export default router
