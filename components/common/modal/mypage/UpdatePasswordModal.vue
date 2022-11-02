<template>
  <div
    id="modalPwchange"
    class="modal fade modal_Pwchange"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">비밀번호 변경</h5>
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
          <div class="col-lg-12">
            <div class="info_area">
              <ValidationObserver>
                <div class="form-group row">
                  <label
                    for="password"
                    class="col-4 col-lg-4 col-sm-4 col-form-label"
                    >현재 비밀번호</label
                  >
                  <div class="col">
                    <input
                      id="password"
                      type="password"
                      placeholder="현재 비밀번호 입력"
                      class="form-control form_password"
                    />
                    <i id="eyeOff" class="icons_eye_off"></i>
                    <i id="eyeOn" class="icons_eye_on hide"></i>
                  </div>
                </div>
                <!-- <CustomInputPw
                  id="password"
                  name="비밀번호"
                  rules="required|password"
                  placeholder="비밀번호 입력"
                  :inputValue="userInfo.password"
                  :isPwEyeOn="isPwEyeOn1"
                  @change-input="onChangeInput"
                  @change-type="onChangeType1"
                /> -->
                <div class="form-group row">
                  <label
                    for="password2"
                    class="col-4 col-lg-4 col-sm-4 col-form-label"
                    >새로운 비밀번호</label
                  >
                  <div class="col">
                    <!-- [개발참조]: 예외처리 class="is-invalid"-->
                    <input
                      id="password2"
                      type="password"
                      placeholder="비밀번호 재입력"
                      class="form-control form_password is-invalid"
                    />
                    <i id="eyeOff2" class="icons_eye_off2"></i>
                    <i id="eyeOn2" class="icons_eye_on2 hide"></i>
                    <div class="invalid_text01" style="visibility: visible">
                      영문 대/소문자, 숫자, 특수문자 중 2가지로 조합해주세요.
                    </div>
                    <!-- [개발참조]: 예외처리 텍스트 (기본:visibility: hidden) -->
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="password3"
                    class="col-4 col-lg-4 col-sm-4 col-form-label"
                  >
                    비밀번호 확인</label
                  >
                  <div class="col">
                    <input
                      id="password3"
                      type="password"
                      placeholder="새로운 비밀번호 입력"
                      class="form-control form_password is-invalid"
                    />
                    <i id="eyeOff3" class="icons_eye_off3"></i>
                    <i id="eyeOn3" class="icons_eye_on3 hide"></i>
                    <div class="invalid_text02" style="visibility: visible">
                      비밀번호가 일치하지 않습니다.
                    </div>
                  </div>
                  <!-- 개발참조]: 예외처리 텍스트 (기본:visibility: hidden) -->
                  <div class="explainType01">
                    6자 이상 길이로 만들어주세요.<br />
                    영문 대/소문자, 숫자, 특수문자 중 2가지를 조합해주세요.
                  </div>
                </div>
              </ValidationObserver>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point">저장하기</button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
// import CustomInputPw from '@/components/common/custom/CustomInputPw.vue'
export default {
  name: 'UpdatePasswordModal',
  components: { ValidationObserver },
  props: {
    userInfo: {
      type: Object,
      default: () => ({
        recentPassword: '',
        newPassword: '',
        newPasswordCheck: '',
      }),
    },
    typeCheck: {
      type: Object,
      default: () => ({
        isPwEyeOn1: false,
        isPwEyeOn2: false,
        isPwEyeOn3: false,
      }),
    },
    isError: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped></style>
