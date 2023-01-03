<template>
  <div>
    <div v-for="(quiz, idx) in reference.quiz_asks" :key="idx">
      <div v-if="idx === currentIdx" class="row">
        <div class="thumbnail_view02">
          <div v-html="quiz.question"></div>
          <button class="btn icons_fullscreen"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonBrowseQuizField',
  props: {
    reference: {
      type: Object,
      default: () => {},
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped>
.thumbnail_view02 {
  padding: 38px 26px !important;
}
</style>
