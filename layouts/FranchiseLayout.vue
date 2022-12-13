<template>
  <div class="main">
    <FranchiseHeader />
    <div id="content" class="content">
      <div class="content_area">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import FranchiseHeader from '~/components/franchise/common/FranchiseHeader.vue'

export default {
  name: 'FranchiseLayout',
  components: { FranchiseHeader },
  middleware: 'auth',
}
</script>

<style></style>
