<template>
  <div class="check_sec">
    <span class="custom-control custom-checkbox form-inline">
      <input
        id="public_open_yn"
        type="checkbox"
        class="custom-control-input"
        name="public_open_yn"
        :value="public_open_yn"
        :checked="public_open_yn"
        @input="$emit('change-input', $event)"
      />
      <label class="custom-control-label checkbox06" for="public_open_yn"
        >교육기관에 해당 자료를 공개합니다.</label
      >
    </span>
    <span
      v-show="pageRoot !== 'world'"
      class="custom-control custom-checkbox form-inline"
    >
      <input
        id="open_yn"
        type="checkbox"
        class="custom-control-input"
        name="open_yn"
        :value="open_yn"
        :checked="open_yn"
        @input="$emit('change-input', $event)"
      />
      <label class="custom-control-label checkbox07" for="open_yn"
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
}
</script>

<style></style>
