<template>
  <div>
    <h2>Bar</h2>
    <div>姓名：{{user.name}} 年龄: {{user.age}}</div>
    <div>{{}}</div>
    <button @click="handleChange">change</button>
    <button @click="handleChangeName">changeName</button>
    <button @click="handleChangeAge">changeAge</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
console.log(mapState(['user', 'token']))
export default {
  data() {
    return {
      // user: this.$store.state.user
    }
  },
  methods: {
    handleChange() {
      this.$store.state.user.age++
    },
    handleChangeName(){
      console.log(this.$store);
      this.$store.commit('changeName', 'zy')
    },
    handleChangeAge() {
      // 整个对象都作为载荷传给 mutation 函数
      this.$store.commit({
        type: 'changeAge',
        age: 22
      })
    }
  },
  computed: {
    ...mapState(['user', 'token'])
  },
  mounted () {
    console.log(this.$store.getters);
    // 1、通过属性方式访问
    console.log(this.$store.getters.tenYearsOld);
    // 2、通过方法访问
    // 3、mapGetters辅助函数, 与mapState用法一样
  }
}
</script>