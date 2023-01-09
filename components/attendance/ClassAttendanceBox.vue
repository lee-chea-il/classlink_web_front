<template>
  <div class="tab-pane active">
    <!-- 컨트롤 버튼 영역 -->
    <div class="search_section">
      <div class="right_area">
        <button class="btn btn_crud_default">내역 다운로드</button>
        <button
          class="btn btn_crud_point"
          @click="$emit('open-batchAttendance')"
        >
          일괄출결
        </button>
      </div>
    </div>
    <!-- /.컨트롤 버튼 영역 -->

    <!-- 3단 분류 컨텐츠 -->
    <div class="divide_section">
      <!-- 영역 -->
      <div class="divide_area first">
        <!-- 반 학생 -->
        <div class="class_section">
          <div class="move_section">
            <div class="list_section selected">
              <div class="input-group input-search">
                <input
                  type="text"
                  placeholder="반, 학생 이름 검색"
                  class="form-control"
                />
                <div class="input-group-append">
                  <button class="btn icons_search_off" type="button"></button>
                </div>
              </div>
              <div class="list_area">
                <div id="myTabContent" class="tab-content">
                  <!-- 학년 탭 내용 -->
                  <div
                    id="grade"
                    class="tab-pane fade show active"
                    role="tabpanel"
                    aria-labelledby="grade-tab"
                  >
                    <ul>
                      <li v-for="(item, idx) in subList" :key="idx">
                        <div class="list">
                          <i
                            id="show_sublist2"
                            class="btn"
                            :class="
                              open_subList === idx
                                ? 'icons_arrow_dn'
                                : 'icons_arrow_r'
                            "
                            @click="$emit('open-sublist', idx)"
                          ></i>
                          <span class="text">
                            {{ item.class }}
                            <span class="ss_txt"
                              >{{ item.student.length }}명</span
                            >
                          </span>
                        </div>
                        <!-- 학년에 해당하는 학생 리스트 -->
                        <div
                          v-if="open_subList === idx"
                          id="list_sub2"
                          class="list_sub"
                        >
                          <ul>
                            <li>
                              <span class="text">전체</span>
                              <button
                                class="btn btn_crud_default btn_chceck"
                                @click="$emit('click-showClass', item)"
                              >
                                출결
                              </button>
                            </li>
                            <li v-for="(items, id) in item.student" :key="id">
                              <span class="text">
                                {{ items.name }}
                              </span>
                              <button
                                class="btn btn_crud_default"
                                :class="
                                  items.state === '출석'
                                    ? 'btn_attend'
                                    : {
                                        btn_inout:
                                          items.state === '등원' ||
                                          items.state === '하원',
                                      }
                                "
                              >
                                {{ items.state }}
                              </button>
                            </li>
                          </ul>
                        </div>
                        <!-- /.학년에 해당하는 학생 리스트 -->
                      </li>
                    </ul>
                  </div>
                  <!-- /.학년 탭 내용 -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 반 학생/. -->
      </div>
      <!-- /.영역 -->
      <!-- 영역 -->
      <div class="divide_area second">
        <div class="ac_manage">
          <div class="calendar">
            <div class="info_area">
              <div class="name">
                {{ selectedClass.class }}
                <span class="ss_txt">
                  {{ selectedClass.student.length }}명
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="calendar_type03">
          <!-- 캘린더 영역 -->
          <DatePicker
            :value="attributes"
            trim-weeks
            is-expanded
            class="custom-calendar"
            color="blue"
            :masks="{ title: 'YYYY MMM' }"
            :attributes="attributes"
            @dayclick="$emit('day-click', $event)"
          />
          <!-- /.캘린더 영역-->
        </div>
      </div>
      <!-- /.영역 -->
      <div class="divide_area third">
        <div class="search_result">
          <table class="table table-borderless">
            <!-- <colgroup>
										<col width="20%">
										<col width="30%">
										<col width="30%">
										<col width="20%">
									</colgroup> -->
            <thead>
              <tr>
                <th class="th01">이름</th>
                <th class="th02">등원</th>
                <th>하원</th>
                <th class="th03">삭제</th>
              </tr>
            </thead>
          </table>
          <div class="tbl_overflow">
            <table class="table table-borderless">
              <!-- 	<colgroup>
											<col width="20%">
											<col width="30%">
											<col width="30%">
											<col width="20%">
										</colgroup> -->
              <tbody>
                <tr v-for="(item, idx) in selectedDateTaskList" :key="idx">
                  <td>{{ item.name }}</td>
                  <td>오전 11:00:00</td>
                  <td>오전 11:00:00</td>
                  <td class="td01">
                    <button class="btn icons_x_circle_off"></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- /.3단 분류 컨텐츠 -->
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
  name: 'ClassAttendanceBox',
  components: {
    DatePicker,
  },
  props: {
    subList: {
      type: Array,
      default: () => [],
    },
    open_subList: {
      type: Number,
      default: null,
    },
    selectedClass: {
      type: Object,
      default: () => {},
    },
    attributes: {
      type: Array,
      default: () => [],
    },
    selectedDateTaskList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #f9f9fc;
  --day-width: 90px;
  --day-height: 150px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #f9f9fc;
  --blue-600: #7391fa;
  --teal-600: #e6e7e8;
  border: 0;
  background-color: #ffffff;
  width: 100%;
}

/deep/ .vc-weeks {
  height: 408px;
}

/deep/ .vc-highlight {
  width: 50px;
  height: 50px;
}

/deep/ .vc-day-content:hover {
  width: 50px;
  height: 50px;
}
/deep/ .vc-day-content:focus {
  width: 50px;
  height: 50px;
}
/deep/ .vc-day {
  min-height: 50px;
}
</style>
