<template>
  <div>
    <h2>child-component</h2>
    props data : <strong>{{title}}</strong>
    <div @click="handleClick"><button>$emit</button></div>
  </div>
</template>
<script>
export default {
  props: ['title'],
  methods: {
    handleClick() {
      let rendomDatas = [
        'my data is getting from child',
        'data get from home child',
        'my name is homechild'
      ]
      this.$emit('getChildData', rendomDatas[Math.floor(Math.random()*rendomDatas.length)])
    }
  },
}
</script>
<style lang="">
  
</style>