<template>
  <div class="default-layout">
    <NavigationUl />
    <LoginHeaderSection />
    <div class="page_login">
      <LoginLeftSection />
      <!-- <LoginRightSection /> -->
      <Nuxt />
    </div>
    <FindIdModal />
    <FindPwModal />
  </div>
</template>

<script>
import NavigationUl from '@/components/common/NavigationUl.vue'
import FindPwModal from '@/components/common/modal/FindPwModal.vue'
import LoginHeaderSection from '@/components/login/LoginHeaderSection.vue'
import LoginLeftSection from '@/components/login/LoginLeftSection.vue'
import FindIdModal from '@/components/common/modal/FindIdModal.vue'

export default {
  name: 'LoginLayout',
  components: {
    LoginLeftSection,
    LoginHeaderSection,
    FindIdModal,
    FindPwModal,
    NavigationUl,
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'assets/css/base.css' },
      { rel: 'stylesheet', href: 'assets/css/common.css' },
      {
        rel: 'canonical',
        href: 'https://www.metaclasslink.com',
      },
      { rel: 'shortcut icon', href: 'favicon.png' },
    ],
    script: [
      {
        src: 'plugins/jquery/jquery-3.6.0.min.js',
        async: true,
        crossorigin: 'anonymous',
      },
      {
        src: 'plugins/swiper/swiper-bundle.min.js',
        async: true,
        crossorigin: 'anonymous',
      },
      {
        src: 'plugins/bootstrap/bootstrap.bundle.min.js',
        async: true,
        crossorigin: 'anonymous',
      },
    ],
  },
}
</script>
