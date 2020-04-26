<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({ // 为组件创建计算属性以返回 Vuex store 中的状态
    products: state => state.products.all
  }),
  methods: mapActions('cart', [// 创建组件方法分发 action
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('products/getAllProducts')
    this.$store.subscribe((mutation, state) => {
      console.log(mutation,'mutaion')
      console.log(state, 'state')
    })
  }
}
</script>
