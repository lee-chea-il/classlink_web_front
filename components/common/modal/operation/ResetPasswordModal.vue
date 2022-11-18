<template>
  <div
    id="modalPwchange"
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
          초기 비밀번호는 123456입니다. <br />
          비밀번호를 초기화하시겠습니까?
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
  name: 'ResetPasswordModal',
}
</script>
<style scoped></style>
