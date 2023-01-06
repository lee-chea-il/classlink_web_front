<template>
  <div class="right_section">
    <div v-for="(item, idx) in quizList" :key="idx">
      <QuizRightFormField
        :show="idx === currentIdx"
        :item="item"
        @preview="setPreview"
      />

      <QuizCommentary :show="idx === currentIdx" />
    </div>
  </div>
</template>

<script>
import QuizCommentary from './QuizCommentary.vue'
import QuizRightFormField from './QuizRightFormField.vue'

export default {
  name: 'QuizRightSection',
  components: {
    QuizCommentary,
    QuizRightFormField,
  },
  props: {
    quizList: {
      type: Array,
      default: () => [],
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setPreview(e, idx) {
      this.$emit('preview', e, idx)
    },
  },
}
</script>

<style scoped>
input:read-only {
  background: white !important;
}
</style>
