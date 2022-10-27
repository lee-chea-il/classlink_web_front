<template>
  <div
    id="modalDataShare01"
    class="modal fade double"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">자료 공유</h5>
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
          Ctrl + C를 눌러서 복사해 주세요.
          <!-- [개발참조] value값에 해당 자료의 공유 주소를 출력  -->
          <input
            type="text"
            value="https://www.youtube.com/"
            class="form-control form-inline form-share"
          />
        </div>
      </div>
      <div class="modal-footer">
        <!-- <button class="btn btn_crud_point">확인</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareViewModal',
}
</script>

<style></style>
