<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <div class="title_type2">
        <h2>비밀번호 재설정</h2>
        <!-- <div class="text">
          <span>example@mail.com</span>
          으로 코드가 전송되었습니다.
        </div> -->
      </div>
      <div class="form_section">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent>
            <!-- <CustomInput
              id="authNumber"
              name="인증코드"
              rules="required|numeric|digits:6"
              placeholder="인증코드 입력"
              :inputValue="userInfo.authNumber"
              type="authNumber"
              @change-input="onChangeInput"
            /> -->
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
            <!-- [개발참조]: 예외처리 텍스트 (기본:visibility: hidden)-->
            <div class="explainType01">
              6자 이상 길이로 만들어주세요.<br />
              영문 대/소문자, 숫자, 특수문자 중 2가지를<br />
              조합해주세요.
            </div>
            <button
              class="btn btn btn_crud_point"
              :class="{ disabled: invalid }"
              @click="handleSubmit"
            >
              확인
            </button>
          </form>
        </ValidationObserver>
        <!-- [개발참조]:class="disabled"제거시 활성 -->
      </div>
    </div>
    <!-- 설명 모달 -->
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
// import CustomInput from '@/components/common/custom/CustomInput.vue'
import CustomInputPw from '@/components/common/custom/CustomInputPw.vue'
import { apiLogin } from '@/services'
import SuccessModalDesc from '@/components/common/modal/signup/SuccessModalDesc.vue'
export default {
  name: 'ResetPw',
  components: { ValidationObserver, CustomInputPw, SuccessModalDesc },
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
      // 모달
      successModalDesc: {
        open: false,
        title: '',
        desc: '',
      },
    }
  },
  methods: {
    // 모달 이벤트
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

    // 비밀번호 재설정 api
    async putUpdatePw() {
      const payload = {
        auth_code: 0,
        mem_email: this.$store.state.common.userEmail,
        pwd: this.userInfo.password,
      }
      await apiLogin
        .putUpdatePw(payload)
        .then((res) => {
          this.openSuccessModalDesc(
            '비밀번호 재설정',
            '비밀번호가 변경되었습니다.'
          )
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 비밀번호 초기화 후 비밀번호 재설정 api
    async putUpdateLoginPw() {
      const payload = {
        mem_pw: '123456',
        new_pw: this.userInfo.password,
      }
      await apiLogin
        .putUpdateLoginPw(payload)
        .then(() => {
          this.$store.commit('common/setPwResetFlag')
          this.openSuccessModalDesc(
            '비밀번호 재설정',
            '비밀번호가 변경되었습니다.'
          )
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 비밀번호 재설정
    handleSubmit() {
      if (this.$store.state.common.isReset) {
        this.putUpdateLoginPw()
      } else {
        this.putUpdatePw()
      }
    },

    // 로그인 페이지로 이동
    goMainPage() {
      this.$router.push('/login')
    },
  },
}
</script>
<style scoped></style>
