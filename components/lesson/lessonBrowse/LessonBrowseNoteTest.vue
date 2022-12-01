<template>
  <!-- [개발참조] 쪽지시험 컨텐츠 -->
  <div v-show="show" class="notetest">
    <div class="thumb_box">
      <div class="title col-12">자료 열람</div>
      <NoteTestEditorField :reference="reference" :currentIdx="currentIdx" />
      <div class="page_thumb row">
        <PaginationField
          :length="reference.noteTestList?.length"
          :currentIdx="currentIdx"
          @pagination="paginationEmit"
        />
        <button
          class="btn btn_crud_default preview"
          @click="$emit('test-preview', 'isLessonBrowse')"
        >
          미리보기
        </button>
      </div>

      <NoteTestDesc :reference="reference" :currentIdx="currentIdx" />

      <div class="div_line01"></div>

      <CustomData
        title="자료 구분"
        :value="reference.fileDivision"
        :first="true"
      />
      <CustomData title="콘텐츠 유형" :value="reference.fileType" />
      <CustomData v-if="pageRoot !== 'world'" title="과목" value="수학" />
      <CustomData title="공개 여부" value="ON" />
      <CustomData title="경로" :value="reference.savePath" />
    </div>
  </div>
  <!-- /. 쪽지시험 컨텐츠 -->
</template>

<script>
import CustomData from '../custom/CustomData.vue'
import NoteTestDesc from './NoteTestDesc.vue'
import NoteTestEditorField from './NoteTestEditorField.vue'
import PaginationField from './PaginationField.vue'

export default {
  name: 'LessonBrowseNoteTest',
  components: {
    NoteTestEditorField,
    PaginationField,
    NoteTestDesc,
    CustomData,
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
    pageRoot: {
      type: String,
      default: '',
    },
  },
  methods: {
    paginationEmit(item, idx) {
      this.$emit('pagination', item, idx)
    },
  },
}
</script>

<style></style>
