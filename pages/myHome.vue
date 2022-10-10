<template>
  <div>
    <Link rel="shortcut icon" href="assets/images/favicon.png" />
    <!-- swiper -->
    <Link rel="stylesheet" href="plugins/swiper/swiper-bundle.min.css" />
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" /> -->
    
    <Link rel="stylesheet" href="assets/css/myhome.css" />
    <Link href="assets/css/common.css" rel="stylesheet" />
    <Link href="plugins/bootstrap/bootstrap.min.css" rel="stylesheet" />
    <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" />
    <Script src="plugins/jquery/jquery-3.6.0.min.js"></Script>
    <Script src="plugins/bootstrap/bootstrap.bundle.min.js"></Script>
    <!-- swiper -->
    <Script src="plugins/swiper/swiper-bundle.min.js"></Script>
    <Script src="plugins/js/victor.js"></Script>
    
    <MyHomeHeaderSection />
    <MyHomeDefault />
  </div>
</template>

<script setup lang="ts">
import MyHomeHeaderSection from '@/components/MyHomeHeaderSection.vue'
import MyHomeDefaultSlot from '@/components/MyHomeDefault.vue'
</script>

