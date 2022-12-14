<template>
  <div class="modal-footer">
    <button
      class="btn btn_crud_default"
      data-dismiss="modal"
      data-toggle="modal"
      :data-target="prevTarget"
    >
      이전
    </button>
    <button
      class="btn btn_crud_point"
      :class="{ disabled: isDisabled }"
      data-dismiss="modal"
      data-toggle="modal"
      :data-target="nextTarget"
      :disabled="isDisabled"
    >
      다음
    </button>
  </div>
</template>

<script>
export default {
  name: 'CustomModalBtn',
  props: {
    prevTarget: { type: String, default: '' },
    nextTarget: { type: String, default: '' },
    isDisabled: { type: Boolean, default: true },
  },
}
</script>

<style></style>
