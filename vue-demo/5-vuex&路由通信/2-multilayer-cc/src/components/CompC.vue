<template>
  <div>
    <h2>CompC</h2>
    <div>{{compATitle}}</div>
    <comp-d></comp-d>
  </div>
</template>
<script>
import CompD from './CompD'
export default {
  inject: ['compATitle'],
  inheritAttrs: false,
  components: {
    CompD,
  },
  created() {
    console.log(666, this.$listeners);
  },
}
</script>
<style lang="">
  
</style>