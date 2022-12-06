<template>
  <div>
    <div v-for="(item, idx) in quizList" :key="idx">
      <div v-if="idx === currentIdx" class="write_area">
        <div class="edit_area edit_area_padding_12">
          <button class="btn icons_fullscreen"></button>
          <div v-html="item.problem"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizEditorField',
  props: {
    quizList: {
      type: Array,
      default: () => [],
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
