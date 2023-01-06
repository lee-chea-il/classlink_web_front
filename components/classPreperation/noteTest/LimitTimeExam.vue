<template>
  <div class="quiz_area02">
    <div class="tit" style="font-size: 14px">문제당 제한시간(초)</div>
    <div class="cnt">
      <input
        type="text"
        placeholder="문제당 제한시간(초)"
        class="form-control"
        readonly
        :value="value"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LimitTimeExam',
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
  },
}
</script>

<style scoped>
.form-control:disabled,
.form-control[readonly] {
  background: white;
}

#modalDataReadNote .quiz_area02 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
