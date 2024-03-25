// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// // 组件懒加载，当路由被访问时，其组件才会加载
// const User = () => import('../views/user.vue')
// const Foo = () => import('../views/Foo.vue')

// // 使用vue-router插件
// Vue.use(VueRouter)

// // 定义路由：每个路由映射一个组件
// // 匹配的优先级和 config 的顺序有关系
// const routes = [
//   // 路由重定向
//   {
//     path: '/home',
//     redirect: '/'
//   },
//   // 设置别名后，可以通过别名访问组件
//   {
//     path: '/',
//     alias: '/heihei',
//     component: Home
//   },
//   // 当前组件的路由守卫
//   {
//     path: '/foo/1',
//     component: Foo,
//     beforeEnter: (to, from, next) => {
//       console.log('foo/1 before enter', to, from)
//       // 设置了next()才能继续访问组件
//       next()
//     }
//   },
//   {
//     path: '/user/:id',
//     component: User
//   },
//   {
//     path: '/about',
//     component: About
//   }
// ]

// // 路由实例化对象：实例化路由
// const router = new VueRouter({
//   // mode: "history", // 路由模式，默认是hash模式
//   base: process.env.BASE_URL,
//   routes
// })

// 4、路由守卫-全局前置守卫：所有路由访问前都需要调用
// router.beforeEach((to, from, next) => {
//   // to and from are Route Object,next() must be called to resolve the hook
//   next()
// })

// // 全局后置守卫：离开理由钱访问都需要调用
// // 没有next()
// router.afterEach((to, from) => {
//   // to and from are Route Object
// })

// export default router
