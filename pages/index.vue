<template>
  <div class="default-layout">
    <HeaderSection :title="titleTxt" />
    <div class="page_login">
      <LoginLeftSection />
      <LoginRightSection />
    </div>
    <FindIdModal />
    <FindPwModal />
  </div>
</template>

<script setup lang="ts">
  import HeaderSection from '@/components/HeaderSection.vue'
  import LoginLeftSection from '@/components/LoginLeftSection.vue'
  import LoginRightSection from '@/components/LoginRightSection.vue'
  import FindIdModal from "@/components/modal/FindIdModal.vue"
  import FindPwModal from "@/components/modal/FindPwModal.vue"

  const titleTxt='로그인';
</script>