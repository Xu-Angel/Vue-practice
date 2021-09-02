<template>
  <div class="father-container">
    <p>father-container:</p>
    <p>attrs:{{ $attrs }}</p>
    <grand-son v-bind="$attrs" v-on="$listeners" />
    <pre>

1.v-bind="$props": 可以将父组件的所有props下发给它的子组件,子组件需要在其props:{} 中定义要接受的props。

vm.$props: 当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象属性的访问。

2.v-bind="$attrs": 将调用组件时的组件标签上绑定的非props的特性(class和style除外)向下传递。在子组件中应当添加inheritAttrs: false(避免父作用域的不被认作props的特性绑定应用在子组件的根元素上)。

vm.a t t r s : 包 含 了 父 作 用 域 中 不 作 为 p r o p 被 识 别 ( 且 获 取 ) 的 特 性 绑 定 ( c l a s s 和 s t y l e 除 外 ) 。 当 一 个 组 件 没 有 声 明 任 何 p r o p 时 ， 这 里 会 包 含 所 有 父 作 用 域 的 绑 定 ( c l a s s 和 s t y l e 除 外 ) ， 并 且 可 以 通 过 v − b i n d = " attrs :包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="attrs:包含了父作用域中不作为prop被识别(且获取)的特性绑定(class和style除外)。当一个组件没有声明任何prop时，这里会包含所有父作用域的绑定(class和style除外)，并且可以通过v−bind="attrs" 传入内部组件——在创建高级别的组件时非常有用。

3.v-on="将父组件标签上的自定义事件向下传递其子组件可以直接通过emit(eventName)的方式调用。

vm.l i s t e n e r s : 包 含 了 父 作 用 域 中 的 ( 不 含 . n a t i v e 修 饰 器 的 ) v − o n 事 件 监 听 器 。 它 可 以 通 过 v − o n = " listeners: 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="listeners:包含了父作用域中的(不含.native修饰器的)v−on事件监听器。它可以通过v−on="listeners" 传入内部组件——在创建更高层次的组件时非常有用。
    </pre>
  </div>
</template>

<script>
import grandSon from './grandSon.vue'
export default {
  inheritAttrs: false, // 可以让grade hobby 不出现在DOM 属性上
  name: 'Father',
  props: {
    name: {
      type: String,
      default: 'default',
    },
    age: {
      type: String,
      default: 'default',
    },
  },
  components: {
    grandSon,
  },
  created() {
    console.log(this.$attrs, ' fater vm attrs')
    console.log(this.$props, ' fater vm props')
  },
}
</script>

<style></style>
