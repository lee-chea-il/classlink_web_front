<template>
  <div class="tab-pane active">
    <div v-if="identity === 'teacher'" class="page_nodata">
      <div class="txt">현재 배정된 강좌가 없습니다.</div>
    </div>
    <div v-else class="page_nodata">
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
  props: {
    identity: {
      type: String,
      default: 'teacher',
    },
  },
}
</script>

<style></style>
