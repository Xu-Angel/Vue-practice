import Vue from 'vue'
import VueRouter from 'vue-router'

const Foo = () => import('../views/Foo.vue')
const Bar = () => import('../views/Bar.vue')
const User = () => import('../views/User.vue')
const Detail = () => import('../views/Detail.vue')

Vue.use(VueRouter)

// name是命名路由
const routes = [
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
  }
]

const router = new VueRouter({
  routes
})

export default router
