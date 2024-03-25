import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

// 5、路由懒加载（两种方式），访问到此路由时候才加载组件
// 其原理是应用了webpack的代码分割和Vue异步组件（import()函数导入的组件）来实现的
const Foo = () => import('../views/Foo.vue')

// 1、使用插件vue-router, 让整个应用都具有路由功能
Vue.use(VueRouter)

// 2、配置路由与组件的映射关系
const routes = [
  {
    path: '/home',
    redirect: '/' // 6、路由重定向
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    alias: '/heihei', // 7、路由重定向
    component: About
  },
  {
    path: '/foo',
    component: Foo // 路由懒加载
    // component: () => import('../views/Foo.vue') // 路由懒加载
  }
]

// 路由实例化对象：整个应用的路由
const router = new VueRouter({
  routes: routes
})

export default router
