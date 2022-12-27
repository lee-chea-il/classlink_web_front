<template>
  <div>
    <div class="content_area">
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item">
          <NuxtLink
            class="nav-link"
            :class="{ active: $route.fullPath.includes('/student') }"
            to="/management/attendance/student"
            >학생 출결</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink
            class="nav-link"
            :class="{ active: $route.fullPath.includes('/class') }"
            to="/management/attendance/class"
            >반 출결</NuxtLink
          >
        </li>
      </ul>

      <div class="tab-content depth03 ac_manage_atd">
        <div class="tab-pane active">
          <!-- 컨트롤 버튼 영역 -->
          <div class="search_section">
            <div class="right_area">
              <button class="btn btn_crud_default">내역 다운로드</button>
              <button
                class="btn btn_crud_point"
                @click="onOpenBatchAttendanceModal"
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
                        <button
                          class="btn icons_search_off"
                          type="button"
                        ></button>
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
                                  @click="onClickOpenSubList(idx)"
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
                                      @click="onClickShowClass(item)"
                                    >
                                      출결
                                    </button>
                                  </li>
                                  <li
                                    v-for="(items, id) in item.student"
                                    :key="id"
                                  >
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
                                  <!-- <li>
                                    <span class="text">이길동</span>
                                    <button
                                      class="btn btn_crud_default btn_inout"
                                    >
                                      등원
                                    </button>
                                  </li>
                                  <li>
                                    <span class="text">삼길순</span>
                                    <button
                                      class="btn btn_crud_default btn_inout"
                                    >
                                      하원
                                    </button>
                                  </li> -->
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
                  @dayclick="onDayClick($event)"
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
                      <tr
                        v-for="(item, idx) in selectedDateTaskList"
                        :key="idx"
                      >
                        <td>{{ item.name }}</td>
                        <td>오전 11:00:00</td>
                        <td>오전 11:00:00</td>
                        <td class="td01">
                          <button class="btn icons_x_circle_off"></button>
                        </td>
                      </tr>
                      <!-- <tr>
                        <td>홍길동</td>
                        <td>오전 09:00:00</td>
                        <td>오전 09:00:00</td>
                        <td class="td01">
                          <button class="btn icons_x_circle_off"></button>
                        </td>
                      </tr>
                      <tr>
                        <td>홍길동</td>
                        <td>오전 09:00:00</td>
                        <td>오전 09:00:00</td>
                        <td class="td01">
                          <button class="btn icons_x_circle_off"></button>
                        </td>
                      </tr> -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- /.3단 분류 컨텐츠 -->
        </div>
      </div>
    </div>

    <BatchAttendanceModal
      :open="openBatchAttendanceModal.open"
      :selectedClass="selectedClass"
      :date="selectedDateTitle"
      @close="onCloseBatchAttendanceModal"
    />
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import BatchAttendanceModal from '@/components/common/modal/attendance/BatchAttendanceModal.vue'

