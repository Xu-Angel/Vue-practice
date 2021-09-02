<template>
  <div class="grandfather-container">
    <pre>
      vue2.4中，为了解决该需求，引入了$attrs 和$listeners ， 新增了inheritAttrs 选项。 在版本2.4以前，默认情况下父作用域的不被认作props的属性属性百年孤独，将会“回退”且作为普通的HTML特性应用在子组件的根元素上。
      inheritAttrs：默认值true,继承所有的父组件属性（除props的特定绑定）作为普通的HTML特性应用在
      子组件的根元素上，如果你不希望组件的根元素继承特性设置inheritAttrs: false,但是class属性会继承
    </pre>
    <pre>
      可以看出使用$attrs ，inheritAttrs 属性 能够使用简洁的代码，将父级组件的数据传递给子级组件 
      </pre
    >
    <pre>
        vue2.4版本新增了$listeners 属性，我们在b组件上 绑定 v-on=”$listeners”, 在a组件中，监听c组件触发的事件。就能把c组件发出的数据，传递给a组件
        </pre
    >
    <div>
      <father name="test" age="18" hobby="badminiton" grade="3" :pp="'1'" v-on:upRocket="reciveRocket" />
    </div>
  </div>
</template>

<script>
import Father from './father.vue'
export default {
  name: 'grandFather',
  props: {
    name: {
      default: '',
    },
  },
  components: {
    Father,
  },
  created() {
    console.log(this.$attrs, ' grandFather vm attrs')
    console.log(this.$props, ' grandFather vm props')
  },
  methods: {
    reciveRocket() {
      console.log('reciveRocket success')
    },
  },
}
</script>

<style></style>
