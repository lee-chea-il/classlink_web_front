<template>
  <Transition name="modal">
    <div
      id="modalChatDelete"
      class="modal fade double"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">채팅방 삭제</h5>
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
            채팅 및 알림이 모두 삭제됩니다. <br />
            나가시겠습니까?
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">나가기</button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ChatDeleteModal',
}
</script>

<style></style>
