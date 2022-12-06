<template>
  <div class="button_tab">
    <button
      class="btn btn_activated"
      :class="{ active: !isLesson }"
      @click="$emit('set-lesson', false)"
    >
      자료실
    </button>
    <button
      class="btn btn_activated"
      :class="{ active: isLesson }"
      @click="$emit('set-lesson', true)"
    >
      레슨
    </button>
  </div>
</template>

<script>
export default {
  name: 'TopNavigation',
  props: {
    isLesson: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
