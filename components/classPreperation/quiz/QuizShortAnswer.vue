<template>
  <div class="quiz_area">
    <div class="custom-control custom-radio custom-control-inline">
      <input
        id="rad03"
        type="radio"
        name="radA01"
        class="custom-control-input"
        :checked="type === 'SA'"
        disabled
      />
      <label class="custom-control-label" for="rad03">단답형</label>
    </div>
    <CustomBrowseInput
      v-if="type === 'SA'"
      title="정답"
      placeholder="정답 "
      :value="correct"
    />
    <CustomBrowseInput
      v-if="type === 'SA'"
      title="오답"
      placeholder="오답"
      :value="wrong"
    />
    <CustomBrowseInput v-if="type !== 'SA'" title="정답" placeholder="정답 " />
    <CustomBrowseInput v-if="type !== 'SA'" title="오답" placeholder="오답" />
  </div>
</template>

<script>
import CustomBrowseInput from '../common/custom/CustomBrowseInput.vue'

export default {
  name: 'QuizShortAnswer',
  components: { CustomBrowseInput },
  props: {
    type: { type: String, default: '' },
    correct: { type: String, default: '' },
    wrong: { type: String, default: '' },
  },
}
</script>
