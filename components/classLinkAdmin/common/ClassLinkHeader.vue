<template>
  <div id="header" class="header">
    <!-- 탭, PC 버전 상단메뉴 ≥992px and up -->
    <div class="nav_web">
      <div class="nav_top_wrap">
        <div class="nav_top">
          <MainLogo to="/classLink" />
          <MainNavItem :mainNavList="mainNavList" />
          <MyItem myHome="" myPage="" />
        </div>
      </div>

      <ClassLinkNavList :navList="navList" />
    </div>

    <!-- 작은탬, 모바일 상단메뉴 < 991.98-->
    <NavMobile />
    <!-- 알림창 -->
    <!-- goTop 버튼 -->
    <button class="btn btn_gotop"></button>
  </div>
</template>

<script>
import MainNavItem from './MainNavItem.vue'
import ClassLinkNavList from './ClassLinkNavList.vue'
import NavMobile from '~/components/common/NavMobile.vue'
import MyItem from '~/components/common/MyItem.vue'
import MainLogo from '~/components/common/MainLogo.vue'

export default {
  name: 'ClassLinkHeader',
  components: { MainNavItem, NavMobile, MyItem, MainLogo, ClassLinkNavList },
  data() {
    return {
      mainNavList: [
        {
          id: 1,
          name: '관리',
          active: '/classLink/management',
          to: '/classLink/management/fcUsageStatus',
        },
        {
          id: 2,
          name: '건물',
          active: '/classLink/building',
          to: '/classLink/building/franchise',
        },
      ],
      navList: [
        {
          isShow: '/classLink/management',
          children: [
            {
              name: 'FC이용현황',
              to: '/classLink/management/fcUsageStatus',
              active: '/classLink/management/fcUsageStatus',
            },
            {
              name: '교육기관이용현황',
              to: '/classLink/management/educationUsageStatus',
              active: '/classLink/management/educationUsageStatus',
            },
            {
              name: '결제관리',
              to: '/classLink/management/payment',
              active: '/classLink/management/payment',
            },
            {
              name: '공지사항',
              to: '/classLink/management/notice',
              active: '/classLink/management/notice',
            },
          ],
        },
        {
          isShow: '/building',
          children: [
            {
              name: '프랜차이즈',
              to: '/classLink/building/franchise',
              active: '/classLink/building/franchise',
            },
            // {
            //   name: '지역축제',
            //   to: '/classLink/building/localFestival',
            //   active: '/classLink/building/localFestival',
            // },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
