<template>
  <div
    id="modalFindpw"
    class="modal fade modal_login"
    tabindex="-1"
    aria-labelledby="modalFindpw"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="modalFindpw" class="modal-title">비밀번호 찾기</h5>
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
                id="pw_mem_id"
                type="text"
                class="form-control form-inline"
                placeholder="아이디"
                :value="findPwInput.pw_mem_id"
                @input="$emit('change-input', $event)"
              />
            </div>
            <div class="form-group">
              <label for="userEmail">이메일</label>
              <input
                id="pw_mem_email"
                type="text"
                class="form-control form-inline"
                placeholder="이메일 주소 입력"
                :value="findPwInput.pw_mem_email"
                @input="$emit('change-input', $event)"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point" @click="$emit('find-pw')">
            확인
          </button>
          <button
            id="modal_close"
            class="btn btn_crud_default"
            data-dismiss="modal"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindPwModal',
  props: {
    findPwInput: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
