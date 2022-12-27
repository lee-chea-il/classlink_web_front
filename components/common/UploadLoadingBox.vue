<template>
  <div class="dim">
    <div class="icon_dots_loading"></div>
  </div>
</template>

<script>
export default {
  name: 'UploadLoadingBox',
}
</script>

<style>
.dim {
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.04);
  z-index: 9999;
  width: 100%;
  height: 100%;
}

.dim .icon_dots_loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url('~/assets/images/icon_dots_loading_1.gif');
}
</style>
