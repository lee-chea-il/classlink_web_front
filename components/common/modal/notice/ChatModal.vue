<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalChat"
      class="modal modal_chat modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-sm s2">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">채팅하기</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="$emit('close')"
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
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
