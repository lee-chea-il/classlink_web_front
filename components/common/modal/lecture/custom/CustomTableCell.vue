<template>
  <td
    v-if="currentIdx === sameIdx"
    class="weeks"
    style="background: #8fa7fb"
    rowspan="2"
  >
    <div :class="isTrue(currentIdx)" />
  </td>
  <!-- <div v-else-if="currentIdx < targetIdx && sameIdx > targetIdx"></div> -->
  <!-- <td v-else class="weeks"><div :class="isTrue(currentIdx)" /></td> -->
</template>

<script>
export default {
  name: 'CustomTableCell',
  props: {
    currentIdx: {
      type: Number,
      default: 0,
    },
    sameIdx: {
      type: Number,
      default: 0,
    },
    targetIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    isTrue(idx) {
      if (idx % 6 === 0) return 'half-hour lined'
      else return 'half-hour'
    },
  },
}
</script>

<style></style>
