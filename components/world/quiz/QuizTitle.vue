<template>
  <div class="quiz_area02">
    <div class="tit">
      <div class="custom-control custom-radio custom-control-inline">
        <input
          id="rad02"
          type="radio"
          name="radA01"
          class="custom-control-input"
          :checked="quiz.type === 1"
          disabled
        />
        <label class="custom-control-label" for="rad02">주관식 단답형</label>
      </div>
    </div>
    <div class="cnt">
      <input
        type="text"
        placeholder="정답 입력"
        class="form-control form-inline"
        :value="quiz.subjectiveAnswer"
        readOnly
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizTitle',
  props: {
    quiz: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
