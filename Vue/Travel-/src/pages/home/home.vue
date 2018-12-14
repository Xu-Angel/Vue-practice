<template>
  <div>
    <div class="home">home</div>
    <router-link to="/list">列表页</router-link>
  </div>
  <!--
    <div class="home">home</div>
    <router-link to="/list">列表页</router-link>
   -->
   <!-- 被注释的写法 会报错  要有个根容器包裹 -->
</template>
<script>
export default {
  name: 'home'
}
</script>
<style>
  .home {
    font-size: 50px;
  }
</style>


