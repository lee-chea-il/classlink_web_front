<template>
  <div class="title">
    미리보기
    <button v-if="show" class="btn btn_crud_point" @click="onClickChangeFile">
      파일 교체
    </button>
    <input
      ref="changeFile"
      :name="name"
      :accept="name === 'video' ? 'video/mp4' : 'application/pdf'"
      type="file"
      style="display: none"
      @input="$emit('change-file', $event)"
    />
  </div>
</template>

<script>
export default {
  name: 'ChangeFileTitle',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClickChangeFile() {
      this.$refs.changeFile.click()
    },
  },
}
</script>

<style></style>
