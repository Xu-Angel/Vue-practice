<template>
  <div class="loginContainer">
    <form action="">
      <h1>登录</h1>
      <input v-model="username" class="inputStyle" type="text" placeholder="账号"><br/>
      <input v-model="password" class="inputStyle" type="password" placeholder="密码"><br/>
      <button class="loginStyle" @click="login">登录</button>
    </form>
  </div>
</template>

<script>
import '../assets/css/login.css'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(123)
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(() => {
        console.log(12)
        this.$router.push({
          name: 'Photos'
        })
      })
    }
  }
}
</script>
