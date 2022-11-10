<template>
  <div class="search_section">
    <div class="left_area">
      <div class="btn btn_crud_default" @click="$emit('copy', $event)">
        복사
      </div>
      <button class="btn btn_crud_default" @click="$emit('paste', $event)">
        붙여넣기
      </button>
      <button class="btn btn_crud_default" @click="$emit('del', $event)">
        삭제
      </button>
    </div>
    <div class="right_area">
      <button
        class="btn btn_crud_point"
        data-toggle="modal"
        data-target="#modalCuriRegi"
        @click="$emit('open-add')"
      >
        등록
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchSection',
}
</script>

<style></style>
