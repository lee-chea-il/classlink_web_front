<template>
  <div
    id="modalFrcsignup"
    class="modal fade modal_ac_manage2_frcsignup"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">프랜차이즈 가입</h5>
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
          <div class="title">가맹코드를 입력하세요.</div>
          <div class="input-group input-search form-inline">
            <input
              type="text"
              class="form-control"
              placeholder="가맹코드 검색"
            />
            <div class="input-group-append">
              <!-- <button class="btn icons_x_circle_off" type="button"></button> -->
              <button class="btn icons_search_off" type="button"></button>
            </div>
          </div>
          <div class="preview">
            <i class="icons_thumbnail"></i>
          </div>
          <div>
            찾으시는 프랜차이즈가 맞다면 <br />
            가입을 요청해주세요.
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point" data-dismiss="modal">
            가입요청
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FranchiseSignUpModal',
}
</script>

<style></style>
