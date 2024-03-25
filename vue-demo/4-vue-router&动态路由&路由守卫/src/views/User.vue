<template>
  <div>
    user-{{id}}-name-{{name}}
    <button @click="handleToFoo">to Foo</button>
    <button @click="handleBack">back</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: this.$route?.params?.id,
      name: this.$route?.query?.name
    }
  },
  mounted () {
    console.log('mounted', this.$route)
  },
  watch: {
    // 2、路由参数变化，通过watch检测$route的变化
    $route (to, from) {
      console.log('to', to)
      console.log('from', from)
      // 3、获取路由参数
      console.log('params', this.$route.params)
      this.id = this.$route?.params?.id
      this.name = this.$route?.query?.name
    }
  },
  methods: {
    handleBack () {
      this.$router.back()
    },
    handleToFoo () {
      this.$router.push({
        name: 'foo'
      })
    }
  }
}
</script>
