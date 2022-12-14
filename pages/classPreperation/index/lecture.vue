<template>
  <div>
    <PageHeader title="강좌 리스트" />

    <div class="tab-content depth03 ac_manage_lec">
      <!-- 데이터 있을 경우 -->

      <LectureList
        v-if="lectureList.length"
        :lectureList="currentList(lectureList)"
        :checkList="checkLectureList"
        :identity="identity"
        :currentPage="currentPage"
        :numberList="currentNumberList(pagiNumberList)"
        @open-create="openCreateLecture"
        @check-item="handleCheckbox"
        @open-lecture="setChangeLecture"
        @delete-item="openDeleteModal"
        @show-menu="showDetailMenu"
        @set-title="setModalTitle"
        @paging-derection="paginationDerection"
        @pagination="onClickPagination"
        @open-select-curriculum="openSelectCurriculumTeacher"
      />
      <!-- /.데이터가 없는 경우 -->
      <NoListSection v-else :identity="identity" />
    </div>

    <!-- 강좌 생성 수정 -->
    <CreateLectureModal
      :modalTitle="modalTitle"
      :lectureInfo="lectureInfo"
      :teacherList="teacherList"
      :classList="classList"
      :searchData="searchData"
      @clear-teacher="clearSearchTeacher"
      @clear-class="clearSearchClass"
      @change-input="handleChange"
      @show-menu="showTeacherMenu"
      @add-teacher="addTeacher"
      @add-spare-teacher="addSpareTeacher"
      @delete-teacher="deleteTeacher"
      @delete-spare-teacher="deleteSpareTeacher"
      @add-class="addClassData"
      @delete-class="deleteClassData"
    />

    <!-- 커리큘럼 선택 -->
    <SelectCurriculumModal
      :modalTitle="modalTitle"
      :curriculumList="curriculumList"
      :myCurriculumList="lectureInfo.curriculumList"
      :teacherList="teacherList"
      :identity="identity"
      @add-curriculum="addMyCurriculum"
    />

    <!-- 수업시간 선택 -->
    <SelectScheduleModal
      :modalTitle="modalTitle"
      :hourData="hourData"
      :scheduleItem="scheduleItem"
      :lectureInfo="lectureInfo"
      :scheduleWeekList="lectureInfo.scheduleWeekList"
      :timeList="timeList"
      :toWeekArray="getToWeek(scheduleItem.startDay)"
      :toWeekIdx="getWeekNumber(getToWeek(scheduleItem.startDay)[0])"
      @select-day="onSelectWeekDay"
      @change-time="onChangeSchedule"
      @open-calendar="openModalCalendar"
      @add-schedule="addSchedule"
      @delete-schedule="deleteSchedule"
      @change-week="paginationWeek"
    />

    <!-- 커리큘럼 배정 -->
    <CurriculumAssignmentModal
      :identity="identity"
      :modalTitle="modalTitle"
      :curriculumList="curriculumList"
      @select-curriculum-data="getSelectCurriculumData"
    />

    <!-- 커리큘럼 리스트 상세 -->
    <SelectCurriculumListModal ref="SelectCurriculumListModal" />

    <!-- 달력 모달 호출 -->
    <CustomDataPicker
      :open="isCalendar"
      :scheduleItem="scheduleItem"
      :range="range"
      @select-date="onChangeDate"
      @close="closeModalCalendar"
    />

    <!-- 설명 모달 -->
    <ModalDesc
      :open="isOpenModalDesc.open"
      :title="isOpenModalDesc.title"
      :desc="isOpenModalDesc.desc"
      @close="closeModalDesc"
    />

    <!-- 삭제 모달 -->
    <DeleteModal
      :open="isDeleteModal.open"
      @close="closeDeleteModal"
      @submit="deleteLecture"
    />

    <!-- 스넥바 -->
    <CustomSnackbar :show="isSnackber.open" :message="isSnackber.message" />
  </div>
</template>

