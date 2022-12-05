<template>
  <div class="cont">
    <span class="title">{{ title }}</span>
    <span>{{ value }}</span>
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
