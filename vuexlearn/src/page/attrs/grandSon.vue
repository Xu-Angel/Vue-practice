<template>
  <div calss="grandSon-container">
    <p>grandSon-container:</p>
    <p>attrs:{{ $attrs }}</p>
    <button @click="startUpRocket">我要发射火箭</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 可以让pp不出现在DOM 属性上
  name: 'grandSon',
  props: {
    hobby: {
      type: String,
    },
    grade: {
      type: String,
    },
  },
  created() {
    console.log(this.$attrs, 'son vm attrs')
    console.log(this.$props, ' son vm props')
  },
  methods: {
    startUpRocket() {
      console.log('startUpRocket')
      this.$emit('upRocket')
    },
  },
}
</script>

<style></style>
