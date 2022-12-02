<template>
  <div class="col-6">
    <div class="mult">
      <div class="tit stit">난이도</div>
      <div class="cnt">
        <QuizCustomCheckbox title="상" :className="quiz.dificultade" :idx="0" />
        <QuizCustomCheckbox title="중" :className="quiz.dificultade" :idx="1" />
        <QuizCustomCheckbox title="하" :className="quiz.dificultade" :idx="2" />
      </div>
    </div>
    <CustomBrowseInput
      title="제한시간"
      placeholder="제한시간"
      :value="quiz.limitTime"
    />
  </div>
</template>

<script>
import CustomBrowseInput from '../commom/CustomBrowseInput.vue'
import QuizCustomCheckbox from '../commom/QuizCustomCheckbox.vue'

export default {
  name: 'QuizElse',
  components: { CustomBrowseInput, QuizCustomCheckbox },
  props: {
    quiz: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
