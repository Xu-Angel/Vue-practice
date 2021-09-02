<template>
  <div class="hello">
   <router-link to="/count">Counter</router-link>
   <br>
   <router-link to="/Cart">shopping-cart</router-link>
   <br>
   <router-link to="/Chat">Chat</router-link>
   <br>
   <router-link to="/todo">todo</router-link>
   <router-link to="/select">select</router-link>
   <router-link to="/Attrs">Attrs</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
