export const STORAGE_KEY = 'todos-vuejs'

export const mutations = {
  addTodo(state, todo) {
    console.log(state, todo, 'pp')
    state.todos.push(todo)
  },

  removeTodo (state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  editTodo (state, { todo, text = todo.text, done = todo.done }) {
    const index = state.todos.indexOf(todo)

    state.todos.splice(index, 1, {
      ...todo,
      text,
      done
    })
  }
}
