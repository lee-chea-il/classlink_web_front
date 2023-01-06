<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataReadNote"
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
            <div class="reading_section modal_dataquiz note_divide">
              <LeftSection
                :examList="selectData.note_exam_asks"
                :currentIdx="currentPageIdx"
                @change-number="setChangeNumber"
                @pagination="setPagination"
                @preview="setPreview"
              />
              <RightSection
                :examList="selectData.note_exam_asks"
                :currentIdx="currentPageIdx"
                @change-number="setChangeNumber"
                @pagination="setPagination"
                @preview="setPreview"
              />
            </div>
            <!-- /.자료 열람 -->

            <div class="btnsec">
              <ReferenceBtn
                v-if="isShowBtn(identity, selectData.type).change"
                title="이동"
                @click-event="$emit('open-save-path', 'isNoteTestBrowse')"
              />
              <ReferenceBtn
                title="공유"
                @click-event="$emit('export-pdf', 'test')"
              />
              <ReferenceBtn
                title="다운로드"
                @click-event="$emit('export-pdf', 'test')"
              />
              <ReferenceBtn
                v-if="isShowBtn(identity, selectData.type).change"
                title="수정"
                @click-event="$emit('change')"
              />
              <ReferenceBtn
                v-if="isShowBtn(identity, selectData.type).delete"
                title="삭제"
                @click-event="$emit('delete', 'isNoteTestBrowse')"
              />
            </div>

            <!-- [개발참조] 하단 info_section 부분은 열람 팝업 공통 -->
            <FileInfoSection :fileInfo="selectData" :uploadInfo="uploadInfo" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../common/ModalHeader.vue'
import ReferenceBtn from '../common/ReferenceBtn.vue'
import RightSection from '../noteTest/BrowseRightField.vue'
import LeftSection from '../noteTestBrowse/LeftSection.vue'
import FileInfoSection from '../reference/FileInfoSection.vue'

export default {
  name: 'BrowseNoteTestModal',
  components: {
    FileInfoSection,
    ModalHeader,
    ReferenceBtn,
    LeftSection,
    RightSection,
  },
  props: {
    open: { type: Boolean, default: false },
    identity: { type: String, default: '' },
    selectData: { type: Object, default: () => {} },
    currentPageIdx: { type: Number, default: 0 },
    uploadInfo: { type: Object, default: () => {} },
  },
  methods: {
    setChangeNumber(e, idx) {
      this.$emit('change-number', e, idx)
    },
    setPagination(e, idx) {
      this.$emit('pagination', e, idx)
    },
    setPreview(e, idx) {
      this.$emit('preview', e, idx)
    },
    isShowBtn(iden, type) {
      // const isT = iden === 'teacher'
      // if (
      //   (isT && type === 'myData') ||
      //   (!isT && (type === 'myData' || type === 'institution'))
      // )
      //   return {
      //     delete: true,
      //     perse: true,
      //     change: true,
      //   }
      // else
      //   return {
      //     delete: false,
      //     perse: true,
      //     change: false,
      //   }

      return {
        delete: true,
        perse: true,
        change: true,
      }
    },
  },
}
</script>

<style scoped>
#modalDataRead .modal-body,
#modalDataReadQuiz .modal-body,
#modalDataReadNote .modal-body {
  text-align: initial;
}
</style>
