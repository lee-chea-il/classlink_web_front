<template>
  <ul class="nav nav-tabs depth03">
    <li class="nav-item">
      <a class="nav-link active"> {{ title }} </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
