<template>
  <div
    id="modalFriendsregi"
    class="modal fade double"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">일촌 등록</h5>
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
          <div class="input-group input-search form-inline">
            <input
              type="text"
              class="form-control"
              placeholder="일촌 이름 / ID 검색"
            />
            <div class="input-group-append">
              <button class="btn icons_x_circle_off" type="button"></button>
              <button class="btn icons_search_off" type="button"></button>
            </div>
          </div>
          <div class="table_area">
            <div class="table_thead">
              <table class="tb">
                <!-- <colgroup>
									<col width="55">
									<col width="70">
									<col>
									<col width="90">
									<col width="55">
									<col width="55">
								</colgroup> -->
                <thead>
                  <tr>
                    <th></th>
                    <th class="th01">이름</th>
                    <th class="th02">아이디</th>
                    <th class="th03">연락처</th>
                    <th class="th04">성별</th>
                    <th class="th05">나이</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="table_tbody">
              <table class="tb">
                <!-- <colgroup>
									<col width="55">
									<col width="70">
									<col>
									<col width="90">
									<col width="55">
									<col width="50">
								</colgroup> -->
                <tbody>
                  <tr>
                    <td>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chk02"></label>
                      </div>
                    </td>
                    <td>홍길동</td>
                    <td class="id">aaaaabbbbbcccccddddd</td>
                    <td>010-1111-2222</td>
                    <td>남</td>
                    <td>10세</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chk03"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chk03"></label>
                      </div>
                    </td>
                    <td>홍길동</td>
                    <td class="id">aaaaabbbbbcccccddddd</td>
                    <td>010-1111-2222</td>
                    <td>남</td>
                    <td>12세</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chk04"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chk04"></label>
                      </div>
                    </td>
                    <td>홍길동</td>
                    <td class="id">aaaaabbbbbcccccddddd</td>
                    <td>010-1111-2222</td>
                    <td>남</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chk05"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chk05"></label>
                      </div>
                    </td>
                    <td>홍길동</td>
                    <td class="id">aaaaabbbbbcccccddddd</td>
                    <td>010-1111-2222</td>
                    <td>-</td>
                    <td>12세</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point">등록</button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RegisterFamilyModal',
}
</script>
<style scoped></style>
