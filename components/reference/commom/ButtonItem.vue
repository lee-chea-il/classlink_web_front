<template>
  <button class="btn" :class="filterClass" @click="$emit('click-item', $event)">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'ButtonItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    filterClass() {
      const name = this.color
      if (name === 'default') return 'btn_crud_default'
      else if (name === 'point') return 'btn_crud_point'
      else if (name === 'filter') return 'btn_filter'
      else if (name === 'delete') return 'btn_crud_danger'
      return this.data
    },
  },
}
</script>

<style></style>
