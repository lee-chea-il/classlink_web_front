<template>
  <div
    id="modalFindid"
    class="modal fade modal_login"
    tabindex="-1"
    aria-labelledby="modalFindid"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="modalFindid" class="modal-title">아이디찾기</h5>
          <button
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
              <input type="text" class="form-control" />
              <div class="input-group-append">
                <button
                  id="searchIdbtn"
                  class="btn icons_search_off"
                  type="button"
                ></button>
              </div>
            </div>
          </div>

          <!-- 검색 후 결과 테이블 -->
          <div id="searchTable" class="search_result" style="display: none">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th></th>
                  <th>아이디</th>
                  <th>가입</th>
                </tr>
              </thead>
            </table>
            <div class="tbl_overflow">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td scope="row">
                      <div class="custom-control custom-radio">
                        <input
                          id="radio01"
                          type="radio"
                          name="customRadio"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="radio01"
                        ></label>
                      </div>
                    </td>
                    <td class="id"><span>example</span></td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <div class="custom-control custom-radio">
                        <input
                          id="radio02"
                          type="radio"
                          name="customRadio"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="radio02"
                        ></label>
                      </div>
                    </td>
                    <td class="id">
                      <span>exampleexampleexampleexampleexampleexample</span>
                    </td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <div class="custom-control custom-radio">
                        <input
                          id="radio03"
                          type="radio"
                          name="customRadio"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="radio03"
                        ></label>
                      </div>
                    </td>
                    <td class="id">
                      <span>exampleexampleexampleexampleexampleexample</span>
                    </td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <div class="custom-control custom-radio">
                        <input
                          id="radio04"
                          type="radio"
                          name="customRadio"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="radio04"
                        ></label>
                      </div>
                    </td>
                    <td class="id">
                      <span>exampleexampleexampleexampleexampleexample</span>
                    </td>
                    <td>2022.12.31</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- /.검색 후 결과 테이블 -->
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point" data-dismiss="modal">
            로그인하기
          </button>
          <button
            class="btn btn_crud_default"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#modalFindpw"
          >
            비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindIdModal',
  props: {
    open: Boolean,
  },
}
// import { ref } from "vue";
// import { apiLogin } from "@/services";
// import dayjs from "dayjs";

// const modalIdCloseBtn = ref(null);
// const isShowTable = ref(false);
// const emailTxt = ref("");
// const searchIdList = ref([]);

// /*const props = defineProps({
// 		modelValue:{
// 			type:String,
// 			required:true
// 		},
// 	});*/
// //const txtName = toRef(props, 'txtName');

// const searchIdEvent = () => {
//   console.log("emailTxt   ", emailTxt.value);
//   const data = {
//     memEmail: emailTxt.value,
//   };
//   console.log("email   ", data);
//   const response = apiLogin.getIdFromEmail(data);
//   response.then((res) => {
//     console.log(`status: ${JSON.stringify(res.status)}`); // 응답 Status code
//     console.log(`headers: ${JSON.stringify(res.headers)}`); // 응답 Headers
//     console.log(`data: ${JSON.stringify(res.data)}`); // 응답 Data

//     if (res.status == 200) {
//       searchIdList.value = res.data.data;
//       isShowTable.value = true;
//     }
//   });
// };
// const changeDate = (dateString) => {
//   let date = dayjs(dateString);
//   return date.format("YYYY.MM.DD");
// };
</script>

<style scoped>
.hide {
  display: none;
}
</style>
