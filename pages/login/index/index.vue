<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <h2>로그인</h2>
      <div class="form_section">
        <form>
          <div class="form-group">
            <label for="userid" class="hide">아이디</label>
            <input
              id="mem_id"
              type="text"
              placeholder="아이디 입력"
              class="form-control"
              autocomplete="off"
              :value="userInfo.mem_id"
              @input="changeInput($event)"
            />
          </div>
          <div class="form-group">
            <label for="password" class="hide">비밀번호</label>
            <input
              id="mem_pw"
              :type="!isPwEyeOn ? 'password' : 'text'"
              placeholder="비밀번호 입력"
              class="form-control form_password"
              :value="userInfo.mem_pw"
              @input="changeInput($event)"
            />
            <i
              id="eyeOff"
              :class="!isPwEyeOn ? 'icons_eye_off' : 'icons_eye_off hide'"
              @click="changePwType"
            ></i>
            <i
              id="eyeOn"
              :class="isPwEyeOn ? 'icons_eye_on' : 'icons_eye_on hide'"
              @click="changePwType"
            ></i>
          </div>
          <button class="btn btn_crud_point" @click.prevent="postLogin">
            로그인
          </button>
          <div class="custom-control custom-checkbox">
            <input
              id="checkbox01"
              type="checkbox"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="checkbox01"
              >로그인 상태 유지</label
            >
          </div>
        </form>
      </div>
      <div class="link_section">
        <div class="mem_account">
          아직 계정이 없나요?
          <router-link to="/signup">회원가입</router-link>
        </div>
        <div class="mem_find">
          <span id="findId" data-toggle="modal" data-target="#modalFindid"
            >아이디 찾기</span
          >
          <span id="findPw" data-toggle="modal" data-target="#modalFindpw"
            >비밀번호 찾기</span
          >
        </div>
      </div>
      <div class="etctxt_section">
        <p>클래스링크는 크롬브라우저 사용을 권장합니다.</p>
        <a
          href="https://www.google.co.kr/chrome/?brand=QCDH&gclid=Cj0KCQjwgO2XBhCaARIsANrW2X0O9SulyS8KepDjFYOMd6mISkZwiTA7EjgtH7drrbOjfKOCyT-vN88aAvHgEALw_wcB&gclsrc=aw.ds"
          target="_blank"
          >크롬 브라우저 다운로드</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { apiLogin } from '@/services'

export default {
  name: 'SignUpForm',
  data() {
    return {
      userInfo: {
        mem_id: 'test7777',
        mem_pw: 'test7777',
      },
      isPwEyeOn: false,
    }
  },
  methods: {
    // 비밀번호 타입 바꾸기
    changePwType() {
      if (this.isPwEyeOn === false) {
        this.isPwEyeOn = true
      } else {
        this.isPwEyeOn = false
      }
    },
    changeInput({ target: { value, id } }) {
      this.userInfo[id] = value
    },
    // api호출
    async postLogin() {
      const payload = this.userInfo
      await apiLogin
        .postLogin(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          localStorage.setItem('token', data.refresh_token)
          this.$store.commit('userInfo/setUser', this.userInfo)
          this.$store.commit('userInfo/setUserLogin')
          this.goIdentitySelectPage()
          console.log(this.$store.state.userInfo.userInfo)
        })
        .catch((err) => {
          console.log(err, '에러수정 전입니다.')
        })
    },
    // 로그인
    onSubtmit() {
      console.log('로그인 시도')
    },
    goIdentitySelectPage() {
      this.$router.push('/login/identity')
    },
  },
}
</script>

<style scoped></style>
