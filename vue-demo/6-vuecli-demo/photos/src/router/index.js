import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

const Photos = () => import('../views/photos.vue')
const Login = () => import('../views/login.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos,
      meta: {
        isAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    const { token } = store.state
    if (token) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})

export default router
