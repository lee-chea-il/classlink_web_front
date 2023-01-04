<template>
  <div class="right_area">
    <div class="regi_area right">
      <PageNumberList
        :itemList="quizList"
        :currentIdx="currentPageIdx"
        @change-number="$emit('change-number', $event)"
        @plus-item="$emit('plus-item', $event)"
      />

      <div class="write_area">
        <PreviewField :currentPageIdx="currentPageIdx" @preview="setPreview" />
        <CustomEditor
          rules="start_limit|end_limit|edit_required"
          :itemList="quizList"
          :currentIdx="currentPageIdx"
        />

        <PaginationDelBtn
          :currentIdx="currentPageIdx"
          :length="quizList?.length"
          @delete-quiz="$emit('delete-quiz', $event)"
          @pagination="setPagination"
        />
      </div>
      <QuizFormField
        :quizList="quizList"
        :currentIdx="currentPageIdx"
        :isCreate="isCreate"
        @change-item="onChangeItem"
        @select-type="setSelectType"
        @select-ox="setSelectOx"
        @select-level="setSelectDificultade"
      />
    </div>
  </div>
</template>

<script>
import CustomEditor from '../common/custom/CustomEditor.vue'
import PreviewField from './PreviewField.vue'
import PageNumberList from './PageNumberList.vue'
import QuizFormField from './QuizFormField.vue'
import PaginationDelBtn from './PaginationDelBtn.vue'

export default {
  name: 'QuizRightField',
  components: {
    CustomEditor,
    PageNumberList,
    PaginationDelBtn,
    QuizFormField,
    PreviewField,
  },
  props: {
    quizList: { type: Array, default: () => [] },
    currentPageIdx: { type: Number, default: 0 },
    isCreate: { type: Boolean, default: false },
  },
  methods: {
    setPreview(prev, isFirst) {
      this.$emit('preview', prev, isFirst)
    },
    setPagination(target, idx) {
      this.$emit('pagination', target, idx)
    },
    onChangeItem(e, idx) {
      this.$emit('change-item', e, idx)
    },
    setSelectType(e, idx, num) {
      this.$emit('select-type', e, idx, num)
    },
    setSelectOx(idx, num) {
      this.$emit('select-ox', idx, num)
    },
    setSelectDificultade(idx, num) {
      this.$emit('select-level', idx, num)
    },
  },
}
</script>

<style scoped>
.write_area {
  position: relative;
}
</style>
