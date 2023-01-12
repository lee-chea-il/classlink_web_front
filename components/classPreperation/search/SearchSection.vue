<template>
  <div class="search_section">
    <!-- <div class="left_area">
      <button class="btn btn_crud_default copy" data-dismiss="modal">
        복사
      </button>
    </div> -->
    
    <div class="right_area">
      <div class="input-group input-search form-inline">
        <input
          type="text"
          placeholder="검색어 입력"
          class="form-control"
          name="word"
          :value="value"
          @keypress.enter="$emit('search-submit')"
          @input="$emit('change-word', $event)"
        />
        <div class="input-group-append">
          <button
            class="btn icons_search_off"
            type="button"
            @click="$emit('search-submit')"
          ></button>
        </div>
      </div>
      <button class="btn btn_filter" @click="$emit('open-filter', 'prev')">
        필터
      </button>
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
    checkList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
