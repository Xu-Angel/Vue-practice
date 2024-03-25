<template>
  <div class="home">
    <h1>home page</h1>
    <div>get emit data from child: <span v-show="childData">{{childData}}</span></div>
    <br>
    <HomeChild title="home" @getChildData="getChildData"></HomeChild>    
  </div>
</template>

<script>
// @ is an alias to /src
import HomeChild from '@/components/HomeChild.vue'

export default {
  name: 'Home',
  components: {
    HomeChild
  },
  data() {
    return {
      childData: ''
    }
  },
  methods: {
    getChildData(txt) {
      this.childData = txt
      console.log(txt);
    }
  },
}
</script>
