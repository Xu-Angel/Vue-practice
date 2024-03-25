<script setup>
import { useMousePosition, useFetch } from './hook.js'
const { x, y } = useMousePosition()
const url = ref('/initial-url')
const { data, error } = useFetch()
// 这样可以重新触发一次
url.value = 'xx/sss'
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
