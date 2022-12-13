<template>
  <div class="main">
    <ClassLinkHeader />
    <div id="content" class="content">
      <div class="content_area">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import ClassLinkHeader from '~/components/classLinkAdmin/common/ClassLinkHeader.vue'

export default {
  name: 'ClassLinkLayout',
  components: { ClassLinkHeader },
  middleware: 'auth',
}
</script>

<style></style>
