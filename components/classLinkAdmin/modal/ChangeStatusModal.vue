<template>
  <div
    id="modalFCactive"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm s2">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title"></h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div v-show="isChangeStatus === 0" class="modal-body">
          <div class="ap_title">
            “{{ selectFranchise.name }}” 를 활동 상태로 바꾸시겠습니까?
          </div>
          <br />
          <div class="ap_content">
            활동 상태로 변경 시 해당 학원이 프랜차이즈 공유 콘텐츠를 <br />
            사용할 수 있게 됩니다.
          </div>
        </div>
        <div v-show="isChangeStatus === 1" class="modal-body">
          <div class="ap_title">
            “{{ selectFranchise.name }}” 를 정지 상태로 바꾸시겠습니까?
          </div>
          <br />
          <div class="ap_content">
            정지 상태로 변경 시 해당 학원이 프랜차이즈 공유 콘텐츠를 <br />
            사용할 수 없게 됩니다.
          </div>
        </div>
        <div v-show="isChangeStatus === 2" class="modal-body">
          <div class="ap_title">
            “{{ selectFranchise.name }}” 가맹 해제 하시겠습니까?
          </div>
          <br />
          <div class="ap_content">
            가맹 해제 시 해당 학원은 프랜차이즈 공유 콘텐츠를 사용할 수 없게
            되며, <br />
            다음 결제일부터 결제를 진행하지 않습니다.
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point">예</button>
          <button class="btn btn_crud_default">아니오</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActiveStatusModal',
  props: {
    isChangeStatus: { type: Number, default: 0 },
    selectFranchise: { type: Object, default: () => {} },
  },
}
</script>

<style></style>
