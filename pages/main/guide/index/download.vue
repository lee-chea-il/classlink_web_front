<template>
  <div class="download_set">
    <div class="download_set02">
      <div v-for="(item, idx) in downloadList" :key="idx" class="download">
        <div :class="item.icon"></div>
        <div class="download_font">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadPage',
  layout: 'MainLayout',
  data() {
    return {
      downloadList: [
        { id: 1, title: '안드로이드', icon: 'logo_google', link: '' },
        { id: 2, title: '아이폰', icon: 'logo_appstore', link: '' },
        { id: 3, title: 'Windows PC', icon: 'logo_windows', link: '' },
        { id: 4, title: 'Mac', icon: 'logo_mac', link: '' },
      ],
    }
  },
}
</script>

<style scoped>
.web_only_main .download_set .download_set02 {
  max-width: 700px !important;
  margin: auto !important;
  flex-wrap: wrap !important;
}
</style>
