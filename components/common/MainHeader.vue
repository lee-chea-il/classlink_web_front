<template>
  <div id="header" class="header">
    <!-- 탭, PC 버전 상단메뉴 ≥992px and up -->
    <div class="nav_web">
      <div class="nav_top_wrap">
        <div class="nav_top">
          <MainLogo to="/" />
          <EducationMainNav :mainNavList="mainNavList" />
          <MyItem myHome="/" myPage="/mypage" @reload="ReloadPage" />
        </div>
      </div>

      <EducationNavList :navList="navList" />
    </div>

    <!-- 작은탬, 모바일 상단메뉴 < 991.98-->
    <NavMobile />
    <!-- 알림창 -->
    <!-- goTop 버튼 -->
    <button class="btn btn_gotop"></button>
  </div>
</template>

<script>
import EducationMainNav from './EducationMainNav.vue'
import EducationNavList from './EducationNavList.vue'
import MainLogo from './MainLogo.vue'
import MyItem from './MyItem.vue'
import NavMobile from './NavMobile.vue'

export default {
  name: 'EduHeader',
  components: {
    MainLogo,
    EducationNavList,
    NavMobile,
    MyItem,
    EducationMainNav,
  },
  data() {
    return {
      mainNavList: [
        {
          id: 1,
          name: '수업준비',
          active: '/classPreperation',
          path: '/classPreperation/reference',
        },
        {
          id: 2,
          name: '수업',
          active: '/class',
          path: '/class/lecturecourse',
        },
        {
          id: 3,
          name: '관리',
          active: '/management',
          path: '/management/operation/teachermanagement',
        },
        {
          id: 4,
          name: '월드',
          active: '/world',
          path: '/world/reference',
        },
      ],
      navList: [
        {
          id: 1,
          isShow: '/classPreperation',
          children: [
            {
              name: '자료실',
              to: '/classPreperation/reference',
              active: '/classPreperation/reference',
            },
            {
              name: '레슨',
              to: '/classPreperation/lesson',
              active: '/classPreperation/lesson',
            },
            {
              name: '커리큘럼',
              to: '/classPreperation/curriculum',
              active: '/classPreperation/curriculum',
            },
            {
              name: '강좌',
              to: '/classPreperation/lecture',
              active: '/classPreperation/lecture',
            },
          ],
        },
        {
          id: 2,
          isShow: '/class',
          children: [
            {
              name: '강의 코스',
              to: '/class/lecturecourse',
              active: '/class/lecturecourse',
            },
            {
              name: '학습함',
              to: '/class/learningBox/question',
              active: '/class/learningBox',
            },
          ],
        },
        {
          id: 3,
          isShow: '/management',
          children: [
            {
              name: '운영관리',
              to: '/management/operation/teachermanagement',
              active: '/management/operation',
            },
            {
              name: '출결',
              to: '/management/attendance/student',
              active: '/management/attendance',
            },
            {
              name: '프랜차이즈 가입관리',
              to: '/management/franchise/list',
              active: '/management/franchise',
            },
            {
              name: '결제관리',
              to: '/management/payment',
              active: '/management/payment',
            },
            {
              name: '공지사항',
              to: '/management/notice/all',
              active: '/management/notice',
            },
          ],
        },
        {
          id: 4,
          isShow: '/world',
          children: [
            {
              name: '자료실',
              to: '/world/reference',
              active: '/world/reference',
            },
            {
              name: '패키지',
              to: '/world/package',
              active: '/world/package',
            },
            {
              name: '월드SET',
              to: '/world/worldSet',
              active: '/world/worldSet',
            },
            {
              name: '빌딩',
              to: '/world/building',
              active: '/world/building',
            },
            {
              name: '지도교사',
              to: '/world/guidanceTeacher',
              active: '/world/guidanceTeacher',
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
