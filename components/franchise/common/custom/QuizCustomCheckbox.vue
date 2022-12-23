<template>
  <button
    class="btn btn_activated"
    :class="{ active: className === idx }"
    disabled
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'QuizCustomCheckbox',
  props: {
    title: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    idx: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
