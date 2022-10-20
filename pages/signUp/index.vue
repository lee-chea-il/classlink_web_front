<script setup>
import { ref } from "vue";
import HeaderSection from "@/components/common/HeaderSection.vue";
import LoginLeftSection from "@/components/login/LoginLeftSection.vue";
import SignUpSection from "@/components/signUp/signUpSection.vue";
import SignUpIdentity from "@/components/signUp/signUpIdentity.vue";
import SignUpServiceConfirm from "@/components/signUp/signUpServiceConfirm.vue";
import SignUpConfirmModal from "@/components/common/modal/signUpConfirmModal.vue";
//import { member } from "@/stores/Member";

const modalData1 = ref({
  title: "서비스 이용 약관",
  id: "modalTerms01",
  txt: `제1장 총칙
제1조 (목적)
이 약관(이하 "약관"이라고 합니다)은 주식회사 포인블랙(이하 "회사"라고 합니다)이 제공하는 포인캠퍼스(PoinCampus) 서비스 및 관련 제반 서비스(이하 “서비스”)의 이용과 관련하여 “회사”와 “이용자”와의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.

제2조 (정의)
이 약관에서 사용하는 용어의 정의는 다음과 같습니다.

이용자: “회사”의 사이트에 접속하여 이 약관에 따라 “회사”가 제공하는 “서비스” 및 제반서비스, “콘텐츠”를 이용하는 회원 및 비회원을 말합니다.
회원: “회사”와 이용계약을 체결하고 “이용자” 아이디(ID)를 부여받은 “이용자”로서 “회사”의 정보를 지속적으로 제공받으며 “회사”가 제공하는 “서비스”를 지속적으로 이용할 수 있는 자를 말합니다.
비회원: "회원"이 아니면서 "회사"가 제공하는 “서비스”를 이용하는 자를 말합니다.
캠퍼스개설자: “회사”에서 제공하는 “캠퍼스”를 개설하고 운영하는 자를 말합니다.
수강자: “회사”에서 제공하는 “결제서비스”를 통해 “캠퍼스개설자”가 유료로 등록한 “클래스”를 구매하여 학습하는 자를 말합니다.
아이디(ID): "회원"의 식별과 서비스이용을 위하여 "회원"이 정하고 "회사"가 승인하는 문자 또는 숫자의 조합을 말합니다.
비밀번호(PASSWORD): "회원"이 부여받은 "아이디"와 일치되는 "회원"임을 확인하고 비밀보호를 위해 "회원" 자신이 정한 문자 또는 숫자 또는 특수문자의 조합을 말합니다.
디지털콘텐츠(이하 ‘콘텐츠’라 한다): 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제2조 제1항 제1호의 규정에 의한 정보통신망에서 사용되는 부호·문자·음성·음향·이미지 또는 영상 등으로 표현된 자료 또는 정보를 말합니다.
서비스: “회사”가 온라인상 접속 가능한 PC 또는 단말기를 통하여 “이용자”에게 “캠퍼스” 개설·관리 및 “콘텐츠” 이용을 위해 제공하는 행위 등을 말합니다.
결제서비스: “캠퍼스개설자”와 “이용자”의 “클래스” 판매와 구매를 하기 위해 제공하는 행위 등을 말합니다.

`,
});
const modalData2 = ref({
  title: "개인정보 처리방침",
  id: "modalTerms02",
  txt: `제1장 총칙
제1조 (목적)
이 약관(이하 "약관"이라고 합니다)은 주식회사 포인블랙(이하 "회사"라고 합니다)이 제공하는 포인캠퍼스(PoinCampus) 서비스 및 관련 제반 서비스(이하 “서비스”)의 이용과 관련하여 “회사”와 “이용자”와의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.

제2조 (정의)
이 약관에서 사용하는 용어의 정의는 다음과 같습니다.

이용자: “회사”의 사이트에 접속하여 이 약관에 따라 “회사”가 제공하는 “서비스” 및 제반서비스, “콘텐츠”를 이용하는 회원 및 비회원을 말합니다.
회원: “회사”와 이용계약을 체결하고 “이용자” 아이디(ID)를 부여받은 “이용자”로서 “회사”의 정보를 지속적으로 제공받으며 “회사”가 제공하는 “서비스”를 지속적으로 이용할 수 있는 자를 말합니다.
비회원: "회원"이 아니면서 "회사"가 제공하는 “서비스”를 이용하는 자를 말합니다.
캠퍼스개설자: “회사”에서 제공하는 “캠퍼스”를 개설하고 운영하는 자를 말합니다.
수강자: “회사”에서 제공하는 “결제서비스”를 통해 “캠퍼스개설자”가 유료로 등록한 “클래스”를 구매하여 학습하는 자를 말합니다.
아이디(ID): "회원"의 식별과 서비스이용을 위하여 "회원"이 정하고 "회사"가 승인하는 문자 또는 숫자의 조합을 말합니다.
비밀번호(PASSWORD): "회원"이 부여받은 "아이디"와 일치되는 "회원"임을 확인하고 비밀보호를 위해 "회원" 자신이 정한 문자 또는 숫자 또는 특수문자의 조합을 말합니다.
디지털콘텐츠(이하 ‘콘텐츠’라 한다): 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제2조 제1항 제1호의 규정에 의한 정보통신망에서 사용되는 부호·문자·음성·음향·이미지 또는 영상 등으로 표현된 자료 또는 정보를 말합니다.
서비스: “회사”가 온라인상 접속 가능한 PC 또는 단말기를 통하여 “이용자”에게 “캠퍼스” 개설·관리 및 “콘텐츠” 이용을 위해 제공하는 행위 등을 말합니다.
결제서비스: “캠퍼스개설자”와 “이용자”의 “클래스” 판매와 구매를 하기 위해 제공하는 행위 등을 말합니다.

`,
});
const name = ref("SignUp");
const signUpProcedure = ref("agree");
const title = ref("서비스 이용 동의");

//const store = member();
const registerClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  //store.setMyInfo("1", "ndsgirl");
  //console.log(store.myInfo.id);
};
const checkIdentity = (e) => {
  //console.log("faaa  ",e.identityType);
  signUpProcedure.value = "signUp";
};
</script>

<template>
  <div class="default-layout">
    <HeaderSection :title="title" />
    <div class="page_login">
      <LoginLeftSection />
      <div class="right_section">
        <SignUpServiceConfirm
          v-if="signUpProcedure == 'agree'"
          @confirmServie-comp="() => (signUpProcedure = 'identity')"
        />
        <SignUpIdentity
          v-else-if="signUpProcedure == 'identity'"
          @identity-comp="checkIdentity"
        />
        <SignUpSection v-else />
      </div>
    </div>
    <SignUpConfirmModal
      v-if="signUpProcedure == 'agree'"
      :modalData="modalData1"
    />
    <SignUpConfirmModal
      v-if="signUpProcedure == 'agree'"
      :modalData="modalData2"
    />
  </div>
</template>

<style scoped></style>
