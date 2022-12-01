<template>
  <div
      id="modalCancleSub"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              구독을 취소하시겠습니까?
            </h5>
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
            취소를 진행해도 2022년 00월 00일까지는 서비스를 이용하실 <br />
            수 있습니다. 해당 날짜 이후에는 모든 권한을 잃게 되며, <br />
            클라우드 기록 또한 다운로드 할 수 없습니다.
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_danger">구독 취소</button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'UnsubscribeModal',
}
</script>
<style scoped></style>
