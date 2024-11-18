<script setup>
import { ref } from 'vue'

const count = ref(2)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
