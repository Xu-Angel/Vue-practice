<template>
  <div id="app">
    <Foo></Foo>
    <Bar></Bar>
  </div>
</template>

<script>
import Foo from '@/components/Foo.vue'
import Bar from '@/components/Bar.vue'
export default {
  name: 'App',
  components: {
    Foo, Bar
  },
  mounted() {
    // this.$store: Strore的实例化对象
    console.log(this.$store.state.user);
  },
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
