<template>
  <div class="divide_area right">
    <!-- [개발참조] 퀴즈 컨텐츠 -->
    <LessonBrowseQuizField
      :show="referenceItem.uploadType === 'quiz'"
      :reference="referenceItem"
      :currentIdx="currentIdx"
      @pagination="paginationEmit"
      @quiz-preview="$emit('quiz-preview', $event)"
    />
    <!-- /. 퀴즈 컨텐츠 -->

    <!-- [개발참조] 쪽지시험 컨텐츠 -->
    <LessonBrowseNoteTest
      :show="referenceItem.uploadType === 'test'"
      :reference="referenceItem"
      :currentIdx="currentIdx"
      @pagination="paginationEmit"
      @test-preview="$emit('test-preview', $event)"
    />
    <!-- /. 쪽지시험 컨텐츠 -->

    <!-- [개발참조] 동영상,문서 컨텐츠 -->
    <LessonBrowseContent
      :show="isContent(referenceItem.uploadType)"
      :reference="referenceItem"
    />
    <!-- /. 동영상,문서 컨텐츠 -->
  </div>
</template>

<script>
import LessonBrowseContent from './LessonBrowseContent.vue'
import LessonBrowseNoteTest from './LessonBrowseNoteTest.vue'
import LessonBrowseQuizField from './LessonBrowseQuizField.vue'
export default {
  name: 'LessonBrowseRightField',
  components: {
    LessonBrowseQuizField,
    LessonBrowseNoteTest,
    LessonBrowseContent,
  },
  props: {
    referenceItem: {
      type: Object,
      default: () => {},
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    paginationEmit(item, idx) {
      this.$emit('pagination', item, idx)
    },
    isContent(item) {
      if (item === 'quiz' || item === 'test') return false
      else return true
    },
  },
}
</script>
