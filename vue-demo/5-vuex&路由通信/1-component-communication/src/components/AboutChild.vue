<template>
  <div>
    <h2>About-child</h2>
    <div>。。。</div>
    <button @click="handleChange">change</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      txt: 'hello about'
    }
  },
  methods: {
    sayHello() {
      console.log(this.txt);
    },
    handleChange() {
      this.txt = 'hi about'
      console.log(this);
    }
  },
}
</script>
<style lang="">
  
</style>