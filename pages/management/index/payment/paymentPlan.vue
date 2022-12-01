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
              <button class="btn btn_crud_default" onclick="history.back();">
                돌아가기
              </button>
            </div>
          </div>
          <!-- 검색 영역 -->

          <div class="rateplan_section">
            <div class="mu_area">
              <ul>
                <li class="active">
                  <a href="(완)결제관리-요금제.html" class="btn"
                    >중·소형 교육기관</a
                  >
                </li>
                <li>
                  <a href="(완)결제관리-요금제02.html" class="btn"
                    >대형 교육기관</a
                  >
                </li>
                <li>
                  <a href="(완)결제관리-요금제03.html" class="btn">MOU</a>
                </li>
              </ul>
            </div>
            <div class="plan_area">
              <div class="plan_card color01">
                <div class="plan_box">
                  <div class="plan_tit">
                    <div class="name">Free</div>
                    <div class="price">무료(1개월)</div>
                  </div>
                  <!-- [개발참조] 하단 추가 스크립트의 '상세더보기' 동작구현은 실제 개발 후 제거 -->
                  <div class="btn_area">
                    <button class="btn btn_crud_default btn_signup">
                      가입
                    </button>
                    <button id="btnPlanExpand01" class="btn PlanExpand">
                      <i class="icons_plus_circle_on"></i> 더보기
                    </button>
                    <button
                      id="btnPlanFolding01"
                      class="btn btnPlanFolding"
                      style="display: none"
                    >
                      <i class="icons_minus_circle_off"></i> 접기
                    </button>
                  </div>
                  <div
                    id="planDetails01"
                    class="detail_area"
                    style="display: none"
                  >
                    <div class="detail_list">
                      <div class="detail_title">
                        <i class="icons_check_circle"></i> 클래스 링크
                      </div>
                      <div class="detail_info">
                        <span>최대학생수 20명</span>
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
                        <span>자료실 5G</span>
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
              <div class="plan_card color02">
                <div class="plan_box">
                  <div class="plan_tit">
                    <div class="name">Light</div>
                    <div class="price">₩400,000/월</div>
                  </div>
                  <div class="btn_area">
                    <button class="btn btn_crud_default btn_signup">
                      지금 구독
                    </button>
                    <button id="btnPlanExpand02" class="btn PlanExpand">
                      <i class="icons_plus_circle_on"></i> 더보기
                    </button>
                    <button
                      id="btnPlanFolding02"
                      class="btn btnPlanFolding"
                      style="display: none"
                    >
                      <i class="icons_minus_circle_off"></i> 접기
                    </button>
                  </div>
                  <div
                    id="planDetails02"
                    class="detail_area"
                    style="display: none"
                  >
                    <div class="detail_list">
                      <div class="detail_title">
                        <i class="icons_check_circle"></i> 클래스 링크
                      </div>
                      <div class="detail_info">
                        <span>최대학생수 40명</span>
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
                        <span>자료실 50G</span>
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
              <div class="plan_card color03">
                <div class="popular">가장 인기많은 상품</div>
                <div class="plan_box">
                  <div class="plan_tit">
                    <div class="name">Basic</div>
                    <div class="price">₩700,000/월</div>
                  </div>
                  <div class="btn_area">
                    <button class="btn btn_crud_default btn_signup">
                      지금 구독
                    </button>
                    <button id="btnPlanExpand03" class="btn PlanExpand">
                      <i class="icons_plus_circle_on"></i> 더보기
                    </button>
                    <button
                      id="btnPlanFolding03"
                      class="btn btnPlanFolding"
                      style="display: none"
                    >
                      <i class="icons_minus_circle_off"></i> 접기
                    </button>
                  </div>
                  <div
                    id="planDetails03"
                    class="detail_area"
                    style="display: none"
                  >
                    <div class="detail_list">
                      <div class="detail_title">
                        <i class="icons_check_circle"></i> 클래스 링크
                      </div>
                      <div class="detail_info">
                        <span>최대학생수 70명</span>
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
                        <span>자료실 70G</span>
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
}
</script>
<style scoped></style>
