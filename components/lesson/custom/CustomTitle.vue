<template>
  <div class="form-group">
    <label for="">{{ title }}</label>
    <div class="col">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'CustomTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>

<style></style>