export default {
  name: 'Class',
  components: {
    DatePicker,
    BatchAttendanceModal,
  },
  data() {
    return {
      openBatchAttendanceModal: {
        open: false,
      },

      subList: [
        {
          class: '영어 심화 A반',
          student: [
            {
              name: '삼사삼',
              state: '출석',
              date: '2022-11-22',
            },
            {
              name: '이길동',
              state: '등원',
              date: '2022-11-23',
            },
            {
              name: '삼길순',
              state: '하원',
              date: '2022-11-24',
            },
            {
              name: '홍길동',
              state: '출석',
              date: '2022-11-25',
            },
            {
              name: '이길동',
              state: '등원',
              date: '2022-11-26',
            },
            {
              name: '삼길순',
              state: '하원',
              date: '2022-11-27',
            },
            {
              name: '이길둥',
              state: '등원',
              date: '2022-11-28',
            },
            {
              name: '삼길순',
              state: '하원',
              date: '2022-11-29',
            },
          ],
        },
        {
          class: '수학 심화 A반',
          student: [
            {
              name: '삼삼삼',
              state: '출석',
              date: '2022-11-12',
            },
          ],
        },
        {
          class: '사회 기초 A반',
          student: [
            {
              name: '홍길동',
              state: '출석',
              date: '2022-11-22',
            },
            {
              name: '이길동',
              state: '등원',
              date: '2022-11-29',
            },
            {
              name: '삼길순',
              state: '하원',
              date: '2022-11-15',
            },
            {
              name: '이길둥',
              state: '등원',
              date: '2022-11-29',
            },
            {
              name: '삼길순',
              state: '하원',
              date: '2022-11-12',
            },
          ],
        },
      ],
      open_subList: null,

      // 캘린더

      selectedDate: new Date(),
      selectedDateTitle: '',
      selectedDateTaskList: [],
      selectedClass: {
        class: '영어 심화 A반',
        student: [
          {
            name: '삼사삼',
            state: '출석',
            date: '2022-11-22',
          },
          {
            name: '이길동',
            state: '등원',
            date: '2022-11-23',
          },
          {
            name: '삼길순',
            state: '하원',
            date: '2022-11-24',
          },
          {
            name: '홍길동',
            state: '출석',
            date: '2022-11-25',
          },
          {
            name: '이길동',
            state: '등원',
            date: '2022-11-26',
          },
          {
            name: '삼길순',
            state: '하원',
            date: '2022-11-27',
          },
          {
            name: '이길둥',
            state: '등원',
            date: '2022-11-28',
          },
          {
            name: '삼길순',
            state: '하원',
            date: '2022-11-29',
          },
        ],
      },
      attributes: [
        {
          key: 'today',
          highlight: 'teal', // Boolean, String, Object
          dates: new Date(),
          order: 0,
          content: 'gray', // Boolean, String, Object
        },
        {
          dot: 'blue',
          dates: ['2022-11-22', '2022-11-25', '2022-11-27', '2022-11-29'],
        },
      ],
    }
  },
  created() {
    // const days = ['일', '월', '화', '수', '목', '금', '토']
    // this.selectedDateTitle =
    //   this.selectedDate.getFullYear() +
    //   '년 ' +
    //   (this.selectedDate.getMonth() + 1) +
    //   '월 ' +
    //   this.selectedDate.getDate() +
    //   '일 '
    // const today = new Date()
    // const year = today.getFullYear()
    // const month = ('0' + (today.getMonth() + 1)).slice(-2)
    // const day = ('0' + today.getDate()).slice(-2)
    // const dateString = year + '-' + month + '-' + day
    // const array = []
    // for (let i = 0; i < this.selectedClass.student.length; i++) {
    //   if (this.selectedClass.student[i].date === dateString) {
    //     array.push(this.selectedClass.student[i])
    //   }
    // }
    //
    // this.selectedDateTaskList = array
    // const studentArray = []
    // for (let i = 0; i < this.selectedClass.student.length; i++) {
    //   studentArray.push(this.selectedClass.student[i].date)
    // }
    // this.attributes[1].dates = studentArray
  },
  methods: {
    onOpenBatchAttendanceModal() {
      this.openBatchAttendanceModal.open = true
    },
    onCloseBatchAttendanceModal() {
      this.openBatchAttendanceModal.open = false
    },

    // 반 목록 열기
    onClickOpenSubList(idx) {
      if (idx !== this.open_subList) {
        this.open_subList = idx
      } else {
        this.open_subList = null
      }
    },

    // 캘린더 날짜 클릭
    onDayClick(day) {
      this.selectedDate = new Date(day.id)
      const array = []
      for (let i = 0; i < this.selectedClass.student.length; i++) {
        if (this.selectedClass.student[i].date === day.id) {
          array.push(this.selectedClass.student[i])
        }
      }
      this.selectedDateTaskList = array
    },

    // 출결 버튼 클릭
    onClickShowClass(item) {
      this.selectedClass = item

      const days = ['일', '월', '화', '수', '목', '금', '토']
      this.selectedDateTitle =
        this.selectedDate.getFullYear() +
        '년 ' +
        (this.selectedDate.getMonth() + 1) +
        '월 ' +
        this.selectedDate.getDate() +
        '일 ' +
        days[this.selectedDate.getDay()] +
        '요일'
      const today = new Date()

      const year = today.getFullYear()
      const month = ('0' + (today.getMonth() + 1)).slice(-2)
      const day = ('0' + today.getDate()).slice(-2)
      const dateString = year + '-' + month + '-' + day
      const array = []
      for (let i = 0; i < this.selectedClass.student.length; i++) {
        if (this.selectedClass.student[i].date === dateString) {
          array.push(this.selectedClass.student[i])
        }
      }
      this.selectedDateTaskList = array

      const studentArray = []
      for (let i = 0; i < this.selectedClass.student.length; i++) {
        studentArray.push(this.selectedClass.student[i].date)
      }
      this.attributes[1].dates = studentArray
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
