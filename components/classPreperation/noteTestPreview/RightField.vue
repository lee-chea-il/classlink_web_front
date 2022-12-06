<template>
  <div id="pdfItem" class="right_area">
    <!-- 오른쪽영역 -->
    <div v-for="(test, idx) in testList" :key="idx">
      <div v-if="idx === currentIdx" class="question_area">
        <!-- 쪽지시험 -문제 -->
        <AnswerField
          :currentIdx="currentIdx"
          :length="testList.length"
          :noteTest="test"
        />
        <!-- /. 쪽지시험 -문제 -->

        <!-- 쪽지시험 정답 -->
        <AnswerArea :exampleList="test.exampleList" :noteTest="test" />
        <!-- /. 쪽지시험 정답 -->

        <!-- 쪽지시험 페이징 -->
        <ArrowBox :length="testList.length" @pagination="setPagination" />
        <!-- /. 쪽지시험 페이징 -->
      </div>
    </div>
    <!-- /. 오른쪽영역 -->
  </div>
</template>

<script>
import ArrowBox from '../common/ArrowBox.vue'
import AnswerArea from './AnswerArea.vue'
import AnswerField from './AnswerField.vue'
export default {
  name: 'NoteTestRightField',
  components: { AnswerArea, AnswerField, ArrowBox },
  props: {
    testList: {
      type: Array,
      default: () => [],
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setPagination(e, idx) {
      this.$emit('pagination', e, idx)
    },
  },
}
</script>

<style scoped>
/* #modalPreviewQuiz .answer_area04,
#modalPreviewTest .answer_area04 {
  height: 310px;
} */
</style>
