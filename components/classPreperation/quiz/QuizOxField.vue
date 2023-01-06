<template>
  <div class="quiz_area04">
    <div class="tit">
      <div class="custom-control custom-radio custom-control-inline">
        <input
          id="rad01"
          type="radio"
          name="radA01"
          class="custom-control-input"
          :checked="checked"
          disabled
        />
        <label class="custom-control-label" for="rad01">OX 유형</label>
      </div>
    </div>
    <QuizCustomCheckbox title="O" :className="className" idx="O" />
    <div class="cnt">
      <QuizCustomCheckbox title="X" :className="className" idx="X" />
    </div>
  </div>
</template>

<script>
import QuizCustomCheckbox from '../common/custom/QuizCustomCheckbox.vue'

export default {
  name: 'QuizOxField',
  components: { QuizCustomCheckbox },
  props: {
    checked: { type: Boolean, default: false },
    className: { type: String, default: '' },
  },
}
</script>

<style></style>
