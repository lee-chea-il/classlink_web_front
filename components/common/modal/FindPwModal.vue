<template>
  <div
    class="modal fade modal_login"
    id="modalFindPw"
    tabindex="-1"
    aria-labelledby="modalFindPw"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalFindPw">비밀번호 찾기</h5>
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
          <div class="text-area">
            <span class="text_type02 mdW100"
              >아이디와 가입하실 때 등록하신 </span
            ><span class="text_type02 mdW100"
              >이메일 주소를 입력해 주세요.</span
            >
          </div>
          <div class="form_pw">
            <div class="form-group">
              <label for="userID">아이디</label>
              <input
                type="text"
                class="form-control form-inline"
                id="userID"
                placeholder="아이디 입력"
              />
            </div>
            <div class="form-group">
              <label for="userEmail">이메일</label>
              <input
                type="text"
                class="form-control form-inline"
                id="userEmail"
                placeholder="이메일 주소 입력"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point" data-dismiss="modal">확인</button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped></style>
