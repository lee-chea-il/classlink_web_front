<template>
  <div class="num_area">
    <!-- [개발참조] 문항 20개 이상부터는 +버튼이 보이지 않게 돼 추가할 수 없음 -->
    <button
      v-for="(item, idx) in quizList"
      :key="idx"
      class="num"
      :class="{ active: idx === currentQuizIdx }"
      @click="$emit('change-quiz', idx)"
    >
      {{ idx + 1 }}
    </button>
    <button v-if="quizList.length !== 20" class="num plus">
      <i
        class="btn icons_plus_circle_off"
        @click="$emit('plus-quiz', $event)"
      ></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'QuizNumberList',
  props: {
    quizList: {
      type: Array,
      default: null,
    },
    currentQuizIdx: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
