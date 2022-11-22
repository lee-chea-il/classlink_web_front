<template>
  <div
      id="modalMoreMemo02"
      class="modal fade ac_manage_std double"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">메모</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">내용을 저장하시겠습니까?</div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">저장</button>
            <button
              id="modalAllclose"
              class="btn btn_crud_default"
              data-dismiss="modal"
            >
              저장 안 함
            </button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  name: 'SaveMemoModal',
}
</script>
<style scoped></style>
