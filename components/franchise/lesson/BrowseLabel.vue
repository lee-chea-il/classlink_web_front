<template>
  <div class="row">
    <label class="col-3 col-lg-3 col-sm-2 cont">{{ title }}</label>
    <div class="col cont">
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrowseLabel',
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
