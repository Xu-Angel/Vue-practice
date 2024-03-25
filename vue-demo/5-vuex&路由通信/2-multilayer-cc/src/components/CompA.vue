<template>
  <div>
    <h2>CompA</h2>
    <comp-b title="this is a message from comA" @a="handleA" @b="handleB" @click="handleClick"></comp-b>
  </div>
</template>
<script>
import CompB from './CompB'
export default {
  components: {
    CompB,
  },
  provide() {
    return {
      compATitle: 'foo........'
    }
  },
  methods: {
    handleA() {

    },
    handleB() {

    },
    handleClick() {
      
    }
  },
}
</script>
<style lang="">
  
</style>