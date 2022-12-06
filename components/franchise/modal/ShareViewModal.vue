<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataShare01"
      class="modal double modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <ModalHeader title="자료 공유" @close="$emit('close')" />

          <div class="modal-body">
            Ctrl + C를 눌러서 복사해 주세요.
            <!-- [개발참조] value값에 해당 자료의 공유 주소를 출력  -->
            <input
              type="text"
              :value="url"
              class="form-control form-inline form-share"
            />
          </div>
        </div>
        <div class="modal-footer">
          <!-- <button class="btn btn_crud_point">확인</button> -->
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../common/ModalHeader.vue'

export default {
  name: 'ShareViewModal',
  components: { ModalHeader },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
