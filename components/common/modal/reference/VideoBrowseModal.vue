<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataRead"
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
            <VideoView
              :open="selectData.uploadType === 'video'"
              :data="selectData"
            />

            <PdfView
              :open="selectData.uploadType === 'pdf'"
              :data="selectData"
            />
            <YoutubeView
              :open="selectData.uploadType === 'youtube'"
              :data="selectData"
            />

            <UrlView
              :open="selectData.uploadType === 'url'"
              :data="selectData"
            />

            <div class="btnsec">
              <ReferenceBtn
                title="이동"
                @click-event="$emit('open-save-path', 'isReferenceBrowseModal')"
              />
              <ReferenceBtn
                title="공유"
                @click-event="
                  $emit(
                    'view-url',
                    'isReferenceBrowseModal',
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
                @click-event="$emit('delete', 'isReferenceBrowseModal')"
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
import FileInfoSection from '~/components/reference/FileInfoSection.vue'
import VideoView from '~/components/reference/referenceBrowse/VideoView.vue'
import PdfView from '~/components/reference/referenceBrowse/PdfView.vue'
import YoutubeView from '~/components/reference/referenceBrowse/YoutubeView.vue'
import UrlView from '~/components/reference/referenceBrowse/UrlView.vue'
export default {
  name: 'VideoBrowseModal',
  components: {
    FileInfoSection,
    ModalHeader,
    VideoView,
    PdfView,
    YoutubeView,
    UrlView,
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
</style>
