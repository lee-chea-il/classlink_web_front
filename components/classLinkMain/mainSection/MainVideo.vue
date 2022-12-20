<template>
  <div class="header-movie">
    <video
      :src="require('~/assets/images/classlink_main_video.mp4')"
      autoplay
      muted
      loop
      controls
    />
  </div>
</template>

<script>
export default {
  name: 'MainVideo',
}
</script>

<style></style>
