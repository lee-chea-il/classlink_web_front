<template>
  <!-- [개발참조] 문서자료 열람 시 -->
  <div v-if="open" class="pdf">
    <div class="bar">
      <span class="list"></span>
      <span class="full"></span>
    </div>
    <embed class="embed" :src="data.savePath" type="application/pdf" />
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
  height: 270px;
}
</style>
