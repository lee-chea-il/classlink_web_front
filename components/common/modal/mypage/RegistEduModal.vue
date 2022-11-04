<template>
  <div
    id="modalInstRegi"
    class="modal fade modal_myinfo02"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">교육기관 개설</h5>
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
          <div class="section">
            <div id="loginRwrap" class="wrap">
              <div class="form_section">
                <form>
                  <div class="form-group">
                    <label for="reg-form01">교육기관 이름</label>
                    <input
                      id="reg-form01"
                      type="text"
                      placeholder="교육기관 이름 입력"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="reg-form02">연락처</label>
                    <input
                      id="reg-form02"
                      type="text"
                      placeholder="연락처 입력"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group form-inlinebox form-inline">
                    <label for="reg-form03">교육기관 주소</label>
                    <input
                      id="reg-form03"
                      type="text"
                      placeholder="교육기관 주소 입력"
                      class="form-control form-inline"
                    />
                    <button class="btn btn_crud_default">주소 검색</button>
                  </div>
                  <div class="form-group">
                    <label for="reg-form04">교육기관 설명</label>
                    <input
                      id="reg-form04"
                      type="text"
                      placeholder="교육기관 설명 입력"
                      class="form-control"
                    />
                  </div>
                </form>
                <!-- [개발참조]:class="disabled"제거시 활성 -->
                <button class="btn btn_crud_point disabled btn_mb">
                  교육기관 개설하기
                </button>

                <!-- <div class="question_txt">나중에 만들고 싶어요.</div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RegistEduModal',
}
</script>
<style scoped>
.btn_mb {
  margin-bottom: 30px;
}
</style>
