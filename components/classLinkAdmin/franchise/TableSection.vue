<template>
  <div v-show="show" class="tab-pane active">
    <!-- 검색 영역 -->
    <FilterBox
      :searchData="searchData"
      @change-input="$emit('change-input', $event)"
    />

    <div class="table_section">
      <table class="table">
        <TableHeader :tableHeader="tableHeader" />
        <TableBody
          :franchiseList="franchiseList"
          @select-fran="$emit('select-fran', $event)"
          @select-building="$emit('select-building', $event)"
          @change-franchise="setChangeFranchise"
        />
      </table>

      <div class="pagination_section">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                <span class="previous"></span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link active" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">
                <span class="next"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import TableHeader from '../common/TableHeader.vue'
import FilterBox from './FilterBox.vue'
import TableBody from './TableBody.vue'

export default {
  name: 'TableSection',
  components: { TableHeader, TableBody, FilterBox },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    tableHeader: {
      type: Array,
      default: () => [],
    },
    franchiseList: {
      type: Array,
      default: () => [],
    },
    searchData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    setChangeFranchise(e, idx) {
      this.$emit('change-franchise', e, idx)
    },
  },
}
</script>

<style></style>
