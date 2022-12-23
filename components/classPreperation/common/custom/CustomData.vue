<template>
  <div class="form-group cont" :class="{ div_cont: first }">
    <label for="">{{ title }}</label>
    <div class="col">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'CustomData',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    first: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
