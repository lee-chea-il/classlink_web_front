<template>
  <div
    id="modalBuildingImg"
    class="modal fade modal_ac_manage_building"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <ModalHeader title="강의동 미리보기" />
        <div class="modal-body">
          <div class="image_view">
            <img :src="img" alt="" />
            <!-- 실제 이미지 적용의 예 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalHeader from '~/components/common/ModalHeader.vue'

export default {
  name: 'PreviewBuildingImgModal',
  components: { ModalHeader },
  props: {
    img: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
