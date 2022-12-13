<template>
  <div class="right_area">
    <div class="regi_area right">
      <PageNumberList
        :itemList="noteTestList"
        :currentIdx="currentIdx"
        @change-number="$emit('change-number', $event)"
        @plus-item="$emit('plus-item', $event)"
      />
      <div class="write_area">
        <PreviewField :currentPageIdx="currentIdx" @preview="setPreview" />

        <CustomEditor
          rules="start_limit|end_limit|edit_required"
          :itemList="noteTestList"
          :currentIdx="currentIdx"
        />

        <PaginationDelBtn
          :currentIdx="currentIdx"
          :length="noteTestList.length"
          @pagination="setPagination"
          @delete-quiz="$emit('delete-item', $event)"
        />
      </div>
      <div class="write_area">
        <ExampleList
          :isCreate="isCreate"
          :noteTestList="noteTestList"
          :currentIdx="currentIdx"
          @select-answer="setAnswer"
          @change-dificultade="setDificultade"
          @change-item="setItem"
          @add-example="$emit('add-example', $event)"
          @delete-example="setDeleteExample"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomEditor from '../common/custom/CustomEditor.vue'
import PaginationDelBtn from '../common/PagenationDelBtn.vue'
import PageNumberList from '../common/PageNumberList.vue'
import PreviewField from './PreviewField.vue'
import ExampleList from './ExampleList.vue'
export default {
  name: 'NoteTestRightField',
  components: {
    CustomEditor,
    PageNumberList,
    PaginationDelBtn,
    ExampleList,
    PreviewField,
  },
  props: {
    noteTestList: {
      type: Array,
      default: () => [],
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
    isCreate: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setPagination(e, idx) {
      this.$emit('pagination', e, idx)
    },

    setPreview(e, idx) {
      this.$emit('preview', e, idx)
    },

    setAnswer(e, idx) {
      this.$emit('select-answer', e, idx)
    },

    setDificultade(e, idx) {
      this.$emit('change-dificultade', e, idx)
    },

    setItem(e, idx) {
      this.$emit('change-item', e, idx)
    },

    setDeleteExample(idx, targetIdx) {
      this.$emit('delete-example', idx, targetIdx)
    },
  },
}
</script>
<style scoped>
.write_area {
  position: relative;
}
</style>
