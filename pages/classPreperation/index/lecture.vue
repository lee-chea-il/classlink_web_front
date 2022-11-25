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
        @paging-derection="paginationDerection"
        @pagination="onClickPagination"
        @open-select-curriculum="openSelectCurriculumTeacher"
      />
      <!-- /.데이터가 없는 경우 -->
      <NoListSection v-else :identity="identity" />
    </div>

    <!-- 강좌 생성 -->
    <CreateLectureModal
      :lectureInfo="lectureInfo"
      :teacherList="teacherList"
      :classList="classList"
      @change-lecture="onChangeLecture"
      @show-menu="showTeacherMenu"
      @add-teacher="addTeacher"
      @add-spare-teacher="addSpareTeacher"
      @delete-teacher="deleteTeacher"
      @delete-spare-teacher="deleteSpareTeacher"
      @add-class="addClassData"
      @delete-class="deleteClassData"
      @next-btn="onSubmitCreateClass"
      @close="initAddReferenceData"
    />

    <!-- 강좌 변경 -->
    <ChangeLectureModal
      :open="isChangeLecture.open"
      :lecture="lectureInfo"
      :teacherList="teacherList"
      :classList="classList"
      @show-menu="showTeacherMenu"
      @change-lecture="onChangeLecture"
      @delete-teacher="deleteTeacher"
      @delete-spare-teacher="deleteSpareTeacher"
      @add-teacher="addTeacher"
      @add-spare-teacher="addSpareTeacher"
      @add-class="addClassData"
      @delete-class="deleteClassData"
      @close="closeChangeLectureModal"
      @next-button="moveToChangeSecond"
    />

    <!-- 커리큘럼 선택 -->
    <SelectCurriculumModal
      :curriculumList="curriculumList"
      :teacherList="teacherList"
    />

    <!-- 커리큘럼 선택 변경 -->
    <ChangeSelectCurriculumModal
      :open="isChangeSelectCurriculum.open"
      :identity="identity"
      @close="closeChangeCurriculum"
      @next-button="moveToChangeThird"
      @prev-button="backToChangeFirst"
    />

    <!-- 수업시간 선택 -->
    <SelectScheduleModal
      :hourData="hourData"
      :scheduleItem="scheduleItem"
      :scheduleWeekList="lectureInfo.scheduleWeekList"
      :timeList="timeList"
      @select-day="onSelectWeekDay"
      @change-time="onChangeSchedule"
      @open-calendar="openModalCalendar"
      @add-schedule="addSchedule"
      @delete-schedule="deleteSchedule"
    />

    <!-- 수업시간 변경 -->
    <ChangeScheduleModal
      :open="isChangeSchedule.open"
      :hourData="hourData"
      :scheduleItem="scheduleItem"
      :scheduleWeekList="lectureInfo.scheduleWeekList"
      :timeList="timeList"
      @select-day="onSelectWeekDay"
      @change-time="onChangeSchedule"
      @open-calendar="openModalCalendar"
      @add-schedule="addSchedule"
      @delete-schedule="deleteSchedule"
      @close="closeChangeSchedule"
      @prev-button="backToChangeSecond"
      @next-button="moToChangeFourth"
    />

    <!-- 커리큘럼 배정 -->
    <CurriculumAssignmentModal />

    <!-- 커리큘럼 배정 변경 -->
    <ChangeCurriculumAssignmentModal
      :open="isChangeCurriculumAssignment.open"
      :identity="identity"
      @close="closeChangeCurriculumAssignmentModal"
      @prev-button="backToChangeThird"
    />

    <!-- 커리큘럼 리스트 상세 -->
    <SelectCurriculumListModal />

    <!-- 달력 모달 호출 -->
    <CustomDataPicker
      :open="isCalendar"
      :scheduleItem="scheduleItem"
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
  </div>
</template>

