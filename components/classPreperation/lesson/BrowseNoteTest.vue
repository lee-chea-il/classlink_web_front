<template>
  <div v-show="show" class="thumb_box notetest">
    <NoteTestEditorField :reference="reference" :currentIdx="currentIdx" />
    <LessonDataInfo :reference="reference" />
  </div>
</template>

<script>
import LessonDataInfo from './LessonDataInfo.vue'
import NoteTestEditorField from './NoteTestEditorField.vue'

export default {
  name: 'LessonBrowseNoteTest',
  components: {
    NoteTestEditorField,
    LessonDataInfo,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
    reference: {
      type: Object,
      default: () => {},
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

<style></style>
