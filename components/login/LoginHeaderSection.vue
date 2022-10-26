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
          <div class="title_area">로그인</div>
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
}
</script>

<style></style>
