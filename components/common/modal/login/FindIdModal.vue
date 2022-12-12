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
              <input
                type="text"
                class="form-control"
                :value="findIdInput"
                @input="$emit('change-input', $event)"
                @keyup.enter="$emit('find-id')"
              />
              <div class="input-group-append">
                <button
                  id="searchIdbtn"
                  class="btn icons_search_off"
                  type="button"
                  @click="$emit('find-id')"
                ></button>
              </div>
            </div>
          </div>

          <!-- 검색 후 결과 테이블 -->
          <div
            v-show="findIdList.length > 0"
            id="searchTable"
            class="search_result"
          >
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
                  <tr v-for="(item, idx) in findIdList" :key="idx">
                    <td scope="row">
                      <div class="custom-control custom-radio">
                        <input
                          id="radio01"
                          type="radio"
                          name="customRadio"
                          class="custom-control-input"
                          checked
                        />
                        <label
                          class="custom-control-label"
                          for="radio01"
                        ></label>
                      </div>
                    </td>
                    <td class="id">
                      <span>{{ item.mem_id }}</span>
                    </td>
                    <td>{{ item.reg_date }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- /.검색 후 결과 테이블 -->
        </div>
        <div class="modal-footer">
          <button
            class="btn btn_crud_point"
            data-dismiss="modal"
            @click="$emit('select-id')"
          >
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
    findIdInput: {
      type: String,
      default: '',
    },
    findIdList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.hide {
  display: none;
}
</style>
