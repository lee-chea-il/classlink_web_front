<template>
  <Transition name="modal">
    <div
      v-if="show"
      id="modalClassNoticeTarget"
      class="modal double modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">공지 대상자 설정</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="$emit('close')"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="title_area">
              <span class="confirm_title">게시물을 조회한 회원</span>
              <span class="confirm_sub">
                컨펌 체크 <span>125</span> &nbsp; | 조회 <span>222</span>
              </span>
              <!-- <button id="btnOpenfilter" class="btn btn_filter">필터</button> -->
              <!-- [개발참조] : 필터 해제 버튼 클릭시 키워드 일괄 삭제 초기화 -->
              <button class="btn btn_crud_default">필터 해제</button>
            </div>
            <!-- [개발참조] [개발참조] 컨펌체크 팝업 필터열기, 해제 스크립트 -->
            <div id="filterBox" class="box01">
              <div class="row">
                <div class="keyword_area">
                  <div class="keyword_area_01">
                    <span class="keyword01">
                      <span class="keyword01-1">심화A반</span
                      ><span class="x"></span>
                    </span>
                    <span class="keyword01">
                      <span class="keyword01-1">홍길동</span
                      ><span class="x"></span>
                    </span>
                    <span class="keyword01">
                      <span class="keyword01-1">심화A반</span
                      ><span class="x"></span>
                    </span>
                    <span class="keyword01">
                      <span class="keyword01-1">홍길동</span
                      ><span class="x"></span>
                    </span>
                    <span class="keyword01">
                      <span class="keyword01-1">심화A반</span
                      ><span class="x"></span>
                    </span>
                    <span class="keyword01">
                      <span class="keyword01-1">홍길동</span
                      ><span class="x"></span>
                    </span>
                  </div>
                </div>
                <div class="right_area">
                  <div
                    class="custom-control custom-radio custom-control-inline"
                  >
                    <input
                      id="radio01"
                      type="radio"
                      name="radio00"
                      class="custom-control-input"
                      checked
                    />
                    <label class="custom-control-label" for="radio01">반</label>
                  </div>
                  <div
                    class="custom-control custom-radio custom-control-inline"
                  >
                    <input
                      id="radio02"
                      type="radio"
                      name="radio00"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="radio02"
                      >학생</label
                    >
                  </div>
                  <div class="input-group input-search form-inline">
                    <input
                      type="text"
                      placeholder="키워드 검색"
                      class="form-control"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="filter_wrap">
                <div class="filter_section">
                  <div class="title_area">반</div>
                  <ul class="filter_area">
                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk01"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk01"
                        ></label>
                      </div>
                      <span>전체</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk03"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk03"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk04"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk04"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk05"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk05"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk06"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk06"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>심화A반</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="filter_wrap">
                <div class="filter_section">
                  <div class="title_area">학생</div>
                  <ul class="filter_area">
                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk01"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk01"
                        ></label>
                      </div>
                      <span>전체</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍길동</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍미미</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍길동</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍미미</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍길동</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍미미</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍길동</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍미미</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍길동</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍미미</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍길동</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍미미</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍길동</span>
                    </li>

                    <li class="filter">
                      <div
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="box01chk02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="box01chk02"
                        ></label>
                      </div>
                      <span>홍미미</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <NuxtLink
              v-if="$route.fullPath !== '/management/notice/regist/classroom'"
              to="/management/notice/regist/classroom"
              class="btn btn_crud_point"
              >확인</NuxtLink
            >
            <a v-else class="btn btn_crud_point" @click="$emit('close')"
              >확인</a
            >
            <button class="btn btn_crud_default" @click="$emit('close')">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ClassNoticeTargetModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
