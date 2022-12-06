<template>
  <div id="noneItem" class="left_area">
    <div class="answer_result">
      <div class="ar_title">정답 결과</div>
      <div v-for="(test, idx) in testList" :key="idx" class="ar_question row">
        <div class="ar_number_select">
          <div class="ar_num_font01">{{ idx + 1 }}</div>
        </div>

        <div class="ar_result_select">
          <div class="ar_correct">{{ test.answer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteTestLeftField',
  props: {
    testList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
