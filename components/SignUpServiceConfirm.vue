<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <div class="title_type2">
        <h2>서비스 이용 동의1</h2>
      </div>
      <div class="agree_section">
        <div class="title">
          <CustomCheckBox
            @toggle-checkbox="toggleCheckboxEvent"
            :checkBoxData="checkboxDatas[0]"
          />
        </div>
        <div class="cnts">
          <CustomCheckBox
            @toggle-checkbox="toggleCheckboxEvent"
            :checkBoxData="checkboxDatas[1]"
          />
          <CustomCheckBox
            @toggle-checkbox="toggleCheckboxEvent"
            :checkBoxData="checkboxDatas[2]"
          />
        </div>
      </div>
      <CustomNextBtn @nextBtn-click="nextBtnEvent" :btnAbled="nextBtnable" />
      <div class="question_txt">
        <NuxtLink to="/">이미 계정이 있으신가요?</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CustomCheckBox from "./CustomCheckBox.vue";
import CustomNextBtn from "./CustomNextBtn.vue";

const checkboxDatas = ref([
  { title: "약관 전체 동의", checked: false, id: "checkBox_0" },
  {
    title: "(필수) 서비스 이용약관",
    checked: false,
    id: "checkBox_1",
    targetModal: "#modalTerms01",
  },
  {
    title: "(필수) 개인정보 처리방침",
    checked: false,
    id: "checkBox_2",
    targetModal: "#modalTerms02",
  },
]);
const nextBtnable = ref(false);

const toggleCheckboxEvent = (cData) => {
  const datas = checkboxDatas.value;
  const idx = datas.findIndex((data) => {
    return data.id == cData.id;
  });
  let checkAll = true;
  if (idx == 0) {
    datas[1].checked = cData.checked;
    datas[2].checked = cData.checked;
    if (!cData.checked) checkAll = false;
  } else {
    datas[idx].checked = cData.checked;
    datas.forEach(function (data, idx) {
      if (idx != 0 && !data.checked) {
        checkAll = false;
      }
    });
    datas[0].checked = checkAll;
  }
  if (checkAll) {
    nextBtnable.value = true;
    datas[0].checked = true;
  } else {
    nextBtnable.value = false;
    datas[0].checked = false;
  }
};
const nextBtnEvent = () => {
  const datas = checkboxDatas.value;
  if (datas[0].checked) emit("confirmServie-comp");
};
const emit = defineEmits(["confirmServie-comp"]);
</script>

<style scoped></style>
