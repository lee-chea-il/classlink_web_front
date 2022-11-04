<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <div class="title_type2">
        <h2>회원가입</h2>
      </div>
      <div class="form_section">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="handleSubmit">
            <!-- [개발참조]:예외처리 시 css 적용 방법
						1. <input 에 추가
						오류: class="is-invalid"
						성공: class="is-valid"

						2. 안내 텍스트
						오류: <div class="invalid_text">
						성공: <div class="valid_text">
						-->

            <!-- [개발참조]:예외처리-오류의 예 -->
            <CustomInput
              id="name"
              name="이름"
              placeholder="이름 입력"
              rules="min:2|required"
              type="text"
              :inputValue="userInfo.name"
              @change-input="onChangeInput"
            />

            <!-- [개발참조]:예외처리-성공의 예 -->
            <CustomInput
              id="nickName"
              :checkValue="nickNameCheck"
              name="닉네임"
              rules="min:2|required"
              placeholder="닉네임 입력"
              type="text"
              :isCheckBox="true"
              :inputValue="userInfo.nickName"
              :nickNameCheck="nickNameCheck"
              @change-input="onChangeInput"
              @change-check="onChangeCheckBox"
            />

            <!-- <CustomInput
              id="account"
              name="아이디"
              rules="required|account"
              placeholder="아이디 입력"
              type="text"
              :inputValue="userInfo.account"
              @change-input="onChangeInput"
            /> -->
            <CustomInput
              id="account"
              name="아이디"
              rules="required|account"
              placeholder="아이디 입력"
              type="text"
              :inputValue="userInfo.account"
              :isIdCheckBtn="true"
              @change-input="onChangeInput"
            />
            <!-- [개발참조]:예외처리 문구
						<div class="invalid_text">중복된 아이디입니다.</div>
						<div class="valid_text">가입 가능한 아이디입니다.</div>
						-->

            <CustomInput
              id="password"
              name="비밀번호"
              rules="required|password"
              placeholder="비밀번호 입력"
              type="password"
              :inputValue="userInfo.password"
              @change-input="onChangeInput"
            />

            <CustomInput
              id="passwordCheck"
              name="비밀번호 확인"
              rules="required"
              placeholder="비밀번호 입력"
              type="password"
              :inputValue="userInfo.passwordCheck"
              :isError="isError"
              @change-input="onChangePasswordCheck"
            />
            <!-- [개발참조]:예외처리 문구
						<div class="invalid_text">필수 정보입니다.</div>
						-->
            <!-- 
          <div class="form_ruletext">
            6 ~ 20자 이하, 영문 대/소문자, 숫자, 특수문자 중 2가지를
            조합해주세요.
          </div> -->

            <!-- [개발참조]:예외처리 문구
						<div class="invalid_text">비밀번호가 일치하지 않습니다.</div>
						<div class="valid_text">확인되었습니다.</div>
						-->

            <CustomInput
              id="email"
              name="이메일"
              rules="required|email"
              placeholder="이메일 입력"
              type="email"
              :inputValue="userInfo.email"
              :isBtn="true"
              @change-input="onChangeInput"
            />

            <!-- [개발참조]:예외처리 문구
						<div class="invalid_text">필수 정보입니다.</div>
						-->

            <CustomInput
              id="authNumber"
              name="인증번호"
              rules="required|numeric|digits:6"
              placeholder="인증번호 입력"
              type="authNumber"
              :inputValue="userInfo.authNumber"
              :isBtn="true"
              :auth="true"
              @change-input="onChangeInput"
            />

            <!-- [개발참조]:예외처리 문구
						<div class="invalid_text">비밀번호가 일치하지 않습니다.</div>
						<div class="valid_text">확인되었습니다.</div>
						-->
            <button
              class="btn btn btn_crud_point"
              :class="{ disabled: invalid }"
              style="margin-top: 20px"
            >
              가입하기
            </button>
          </form>
          <!-- [개발참조]:class="disabled"제거시 활성 -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import CustomInput from '@/components/common/custom/CustomInput.vue'
export default {
  name: 'SignUpDetail',
  components: {
    CustomInput,
    ValidationObserver,
  },
  // setup(data) {
  //   watchEffect(() => {
  //     if (data.userInfo.nickName !== data.userInfo.name) {
  //       console.log(false)
  //       this.nickNameCheck = false
  //     }
  //   })
  // },
  data() {
    return {
      userInfo: {
        name: '',
        nickName: '',
        account: '',
        password: '',
        passwordCheck: '',
        email: '',
        authNumber: '',
      },
      isError: false,
      nickNameCheck: false,
    }
  },
  methods: {
    onChangeInput({ target: { value, id } }) {
      console.log(value)
      this.userInfo[id] = value
      if (
        this.userInfo.name !== '' &&
        this.userInfo.nickName === this.userInfo.name
      ) {
        this.nickNameCheck = true
      } else {
        this.nickNameCheck = false
      }
    },
    onChangePasswordCheck({ target: { value } }) {
      this.userInfo.passwordCheck = value
      if (this.userInfo.passwordCheck === this.userInfo.password) {
        this.isError = false
      } else {
        this.isError = true
      }
    },
    onClickNickNameCheck() {
      this.userInfo.nickName = this.userInfo.name
    },
    onChangeCheckBox({ target: { checked } }) {
      this.nickNameCheck = checked
      if (checked) {
        this.userInfo.nickName = this.userInfo.name
      }
    },
    handleSubmit() {
      console.log('가입완료')
    },
  },
}
</script>

<style></style>
