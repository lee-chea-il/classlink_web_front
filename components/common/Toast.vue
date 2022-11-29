<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-delay="2000"
    >
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
}
.toast .toast-body {
  background-color: #fb5353;
}
</style>
