<template>
  <div class="modal-footer">
    <button class="btn btn_crud_point" @click="$emit('submit')">
      {{ submitTxt }}
    </button>
    <button
      id="close"
      class="btn btn_crud_default"
      data-dismiss="modal"
      @click="$emit('close')"
    >
      취소
    </button>
  </div>
</template>

<script>
export default {
  name: 'ModalBtnBox',
  props: {
    submitTxt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
