<template>
  <div class="nav_area">
    <ul class="nav nav_dapth01">
      <li v-for="(item, idx) in mainNavList" :key="idx">
        <NuxtLink
          :class="{
            'nav-link': true,
            active: $route.matched[0].path.includes(item.active),
          }"
          :to="returnPath(item.active, item.to)"
          >{{ item.name }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainNavItem',
  props: {
    mainNavList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    returnPath(target, getPath) {
      return this.$route.matched[0].path.includes(target) ? '' : getPath
    },
  },
}
</script>

<style></style>
