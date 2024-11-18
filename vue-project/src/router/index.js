import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/fetchData',
      name: 'fetchData',
      component: () => import('../views/fetchData.vue')
    },
    {
      path: '/mouse',
      name: 'mouse',
      component: () => import('../views/mouse.vue')
    }
  ]
})

export default router
