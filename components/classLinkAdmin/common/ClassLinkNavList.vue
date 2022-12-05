<template>
  <div>
    <div
      v-for="(item, idx) in navList"
      v-show="$route.matched[0].path.includes(item.isShow)"
      :key="idx"
      class="nav_sub"
    >
      <ul class="nav nav_dapth02">
        <li v-for="(nav, index) in item.children" :key="index" class="nav-item">
          <!-- [개발참조]버튼 활성 : class="nav-link에 active" 추가 -->

          <NuxtLink
            :class="{
              'nav-link': true,
              active: $route.fullPath.includes(nav.active),
            }"
            :to="nav.to"
          >
            {{ nav.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassLinkNavList',
  props: {
    navList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
