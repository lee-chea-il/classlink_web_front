<template>
  <div class="quiz_area02">
    <div class="tit">난이도</div>
    <div class="cnt difficult">
      <button
        class="btn btn_activated"
        disabled
        :class="{ active: value === '상' }"
      >
        상
      </button>
      <button
        class="btn btn_activated"
        disabled
        :class="{ active: value === '중' }"
      >
        중
      </button>
      <button
        class="btn btn_activated"
        disabled
        :class="{ active: value === '하' }"
      >
        하
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DifficultyExam',
  props: {
    value: {
      type: String,
      default: '상',
    },
  },
}
</script>

<style scoped>
#modalDataReadNote .quiz_area02 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
