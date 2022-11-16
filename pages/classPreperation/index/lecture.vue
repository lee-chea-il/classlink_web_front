<template>
  <div>
    <PageHeader title="강좌 리스트" />
    <div class="tab-content depth03 ac_manage_lec">
      <!-- [개발참조] 데이터가 없는 경우 -->
      <NoListSection v-if="lectureList.length == 0" />
      <!-- /.데이터가 없는 경우 -->
      <!-- 데이터 있을 경우 -->
      <LectureList v-else :lectureList="lectureList" />
      <!-- /.데이터 있을 경우 -->
    </div>

    <!-- 강좌 생성 -->
    <CreateLectureModal
      :lectureInfo="lectureInfo"
      :teacherList="teacherList"
      :classList="classList"
      @change-lecture="changeLecture"
      @show-menu="showTeacherMenu"
      @add-teacher="addTeacher"
      @add-spare-teacher="addSpareTeacher"
      @delete-teacher="deleteTeacher"
      @delete-spare-teacher="deleteSpareTeacher"
      @add-class="addClassData"
      @delete-class="deleteClassData"
      @next-btn="onSubmitCreateClass"
    />

    <!-- 강좌 변경 -->
    <ChangeLectureModal />

    <!-- 커리큘럼 배정 -->
    <CurriculumAssignmentModal />

    <!-- 커리큘럼 선택 -->
    <SelectCurriculumModal />

    <!-- 수업시간 선택 -->
    <SelectScheduleModal
      :hourData="hourData"
      :scheduleItem="scheduleItem"
      :scheduleWeekList="scheduleWeekList"
      :timeList="timeList"
      @select-day="onSelectWeekDay"
      @change-time="onChangeSchedule"
      @open-calendar="openModalCalendar"
      @add-schedule="addSchedule"
      @delete-schedule="deleteSchedule"
    />

    <!-- 커리큘럼 리스트 상세 -->
    <SelectCurriculumListModal />

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
  </div>
</template>

