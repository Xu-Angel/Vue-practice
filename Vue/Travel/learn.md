`props`单项数据流，父流向子    怎么改呢  因为单项 可以用中转--- 子组件中用一个变量接住  改变量


`js表达式` 可以模板语法里面写

`ref` 指代   操作DOM  this.$refs.XXX

`原生事件`  native
现在在组件上使用 v-on 只会监听自定义事件 (组件用 $emit 触发的事件)。如果要监听根元素的原生事件，可以使用 .native 修饰符，比如：
``<my-component v-on:click.native="doSomething"></my-component>``

`非父子组件传值`  Bus总线/vueX
```js
Vue.prototype.bus = new Vue()
this.bus.$emit()
mounted: function () {
  this.bus.$on()
  }
```
