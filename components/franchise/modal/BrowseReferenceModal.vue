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
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="자료 열람" @close="$emit('close')" />
          <div class="modal-body">
            <VideoView
              :open="selectData.datatype === '01'"
              :data="selectData"
            />
            <MusicView
              :open="selectData.datatype === '07'"
              :data="selectData"
            />

            <PdfView :open="selectData.datatype === '02'" :data="selectData" />
            <YoutubeView
              :open="selectData.datatype === '05'"
              :data="selectData"
            />

            <UrlView :open="selectData.datatype === '06'" :data="selectData" />

            <div class="btnsec">
              <ReferenceBtn
                v-if="isShowBtn(identity, selectData.type).change"
                title="이동"
                @click-event="$emit('open-save-path', 'isReferenceBrowse')"
              />
              <ReferenceBtn
                title="공유"
                @click-event="
                  $emit('view-url', 'isReferenceBrowse', selectData.save_path)
                "
              />
              <button class="btn btn_crud_default">
                <a
                  :href="selectData.save_path"
                  download="abc.mp4"
                  target="_blank"
                  >다운로드</a
                >
              </button>
              <ReferenceBtn
                v-if="isShowBtn(identity, selectData.type).change"
                title="수정"
                @click-event="$emit('reference-change')"
              />
              <ReferenceBtn
                v-if="isShowBtn(identity, selectData.type).delete"
                title="삭제"
                @click-event="$emit('delete', 'isReferenceBrowse')"
              />
            </div>

            <!-- [개발참조] 하단 info_section 부분은 열람 팝업 공통 -->
            <FileInfoSection :pageRoot="pageRoot" :fileInfo="selectData" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../common/ModalHeader.vue'
import VideoView from '../reference/ViewVidew.vue'
import PdfView from '../reference/ViewPdf.vue'
import YoutubeView from '../reference/ViewYoutube.vue'
import UrlView from '../reference/ViewUrl.vue'
import MusicView from '../reference/ViewMusic.vue'
import FileInfoSection from '../reference/FileInfoSection.vue'
import ReferenceBtn from '../common/ReferenceBtn.vue'

export default {
  name: 'BrowseReferenceModal',
  components: {
    FileInfoSection,
    ModalHeader,
    VideoView,
    PdfView,
    YoutubeView,
    UrlView,
    MusicView,
    ReferenceBtn,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    identity: {
      type: String,
      default: '',
    },
    pageRoot: {
      type: String,
      default: '',
    },
    selectData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    isShowBtn(iden, type) {
      return {
        delete: true,
        perse: true,
        change: true,
      }
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
