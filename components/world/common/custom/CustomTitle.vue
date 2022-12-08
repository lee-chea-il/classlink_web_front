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

<style scoped>
#modalLessonView .cont {
  display: block !important;
}

#modalLessonView span {
  color: #454545 !important;
}

#modalLessonView .title {
  display: inline-block !important;
  width: 105px !important;
  font-size: 14px !important;
  margin: 5px 0 !important;
  color: #454545 !important;
}
</style>
