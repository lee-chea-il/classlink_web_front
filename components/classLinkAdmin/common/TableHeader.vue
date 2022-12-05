<template>
  <thead>
    <tr>
      <th v-for="(tit, idx) in tableHeader" :key="idx">{{ tit }}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'TableHeader',
  props: {
    tableHeader: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
