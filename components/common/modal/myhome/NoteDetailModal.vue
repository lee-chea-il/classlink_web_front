<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataRead"
      class="modal modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="노트 열람" @close="$emit('close')" />

          <div class="modal-body modal-height">
            <PdfView
              :open="selectData.uploadType === 'pdf'"
              :data="selectData"
            />
            <!-- <div class="btnsec">
              <ReferenceBtn
                title="이동"
                @click-event="$emit('open-save-path', 'isReferenceBrowse')"
              />
              <ReferenceBtn
                title="공유"
                @click-event="
                  $emit(
                    'view-url',
                    'isReferenceBrowse',
                    selectData.savePath
                  )
                "
              />
              <button class="btn btn_crud_default">
                <a
                  :href="selectData.savePath"
                  download="abc.mp4"
                  target="_blank"
                  >다운로드</a
                >
              </button>
              <ReferenceBtn
                title="수정"
                @click-event="$emit('reference-change')"
              />
              <ReferenceBtn
                title="삭제"
                @click-event="$emit('delete', 'isReferenceBrowse')"
              />
            </div> -->

            <!-- [개발참조] 하단 info_section 부분은 열람 팝업 공통 -->
            <div class="info_section">
              <div class="cont">
                <span class="title">파일 이름</span>
                <span>{{ selectData.name }}</span>
              </div>
              <div class="line"></div>
              <div class="cont02">
                <div class="title">콘텐츠 유형</div>
                <span class="title04-1">PDF</span>
              </div>
              <div class="cont02">
                <div class="title">공개 여부</div>
                <span class="title05-1">{{
                  selectData.publicOpenYn ? 'ON' : 'OFF'
                }}</span>
              </div>
              <div class="cont02">
                <div class="title">과목</div>
                <span class="title06-1">{{ selectData.subject }}</span>
              </div>
              <div class="cont02">
                <div class="title">경로</div>
                <span class="title07-1">{{ selectData.savePath }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'
import PdfView from '~/components/reference/referenceBrowse/PdfView.vue'
export default {
  name: 'VideoBrowseModal',
  components: {
    ModalHeader,
    PdfView,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    selectData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.video,
.embed,
.iframe {
  width: 100%;
  height: calc(100% - 50px) !important;
}
.modal-height {
  height: 690px !important;
}
</style>
