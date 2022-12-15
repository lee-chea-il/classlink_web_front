<template>
  <div
    :class="isImg(exampleList[0].example) ? 'answer_area05' : 'answer_area04'"
  >
    <!-- isImg(example.example) ? 'answer_area05' -->
    <div
      v-for="(example, index) in exampleList"
      :key="index"
      class="aa_question"
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
          class="answer"
          :class="noteTest.answer === index + 1 ? 'aa_correct' : 'aa_wrong'"
          v-html="
            isImg(example.example) ? setImg(example.example) : example.example
          "
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
  computed: {},
  methods: {
    isImg(item) {
      const isTrue = item.includes('<img')
      return isTrue
    },
    setImg(item) {
      const resizeItem = item.replace(/<p/g, '<p class="fix_p"')
      return resizeItem.replace(/<img/g, '<img class="fix_size"')
    },
  },
}
</script>

<style scoped>
#modalPreviewQuiz .answer_area05,
#modalPreviewTest .answer_area05 {
  display: flex !important;
}

#modalPreviewQuiz .answer_area05 .aa_result,
#modalPreviewQuiz .answer_area05 .aa_result_select,
#modalPreviewTest .answer_area05 .aa_result,
#modalPreviewTest .answer_area05 .aa_result_select {
  width: 150px;
  margin-top: 12px;
}

#modalPreviewQuiz .answer_area04 .aa_question,
#modalPreviewTest .answer_area04 .aa_question {
  display: flex;
}

.answer::v-deep p {
  height: 67px;
  padding: 2px;
  overflow: hidden;
}

.answer::v-deep p img {
  object-fit: contain !important;
  height: 90%;
}
</style>
