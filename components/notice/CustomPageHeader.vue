<template>
  <ul class="nav nav-tabs depth03">
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        to="/management/notice/all"
        :class="{ active: $route.fullPath.includes('/all') }"
      >
        전체
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        to="/management/notice/classlink"
        :class="{ active: $route.fullPath.includes('/classlink') }"
      >
        클래스링크
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        to="/management/notice/education"
        :class="{ active: $route.fullPath.includes('/education') }"
      >
        교육기관
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        to="/management/notice/classroom"
        :class="{ active: $route.fullPath.includes('/classroom') }"
      >
        반
      </NuxtLink>
    </li>
    <!-- 개인 탭은 나중에 구현 예정-->
    <!-- <li class="nav-item">
      <NuxtLink
        class="nav-link"
        to="/management/notice/individual/student"
        :class="{ active: $route.fullPath.includes('/individual') }"
      >
        개인
      </NuxtLink>
    </li> -->
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        to="/management/notice/franchise"
        :class="{ active: $route.fullPath.includes('/franchise') }"
      >
        프랜차이즈
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CustomPageHeader',
}
</script>

<style></style>
