<template>
  <div>
    detail-id: {{id}}
    <button @click="handleBack">back</button>
  </div>
</template>
<script>
export default {
  props: ['id'],
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
</script>
