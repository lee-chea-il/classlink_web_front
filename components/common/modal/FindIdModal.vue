<template>
  <div
    class="modal fade modal_login"
    id="modalFindId"
    tabindex="-1"
    aria-labelledby="modalFindId"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalFindId">아이디찾기</h5>
          <button
            @click="() => (isShowTable = false)"
            ref="modalIdCloseBtn"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="text-area">
            <span class="text_type02 mdW100">가입하실 때 등록하신 </span
            ><span class="text_type02 mdW100"
              >이메일 주소를 입력해 주세요.</span
            >
          </div>
          <div class="form-group">
            <div class="input-group input-search">
              <VField
                v-model="emailTxt"
                type="text"
                class="form-control"
                name="emailTxt"
              />
              <VErrorMessage name="emailTxt" class="help is-danger" />
              <div class="input-group-append">
                <button
                  @click="searchIdEvent"
                  id="searchIdbtn"
                  class="btn icons_search_off"
                  type="button"
                ></button>
              </div>
            </div>
          </div>

          <!-- 검색 후 결과 테이블 -->
          <div
            id="searchTable"
            :class="[isShowTable ? 'search_result' : 'search_result hide']"
          >
            <table class="table table-borderless">
              <colgroup>
                <col width="35" />
                <col />
                <col width="90" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">아이디</th>
                  <th scope="col">가입</th>
                </tr>
              </thead>
            </table>
            <div class="tbl_overflow">
              <table class="table table-borderless">
                <colgroup>
                  <col width="35" />
                  <col />
                  <col width="90" />
                </colgroup>
                <tbody>
                  <tr v-for="(item, idx) in searchIdList" :key="{ idx }">
                    <td scope="row">
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          :id="'radio' + idx"
                          name="customRadio"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          :for="'radio' + idx"
                        ></label>
                      </div>
                    </td>
                    <td class="id">
                      <span>{{ item.memId }}</span>
                    </td>
                    <td>{{ changeDate(item.regDate) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point" data-dismiss="modal">
            로그인하기
          </button>
          <button
            class="btn btn_crud_default"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#modalFindPw"
          >
            비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { apiLogin } from "@/services/index";
import dayjs from "dayjs";

const modalIdCloseBtn = ref(null);
const isShowTable = ref(false);
const emailTxt = ref("");
const searchIdList = ref([]);

/*const props = defineProps({
		modelValue:{
			type:String,
			required:true
		},
	});*/
//const txtName = toRef(props, 'txtName');

const searchIdEvent = () => {
  console.log("emailTxt   ", emailTxt.value);
  const data = {
    memEmail: emailTxt.value,
  };
  console.log("email   ", data);
  const response = apiLogin.getIdFromEmail(data);
  response.then((res) => {
    console.log(`status: ${JSON.stringify(res.status)}`); // 응답 Status code
    console.log(`headers: ${JSON.stringify(res.headers)}`); // 응답 Headers
    console.log(`data: ${JSON.stringify(res.data)}`); // 응답 Data

    if (res.status == 200) {
      searchIdList.value = res.data.data;
      isShowTable.value = true;
    }
  });
};
const changeDate = (dateString) => {
  let date = dayjs(dateString);
  return date.format("YYYY.MM.DD");
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>
