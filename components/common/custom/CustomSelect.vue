<template>
  <select
    id="subject"
    class="select"
    name="subject"
    :value="inputValue"
    @input="$emit('change-input', $event)"
  >
    <option class="dropdown-item" value="국어">국어</option>
    <option class="dropdown-item" value="수학">수학</option>
    <option class="dropdown-item" value="사회">사회</option>
    <option class="dropdown-item" value="과학">과학</option>
    <option class="dropdown-item" value="영어">영어</option>
    <option class="dropdown-item" value="논술">논술</option>
  </select>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    inputValue: {
      type: String,
      default: '국어',
    },
  },
}
</script>

<style></style>
