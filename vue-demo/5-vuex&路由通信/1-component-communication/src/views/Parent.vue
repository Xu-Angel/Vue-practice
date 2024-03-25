<template>
  <div>
    <h1>This is a Parent Page</h1>
    <button @click="handleClick">get Child</button><span>{{txt}}</span>
    <ParentChild></ParentChild>
  </div>
</template>
<script>
import ParentChild from '@/components/ParentChild.vue'
export default {
  components: {
    ParentChild,
  },
  data() {
    return {
      txt: ''
    }
  },
  methods: {
    handleClick() {
      this.txt = this.$children[0].txt
    },
    changeTxt() {
      this.txt = 'change from child'
    }
  },
}
</script>
<style lang="">
  
</style>