<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <h2>로그인</h2>
      <div class="form_section">
        <form>
          <div class="form-group">
            <label for="userid" class="hide">아이디</label>
            <input
              id="userid"
              type="text"
              placeholder="아이디 입력"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="password" class="hide">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호 입력"
              class="form-control form_password"
            />
            <i id="eyeOff" class="icons_eye_off"></i>
            <i id="eyeOn" class="icons_eye_on hide"></i>
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
        memId: '',
        memPwd: '',
      },
    }
  },
  methods: {
    async postLogin() {
      const payload = {
        account: 'manager',
        account_type_id: 1,
        password: 'thqkddkswjs1!',
      }
      await apiLogin
        .postLogin(payload)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onSubtmit() {
      console.log('로그인 시도')
    },
  },
}
</script>

<style></style>
