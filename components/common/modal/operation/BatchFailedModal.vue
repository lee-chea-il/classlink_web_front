<template>
  <div
    id="modalBatchregi02"
    class="modal fade ac_manage_std double"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm">
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
          <div class="title">
            <!-- <i class="icon_information"></i> -->
            <span class="icon_information"></span> 학생 등록 실패
          </div>
          <div class="content">
            실패한 학생의 정보를 수정하여 다시 시도해주세요.
          </div>
          <div class="outer">
            <div class="title02">등록 실패 행 번호</div>
            <div class="content02">
              7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
              7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point">확인</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BatchFailedModal',
}
</script>
<style scoped></style>
