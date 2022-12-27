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
          <ModalHeader title="자료 삭제" @close="$emit('close')" />

          <div class="modal-body">
            해당 자료를 삭제하시겠습니까? <br />
            삭제를 클릭하면 복구할 수 없습니다.
          </div>
          <div class="modal-footer">
            <button
              class="btn btn_crud_default"
              data-dismiss="modal"
              @click="$emit('close')"
            >
              취소
            </button>
            <button class="btn btn_crud_danger" @click="$emit('submit', data)">
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../ModalHeader.vue'

export default {
  name: 'DeleteModal',
  components: { ModalHeader },
  props: {
    open: { type: Boolean, default: false },
    target: { type: String, default: '' },
    data: { type: Object, default: () => {} },
  },
}
</script>

<style></style>
