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
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ValidationObserver v-slot="{ invalid }">
            <ModalHeader
              :title="`자료 ${modalTitle}`"
              @close="$emit('close')"
            />

            <div class="modal-body">
              <div class="modal_dataquiz datanote row">
                <!-- 모달 내용 구분 class-->
                <!-- 왼쪽 영역 -->
                <ReferenceAddLeftField
                  :reference="reference"
                  :pushKeyword="pushKeyword"
                  target="noteTest"
                  :pageRoot="pageRoot"
                  @change-input="$emit('change-input', $event)"
                  @set-keyword="$emit('set-keyword', $event)"
                  @change-keyword="$emit('change-keyword', $event)"
                  @delete-keyword="$emit('delete-keyword', $event)"
                  @open-save-path="$emit('open-save-path', $event)"
                  @delete-thumbnail="$emit('delete-thumbnail')"
                />
                <!-- /.왼쪽 영역 -->

                <!-- 오른쪽 영역 -->
                <NoteTestRightField
                  :isCreate="true"
                  :noteTestList="reference.noteTestList"
                  :currentIdx="currentPageIdx"
                  @change-number="$emit('change-number', $event)"
                  @plus-item="$emit('plus-item', $event)"
                  @delete-item="$emit('delete-item', $event)"
                  @preview="setPreview"
                  @pagination="setPagination"
                  @select-answer="setAnswer"
                  @change-level="setDificultade"
                  @change-item="setItem"
                  @add-example="$emit('add-example', $event)"
                  @delete-example="setDeleteExample"
                />
                <!-- /.오른쪽 영역 -->
              </div>
            </div>
            <ModalBtnBox
              :invalid="isDisabled(invalid, reference.keyword?.length === 0)"
              :submitTxt="modalTitle"
              @submit="$emit('submit')"
              @close="$emit('close')"
            />
          </ValidationObserver>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import ModalHeader from '../../common/ModalHeader.vue'
import ModalBtnBox from '../../common/ModalBtnBox.vue'
import ReferenceAddLeftField from '../reference/ReferenceLeftField.vue'
import NoteTestRightField from '../noteTest/NoteTestRightField.vue'

export default {
  name: 'AddNoteTestModal',
  components: {
    ModalHeader,
    ModalBtnBox,
    ValidationObserver,
    NoteTestRightField,
    ReferenceAddLeftField,
  },
  props: {
    open: Boolean,
    modalTitle: {
      type: String,
      default: '',
    },
    pageRoot: {
      type: String,
      default: '',
    },
    reference: {
      type: Object,
      default: () => {},
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
      this.$emit('change-level', e, idx)
    },
    setItem(e, idx) {
      this.$emit('change-item', e, idx)
    },
    setDeleteExample(idx, targetIdx) {
      this.$emit('delete-example', this.currentPageIdx, targetIdx)
    },
    isDisabled(aFlag, bFlag) {
      if (!aFlag && !bFlag) {
        return false
      } else return true
    },
  },
}
</script>
