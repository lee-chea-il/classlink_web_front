<template>
  <div class="result">
    총 <span>{{ length }}</span
    >개의 검색 결과가 있습니다
  </div>
</template>

<script>
export default {
  name: 'ListLengthItem',
  props: {
    length: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
