<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home: (1) props/$emit</router-link> |
      <router-link to="/about">About：(2) ref/$refs</router-link> |
      <router-link to="/parent">parent：(3) $parent/$child</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
