<template>
  <ul>
    <li>
      <nuxt-link to="/">메인</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/login">로그인</nuxt-link>
    </li>

    <li>
      <nuxt-link to="/login/identity">로그인 신분선택</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/signup">회원가입</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/signup/type">회원가입 타입</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/signup/detail">회원가입 상세</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavigationUl',
}
</script>

<style scoped>
ul {
  position: fixed;
  left: 50px;
  top: 50px;
  background: rgba(0, 0, 0, 0.5);
  padding: 12px;
  z-index: 9999;
}

ul li {
  padding: 6px 0;
}

ul li a {
  color: white;
}
</style>
