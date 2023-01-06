<template>
  <div class="right_section">
    <div v-for="(item, idx) in examList" :key="idx">
      <div v-if="idx === currentIdx" class="info_area">
        <div class="row">
          <PreviewBtnBox @preview="setPreview" />
          <AnswerNoteTest :value="item.correct_no" />
          <DifficultyExam :value="item.level" />
          <LimitTimeExam :value="item.limit_time" />
          <CommentaryExam :value="item.explain" :checked="item.isCommentary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnswerNoteTest from './AnswerNoteTest.vue'
import CommentaryExam from './CommentaryExam.vue'
import DifficultyExam from './DifficultyExam.vue'
import LimitTimeExam from './LimitTimeExam.vue'
import PreviewBtnBox from './PreviewBtnBox.vue'

export default {
  name: 'LeftField',
  components: {
    PreviewBtnBox,
    AnswerNoteTest,
    DifficultyExam,
    LimitTimeExam,
    CommentaryExam,
  },
  props: {
    examList: {
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
