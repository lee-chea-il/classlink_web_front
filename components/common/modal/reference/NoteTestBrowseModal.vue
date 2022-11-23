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
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="자료 열람" @close="$emit('close')" />

          <div class="modal-body">
            <!-- 자료 열람 -->
            <NoteTestInfo
              :selectData="selectData"
              :currentIdx="currentPageIdx"
              @change-number="setChangeNumber"
              @pagination="setPagination"
              @preview="setPreview"
            />
            <!-- /.자료 열람 -->

            <div class="btnsec">
              <ReferenceBtn
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
              <ReferenceBtn title="수정" @click-event="$emit('change')" />
              <ReferenceBtn
                title="삭제"
                @click-event="$emit('delete', 'isNoteTestBrowse')"
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
import NoteTestInfo from '~/components/reference/noteTestBrowse/NoteTestInfo.vue'

export default {
  name: 'NoteTestBrowseModal',
  components: { FileInfoSection, ModalHeader, NoteTestInfo },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
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
    setChangeNumber(e, idx) {
      this.$emit('change-number', e, idx)
    },
    setPagination(e, idx) {
      this.$emit('pagination', e, idx)
    },
    setPreview(e, idx) {
      this.$emit('preview', e, idx)
    },
  },
}
</script>

<style></style>
