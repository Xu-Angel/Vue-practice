<template>
  <div>
    <div>login</div>
    {{key}}--{{count}}
    <router-link :to="{name: 'user'}">
      <button>to user</button>
    </router-link>
    <router-link :to="{name: 'home'}">
      <button>login</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      key: 1,
      count: 0
    }
  },
  watch: {
    $route (to, from) {
      // this.count++
      console.log('watch-$route')
      this.key = this.$route.query.key
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('create')
  },
  beforeUpdate () {
    console.log('beforeUpdate', this.key)
  },
  updated () {
    console.log('updated', this.key)
  },
  beforeRouteEnter (to, from, next) {
    // 所有钩子执行完，与login映射的路由才被comfirm
    // 在渲染该组件的对应路由被 confirm 前调用
    // 组件创建前调用
    console.log('beforeRouteEnter')
    next(vm => {})
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 比如/login到/login?type=1时
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用
    // 这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('beforeRouteLeave')
    next()
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>
