<template>
  <div class="function_area">
    <button
      type="button"
      class="btn btn-refresh"
      @click="$emit('reload')"
    ></button>

    <!-- [개발참조]버튼 활성 : class="active" 추가 -->
    <nuxt-link
      :to="myHome"
      class="btn btn_nav_myhome"
      :class="{
        active: $route.fullPath === '/',
      }"
      >마이홈</nuxt-link
    >
    <nuxt-link
      :to="myPage"
      class="btn btn_nav_user"
      :class="{
        active: $route.fullPath !== '/',
      }"
      >홍길동 선생님</nuxt-link
    >
    <!-- [개발참조]신규알림표시 : class="newlabel" 추가 -->
    <button class="btn btn_alert icons_bell_off newlabel"></button>
  </div>
</template>

<script>
export default {
  name: 'MyItem',
  props: {
    myHome: {
      type: String,
      default: '',
    },
    myPage: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
