<template>
  <div
    id="modalLectureMemoDelete"
    class="modal fade double"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm s2">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">삭제</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">메모를 삭제하시겠습니까?</div>
        <div class="modal-footer">
          <button
            class="btn btn_crud_point"
            data-dismiss="modal"
            @click="$emit('delete-memo')"
          >
            네
          </button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            아니요
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DeleteFamilyModal',
}
</script>
<style scoped></style>
