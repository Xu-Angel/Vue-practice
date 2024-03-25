<template>
  <div>
    <h2>CompB</h2>
    <!-- props外，父组件传过来的属性 -->
    <comp-c v-bind="$attrs" v-on="$listeners"></comp-c>
    <button @click="getListeners">getListeners</button>
  </div>
</template>
<script>
import CompC from './CompC'
export default {
  components: {
    CompC,
  },
  inheritAttrs: true, // 不显示props外，父组件传过来的属性
  created() {
    console.log(this.$attrs)
    // {title: "this is a message from comA"}
  },
  methods: {
    getListeners() {
      console.log(this.$listeners);
      // {a: ƒ, b: ƒ, click: ƒ}
    }
  },
}
</script>
<style lang="">
  
</style>