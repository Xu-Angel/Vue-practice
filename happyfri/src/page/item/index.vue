<template>
  	<div>
    	<itemcontainer father-component="item"></itemcontainer>
      <p>{{ computedText }}</p>
  	</div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

export default {
	name: 'item',  // 路由的名字
  	components: {
   		itemcontainer
  	},
  	created(){
      //进入题目页面，开始计时
  		this.$store.commit('REMBER_TIME');
    },
    computed: { // 1.0复杂逻辑  应该使用此属性  计算值  在此处算好后 再去模板渲染  https://cn.vuejs.org/v2/guide/computed.html  Bingo!
    // 2.0使用表达式（）
    // 3.0 watch
      computedText: function () {
        const hi = new String('hi') + new Date()
       return hi
      }
    }
}

</script>

<style lang="less">


</style>
