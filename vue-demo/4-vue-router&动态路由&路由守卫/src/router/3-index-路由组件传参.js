import Vue from 'vue'
import VueRouter from 'vue-router'

const Detail = () => import('../views/Detail.vue')

Vue.use(VueRouter)

const routes = [
  // 1、路由组件传参：在路由配置时候添加props，在相应的组件添加props属性获取相应的参数
  {
    path: '/detail/:id',
    name: 'detail',
    props: (route) => {
      // route -> 当前路由对象
      console.log('props', route)
      return {
        id: route.params.id
      }
    },
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
