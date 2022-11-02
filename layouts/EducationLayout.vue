<template>
  <div class="main">
    <NavigationUl v-if="$route.fullPath !== '/curriculum'" />
    <EducationHeader />
    <div id="content" class="content">
      <div class="content_area">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationUl from '@/components/common/NavigationUl.vue'
import EducationHeader from '@/components/education/EducationHeader.vue'
export default {
  name: 'EducationLayout',
  components: { NavigationUl, EducationHeader },
}
</script>

<style></style>
