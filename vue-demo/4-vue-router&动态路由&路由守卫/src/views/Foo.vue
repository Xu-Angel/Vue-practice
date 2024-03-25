<template>
  <div>
    Foo
    <button @click="handleToDetail">to Detail</button>
    <button @click="handleBack">back</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted () {
    // 拿不到1，因为设置的不是动态路由
    console.log(123, this.$route)
  },
  methods: {
    handleBack () {
      this.$router.back()
    },
    handleToDetail () {
      this.$router.push({
        name: 'detail',
        params: {
          id: 1
        }
      })
    }
  }
}
</script>
