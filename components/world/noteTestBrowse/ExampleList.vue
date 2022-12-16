<template>
  <div class="right_area">
    <div class="write_area">
      <div
        v-for="(item, idx) in answerList"
        :key="idx"
        :ref="`example_${idx}`"
        class="edit_area02"
      >
        <div v-html="item.example" />
        <button
          class="btn icons_fullscreen"
          @click="getFullscreen(idx)"
        ></button>
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
  methods: {
    getFullscreen(idx) {
      this.$refs[`example_${idx}`][0].requestFullscreen()
    },
  },
}
</script>

<style scoped>
.edit_area02 {
  padding: 20px !important;
}

.edit_area02::v-deep p img {
  object-fit: contain;
  max-width: 80%;
}
</style>
