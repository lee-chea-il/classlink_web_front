<template>
  <select
    id="subject"
    class="select"
    name="subject"
    :value="inputValue"
    @input="$emit('change-input', $event)"
  >
    <option class="dropdown-item" :value="1">국어</option>
    <option class="dropdown-item" :value="2">수학</option>
    <option class="dropdown-item" :value="3">사회</option>
    <option class="dropdown-item" :value="4">과학</option>
    <option class="dropdown-item" :value="5">영어</option>
    <option class="dropdown-item" :value="6">논술</option>
  </select>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    inputValue: {
      type: Number,
      default: 0,
    },
  },
}
</script>
