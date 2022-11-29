<template>
  <ul class="nav nav-tabs depth03">
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        :to="url1"
        :class="{ active: $route.fullPath.includes('/teachermanagement') }"
      >
        {{ title1 }}
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        :to="url2"
        :class="{ active: $route.fullPath.includes('/studentmanagement') }"
      >
        {{ title2 }}
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        :to="url3"
        :class="{ active: $route.fullPath.includes('/classmanagement') }"
      >
        {{ title3 }}
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        :to="url4"
        :class="{ active: $route.fullPath.includes('/exammanagement') }"
      >
        {{ title4 }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CustomPageHeader',
  props: {
    title1: {
      type: String,
      default: '',
    },
    title2: {
      type: String,
      default: '',
    },
    title3: {
      type: String,
      default: '',
    },
    title4: {
      type: String,
      default: '',
    },
    url1: {
      type: String,
      default: '',
    },
    url2: {
      type: String,
      default: '',
    },
    url3: {
      type: String,
      default: '',
    },
    url4: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
