<template>
  <div class="filter_name">
    <div class="custom-control custom-checkbox form-inline">
      <input
        :id="id"
        :name="name"
        type="checkbox"
        :data-value="value"
        class="custom-control-input"
        :checked="allCheck ? listItem.length === 0 : listItem.includes(label)"
        @input="$emit('click-item', $event)"
      />
      <label class="custom-control-label" :for="id">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomFilterBox',
  props: {
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    listItem: {
      type: Array,
      default: () => [],
    },
    allCheck: {
      type: Boolean,
      default: false,
    },
    value: { type: String, default: '' },
  },
}
</script>

<style></style>
