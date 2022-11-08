<template>
  <!-- header -->
  <div id="header" class="header login">
    <!-- 작은탬, 모바일 상단메뉴 < 991.98-->
    <div class="nav_mobile">
      <div class="nav_top_wrap">
        <div class="nav_top">
          <div class="mobile_navbtn_area left">
            <button
              id="mobilebackBtn"
              class="btn icons_arrow2_l"
              onclick="history.back();"
            ></button>
          </div>
          <div v-if="$route.path === '/login'" class="title_area">
            {{ title }}
          </div>
          <div v-if="$route.path === '/login/identity'" class="title_area">
            신분 유형
          </div>
          <div v-else-if="$route.path === '/resetpw'" class="title_area">
            비밀번호 재설정
          </div>
          <div v-else-if="$route.path === '/signup'" class="title_area">
            서비스 이용 동의
          </div>
          <div v-else-if="$route.path === '/signup/type'" class="title_area">
            신분 유형
          </div>
          <div v-else-if="$route.path === '/signup/detail'" class="title_area">
            회원가입
          </div>
          <div v-else-if="$route.path === '/registedu'" class="title_area">
            교육기관 개설
          </div>
          <div class="mobile_navbtn_area">
            <!-- <button id="mobilemuBtn" class="btn icons_mobilemu"></button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.header -->
</template>

<script>
export default {
  name: 'LoginHeaderSection',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
