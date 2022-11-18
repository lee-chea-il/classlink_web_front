<template>
  <ul id="myTab" class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        id="grade-tab"
        class="nav-link active"
        data-toggle="tab"
        data-target="#institute"
        type="button"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        <span class="icon_institute"></span>
        교육기관
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        id="class-tab"
        class="nav-link"
        data-toggle="tab"
        data-target="#franchise"
        type="button"
        role="tab"
        aria-controls="profile"
        aria-selected="false"
      >
        <span class="icon_fran"></span>
        프랜차이즈
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'EducationTabMenu',
}
</script>

<style></style>
