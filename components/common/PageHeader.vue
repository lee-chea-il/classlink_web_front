<template>
  <ul class="nav nav-tabs depth03">
    <li class="nav-item">
      <p class="nav-link active">{{ title }}</p>
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
