<template>
  <div>
    <button @click="handleClick"><slot></slot></button>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.$emit("click");
    },
  },
};
</script>

<style></style>
