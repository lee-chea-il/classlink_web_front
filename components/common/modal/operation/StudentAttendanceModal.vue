<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalMoreAttendance"
      class="modal double modal-mask modal-index"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">출결</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal_moreattendance">
              <div class="name">
                {{ studentInfo.mem_name }} <span>1/10</span>
              </div>
              <!-- 달력 전체 영역 -->
              <div class="calendar_type01">
                <div class="search_section">
                  <div class="move_calendar">
                    <i
                      class="icons_arrow_square_l cursor"
                      @click="$emit('click-prevWeek')"
                    ></i>
                    <span class="date_info">2022년 8월 1주</span>
                    <i
                      class="icons_arrow_square_r cursor"
                      @click="$emit('click-nextWeek')"
                    ></i>
                  </div>
                  <div class="search_area">
                    <div class="dropdown form-inline mr-2">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {{
                          isLectureTitleIdx === 0
                            ? '전체'
                            : studentInfo.lectureInfo[isLectureTitleIdx - 1]
                                .lectureTitle
                        }}
                      </button>
                      <div class="dropdown-menu">
                        <a
                          class="dropdown-item"
                          href="#"
                          @click="$emit('click-lecture', -1)"
                          >전체</a
                        >
                        <a
                          v-for="(item, idx) in studentInfo.lectureInfo"
                          :key="idx"
                          class="dropdown-item"
                          href="#"
                          @click="$emit('click-lecture', idx)"
                          >{{ item.lectureTitle }}</a
                        >
                      </div>
                    </div>
                    <div class="calendar_date_bluebox">
                      {{ dateRange.start }} - {{ dateRange.end }}
                    </div>
                    <i
                      class="icons_calendar_off mr-2"
                      @click="$emit('click-calendar')"
                    ></i>
                    <div class="input-group input-search form-inline">
                      <input
                        type="text"
                        placeholder="반/학생 이름 검색"
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
                <div class="calendar_section">
                  <!-- 일주일 기준(일~토)달력 -->
                  <div class="calendar_area">
                    <!-- 왼쪽 시간표시 부분 -->
                    <div class="tit_time">
                      <div class="tit_week">
                        <span>시간<br />요일</span>
                      </div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour">
                        <div class="time">
                          09<span class="sm_hidden">:00</span>
                        </div>
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour">
                        <div class="time">
                          12<span class="sm_hidden">:00</span>
                        </div>
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour">
                        <div class="time">
                          15<span class="sm_hidden">:00</span>
                        </div>
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour">
                        <div class="time">
                          18<span class="sm_hidden">:00</span>
                        </div>
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour">
                        <div class="time">
                          21<span class="sm_hidden">:00</span>
                        </div>
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.왼쪽 시간표시 부분 -->
                    <!-- 일요일 -->
                    <div class="weeks sun">
                      <!-- [개발참조] : 날짜는 0포함 숫자로 표기 01,02,03,04 ... -->
                      <div class="tit_week">일<br />07</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.일요일 -->
                    <!-- 월요일 -->
                    <div class="weeks mon">
                      <div class="tit_week">월<br />08</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour">
                        <!-- 
												[개발참조] : height 1px = 1분
												0. 기획문서 상에서는 30분 단위에 포함시키고 있음.
												1. 커리큘럼의 시작시간은 30분단위 블럭의 해당 시간 박스
													시작 시간을 정확하게 분단위로 하고자 할경우 style="top:10px" 와 같이 추가 시킨다.
												2. 정확한 시간을 표시하고 자 할경우 : 박스의 height는 분단위와 같음 (예:입장~퇴장 130분 = height:130px) 
											-->
                        <!-- 커리큘럼 박스 예 : 오프라인 출결 컬러 01-->
                        <div
                          class="curriculum_box color_light1"
                          style="height: 120px"
                        >
                          <div class="academe">청담어학원</div>
                          <div class="enter">
                            <label>등원</label>
                            <span>AM 01:00:20</span>
                          </div>
                          <div class="leave">
                            <label>하원</label>
                            <span>PM 12:00:50</span>
                          </div>
                        </div>
                        <!-- /.커리큘럼 박스 -->
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.월요일 -->
                    <!-- 화요일 -->
                    <div class="weeks tue">
                      <div class="tit_week">화<br />09</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour">
                        <!-- 커리큘럼 박스 예: 정보없음, 컬러02-->
                        <div
                          class="curriculum_box color_emerald"
                          style="height: 60px"
                        >
                          <div class="academe">수학 수1 심화</div>
                          <div class="enter">
                            <label>정보없음</label>
                          </div>
                        </div>
                        <!-- /.커리큘럼 박스 -->
                      </div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.화요일 -->
                    <!-- 수요일 -->
                    <div class="weeks wed">
                      <div class="tit_week">수<br />10</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour">
                        <!-- 커리큘럼 박스 예: 온라인출결 입장 퇴장, 컬러03-->
                        <div
                          class="curriculum_box color_light2"
                          style="height: 90px"
                        >
                          <div class="academe">청담어학원</div>
                          <div class="enter">
                            <label>입장</label>
                            <span>PM 12:30:20</span>
                          </div>
                          <div class="leave">
                            <label>퇴장</label>
                            <span>PM 02:00:50</span>
                          </div>
                        </div>
                        <!-- /.커리큘럼 박스 -->
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.수요일 -->
                    <!-- 목요일 -->
                    <div class="weeks thu">
                      <div class="tit_week">목<br />11</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.목요일 -->
                    <!-- 금요일 -->
                    <div class="weeks fri">
                      <div class="tit_week">금<br />12</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.금요일 -->
                    <!-- 토요일 -->
                    <div class="weeks sat">
                      <div class="tit_week">토<br />13</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.토요일 -->
                  </div>
                  <!-- /.일주일 기준(일~토)달력 -->
                </div>
                <!-- 달력의 이전다음 버튼 
								[개발참조] : 출결의 이전 다음 버튼 클릭 시 리스팅된 이전 다음 학생의 커리큘럼
								[개발참조] : 선택날짜범위 밖으로의 이전 다음 버튼 클리 시 toast 노출
							-->
                <div class="data_prev">
                  <i class="btn icons_arrow_circle_l_off"></i>
                </div>
                <div class="data_next">
                  <i class="btn icons_arrow_circle_r_off"></i>
                </div>
              </div>
              <!-- /.달력 전체 영역 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: 'StudentAttendanceModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    studentInfo: {
      type: Object,
      default: () => {},
    },
    dateRange: {
      type: Object,
      default: () => {},
    },
    isLectureTitleIdx: {
      type: Number,
      default: 0,
    },
    isMonthRange: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.modal-index {
  z-index: 999;
}
.cursor {
  cursor: pointer;
}
</style>
