<template>
  <div class="keyword_area_01">
    <span v-for="(item, idx) in keyword" :key="idx" class="keyword01">
      <span class="keyword01-1">{{ item }}</span
      ><span class="x" @click="$emit('delete-keyword', idx)"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'CustomKeywordArea',
  props: {
    keyword: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
