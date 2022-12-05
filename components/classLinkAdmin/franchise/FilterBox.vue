<template>
  <div class="search_section">
    <div class="left_area">
      <div class="dropdown form-inline">
        <select
          id="sortIdx"
          name="sortIdx"
          class="btn dropdown-toggle"
          data-target="searchData"
          :value="searchData.sortIdx"
          @input="$emit('change-input', $event)"
        >
          <option value="1">FC 이름순</option>
          <option value="2">FC 이름순</option>
          <option value="3">대표 이름순</option>
          <option value="4">대표 이름순</option>
        </select>
      </div>
    </div>
    <div class="right_area">
      <div class="input-group input-search form-inline">
        <input
          id="word"
          name="word"
          type="text"
          class="form-control"
          data-target="searchData"
          :value="searchData.word"
          placeholder="대표 이름, ID, FC이름 검색"
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
  name: 'FilterBox',
  props: {
    searchData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
