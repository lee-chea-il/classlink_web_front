<template>
  <div class="modal-footer">
    <button
      class="btn btn_crud_default"
      data-dismiss="modal"
      data-toggle="modal"
      :data-target="prevTarget"
      @click="$emit('prev')"
    >
      {{ isCreate ? '취소' : '이전' }}
    </button>
    <button v-show="isCreate" class="btn btn_crud_point" @click="$emit('next')">
      다음
    </button>
    <button
      v-show="!isCreate"
      id="create_chapter_1"
      class="btn btn_crud_point"
      data-dismiss="modal"
      data-toggle="modal"
      :data-target="nextTarget"
      @click="$emit('next')"
    >
      다음
    </button>
  </div>
</template>

<script>
export default {
  name: 'ReverseBtnBox',
  props: {
    isCreate: {
      type: Boolean,
      default: false,
    },
    prevTarget: {
      type: String,
      default: '',
    },
    nextTarget: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
