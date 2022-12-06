<template>
  <div v-show="open" class="input-group input-search form-inline">
    <input
      id="word"
      :value="value"
      name="word"
      type="text"
      placeholder="검색어 입력"
      class="form-control"
      @input="$emit('change-word', $event)"
      @keyup.enter="$emit('open-search-list', $event)"
    />
    <div class="input-group-append">
      <button
        class="btn icons_search_off"
        type="button"
        @click="$emit('open-search-list', $event)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchTextBox',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
