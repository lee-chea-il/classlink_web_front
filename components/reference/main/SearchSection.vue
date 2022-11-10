<template>
  <div class="search_section">
    <div class="left_area">
      <div class="btn btn_crud_default" @click="$emit('copy', $event)">
        복사
      </div>
      <button class="btn btn_crud_default" @click="$emit('paste', $event)">
        붙여넣기
      </button>
      <button class="btn btn_crud_default" @click="$emit('del', $event)">
        삭제
      </button>
    </div>

    <div class="right_area">
      <div class="input-group input-search form-inline">
        <input type="text" placeholder="검색어 입력" class="form-control" />
        <div class="input-group-append">
          <button
            class="btn icons_search_off"
            type="button"
            data-toggle="modal"
            data-target="#modalDatafilterResult"
            data-dismiss="modal"
          ></button>
        </div>
      </div>
      <button
        class="btn btn_filter"
        data-toggle="modal"
        data-target="#modalDatafilter"
      >
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
}
</script>

<style></style>
