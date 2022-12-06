<template>
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
      <li class="page-item">
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
}
</script>

<style></style>
