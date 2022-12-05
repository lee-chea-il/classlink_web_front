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
          <ModalHeader :title="`자료 ${modalTitle}`" @close="$emit('close')" />
          <div class="modal-body">
            <div class="modal_dataquiz row">
              <!-- 모달 내용 구분 class-->

              <!-- 왼쪽 영역 -->
              <ReferenceAddLeftField
                :reference="reference"
                :pushKeyword="pushKeyword"
                :pageRoot="pageRoot"
                target="quiz"
                @change-input="$emit('change-input', $event)"
                @set-keyword="$emit('set-keyword', $event)"
                @change-keyword="$emit('changePushKeyword', $event)"
                @delete-keyword="$emit('delete-keyword', $event)"
                @open-save-path="$emit('open-save-path', $event)"
                @delete-thumbnail="$emit('delete-thumbnail')"
              />
              <!-- /.왼쪽 영역 -->

              <!-- 오른쪽 영역 -->
              <QuizRightField
                :isCreate="true"
                :quizList="reference.quizList"
                :currentPageIdx="currentPageIdx"
                @change-item="onChangeItem"
                @pagination="setPagination"
                @select-type="setSelectType"
                @select-ox="setSelectOx"
                @select-dificultade="setSelectDificultade"
                @preview="setPreview"
                @change-number="$emit('change-number', $event)"
                @plus-item="$emit('plus-item', $event)"
                @delete-quiz="$emit('delete-quiz', $event)"
              />
              <!-- /.오른쪽 영역 -->
            </div>
          </div>
          <ModalBtnBox :submitTxt="modalTitle" @close="$emit('close')" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../common/ModalHeader.vue'
import ModalBtnBox from '../../common/ModalBtnBox.vue'
import ReferenceAddLeftField from '~/components/world/reference/ReferenceLeftField.vue'
import QuizRightField from '~/components/reference/quizAdd/QuizRightField.vue'

export default {
  name: 'AddQuizModal',
  components: {
    ReferenceAddLeftField,
    ModalHeader,
    ModalBtnBox,
    QuizRightField,
  },
  props: {
    open: Boolean,
    modalTitle: {
      type: String,
      default: Boolean,
    },
    pageRoot: {
      type: String,
      default: '',
    },
    currentPageIdx: {
      type: Number,
      default: 0,
    },
    reference: {
      type: Object,
      default: () => {},
    },
    pushKeyword: {
      type: String,
      default: '',
    },
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
      this.$emit('select-dificultade', idx, num)
    },
    setPreview(prev, isFirst) {
      this.$emit('preview', 'add', isFirst)
    },
  },
}
</script>

<style></style>
