<template>
  <div class="quiz_area">
    <div class="custom-control custom-radio custom-control-inline">
      <input
        id="rad03"
        type="radio"
        name="radA01"
        class="custom-control-input"
        :checked="quiz.type === 2"
        disabled
      />
      <label class="custom-control-label" for="rad03">단답형</label>
    </div>
    <CustomBrowseInput
      v-if="quiz.type === 'SA'"
      title="정답"
      placeholder="정답 입력"
      :value="quiz.correct"
    />
    <CustomBrowseInput
      v-if="quiz.type === 'SA'"
      title="오답"
      placeholder="오답입력"
      :value="quiz.wrong"
    />
    <CustomBrowseInput
      v-if="quiz.type !== 'SA'"
      title="정답"
      placeholder="정답 입력"
    />
    <CustomBrowseInput
      v-if="quiz.type !== 'SA'"
      title="오답"
      placeholder="오답입력"
    />
  </div>
</template>

<script>
import CustomBrowseInput from '../common/custom/CustomBrowseInput.vue'

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
