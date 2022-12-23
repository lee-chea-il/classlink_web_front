<template>
  <div class="divide_area right">
    <!-- [개발참조] 퀴즈 컨텐츠 -->
    <BrowseQuiz
      :show="referenceItem.category === '03'"
      :reference="referenceItem"
      :currentIdx="currentIdx"
      :pageRoot="pageRoot"
      @pagination="paginationEmit"
      @quiz-preview="$emit('quiz-preview', $event)"
    />
    <!-- /. 퀴즈 컨텐츠 -->

    <!-- [개발참조] 쪽지시험 컨텐츠 -->
    <BrowseNoteTest
      :show="referenceItem.category === '04'"
      :reference="referenceItem"
      :currentIdx="currentIdx"
      :pageRoot="pageRoot"
      @pagination="paginationEmit"
      @test-preview="$emit('test-preview', $event)"
    />
    <!-- /. 쪽지시험 컨텐츠 -->

    <!-- [개발참조] 동영상,문서 컨텐츠 -->
    <BrowseContent
      :pageRoot="pageRoot"
      :show="isContent(referenceItem.category)"
      :reference="referenceItem"
    />
    <!-- /. 동영상,문서 컨텐츠 -->
  </div>
</template>

<script>
import BrowseContent from './BrowseContent.vue'
import BrowseNoteTest from './BrowseNoteTest.vue'
import BrowseQuiz from './BrowseQuiz.vue'
export default {
  name: 'LessonBrowseRightField',
  components: {
    BrowseQuiz,
    BrowseNoteTest,
    BrowseContent,
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
    pageRoot: {
      type: String,
      default: '',
    },
  },
  methods: {
    paginationEmit(item, idx) {
      this.$emit('pagination', item, idx)
    },
    isContent(item) {
      if (item === '03' || item === '04') return false
      else return true
    },
  },
}
</script>
