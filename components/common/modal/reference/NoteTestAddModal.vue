<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataRegiNote"
      class="modal modal_ac_manage_dtr modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="자료 등록" @close="$emit('close')" />

          <div class="modal-body">
            <div class="modal_dataquiz datanote row">
              <!-- 모달 내용 구분 class-->
              <!-- 왼쪽 영역 -->
              <ReferenceAddLeftField
                :reference="reference"
                :pushKeyword="pushKeyword"
                target="noteTest"
                @change-input="$emit('change-input', $event)"
                @set-keyword="$emit('set-keyword', $event)"
                @change-keyword="$emit('changePushKeyword', $event)"
                @delete-keyword="$emit('delete-keyword', $event)"
                @open-save-path="$emit('open-save-path', $event)"
              />
              <!-- /.왼쪽 영역 -->

              <!-- 오른쪽 영역 -->
              <NoteTestRightField
                :noteTestList="noteTestList"
                :currentIdx="currentPageIdx"
                @change-number="$emit('change-number', $event)"
                @plus-item="$emit('plus-item', $event)"
                @delete-item="$emit('delete-item', $event)"
                @preview="setPreview"
                @pagination="setPagination"
                @select-answer="setAnswer"
                @change-dificultade="setDificultade"
                @change-item="setItem"
              />
              <!-- /.오른쪽 영역 -->
            </div>
          </div>
          <ModalBtnBox @close="$emit('close')" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'
import ModalBtnBox from '../../ModalBtnBox.vue'
import ReferenceAddLeftField from '@/components/reference/ReferenceAddLeftField.vue'
import NoteTestRightField from '~/components/reference/noteTestAdd/NoteTestRightField.vue'

export default {
  name: 'NoteTestAddModal',
  components: {
    ReferenceAddLeftField,
    ModalHeader,
    ModalBtnBox,
    NoteTestRightField,
  },
  props: {
    open: Boolean,
    reference: {
      type: Object,
      default: () => {},
    },
    noteTestList: {
      type: Array,
      default: () => [],
    },
    currentPageIdx: {
      type: Number,
      default: () => 0,
    },
    pushKeyword: {
      type: String,
      default: '',
    },
  },
  methods: {
    setPreview(e, idx) {
      this.$emit('preview', 'add', idx)
    },
    setPagination(e, idx) {
      this.$emit('pagination', e, idx)
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
  },
}
</script>
