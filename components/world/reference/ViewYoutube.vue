<template>
  <!-- [개발참조] 유튜브 열람 시 -->
  <div v-if="open" class="pdf">
    <div class="bar">
      <span class="pdf_title">{{ data.title }}</span>
    </div>
    <iframe class="iframe" :src="data.full_path" />
  </div>
</template>

<script>
export default {
  name: 'ViewYoutube',
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
.iframe {
  width: 100%;
  height: calc(100% - 50px) !important;
}
</style>
