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
        <StudentAttendanceListBox
          :studentSearchDate="studentSearchDate"
          :allCheck="allCheck"
          :studentList="studentList"
          :selectStudentList="selectStudentList"
          @open-datepicker="openDatePickerModalDesc"
          @click-allcheck="onClickAllCheck"
          @click-checkbox="onClickCheckBox"
        />
      </div>
    </div>

    <MoreAttendanceModal
      :attendanceOpen="attendanceDatePickerModalDesc"
      :attendanceRange="attendanceRange"
      :attendanceSearchDate="attendanceStudentSearchDate"
      @attendance-select-range="attendanceSelectRange"
      @attendance-modal-open="attendanceOpenDatePickerModalDesc"
      @attendance-close="attendanceOnCloseDatePickerModalDesc"
      @attendance-confirm="attendanceOnClickConfirmBtn"
    />
    <RangeDataPicker
      :open="datePickerModalDesc.open"
      @select-date="selectRange"
      @close="onCloseDatePickerModalDesc"
    />

    <RangeDataPicker
      :open="attendanceDatePickerModalDesc.open"
      @select-date="attendanceOnClickConfirmBtn"
      @close="attendanceOnCloseDatePickerModalDesc"
    />
  </div>
</template>

<script>
import StudentAttendanceListBox from '@/components/attendance/StudentAttendanceListBox.vue'
import MoreAttendanceModal from '@/components/common/modal/attendance/MoreAttendanceModal.vue'
import RangeDataPicker from '@/components/common/modal/RangeDataPicker.vue'

export default {
  name: 'Student',
  components: {
    StudentAttendanceListBox,
    MoreAttendanceModal,
    RangeDataPicker,
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
        date_range_start: `${new Date().getFullYear()}.${(
          '0' +
          (new Date().getMonth() + 1)
        ).slice(-2)}.${('0' + new Date().getDate()).slice(-2)}`,
        date_range_end: `${new Date().getFullYear()}.${(
          '0' +
          (new Date().getMonth() + 1)
        ).slice(-2)}.${('0' + new Date().getDate()).slice(-2)}`,
      },
      range: {
        start: new Date(),
        end: new Date(),
      },

      attendanceDatePickerModalDesc: {
        open: false,
      },
      attendanceStudentSearchDate: {
        date_range_start: `${new Date().getFullYear()}.${(
          '0' +
          (new Date().getMonth() + 1)
        ).slice(-2)}.${('0' + new Date().getDate()).slice(-2)}`,
        date_range_end: `${new Date().getFullYear()}.${(
          '0' +
          (new Date().getMonth() + 1)
        ).slice(-2)}.${('0' + new Date().getDate()).slice(-2)}`,
      },
      attendanceRange: {
        start: new Date(),
        end: new Date(),
      },
    }
  },
  methods: {
    // 날짜 지정
    selectRange({ start, end }) {
      const setDate = (date) =>
        `${date?.getFullYear()}.${date?.getMonth() + 1}.${date?.getDate()}`
      this.studentSearchDate.date_range_start = setDate(start)
      this.studentSearchDate.date_range_end = setDate(end)
      this.datePickerModalDesc.open = false
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

    // 출결 날짜 지정
    attendanceSelectRange(e) {
      this.attendanceRange.start = e.start
      this.attendanceRange.end = e.end
      // console.log(this.range)
    },
    attendanceOpenDatePickerModalDesc() {
      this.attendanceDatePickerModalDesc.open = true
    },
    attendanceOnCloseDatePickerModalDesc() {
      this.attendanceDatePickerModalDesc.open = false
    },
    attendanceOnClickConfirmBtn({ start, end }) {
      const setDate = (date) =>
        `${date?.getFullYear()}.${date?.getMonth() + 1}.${date?.getDate()}`
      this.attendanceStudentSearchDate.date_range_start = setDate(start)
      this.attendanceStudentSearchDate.date_range_end = setDate(end)
      this.attendanceDatePickerModalDesc.open = false
    },

    // 내역 다운로드 체크박스
    onClickAllCheck() {
      if (this.allCheck) {
        for (let i = 0; i < this.studentList.length; i++) {
          this.allCheck = false
          this.selectStudentList.pop()
        }
      } else {
        this.selectStudentList.splice(0, this.studentList.length)
        for (let i = 1; i <= this.studentList.length; i++) {
          this.allCheck = true
          this.selectStudentList.push(i)
        }
      }
      console.log(this.selectStudentList)
    },
    onClickCheckBox(data) {
      if (this.selectStudentList.includes(data.id)) {
        this.selectStudentList = this.selectStudentList.filter(
          (item) => item !== data.id
        )
        if (this.selectStudentList.length !== this.studentList.length) {
          this.allCheck = false
        }
      } else {
        this.selectStudentList.push(data.id)
        if (this.selectStudentList.length === this.studentList.length) {
          this.allCheck = true
        }
      }
    },
  },
}
</script>

<style></style>
