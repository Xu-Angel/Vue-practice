<template>
<div>
      <v-home></v-home>
  	<div class="home_container">
        <itemcontainer father-component="home"></itemcontainer>
    </div>
    </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'
import home from '../../components/Home'

export default {
	name: 'home', // 页面路由的名字
  	components: {
      itemcontainer,
      'v-home': home
    },
    /* https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5 */
    provide: function() { // 父组件 提供 给子组件
    return {
      tt: function() {console.log('hjh')},
      obj: {h: 'hi'}
    }
  },
    created(){

    }
}
</script>

<style lang="less" scoped>
    .home_container{

    }
</style>
