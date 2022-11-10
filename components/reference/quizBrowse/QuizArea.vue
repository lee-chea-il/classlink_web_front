<template>
  <div class="quiz_area">
    <div class="custom-control custom-radio custom-control-inline">
      <input
        id="rad03"
        type="radio"
        name="radA01"
        class="custom-control-input"
        :checked="quiz.quizType === 2"
        disabled
      />
      <label class="custom-control-label" for="rad03">단답형</label>
    </div>
    <CustomBrowseInput
      title="정답"
      placeholder="정답 입력"
      :value="quiz.shortAnswer"
    />
    <CustomBrowseInput
      title="오답"
      placeholder="오답입력"
      :value="quiz.shortWrongAnswer"
    />
  </div>
</template>

<script>
import CustomBrowseInput from '../commom/CustomBrowseInput.vue'

export default {
  name: 'QuizArea',
  components: { CustomBrowseInput },
  props: {
    quiz: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
