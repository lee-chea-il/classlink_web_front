<template>
  <div class="cont02">
    <div class="title">{{ title }}</div>
    <span class="title03-1">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomSubTitle',
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
