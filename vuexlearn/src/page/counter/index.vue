<template>
  <div>
    <p>current score {{counts }}, count is {{evenOrOdd}}</p>
    <p>{{hi}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
// import {mapGetters, mapState, mapActions} from 'vuex'

// 方式三
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('moduleCounter') // 创建基于命名空间的组件绑定辅助函数。其返回一个包含 mapState、mapGetters、mapActions 和 mapMutations 的对象。它们都已经绑定在了给定的命名空间上
//
export default {
  /* 方式一 */
//   computed: {
//     ...mapState({
//       hi: state => state.moduleCounter.hi,
//       counts: state => state.moduleCounter.counts
//     }),
//     ...mapGetters({
//       'evenOrOdd': 'moduleCounter/evenOrOdd'
//     })
//     },
//   methods: {
//     ...mapActions({
//       'increment': 'moduleCounter/increment',
//     'decrement': 'moduleCounter/decrement',
//     'incrementIfOdd': 'moduleCounter/incrementIfOdd',
//     'incrementAsync': 'moduleCounter/incrementAsync'})
//     }
// }
/* 方式二 */
  // computed: {
  //   ...mapState('moduleCounter',{
  //     hi: state => state.hi,
  //     counts: state => state.counts
  //   }),
  //   ...mapGetters('moduleCounter',{
  //     'evenOrOdd': 'evenOrOdd'
  //   })
  //   },
  // methods: {
  //   ...mapActions('moduleCounter', {
  //     'increment':  'increment',
  //   'decrement': 'decrement',
  //   'incrementIfOdd': 'incrementIfOdd',
  //   'incrementAsync': 'incrementAsync'})
  //   }
  /* 方式三 */
    computed: {
    ...mapState({
      hi: state => state.hi,
      counts: state => state.counts
    }),
    ...mapGetters({
      'evenOrOdd': 'evenOrOdd'
    })
    },
  methods: {
    ...mapActions({
      'increment':  'increment',
    'decrement': 'decrement',
    'incrementIfOdd': 'incrementIfOdd',
    'incrementAsync': 'incrementAsync'})
    }
}
</script>

<style>

</style>