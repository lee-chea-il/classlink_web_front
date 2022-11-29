<template>
  <div class="input-group input-search">
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :data-target="target"
      class="form-control"
      @input="$emit('change-input', $event)"
    />
    <div class="input-group-append">
      <button
        class="btn icons_x_circle_off"
        type="button"
        @click="$emit('delete-item')"
      />
      <button
        class="btn icons_search_off"
        type="button"
        @click="$emit('search-item')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchTxt: ''
    }
  },
}
</script>

<style></style>
