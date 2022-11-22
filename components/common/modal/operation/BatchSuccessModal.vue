<template>
  <div
    id="modalBatchregi01"
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
          <div class="title">학생 등록 성공</div>
          <div class="content">
            클래스링크 학생 일괄 등록.xls <span>000</span>명
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
  name: 'BatchSuccessModal',
}
</script>
<style scoped></style>
