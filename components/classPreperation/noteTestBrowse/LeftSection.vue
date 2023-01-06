<template>
  <div class="left_section">
    <ProblemField
      :examList="examList"
      :currentIdx="currentIdx"
      @pagination="setPagination"
      @change-number="setChangeNumber"
    />

    <ExampleList :answerList="examList[currentIdx]?.note_exam_ask_views" />
  </div>
</template>

<script>
import ExampleList from './ExampleList.vue'
import ProblemField from './ProblemField.vue'

export default {
  name: 'LeftSection',
  components: { ExampleList, ProblemField },
  props: {
    examList: {
      type: Array,
      default: () => [],
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setPagination(e, idx) {
      this.$emit('pagination', e, idx)
    },
    setChangeNumber(e, idx) {
      this.$emit('change-number', e, idx)
    },
  },
}
</script>

<style></style>
