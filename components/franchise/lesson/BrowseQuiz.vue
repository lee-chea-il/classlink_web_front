<template>
  <div v-if="show" class="quiz">
    <div class="thumb_box">
      <div v-for="(quiz, idx) in reference.quizList" :key="idx">
        <div v-if="idx === currentIdx" class="row">
          <div class="title">자료 열람</div>
          <div class="thumbnail_view02">
            <div v-html="quiz.question"></div>
            <button class="btn icons_fullscreen"></button>
            <!-- {{ quiz }} -->
          </div>
        </div>
      </div>

      <div class="page_thumb row">
        <PaginationField
          :length="reference.quizList?.length"
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
        :value="setDivision(reference.datatable_type)"
        :first="true"
      />
      <CustomData
        title="콘텐츠 유형"
        :value="setContentType(reference.category)"
      />
      <CustomData v-if="pageRoot !== 'world'" title="과목" value="수학" />
      <CustomData title="공개 여부" value="ON" />
      <CustomData title="경로" :value="reference.save_path" />
    </div>
  </div>
</template>

<script>
import CustomData from '../common/custom/CustomData.vue'
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
    pageRoot: {
      type: String,
      default: '',
    },
  },
  methods: {
    paginationEmit(item, idx) {
      this.$emit('pagination', item, idx)
    },
    setContentType(type) {
      if (type === '01') return '동영상(MP4)'
      else if (type === '02') return '문서(PDF)'
      else if (type === '03') return '퀴즈'
      else if (type === '04') return '쪽지시험'
      else if (type === '05') return 'YOUTUBE'
      else if (type === '06') return 'URL'
      else if (type === '07') return '음악(MP4)'
      else return null
    },
    setDivision(id) {
      if (id === 'ID') return '교육기관'
      else if (id === 'FD') return '프랜차이즈'
      else if (id === 'PD') return '공개 자료실'
      else if (id === 'MD') return '내 자료실'
      else return null
    },
  },
}
</script>

<style scoped>
.thumbnail_view02 {
  padding: 12px !important;
}
</style>
