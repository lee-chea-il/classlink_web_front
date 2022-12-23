<template>
  <div class="col-6">
    <div class="mult">
      <div class="tit stit">난이도</div>
      <div class="cnt">
        <QuizCustomCheckbox title="상" :className="quiz.level" idx="상" />
        <QuizCustomCheckbox title="중" :className="quiz.level" idx="중" />
        <QuizCustomCheckbox title="하" :className="quiz.level" idx="하" />
      </div>
    </div>
    <CustomBrowseInput
      title="제한시간"
      placeholder="제한시간"
      :value="quiz.limit_time"
    />
  </div>
</template>

<script>
import CustomBrowseInput from '../common/custom/CustomBrowseInput.vue'
import QuizCustomCheckbox from '../common/custom/QuizCustomCheckbox.vue'

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
