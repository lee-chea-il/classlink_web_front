<template>
  <div>
    <div class="data_prev" @click="$emit('pagination', 'min')">
      <i class="icons_arrow_square_l"></i>
    </div>
    <div class="data_next" @click="$emit('pagination', 'plus', length)">
      <i class="icons_arrow_square_r"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrowBox',
  props: {
    length: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
