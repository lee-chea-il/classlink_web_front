<template>
  <div class="main">
    <EducationHeader />
    <div id="content" class="content">
      <div class="content_area">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import EducationHeader from '@/components/education/EducationHeader.vue'
export default {
  name: 'EducationLayout',
  components: { EducationHeader },
}
</script>

<style></style>
