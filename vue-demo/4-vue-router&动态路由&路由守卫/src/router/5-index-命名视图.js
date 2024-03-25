import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const Foo = () => import('../views/Foo.vue')
const Bar = () => import('../views/Bar.vue')
const User = () => import('../views/User.vue')
const Detail = () => import('../views/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home', // 命名路由
    components: { // 命名视图，name为视图名称，没有的话为默认视图
      default: User,
      foo: Foo,
      bar: Bar
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
