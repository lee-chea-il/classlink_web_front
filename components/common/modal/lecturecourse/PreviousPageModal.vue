<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataDelete"
      class="modal double modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <ModalHeader title="등록 취소" @close="$emit('close')" />

          <div class="modal-body">작성한 글이 저장되지 않습니다. <br /></div>
          <div class="modal-footer">
            <button class="btn btn_crud_danger" @click="$emit('prev')">
              확인
            </button>
            <button
              class="btn btn_crud_default"
              data-dismiss="modal"
              @click="$emit('close')"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '@/components/common/ModalHeader.vue'

export default {
  name: 'DeleteModal',
  components: { ModalHeader },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
