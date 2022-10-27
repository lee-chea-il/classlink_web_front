<template>
  <div class="main">
    <NavigationUl />
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
export default {
  name: 'EducationLayout',
  components: { NavigationUl },
}
</script>

<style></style>