<script>
import PageHeader from '~/components/common/PageHeader.vue'
import ModalDesc from '~/components/common/modal/ModalDesc.vue'
import DeleteModal from '~/components/common/modal/DeleteModal.vue'
import LectureList from '~/components/lecture/LectureList.vue'
import NoListSection from '~/components/lecture/NoListSection.vue'
import CustomDataPicker from '~/components/lecture/custom/CustomDataPicker.vue'
import CreateLectureModal from '~/components/common/modal/lecture/CreateLectureModal.vue'
import SelectScheduleModal from '~/components/common/modal/lecture/SelectScheduleModal.vue'
import SelectCurriculumModal from '~/components/common/modal/lecture/SelectCurriculumModal.vue'
import CurriculumAssignmentModal from '~/components/common/modal/lecture/CurriculumAssignmentModal.vue'
import SelectCurriculumListModal from '~/components/common/modal/lecture/SelectCurriculumListModal.vue'
import initialState from '~/data/classPreperation/lecture/initialState'
import { setNewArray, deepCopy } from '~/utiles/common'
import CustomSnackbar from '~/components/common/CustomSnackbar.vue'

export default {
  name: 'LecturePage',
  components: {
    PageHeader,
    CreateLectureModal,
    CurriculumAssignmentModal,
    SelectCurriculumModal,
    SelectScheduleModal,
    SelectCurriculumListModal,
    NoListSection,
    LectureList,
    CustomDataPicker,
    ModalDesc,
    DeleteModal,
    CustomSnackbar,
  },
  data() {
    return initialState()
  },
  computed: {
    hourData() {
      return Array.from({ length: 49 }, (i, j) => j / 2 + 0)
    },
    timeList() {
      const timeArr = this.hourData.map((item) => {
        const time = item.toString()
        const timeLen = time.length
        const isOnTime = time.includes('.5')
        const timeSet = (a, b) => {
          return time.replace(a, b)
        }
        if (isOnTime) {
          if (timeLen === 3) {
            return timeSet(/(\d)(.5)/, '0$130')
          } else {
            return timeSet(/(\d)(.5)/, '$130')
          }
        } else if (timeLen === 1) {
          return timeSet(/(\d)/, '0$100')
        } else {
          return timeSet(/(\d\d)/, '$100')
        }
      })
      return timeArr
    },

    getToday() {
      const year = new Date().getFullYear()
      const month = new Date().getMonth() + 1
      const day = new Date().getDate()
      return { year, month, day }
    },

    getTodayFull() {
      const year = new Date().getFullYear()
      const month = new Date().getMonth() + 1
      const day = new Date().getDate()
      return `${year}-${month}-${day}`
    },

    getEndDayFull() {
      const year = new Date().getFullYear()
      const month = new Date().getMonth() + 1
      const day = new Date().getDate() + 7
      return String(`${year}-${month}-${day}`)
    },

    // 강좌 등록시 주차 보여주기
    getScheduleWeek() {
      return String(
        `${this.getToday.year}년 ${this.getToday.month}월, ${this.getWeekNumber}주차`
      )
    },

    lastIdx() {
      return this.currentPage * this.postPerPage
    },
    firstIdx() {
      return this.lastIdx - this.postPerPage
    },
    lastNumIdx() {
      return this.currentPageNumber * this.postPerPageNum
    },
    firstNumIdx() {
      return this.lastNumIdx - this.postPerPageNum
    },
    pagiNumberList() {
      const length = Math.ceil(this.lectureList.length / this.postPerPage)
      return Array.from({ length }, (i, j) => j + 1)
    },
  },
  mounted() {
    this.scheduleItem = {
      ...this.scheduleItem,
      startDay: String(this.getTodayFull),
      endDay: String(this.getEndDayFull),
    }
  },
  methods: {
    setModalTitle(str) {
      this.modalTitle = str
    },

    // 강좌 등록
    openCreateLecture() {
      this.setModalTitle('강좌 등록')
      this.lectureInfo = deepCopy(this.initLectureInfo)
    },

    // 달력 모달
    openModalCalendar() {
      console.log(this.scheduleItem)
      this.range = {
        start: this.scheduleItem.startDay,
        end: this.scheduleItem.endDay,
      }
      console.log(this.range)
      this.isCalendar = true
    },

    closeModalCalendar() {
      this.isCalendar = false
    },

    // 메세지 모달
    openModalDesc(tit, msg) {
      this.isOpenModalDesc = {
        open: true,
        title: tit,
        desc: msg,
      }
    },

    closeModalDesc() {
      this.isOpenModalDesc.open = false
    },

    // 선택한 강좌 변경 설정
    setChangeLecture(data) {
      document.getElementById('lecture_modal').click()
      const newItem = deepCopy(data)
      this.setModalTitle('강좌 수정')
      return Object.assign(this.lectureInfo, newItem)
    },

    // 삭제 확인 모달
    openDeleteModal(item, list) {
      if (list) {
        if (this.checkLectureList.length) {
          this.isDeleteModal.list = list
        } else {
          this.openSnackbar('삭제할 데이터를 선택해주세요')
          setTimeout(() => {
            this.closeSnackber()
          }, 2000)
          return false
        }
      } else {
        this.deleteItem = item
      }
      return (this.isDeleteModal.open = true)
    },

    closeDeleteModal() {
      this.isDeleteModal.open = false
    },

    openSnackbar(msg) {
      this.isSnackber = {
        open: true,
        message: msg,
      }
    },

    closeSnackber() {
      this.isSnackber.open = false
    },

    // input 변경 Event
    handleChange({
      target: {
        name,
        value,
        id,
        dataset: { target },
      },
    }) {
      if (id === 'name') {
        this.lectureInfo[id] = value
      } else {
        this[target][name] = value
      }
    },

    // 선생님 필터링 지우기
    clearSearchTeacher() {
      this.searchData.teacher = ''
    },

    // 반 필터링 지우기
    clearSearchClass() {
      this.searchData.class = ''
    },

    // 배정 메뉴 보여줄때 다른 메뉴 닫기
    closeTeacherMenu() {
      for (const index in this.teacherList) {
        const allTarget = document.getElementById(`teacher_list${index}`)
        allTarget.style.display = 'none'
      }
    },

    // 상세 메뉴 보여줄때 다른 메뉴 닫기
    closeDetailMenu() {
      for (const index in this.lectureList) {
        const allTarget = document.getElementById(`lecture_more_list_${index}`)
        allTarget.style.display = 'none'
      }
    },

    // 선생님 배정 메뉴 보여주기
    showTeacherMenu(idx) {
      const targetStyle = document.getElementById(`teacher_list${idx}`).style
      const isNone = targetStyle.display === 'none'
      if (isNone) {
        this.closeTeacherMenu()
        targetStyle.display = 'block'
      } else {
        targetStyle.display = 'none'
      }
    },

    // 선생님 권한일때 상세 메뉴 보여주기
    showDetailMenu(idx) {
      const targetStyle = document.getElementById(
        `lecture_more_list_${idx}`
      ).style
      const isNone = targetStyle.display === 'none'
      if (isNone) {
        this.closeDetailMenu()
        return (targetStyle.display = 'block')
      } else {
        return (targetStyle.display = 'none')
      }
    },

    // 담임 배정시 부담임이였으면 지우기
    resetSpareTeacherIdx(id) {
      let idx = 0
      const target = this.lectureInfo
      idx = target.spareTeacher.findIndex((item) => item.id === id)
      if (idx >= 0) return target.spareTeacher.splice(idx, 1)
    },

    // 담임 추가
    addTeacher(payload) {
      const { id } = payload
      this.resetSpareTeacherIdx(id)
      return (this.lectureInfo.teacher = [payload])
    },

    // 부담임 지정시 담임이였으면 지우기
    resetIfTeacherIdx(id) {
      const idx = this.lectureInfo.teacher.findIndex((item) => item.id === id)
      if (idx >= 0) return this.lectureInfo.teacher.splice(idx, 1)
    },

    // 부담임 추가
    addSpareTeacher(payload, type) {
      const { id } = payload
      const target = this.lectureInfo
      const selectSpareList = [...target.spareTeacher, payload]
      const spareIdx = this.lectureInfo.spareTeacher.findIndex(
        (item) => item.id === id
      )
      this.resetIfTeacherIdx(id, type)
      return (
        spareIdx === -1 && (target.spareTeacher = setNewArray(selectSpareList))
      )
    },

    // 반 추가
    addClassData(payload) {
      const idx = this.lectureInfo.className.findIndex(
        (item) => item.id === payload.id
      )
      const selectClassList = [...this.lectureInfo.className, payload]
      return (
        idx === -1 &&
        (this.lectureInfo.className = setNewArray(selectClassList))
      )
    },

    // 담임 삭제
    deleteTeacher(selectIdx) {
      return this.lectureInfo.teacher.splice(selectIdx, 1)
    },

    // 부담임 삭제
    deleteSpareTeacher(selectIdx) {
      return this.lectureInfo.spareTeacher.splice(selectIdx, 1)
    },

    // 반 삭제
    deleteClassData(selectIdx) {
      return this.lectureInfo.className.splice(selectIdx, 1)
    },

    // 강좌 만들기 Submit
    // onSubmitCreateClass() {
    //   const nextBtnTarget = document.getElementById('create_chapter_1')
    //   if (this.lectureInfo.name === '') {
    //     this.openModalDesc('실패', '강좌 이름을 입력해주세요.')
    //     return false
    //   }
    //   if (this.lectureInfo.teacher.length === 0) {
    //     this.openModalDesc('실패', '담임 선생님을 배정해주세요.')
    //     return false
    //   }
    //   if (this.lectureInfo.className.length === 0) {
    //     this.openModalDesc('실패', '반을 배정해주세요.')
    //     return false
    //   }

    //   if (
    //     this.lectureInfo.name !== '' &&
    //     this.lectureInfo.teacher.length > 0 &&
    //     this.lectureInfo.className.length > 0
    //   ) {
    //     nextBtnTarget.click()
    //   }
    // },

    // 커리큘럼 선택하기
    addMyCurriculum(data) {
      const arr = [...this.lectureInfo.curriculumList, data]
      const newArr = arr.filter(
        (item, i, callback) =>
          i === callback.findIndex(({ name }) => name === item.name)
      )
      console.log(newArr)
      this.lectureInfo.curriculumList = newArr
    },

    // 스케줄
    // 월 단위 주차
    getWeekNumber(dateItem) {
      // 해당 날짜 (일)
      const newDate = new Date(dateItem)
      const currentDate = newDate.getDate()

      // 이번 달 1일로 지정
      const startOfMonth = new Date(newDate.setDate(1))
      // // 이번 달 1일이 무슨 요일인지 확인
      const weekDay = startOfMonth.getDay() // 0: Sun ~ 6: Sat
      // // ((요일 - 1) + 해당 날짜) / 7일로 나누기 = N 주차
      return parseInt((weekDay - 1 + currentDate) / 7) + 1
    },

    // 달력 날자
    getToWeek(dateItem) {
      const date = new Date(dateItem)
      const calendarYear = date.getFullYear()
      // 달력 월
      const calendarMonth = date.getMonth() + 1
      // // 달력 일
      const calendarToday = date.getDate()

      const monthLastDate = new Date(calendarYear, calendarMonth, 0)
      // // 달력 월의 마지막 일
      const calendarMonthLastDate = monthLastDate.getDate()

      // // 달력 이전 월의 마지막 일
      const prevMonthLastDate = new Date(calendarYear, calendarMonth - 1, 0)

      // // 달력 다음 월의 시작 일
      const nextMonthStartDate = new Date(calendarYear, calendarMonth, 1)

      // // 달력 현재 요일
      const calendarMonthTodayDay = date.getDay()

      // 주간 배열
      const arWeek = ['', '', '', '', '', '', '']

      let weekYear = calendarYear
      let weekMonth = calendarMonth
      let weekDay = calendarToday

      for (let index = calendarMonthTodayDay; index < 7; index++) {
        arWeek[index] = weekYear + '-' + weekMonth + '-' + weekDay
        weekDay++
        // 날짜가 현재 월의 마지막 일보다 크면 다음 월의 1일로 변경
        if (weekDay > calendarMonthLastDate) {
          weekYear = nextMonthStartDate.getFullYear()
          weekMonth = nextMonthStartDate.getMonth() + 1
          weekDay = 1
        }
      }

      weekYear = calendarYear
      weekMonth = calendarMonth
      weekDay = calendarToday
      // 현재 요일부터 꺼꾸로 주간 배열에 날짜를 추가
      for (let index = calendarMonthTodayDay - 1; index >= 0; index--) {
        weekDay--
        // 날짜가 현재 월의 1일이면 작으면 이전 월의 마지막 일로 변경
        if (weekDay === 0) {
          weekYear = prevMonthLastDate.getFullYear()
          weekMonth = prevMonthLastDate.getMonth() + 1
          weekDay = prevMonthLastDate.getDate()
        }
        arWeek[index] = weekYear + '-' + weekMonth + '-' + weekDay
      }

      return arWeek
    },

    changeDayForm(date) {
      const year = new Date(date).getFullYear()
      const month = new Date(date).getMonth() + 1
      const day = new Date(date).getDate()
      return `${year}-${month}-${day}`
    },

    // 주차 변경 Event
    paginationWeek(direction) {
      const target = this.scheduleItem
      const result = new Date(target.startDay)
      const resultEnd = new Date(target.endDay)
      if (direction === 'plus') {
        const newItem = result.setDate(result.getDate() + 7)
        const newEndItem = resultEnd.setDate(resultEnd.getDate() + 7)
        target.startDay = this.changeDayForm(newItem)
        target.endDay = this.changeDayForm(newEndItem)
      } else {
        const newItem = result.setDate(result.getDate() - 7)
        const newEndItem = resultEnd.setDate(resultEnd.getDate() - 7)
        target.startDay = this.changeDayForm(newItem)
        target.endDay = this.changeDayForm(newEndItem)
      }
    },

    // 스케줄 요일 토글 이벤트
    onSelectWeekDay({ target: { classList, innerHTML } }) {
      let newArr = []
      const isClass = classList.contains('active')
      const filter = (item) => item?.filter((data) => data !== innerHTML)
      const settingTarget = this.scheduleItem.selectWeekDay

      if (isClass) {
        newArr = filter(settingTarget)
        classList.remove('active')
      } else {
        newArr = [...settingTarget, innerHTML]
        classList.add('active')
      }
      return (this.scheduleItem.selectWeekDay = setNewArray(newArr))
    },

    // 달력 날자 설정
    onChangeDate({ start, end }) {
      // console.log('start', start, 'end', end)
      const setDate = (date) =>
        `${date?.getFullYear()}.${date?.getMonth() + 1}.${date?.getDate()}`
      this.scheduleItem.startDay = setDate(start)
      this.scheduleItem.endDay = setDate(end)
      this.isCalendar = false
    },

    // 달력 시간 변경
    onChangeSchedule({ target: { name, value, checked } }) {
      const target = this.scheduleItem
      if (name === 'isRepeat') return (target[name] = checked)
      else return (target[name] = value)
    },

    // 색 바꾸기
    getColor() {
      if (this.bgCnt === 0) return '#8fa7fb'
      else if (this.bgCnt === 1) return '#72d8d9'
      else if (this.bgCnt === 2) return '#bff0f1'
      else {
        this.bgCnt = 0
        return '#8fa7fb'
      }
    },

    // 검색 내용 초기화
    resetSearchShedule() {
      const now = this.getToday
      return (this.scheduleItem = {
        startTime: '0000',
        endTime: '',
        startDay: `${now.year}.${now.month}.${now.day}`,
        endDay: `${now.year}.${now.month}.${now.day + 1}`,
        selectWeekDay: [],
        bgColor: this.getColor(),
        isRepeat: false,
      })
    },

    // 검색 완료시 버튼 초기화
    resetBtn() {
      for (let j = 0; j < 7; j++)
        document.getElementById(`week_btn_${j}`).classList.remove('active')
    },

    // 검색완료시 시간표 데이터 보여주기
    addScheduleWeekList(idx, schedule) {
      const weekList = this.weekIdx
      const target = this.lectureInfo.scheduleWeekList
      target[weekList[idx]] = [...target[weekList[idx]], schedule]
    },

    // 동일한 시간 체크
    selectArrayLength(i, startTime) {
      const weekList = this.weekIdx
      const array = this.lectureInfo.scheduleWeekList[weekList[i]].filter(
        (item) => item.startTime <= startTime && item.endTime >= startTime
      )
      return array
    },

    // 시간표 추가
    addSchedule(schedule) {
      const { startDay, endDay, startTime, endTime, selectWeekDay } = schedule
      if (startDay === '') {
        this.openModalDesc('실패', '시작 날짜를 입력해주세요')
        return false
      }
      if (endDay === '') {
        this.openModalDesc('실패', '종료 날짜를 입력해주세요')
        return false
      }
      if (startTime === '') {
        this.openModalDesc('실패', '시작 시간을 입력해주세요')
        return false
      }
      if (endTime === '') {
        this.openModalDesc('실패', '종료 시간을 입력해주세요')
        return false
      }
      if (selectWeekDay.length === 0) {
        this.openModalDesc('실패', '요일을 입력해주세요')
        return false
      }

      if (
        startDay !== '' &&
        endDay !== '' &&
        startTime !== '' &&
        endTime !== '' &&
        selectWeekDay.length !== 0
      ) {
        let isHave = false

        for (const i of selectWeekDay) {
          if (this.selectArrayLength(i, startTime).length) {
            this.openModalDesc('실패', '해당하는 날짜의 강의가 이미 있습니다.')
            return false
          } else {
            this.addScheduleWeekList(i, schedule)
            isHave = true
          }
        }
        if (isHave) {
          this.bgCnt = this.bgCnt + 1
          this.resetSearchShedule()
          this.resetBtn()
        } else {
          return false
        }
      }
    },

    // 시간표 삭제
    deleteSchedule(week, data) {
      const target = this.lectureInfo.scheduleWeekList
      return (target[week] = target[week].filter(
        (item) => item.startDay !== data.startDay
      ))
    },

    // checkbox 리스트 추가삭제
    handleCheckbox({ target: { checked, value, id } }) {
      const idx = this.lectureList.findIndex((item) => item.name === value)
      if (id === 'lecture_all_check') {
        if (checked) {
          this.checkLectureList = [...this.lectureList]
        } else {
          this.checkLectureList = []
        }
      } else if (checked) {
        this.checkLectureList = [
          ...this.checkLectureList,
          this.lectureList[idx],
        ]
      } else {
        return this.checkLectureList.splice(idx, 1)
      }
    },

    // 리스트 삭제 클릭
    deleteLecture() {
      let newArray
      this.closeDeleteModal()
      this.openModalDesc('성공', '해당 강좌를 삭제하였습니다.')
      if (this.isDeleteModal.list) {
        newArray = this.lectureList.filter(
          (item) => !this.checkLectureList.includes(item)
        )
      } else {
        newArray = this.lectureList.filter((item) => item !== this.deleteItem)
      }

      return (this.lectureList = newArray)
    },

    // [pagination] 강좌 리스트
    currentList(tmp) {
      return tmp.slice(this.firstIdx, this.lastIdx)
    },

    // [pagination] 강좌 리스트 숫자
    currentNumberList(tmp) {
      return tmp.slice(this.firstNumIdx, this.lastNumIdx)
    },

    // [pagination] 방향으로 페이징
    paginationDerection(direction) {
      const current = this.currentPageNumber
      const max = this.currentNumberList(this.pagiNumberList)
      const isPlus = max.length === 10
      if (direction === 'plus') {
        if (isPlus) {
          this.currentPageNumber += 1
          this.currentPage = this.currentNumberList(this.pagiNumberList)[0]
        }
      } else if (current > 1) {
        this.currentPageNumber -= 1
        this.currentPage = this.currentNumberList(this.pagiNumberList)[0]
      }
    },

    // [pagination] 숫자로 페이징
    onClickPagination(number) {
      this.currentPage = number
    },

    // [선생님] 커리큘럼 선택
    openSelectCurriculumTeacher(data) {
      this.lectureInfo = deepCopy(data)
      this.isChangeSelectCurriculum = true
    },

    // [선생님] 커리큘럼 배정
    openAssignmentCurriculumTeacher(data) {
      this.lectureInfo = deepCopy(data)
      this.isChangeCurriculumAssignment = true
    },

    getSelectCurriculumData(data) {
      this.selectCurriculumInfo = data
      this.$refs.SelectCurriculumListModal.setData(
        this.selectCurriculumInfo.dayData
      )
    },
  },
}
</script>

<style></style>