<script>
import ChangeCurriculumAssignmentModal from '~/components/common/modal/lecture/ChangeCurriculumAssignmentModal.vue'
import ChangeLectureModal from '~/components/common/modal/lecture/ChangeLectureModal.vue'
import ChangeScheduleModal from '~/components/common/modal/lecture/ChangeScheduleModal.vue'
import ChangeSelectCurriculumModal from '~/components/common/modal/lecture/ChangeSelectCurriculumModal.vue'
import CreateLectureModal from '~/components/common/modal/lecture/CreateLectureModal.vue'
import CurriculumAssignmentModal from '~/components/common/modal/lecture/CurriculumAssignmentModal.vue'
import SelectCurriculumListModal from '~/components/common/modal/lecture/SelectCurriculumListModal.vue'
import SelectCurriculumModal from '~/components/common/modal/lecture/SelectCurriculumModal.vue'
import SelectScheduleModal from '~/components/common/modal/lecture/SelectScheduleModal.vue'
import ModalDesc from '~/components/common/modal/ModalDesc.vue'
import DeleteModal from '~/components/common/modal/reference/DeleteModal.vue'
import PageHeader from '~/components/common/PageHeader.vue'
import CustomDataPicker from '~/components/lecture/custom/CustomDataPicker.vue'
import LectureList from '~/components/lecture/LectureList.vue'
import NoListSection from '~/components/lecture/NoListSection.vue'
import initialState from '~/data/lecture/initialState'
import { setNewArray, deepCopy } from '~/utiles/common'

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
    ChangeLectureModal,
    CustomDataPicker,
    ModalDesc,
    ChangeCurriculumAssignmentModal,
    DeleteModal,
    ChangeSelectCurriculumModal,
    ChangeScheduleModal,
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
  methods: {
    // 취소시 등록 하려고했던 데이터 지우기
    initAddReferenceData() {
      Object.assign(this.$data, initialState())
    },

    // 강좌 등록
    openCreateLecture() {
      this.lectureInfo = deepCopy(this.initLectureInfo)
    },

    // 달력 모달
    openModalCalendar() {
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
      const newItem = deepCopy(data)
      this.openChangeLectrueModal()
      return Object.assign(this.lectureInfo, newItem)
    },

    // 강좌 변경 모달
    openChangeLectrueModal() {
      this.isChangeLecture.open = true
    },

    closeChangeLectureModal() {
      return (this.isChangeLecture.open = false)
    },

    // 커리큘럼 변경 모달
    openChangeCurriculum() {
      this.isChangeSelectCurriculum.open = true
    },

    closeChangeCurriculum() {
      this.isChangeSelectCurriculum.open = false
    },

    // 시간표 변경 모달
    openChangeSchedule() {
      this.isChangeSchedule.open = true
    },

    closeChangeSchedule() {
      this.isChangeSchedule.open = false
    },

    // 커리큘럼 배정 보달
    openChangeCurriculumAssignmentModal() {
      this.isChangeCurriculumAssignment.open = true
    },

    closeChangeCurriculumAssignmentModal() {
      this.isChangeCurriculumAssignment.open = false
    },

    // 삭제 확인 모달
    openDeleteModal(item, list) {
      if (list) {
        if (this.checkLectureList.length) {
          this.isDeleteModal.list = list
        } else {
          this.openModalDesc('실패', '삭제할 데이터를 선택해주세요')
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

    // 변경 모달 이동 Event
    // 2 -> 1
    backToChangeFirst() {
      this.closeChangeCurriculum()
      this.openChangeLectrueModal()
    },

    // 3 -> 2
    backToChangeSecond() {
      this.closeChangeSchedule()
      this.openChangeCurriculum()
    },

    // 4 -> 3
    backToChangeThird() {
      this.closeChangeCurriculumAssignmentModal()
      this.openChangeSchedule()
    },

    // 1 -> 2
    moveToChangeSecond() {
      this.closeChangeLectureModal()
      this.openChangeCurriculum()
    },

    // 2 -> 3
    moveToChangeThird() {
      this.closeChangeCurriculum()
      this.openChangeSchedule()
    },

    // 3 -> 4
    moToChangeFourth() {
      this.closeChangeSchedule()
      this.openChangeCurriculumAssignmentModal()
    },

    // 강좌 변경 Event
    onChangeLecture({ target: { name, value } }) {
      this.lectureInfo[name] = value
    },

    // 배정 메뉴 보여줄때 다른 메뉴 닫기
    closeTeacherMenu() {
      for (const index in this.teacherList) {
        const allTarget = document.getElementById(`teacher_list${index}`)
        const allTargetTwo = document.getElementById(`teacher_list_${index}`)
        allTarget.style.display = 'none'
        allTargetTwo.style.display = 'none'
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
        return (targetStyle.display = 'block')
      } else {
        return (targetStyle.display = 'none')
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
    onSubmitCreateClass() {
      const nextBtnTarget = document.getElementById('create_chapter_1')
      if (this.lectureInfo.name === '') {
        this.openModalDesc('실패', '강좌 이름을 입력해주세요.')
        return false
      }
      if (this.lectureInfo.teacher.length === 0) {
        this.openModalDesc('실패', '담임 선생님을 배정해주세요.')
        return false
      }
      if (this.lectureInfo.className.length === 0) {
        this.openModalDesc('실패', '반을 배정해주세요.')
        return false
      }

      if (
        this.lectureInfo.name !== '' &&
        this.lectureInfo.teacher.length > 0 &&
        this.lectureInfo.className.length > 0
      ) {
        nextBtnTarget.click()
      }
    },

    // 스케줄
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
  },
}
</script>

<style></style>
