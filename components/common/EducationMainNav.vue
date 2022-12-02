<template>
  <div class="nav_area">
    <ul class="nav nav_dapth01">
      <li v-for="(item, idx) in mainNavList" :key="idx" class="nav-item">
        <nuxt-link
          :class="{
            'nav-link': true,
            active: $route.matched[0].path === item.active,
          }"
          :to="$route.matched[0].path === item.active ? '' : item.path"
          >{{ item.name }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EducationMainNav',
  props: {
    mainNavList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
