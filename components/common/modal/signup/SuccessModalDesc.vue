<template>
  <Transition name="modal">
    <div
      v-if="open"
      class="modal double modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <ModalHeader :title="title" @close="$emit('close')" />

          <div class="modal-body" style="border: none">
            {{ desc }}
          </div>
          <div class="modal-footer" style="border: none">
            <button
              class="btn btn_crud_default"
              data-dismiss="modal"
              style="margin: auto"
              @click="$emit('confirm')"
            >
              확인
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
  name: 'ModalDesc',
  components: { ModalHeader },
  props: {
    open: Boolean,
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: absolute;
  z-index: 9998;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
</style>
