<template>
  	<div class="right_section">
      <div id="loginRwrap" class="wrap">
        <h2>로그인</h2>
        <div class="form_section">
          <form>
            <CustomTextId v-model='myIdTxt'/>
            <CustomTextPw v-model='myPwTxt'/>
            <button class="btn btn_crud_point" @click="loginClick">로그인</button>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="checkbox01" />
              <label class="custom-control-label" for="checkbox01">로그인 상태 유지</label>
            </div>
          </form>
        </div>
        <div class="link_section">
          <div class="mem_account">
            아직 계정이 없나요?
            <NuxtLink to="/signUp">회원가입</NuxtLink>
          </div>
          <div class="mem_find">
            <span id="findId" data-toggle="modal" data-target="#modalFindId">아이디 찾기</span>
            <span id="findPw" data-toggle="modal" data-target="#modalFindPw">비밀번호 찾기</span>
          </div>
        </div>
        <div class="etctxt_section">
          <p>클래스링크는 크롬브라우저 사용을 권장합니다.</p>
          <a href="https://www.google.co.kr/chrome/?brand=QCDH&gclid=Cj0KCQjwgO2XBhCaARIsANrW2X0O9SulyS8KepDjFYOMd6mISkZwiTA7EjgtH7drrbOjfKOCyT-vN88aAvHgEALw_wcB&gclsrc=aw.ds" target="_blank">크롬 브라우저 다운로드</a>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { userInfo } from "@/stores/userInfo"
  import CustomTextId from './CustomTextId.vue'
  import CustomTextPw from './CustomTextPw.vue'
  
  const store = userInfo();
  const myIdTxt = ref('');
  const myPwTxt = ref('');

  const loginClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    store.setMyInfo('id','학생');
    console.log(store.myInfo.id);
  }
</script>

<style scoped>

</style>