<script>
import ChangeLectureModal from '~/components/common/modal/lecture/ChangeLectureModal.vue'
import CreateLectureModal from '~/components/common/modal/lecture/CreateLectureModal.vue'
import CurriculumAssignmentModal from '~/components/common/modal/lecture/CurriculumAssignmentModal.vue'
import SelectCurriculumListModal from '~/components/common/modal/lecture/SelectCurriculumListModal.vue'
import SelectCurriculumModal from '~/components/common/modal/lecture/SelectCurriculumModal.vue'
import SelectScheduleModal from '~/components/common/modal/lecture/SelectScheduleModal.vue'
import ModalDesc from '~/components/common/modal/ModalDesc.vue'
import PageHeader from '~/components/common/PageHeader.vue'
import CustomDataPicker from '~/components/lecture/custom/CustomDataPicker.vue'
import LectureList from '~/components/lecture/LectureList.vue'
import NoListSection from '~/components/lecture/NoListSection.vue'

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
  },
  data() {
    return {
      isCalendar: false,
      isOpenModalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      bgCnt: 0,
      lectureInfo: {
        name: '',
        teacher: [],
        spareTeacher: [],
        className: [],
        classTime: '',
        curriculum: '',
        createdAt: '',
        image: '',
        startAlarmTime: '5분',
        endAlarmTime: '5분',
      },
      lectureList: [
        {
          name: '영어 심화 1',
          teacher: '홍길동/김지원',
          className: '1-1A',
          classTime: '화,목,금,13~15시',
          curriculum: '영어심화 1A 리딩 교제',
          createdAt: '2020-07-10',
          image: '',
        },
        {
          name: '과학 심화 1',
          teacher: '홍길동/김수원',
          className: '1-2A',
          classTime: '화,목,금,13~15시',
          curriculum: '과학심화 1A 리딩 교제',
          createdAt: '2020-07-10',
          image: '',
        },
        {
          name: '수학의 정석 1',
          teacher: '홍길동/박지수',
          className: '1-3A',
          classTime: '화,목,금,13~15시',
          curriculum: '수학의정석 1A 리딩 교제',
          createdAt: '2020-07-10',
          image: '',
        },
      ],
      teacherList: [
        { id: 1, name: '김지원', selectType: 0 },
        { id: 2, name: '박지수', selectType: 0 },
        { id: 3, name: '임한솔', selectType: 0 },
        { id: 4, name: '최유나', selectType: 0 },
        { id: 5, name: '강원영', selectType: 0 },
      ],
      classList: [
        { id: 1, name: '1-1A' },
        { id: 2, name: '1-1B' },
        { id: 3, name: '1-1C' },
        { id: 4, name: '1-1D' },
        { id: 5, name: '1-1E' },
      ],
      scheduleItem: {
        startTime: '0000',
        endTime: '0030',
        startDay: '2022-11-01',
        endDay: '2022-11-02',
        selectWeekDay: [],
        isRepeat: false,
        bgColor: '#8fa7fb',
      },
      scheduleWeekList: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        set: [],
      },
      weekIdx: {
        일: 'sun',
        월: 'mon',
        화: 'tue',
        수: 'wed',
        목: 'thu',
        금: 'fri',
        토: 'set',
      },
    }
  },
  computed: {
    hourData() {
      return Array.from({ length: 48 }, (i, j) => j / 2 + 0)
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
  },
  methods: {
    // 달력 모달
    openModalCalendar() {
      this.isCalendar = true
    },
    closeModalCalendar() {
      this.isCalendar = false
    },

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

    // 배열 만들기
    setNewArray(arr) {
      return Array.from(new Set(arr))
    },

    // 강좌 변경 Event
    changeLecture({ target: { name, value } }) {
      this.lectureInfo[name] = value
    },

    // 배정 메뉴 보여줄때 다른 메뉴 닫기
    closeTeacherMenu() {
      for (const index in this.teacherList) {
        const allTarget = document.getElementById(`teacher_list${index}`)
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

    // 선생님 배정 시 원래 선생님 번호 초기화
    resetTeacherIdx() {
      const selectIdx = this.lectureInfo.teacher.findIndex(
        (teacher) => teacher?.selectType === 1
      )
      const target = this.lectureInfo.teacher[selectIdx]
      return selectIdx >= 0 && (target.selectType = 0)
    },

    // 선생님 타입 지정
    setTeacherType(id) {
      const number = this.teacherList.findIndex((item) => item.id === id)
      const target = this.teacherList[number]
      return (target.selectType = 1)
    },

    // 담임 배정시 부담임이였으면 지우기
    resetSpareTeacherIdx(id) {
      const spareNumber = this.lectureInfo.spareTeacher.findIndex(
        (item) => item.id === id
      )
      return this.lectureInfo.spareTeacher.splice(spareNumber, 1)
    },

    // 담임 추가
    addTeacher(payload) {
      const { id, selectType } = payload
      this.resetTeacherIdx()
      if (selectType === 0) {
        this.setTeacherType(id)
        this.lectureInfo.teacher = [payload]
      } else if (selectType === 2) {
        this.setTeacherType(id)
        this.resetSpareTeacherIdx(id)
        this.lectureInfo.teacher = [payload]
      }
    },

    // 부담임 번호 지정
    setSpareTeacherIdx(id) {
      const number = this.teacherList.findIndex((item) => item.id === id)
      return (this.teacherList[number].selectType = 2)
    },

    // 부담임 지정시 담임이였으면 지우기
    resetIfTeacherIdx(id) {
      const teacherNum = this.lectureInfo.teacher.findIndex(
        (item) => item.id === id
      )
      return this.lectureInfo.teacher.splice(teacherNum, 1)
    },

    // 부담임 추가
    addSpareTeacher(payload) {
      const { id, selectType } = payload
      const target = this.lectureInfo
      const selectSpareList = [...target.spareTeacher, payload]
      if (selectType === 0) {
        this.setSpareTeacherIdx(id)
        return (target.spareTeacher = this.setNewArray(selectSpareList))
      } else if (selectType === 1) {
        this.setSpareTeacherIdx(id)
        this.resetIfTeacherIdx(id)
        return (target.spareTeacher = this.setNewArray(selectSpareList))
      }
    },

    // 반 추가
    addClassData(payload) {
      const selectClassList = [...this.lectureInfo.className, payload]
      return (this.lectureInfo.className = this.setNewArray(selectClassList))
    },

    // 담임 삭제
    deleteTeacher(selectIdx) {
      this.teacherList[selectIdx].selectType = 0
      return this.lectureInfo.teacher.splice(selectIdx, 1)
    },

    // 부담임 삭제
    deleteSpareTeacher(selectIdx) {
      this.teacherList[selectIdx].selectType = 0
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
      return (this.scheduleItem.selectWeekDay = this.setNewArray(newArr))
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
      if (name === 'isRepeat') {
        this.scheduleItem[name] = checked
      } else {
        this.scheduleItem[name] = value
      }
    },

    // 색 바꾸기
    getColor() {
      if (this.bgCnt === 0) return '#8fa7fb'
      else if (this.bgCnt === 1) return '#72d8d9'
      else if (this.bgCnt === 2) {
        this.bgCnt = 0
        return '#bff0f1'
      }
    },

    // 검색 내용 초기화
    resetSearchShedule() {
      const now = this.getToday
      return (this.scheduleItem = {
        startTime: '',
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
      for (let j = 0; j < 7; j++) {
        document.getElementById(`week_btn_${j}`).classList.remove('active')
      }
    },

    // 검색완료시 시간표 데이터 보여주기
    addScheduleWeekList(idx, schedule) {
      const weekList = this.weekIdx
      this.scheduleWeekList[weekList[idx]] = [
        ...this.scheduleWeekList[weekList[idx]],
        schedule,
      ]
    },

    // 동일한 시간 체크
    selectArrayLength(i, startTime) {
      const weekList = this.weekIdx
      const array = this.scheduleWeekList[weekList[i]].filter(
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
        for (const i of selectWeekDay) {
          if (this.selectArrayLength(i, startTime).length) {
            this.openModalDesc('실패', '해당하는 날짜의 강의가 이미 있습니다.')
            return false
          } else {
            this.addScheduleWeekList(i, schedule)
            this.resetBtn()
            this.resetSearchShedule()
          }
        }
        return (this.bgCnt = this.bgCnt + 1)
      }
    },

    // 시간표 삭제
    deleteSchedule(week, data) {
      return (this.scheduleWeekList[week] = this.scheduleWeekList[week].filter(
        (item) => item.startDay !== data.startDay
      ))
    },
  },
}
</script>

<style></style>
