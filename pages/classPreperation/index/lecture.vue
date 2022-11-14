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
    />

    <!-- 강좌 변경 -->
    <ChangeLectureModal />

    <!-- 커리큘럼 배정 -->
    <CurriculumAssignmentModal />

    <!-- 커리큘럼 선택 -->
    <SelectCurriculumModal />

    <!-- 수업시간 선택 -->
    <SelectScheduleModal :hourData="hourData" />

    <!-- 커리큘럼 리스트 상세 -->
    <SelectCurriculumListModal />
    {{ hourData }}
  </div>
</template>

<script>
import ChangeLectureModal from '~/components/common/modal/lecture/ChangeLectureModal.vue'
import CreateLectureModal from '~/components/common/modal/lecture/CreateLectureModal.vue'
import CurriculumAssignmentModal from '~/components/common/modal/lecture/CurriculumAssignmentModal.vue'
import SelectCurriculumListModal from '~/components/common/modal/lecture/SelectCurriculumListModal.vue'
import SelectCurriculumModal from '~/components/common/modal/lecture/SelectCurriculumModal.vue'
import SelectScheduleModal from '~/components/common/modal/lecture/SelectScheduleModal.vue'
import PageHeader from '~/components/common/PageHeader.vue'
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
  },
  data() {
    return {
      lectureInfo: {
        name: '',
        teacher: [],
        spareTeacher: [],
        className: [],
        classTime: '',
        curriculum: '',
        createdAt: '',
        image: '',
        startAlarmTime: '',
        endAlarmTime: '',
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
    }
  },
  computed: {
    hourData() {
      return Array.from({ length: 48 }, (i, j) => j / 2 + 0)
    },
  },
  methods: {
    changeLecture({ target: { name, value } }) {
      this.lectureInfo[name] = value
    },

    // 선생님 배정
    showTeacherMenu(idx) {
      const target = document.getElementById(`teacher_list${idx}`)
      const isNone = target.style.display === 'none'
      if (isNone) {
        for (const idx in this.teacherList) {
          const allTarget = document.getElementById(`teacher_list${idx}`)
          allTarget.style.display = 'none'
        }
        target.style.display = 'block'
      } else {
        target.style.display = 'none'
      }
    },

    addTeacher(payload) {
      const selectTeacherList = [payload]
      const teacherType = payload.selectType
      const number = this.teacherList.findIndex(
        (item) => item.id === payload.id
      )
      const spareNumber = this.lectureInfo.spareTeacher.findIndex(
        (item) => item.id === payload.id
      )
      if (teacherType === 0) {
        this.teacherList[number].selectType = 1
        this.lectureInfo.teacher = selectTeacherList
      } else if (teacherType === 2) {
        this.teacherList[number].selectType = 1
        this.lectureInfo.spareTeacher.splice(spareNumber, 1)
        this.lectureInfo.teacher = selectTeacherList
      }
    },

    addSpareTeacher(payload) {
      const selectSpareList = [...this.lectureInfo.spareTeacher]
      const teacherType = payload.selectType
      const number = this.teacherList.findIndex(
        (item) => item.id === payload.id
      )
      const teacherNum = this.lectureInfo.teacher.findIndex(
        (item) => item.id === payload.id
      )
      if (teacherType === 0) {
        this.teacherList[number].selectType = 2
        selectSpareList.push(payload)
        this.lectureInfo.spareTeacher = Array.from(new Set(selectSpareList))
      } else if (teacherType === 1) {
        selectSpareList.push(payload)
        this.teacherList[number].selectType = 2
        this.lectureInfo.teacher.splice(teacherNum, 1)
        this.lectureInfo.spareTeacher = Array.from(new Set(selectSpareList))
      }
    },
    addClassData(payload) {
      const selectClassList = [...this.lectureInfo.className]
      selectClassList.push(payload)
      this.lectureInfo.className = Array.from(new Set(selectClassList))
    },
    deleteTeacher(selectIdx) {
      this.teacherList[selectIdx].selectType = 0
      this.lectureInfo.teacher.splice(selectIdx, 1)
    },
    deleteSpareTeacher(selectIdx) {
      this.teacherList[selectIdx].selectType = 0
      this.lectureInfo.spareTeacher.splice(selectIdx, 1)
    },
    deleteClassData(selectIdx) {
      this.lectureInfo.className.splice(selectIdx, 1)
    },
  },
}
</script>

<style></style>
