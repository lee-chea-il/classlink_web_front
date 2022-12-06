<template>
  <div id="header" class="header">
    <!-- 탭, PC 버전 상단메뉴 ≥992px and up -->
    <div class="nav_web">
      <div class="nav_top_wrap">
        <div class="nav_top">
          <MainLogo to="/franchise" />
          <MainNavItem :mainNavList="mainNavList" />
          <MyItem myHome="" myPage="" />
        </div>
      </div>

      <FranchiseNavList :navList="navList" />
    </div>

    <!-- 작은탬, 모바일 상단메뉴 < 991.98-->
    <NavMobile />
    <!-- 알림창 -->
    <!-- goTop 버튼 -->
    <button class="btn btn_gotop"></button>
  </div>
</template>

<script>
import FranchiseNavList from './FranchiseNavList.vue'
import MainNavItem from './MainNavItem.vue'
import MainLogo from '~/components/common/MainLogo.vue'
import MyItem from '~/components/common/MyItem.vue'
import NavMobile from '~/components/common/NavMobile.vue'
export default {
  name: 'FranchiseHeader',
  components: { MainLogo, FranchiseNavList, MyItem, NavMobile, MainNavItem },
  data() {
    return {
      mainNavList: [
        {
          id: 1,
          name: '수업',
          active: '/class',
          to: '/franchise/class/reference',
        },
        { id: 2, name: '관리', active: 'none', to: '' },
        {
          id: 3,
          name: '월드',
          active: '/world',
          to: '/franchise/world/reference',
        },
      ],
      navList: [
        {
          isShow: '/class',
          children: [
            {
              name: '자료실',
              to: '/franchise/class/reference',
              active: '/franchise/class/reference',
            },
            {
              name: '레슨',
              to: '/franchise/class/lesson',
              active: '/franchise/class/lesson',
            },
            {
              name: '커리큘럼',
              to: '/franchise/class/curriculum',
              active: '/franchise/class/curriculum',
            },
          ],
        },
        {
          isShow: '/management',
          children: [
            {
              name: '가맹관리',
              to: '',
              active: '',
            },
            {
              name: '결제관리',
              to: '',
              active: '',
            },
            {
              name: '공지사항',
              to: '',
              active: '',
            },
          ],
        },
        {
          isShow: '/world',
          children: [
            {
              name: '자료실',
              to: '/franchise/world/reference',
              active: '/franchise/world/reference',
            },
            {
              name: '패키지',
              to: '/franchise/world/package',
              active: '/franchise/world/package',
            },
            {
              name: '월드SET',
              to: '/franchise/world/worldSet',
              active: '/franchise/world/worldSet',
            },
            {
              name: '빌딩',
              to: '/franchise/world/building',
              active: '/franchise/world/building',
            },
            {
              name: '지도교사',
              to: '/franchise/world/guidanceTeacher',
              active: '/franchise/world/guidanceTeacher',
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

<style></style>
