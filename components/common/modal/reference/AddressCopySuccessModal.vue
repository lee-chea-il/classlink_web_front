<template>
  <div
    id="modalDataShare02"
    class="modal fade double"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm s2">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">자료 공유</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          복사되었습니다. <br />
          공유할 곳에서 Ctrl + V나 붙여넣기 하세요.
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_default" data-dismiss="modal">
            확인
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddressCopySuccessModal',
}
</script>

<style></style>
