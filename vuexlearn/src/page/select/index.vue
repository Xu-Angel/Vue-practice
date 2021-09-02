<template>
  <div class="content">
    <el-select v-model="selectData" v-lazy-load="lazyOption" filterable>
      <el-option v-for="item in data" :key="item.id" value="item.id" :label="item.name"></el-option>
    </el-select>
  </div>
</template>

<script>
/*eslint-disable*/
import { throttle } from 'lodash'
export default {
  data() {
    return {
      data: [],
      selectData: '',
      lazyOption: {
        loadData: this.loadData,
        distance: 20,
        scrollBody: '.el-scrollbar__wrap', // 为el-select 滚动容器的DOM元素的class选择器
        callback: () => {
          // 这里是在组件销毁前, 移除监听事件.
          console.log('d')
          this.$once('hook:beforeDestroy', () => fn())
        },
      },
    }
  },
  created() {
    this.loadData()
  },
  watch: {},
  methods: {
    loadData() {
      const arr = []
      for (let i = 0; i < 100; i++) {
        arr.push({
          id: new Date().getTime() + Math.random(),
          name: '双十一' + new Date().getTime(),
        })
      }
      this.data = [...this.data, ...arr]
    },
  },
  directives: {
    'lazy-load': {
      /**
       * el - 指令所绑定的元素DOM
       * binding - 传入指令的其他附带参数
       *    name - 指令名
       *    value  - 指令绑定的值
       *    oldValue - 绑定的前一个值
       *    expression - 指令绑定的字符串形式的表达式
       *    arg - 传给指令的参数
       *    modifiers - 指令修饰符的对象
       * vnode
       * oldVnode
       */
      inserted: (el, binding) => {
        // 获取scroll 滚动的容器元素,由参数传入
        // 如果没有传入,则默认绑定指令的元素自己
        // 获取懒加载处理函数 , 以及其他参数
        const handleScroll = function(dom, option) {
          console.log(scrollBottom,dom.scrollHeight,option.distance)
          const scrollBottom = dom.scrollTop + dom.clientHeight

          if (dom.scrollHeight - scrollBottom <= option.distance) {
            // 数据加载
            option.loadData()
          }
        }
        const { loadData, distance, scrollBody, callback } = binding.value
        let scrollContainer = el
        if (scrollBody) {
          scrollContainer = el.querySelector(scrollBody) || el
        }

        // 滚动事件监听

        const scroll = throttle(handleScroll.bind(null, scrollContainer, { distance, loadData }), 500)
        scrollContainer.addEventListener('scroll', scroll)

        // 回调时 返回事件销毁函数
        callback(() => {
          scrollContainer.removeEventListener('scroll', scroll)
        })
      },
    },
  },
}
</script>

<style scoped></style>
