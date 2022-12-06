<template>
  <button
    class="btn btn_crud_default"
    data-toggle="modal"
    @click="$emit('click-event', $event)"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'ReferenceBtn',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
