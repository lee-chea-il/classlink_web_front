<template>
  <Transition name="fade">
    <div v-if="show" class="toast" role="alert">
      <div class="toast-body">
        <span id="toastMsg" class="message">{{ message }}</span>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.toast {
  display: block;
  opacity: 1;
  top: 93%;
  left: 3%;
  z-index: 9999;
}

.message {
  font-size: 16px;
}
.toast .toast-body {
  background-color: #fb5353;
  padding: 12px 25px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
