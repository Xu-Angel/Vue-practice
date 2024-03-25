<template>
  <div>
    <p :class='{completed: todo.state === "completed"}'>{{todo.text}}</p>
    <button @click="removeTodo">remove</button>
    <button @click="completeTodo">completed</button>
  </div>
</template>
<script>
export default {
  props: ['todo'],
  methods: {
    removeTodo() {
      this.$emit('remove', this.todo.id)
    },
    completeTodo() {
      this.$emit('complete', this.todo.id)
    }
  },
}
</script>
<style>
  .completed{
    text-decoration: line-through;
  }
</style>