<template>
  <td>
    <span v-for="(data, index) in dataList" :key="index">
      {{ data.name }}
    </span>
  </td>
</template>

<script>
export default {
  name: 'CustomSpan',
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
