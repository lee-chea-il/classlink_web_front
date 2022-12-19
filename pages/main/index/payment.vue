<template>
  <!-- <NavBox /> -->
  <div class="rateplan_section">
    <BannerBox />

    <NavIitem :planList="planList" @active-nav="activeNav" />

    <!-- <div class="mu_area_mb">
      <i class="icons_arrow_circle_l_off"
        ><a href="(완)main_요금안내03.html" class="btn"></a
      ></i>
      <span class="mu_title">중·소형 교육기관</span>
      <i class="icons_arrow_circle_r_off"
        ><a href="(완)main_요금안내02.html" class="btn"></a
      ></i>
    </div> -->

    <MobileNav
      :title="setPlanItem(planList).title"
      :nav="setPlanItem(planList)"
      @active-nav="activeMobileNav"
    />
    <div class="plan_area">
      <div
        v-for="(item, idx) in setPlanItem(planList).children"
        :key="idx"
        class="plan_card"
        :class="[item.isMou ? 'service' : '', item.class]"
      >
        <div v-if="item.isBest" class="popular">가장 인기많은 상품</div>
        <div class="plan_box">
          <div class="plan_tit">
            <div class="name">{{ item.name }}</div>

            <div class="price">{{ item.price }}</div>
          </div>
          <!-- [개발참조] 하단 추가 스크립트의 '상세더보기' 동작구현은 실제 개발 후 제거 -->
          <div class="btn_area">
            <div v-show="item.isMou" class="service">MOU 서비스</div>
            <button
              class="btn btn_crud_default btn_signup"
              :class="{ btn_area: item.isMou }"
            >
              {{ !item.isMou ? '가입' : '신청하기' }}
            </button>
            <button
              v-show="!item.isMou"
              id="btnPlanExpand01"
              class="btn PlanExpand"
              @click="toggleFlag(item)"
            >
              <i
                :class="
                  !item.isShow
                    ? 'icons_plus_circle_on'
                    : 'icons_minus_circle_off'
                "
              ></i>
              {{ !item.isShow ? '더보기' : '접기' }}
            </button>
          </div>
          <div
            id="planDetails01"
            class="detail_area"
            :style="isDisplay(item.isShow)"
          >
            <div class="detail_list">
              <div class="detail_title">
                <i class="icons_check_circle"></i> 클래스 링크
              </div>
              <div class="detail_info">
                <span>최대학생수 {{ item.maxStudent }}명</span>
              </div>
              <ul class="list">
                <li>스쿨월드</li>
                <li>클래스월드</li>
                <li>스터디카페</li>
                <li>본관</li>
                <li>갤러리</li>
                <li>메타수업준비</li>
                <li>선생님 추가 불가</li>
                <li>화면공유</li>
                <li>음성채팅</li>
                <li>화상채팅</li>
                <li>전칠판기능</li>
                <li>판서저장</li>
              </ul>
            </div>

            <div class="detail_list">
              <div class="detail_title">
                <i class="icons_check_circle"></i> 클래스 보드
              </div>
              <div class="detail_info">
                <span>자료실 {{ item.data }}</span>
              </div>
              <ul class="list">
                <li>공지사항</li>
                <li>과제함</li>
                <li>노트함</li>
                <li>필기함</li>
                <li>강의계획서</li>
                <li>출결</li>
              </ul>
            </div>

            <div class="detail_list">
              <div class="detail_title">
                <i class="icons_check_circle"></i> 프랜차이즈
              </div>
              <ul class="list">
                <li>가맹사업</li>
                <li>자료공유</li>
                <li>홍보관</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerBox from '~/components/classLinkMain/payment/BannerBox.vue'
import MobileNav from '~/components/classLinkMain/payment/MobileNav.vue'
import NavIitem from '~/components/classLinkMain/payment/NavIitem.vue'
export default {
  name: 'PaymentInfo',
  components: { BannerBox, NavIitem, MobileNav },
  data() {
    return {
      planList: [
        {
          id: 1,
          title: '중·소형 교육기관',
          isActive: true,
          children: [
            {
              class: 'color01',
              name: 'Free',
              price: '무료(1개월)',
              isBest: false,
              isShow: false,
              maxStudent: 20,
              data: '5G',
              link: '',
            },
            {
              class: 'color02',
              name: 'Light',
              price: '₩400,000/월',
              isBest: false,
              isShow: false,
              maxStudent: 40,
              data: '50G',
              link: '',
            },
            {
              class: 'color03',
              name: 'Basic',
              price: '₩700,000/월',
              isBest: true,
              isShow: false,
              maxStudent: 70,
              data: '70G',
              link: '',
            },
          ],
        },
        {
          id: 2,
          title: '대형 교육기관',
          isActive: false,
          children: [
            {
              class: 'color02',
              isShow: false,
              name: 'Standard',
              price: '₩1,000,000/월',
              isBest: false,
              maxStudent: 200,
              data: '100G',
              link: '',
            },
            {
              class: 'color03',
              isShow: false,
              name: 'Premium',
              price: '₩3,000,000/월',
              isBest: true,
              maxStudent: 300,
              data: '200G',
              link: '',
            },
            {
              class: 'color04',
              isShow: false,
              name: 'Enterprise',
              price: '₩5,000,000/월',
              isBest: false,
              maxStudent: 1000,
              data: '300G',
              link: '',
            },
          ],
        },
        {
          id: 3,
          title: 'MOU',
          isActive: false,
          children: [
            {
              isMou: true,
              class: 'color03',
              name: '영업문의',
              isShow: false,
              link: '',
            },
          ],
        },
      ],
    }
  },
  methods: {
    activeNav(data) {
      for (const x of this.planList) {
        x.isActive = false
      }
      data.isActive = true
    },
    activeMobileNav(data, direction) {
      const id = Number(data.id)
      for (const x of this.planList) {
        x.isActive = false
      }
      if (direction === 'plus') {
        if (id === 3) return (this.planList[0].isActive = true)
        else return (this.planList[id].isActive = true)
      } else if (id === 1) return (this.planList[2].isActive = true)
      else return (this.planList[id - 2].isActive = true)
    },
    isDisplay(flag) {
      if (flag) return { display: 'block' }
      else return { display: 'none' }
    },
    toggleFlag(flag) {
      return (flag.isShow = !flag.isShow)
    },
    setPlanItem(arr) {
      return arr.filter((data) => data.isActive)[0]
    },
  },
}
</script>

<style scoped></style>
