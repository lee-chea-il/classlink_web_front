<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataRegiQuiz"
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
              <div class="modal_dataquiz row">
                <!-- 모달 내용 구분 class-->

                <!-- 왼쪽 영역 -->
                <ReferenceAddLeftField
                  :reference="reference"
                  :pushKeyword="pushKeyword"
                  :pageRoot="pageRoot"
                  target="quiz"
                  :uploadInfo="uploadInfo"
                  @change-input="$emit('change-input', $event)"
                  @set-keyword="$emit('set-keyword', $event)"
                  @change-keyword="$emit('change-keyword', $event)"
                  @delete-keyword="$emit('delete-keyword', $event)"
                  @open-save-path="$emit('open-save-path', $event)"
                  @delete-thumbnail="$emit('delete-thumbnail')"
                />
                <!-- /.왼쪽 영역 -->

                <!-- 오른쪽 영역 -->
                <QuizRightField
                  :isCreate="true"
                  :quizList="reference.quiz"
                  :currentPageIdx="currentPageIdx"
                  :uploadInfo="uploadInfo"
                  @change-item="onChangeItem"
                  @pagination="setPagination"
                  @select-type="setSelectType"
                  @select-ox="setSelectOx"
                  @select-level="setSelectDificultade"
                  @preview="setPreview"
                  @change-number="$emit('change-number', $event)"
                  @plus-item="$emit('plus-item', $event)"
                  @delete-quiz="$emit('delete-quiz', $event)"
                />
                <!-- /.오른쪽 영역 -->
              </div>
            </div>
            <ModalBtnBox
              :invalid="isDisabled(invalid, reference.keyword?.length === 0)"
              :submitTxt="modalTitle"
              @submit="setSubmit(modalTitle)"
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
import QuizRightField from '../quiz/QuizRightField.vue'
import ReferenceAddLeftField from '../reference/ReferenceLeftField.vue'

export default {
  name: 'AddQuizModal',
  components: {
    ReferenceAddLeftField,
    ModalHeader,
    ModalBtnBox,
    QuizRightField,
    ValidationObserver,
  },
  props: {
    open: Boolean,
    modalTitle: { type: String, default: Boolean },
    pageRoot: { type: String, default: '' },
    currentPageIdx: { type: Number, default: 0 },
    reference: { type: Object, default: () => {} },
    pushKeyword: { type: String, default: '' },
    uploadInfo: { type: Object, default: () => {} },
  },
  methods: {
    onChangeItem(e, idx) {
      this.$emit('change-item', e, idx)
    },
    setPagination(item, idx) {
      this.$emit('pagination', item, idx)
    },
    setSelectType(e, idx, num) {
      this.$emit('select-type', e, idx, num)
    },
    setSelectOx(idx, num) {
      this.$emit('select-ox', idx, num)
    },
    setSelectDificultade(idx, num) {
      this.$emit('select-level', idx, num)
    },
    setPreview(prev, isFirst) {
      this.$emit('preview', 'add', isFirst)
    },
    isDisabled(aFlag, bFlag) {
      if (!aFlag && !bFlag) {
        return false
      } else return true
    },
    setSubmit(type) {
      if (type === '수정') {
        return this.$emit('change-submit', this.reference)
      } else return this.$emit('submit')
    },
  },
}
</script>

<style></style>
