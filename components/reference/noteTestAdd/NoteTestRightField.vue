<template>
  <div class="right_area">
    <div class="regi_area right">
      <!-- <div v-if="currentIdx === idx"> -->
      <PageNumberList
        :itemList="noteTestList"
        :currentIdx="currentIdx"
        @change-number="$emit('change-number', $event)"
        @plus-item="$emit('plus-item', $event)"
      />
      <div class="write_area">
        <PreviewField :currentPageIdx="currentIdx" @preview="setPreview" />

        <div class="edit_area">
          <CustomEditor :itemList="noteTestList" :currentIdx="currentIdx" />
        </div>

        <PaginationDelBtn
          :currentIdx="currentIdx"
          :length="noteTestList.length"
          @pagination="setPagination"
          @delete-quiz="$emit('delete-item', $event)"
        />

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
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import PaginationDelBtn from '../quizAdd/PaginationDelBtn.vue'
import PreviewField from '../commom/PreviewField.vue'
import ExampleList from './ExampleList.vue'
import CustomEditor from '@/components/reference/CustomEditor.vue'
import PageNumberList from '@/components/reference/PageNumberList.vue'
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

<style></style>
