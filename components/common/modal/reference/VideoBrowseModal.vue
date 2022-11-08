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
            <!-- [개발참조] 동영상 자료 열람 시 -->
            <div v-if="selectData.uploadType === 'video'" class="video">
              <div class="bar">
                <span class="pdf_title">{{ selectData.name }}</span>
              </div>
              <video class="video" :src="selectData.savePath" controls />
            </div>

            <!-- [개발참조] 문서자료 열람 시 -->
            <div v-else-if="selectData.uploadType === 'pdf'" class="pdf">
              <div class="bar">
                <span class="pdf_title">{{ selectData.name }}</span>
                <span class="list"></span>
                <span class="full"></span>
              </div>
              <embed
                class="embed"
                :src="selectData.savePath"
                type="application/pdf"
              />
            </div>

            <!-- [개발참조] 유튜브 열람 시 -->
            <div v-else-if="selectData.uploadType === 'youtube'" class="pdf">
              <div class="bar">
                <span class="pdf_title">{{ selectData.name }}</span>
              </div>
              <iframe class="iframe" :src="selectData.savePath" />
            </div>

            <!-- [개발참조] url 열람 시 -->
            <div v-else-if="selectData.uploadType === 'url'" class="pdf">
              <div class="bar">
                <span class="pdf_title">{{ selectData.name }}</span>
              </div>
              <iframe class="iframe" :src="selectData.savePath" />
            </div>

            <div class="btnsec">
              <button
                class="btn btn_crud_default"
                data-toggle="modal"
                @click="$emit('open-save-path', 'isReferenceBrowseModal')"
              >
                이동
              </button>
              <button
                class="btn btn_crud_default"
                data-toggle="modal"
                @click="
                  $emit(
                    'view-url',
                    'isReferenceBrowseModal',
                    selectData.savePath
                  )
                "
              >
                공유
              </button>
              <button class="btn btn_crud_default">
                <a
                  :href="selectData.savePath"
                  download="abc.mp4"
                  target="_blank"
                  >다운로드</a
                >
              </button>
              <button
                class="btn btn_crud_default"
                data-dismiss="modal"
                data-toggle="modal"
                @click="$emit('reference-change')"
              >
                수정
              </button>
              <button
                class="btn btn_crud_default"
                data-toggle="modal"
                @click="$emit('delete', 'isReferenceBrowseModal')"
              >
                삭제
              </button>
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
export default {
  name: 'VideoBrowseModal',
  components: { FileInfoSection, ModalHeader },
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
