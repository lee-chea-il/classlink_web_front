<template>
  <div class="modal-header">
    <h5 id="exampleModalLabel" class="modal-title">강좌 수정</h5>
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
</template>

<script>
export default {
  name: 'ChangeLectureHeader',
}
</script>

<style></style>
