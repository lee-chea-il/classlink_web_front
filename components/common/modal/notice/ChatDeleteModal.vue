<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalChatDelete"
      class="modal double modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')" />
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">채팅방 삭제</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            채팅 및 알림이 모두 삭제됩니다. <br />
            나가시겠습니까?
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">나가기</button>
            <button class="btn btn_crud_default" @click="$emit('close')">
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
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
