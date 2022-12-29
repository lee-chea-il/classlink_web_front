<template>
  <!-- [개발참조] 문서자료 열람 시 -->
  <div v-if="open" ref="pdf" class="pdf">
    <div class="bar">
      <span class="pdf_title">{{ data.name }}</span>
      <span class="list"></span>
      <span class="full" @click="getFullscreen"></span>
    </div>
    <iframe
      class="embed"
      :src="data.full_path"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    {{ data.full_path }}
  </div>
</template>

<script>
export default {
  name: 'ViewPdf',
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
  methods: {
    getFullscreen() {
      this.$refs.pdf.requestFullscreen()
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
