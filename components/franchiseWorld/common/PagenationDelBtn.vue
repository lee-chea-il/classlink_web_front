<template>
  <div class="btn_area">
    <button
      class="btn icons_arrow_square_l"
      :class="{ disabled: currentIdx === 0 }"
      @click="$emit('pagination', 'min')"
    ></button>
    <span class="counter">{{ `${currentIdx + 1}/${length}` }}</span>
    <button
      class="btn icons_arrow_square_r"
      :class="{
        disabled: currentIdx === length - 1,
      }"
      @click="$emit('pagination', 'plus', length)"
    ></button>
    <button
      v-if="length > 1"
      class="btn btn_crud_default btn_del"
      @click="$emit('delete-quiz', currentIdx)"
    >
      삭제
    </button>
  </div>
</template>

<script>
export default {
  name: 'PaginationDelBtn',
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
