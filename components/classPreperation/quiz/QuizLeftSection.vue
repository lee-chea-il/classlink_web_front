<template>
  <div class="left_section">
    <PageNumberList
      :itemList="quizList"
      :currentIdx="currentIdx"
      :none="true"
      @change-number="$emit('change-number', $event)"
    />

    <QuizEditorField :quizList="quizList" :currentIdx="currentIdx" />

    <PaginationBox
      :currentIdx="currentIdx"
      :length="quizList.length"
      @pagination="setPagination"
    />
  </div>
</template>

<script>
import PaginationBox from '../common/PaginationBox.vue'
import PageNumberList from './PageNumberList.vue'
import QuizEditorField from './QuizEditorField.vue'

export default {
  name: 'QuizLeftSection',
  components: { PageNumberList, PaginationBox, QuizEditorField },
  props: {
    currentIdx: { type: Number, default: 0 },
    quizList: { type: Array, default: () => [] },
  },
  methods: {
    setPagination(e, idx) {
      this.$emit('pagination', e, idx)
    },
  },
}
</script>

<style></style>
