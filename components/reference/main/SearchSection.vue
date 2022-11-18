<template>
  <div class="search_section">
    <div class="left_area">
      <div class="btn btn_crud_default" @click="$emit('copy')">복사</div>
      <!-- <button class="btn btn_crud_default" @click="pasteData"> -->
      <button class="btn btn_crud_default" @click="$emit('paste')">
        붙여넣기
      </button>
      <button class="btn btn_crud_default" @click="$emit('delete')">
        삭제
      </button>
    </div>

    <div class="right_area">
      <div class="input-group input-search form-inline">
        <input
          v-show="!open"
          id="word"
          :value="value"
          name="word"
          type="text"
          placeholder="검색어 입력"
          class="form-control"
          @input="$emit('change-word', $event)"
          @keyup.enter="$emit('open-search-List', $event)"
        />
        <input v-show="open" placeholder="검색어 입력" class="form-control" />
        <div class="input-group-append">
          <button
            class="btn icons_search_off"
            type="button"
            @click="$emit('open-search-List', $event)"
          ></button>
        </div>
      </div>
      <button class="btn btn_filter" @click="$emit('open-filter', $event)">
        필터
      </button>
      <button
        class="btn btn_crud_point"
        data-toggle="modal"
        data-target="#modalDataregi"
      >
        등록
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchSection',
  props: {
    open: { type: Boolean, default: false },
    value: { type: String, default: '' },
  },
}
</script>

<style></style>
