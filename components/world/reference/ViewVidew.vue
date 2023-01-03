<template>
  <div v-if="open" class="video">
    <div class="bar">
      <span class="pdf_title">{{ data.title }}</span>
    </div>
    <video class="video" :src="data.full_path" controls />
  </div>
</template>

<script>
export default {
  name: 'ViewVideo',
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
.video {
  width: 100%;
  height: calc(100% - 50px) !important;
}
</style>
