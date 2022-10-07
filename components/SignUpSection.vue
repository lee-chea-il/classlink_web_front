<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <div class="title_type2">
        <h2>회원가입</h2>
      </div>
      <div class="form_section">
        <VForm
          @submit="signProcess"
          v-slot="{ meta: formMeta, errors: formErrors }"
        >
          <!-- [개발참조]:예외처리 시 css 적용 방법
					1. <input 에 추가
					오류: class="is-invalid"
					성공: class="is-valid"

					2. 안내 텍스트
					오류: <div class="invalid_text">
					성공: <div class="valid_text">
					-->

          <!-- [개발참조]:예외처리-오류의 예 -->
          <div class="form-group">
            <label for="mem_name">이름</label>
            <VField
              type="text"
              id="mem_name"
              name="mem_name"
              placeholder="이름 입력"
              class="form-control is-invalid"
              rules="required:mem_name"
              :value="props.modelValue"
              @input="addInputTxt"
            />
            <VErrorMessage name="mem_name" class="help is-danger" />
          </div>
          <!-- div class="invalid_text">필수 정보입니다.</div-->

          <!-- [개발참조]:예외처리-성공의 예 -->
          <div class="form-group form-inlinebox">
            <label for="form02">닉네임</label>
            <VField
              type="text"
              id="mem_nickname"
              name="mem_nickname"
              placeholder="닉네임 입력"
              class="form-control form-inline is-valid"
              rules="required:mem_nickname"
              :value="props.modelValue"
              @input="addInputTxt"
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
            <VField
              type="text"
              id="mem_id"
              name="mem_id"
              placeholder="아이디 입력"
              class="form-control"
              rules="required:mem_id"
              :value="props.modelValue"
              @input="addInputTxt"
            />
          </div>
          <VErrorMessage name="mem_id" class="help is-danger" />
          <div class="form_ruletext">6자 이상, 20자 이하로 만들어 주세요.</div>
          <!-- [개발참조]:예외처리 문구
					<div class="invalid_text">중복된 아이디입니다.</div>
					<div class="valid_text">가입 가능한 아이디입니다.</div>
					-->

          <div class="form-group">
            <label for="form04">비밀번호</label>
            <VField
              type="password"
              id="mem_pwd"
              name="mem_pwd"
              placeholder="비밀번호 입력"
              class="form-control"
              rules="required:mem_pwd"
              :value="props.modelValue"
              @input="addInputTxt"
            />
          </div>
          <!-- [개발참조]:예외처리 문구
					<div class="invalid_text">필수 정보입니다.</div>
					-->
          <VErrorMessage name="mem_pwd" class="help is-danger" />
          <div class="form_ruletext">
            6 ~ 20자 이하, 영문 대/소문자, 숫자, 특수문자 중 2가지를
            조합해주세요.
          </div>
          <div class="form-group">
            <label for="form05">비밀번호 확인</label>
            <input
              type="password"
              id="mem_repwd"
              name="mem_repwd"
              placeholder="비밀번호 입력"
              class="form-control"
              rules="required:mem_repwd"
              :value="props.modelValue"
              @input="addInputTxt"
            />
          </div>
          <VErrorMessage name="mem_repwd" class="help is-danger" />
          <!-- [개발참조]:예외처리 문구
					<div class="invalid_text">비밀번호가 일치하지 않습니다.</div>
					<div class="valid_text">확인되었습니다.</div>
					-->

          <div class="form-group form-inlinebox">
            <label for="form06">이메일</label>
            <input
              type="text"
              id="mem_email"
              name="mem_email"
              placeholder="이메일 입력"
              class="form-control form-inline"
              rules="required:mem_email"
              :value="props.modelValue"
              @input="addInputTxt"
            />

            <button class="btn btn_crud_point disabled">인증번호 받기</button
            ><!-- [개발참조]:class="disabled"제거시 활성 -->
          </div>
          <!-- [개발참조]:예외처리 문구
					<div class="invalid_text">필수 정보입니다.</div>
					-->

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
          class="btn btn btn_crud_point"
          style="margin-top: 20px"
          @click="signProcess"
        >
          가입하기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { memberJoin } from "@/stores/MemberJoin";
const join = memberJoin();
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
const addInputTxt = (e) => {
  emit("update:modelValue", e.target.value);
};

function signProcess(data) {
  console.log("ok");
}
</script>

<style scoped></style>
