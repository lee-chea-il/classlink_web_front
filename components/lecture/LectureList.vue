<template>
  <div class="tab-pane active">
    <!-- 검색 영역 -->
    <SearchSection @delete-item="$emit('delete-item', checkList, 'list')" />
    <!-- 검색 영역 -->
    <!-- 테이블 영역 -->
    <TableSection
      :lectureList="lectureList"
      :checkList="checkList"
      @check-item="$emit('check-item', $event)"
      @open-lecture="$emit('open-lecture', $event)"
      @delete-item="$emit('delete-item', $event)"
    />
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
    checkList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
