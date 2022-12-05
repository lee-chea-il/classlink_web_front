<template>
  <div v-if="show" class="nothing_txt">
    <div class="txt">가맹한 기관이 없습니다.<br /></div>
  </div>
</template>

<script>
export default {
  name: 'NoList',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
