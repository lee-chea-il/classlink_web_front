<template>
  <div class="right_area">
    <div class="write_area">
      <div
        v-for="(item, idx) in answerList"
        :key="idx"
        class="edit_area02 edit_area_padding_12"
      >
        <div v-html="item?.example"></div>
        <button class="btn icons_fullscreen"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleList',
  props: {
    answerList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
