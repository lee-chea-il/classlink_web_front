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
                    for="Password"
                    class="col-4 col-lg-4 col-sm-4 col-form-label"
                    >현재 비밀번호</label
                  >
                  <div class="col">
                    <CustomMypageInputPw
                      id="recentPassword"
                      name="현재 비밀번호"
                      placeholder="현재 비밀번호 입력"
                      type="password"
                      :inputValue="newPassword.recentPassword"
                      :isPwEyeOn="pwTypeInfo.isPwEyeOn1"
                      @change-input="$emit('change-input', $event)"
                      @change-type="$emit('change-type1')"
                    />
                    <!-- <input
                      id="recentPassword"
                      type="password"
                      placeholder="현재 비밀번호 입력"
                      class="form-control form_password"
                    />
                    <i id="eyeOff" class="icons_eye_off"></i>
                    <i id="eyeOn" class="icons_eye_on hide"></i> -->
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="password2"
                    class="col-4 col-lg-4 col-sm-4 col-form-label"
                    >새로운 비밀번호</label
                  >
                  <div class="col">
                    <!-- [개발참조]: 예외처리 class="is-invalid"-->
                    <CustomMypageInputPw
                      id="password"
                      name="새로운 비밀번호"
                      placeholder="새로운 비밀번호 입력"
                      rules="required|password"
                      type="password"
                      :inputValue="newPassword.password"
                      :isPwEyeOn="pwTypeInfo.isPwEyeOn2"
                      @change-input="$emit('change-input', $event)"
                      @change-type="$emit('change-type2')"
                    />
                    <!-- <div class="invalid_text01" style="visibility: visible">
                      dfsd
                    </div> -->
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
                    <CustomMypageInputPw
                      id="passwordCheck"
                      name="비밀번호 확인"
                      placeholder="새로운 비밀번호 재입력"
                      rules="required"
                      type="password"
                      :isError="isError"
                      :inputValue="newPassword.passwordCheck"
                      :isPwEyeOn="pwTypeInfo.isPwEyeOn3"
                      @change-input="$emit('check-pw', $event)"
                      @change-type="$emit('change-type3')"
                    />
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
          <button
            id="passwordClose"
            class="btn btn_crud_point"
            :data-dismiss="
              myInfo.password === newPassword.recentPassword ? 'modal' : ''
            "
            @click="$emit('confirm-click')"
          >
            저장하기
          </button>
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
import CustomMypageInputPw from '@/components/common/custom/CustomMypageInputPw.vue'
export default {
  name: 'UpdatePasswordModal',
  components: { ValidationObserver, CustomMypageInputPw },
  props: {
    myInfo: {
      type: Object,
      default: null,
    },
    newPassword: {
      type: Object,
      default: null,
    },
    pwTypeInfo: {
      type: Object,
      default: null,
    },
    isError: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClickConfirmBtn() {
      this.$emit('confirm-click')
      document.getElementById('passwordClose').click()
    },
  },
}
</script>
<style scoped></style>
