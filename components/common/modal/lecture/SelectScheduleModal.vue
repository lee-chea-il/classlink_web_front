<template>
  <div
    id="modalLectureRegi03"
    class="modal fade modal_ac_manage_lec time_selection"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="background_close" />
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <Header :title="modalTitle" />

        <div class="modal-body">
          <!-- [개발참조] 학생관리의 출결팝업 캘린더와 동일 함 -->
          <div class="modal_moreattendance">
            <!-- 달력 전체 영역 -->
            <div class="calendar_type01">
              <div class="search_section">
                <div class="left_area">
                  <div class="title">수업시간 선택</div>
                  <div class="move_calendar">
                    <i
                      class="icons_arrow_square_l"
                      @click="$emit('change-week', 'min')"
                    ></i>
                    <span class="date_info">
                      <!-- 2022년 8월 1주 -->
                      {{
                        toWeekArray[0].replace(
                          /(\d+)(\-)(\d+)(\-)(\d+)/,
                          '$1년 $3월'
                        )
                      }}&ensp;{{ toWeekIdx }}주차
                    </span>
                    <i
                      class="icons_arrow_square_r"
                      @click="$emit('change-week', 'plus')"
                    ></i>
                  </div>
                </div>
                <div class="right_area">
                  <div class="search_area">
                    <div class="section">
                      <div
                        class="custom-control custom-checkbox form-inline mr-3"
                      >
                        <input
                          id="isRepeat"
                          name="isRepeat"
                          type="checkbox"
                          class="custom-control-input"
                          :checked="scheduleItem.isRepeat"
                          @input="$emit('change-time', $event)"
                        />
                        <label class="custom-control-label" for="isRepeat"
                          >반복</label
                        >
                      </div>
                      <div class="calendar_date_bluebox">
                        {{ scheduleItem.startDay }} - {{ scheduleItem.endDay }}
                      </div>
                      <i
                        class="icons_calendar_off"
                        @click="$emit('open-calendar')"
                      ></i>
                    </div>

                    <WeekDaySelectField
                      @select-day="$emit('select-day', $event)"
                    />

                    <div class="section times">
                      <!-- <input /> -->
                      <TimeSelectBox
                        name="startTime"
                        :value="scheduleItem.startTime"
                        :timeList="timeList"
                        :targetDate="scheduleItem.endTime"
                        @change-time="$emit('change-time', $event)"
                      />
                      -
                      <TimeSelectBox
                        name="endTime"
                        :value="scheduleItem.endTime"
                        :timeList="timeList"
                        :targetDate="scheduleItem.startTime"
                        @change-time="$emit('change-time', $event)"
                      />
                    </div>
                  </div>
                  <div class="btn_area">
                    <button
                      class="btn btn_crud_default"
                      @click="$emit('add-schedule', scheduleItem)"
                    >
                      시간표에<br />추가
                    </button>
                  </div>
                </div>
              </div>

              <div class="calendar_section">
                <!-- 일주일 기준(일~토)달력 -->
                <div class="calendar_area">
                  <!-- 왼쪽 시간표시 부분 -->

                  <ScheduleTable
                    :hourData="hourData"
                    :scheduleItem="scheduleItem"
                    :scheduleWeekList="scheduleWeekList"
                    :toWeekArray="toWeekArray"
                    @set-time="$emit('set-time', $event)"
                    @delete-schedule="setDeleteSchedule"
                  />

                  <!-- /.왼쪽 시간표시 부분 -->
                </div>
                <!-- /.일주일 기준(일~토)달력 -->
              </div>
            </div>
            <!-- /.달력 전체 영역 -->
          </div>
        </div>
        <CustomModalBtn
          prevTarget="#modalLectureRegi02"
          nextTarget="#modalLectureRegi04"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WeekDaySelectField from '~/components/lecture/schedule/WeekDaySelectField.vue'
import ScheduleTable from '~/components/lecture/schedule/ScheduleTable.vue'
import TimeSelectBox from '~/components/lecture/custom/TimeSelectBox.vue'
import CustomModalBtn from '~/components/lecture/custom/CustomModalBtn.vue'
import Header from '~/components/common/ModalHeader.vue'
export default {
  name: 'SelectScheduleModal',
  components: {
    ScheduleTable,
    WeekDaySelectField,
    TimeSelectBox,
    CustomModalBtn,
    Header,
  },
  props: {
    modalTitle: { type: String, default: '' },
    toWeekIdx: { type: Number, default: 0 },
    toWeekArray: { type: Array, default: () => [] },
    hourData: { type: Array, default: () => [] },
    scheduleItem: { type: Object, default: () => {} },
    timeList: { type: Array, default: () => [] },
    scheduleWeekList: { type: Object, default: () => {} },
  },
  methods: {
    setDeleteSchedule(e, idx) {
      this.$emit('delete-schedule', e, idx)
    },
  },
}
</script>

<style scoped>
.modal_ac_manage_lec.time_selection
  .calendar_type01
  .search_section
  .right_area
  .times
  select.time {
  width: 140px;
}

.background_close {
  background: none;
}
</style>
