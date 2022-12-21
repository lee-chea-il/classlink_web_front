<template>
  <div>
    <div v-for="(item, idx) in quizList" :key="idx">
      <div v-if="idx === currentIdx" ref="quizSection" class="write_area">
        <div class="edit_area edit_area_padding_12">
          <button class="btn icons_fullscreen" @click="getFullscreen"></button>
          <div v-html="item.question"></div>
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
  methods: {
    getFullscreen() {
      this.$refs.quizSection[0].requestFullscreen()
    },
  },
}
</script>

<style scoped>
.modal_ac_manage_dtr
  .modal-body
  .reading_section.modal_dataquiz
  .write_area
  .edit_area {
  min-height: 275px;
  height: 100%;
}
</style>
