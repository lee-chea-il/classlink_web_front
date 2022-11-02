<template>
  <div
    id="modalLogout"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm s2">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">로그아웃</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">로그아웃을 하시겠습니까?</div>
        <div class="modal-footer">
          <button
            id="close"
            class="btn btn_crud_point"
            data-dismiss="modal"
            @click="onClickEvent"
          >
            로그아웃
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
  name: 'LogoutModal',
  methods: {
    onClickEvent() {
      this.$emit('logoutBtn-click')
      document.getElementById('close').click()
    },
  },
}
</script>
<style scoped></style>
