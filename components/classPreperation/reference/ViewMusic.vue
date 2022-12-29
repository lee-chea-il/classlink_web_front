<template>
  <div v-if="open" class="audio">
    <div class="bar">
      <span class="pdf_title">{{ data.name }}</span>
    </div>
    <audio controls>
      <source :src="data.full_path" />
    </audio>
  </div>
</template>

<script>
export default {
  name: 'ViewMusic',
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
audio {
  margin: 40px 0;
}
</style>
