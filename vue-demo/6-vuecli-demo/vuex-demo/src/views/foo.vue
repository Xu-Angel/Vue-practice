<template>
  <div>
    foo{{name}}
    <div>{{id}}</div>
    <button @click="handleClick">back-home</button>
    <router-link to="foo1">foo1</router-link>
    <router-link :to="{name:'foo1'}">foo1</router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      name: this.$store.state.user.name
    }
  },
  methods: {
    handleClick() {
      // this.$router.push({
      //   name: 'bar'
      // })
      this.$router.back()
    }
  },
}
</script>