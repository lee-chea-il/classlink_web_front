<template>
  <div class="modal-footer">
    <button class="btn btn_crud_default" data-dismiss="modal">취소</button>
    <button
      id="create_chapter_1"
      data-dismiss="modal"
      data-toggle="modal"
      data-target="#modalLectureRegi02"
      class="btn btn_crud_point"
      :class="{ disabled: isDisabled }"
      :disabled="isDisabled"
      @click="$emit('next-btn')"
    >
      다음
    </button>
  </div>
</template>

<script>
export default {
  name: 'CreateLectureBtn',
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
