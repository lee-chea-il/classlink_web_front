<template>
  <div>
    <div
      v-for="(item, idx) in navList"
      v-show="item.children && setShowMenu(item)"
      :key="idx"
      class="nav_sub"
    >
      <ul class="nav nav_dapth02">
        <li v-for="(nav, index) in item.children" :key="index" class="nav-item">
          <!-- [개발참조]버튼 활성 : class="nav-link에 active" 추가 -->
          <NuxtLink
            :class="{
              'nav-link': true,
              active: setActiveClass(item, nav),
            }"
            :to="nav.to"
            >{{ nav.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  props: {
    navList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setActiveClass(item, nav) {
      if (item.id === 1) {
        return (
          this.$route.fullPath === nav.active ||
          this.$route.fullPath === nav.active + '#'
        )
      } else return this.$route.fullPath === nav.active
    },
    setShowMenu(item) {
      // if (item.id === 2) {
      //   return this.$route.matched[0].path === item.isShow
      // } else {
      return this.$route.fullPath.includes(item.isShow)
      // }
    },
  },
}
</script>

<style></style>
