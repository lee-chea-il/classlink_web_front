<template>
  <div
    id="modalLectureRegi03"
    class="modal fade modal_ac_manage_lec time_selection"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">강좌 만들기</h5>
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
          <!-- [개발참조] 학생관리의 출결팝업 캘린더와 동일 함 -->
          <div class="modal_moreattendance">
            <!-- 달력 전체 영역 -->
            <div class="calendar_type01">
              <div class="search_section">
                <div class="left_area">
                  <div class="title">수업시간 선택</div>
                  <div class="move_calendar">
                    <i class="icons_arrow_square_l"></i>
                    <span class="date_info">2022년 8월</span>
                    <i class="icons_arrow_square_r"></i>
                  </div>
                </div>
                <div class="right_area">
                  <div class="search_area">
                    <div class="section">
                      <div
                        class="custom-control custom-checkbox form-inline mr-3"
                      >
                        <input
                          id="checkbox01"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label class="custom-control-label" for="checkbox01"
                          >반복</label
                        >
                      </div>
                      <div class="calendar_date_bluebox">
                        2022.08.07 - 2022.08.13
                      </div>
                      <i class="icons_calendar_off"></i>
                    </div>
                    <div class="section weeks">
                      <span class="week">일</span>
                      <span class="week active">월</span>
                      <span class="week">화</span>
                      <span class="week">수</span>
                      <span class="week">목</span>
                      <span class="week">금</span>
                      <span class="week">토</span>
                    </div>
                    <div class="section times">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control form-inline time"
                        value="09:30"
                      />
                      -
                      <input
                        type="text"
                        placeholder=""
                        class="form-control form-inline time"
                        value="11:30"
                      />
                    </div>
                  </div>
                  <div class="btn_area">
                    <button class="btn btn_crud_default">
                      시간표에<br />추가
                    </button>
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
                        <button class="btn icons_minus_circle_alph"></button>
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
                        <button class="btn icons_minus_circle_alph"></button>
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
                        <button class="btn icons_minus_circle_alph"></button>
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
            </div>
            <!-- /.달력 전체 영역 -->
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn_crud_default"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#modalLectureRegi02"
          >
            이전
          </button>
          <button
            class="btn btn_crud_point"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#modalLectureRegi04"
          >커리큘럼 배정
            다음
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SelectScheduleModal'
}
</script>

<style></style>
