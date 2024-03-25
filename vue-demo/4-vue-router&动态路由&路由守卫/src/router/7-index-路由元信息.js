import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const Foo = () => import('../views/Foo.vue')
const Bar = () => import('../views/Bar.vue')
const User = () => import('../views/User.vue')
const Detail = () => import('../views/Detail.vue')
const Login = () => import('../views/Login.vue')

Vue.use(VueRouter)

// name是命名路由
const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: User,
      foo: Foo,
      bar: Bar
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { // 路由元信息
      requiresAuth: true
    }
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    children: [ // 嵌套第一层
      {
        path: 'foo',
        name: 'foo',
        component: Foo,
        children: [ // 嵌套第二层
          {
            path: 'detail/:id',
            name: 'detail',
            component: Detail,
            props: (route) => {
              return {
                id: route.params.id
              }
            }
          }
        ]
      },
      {
        path: 'bar',
        name: 'bar',
        component: Bar
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      console.log('login-beforeEnter')
      // next({ name: 'user' })
      next()
    }
  }
]

const router = new VueRouter({
  routes
})
const auth = {
  loggedIn () {
    return false
  }
}
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 数组中的some函数，只要元素中有一个元素为true，some()函数就返回true
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
