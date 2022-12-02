<template>
  <div
    id="modalServiceSub"
    class="modal fade double"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm s2">
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
          <p class="title">
            카드가 등록되었습니다. <br />
            바로 서비스를 구독할까요?
          </p>
          ‘예’를 선택하시면 서비스 구독 페이지로 이동합니다.
        </div>
        <div class="modal-footer">
          <button
            class="btn btn_crud_point"
            data-dismiss="modal"
            @click="$emit('click-go')"
          >
            예
          </button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            아니오
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SubscribeModal',
}
</script>
<style></style>
