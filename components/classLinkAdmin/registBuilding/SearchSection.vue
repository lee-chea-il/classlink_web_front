<template>
  <div class="search_section">
    <div class="right_area">
      <div class="input-group input-search form-inline">
        <input
          id="word"
          type="text"
          name="word"
          data-target="searchBuilding"
          :value="value"
          class="form-control"
          placeholder="건물 이름 검색"
          @input="$emit('change-input', $event)"
        />
        <div class="input-group-append">
          <button class="btn icons_search_off" type="button"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchSection',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
