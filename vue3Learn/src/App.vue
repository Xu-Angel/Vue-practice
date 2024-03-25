<script setup>
import { ref, reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const count = ref(0)
const cc = ref(0)
const state = reactive({
  count
})
const stateObj = reactive({
  count: 9
})
console.log(state.count, cc.value, cc, state, stateObj) // 0

state.count = 1
cc.value = 1
console.log(count.value, cc.value) // 1
// 自定义指令 只有当所需功能只能通过直接的 DOM 操作来实现时，才应该使用自定义指令。其他情况下应该尽可能地使用 v-bind 这样的内置指令来声明式地使用模板，这样更高效，也对服务端渲染更友好。
const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<template>
  <input v-focus />
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/fetchData">fetchData</RouterLink>
      <RouterLink to="/mouse">mouse</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
