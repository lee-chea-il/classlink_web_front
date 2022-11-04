<template>
  <div
    :id="modalData.id"
    class="modal fade modal_login"
    tabindex="-1"
    :aria-labelledby="modalData.id"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 :id="modalData.id" class="modal-title">{{ modalData.title }}</h5>
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
          <div class="pretxt_area">{{ modalData.txt }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpComfirmModal',
  props: {
    modalData: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>

<style scoped></style>
