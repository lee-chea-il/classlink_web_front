<template>
  <div class="logo_area">
    <NuxtLink :to="to"
      ><img src="@/assets/images/ClassLink_logo.svg" alt="ClassLink"
    /></NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'MainLogo',
  props: {
    to: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
