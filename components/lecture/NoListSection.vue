<template>
  <div class="tab-pane active">
    <div class="page_nodata">
      <div class="txt">
        현재 개설한 강좌가 없습니다. <br />
        먼저 강좌를 개설해 보세요
      </div>
      <button
        class="btn btn_crud_point"
        data-toggle="modal"
        data-target="#modalLectureRegi"
      >
        강좌 만들기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoListSection',
}
</script>

<style></style>
