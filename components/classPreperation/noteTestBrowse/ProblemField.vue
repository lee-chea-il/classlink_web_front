<template>
  <div class="left_area">
    <div class="num_area" style="justify-content: flex-start">
      <button
        v-for="(item, idx) in examList"
        :key="idx"
        class="num"
        :class="{ active: idx === currentIdx }"
        @click="$emit('change-number', idx)"
      >
        {{ idx + 1 }}
      </button>
    </div>
    <div v-for="(item, idx) in examList" :key="idx">
      <div v-if="idx === currentIdx" ref="questionNoteTest" class="write_area">
        <div class="edit_area edit_area_padding_12">
          <div class="question" v-html="item.question"></div>
          <button class="btn icons_fullscreen" @click="getFullscreen"></button>
        </div>
      </div>
    </div>

    <PaginationBox
      :currentIdx="currentIdx"
      :length="examList.length"
      @pagination="setPagination"
    />
  </div>
</template>

<script>
import PaginationBox from '../common/PaginationBox.vue'

export default {
  name: 'ProblemField',
  components: { PaginationBox },
  props: {
    examList: {
      type: Array,
      default: () => [],
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setPagination(e, idx) {
      this.$emit('pagination', e, idx)
    },
    getFullscreen() {
      this.$refs.questionNoteTest[0].requestFullscreen()
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
  height: 100%;
  min-height: 285px;
  max-height: 330px !important;
  overflow: scroll !important;
}

.question::v-deep p img {
  max-width: 100%;
  width: 100%;
}
</style>
