<template>
  <div class="nav_area">
    <ul class="nav nav_dapth01">
      <li v-for="(item, idx) in mainNavList" :key="idx" class="nav-item">
        <nuxt-link
          :class="{
            'nav-link': true,
            active: $route.fullPath.includes(item.active),
          }"
          :to="item.path"
          >{{ item.name }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
  props: {
    mainNavList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
