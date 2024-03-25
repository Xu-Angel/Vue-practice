import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用动态加载
const Home = () => import('../views/home.vue')
const Foo = () => import('../views/foo.vue')
const Bar = () => import('../views/bar.vue')

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home
      components: {
        default: Home,
        // foo: Foo,
        // bar: Bar
      },
      beforeEnter: (to, from, next) => {
        console.log('login-beforeEnter');
        console.log(11, to,from);
        // next({name: 'bar'})
        next()
      }
    },
    {
      path: '/foo/:id',
      name: 'foo',
      component: Foo,
      props: (route) => {
        console.log(666, route);
        return {
          id: route.params.id
        }
      },
      children: [
        {
          path: 'foo1',
          name: 'foo1',
          component: Foo
        }
      ]
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar,
      meta: {
        title: 'bar',
        requireAuth: true
      }
    }
  ],
  scrollBehavior(to,from,savePosition) {
    // savePosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    // return 期望滚动到哪个的位置--位置信息   
    console.log(to.hash);
    if (savePosition) {
      return savePosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  // scrollBehavior (to, from, savedPosition) {
  //   console.log(to.hash);
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     }
  //   }
  // }
})

// router.beforeEach((to, from, next) => {
//   console.log(777, to, from);
//   // console.log(next());
//   console.log(to.matched.some(record => record.meta.requireAuth));
//   // if(to.meta.requireAuth) {
//   //   next({
//   //     name: 'home'
//   //   })
//   // } else {
//   //   next()
//   // }
//   next()
// })