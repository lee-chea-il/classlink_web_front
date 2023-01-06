<template>
  <div class="quiz_area02">
    <div class="etcbtn_area">
      <button
        class="btn btn_crud_default btn_first"
        @click="$emit('preview', 'browse', 'first')"
      >
        처음부터<br />미리보기
      </button>
      <button
        class="btn btn_crud_default btn_present"
        @click="$emit('preview', 'browse')"
      >
        현재부터<br />미리보기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewBtnBox',
}
</script>

<style></style>
