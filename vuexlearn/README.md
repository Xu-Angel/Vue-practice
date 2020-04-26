# vuexlearn

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

state: state tree

action: sync operation => commit a mutaion

mutation: state => async sideEffective => state

dispatch an action

commit a mutaion

VuexStore = { state, actions, mutaions, getters, namespaced }

helperFn: mapState, mapActions, mapGetters, mapMutaions, createNameSpacedHelpers