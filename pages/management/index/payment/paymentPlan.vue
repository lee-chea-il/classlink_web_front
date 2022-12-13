<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <NavBox />

      <div class="tab-content depth03 ac_manage_pay">
        <div class="tab-pane active">
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="right_area">
              <button class="btn btn_crud_default" @click="goBackPage">
                돌아가기
              </button>
            </div>
          </div>
          <div class="rateplan_section">
            <div class="mu_area">
              <ul>
                <li :class="isTabFlag === 0 ? 'active' : ''">
                  <a class="btn" @click="onClickTab0">중·소형 교육기관</a>
                </li>
                <li :class="isTabFlag === 1 ? 'active' : ''">
                  <a class="btn" @click="onClickTab1">대형 교육기관</a>
                </li>
                <li :class="isTabFlag === 2 ? 'active' : ''">
                  <a class="btn" @click="onClickTab2">MOU</a>
                </li>
              </ul>
            </div>
            <div v-show="isTabFlag === 0" class="plan_area">
              <div
                v-for="(item, idx) in paymentTab0List"
                :key="idx"
                class="plan_card color01"
                :class="`color0${item.id + 1}`"
              >
                <div
                  v-show="item.id === 2"
                  :class="item.id === 2 ? 'popular' : ''"
                >
                  가장 인기많은 상품
                </div>
                <div class="plan_box">
                  <div class="plan_tit">
                    <div class="name">{{ item.title }}</div>
                    <div class="price">
                      {{
                        item.id === 0
                          ? item.price
                          : '₩' + priceToString(item.price) + '/월'
                      }}
                    </div>
                  </div>
                  <!-- [개발참조] 하단 추가 스크립트의 '상세더보기' 동작구현은 실제 개발 후 제거 -->
                  <div class="btn_area">
                    <button
                      class="btn btn_crud_default btn_signup"
                      @click="goRecentPlanPage"
                    >
                      {{ item.id === 0 ? '가입' : '지금 구독' }}
                    </button>
                    <button
                      id="btnPlanExpand01"
                      class="btn PlanExpand"
                      @click="onClickExpandBtn(idx)"
                    >
                      <i
                        class="icons_plus_circle_on"
                        :class="
                          expandIdx.includes(idx)
                            ? 'icons_minus_circle_off'
                            : 'icons_plus_circle_on'
                        "
                      ></i>
                      {{ expandIdx.includes(idx) ? '접기' : '더보기' }}
                    </button>
                  </div>
                  <div
                    id="planDetails01"
                    class="detail_area"
                    :class="expandIdx.includes(idx) ? 'expand_show' : ''"
                    style="display: none"
                  >
                    <div class="detail_list">
                      <div class="detail_title">
                        <i class="icons_check_circle"></i> 클래스 링크
                      </div>
                      <div class="detail_info">
                        <span>{{ item.classLink[0] }}</span>
                      </div>
                      <ul class="list">
                        <li
                          v-for="(child_item, child_idx) in paymentTab0List[
                            idx
                          ].classLink.slice(1)"
                          :key="child_idx"
                        >
                          {{ child_item }}
                        </li>
                      </ul>
                    </div>
                    <div class="detail_list">
                      <div class="detail_title">
                        <i class="icons_check_circle"></i> 클래스 보드
                      </div>
                      <div class="detail_info">
                        <span>{{ item.classBoard[0] }}</span>
                      </div>
                      <ul class="list">
                        <li
                          v-for="(child_item, child_idx) in paymentTab0List[
                            idx
                          ].classBoard.slice(1)"
                          :key="child_idx"
                        >
                          {{ child_item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="isTabFlag === 1" class="plan_area">
              <div
                v-for="(item, idx) in paymentTab1List"
                :key="idx"
                class="plan_card"
                :class="`color0${item.id - 1}`"
              >
                <div
                  v-show="item.id === 4"
                  :class="item.id === 4 ? 'popular' : ''"
                >
                  가장 인기많은 상품
                </div>
                <div class="plan_box">
                  <div class="plan_tit">
                    <div class="name">{{ item.title }}</div>
                    <div class="price">
                      {{ '₩' + priceToString(item.price) + '/월' }}
                    </div>
                  </div>
                  <div class="btn_area">
                    <button
                      class="btn btn_crud_default btn_signup"
                      @click="goRecentPlanPage"
                    >
                      지금 구독
                    </button>
                    <button
                      id="btnPlanExpand01"
                      class="btn PlanExpand"
                      @click="onClickExpandBtn(idx)"
                    >
                      <i
                        class="icons_plus_circle_on"
                        :class="
                          expandIdx.includes(idx)
                            ? 'icons_minus_circle_off'
                            : 'icons_plus_circle_on'
                        "
                      ></i>
                      {{ expandIdx.includes(idx) ? '접기' : '더보기' }}
                    </button>
                  </div>
                  <div
                    id="planDetails01"
                    class="detail_area"
                    :class="expandIdx.includes(idx) ? 'expand_show' : ''"
                    style="display: none"
                  >
                    <div class="detail_list">
                      <div class="detail_title">
                        <i class="icons_check_circle"></i> 클래스 링크
                      </div>
                      <div class="detail_info">
                        <span>{{ item.classLink[0] }}</span>
                      </div>
                      <ul class="list">
                        <li
                          v-for="(child_item, child_idx) in paymentTab1List[
                            idx
                          ].classLink.slice(1)"
                          :key="child_idx"
                        >
                          {{ child_item }}
                        </li>
                      </ul>
                    </div>

                    <div class="detail_list">
                      <div class="detail_title">
                        <i class="icons_check_circle"></i> 클래스 보드
                      </div>
                      <div class="detail_info">
                        <span>{{ item.classBoard[0] }}</span>
                      </div>
                      <ul class="list">
                        <li
                          v-for="(child_item, child_idx) in paymentTab1List[
                            idx
                          ].classBoard.slice(1)"
                          :key="child_idx"
                        >
                          {{ child_item }}
                        </li>
                      </ul>
                    </div>

                    <div class="detail_list">
                      <div class="detail_title">
                        <i class="icons_check_circle"></i> 프랜차이즈
                      </div>
                      <ul class="list">
                        <li
                          v-for="(child_item, child_idx) in paymentTab1List[idx]
                            .franchise"
                          :key="child_idx"
                        >
                          {{ child_item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="isTabFlag === 2" class="plan_area">
              <div class="plan_card service">
                <div class="plan_box">
                  <div class="plan_tit">
                    <div class="name">영업문의</div>
                  </div>
                  <div class="service">MOU 서비스</div>
                  <div class="btn_area">
                    <button class="btn btn_crud_default btn_signup">
                      신청하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBox from '@/components/payment/NavBox.vue'
export default {
  name: 'PaymentPlan',
  components: {
    NavBox,
  },
  data() {
    return {
      isTabFlag: 0,
      paymentTab0List: [
        {
          id: 0,
          title: 'Free',
          price: '무료(1개월)',
          classLink: [
            '최대학생수 20명',
            '스쿨월드',
            '클래스월드',
            '스터디카페',
            '본관',
            '갤러리',
            '메타수업준비',
            '선생님 추가 불가',
            '화면공유',
            '음성채팅',
            '화상채팅',
            '전칠판기능',
            '판서저장',
          ],
          classBoard: [
            '자료실 5G',
            '공지사항',
            '과제함',
            '노트함',
            '필기함',
            '강의계획서',
            '출결',
          ],
          franchise: [],
          description: [
            '최대 학생 수 20명',
            '자료실 용량 5GB',
            '선생님 추가 불가',
            '프랜차이즈 확장 불가',
          ],
        },
        {
          id: 1,
          title: 'Light',
          price: '400000',
          classLink: [
            '최대학생수 40명',
            '스쿨월드',
            '클래스월드',
            '스터디카페',
            '본관',
            '갤러리',
            '메타수업준비',
            '선생님 추가',
            '화면공유',
            '음성채팅',
            '화상채팅',
            '전칠판기능',
            '판서저장',
          ],
          classBoard: [
            '자료실 50G',
            '공지사항',
            '과제함',
            '노트함',
            '필기함',
            '강의계획서',
            '출결',
          ],
          franchise: [],
          description: [
            '최대 학생 수 40명',
            '자료실 용량 50GB',
            '선생님 추가 가능',
            '프랜차이즈 확장 불가',
          ],
        },
        {
          id: 2,
          title: 'Basic',
          price: '700000',
          classLink: [
            '최대학생수 70명',
            '스쿨월드',
            '클래스월드',
            '스터디카페',
            '본관',
            '갤러리',
            '메타수업준비',
            '선생님 추가',
            '화면공유',
            '음성채팅',
            '화상채팅',
            '전칠판기능',
            '판서저장',
          ],
          classBoard: [
            '자료실 70G',
            '공지사항',
            '과제함',
            '노트함',
            '필기함',
            '강의계획서',
            '출결',
          ],
          franchise: [],
          description: [
            '최대 학생 수 70명',
            '자료실 용량 70GB',
            '선생님 추가 가능',
            '프랜차이즈 확장 불가',
          ],
        },
      ],
      paymentTab1List: [
        {
          id: 3,
          title: 'Standard',
          price: '1000000',
          classLink: [
            '최대학생수 200명',
            '스쿨월드',
            '클래스월드',
            '스터디카페',
            '본관',
            '갤러리',
            '메타수업준비',
            '선생님 추가',
            '화면공유',
            '음성채팅',
            '화상채팅',
            '전칠판기능',
            '판서저장',
          ],
          classBoard: [
            '자료실 100G',
            '공지사항',
            '과제함',
            '노트함',
            '필기함',
            '강의계획서',
            '출결',
          ],
          franchise: ['가맹사업', '자료공유', '홍보관'],
          description: [
            '최대 학생 수 200명',
            '자료실 용량 100GB',
            '선생님 추가 가능',
            '프랜차이즈 확장 가능',
          ],
        },
        {
          id: 4,
          title: 'Premium',
          price: '3000000',
          classLink: [
            '최대학생수 300명',
            '스쿨월드',
            '클래스월드',
            '스터디카페',
            '본관',
            '갤러리',
            '메타수업준비',
            '선생님 추가',
            '화면공유',
            '음성채팅',
            '화상채팅',
            '전칠판기능',
            '판서저장',
          ],
          classBoard: [
            '자료실 200G',
            '공지사항',
            '과제함',
            '노트함',
            '필기함',
            '강의계획서',
            '출결',
          ],
          franchise: ['가맹사업', '자료공유', '홍보관'],
          description: [
            '최대 학생 수 300명',
            '자료실 용량 200GB',
            '선생님 추가 가능',
            '프랜차이즈 확장 가능',
          ],
        },
        {
          id: 5,
          title: 'Enterprise',
          price: '5000000',
          classLink: [
            '최대학생수 1,000명',
            '스쿨월드',
            '클래스월드',
            '스터디카페',
            '본관',
            '갤러리',
            '메타수업준비',
            '선생님 추가',
            '화면공유',
            '음성채팅',
            '화상채팅',
            '전칠판기능',
            '판서저장',
          ],
          classBoard: [
            '자료실 300G',
            '공지사항',
            '과제함',
            '노트함',
            '필기함',
            '강의계획서',
            '출결',
          ],

          franchise: ['가맹사업', '자료공유', '홍보관'],
          description: [
            '최대 학생 수 1,000명',
            '자료실 용량 300GB',
            '선생님 추가 가능',
            '프랜차이즈 확장 가능',
          ],
        },
      ],
      // 더보기
      expandIdx: [],
    }
  },
  methods: {
    // 4depth 탭 이동
    onClickTab0() {
      this.isTabFlag = 0
      this.expandIdx = []
    },
    onClickTab1() {
      this.isTabFlag = 1
      this.expandIdx = []
    },
    onClickTab2() {
      this.isTabFlag = 2
      this.expandIdx = []
    },
    // 돌아가기
    goBackPage() {
      this.$router.push('/management/payment')
    },
    // 가격 포맷
    priceToString(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    // 지금 구독
    goRecentPlanPage() {
      this.$router.push('/management/payment/editpaymentplan')
    },
    // 더보기 버튼
    onClickExpandBtn(idx) {
      if (this.expandIdx.includes(idx)) {
        const number = this.expandIdx.indexOf(idx)
        this.expandIdx.splice(number, 1)
      } else {
        this.expandIdx.push(idx)
      }
    },
  },
}
</script>
<style scoped>
.expand_show {
  display: block !important;
}
</style>
