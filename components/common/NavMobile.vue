<template>
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
        <div class="title_area">마이홈</div>
        <div class="mobile_navbtn_area">
          <button id="mobilemuBtn" class="btn icons_mobilemu"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMobile',
}
</script>

<style></style>
