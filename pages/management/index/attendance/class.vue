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
        <ClassAttendanceBox
          :subList="subList"
          :open_subList="open_subList"
          :selectedClass="selectedClass"
          :attributes="attributes"
          :selectedDateTaskList="selectedDateTaskList"
          @open-batchAttendance="onOpenBatchAttendanceModal"
          @open-sublist="onClickOpenSubList"
          @click-showClass="onClickShowClass"
          @day-click="onDayClick"
        />
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
import ClassAttendanceBox from '@/components/attendance/ClassAttendanceBox.vue'
import BatchAttendanceModal from '@/components/common/modal/attendance/BatchAttendanceModal.vue'

export default {
  name: 'Class',
  components: {
    ClassAttendanceBox,
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
