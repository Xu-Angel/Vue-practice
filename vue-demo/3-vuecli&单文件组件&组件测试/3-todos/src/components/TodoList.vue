<template>
  <div>
    <h3>todo-list</h3>
    <input type="text" @keyup.enter="addTodo" v-model="newTodo">
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <todo-item :todo='todo' @remove="removeTodo" @complete="completeTodo"></todo-item>
      </li>
    </ul>
  </div>
</template>
<script>
import TodoItem from './TodoItem.vue'
export default {
  components: {
    TodoItem
  },
  data() {
    return {
      id: 1,
      newTodo: '',
      todoList: []
    }
  },
  methods: {
    addTodo() {
      // 添加 todo 的逻辑实现
      this.todoList.push({
        id: this.id++,
        text: this.newTodo,
        state: 'active'
      })
      this.newTodo = ''
    },
    removeTodo(id) {
      console.log(id)
      this.todoList = this.todoList.filter(todo => todo.id !== id)
    },
    completeTodo(id) {
      // mvvm
      const todo = this.todoList.find(todo => todo.id === id)
      if(todo) {
        todo.state = 'completed'
      }
    }
  },
}
</script>
<style lang="">
  
</style>