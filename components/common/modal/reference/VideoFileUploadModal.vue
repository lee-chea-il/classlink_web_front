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
              id="video_target"
              title="동영상 업로드"
              desc="mp4 파일 형식으로 업로드 해주세요"
              inputId="upload_video"
              accept="video/mp4"
              @upload-item="$emit('upload-video', $event)"
            />
            <!-- /.동영상의 경우 -->
            <!-- 문서의 경우 -->
            <SelectItemButton
              id="pdf_target"
              title="문서 및 파일 업로드"
              desc="pdf 파일 형식으로 업로드 해주세요"
              inputId="upload_file"
              accept="application/pdf,image/*"
              @upload-item="$emit('upload-pdf', $event)"
            />
            <!-- /.문서의 경우 -->
          </div>
        </div>

        <div class="modal-footer" />
      </div>
    </div>
  </div>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'
import SelectItemButton from '~/components/reference/commom/SelectItemButton.vue'

export default {
  name: 'VideoFileUploadModal',
  components: { ModalHeader, SelectItemButton },
}
</script>

<style scoped>
.label {
  width: 100%;
  cursor: pointer;
}
</style>
