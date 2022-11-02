<template>
  <select
    class="select"
    name="subject"
    :value="input"
    @input="$emit('change-input', $event)"
  >
    <option class="dropdown-item" value="1">등록한 과목01</option>
    <option class="dropdown-item" value="2">등록한 과목02</option>
    <option class="dropdown-item" value="3">등록한 과목03</option>
  </select>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    input: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
