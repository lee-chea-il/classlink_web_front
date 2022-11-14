<template>
  <div class="list_area">
    <ul>
      <li v-for="(item, idx) in listItem" :key="idx">
        <span class="text">{{ item.name }}</span>
        <i
          :class="add ? 'icons_plus_circle_off' : 'icons_minus_circle_off'"
          @click="$emit('click-item', add ? item : idx)"
        ></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ClassList',
  props: {
    listItem: {
      type: Array,
      default: () => [],
    },
    add: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
