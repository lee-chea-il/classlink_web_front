<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <h2>로그인</h2>
      <div class="form_section">
        <VForm
          @submit="onSubmit"
          :validation-schema="schema"
          @invalid-submit="onInvalidSubmit"
        >
          <div class="form-group">
		        <label for="userid" class="hide">아이디</label>
            <CustomText v-model="myIdTxt" placeholderTxt="아이디 입력" txtId="userid" txtName="id"/>
          </div>
          <CustomTextPw v-model="myPwTxt" />

          <button
            type="submit"
            class="btn btn_crud_point"
          >
          로그인
          </button>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="checkbox01"
            />
            <label class="custom-control-label" for="checkbox01"
              >로그인 상태 유지</label
            >
          </div>
        </VForm>
      </div>
      <div class="link_section">
        <div class="mem_account">
          아직 계정이 없나요?
          <NuxtLink to="/signUp">회원가입</NuxtLink>
        </div>
        <div class="mem_find">
          <span id="findId" data-toggle="modal" data-target="#modalFindId"
            >아이디 찾기</span
          >
          <span id="findPw" data-toggle="modal" data-target="#modalFindPw"
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

<script setup lang="ts">
  import { ref } from 'vue';
  import * as Yup from 'yup';
  import { checkLogin } from "@/api"
  import { member } from "@/stores/Member"
  import CustomText from './CustomText.vue'
  import CustomTextPw from './CustomTextPw.vue'
  
  const store = member();
  const myIdTxt = ref('');
  const myPwTxt = ref('');
  const isClickable = ref(true);

  const schema = Yup.object().shape({
    id: Yup.string().required('필수 정보입니다.'),
    password: Yup.string().min(6,"6자 이상").max(20,"20자 이하").required('필수 정보입니다.'),
  });
  
  function onSubmit(data){
    if(isClickable){
      isClickable.value=false;
      const loginData ={
        "memId": data.id,
        "memPwd":data.password
      };
      const response = checkLogin(loginData);
      response.then(res => {
        //console.log(`status: ${JSON.stringify(res.status)}`);     // 응답 Status code
        //console.log(`headers: ${JSON.stringify(res.headers)}`);   // 응답 Headers
        //console.log(`data: ${JSON.stringify(res.data)}`);         // 응답 Data
        
        store.myInfo = res.data.data;
        
        if(res.status == 200){
          if(res.data.returnCode=='_200'){
            store.loginPageType = 'identity';
          }else if(res.data.returnCode=='_01'){
            alert(res.data.returnMessage);
          }else if(res.data.returnCode=='_02'){
            alert(res.data.returnMessage);
          }
        }else{

        }
        isClickable.value=true;
      })
    }
  }
  function onInvalidSubmit() {
    /*const submitBtn = document.querySelector('.btn_crud_point');
    submitBtn.classList.add('invalid');
    setTimeout(() => {
      submitBtn.classList.remove('invalid');
    }, 1000);*/
  }
</script>

<style scoped>
</style>
