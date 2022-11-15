<template>
  <div
    id="modalNoticeConfirm"
    class="modal fade"
    :class="`modalNoticeConfirm${id}`"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">컨펌 체크</h5>
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
          <div class="title_area">
            <span class="confirm_title">게시물을 조회한 회원</span>
            <span class="confirm_sub">
              컨펌 체크 <span>125</span> &nbsp; | 조회 <span>222</span>
            </span>
            <button
              id="btnOpenfilter"
              class="btn btn_filter"
              :class="{ active: confirmFilter }"
              @click="$emit('onClickConfirm', id)"
            >
              필터
            </button>
            <!-- [개발참조] : 필터 해제 버튼 클릭시 키워드 일괄 삭제 초기화 -->
            <button class="btn btn_crud_default">필터 해제</button>
          </div>
          <!-- [개발참조] [개발참조] 컨펌체크 팝업 필터열기, 해제 스크립트 -->
          <div v-if="confirmFilter" id="filterBox" class="box01">
            <div class="row">
              <div class="keyword_area">
                <div class="keyword_area_01">
                  <span class="keyword01">
                    <span class="keyword01-1">내가 한 질문</span
                    ><span class="x"></span>
                  </span>
                  <span class="keyword01">
                    <span class="keyword01-1">내가 한 질문</span
                    ><span class="x"></span>
                  </span>
                  <span class="keyword01">
                    <span class="keyword01-1">내가 한 질문</span
                    ><span class="x"></span>
                  </span>
                  <span class="keyword01">
                    <span class="keyword01-1">내가 한 질문</span
                    ><span class="x"></span>
                  </span>
                  <span class="keyword01">
                    <span class="keyword01-1">내가 한 질문</span
                    ><span class="x"></span>
                  </span>
                </div>
              </div>
              <div class="right_area">
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    id="radio01"
                    type="radio"
                    name="radio00"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="radio01">반</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    id="radio02"
                    type="radio"
                    name="radio00"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="radio02">학생</label>
                </div>
                <div class="input-group input-search form-inline">
                  <input
                    type="text"
                    placeholder="키워드 검색"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <button class="btn icons_search_off" type="button"></button>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="$route.fullPath === '/management/notice/all'"
              class="filter_wrap"
            >
              <div class="filter_section">
                <div class="title_area">구분</div>
                <div class="filter_area">
                  <div class="filter">
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
                  </div>

                  <div class="filter">
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
                    <span>선생님</span>
                  </div>

                  <div class="filter">
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
                    <span>학생</span>
                  </div>
                </div>
              </div>
              <div class="filter_section">
                <div class="title_area">반</div>
                <div class="filter_area">
                  <div class="filter">
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
                  </div>

                  <div v-for="(item, idx) in 5" :key="idx" class="filter">
                    <div
                      class="custom-control custom-checkbox form-inline checked"
                    >
                      <input
                        :id="`box02chk${idx}`"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        :for="`box02chk${idx}`"
                      ></label>
                    </div>
                    <span>심화A반</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-else-if="$route.fullPath === '/management/notice/class'"
              class="filter_wrap"
            >
              <div class="filter_section">
                <div class="title_area">반</div>
                <div class="filter_area">
                  <div class="filter">
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
                  </div>

                  <div v-for="(item, idx) in 7" :key="idx" class="filter">
                    <div
                      class="custom-control custom-checkbox form-inline checked"
                    >
                      <input
                        :id="`box02chk${idx}`"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        :for="`box02chk${idx}`"
                      ></label>
                    </div>
                    <span>심화A반</span>
                  </div>
                </div>
              </div>

              <div class="filter_section">
                <div class="title_area">학생</div>
                <div class="filter_area">
                  <div class="filter">
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
                  </div>

                  <div v-for="(item, idx) in 8" :key="idx" class="filter">
                    <div
                      class="custom-control custom-checkbox form-inline checked"
                    >
                      <input
                        :id="`box03chk${idx}`"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        :for="`box03chk${idx}`"
                      ></label>
                    </div>
                    <span>홍길동</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="filter_wrap">
              <div class="filter_section">
                <div class="title_area">학생</div>
                <div class="filter_area">
                  <div class="filter">
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
                  </div>

                  <div v-for="(item, idx) in 15" :key="idx" class="filter">
                    <div
                      class="custom-control custom-checkbox form-inline checked"
                    >
                      <input
                        :id="`box03chk${idx}`"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        :for="`box03chk${idx}`"
                      ></label>
                    </div>
                    <span>홍길동</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="search_result">
            <table class="table table-borderless">
              <!-- <colgroup>
								<col width="15%">
								<col width="15%">
								<col width="15%">
								<col width="15%">
								<col width="20%">
								<col width="20%">
							</colgroup> -->
              <thead>
                <tr>
                  <th>구분</th>
                  <th>회원</th>
                  <th>반</th>
                  <th>조회수</th>
                  <th>최종조회일시</th>
                  <th>컨펌체크일시</th>
                </tr>
              </thead>
            </table>
            <div class="tbl_overflow">
              <table class="table table-borderless">
                <!-- 	<colgroup>
									<col width="15%">
									<col width="15%">
									<col width="15%">
									<col width="15%">
									<col width="20%">
									<col width="20%">
								</colgroup> -->
                <tbody>
                  <tr v-for="(item, idx) in student" :key="idx">
                    <td class="table01">선생님</td>
                    <td class="table02">{{ item.name }}</td>
                    <td class="table03">{{ item.class }}</td>
                    <td class="table04">4</td>
                    <td class="table05">
                      <span>2022.01.01</span> <span>00:00:00</span>
                    </td>
                    <td><span>2022.01.01</span> <span>00:00:00</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- <div class="modal-footer">
          <button class="btn btn_crud_point">등록</button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowNoticeConfirmCheck',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    student: {
      type: Array,
      default: () => {},
    },
    confirmFilter: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
