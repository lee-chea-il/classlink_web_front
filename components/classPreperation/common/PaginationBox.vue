<template>
  <div class="btn_area button_margin_top_3">
    <button
      class="btn icons_arrow_square_l"
      :disabled="currentIdx === 0"
      @click="$emit('pagination', 'min')"
    ></button>
    <span class="counter">{{ currentIdx + 1 }}/{{ length }}</span>
    <button
      class="btn icons_arrow_square_r"
      :disabled="length - 1 === currentIdx"
      @click="$emit('pagination', 'plus', length)"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'PaginationBox',
  props: {
    currentIdx: {
      type: Number,
      default: 0,
    },
    length: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
