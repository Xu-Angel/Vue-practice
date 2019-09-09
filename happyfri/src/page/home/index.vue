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
    created(){

    }
}
</script>

<style lang="less" scoped>
    .home_container{

    }
</style>
