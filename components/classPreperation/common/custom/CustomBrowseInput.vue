<template>
  <div class="mult">
    <div class="tit stit">{{ title }}</div>
    <div class="cnt">
      <input
        type="text"
        :placeholder="placeholder"
        class="form-control form-inline"
        :value="value"
        readOnly
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomBrowseInput',
  props: {
    title: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: [Number, String],
      default: '',
    },
  },
}
</script>

<style scoped>
.form-control:disabled,
.form-control[readonly] {
  background: white !important;
}
</style>
