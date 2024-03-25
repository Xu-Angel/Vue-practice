<template>
  <div id="app">
    <!-- 4、告诉路由，其映射的组件挂载的位置 -->
    <router-link :to="{name:'user'}">to user</router-link>
    <button @click="handleToUser">to User</button>
    <router-view></router-view>
    <!-- 命名视图的name值与配置路由的组件属性一致 -->
    <router-view name="foo"></router-view>
    <router-view name="bar"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    handleToUser () {
      this.$router.push({
        name: 'user'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
