<template>
  <div class="left_area">
    <div class="answer_result">
      <div class="ar_title">정답 결과</div>
      <div v-for="(item, idx) in quizList" :key="idx" class="ar_question row">
        <!-- [개발참조]문제 선택 시 출력 -->
        <div class="ar_number_select">
          <div class="ar_num_font01">{{ idx + 1 }}</div>
        </div>
        <!-- [개발참조]정답일때 출력 : class="ar_num_correct" -->
        <div class="ar_result_select">
          <div class="ar_correct">
            {{ item.correct }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewLeftSection',
  props: {
    quizList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
