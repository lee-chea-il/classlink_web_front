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

        <div class="edit_area">
          <CustomEditor :itemList="quizList" :currentIdx="currentPageIdx" />
        </div>

        <PaginationDelBtn
          :currentIdx="currentPageIdx"
          :length="quizList.length"
          @delete-quiz="$emit('delete-quiz', $event)"
          @pagination="setPagination"
        />
      </div>
      <QuizFormField
        :quizList="quizList"
        :currentIdx="currentPageIdx"
        @change-item="onChangeItem"
        @select-type="setSelectType"
        @select-ox="setSelectOx"
        @select-dificultade="setSelectDificultade"
      />
    </div>
  </div>
</template>

<script>
import CustomEditor from '../CustomEditor.vue'
import PageNumberList from '../PageNumberList.vue'
import PreviewField from '../commom/PreviewField.vue'
import PaginationDelBtn from './PaginationDelBtn.vue'
import QuizFormField from './QuizFormField.vue'

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
    quizList: {
      type: Array,
      default: () => [],
    },
    currentPageIdx: {
      type: Number,
      default: 0,
    },
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
    setSelectType(idx, num) {
      this.$emit('select-type', idx, num)
    },
    setSelectOx(idx, num) {
      this.$emit('select-ox', idx, num)
    },
    setSelectDificultade(idx, num) {
      this.$emit('select-dificultade', idx, num)
    },
  },
}
</script>

<style></style>
