<template>
  <div class="page_thumb row">
    <PaginationField
      :length="length"
      :currentIdx="currentIdx"
      @pagination="paginationEmit"
    />
    <button
      class="btn btn_crud_default preview"
      @click="$emit('test-preview', 'isLessonBrowse')"
    >
      미리보기
    </button>
  </div>
</template>

<script>
import PaginationField from './PaginationField.vue'

export default {
  name: 'PaginationPrevBox',
  components: { PaginationField },
  props: {
    length: { type: Number, default: 0 },
    currentIdx: { type: Number, default: 0 },
  },
  methods: {
    paginationEmit(item, idx) {
      this.$emit('pagination', item, idx)
    },
  },
}
</script>

<style></style>
