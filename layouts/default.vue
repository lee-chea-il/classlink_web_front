<template>
  <div class="default-layout"><Nuxt /></div>
</template>

<script>
export default {
  name: 'DefaultPage',
}
</script>

<style scoped>
ul {
  position: fixed;
  left: 50px;
  top: 50px;
  background: rgba(0, 0, 0, 0.5);
  padding: 12px;
  z-index: 9999;
}

ul li {
  padding: 6px 0;
}

ul li a {
  color: white;
}
</style>
