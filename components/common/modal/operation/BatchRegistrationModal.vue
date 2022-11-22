<template>
  <div
    id="modalBatchregi"
    class="modal fade ac_manage_std"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">학생 일괄 등록</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="title01">STEP 1</div>
          <div class="content02">
            엑셀 파일을 다운로드 하여 학생 정보를 입력해주세요.
          </div>
          <div class="content">(내용 형식을 수정하면 등록이 불가능합니다.)</div>
          <button class="file_down">
            <span class="icon_download"></span>파일 다운로드
          </button>

          <div class="divid_section">
            <div class="title02">STEP 2</div>
            <div class="content03">내용 입력된 엑셀 파일을 첨부해 주세요.</div>
            <form
              id="uploadForm"
              action="upload"
              method="post"
              enctype="multipart/form-data"
            >
              <input id="file" type="file" name="file" style="display: none" />
              <input
                id="input00"
                type="text"
                class="form-control form-inline"
                placeholder="엑셀 파일을 업로드하세요."
              />
              <div class="button" onclick="onclick=document.all.file.click()">
                <span class="icon_link"></span>파일 첨부
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn_crud_point"
            data-toggle="modal"
            data-target="#modalBatchregi01"
          >
            등록
          </button>
          <button class="btn btn_crud_default">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BatchRegistrationModal',
}
</script>
<style scoped></style>
