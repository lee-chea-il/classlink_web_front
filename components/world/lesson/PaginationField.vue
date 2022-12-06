<template>
  <div class="pagination_section">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" @click="$emit('pagination', 'min', length)">
          <a class="page-link" href="#">
            <span class="previous"></span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link active" href="#">
            {{ currentIdx + 1 }}/{{ length }}
          </a>
        </li>
        <li class="page-item" @click="$emit('pagination', 'plus', length)">
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
  name: 'PaginationField',
  props: {
    length: {
      type: Number,
      default: 0,
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
