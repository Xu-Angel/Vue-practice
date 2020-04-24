<template>
  <div id="app">
    <keep-alive exclude="Detail"> // 执行路由内容加载后 不再请求 直接放置内存 除开 Detail
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
