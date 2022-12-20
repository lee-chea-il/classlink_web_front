<template>
  <div class="mu_area">
    <ul>
      <li
        v-for="(nav, idx) in planList"
        :key="idx"
        :class="{ active: nav.isActive }"
      >
        <a class="btn" @click="$emit('active-nav', nav)">{{ nav.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    planList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
