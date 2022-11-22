<template>
  <div v-if="show" class="quiz">
    <div class="thumb_box">
      <div v-for="(quiz, idx) in reference.quizList" :key="idx">
        <div v-if="idx === currentIdx" class="row">
          <div class="title">자료 열람</div>
          <div class="thumbnail_view02">
            <div v-html="quiz.problem"></div>
            <button class="btn icons_fullscreen"></button>
            <!-- {{ quiz }} -->
          </div>
        </div>
      </div>

      <div class="page_thumb row">
        <PaginationField
          :length="reference.quizList.length"
          :currentIdx="currentIdx"
          @pagination="paginationEmit"
        />
        <button
          class="btn btn_crud_default preview"
          @click="$emit('quiz-preview', 'isLessonBrowse')"
        >
          미리보기
        </button>
      </div>

      <QuizDesc :reference="reference" :currentIdx="currentIdx" />

      <div class="div_line01"></div>

      <CustomData
        title="자료 구분"
        :value="reference.fileDivision"
        :first="true"
      />
      <CustomData title="콘텐츠 유형" :value="reference.fileType" />
      <CustomData title="과목" value="수학" />
      <CustomData title="공개 여부" value="ON" />
      <CustomData title="경로" :value="reference.savePath" />
    </div>
  </div>
</template>

<script>
import CustomData from '../custom/CustomData.vue'
import PaginationField from './PaginationField.vue'
import QuizDesc from './QuizDesc.vue'

export default {
  name: 'LessonBrowseQuizField',
  components: { CustomData, QuizDesc, PaginationField },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    reference: {
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
  },
}
</script>

<style scoped>
.thumbnail_view02 {
  padding: 12px !important;
}
</style>
