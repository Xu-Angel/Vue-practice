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
组件问题：
  标签规范：is 替换代表 is="XXX组件"
  ref="XXX" 指代DOM this.$refs.XXX  ref  代表引用 可以代表组件 DOM等
V-ONCE 写入热内存中 只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

```
动画：
多组件/元素   CSS/JS 钩子   translation-group
动画封装：组件内控制 配合slot
动态过渡：通过变量双向绑定  状态过渡
```
```
<router-view></router-view>
单文件组件：
Router-view -->   Router ->(path) -> name:path? -> path.vue

router-link: 包裹起来（点击的内容和本标签）
<router-link to="/list">去列表</router-link>
```
// 总结：
推荐学习顺序L: 过完基础Api->Vue-Router->VueX->SSR->Vue-推荐资源（awesome-vue）->源码
