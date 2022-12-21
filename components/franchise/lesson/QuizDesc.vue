<template>
  <div>
    <div v-for="(quiz, idx) in reference.quizList" :key="idx">
      <div v-if="idx === currentIdx" class="quiz_sec01 row">
        <div class="left_area left col-lg-6">
          <CustomTitle title="유형" :value="setType(quiz)" />
          <CustomTitle title="정답" :value="setAnswer(quiz)" />
          <CustomTitle title="난이도" :value="setDificultade(quiz)" />
          <CustomTitle title="제한시간" :value="quiz.limit_time" />
        </div>
      </div>
    </div>

    <div class="div_line01"></div>
    <CustomTitle title="파일 이름" :value="reference.name" />
    <CustomTitle title="설명" :value="reference.desc" />
  </div>
</template>

<script>
import CustomTitle from '../common/custom/CustomTitle.vue'

export default {
  name: 'QuizDesc',
  components: { CustomTitle },
  props: {
    reference: {
      type: Object,
      default: () => {},
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setType(item) {
      if (item.type === 0) {
        return 'OX 퀴즈'
      } else if (item.type === 1) {
        return '주관식 단답형'
      } else {
        return '단답형'
      }
    },
    setAnswer(item) {
      return item.oxAnswer === 0 ? 'O' : 'X'
    },
    setDificultade(item) {
      return item.level === 1 ? '상' : item.level === 2 ? '중' : '하'
    },
  },
}
</script>

<style></style>
