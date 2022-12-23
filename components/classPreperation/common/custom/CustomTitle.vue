<template>
  <div class="cont">
    <span class="title">{{ title }}</span>
    <span class="white_txt">{{ value }}</span>
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

#modalLessonView .cont {
  display: flex !important;
  align-items: center;
  justify-content: flex-start;
}

.white_txt {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
