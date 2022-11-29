<template>
  <div class="answer_area04">
    <div
      v-for="(example, index) in exampleList"
      :key="index"
      class="aa_question row"
    >
      <!-- [개발참조]문제 선택 시 출력  -->
      <div
        :class="
          noteTest.answer === index + 1
            ? 'aa_number_select aa_correct'
            : 'aa_number'
        "
      >
        <div class="aa_num_font01">{{ index + 1 }}</div>
      </div>
      <!--  [개발참조]정답일때 출력 : class="aa_num_correct"  -->
      <div
        :class="
          noteTest.answer === index + 1 ? 'aa_result_select' : 'aa_result'
        "
      >
        <div
          :class="noteTest.answer === index + 1 ? 'aa_correct' : 'aa_wrong'"
          v-html="example.example"
        ></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AnswerArea',
  props: {
    exampleList: {
      type: Array,
      default: () => [],
    },
    noteTest: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
