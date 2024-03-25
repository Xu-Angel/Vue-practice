官网-文档：https://vuejs.org/
中文网-文档：https://cn.vuejs.org/
## vue语法基础

### 插值
- `v-bind`，简写为`:`
### 事件处理
- v-on，简写@
### 计算属性
- 依赖响应属性的属性
- 可缓存
- 一对多
- 其与函数区别
  - 前者只有依赖的属性发生变化时，才会计算，否则使用缓存值；函数每次调用时都需要计算
### 侦听属性
  - 数据变化需要调用异步请求时
  - 多个值依赖一个值时，多对一的关系
  - 深度观察
    - 对象监听
    - 对象指定属性的监听
  - 立即执行
    - 数据初始化时就开始调用（不管数据是否有变化）
### 条件渲染
- v-if: 事件和子组件会被销毁和重建，切换开销大; 切换少时使用
- v-show: 基于样式display的切换，渲染开销大，不适合首屏渲染; 发生频繁切换时使用

### 列表渲染
- v-for，数组和对象
- v-for与v-if不要同时放在一个元素上
- key属性提高复用性
### class&style
- 数组与对象写法
### 表单
- v-model，实现数据双向绑定
- 原理

## 练习

点击按钮时，count 和 double 会增加
- double 的值为 count 的双倍
- double 需要用 computed 来实现

# 单元测试
## vue-cli

Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统

- 通过 @vue/cli 实现的交互式的项目脚手架。
- 通过 @vue/cli + @vue/cli-service-global 实现的零配置原型开发。
- 一个运行时依赖 (@vue/cli-service)，该依赖：
  - 可升级；
  - 基于 webpack 构建，并带有合理的默认配置；
  - 可以通过项目内的配置文件进行配置；
  - 可以通过插件进行扩展。
- 一个丰富的官方插件集合，集成了前端生态中最好的工具。
- 一套完全图形化的创建和管理 Vue.js 项目的用户界面。
## jest

Jest使用“匹配器”让你可以用各种方式测试你的代码

## vue-test-utils

Vue Test Utils 是 Vue.js 官方的单元测试实用工具库。

## todo-list案例

基于单文件组件实现增删改查功能
# 1-vue-router

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 组件间的通信

### 父子组件间的通信
  - `props/$emit`
  - `ref/$refs`
  - `$parent/$children`

### 多层级父子组件间的通信
  - `provide/inject`: 依赖注入
  - `$attrs/$listeners`

### 非关系组件通信
  - `EventBus`: Vue的实例对象

## vuex 状态管理器
