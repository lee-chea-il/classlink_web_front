<template>
  <div class="check_sec">
    <span class="custom-control custom-checkbox form-inline">
      <input
        :id="setTarget"
        type="checkbox"
        class="custom-control-input"
        name="public_open_yn"
        :value="public_open_yn"
        :checked="public_open_yn"
        @input="$emit('change-input', $event)"
      />
      <label class="custom-control-label checkbox06" :for="setTarget"
        >교육기관에 해당 자료를 공개합니다.</label
      >
    </span>
    <span
      v-show="pageRoot !== 'world'"
      class="custom-control custom-checkbox form-inline"
    >
      <input
        :id="setTargetTwo"
        type="checkbox"
        class="custom-control-input"
        name="open_yn"
        :value="open_yn"
        :checked="open_yn"
        @input="$emit('change-input', $event)"
      />
      <label class="custom-control-label checkbox07" :for="setTargetTwo"
        >공개자료실에 해당 자료를 공개합니다.</label
      >
    </span>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    public_open_yn: {
      type: Boolean,
      default: true,
    },
    open_yn: {
      type: Boolean,
      default: true,
    },
    pageRoot: {
      type: String,
      default: '',
    },
  },
  computed: {
    setTarget() {
      if (this.target === 'quiz') {
        return 'quizTarget'
      } else if (this.target === 'noteTest') {
        return 'noteTestTarget'
      } else if (this.target === 'referenceChange') {
        return 'referenceChangeTarget'
      } else if (this.target === 'quizChange') {
        return 'quizChangeTarget'
      } else if (this.target === 'noteTestChange') {
        return 'noteTestChangeTarget'
      } else {
        return 'refereceTarget'
      }
    },
    setTargetTwo() {
      if (this.target === 'quiz') {
        return 'quizTargetTwo'
      } else if (this.target === 'noteTest') {
        return 'noteTestTargetTwo'
      } else if (this.target === 'referenceChange') {
        return 'referenceChangeTargetTwo'
      } else if (this.target === 'quizChange') {
        return 'quizChangeTargetTwo'
      } else if (this.target === 'noteTestChange') {
        return 'noteTestChangeTargetTwo'
      } else {
        return 'refereceTargetTwo'
      }
    },
  },
}
</script>

<style></style>
