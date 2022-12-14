<template>
  <Transition name="modal">
    <div
      id="modalImg"
      class="modal fade modal_ac_manage_building"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">상세보기</h5>
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
            <div class="image_view">
              <img src="@/assets/images/sample_building_noimg.jpg" alt="" />
              <!-- 실제 이미지 적용의 예 -->
              <!-- <img src="../images/sample_building.jpg" alt=""> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ImgModal',
}
</script>

<style></style>
