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
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('moduleCounter')
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