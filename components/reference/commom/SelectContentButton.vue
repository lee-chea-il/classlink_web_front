<template>
  <div
    :class="className"
    type="button"
    data-dismiss="modal"
    data-toggle="modal"
    :data-target="target"
    @click="$emit('click-item')"
  >
    <span :class="icon" />
    <div>{{ title }}</div>
    <div v-html="setDesc" />
  </div>
</template>

<script>
export default {
  name: 'SelectContentButton',
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
  },
  computed: {
    setDesc() {
      return this.desc.split('\n').join('<br />')
    },
  },
}
</script>

<style></style>
