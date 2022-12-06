<template>
  <div
    id="modalDataregi02"
    class="modal fade modal_ac_manage_dtr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <ModalHeader idProps="selectClose" title="자료등록" />

        <div class="modal-body">
          <div class="modal_dataregi">
            <!-- 모달 내용 구분 class-->
            <!-- 동영상의 경우 -->
            <SelectItemButton
              v-show="uploadType === 'video'"
              id="video_target"
              title="동영상 업로드"
              desc="mp4 파일 형식"
              inputId="upload_video"
              accept="video/mp4"
              @upload-item="$emit('upload-video', $event)"
            />
            <!-- /.동영상의 경우 -->
            <!-- 문서의 경우 -->
            <SelectItemButton
              v-show="uploadType === 'pdf'"
              id="pdf_target"
              title="문서 및 파일 업로드"
              desc="pdf, ppt, doc, xls, hwp,txt등
              "
              inputId="upload_file"
              accept="application/pdf"
              @upload-item="$emit('upload-pdf', $event)"
            />
            <!-- accept="application/pdf,image/*" -->
            <!-- /.문서의 경우 -->

            <!-- 배경음의 경우 -->
            <SelectItemButton
              v-show="uploadType === 'music'"
              id="music_target"
              title="음원 파일 업로드"
              desc="mp3, wav, aac, flac, dsd 등"
              inputId="upload_music"
              accept="audio/*"
              @upload-item="$emit('upload-music', $event)"
            />
            <!-- /.배경음의 경우 -->
          </div>
        </div>

        <div class="modal-footer" />
      </div>
    </div>
  </div>
</template>

<script>
import ModalHeader from '../../common/ModalHeader.vue'
import SelectItemButton from '../common/SelectContentButton.vue'

export default {
  name: 'VideoFileUploadModal',
  components: { ModalHeader, SelectItemButton },
  props: {
    uploadType: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.label {
  width: 100%;
  cursor: pointer;
}
</style>
