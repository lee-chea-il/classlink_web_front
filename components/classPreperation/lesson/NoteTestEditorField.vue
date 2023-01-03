<template>
  <div>
    <div v-for="(test, idx) in reference.note_exam_asks" :key="idx">
      <div v-if="idx === currentIdx" class="row">
        <div class="left_area left col-lg-8">
          <div class="thumbnail_view01 col-12">
            <div v-html="test.question"></div>
            <button class="btn icons_fullscreen"></button>
          </div>
        </div>
        <div class="right_area01 right col-lg-4">
          <div
            v-for="(item, index) in test.note_exam_ask_views"
            :key="index"
            class="thumbnail_view02 col-12"
          >
            <div class="view_field" v-html="item.question"></div>
            <button class="btn icons_fullscreen"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteTestEditorField',
  props: {
    reference: {
      type: Object,
      default: () => {},
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped>
.thumbnail_view02 {
  padding: 12px !important;
}
.thumbnail_view01 {
  padding: 12px !important;
  max-height: 246px;
  overflow: scroll;
}

#modalLessonView .notetest .thumbnail_view01 {
  height: 245px;
}

#modalLessonView .notetest .left_area {
  margin: 0;
}
</style>
