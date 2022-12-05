<template>
  <div class="box01">
    <div class="title">{{ title }}</div>
    <form id="uploadForm" action="#">
      <input
        id="input00"
        type="text"
        class="form-control form-inline"
        :name="name"
        :value="value"
        placeholder="URL 입력"
        @input="$emit('change-url', $event)"
      />
      <div class="btn btn_crud_default" @click="$emit('upload-youtube')">
        등록
      </div>
      <button type="submit" style="display: none" @click.prevent></button>
    </form>
    <div class="sub" v-html="setDesc" />
  </div>
</template>

<script>
export default {
  name: 'UrlInputBox',
  props: {
    value: { type: String, default: '' },
    title: { type: String, default: '' },
    desc: { type: String, default: '' },
    name: { type: String, default: '' },
  },
  computed: {
    setDesc() {
      return this.desc.split('\n').join('<br />')
    },
  },
}
</script>

<style></style>
