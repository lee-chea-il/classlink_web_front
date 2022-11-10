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
      <div class="background_close" @click="$emit('close')"></div>
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
                title="이동"
                @click-event="$emit('open-save-path', 'isQuizBrowseModal')"
              />
              <ReferenceBtn title="공유" @click-event="$emit('export-pdf')" />
              <ReferenceBtn
                title="다운로드"
                @click-event="$emit('export-pdf')"
              />
              <ReferenceBtn title="수정" @click-event="$emit('change')" />
              <ReferenceBtn
                title="삭제"
                @click-event="$emit('delete', 'isQuizBrowseModal')"
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
import ModalHeader from '../../ModalHeader.vue'
import FileInfoSection from '@/components/reference/FileInfoSection.vue'
import QuizLeftSection from '~/components/reference/quizBrowse/QuizLeftSection.vue'
import QuizRightSection from '~/components/reference/quizBrowse/QuizRightSection.vue'

export default {
  name: 'QuizBrowseModal',
  components: {
    FileInfoSection,
    ModalHeader,
    QuizLeftSection,
    QuizRightSection,
  },
  props: {
    open: Boolean,
    selectData: {
      type: Object,
      default: () => {},
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
  },
}
</script>
