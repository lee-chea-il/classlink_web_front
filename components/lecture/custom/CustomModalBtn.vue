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
      data-dismiss="modal"
      data-toggle="modal"
      :data-target="nextTarget"
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
  },
}
</script>

<style></style>
