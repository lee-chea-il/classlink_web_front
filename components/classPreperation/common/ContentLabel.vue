<template>
  <div class="row">
    <label for="" class="data_title cont">{{ title }}</label>
    <div class="col cont">
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentLabel',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
