<template>
  <div class="modal-footer">
    <button
      class="btn btn_crud_point"
      :class="{ disabled: invalid }"
      :disabled="invalid"
      @click="$emit('submit')"
    >
      {{ submitTxt }}
    </button>
    <button
      v-show="!isUpdate"
      id="close"
      class="btn btn_crud_default"
      data-dismiss="modal"
      @click="$emit('close')"
    >
      취소
    </button>
    <button
      v-show="isUpdate"
      class="btn btn_crud_danger"
      data-dismiss="modal"
      @click="$emit('del')"
    >
      삭제
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
    isUpdate: {
      type: Boolean,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
