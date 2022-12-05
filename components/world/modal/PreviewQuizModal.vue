<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalPreviewQuiz"
      class="modal double modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="퀴즈 미리보기" @close="$emit('close')" />

          <div class="modal-body">
            <div class="preview_quiz row">
              <!-- 왼쪽영역 -->
              <LeftSection :quizList="quizList" />
              <!-- /. 왼쪽영역 -->

              <!-- 오른쪽영역 -->
              <RightSection
                :currentIdx="currentPageIdx"
                :itemList="quizList"
                :length="quizList.length"
              />

              <ArrowBox :length="quizList.length" @pagination="setPagination" />
            </div>
            <!-- /. 오른쪽영역 -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../common/ModalHeader.vue'
import LeftSection from '~/components/world/quizPreview/LeftSection.vue'
import RightSection from '~/components/world/quizPreview/RightSection.vue'
import ArrowBox from '~/components/reference/commom/ArrowBox.vue'

export default {
  name: 'QuizPreviewModal',
  components: { ModalHeader, LeftSection, RightSection, ArrowBox },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    currentPageIdx: {
      type: Number,
      default: 0,
    },
    quizList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setPagination(e, idx) {
      this.$emit('pagination', e, this.quizList.length)
    },
  },
}
</script>

<style></style>
