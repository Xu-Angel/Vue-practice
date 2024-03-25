<template>
  <div>
    bar{{user.name}}{{token}}
    <button @click="handleClick">back-foo</button>
    <button @click="changeName('lisi')">changeName</button>
    <button @click="changeToken">changeToken</button>
    <ul>
      <li>1</li>
      <li>23</li>
      <li>345</li>
      <li>2342</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>0</li>
      <li>0</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>23</li>
      <li>345</li>
      <li>2342</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>0</li>
      <li>0</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
console.log(mapState);
export default {
  data() {
    return {
      // user: this.$store.state.user
    }
  },
  computed: {
    // user() {
    //   return this.$store.state.user
    // },
    // token() {
    //   return this.$store.state.token
    // }
    ...mapState(['user', 'token'])
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    ...mapMutations(['changeName']),
    handleClick() {
      this.$router.push({
        name: 'home'
      })
    },
    // changeName() {
    //   this.$store.state.user.name = 'lisi'
    // },
    changeToken() {
      this.$store.commit({
        type: 'changeToken',
        token: '00000000000'
      })
    }
  },
}
</script>
<style>
  li{
    line-height: 50px;
  }
</style>