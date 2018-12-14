import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/home'
import List from '@/pages/list/list'
Vue.use(Router)

export default new Router({
  routes: [
   /*  {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    } */
    {
      path: '/',
      name: 'Lome',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
