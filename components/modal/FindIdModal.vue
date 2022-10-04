<template>
  <div class="modal fade modal_login" id="modalFindId" tabindex="-1" aria-labelledby="modalFindId" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalFindId">아이디찾기</h5>
          <button ref="modalIdCloseBtn" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="text-area">
            <span class="text_type02 mdW100">가입하실 때 등록하신 </span><span class="text_type02 mdW100">이메일 주소를 입력해 주세요.</span>
          </div>
          <div class="form-group">
            <div class="input-group input-search">
              <input type="text" class="form-control" />
              <div class="input-group-append">
                <button @click="searchIdEvent" id="searchIdbtn" class="btn icons_search_off" type="button"></button>
              </div>
            </div>
          </div>

          <!-- 검색 후 결과 테이블 -->
          <div id="searchTable" class="search_result" style="display: none;">
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
                  <tr>
                    <td scope="row">
                      <div class="custom-control custom-radio">
                        <input type="radio" id="radio01" name="customRadio" class="custom-control-input" />
                        <label class="custom-control-label" for="radio01"></label>
                      </div>
                    </td>
                    <td class="id"><span>example</span></td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <div class="custom-control custom-radio">
                        <input type="radio" id="radio02" name="customRadio" class="custom-control-input" />
                        <label class="custom-control-label" for="radio02"></label>
                      </div>
                    </td>
                    <td class="id"><span>exampleexampleexampleexampleexampleexample</span></td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <div class="custom-control custom-radio">
                        <input type="radio" id="radio03" name="customRadio" class="custom-control-input" />
                        <label class="custom-control-label" for="radio03"></label>
                      </div>
                    </td>
                    <td class="id"><span>exampleexampleexampleexampleexampleexample</span></td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <div class="custom-control custom-radio">
                        <input type="radio" id="radio04" name="customRadio" class="custom-control-input" />
                        <label class="custom-control-label" for="radio04"></label>
                      </div>
                    </td>
                    <td class="id"><span>exampleexampleexampleexampleexampleexample</span></td>
                    <td>2022.12.31</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- /.검색 후 결과 테이블 -->
          
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point" data-dismiss="modal">로그인하기</button>
          <button class="btn btn_crud_default" data-dismiss="modal" data-toggle="modal" data-target="#modalFindPw">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { member } from "@/stores/Member"
  
  const modalIdCloseBtn = ref(null);
  const store = member();
  const searchIdEvent = () => {
    const result = store.searchId('f');
    if(result != null){
      modalIdCloseBtn.value.click();
    }
  }
</script>

<style scoped>

</style>
