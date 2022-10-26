<template>
  <div class="default-layout">
    <LoginHeaderSection />
    <div class="page_login">
      <LoginLeftSection />
      <!-- <LoginRightSection /> -->
      <NuxtChild />
    </div>
    <FindIdModal />
    <FindPwModal />
  </div>
</template>

<script>
import FindPwModal from '@/components/common/modal/FindPwModal.vue'
import LoginHeaderSection from '@/components/login/LoginHeaderSection.vue'
import LoginLeftSection from '@/components/login/LoginLeftSection.vue'
import FindIdModal from '@/components/common/modal/FindIdModal.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginLeftSection,
    LoginHeaderSection,
    FindIdModal,
    FindPwModal,
  },
}
</script>

<style></style>
