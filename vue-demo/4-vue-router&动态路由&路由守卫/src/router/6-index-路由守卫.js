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
    component: Home
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

const isAuthenticated = true

// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('all-router beforeEach')
  // to and from are Route Object,next() must be called to resolve the hook+
  // next()之前无法渲染App.vue中<router-view></router-view>的组件
  // next()函数和push函数的参数一致
  console.log('to', to) // 目标路由对象
  console.log('from', from) // 正要离开的路由
  // 如果用户未能验证身份，则 `next` 会被调用两次
  if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
    // next(false)
  }
})

// router.beforeResolve((to, from) => {
//   console.log('beforeResolve')
// })

router.afterEach((to, from) => {
  // ...
  console.log('afterEach')
})

export default router
