<template>
  <div :class="{ web_only_main: !$route.fullPath.includes('classLink') }">
    <MainHeader />
    <div
      v-if="!$route.fullPath.includes('classLink')"
      id="main_content content"
      class="content"
    >
      <div
        class="content_area"
        :class="{ pay_only: $route.fullPath === '/main/payment' }"
      >
        <Nuxt />
      </div>
    </div>

    <div v-else id="main_content" class="content">
      <div class="content_area main_content_area">
        <Nuxt />
      </div>
    </div>

    <MainFooter v-if="$route.fullPath.includes('classLink')" />
  </div>
</template>

<script>
import MainFooter from '~/components/classLinkMain/common/MainFooter.vue'
import MainHeader from '~/components/classLinkMain/common/MainHeader.vue'

export default {
  name: 'MainLayout',
  components: { MainHeader, MainFooter },
  middleware: 'auth',
}
</script>

<style scoped>
.pay_only {
  margin-top: 62px !important;
}
</style>
