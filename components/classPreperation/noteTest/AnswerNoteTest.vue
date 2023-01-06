<template>
  <div class="quiz_area02">
    <div class="tit">정답</div>
    <select
      id="correct_no"
      name="correct_no"
      class="cnt select"
      :value="value"
      disabled
    >
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
      <option :value="4">4</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AnswerNoteTest',
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style scoped>
.select {
  width: 100%;
  padding: 4px;
  border-radius: 5px;
  border-color: rgba(167, 169, 172, 0.4);
}

#modalDataReadNote .quiz_area02 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
