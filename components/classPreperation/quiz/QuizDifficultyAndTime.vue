<template>
  <div class="col-6">
    <div class="mult">
      <div class="tit stit">난이도</div>
      <div class="cnt">
        <QuizCustomCheckbox title="상" :className="level" idx="상" />
        <QuizCustomCheckbox title="중" :className="level" idx="중" />
        <QuizCustomCheckbox title="하" :className="level" idx="하" />
      </div>
    </div>
    <CustomBrowseInput title="제한시간" placeholder="제한시간" :value="time" />
  </div>
</template>

<script>
import CustomBrowseInput from '../common/custom/CustomBrowseInput.vue'
import QuizCustomCheckbox from '../common/custom/QuizCustomCheckbox.vue'

export default {
  name: 'QuizDifficultyAndTime',
  components: { CustomBrowseInput, QuizCustomCheckbox },
  props: {
    level: { type: String, default: '' },
    time: { type: [String, Number], default: 0 },
  },
}
</script>

<style></style>
