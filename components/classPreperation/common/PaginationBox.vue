<template>
  <div class="btn_area" style="margin-top: 4px">
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

<style scoped>
.btn_area {
  text-align: center;
}
</style>
