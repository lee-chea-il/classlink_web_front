<template>
  <!-- [개발참조] 문서자료 열람 시 -->
  <div v-if="open" ref="pdf_elem" class="pdf">
    <div class="bar">
      <span class="pdf_title">{{ data.name }}</span>
      <span class="list"></span>
      <span class="full"></span>
    </div>
    <embed class="embed" :src="data.save_path" type="application/pdf" />
  </div>
</template>

<script>
export default {
  name: 'PdfView',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.embed {
  width: 100%;
  height: calc(100% - 50px) !important;
}
</style>
