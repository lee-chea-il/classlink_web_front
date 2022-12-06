<template>
  <div class="form-group">
    <label for="">키워드</label>
    <div class="col">
      <span v-for="(element, idx) in keyword" :key="idx" class="keyword"
        >{{ element }},</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonKeywordField',
  props: {
    keyword: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
