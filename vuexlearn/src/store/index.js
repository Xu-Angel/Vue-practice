import Vue from 'vue'
import Vuex from 'vuex'
import storeCounter from '../page/counter/counterStore.js' // module store
import { cart, products } from '../page/shopping-cart/store' 

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    moduleCounter: storeCounter,
    cart,
    products
  }
})
export default store