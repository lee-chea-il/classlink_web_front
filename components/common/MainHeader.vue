<template>
  <div id="header" class="header">
    <!-- 탭, PC 버전 상단메뉴 ≥992px and up -->
    <div class="nav_web">
      <div class="nav_top_wrap">
        <div class="nav_top">
          <div
            class="logo_area"
            @click="$store.commit('common/setActiveNavIdx', 0)"
          >
            <NuxtLink to="/"
              ><img src="@/assets/images/ClassLink_logo.svg" alt="ClassLink"
            /></NuxtLink>
          </div>
          <div class="nav_area">
            <ul class="nav nav_dapth01">
              <li class="nav-item">
                <nuxt-link
                  :class="{
                    'nav-link': true,
                    active: $route.matched[0].path === '/classPreperation',
                  }"
                  :to="
                    $route.matched[0].path === '/classPreperation'
                      ? ''
                      : '/classPreperation/reference'
                  "
                  >수업준비</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    'nav-link': true,
                    active: $route.matched[0].path === '/class',
                  }"
                  :to="
                    $route.matched[0].path === '/class'
                      ? ''
                      : '/class/lecturecourse'
                  "
                  >수업</nuxt-link
                >
              </li>
              <li class="nav-item">
                <NuxtLink
                  :class="{
                    'nav-link': true,
                    active: $route.matched[0].path === '/management',
                  }"
                  :to="
                    $route.matched[0].path === '/management'
                      ? ''
                      : '/management/operation/teachermanagement'
                  "
                  >관리</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink
                  :class="{
                    'nav-link': true,
                    active: $route.matched[0].path === '/world',
                  }"
                  :to="
                    $route.matched[0].path === '/world'
                      ? ''
                      : '/world/reference'
                  "
                  >월드</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="function_area">
            <button
              type="button"
              class="btn btn-refresh"
              @click="ReloadPage"
            ></button>

            <!-- [개발참조]버튼 활성 : class="active" 추가 -->
            <nuxt-link
              to="/"
              class="btn btn_nav_myhome"
              :class="{
                active: $route.fullPath === '/',
              }"
              >마이홈</nuxt-link
            >
            <nuxt-link
              to="/mypage"
              class="btn btn_nav_user"
              :class="{
                active: $route.fullPath !== '/',
              }"
              >홍길동 선생님</nuxt-link
            >
            <!-- [개발참조]신규알림표시 : class="newlabel" 추가 -->
            <button class="btn btn_alert icons_bell_off newlabel"></button>
          </div>
        </div>
      </div>
      <div
        v-show="$route.matched[0].path === '/classPreperation'"
        class="nav_sub"
      >
        <ul class="nav nav_dapth02">
          <li class="nav-item">
            <!-- [개발참조]버튼 활성 : class="nav-link에 active" 추가 -->
            <NuxtLink
              to="/classPreperation/reference"
              :class="{
                'nav-link': true,
                active: $route.fullPath === '/classPreperation/reference',
              }"
              href="#"
              >자료실</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="{
                'nav-link': true,
                active: $route.fullPath === '/classPreperation/lesson',
              }"
              to="/classPreperation/lesson"
              >레슨</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="{
                'nav-link': true,
                active: $route.fullPath === '/classPreperation/curriculum',
              }"
              to="/classPreperation/curriculum"
              >커리큘럼</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="{
                'nav-link': true,
                active: $route.fullPath === '/classPreperation/lecture',
              }"
              to="/classPreperation/lecture"
              >강좌</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div v-show="$route.matched[0].path === '/class'" class="nav_sub">
        <ul class="nav nav_dapth02">
          <li class="nav-item">
            <!-- [개발참조]버튼 활성 : class="nav-link에 active" 추가 -->
            <NuxtLink
              to="/class/lecturecourse"
              :class="{
                'nav-link': true,
                active: $route.fullPath.includes('/class/lecturecourse'),
              }"
              href="#"
              >강의 코스</NuxtLink
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">학습함</a>
          </li>
        </ul>
      </div>

      <div v-show="$route.matched[0].path === '/management'" class="nav_sub">
        <ul class="nav nav_dapth02">
          <li class="nav-item">
            <!-- [개발참조]버튼 활성 : class="nav-link에 active" 추가 -->
            <NuxtLink
              :class="{
                'nav-link': true,
                active: $route.fullPath.includes('/management/operation'),
              }"
              to="/management/operation/teachermanagement"
              >운영관리</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="{
                'nav-link': true,
                active: $route.fullPath.includes('/management/attendance'),
              }"
              to="/management/attendance/student"
              >출결</NuxtLink
            >
            <!-- <a class="nav-link" href="#">출결</a> -->
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="{
                'nav-link': true,
                active: $route.fullPath.includes('/management/franchise'),
              }"
              to="/management/franchise/list"
              >프랜차이즈 가입관리</NuxtLink
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">결제관리</a>
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="{
                'nav-link': true,
                active: $route.fullPath.includes('/management/notice'),
              }"
              to="/management/notice/all"
              >공지사항</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div v-show="$route.matched[0].path === '/world'" class="nav_sub">
        <ul class="nav nav_dapth02">
          <li class="nav-item">
            <!-- [개발참조]버튼 활성 : class="nav-link에 active" 추가 -->
            <NuxtLink
              :class="{
                'nav-link': true,
                active: $route.fullPath.includes('/world/reference'),
              }"
              to="/world/reference"
              >건물 자료실</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="{
                'nav-link': true,
                active: $route.fullPath === '/world/package',
              }"
              to="/world/package"
              >건물 패키지</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="{
                'nav-link': true,
                active: $route.fullPath === '/world/buildingSet',
              }"
              to="/world/buildingSet"
              >건물SET</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="{
                'nav-link': true,
                active: $route.fullPath === '/world/building',
              }"
              to="/world/building"
              >빌딩</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="{
                'nav-link': true,
                active: $route.fullPath === '/world/guidanceTeacher',
              }"
              to="/world/guidanceTeacher"
              >지도교사</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>

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
          <div class="title_area">마이홈</div>
          <div class="mobile_navbtn_area">
            <button id="mobilemuBtn" class="btn icons_mobilemu"></button>
          </div>
        </div>
      </div>
    </div>
    <!-- 알림창 -->
    <!-- goTop 버튼 -->
    <button class="btn btn_gotop"></button>
  </div>
</template>

<script>
export default {
  name: 'EduHeader',
  methods: {
    ReloadPage() {
      location.reload()
    },
  },
}
</script>

<style></style>
