<template>
  <div class="mu_area_mb">
    <i
      class="icons_arrow_circle_l_off"
      @click="$emit('active-nav', nav, 'min')"
    >
    </i>
    <span class="mu_title">{{ title }}</span>
    <i
      class="icons_arrow_circle_r_off"
      @click="$emit('active-nav', nav, 'plus')"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'MobileNav',
  props: {
    title: {
      type: String,
      default: '',
    },
    nav: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
