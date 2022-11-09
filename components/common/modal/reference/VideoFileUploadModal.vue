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
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">자료 등록</h5>
          <button
            id="selectClose"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>

        <div class="modal-body">
          <div class="modal_dataregi">
            <!-- 모달 내용 구분 class-->
            <!-- 동영상의 경우 -->
            <div
              id="video_target"
              class="box01"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modalDataRegiModi"
            >
              <label for="upload_video" class="label" @click.stop>
                <div class="sub">
                  <form
                    id="uploadForm"
                    action="upload"
                    method="post"
                    enctype="multipart/form-data"
                  >
                    <input
                      id="upload_video"
                      type="file"
                      accept="video/mp4"
                      style="display: none"
                      @click.stop
                      @input="$emit('upload-video', $event)"
                    />
                    <div>동영상 업로드</div>
                    <!-- 221027 mp4만 우선적용 -->
                    <div class="sub02">mp4 파일 형식으로 업로드 해주세요</div>
                    <!-- <div class="sub02">mp4, mp3, avi, mov, flv 등</div> -->
                  </form>
                </div>
              </label>
            </div>
            <!-- /.동영상의 경우 -->
            <!-- 문서의 경우 -->
            <div
              id="pdf_target"
              class="box01"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modalDataRegiModi"
            >
              <label for="upload_file" class="label" @click.stop>
                <div class="sub">
                  <form
                    id="uploadForm"
                    action="upload"
                    method="post"
                    enctype="multipart/form-data"
                  >
                    <input
                      id="upload_file"
                      type="file"
                      accept="application/pdf"
                      style="display: none"
                      @click.stop
                      @input="$emit('upload-pdf', $event)"
                    />
                    <div>문서 및 파일 업로드</div>
                    <!-- pdf파일 우선 적용 -->
                    <div class="sub02">pdf 파일 형식으로 업로드 해주세요</div>
                    <!-- <div class="sub02">pdf, ppt, doc, xls, hwp, txt 등</div> -->
                  </form>
                </div>
              </label>
            </div>
            <!-- /.문서의 경우 -->
          </div>
        </div>

        <div class="modal-footer">
          <!-- <button class="btn btn_crud_point">확인</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoFileUploadModal',
}
</script>

<style scoped>
.label {
  width: 100%;
  cursor: pointer;
}
</style>
