<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        :disabled="currentList === 1"
        @click="$emit('paginationList', 'min')"
      >
        <a class="page-link" href="#">
          <span class="previous"></span>
        </a>
      </li>
      <li v-for="(num, idx) in pageList" :key="idx" class="page-item">
        <a
          class="page-link"
          :class="{ active: currentPage === num }"
          href="#"
          @click="$emit('pagination', num)"
          >{{ num }}</a
        >
      </li>
      <li class="page-item" @click="$emit('paginationList', 'plus')">
        <a class="page-link" href="#">
          <span class="next"></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PaginationItem',
  props: {
    currentPage: { type: Number, default: 0 },
    pageList: { type: Array, default: () => [] },
    currentList: { type: Number, default: 0 },
  },
}
</script>

<style></style>
