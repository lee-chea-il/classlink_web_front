<template>
  <div class="tab-pane active">
    <!-- 검색 영역 -->
    <SearchSection />
    <!-- 검색 영역 -->
    <!-- 테이블 영역 -->
    <TableSection :lectureList="lectureList" />
    <!-- /.테이블 영역 -->
    <!-- 페이징 영역 -->
    <PaginationSection />
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
  },
}
</script>

<style></style>
