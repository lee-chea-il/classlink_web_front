<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <div class="title_type2">
        <h2>회원가입</h2>
      </div>
      <div class="form_section">
        <VForm
          @submit="onSubmit"
          :validation-schema="schema"
          @invalid-submit="onInvalidSubmit"
          v-slot="{ meta: formMeta, errors: formErrors }"
        >
          <div class="form-group">
            <label for="mem_name">이름</label>
            <CustomText
              v-model="myNameTxt"
              placeholderTxt="이름 입력"
              txtId="userName"
              txtName="name"
            />
          </div>

          <!-- [개발참조]:예외처리-성공의 예 -->
          <div class="form-group form-inlinebox">
            <label for="form02">닉네임</label>
            <VField
              type="text"
              id="mem_nickname"
              name="mem_nickname"
              placeholder="닉네임 입력"
              class="form-control form-inline is-valid"
              
            />

            <div class="custom-control custom-checkbox custom-control-inline">
              <input
                type="checkbox"
                class="custom-control-input"
                id="chk01"
                checked
              />
              <label class="custom-control-label" for="chk01">이름과동일</label>
            </div>
            <VErrorMessage name="mem_nickname" class="help is-danger" />
          </div>
          
          <!--div class="invalid_text hide">중복된 닉네임입니다.</div>
          <div class="valid_text">가입 가능한 닉네임입니다.</div-->

          <div class="form-group">
            <label for="form03">아이디</label>
            <CustomText v-model="myIdTxt" placeholderTxt="아이디 입력" txtId="id" txtName="id"/>
          </div>
          <div class="form_ruletext">6자 이상, 20자 이하로 만들어 주세요.</div>
          <!-- [개발참조]:예외처리 문구
					<div class="invalid_text">중복된 아이디입니다.</div>
					<div class="valid_text">가입 가능한 아이디입니다.</div>
					-->

          <div class="form-group">
            <label for="form04">비밀번호</label>
            <CustomText v-model="myPwTxt" placeholderTxt="비밀번호 입력" txtId="pw" txtName="password" txtType="password"/>
          </div>
          
          <div class="form_ruletext">
            6 ~ 20자 이하, 영문 대/소문자, 숫자, 특수문자 중 2가지를 조합해주세요.
          </div>
          <div class="form-group">
            <label for="form05">비밀번호 확인</label>
            <CustomText v-model="myPw2Txt" placeholderTxt="비밀번호 입력" txtId="pw1" txtName="confirm_password" txtType="password"/>
          </div>

          <!-- [개발참조]:예외처리 문구
					<div class="invalid_text">비밀번호가 일치하지 않습니다.</div>
					<div class="valid_text">확인되었습니다.</div>
					-->

          <div class="form-group form-inlinebox">
            <label for="form06">이메일</label>
            <!--<CustomText v-model="myEmailTxt" placeholderTxt="이메일 입력" txtId="email" txtName="email" txtInLine="inlink"/>-->
            <input
              type="text"
              id="mem_email"
              name="mem_email"
              placeholder="이메일 입력"
              class="form-control form-inline"
              rules="required:mem_email"
            />

            <button class="btn btn_crud_point disabled">인증번호 받기</button>
            <!-- [개발참조]:class="disabled"제거시 활성 -->
          </div>
          <div class="invalid_text">필수 정보입니다.</div>

          <div class="form-group form-inlinebox" style="margin-top: 4px">
            <label for="form07" style="display: none">인증번호입력</label>
            <input
              type="text"
              id="form07"
              placeholder="인증번호 입력"
              class="form-control form-inline"
            />

            <button class="btn btn_crud_point disabled">확인</button
            ><!-- [개발참조]:class="disabled"제거시 활성 -->
          </div>
          <!-- [개발참조]:예외처리 문구
					<div class="invalid_text">비밀번호가 일치하지 않습니다.</div>
					<div class="valid_text">확인되었습니다.</div>
					-->
        </VForm>
        <!-- [개발참조]:class="disabled"제거시 활성 -->
        <button
          type="submit"
          class="btn btn btn_crud_point"
          style="margin-top: 20px"
        >
          가입하기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import * as Yup from 'yup';
import CustomText from './CustomText.vue'

const myNameTxt = ref('');
const myNickNameTxt = ref('');
const myIdTxt = ref('');
const myPwTxt = ref('');
const myPw2Txt = ref('');
const myEmailTxt = ref('');

const schema = Yup.object().shape({
    id: Yup.string().min(6,"6자 이상").max(20,"20자 이하").required('필수 정보입니다.'),
    name: Yup.string().required('필수 정보입니다.'),
    email: Yup.string().email().required('필수 정보입니다.'),
    password: Yup.string().min(6,"6자 이상").max(20,"20자 이하").required('필수 정보입니다.'),
    confirm_password: Yup.string()
      .required('필수 정보입니다.')
      .oneOf([Yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
  });
  function onSubmit(data){
    alert('aaa');
    //if(isClickable){
      //isClickable.value=false;
      //store.checkLogin(data);
      //store.getIdFromEmail('str@ing');
    //}
  }
  function onInvalidSubmit() {
    /*const submitBtn = document.querySelector('.btn_crud_point');
    submitBtn.classList.add('invalid');
    setTimeout(() => {
      submitBtn.classList.remove('invalid');
    }, 1000);*/
  }



/*import { memberJoin } from "@/stores/MemberJoin";
const join = memberJoin();
/*const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});* /
const modelValue = ref('');
const emit = defineEmits(["update:modelValue"]);
const addInputTxt = (e) => {
  emit("update:modelValue", e.target.value);
};

function signProcess(data) {
  console.log("ok");
}*/
</script>

<style scoped></style>
