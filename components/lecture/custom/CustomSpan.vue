<template>
  <td class="spred_text">
    <span v-for="(data, index) in dataList" :key="index">
      {{ isClass ? data.name : data.name }}
      {{ isClass ? '' : spareList[0]?.name }}
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
    spareList: {
      type: Array,
      default: () => [],
    },
    isClass: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.tab-content.depth03 .table_section .table tbody td.spred_text,
.modal .modal-body .table_section .table tbody td.spred_text {
  max-width: 140px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
