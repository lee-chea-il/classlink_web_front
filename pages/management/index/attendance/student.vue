<template>
  <div id="content" class="content">
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
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="right_area">
              <div class="date_box inline_block">
                {{ studentSearchDate.date_range_start }} -
                {{ studentSearchDate.date_range_end }}
              </div>
              <button
                class="btn icons_calendar_off"
                @click="openDatePickerModalDesc"
              ></button>
              <div class="input-group input-search form-inline">
                <input
                  type="text"
                  class="form-control"
                  placeholder="반, 학생 이름 검색"
                />
                <div class="input-group-append">
                  <button class="btn icons_search_off" type="button"></button>
                </div>
              </div>
              <button class="btn btn_crud_default">내역 다운로드</button>
            </div>
          </div>
          <!-- /.검색 영역 -->
          <!-- 테이블 영역 -->
          <div class="table_section">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chkAll"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chkAll"></label>
                    </div>
                  </th>
                  <th>학년</th>
                  <th>이름</th>
                  <th>ID</th>
                  <th>학생 연락처</th>
                  <th>학부모 연락처</th>
                  <th>오늘</th>
                  <th>출결</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in studentList" :key="idx">
                  <td>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        :id="idx"
                        :checked="selectStudentList.includes(item.id)"
                        type="checkbox"
                        class="custom-control-input"
                        @input="onClickCheckBox(item)"
                      />
                      <label class="custom-control-label" :for="idx"></label>
                    </div>
                  </td>
                  <td>{{ item.student_year }}학년</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.identify }}</td>
                  <td>{{ item.student_phone }}</td>
                  <td>{{ item.parent_phone }}</td>
                  <td>{{ item.today }}</td>
                  <td>
                    <i
                      class="btn icons_zoom_off"
                      data-toggle="modal"
                      data-target="#modalMoreAttendance"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.테이블 영역 -->
          <!-- 페이징 영역 -->
          <div class="pagination_section">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span class="previous"></span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span class="next"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- /.페이징 영역 -->
        </div>
      </div>
    </div>

    <MoreAttendanceModal />
    <DatePickerModal
      :open="datePickerModalDesc.open"
      :range="range"
      @select-range="selectRange"
      @close="onCloseDatePickerModalDesc"
      @confirm="onClickConfirmBtn"
    />
  </div>
</template>

<script>
import MoreAttendanceModal from '@/components/common/modal/attendance/MoreAttendanceModal.vue'
import DatePickerModal from '@/components/common/modal/attendance/DatePickerModal.vue'

export default {
  name: 'Student',
  components: {
    MoreAttendanceModal,
    DatePickerModal,
  },
  data() {
    return {
      studentList: [
        {
          id: 1,
          student_year: 1,
          name: '홍길동',
          identify: 'ididid123',
          student_phone: '010-1234-5678',
          parent_phone: '010-1234-5678',
          today: '등원',
        },
        {
          id: 2,
          student_year: 3,
          name: '홍길동',
          identify: 'ididid123',
          student_phone: '010-1234-5678',
          parent_phone: '010-1234-5678',
          today: '-',
        },
        {
          id: 3,
          student_year: 2,
          name: '홍길동',
          identify: 'ididid123',
          student_phone: '010-1234-5678',
          parent_phone: '010-1234-5678',
          today: '등원',
        },
        {
          id: 4,
          student_year: 1,
          name: '홍길동',
          identify: 'ididid123',
          student_phone: '010-4444-4455',
          parent_phone: '010-1234-5555',
          today: '-',
        },
        {
          id: 5,
          student_year: 1,
          name: '홍길동',
          identify: 'ididid123',
          student_phone: '010-5542-2222',
          parent_phone: '010-4444-1636',
          today: '-',
        },
      ],

      allCheck: false,
      selectStudentList: [],

      datePickerModalDesc: {
        open: false,
      },
      studentSearchDate: {
        date_range_start: '2022.11.22',
        date_range_end: '2022.11.29',
      },
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  },
  methods: {
    // 날짜 지정
    selectRange(e) {
      this.range.start = e.start
      this.range.end = e.end
      // console.log(this.range)
    },
    openDatePickerModalDesc() {
      this.datePickerModalDesc.open = true
    },
    onCloseDatePickerModalDesc() {
      this.datePickerModalDesc.open = false
    },
    changeDateFormat(date) {
      const year = date.getFullYear()
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      const day = ('0' + date.getDate()).slice(-2)
      const dateString = year + '.' + month + '.' + day
      return dateString
    },
    onClickConfirmBtn() {
      this.datePickerModalDesc.open = false
      this.studentSearchDate.date_range_start = this.changeDateFormat(
        this.range.start
      )
      this.studentSearchDate.date_range_end = this.changeDateFormat(
        this.range.end
      )
    },

    // 내역 다운로드 체크박스
    onClickCheckBox(data) {
      if (this.selectStudentList.includes(data.id)) {
        this.selectStudentList = this.selectStudentList.filter(
          (item) => item !== data.id
        )
      } else {
        this.selectStudentList.push(data.id)
      }
    },
  },
}
</script>

<style></style>
