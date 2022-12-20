<template>
  <div id="header" class="header">
    <!-- 탭, PC 버전 상단메뉴 ≥992px and up -->
    <div class="nav_web">
      <div class="nav_top_wrap">
        <div class="nav_top">
          <MainLogo to="/main/classLink" />
          <MainNav :mainNavList="mainNavList" />
          <MyItem myHome="/" myPage="/mypage" @reload="ReloadPage" />
        </div>
      </div>

      <NavList :navList="navList" />
    </div>

    <!-- 작은탬, 모바일 상단메뉴 < 991.98-->
    <NavMobile />
    <!-- 알림창 -->
    <!-- goTop 버튼 -->
    <button class="btn btn_gotop"></button>
  </div>
</template>

<script>
import NavList from './NavList.vue'
import MainNav from './MainNav.vue'
import MyItem from './MyItem.vue'
import MainLogo from '~/components/common/MainLogo.vue'
import NavMobile from '~/components/common/NavMobile.vue'

export default {
  name: 'MainHeader',
  components: {
    MainLogo,
    NavMobile,
    MyItem,
    MainNav,
    NavList,
  },
  data() {
    return {
      mainNavList: [
        {
          id: 1,
          name: '클래스링크',
          active: '/main/classLink',
          path: '/main/classLink',
        },
        {
          id: 2,
          name: '요금안내',
          active: '/main/payment',
          path: '/main/payment',
        },
        {
          id: 3,
          name: '사용가이드',
          active: '/main/guide',
          path: '/main/guide',
        },
        {
          id: 4,
          name: '프로모션',
          active: '/main/promotion',
          path: '/main/promotion/event',
        },
        {
          id: 4,
          name: '고객센터',
          active: '/main/service',
          path: '/main/service/notice',
        },
      ],
      navList: [
        {
          id: 1,
          isShow: '/main/classLink',
          isMovePage: true,
          children: [
            {
              name: '스쿨월드',
              to: '#',
              active: '/main/classLink',
            },
            {
              name: '클래스월드',
              to: '#classworld',
              active: '/main/classLink#classworld',
            },
            {
              name: '특별활동',
              to: '#extraact',
              active: '/main/classLink#extraact',
            },
          ],
        },
        {
          id: 2,
          isShow: '/main/payment',
          // children: [],
        },
        {
          id: 3,
          isShow: '/main/guide',
          children: [
            {
              name: '이용방법',
              to: '/main/guide',
              active: '/main/guide',
            },
            {
              name: 'PC버전다운로드',
              to: '/main/guide/download',
              active: '/main/guide/download',
            },
          ],
        },
        {
          id: 4,
          isShow: '/promotion',
          children: [
            {
              name: '이벤트',
              to: '/main/promotion/event',
              active: '/main/promotion/event',
            },
            {
              name: '이용후기',
              to: '/main/promotion/review',
              active: '/main/promotion/review',
            },
          ],
        },
        {
          id: 5,
          isShow: '/main/service',
          children: [
            {
              name: '공지사항',
              to: '/main/service/notice',
              active: '/main/service/notice',
            },
            {
              name: '이용약관',
              to: '/main/service/terms',
              active: '/main/service/terms',
            },
            {
              name: '개인정보 취급방침',
              to: '/main/service/privacy',
              active: '/main/service/privacy',
            },
            {
              name: '자주묻는 질문 문의',
              to: '/main/service/qna',
              active: '/main/service/qna',
            },
          ],
        },
      ],
    }
  },
  methods: {
    ReloadPage() {
      location.reload()
    },
  },
}
</script>

<style scoped>
.nav_web {
  position: fixed !important;
  z-index: 1000;
  width: 100%;
  background: white;
}
</style>
