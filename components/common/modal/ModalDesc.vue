<template>
  <Transition name="modal">
    <div v-if="open" class="modal-mask">
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-wrapper">
        <div class="modal-content">
          <div class="modal-header" style="border: none">
            <h5 id="exampleModalLabel" class="modal-title">{{ title }}</h5>
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
          <div class="modal-body" style="border: none">
            <span>{{ desc }}</span>
          </div>
          <div class="modal-footer" style="border: none">
            <button
              class="btn btn_crud_default"
              data-dismiss="modal"
              style="margin: auto"
              @click="$emit('close')"
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
export default {
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
