<template>
  <div v-show="show" class="thumbnail_view">
    <video
      v-show="reference.category === '01'"
      class="video"
      :src="reference.save_path"
      autoplay
      muted
      controls
    ></video>
    <iframe
      v-show="reference.category === '06'"
      class="iframe"
      :src="reference.save_path"
    ></iframe>
    <embed
      v-show="reference.category === '02' || reference.category === '05'"
      class="embed"
      :src="reference.save_path"
    />
  </div>
</template>

<script>
export default {
  name: 'LessonBrowseContent',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    reference: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.video,
.embed,
.iframe {
  width: 100%;
  height: 100%;
}
</style>
