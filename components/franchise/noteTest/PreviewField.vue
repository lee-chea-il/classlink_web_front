<template>
  <div class="title_area">
    <span class="tit">{{ currentPageIdx + 1 }}번 문제</span>
    <button
      class="btn btn_crud_default btn_first"
      @click="$emit('preview', 'add', 'first')"
    >
      처음부터<br />미리보기
    </button>
    <button
      class="btn btn_crud_default btn_present"
      @click="$emit('preview', 'add')"
    >
      현재부터<br />미리보기
    </button>
  </div>
</template>

<script>
export default {
  name: 'PreviewField',
  props: {
    currentPageIdx: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
