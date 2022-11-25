<template>
  <div class="pagination_section">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" @click="$emit('paging-derection', 'min')">
          <a class="page-link" href="#">
            <span class="previous"></span>
          </a>
        </li>
        <li
          v-for="(item, idx) in numberList"
          :key="idx"
          class="page-item"
          @click="$emit('pagination', item)"
        >
          <a
            class="page-link"
            :class="{ active: Number(item) === currentPage }"
            href="#"
            >{{ item }}</a
          >
        </li>
        <li class="page-item" @click="$emit('paging-derection', 'plus')">
          <a class="page-link" href="#">
            <span class="next"></span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PaginationSection',
  props: {
    numberList: {
      type: Array,
      default: () => [],
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style></style>
