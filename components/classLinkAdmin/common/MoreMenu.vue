<template>
  <ul>
    <li
      data-toggle="modal"
      data-target="#modalBuildChg"
      @click="$emit('select-fran', item)"
    >
      건물 등록/변경
    </li>
    <li
      data-toggle="modal"
      data-target="#modalFCactive"
      @click="$emit('change-franchise', item, 0)"
    >
      활동
    </li>
    <li
      data-toggle="modal"
      data-target="#modalFCactive"
      @click="$emit('change-franchise', item, 1)"
    >
      정지
    </li>
    <li
      data-toggle="modal"
      data-target="#modalFCactive"
      @click="$emit('change-franchise', item, 2)"
    >
      가맹 해제
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MoreMenu',
  props: {
    idx: {
      type: Number,
      default: 0,
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
