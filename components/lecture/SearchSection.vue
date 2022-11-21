<template>
  <div class="search_section">
    <div class="left_area">
      <button class="btn btn_crud_default" @click="$emit('delete-item')">
        삭제
      </button>
    </div>
    <div class="right_area">
      <div class="input-group input-search form-inline form-lec">
        <input
          type="text"
          placeholder="강좌/선생님/반/커리큘럼 검색"
          class="form-control"
        />
        <div class="input-group-append">
          <button class="btn icons_search_off" type="button"></button>
        </div>
      </div>
      <button
        class="btn btn_crud_point"
        data-toggle="modal"
        data-target="#modalLectureRegi"
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
