<template>
  <div class="divide_area right">
    <!-- [개발참조] 퀴즈 컨텐츠 -->
    <div
      class="thumb_box"
      :class="{
        quiz: referenceItem.datatype === '03',
        notetest: referenceItem.datatype === '04',
      }"
    >
      <div class="title col-12">자료 열람</div>
      <!-- 자료 없을때 -->
      <BrowseNullData v-if="isEmptyObj(referenceItem)" />
      <!-- 동영상 -->
      <BrowseContent
        :show="isContent(referenceItem.datatype)"
        :reference="referenceItem"
      />

      <!-- 퀴즈 -->
      <BrowseQuiz
        v-show="referenceItem.datatype === '03'"
        :reference="referenceItem"
        :currentIdx="currentIdx"
      />

      <!-- 쪽지시험 -->
      <NoteTestEditorField
        v-show="referenceItem.datatype === '04'"
        :reference="referenceItem"
        :currentIdx="currentIdx"
      />

      <!-- 페이지전환 및 미리보기 버튼 -->
      <PaginationPrevBox
        v-show="isQuiz(referenceItem) || referenceItem.datatype === '04'"
        :length="
          isQuiz(referenceItem)
            ? referenceItem.quiz_asks?.length
            : referenceItem.note_exam_asks?.length
        "
        :currentIdx="currentIdx"
        @pagination="paginationEmit"
        @test-preview="
          isQuiz(referenceItem)
            ? $emit('quiz-preview', $event)
            : $emit('test-preview', $event)
        "
      />

      <!-- 공통 데이터 -->
      <LessonDataInfo
        v-if="!isEmptyObj(referenceItem)"
        :reference="referenceItem"
        :pageRoot="pageRoot"
      />
    </div>
  </div>
</template>

<script>
import BrowseContent from './BrowseContent.vue'
import BrowseNullData from './BrowseNullData.vue'
// import BrowseNoteTest from './BrowseNoteTest.vue'
import BrowseQuiz from './BrowseQuiz.vue'
import LessonDataInfo from './LessonDataInfo.vue'
import NoteTestEditorField from './NoteTestEditorField.vue'
import PaginationPrevBox from './PaginationPrevBox.vue'
export default {
  name: 'LessonBrowseRightField',
  components: {
    BrowseQuiz,
    BrowseContent,
    LessonDataInfo,
    NoteTestEditorField,
    PaginationPrevBox,
    BrowseNullData,
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
      if (!item || item === '03' || item === '04') return false
      else return true
    },
    isQuiz(item) {
      return item.datatype === '03'
    },
    isEmptyObj(obj) {
      if (obj.constructor === Object && Object.keys(obj).length === 0)
        return true
      return false
    },
  },
}
</script>

<style scoped></style>
