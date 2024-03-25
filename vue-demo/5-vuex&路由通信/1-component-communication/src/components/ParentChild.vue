<template>
  <div>
    <h2>parent--child</h2>
    <button @click="handleChange">change</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      txt: 'hello parent'
    }
  },
  methods: {
    handleChange() {
      this.$parent.changeTxt()
    }
  },
}
</script>
<style lang="">
  
</style>