<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <div class="title_type2">
        <h2>회원가입</h2>
      </div>
      <div class="form_section">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="handleSubmit">
            <!-- [개발참조]:예외처리-오류의 예 -->
            <CustomInput
              id="mem_name"
              name="이름"
              placeholder="이름 입력"
              rules="min:2|required"
              type="text"
              :inputValue="userInfo.mem_name"
              @change-input="onChangeInput"
            />

            <!-- [개발참조]:예외처리-성공의 예 -->
            <CustomInput
              id="mem_nickname"
              name="닉네임"
              rules="min:2|required"
              placeholder="닉네임 입력"
              type="text"
              :isCheckBox="true"
              :inputValue="userInfo.mem_nickname"
              :nickNameCheck="nickNameCheck"
              @change-input="onChangeInput"
              @change-check="onChangeCheckBox"
            />

            <CustomInput
              id="mem_id"
              name="아이디"
              rules="required|account"
              placeholder="아이디 입력"
              type="text"
              :inputValue="userInfo.mem_id"
              :isIdCheckBtn="true"
              @change-input="onChangeInput"
              @click-check="onClickIdCheck"
            />

            <CustomInput
              id="mem_pwd"
              name="비밀번호"
              rules="required|password"
              placeholder="비밀번호 입력"
              type="password"
              :inputValue="userInfo.mem_pwd"
              @change-input="onChangeInput"
            />

            <CustomInput
              id="mem_pwd_check"
              name="비밀번호 확인"
              rules="required"
              placeholder="비밀번호 입력"
              type="password"
              :inputValue="userInfo.mem_pwd_check"
              :isError="isError"
              @change-input="onChangePasswordCheck"
            />

            <CustomInput
              id="mem_phone"
              name="연락처"
              placeholder="연락처 입력"
              rules="min:2|required"
              type="text"
              :inputValue="userInfo.mem_phone"
              @change-input="onChangeInput"
            />

            <CustomInput
              id="mem_email"
              name="이메일"
              rules="required|email"
              placeholder="이메일 입력"
              type="email"
              :isIdCheckBtn="true"
              :inputValue="userInfo.mem_email"
              @change-input="onChangeInput"
              @click-check="onClickEmailCheck"
            />

            <!-- [개발참조]:예외처리 문구
						<div class="invalid_text">필수 정보입니다.</div>
						-->

            <!-- <CustomInput
              id="authNumber"
              name="인증번호"
              rules="required|numeric|digits:6"
              placeholder="인증번호 입력"
              type="authNumber"
              :inputValue="userInfo.authNumber"
              :isBtn="true"
              :auth="true"
              :authlabel="true"
              @change-input="onChangeInput"
            /> -->

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
    <!-- 설명 모달 -->
    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />
    <SuccessModalDesc
      :open="successModalDesc.open"
      :title="successModalDesc.title"
      :desc="successModalDesc.desc"
      @close="onCloseSuccessModalDesc"
      @confirm="goMainPage"
    />
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import { apiLogin } from '@/services'
import CustomInput from '@/components/common/custom/CustomInput.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import SuccessModalDesc from '@/components/common/modal/signup/SuccessModalDesc.vue'
export default {
  name: 'SignUpDetail',
  components: {
    CustomInput,
    ValidationObserver,
    ModalDesc,
    SuccessModalDesc,
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
        mem_name: '',
        mem_nickname: '',
        mem_id: '',
        mem_pwd: '',
        mem_pwd_check: '',
        mem_email: '',
        mem_phone: '',
        idt_code: 'I',
      },
      isError: false,
      nickNameCheck: false,
      isIdCheck: false,
      isEmailCheck: false,
      isSignUpSuccess: false,
      // 모달
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      successModalDesc: {
        open: false,
        title: '',
        desc: '',
      },
    }
  },
  methods: {
    // 모달 이벤트
    openModalDesc(tit, msg) {
      this.modalDesc = {
        open: true,
        title: tit,
        desc: msg,
      }
    },
    onCloseModalDesc() {
      this.modalDesc.open = false
    },
    openSuccessModalDesc(tit, msg) {
      this.successModalDesc = {
        open: true,
        title: tit,
        desc: msg,
      }
    },
    onCloseSuccessModalDesc() {
      this.successModalDesc.open = false
    },
    // input 이벤트
    onChangeInput({ target: { value, id } }) {
      this.userInfo[id] = value
      if (
        this.userInfo.mem_name !== '' &&
        this.userInfo.mem_nickname === this.userInfo.mem_name
      ) {
        this.nickNameCheck = true
      } else {
        this.nickNameCheck = false
      }
      if (id === 'mem_phone') {
        this.userInfo[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(-{1,2})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
    },
    // 비밀번호 체크
    onChangePasswordCheck({ target: { value } }) {
      this.userInfo.mem_pwd_check = value
      if (this.userInfo.mem_pwd_check === this.userInfo.mem_pwd) {
        this.isError = false
      } else {
        this.isError = true
      }
    },
    // 닉네임 이름과 동일
    onChangeCheckBox({ target: { checked } }) {
      this.nickNameCheck = checked
      if (checked) {
        this.userInfo.mem_nickname = this.userInfo.mem_name
      }
    },

    // 아이디 중복확인 api
    async onClickIdCheck() {
      await apiLogin
        .getIdCheck(this.userInfo.mem_id)
        .then(({ data: { data } }) => {
          if (data) {
            this.isIdCheck = true
            this.openModalDesc('아이디 중복확인', '사용가능한 아이디입니다.')
          } else {
            this.isIdCheck = false
            this.openModalDesc('아이디 중복확인', '중복된 아이디입니다.')
          }
        })
    },

    // 이메일 중복확인 api
    async onClickEmailCheck() {
      await apiLogin
        .getEmailCheck(this.userInfo.mem_email)
        .then(({ data: { data } }) => {
          if (data) {
            this.isEmailCheck = true
            this.openModalDesc('이메일 중복확인', '사용가능한 이메일입니다.')
          } else {
            this.isEmailCheck = false
            this.openModalDesc('이메일 중복확인', '중복된 이메일입니다.')
          }
        })
    },

    // 회원가입 api 연동
    async handleSubmit() {
      if (this.isIdCheck && this.isEmailCheck) {
        const payload = this.userInfo
        await apiLogin
          .postSignup(payload)
          .then(() => {
            this.openSuccessModalDesc('회원가입', '회원가입되었습니다.')
          })
          .catch(() => {
            return false
          })
      } else if (!this.isIdCheck) {
        this.openModalDesc('회원가입', '아이디 중복확인을 해주세요.')
      } else {
        this.openModalDesc('회원가입', '이메일 중복확인을 해주세요.')
      }
    },
    // 로그인 후 교육기관 개설 페이지로 이동
    async goMainPage() {
      const payload = {
        mem_id: this.userInfo.mem_id,
        mem_pw: this.userInfo.mem_pwd,
      }
      await apiLogin
        .postLogin(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          localStorage.setItem('token', data.refresh_token)
        })
        .catch((err) => {
          console.log(err, '에러수정 전입니다.')
        })
      this.$router.push('/registerins')
    },
  },
}
</script>

<style scoped></style>
