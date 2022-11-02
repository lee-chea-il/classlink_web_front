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
              <li
                class="nav-item"
                @click="$store.commit('common/setActiveNavIdx', 1)"
              >
                <a
                  class="nav-link"
                  :class="{ active: $store.state.common.activeNavIdx === 1 }"
                  href="#"
                  >수업준비</a
                >
              </li>
              <li
                class="nav-item"
                @click="$store.commit('common/setActiveNavIdx', 2)"
              >
                <a
                  class="nav-link"
                  :class="{ active: $store.state.common.activeNavIdx === 2 }"
                  href="#"
                  >수업</a
                >
              </li>
              <li
                class="nav-item"
                @click="$store.commit('common/setActiveNavIdx', 3)"
              >
                <a
                  class="nav-link"
                  :class="{ active: $store.state.common.activeNavIdx === 3 }"
                  href="#"
                  >관리</a
                >
              </li>
              <li
                class="nav-item"
                @click="$store.commit('common/setActiveNavIdx', 4)"
              >
                <a
                  class="nav-link"
                  :class="{ active: $store.state.common.activeNavIdx === 4 }"
                  href="#"
                  >건물</a
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
                active: $route.fullPath === '/mypage',
              }"
              >홍길동 선생님</nuxt-link
            >
            <!-- [개발참조]신규알림표시 : class="newlabel" 추가 -->
            <button class="btn btn_alert icons_bell_off newlabel"></button>
          </div>
        </div>
      </div>
      <div v-show="$store.state.common.activeNavIdx === 1" class="nav_sub">
        <ul class="nav nav_dapth02">
          <li class="nav-item">
            <!-- [개발참조]버튼 활성 : class="nav-link에 active" 추가 -->
            <NuxtLink
              to="/classPreperation/reference"
              class="nav-link"
              :class="{
                active: $route.fullPath === '/classPreperation/reference',
              }"
              href="#"
              >자료실</NuxtLink
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">레슨</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">커리큘럼</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">강좌</a>
          </li>
        </ul>
      </div>

      <div v-show="$store.state.common.activeNavIdx === 2" class="nav_sub">
        <ul class="nav nav_dapth02">
          <li class="nav-item">
            <!-- [개발참조]버튼 활성 : class="nav-link에 active" 추가 -->
            <a class="nav-link" href="#">강의코스</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">학습함</a>
          </li>
        </ul>
      </div>

      <div v-show="$store.state.common.activeNavIdx === 3" class="nav_sub">
        <ul class="nav nav_dapth02">
          <li class="nav-item">
            <!-- [개발참조]버튼 활성 : class="nav-link에 active" 추가 -->
            <a class="nav-link" href="#">운영관리</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">출결</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">프랜차이즈 가입관리</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">결제관리</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">공지사항</a>
          </li>
        </ul>
      </div>

      <div v-show="$store.state.common.activeNavIdx === 4" class="nav_sub">
        <ul class="nav nav_dapth02">
          <li class="nav-item">
            <!-- [개발참조]버튼 활성 : class="nav-link에 active" 추가 -->
            <a class="nav-link" href="#">건물 자료실</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">건물 패키지</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">건물SET</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">빌딩</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">지도교사</a>
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
    <div class="alert_cover"></div>
    <div id="alertPops" class="alert_pops">
      <div class="title">
        <span class="tit">전체 알림</span>
        <span class="del_area">
          <button class="btn">읽은 알림 삭제</button>
          <button class="btn">전체 삭제</button>
          <button class="btn close_alert icons_close"></button>
        </span>
      </div>
      <div class="cnts">
        <!-- [개발참조]: 알림이 없을때 -->
        <!-- <div class="alert_none">
            새로운 알림이 없습니다.
          </div> -->
        <!-- 알림기본박스 -->
        <div class="alert_box">
          <div class="tit_area">
            <label class="type01">질문함</label>
            <span class="tit"
              >알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span
            >
          </div>
          <div class="info_area">
            <div class="teacher">
              <span class="cat">영어</span>
              <span class="cat">영어리딩심화글이넘치네요</span>
              <span class="cat">심화A반글이넘치네요</span
              ><span class="cat">홍길동 선생님</span>
            </div>
            <div class="date">어제 오전 9:00</div>
          </div>
          <button class="btn btn_del icons_x_circle_off" type="button"></button>
        </div>
        <!-- 알림기본박스 -->
        <div class="alert_box">
          <div class="tit_area">
            <label class="type02">과제함</label>
            <span class="tit"
              >알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span
            >
          </div>
          <div class="info_area">
            <div class="teacher">
              <span class="cat">영어</span>
              <span class="cat">영어리딩심화글이넘치네요</span>
              <span class="cat">심화A반글이넘치네요</span
              ><span class="cat">홍길동 선생님</span>
            </div>
            <div class="date">어제 오전 9:00</div>
          </div>
          <button class="btn btn_del icons_x_circle_off" type="button"></button>
        </div>
        <!-- 알림기본박스 -->
        <div class="alert_box">
          <div class="tit_area">
            <label class="type03">노트함</label>
            <span class="tit"
              >알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span
            >
          </div>
          <div class="info_area">
            <div class="teacher">
              <span class="cat">영어</span>
              <span class="cat">영어리딩심화글이넘치네요</span>
              <span class="cat">심화A반글이넘치네요</span
              ><span class="cat">홍길동 선생님</span>
            </div>
            <div class="date">어제 오전 9:00</div>
          </div>
          <button class="btn btn_del icons_x_circle_off" type="button"></button>
        </div>
      </div>
      <a
        href="javascript:;"
        class="btn_area close_alert"
        data-toggle="modal"
        data-target="#modalAlertclasslink"
      >
        <i class="icons_plus_circle"></i> 알림 더보기
      </a>
    </div>
    <!-- 클래스링크 알림 모달 팝업 -->
    <div
      id="modalAlertclasslink"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="modalAlertclasslink"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="modalAlertclasslink" class="modal-title">
              클래스링크 알림
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="alert_cl_wrap">
              <!-- 알림1일단위 -->
              <div class="alert_cl">
                <div class="title">
                  <i class="icons_clock"></i>
                  <span>01월01일(월)</span>
                </div>
                <div class="cnts">
                  <!-- [개발참조]: 알림기본박스는 전체알림의 기본박스와 소스 동일함-->
                  <!-- 알림기본박스 -->
                  <div class="alert_box">
                    <div class="tit_area">
                      <label class="type01">질문함</label>
                      <span class="tit"
                        >알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span
                      >
                    </div>
                    <div class="info_area">
                      <div class="teacher">
                        <span class="cat">영어</span>
                        <span class="cat">영어리딩심화글이넘치네요</span>
                        <span class="cat">심화A반글이넘치네요</span
                        ><span class="cat">홍길동 선생님</span>
                      </div>
                      <div class="date">어제 오전 9:00</div>
                    </div>
                    <button
                      class="btn btn_del icons_x_circle_off"
                      type="button"
                    ></button>
                  </div>
                  <!-- 알림기본박스 -->
                  <div class="alert_box">
                    <div class="tit_area">
                      <label class="type02">과제함</label>
                      <span class="tit"
                        >알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span
                      >
                    </div>
                    <div class="info_area">
                      <div class="teacher">
                        <span class="cat">영어</span>
                        <span class="cat">영어리딩심화글이넘치네요</span>
                        <span class="cat">심화A반글이넘치네요</span
                        ><span class="cat">홍길동 선생님</span>
                      </div>
                      <div class="date">어제 오전 9:00</div>
                    </div>
                    <button
                      class="btn btn_del icons_x_circle_off"
                      type="button"
                    ></button>
                  </div>
                  <!-- 알림기본박스 -->
                  <div class="alert_box">
                    <div class="tit_area">
                      <label class="type03">노트함</label>
                      <span class="tit"
                        >알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span
                      >
                    </div>
                    <div class="info_area">
                      <div class="teacher">
                        <span class="cat">영어</span>
                        <span class="cat">영어리딩심화글이넘치네요</span>
                        <span class="cat">심화A반글이넘치네요</span
                        ><span class="cat">홍길동 선생님</span>
                      </div>
                      <div class="date">어제 오전 9:00</div>
                    </div>
                    <button
                      class="btn btn_del icons_x_circle_off"
                      type="button"
                    ></button>
                  </div>
                </div>
              </div>
              <!-- 알림1일단위 -->
              <div class="alert_cl">
                <div class="title">
                  <i class="icons_clock"></i>
                  <span>01월01일(월)</span>
                </div>
                <div class="cnts">
                  <!-- [개발참조]: 알림기본박스는 전체알림의 기본박스와 소스 동일함-->
                  <!-- 알림기본박스 -->
                  <div class="alert_box">
                    <div class="tit_area">
                      <label class="type01">질문함</label>
                      <span class="tit"
                        >알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span
                      >
                    </div>
                    <div class="info_area">
                      <div class="teacher">
                        <span class="cat">영어</span>
                        <span class="cat">영어리딩심화글이넘치네요</span>
                        <span class="cat">심화A반글이넘치네요</span
                        ><span class="cat">홍길동 선생님</span>
                      </div>
                      <div class="date">어제 오전 9:00</div>
                    </div>
                    <button
                      class="btn btn_del icons_x_circle_off"
                      type="button"
                    ></button>
                  </div>
                  <!-- 알림기본박스 -->
                  <div class="alert_box">
                    <div class="tit_area">
                      <label class="type02">과제함</label>
                      <span class="tit"
                        >알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span
                      >
                    </div>
                    <div class="info_area">
                      <div class="teacher">
                        <span class="cat">영어</span>
                        <span class="cat">영어리딩심화글이넘치네요</span>
                        <span class="cat">심화A반글이넘치네요</span
                        ><span class="cat">홍길동 선생님</span>
                      </div>
                      <div class="date">어제 오전 9:00</div>
                    </div>
                    <button
                      class="btn btn_del icons_x_circle_off"
                      type="button"
                    ></button>
                  </div>
                  <!-- 알림기본박스 -->
                  <div class="alert_box">
                    <div class="tit_area">
                      <label class="type03">노트함</label>
                      <span class="tit"
                        >알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span
                      >
                    </div>
                    <div class="info_area">
                      <div class="teacher">
                        <span class="cat">영어</span>
                        <span class="cat">영어리딩심화글이넘치네요</span>
                        <span class="cat">심화A반글이넘치네요</span
                        ><span class="cat">홍길동 선생님</span>
                      </div>
                      <div class="date">어제 오전 9:00</div>
                    </div>
                    <button
                      class="btn btn_del icons_x_circle_off"
                      type="button"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_default">읽은 알림 삭제</button>
            <button class="btn btn_crud_default">전체 삭제</button>
          </div>
        </div>
      </div>
    </div>
    <!-- goTop 버튼 -->
    <button class="btn btn_gotop"></button>
  </div>
</template>

<script>
export default {
  name: 'EducationHeader',
  methods: {
    ReloadPage() {
      location.reload()
    },
  },
}
</script>

<style></style>
