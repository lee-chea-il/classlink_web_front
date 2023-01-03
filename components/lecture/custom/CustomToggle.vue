<template>
  <span
    class="week"
    :class="{ active: isChecked }"
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
    isChecked: { type: Boolean, default: false },
  },
}
</script>
