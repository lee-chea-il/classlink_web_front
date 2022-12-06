<template>
  <div>
    <div v-for="(test, idx) in reference.noteTestList" :key="idx">
      <div v-if="idx === currentIdx" class="row">
        <div class="left_area left col-lg-8">
          <div class="thumbnail_view01 col-12">
            <div v-html="test.problem"></div>
            <button class="btn icons_fullscreen"></button>
          </div>
        </div>
        <div class="right_area01 right col-lg-4">
          <div
            v-for="(item, index) in test.exampleList"
            :key="index"
            class="thumbnail_view02 col-12"
          >
            <div class="view_field" v-html="item.example"></div>
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

#modalLessonView .notetest .left_area {
  margin: 0;
}
</style>
