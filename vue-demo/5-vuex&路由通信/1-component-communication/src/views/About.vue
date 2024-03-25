<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="sayHi">say hi to aboutChild</button> <span>:{{txt}}</span>
    <AboutChild ref="aboutChild"></AboutChild>
  </div>
</template>

<script>
import AboutChild from '@/components/AboutChild.vue'
export default {
  components: {
    AboutChild,
  },
  data() {
    return {
      txt: ''
    }
  },
  methods: {
    sayHi() {
      const { aboutChild } = this.$refs
      console.log(aboutChild);
      aboutChild.sayHello()
      this.txt = aboutChild.txt
    }
  },
}
</script>