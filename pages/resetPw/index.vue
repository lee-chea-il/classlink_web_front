<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <div class="title_type2">
        <h2>비밀번호 재설정</h2>
        <div class="text">
          <span>example@mail.com</span>
          으로 코드가 전송되었습니다.
        </div>
      </div>
      <div class="form_section">
        <ValidationObserver>
          <form>
            <CustomInput
              id="authNumber"
              name="인증코드"
              rules="required|numeric|digits:6"
              placeholder="인증코드 입력"
              :inputValue="userInfo.authNumber"
              type="authNumber"
              @change-input="onChangeInput"
            />
            <CustomInputPw
              id="password"
              name="비밀번호"
              rules="required|password"
              placeholder="비밀번호 입력"
              :inputValue="userInfo.password"
              :isPwEyeOn="isPwEyeOn1"
              @change-input="onChangeInput"
              @change-type="onChangeType1"
            />
            <CustomInputPw
              id="passwordCheck"
              name="비밀번호 재입력"
              rules="required"
              placeholder="비밀번호 재입력"
              :isError="isError"
              :isPwEyeOn="isPwEyeOn2"
              :inputValue="userInfo.passwordCheck"
              @change-input="onChangePasswordCheck"
              @change-type="onChangeType2"
            />
            <!-- <div class="form-group">
              <label for="password2" class="hide">비밀번호 재입력</label>
              <input
                id="password2"
                :type="!isPwEyeOn2 ? 'password' : 'text'"
                placeholder="비밀번호 재입력"
                class="form-control form_password"
              />
              <i
                id="eyeOff2"
                :class="!isPwEyeOn2 ? 'icons_eye_off' : 'icons_eye_off hide'"
                @click="changePw2Type"
              ></i>
              <i
                id="eyeOn2"
                :class="isPwEyeOn2 ? 'icons_eye_on' : 'icons_eye_on hide'"
                @click="changePw2Type"
              ></i>
            </div> -->
            <!-- <div class="invalid_text" style="visibility: visible">
              영문 대/소문자, 숫자, 특수문자 중 2가지로 조합해주세요.
            </div> -->
            <!-- [개발참조]: 예외처리 텍스트 (기본:visibility: hidden)-->
            <div class="explainType01">
              6자 이상 길이로 만들어주세요.<br />
              영문 대/소문자, 숫자, 특수문자 중 2가지를<br />
              조합해주세요.
            </div>
          </form>
        </ValidationObserver>
        <!-- [개발참조]:class="disabled"제거시 활성 -->
        <button class="btn btn btn_crud_point" @click="handleSubmit">
          확인
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import CustomInput from '@/components/common/custom/CustomInput.vue'
import CustomInputPw from '@/components/common/custom/CustomInputPw.vue'
export default {
  name: 'ResetPw',
  components: { ValidationObserver, CustomInput, CustomInputPw },
  layout: 'LoginLayout',
  data() {
    return {
      userInfo: {
        password: '',
        passwordCheck: '',
        authNumber: '',
      },
      isPwEyeOn1: false,
      isPwEyeOn2: false,
      isError: false,
    }
  },
  methods: {
    onChangeInput({ target: { value, id } }) {
      this.userInfo[id] = value
    },
    onChangePasswordCheck({ target: { value } }) {
      this.userInfo.passwordCheck = value
      if (this.userInfo.passwordCheck === this.userInfo.password) {
        this.isError = false
      } else {
        this.isError = true
      }
    },
    onChangeType1() {
      if (this.isPwEyeOn1 === false) {
        this.isPwEyeOn1 = true
      } else {
        this.isPwEyeOn1 = false
      }
    },
    onChangeType2() {
      if (this.isPwEyeOn2 === false) {
        this.isPwEyeOn2 = true
      } else {
        this.isPwEyeOn2 = false
      }
    },
    handleSubmit() {
      console.log('변경완료')
    },
  },
}
</script>
<style scoped></style>
