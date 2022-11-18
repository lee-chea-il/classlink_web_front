<template>
  <div
    id="modalTcNum"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm s2">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">로그아웃</h5>
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
          사용 선생님의 수를 초과하였습니다. <br />
          추가 결제 후 진행해주세요.
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point">초기화</button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TeacherCountAlertModal',
}
</script>
<style scoped></style>
