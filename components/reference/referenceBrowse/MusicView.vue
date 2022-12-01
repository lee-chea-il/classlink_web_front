<template>
  <div v-if="open" class="audio">
    <div class="bar">
      <span class="pdf_title">{{ data.name }}</span>
    </div>
    <audio controls>
      <source src="http://112.171.101.31:58080/file/test.mp3" />
    </audio>
  </div>
</template>

<script>
export default {
  name: 'VideoView',
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
