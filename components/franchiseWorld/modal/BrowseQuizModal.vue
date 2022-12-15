<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataReadQuiz"
      class="modal modal_ac_manage_dtr modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="자료 열람" @close="$emit('close')" />

          <div class="modal-body">
            <!-- 자료 열람 -->
            <div class="reading_section modal_dataquiz">
              <QuizLeftSection
                :quizList="selectData.quizList"
                :currentIdx="currentPageIdx"
                @pagination="setPagination"
                @change-number="$emit('change-number', $event)"
              />

              <QuizRightSection
                :quizList="selectData.quizList"
                :currentIdx="currentPageIdx"
                @preview="setPreview"
              />
            </div>
            <!-- /.자료 열람 -->

            <div class="btnsec">
              <ReferenceBtn
                v-if="isShowBtn(identity, selectData.type).change"
                title="이동"
                @click-event="$emit('open-save-path', 'isQuizBrowse')"
              />
              <ReferenceBtn
                title="공유"
                @click-event="$emit('export-pdf', 'quiz')"
              />
              <ReferenceBtn
                title="다운로드"
                @click-event="$emit('export-pdf', 'quiz')"
              />
              <ReferenceBtn
                v-if="isShowBtn(identity, selectData.type).change"
                title="수정"
                @click-event="$emit('change')"
              />
              <ReferenceBtn
                v-if="isShowBtn(identity, selectData.type).delete"
                title="삭제"
                @click-event="$emit('delete', 'isQuizBrowse')"
              />
            </div>

            <!-- [개발참조] 하단 info_section 부분은 열람 팝업 공통 -->
            <FileInfoSection :fileInfo="selectData" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../common/ModalHeader.vue'
import FileInfoSection from '../reference/FileInfoSection.vue'
import QuizLeftSection from '../quiz/QuizLeftSection.vue'
import QuizRightSection from '../quiz/QuizRightSection.vue'
import ReferenceBtn from '../common/ReferenceBtn.vue'

export default {
  name: 'BrowseQuizModal',
  components: {
    FileInfoSection,
    ModalHeader,
    QuizLeftSection,
    QuizRightSection,
    ReferenceBtn,
  },
  props: {
    open: Boolean,
    selectData: {
      type: Object,
      default: () => {},
    },
    identity: {
      type: String,
      default: '',
    },
    currentPageIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setPagination(e, idx) {
      this.$emit('pagination', e, idx)
    },
    setPreview(e, idx) {
      this.$emit('preview', e, idx)
    },
    isShowBtn(iden, type) {
      const isT = iden === 'teacher'
      if (
        (isT && type === 'myData') ||
        (!isT && (type === 'myData' || type === 'institution'))
      )
        return {
          delete: true,
          perse: true,
          change: true,
        }
      else
        return {
          delete: false,
          perse: true,
          change: false,
        }
    },
  },
}
</script>
