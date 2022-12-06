<template>
  <div class="search_section">
    <div class="left_area">
      <ButtonItem
        v-if="identity !== 'teacher'"
        title="삭제"
        color="delete"
        @click-item="$emit('delete-item')"
      />
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
        v-if="identity !== 'teacher'"
        id="lecture_modal"
        class="btn btn_crud_point"
        data-toggle="modal"
        data-target="#modalLectureRegi"
        @click="$emit('open-create')"
      >
        등록
      </button>
    </div>
  </div>
</template>

<script>
import ButtonItem from '../common/ButtonItem.vue'

export default {
  name: 'SearchSection',
  components: { ButtonItem },
  props: {
    identity: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
