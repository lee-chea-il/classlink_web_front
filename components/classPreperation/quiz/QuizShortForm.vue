<template>
  <div class="quiz_area02">
    <div class="tit">
      <div class="custom-control custom-radio custom-control-inline">
        <input
          id="rad02"
          type="radio"
          name="radA01"
          class="custom-control-input"
          :checked="checked"
          disabled
        />
        <label class="custom-control-label" for="rad02">주관식 단답형</label>
      </div>
    </div>
    <div class="cnt">
      <input
        v-if="checked"
        type="text"
        placeholder="정답"
        class="form-control form-inline"
        :value="value"
        readonly
      />
      <input
        v-else
        type="text"
        placeholder="정답"
        class="form-control form-inline"
        readonly
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizTitle',
  props: {
    checked: { type: Boolean, default: false },
    value: { type: String, default: '' },
  },
}
</script>

<style scoped>
.form-control:disabled,
.form-control[readonly] {
  background: white !important;
}
</style>
