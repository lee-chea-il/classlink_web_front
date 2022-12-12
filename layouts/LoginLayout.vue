<template>
  <div class="default-layout">
    <LoginHeaderSection />
    <div class="page_login">
      <LoginLeftSection />
      <!-- <LoginRightSection /> -->
      <Nuxt />
    </div>
  </div>
</template>

<script>
import LoginHeaderSection from '@/components/login/LoginHeaderSection.vue'
import LoginLeftSection from '@/components/login/LoginLeftSection.vue'

export default {
  name: 'LoginLayout',
  components: {
    LoginLeftSection,
    LoginHeaderSection,
  },
}
</script>
