<template>
  <div class="tab-pane active">
    <!-- 검색 영역 -->
    <SearchSection
      :identity="identity"
      @open-create="$emit('open-create')"
      @set-title="$emit('set-title', $event)"
      @delete-item="$emit('delete-item', checkList, 'list')"
    />
    <!-- 검색 영역 -->
    <!-- 테이블 영역 -->
    <TableSection
      :lectureList="lectureList"
      :checkList="checkList"
      :identity="identity"
      @check-item="$emit('check-item', $event)"
      @open-lecture="$emit('open-lecture', $event)"
      @delete-item="$emit('delete-item', $event)"
      @show-menu="$emit('show-menu', $event)"
      @set-title="$emit('set-title', $event)"
      @open-select-curriculum="$emit('open-select-curriculum')"
    />
    <!-- /.테이블 영역 -->
    <!-- 페이징 영역 -->
    <PaginationSection
      :numberList="numberList"
      :currentPage="currentPage"
      @pagination="$emit('pagination', $event)"
      @paging-derection="$emit('paging-derection', $event)"
    />
    <!-- /.페이징 영역 -->
  </div>
</template>

<script>
import PaginationSection from './PaginationSection.vue'
import SearchSection from './SearchSection.vue'
import TableSection from './TableSection.vue'

export default {
  name: 'LectureList',
  components: { SearchSection, TableSection, PaginationSection },
  props: {
    lectureList: {
      type: Array,
      default: () => [],
    },
    numberList: {
      type: Array,
      default: () => [],
    },
    checkList: {
      type: Array,
      default: () => [],
    },
    identity: {
      type: String,
      default: 'teacher',
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style></style>
