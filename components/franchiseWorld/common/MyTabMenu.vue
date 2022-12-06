<template>
  <ul id="myTab" class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        id="grade-tab"
        class="nav-link active"
        data-toggle="tab"
        data-target="#mydata"
        type="button"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        <span class="icon_mydata"></span>
        {{ title }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MyTabMenu',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
