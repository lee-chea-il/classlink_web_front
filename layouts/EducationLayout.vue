<template>
  <div class="main">
    <EduHeader />
    <div id="content" class="content">
      <div class="content_area">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import EduHeader from '@/components/education/EduHeader.vue'
export default {
  name: 'EducationLayout',
  components: { EduHeader },
}
</script>

<style></style>
