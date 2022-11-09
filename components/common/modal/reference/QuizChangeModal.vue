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
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="자료 수정" @close="$emit('close')" />

          <div class="modal-body">
            <div class="modal_dataquiz row">
              <!-- 모달 내용 구분 class-->
              <!-- 왼쪽 영역 -->
              <ReferenceAddLeftField
                :reference="quiz"
                :pushKeyword="pushKeyword"
                target="quizChange"
                @change-input="$emit('change-input', $event)"
                @set-keyword="$emit('set-keyword', $event)"
                @change-keyword="$emit('changePushKeyword', $event)"
                @delete-keyword="$emit('delete-keyword', $event)"
                @open-save-path="$emit('open-save-path', $event)"
              />
              <!-- /.왼쪽 영역 -->

              <!-- 오른쪽 영역 -->
              <QuizRightField
                :quizList="quiz.quizList"
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

          <ModalBtnBox @close="$emit('close')" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'
import ModalBtnBox from '../../ModalBtnBox.vue'
import QuizRightField from '~/components/reference/quizAdd/QuizRightField.vue'

export default {
  name: 'QuizChangeModal',
  components: {
    ModalHeader,
    ModalBtnBox,
    QuizRightField,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    quiz: {
      type: Object,
      default: () => {},
    },
    currentPageIdx: {
      type: Number,
      default: 0,
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
    setSelectType(idx, num) {
      this.$emit('select-type', idx, num)
    },
    setSelectOx(idx, num) {
      this.$emit('select-ox', idx, num)
    },
    setSelectDificultade(idx, num) {
      this.$emit('select-dificultade', idx, num)
    },
    setPreview(prev, isFirst) {
      this.$emit('preview', 'change', isFirst)
    },
  },
}
</script>

<style></style>
