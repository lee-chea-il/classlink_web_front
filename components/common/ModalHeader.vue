<template>
  <div class="modal-header">
    <h5 id="exampleModalLabel" class="modal-title">{{ title }}</h5>
    <button
      id="referenceSelectClose"
      type="button"
      class="close"
      data-dismiss="modal"
      aria-label="Close"
      @click="$emit('close')"
    >
      <i class="icons_close"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ModalHeader',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
