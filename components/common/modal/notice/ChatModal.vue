<template>
  <Transition name="modal">
    <div
      id="modalChat"
      class="modal fade modal_chat"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm s2">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">채팅하기</h5>
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
            <i class="icons_user"></i>
            <div class="user_name">홍나나 학생</div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point btn_chat" data-dismiss="modal">
              <span class="icon_talk_on"></span>
              채팅하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ChatModal',
}
</script>

<style></style>
