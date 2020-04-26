import { STORAGE_KEY } from '../page/todomvc/store/mutations'
const localStoragePlugin = store => { //  可以通过订阅 来进行一些后续操作  一般用于插件形式
  // todomvc例子中 每个action后都更新操作 放到subscribe统一
  store.subscribe((mutation, { moduleTODO: { todos } }) => {
    console.log(todos, 'op');
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

export default localStoragePlugin
