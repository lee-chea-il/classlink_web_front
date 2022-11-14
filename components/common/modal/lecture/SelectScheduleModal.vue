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
                    <span class="date_info">2022년 8월 1주</span>
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

                  <ScheduleTable :hourData="hourData" />

                  <!-- /.왼쪽 시간표시 부분 -->
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
          >
            다음
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleTable from './schedule/ScheduleTable.vue'
export default {
  name: 'SelectScheduleModal',
  components: { ScheduleTable },
  props: {
    hourData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
