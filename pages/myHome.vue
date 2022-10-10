<template>
  <div>
    <Link rel="shortcut icon" href="assets/images/favicon.png" />
    <Link rel="stylesheet" href="assets/css/common.css" />
    <Link rel="stylesheet" href="assets/css/mypage.css" />
    <Link rel="stylesheet" href="assets/css/myhome.css" />

    <Script src="plugins/jquery/jquery-3.6.0.min.js"></Script>
    <Script src="plugins/bootstrap/bootstrap.bundle.min.js"></Script>
    <Script src="plugins/swiper/swiper-bundle.min.js"></Script>
    <Script src="plugins/js/victor.js"></Script>
    
    <MyHomeHeaderSection />
    <MyHomeDefault />
  </div>
</template>

<script setup lang="ts">
import MyHomeHeaderSection from '@/components/MyHomeHeaderSection.vue'
import MyHomeDefault from '@/components/MyHomeDefault.vue'


</script>

