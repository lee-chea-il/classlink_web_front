<template>
  <span
    :id="`week_btn_${idx}`"
    class="week"
    @click="$emit('select-day', $event)"
    >{{ day }}</span
  >
</template>

<script>
export default {
  name: 'CustomToggle',
  props: {
    day: {
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
