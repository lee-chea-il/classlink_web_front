<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item cursor">
          <div class="nav-link active">강의계획서</div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickHomeWorkBox">과제함</div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickNoteBox">노트함</div>
        </li>
      </ul>
      <LecturePlan
        :lectureInfo="lectureInfo"
        :syllabusList="syllabusList"
        :lectureCourse="lectureCourse"
        :searchList="searchList"
        :allCheckBoxFlag="allCheckBoxFlag"
        :lectureStudentCount="lectureStudentCount"
        :currentPage="currentPage"
        :onClickPagination="onClickPagination"
        @click-plan="onClickSyllabus"
        @change-input="onChangeInput"
        @search-plan="searchLecturePlan"
        @select-plan="onClickCheckBox"
        @delete-plan="deletePlan"
        @checked-all="selectAll"
        @click-register="onClickRegisterLecturePlan"
        @open-detail="openLecturePlanDetailModal"
      />
    </div>
    <!-- 설명 모달 -->
    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />
    <!-- 삭제 모달 -->
    <DeletePlanModal
      :open="deleteModalDesc.open"
      :title="deleteModalDesc.title"
      @close="onCloseDeleteModalDesc"
    />
    <!-- 강의계획서 상세 모달 -->
    <LecturePlanDetailModal
      :open="LecturePlanDetailModalDesc.open"
      :syllabus="syllabus"
      @update="onClickUpdatePlanBtn"
      @close="onCloseLecturePlanDetailModal"
    />
  </div>
</template>
<script>
import { apiLectureCourse } from '~/services'
import DeletePlanModal from '@/components/lecturecourse/DeletePlanModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import LecturePlan from '@/components/lecturecourse/LecturePlan.vue'
import LecturePlanDetailModal from '@/components/common/modal/lecturecourse/LecturePlanDetailModal.vue'
export default {
  name: 'LectureDetail',
  components: {
    LecturePlan,
    ModalDesc,
    DeletePlanModal,
    LecturePlanDetailModal,
  },
  data() {
    return {
      // 유저 정보
      userIdx: this.$store.state.common.user.mem_idx,
      lectureIdx: this.$route.params.id,
      classIdx: this.$route.query.classidx,
      className: this.$route.query.class,
      lectureTitle: this.$route.query.title,
      teacherName: this.$route.query.teacher,
      allCheckBoxFlag: false,
      // 강좌 정보
      lectureInfo: {
        lec_title: '',
        csm_name_list: '',
        mem_name: '',
        student_count: 0,
      },
      // 강의 계획서 목록
      syllabusList: [],
      lectureStudentCount: 0,
      // 페이지네이션
      currentPage: 1,
      endPageNumber: 0,
      // 강의 계획서 상세
      syllabus: {},
      // modal
      LecturePlanDetailModalDesc: {
        open: false,
      },
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      deleteModalDesc: {
        open: false,
        title: '',
      },
      //
      searchText: '',
      searchList: [],
      deleteIdxList: [],
      // mock
      lectureCourse: {
        id: 0,
        academy: '일산어학원',
        time: '월수금 09:00 ~ 12:00',
        subject: '영어심화리딩',
        lessonTitle: '영어',
        lessonClass: '심화 A반',
        teacher: '홍길동 선생님',
        state: true,
        students: 12,
      },
      lecturePlan: {
        id: 0,
        course_id: 0,
        title: '성격심리학 레슨1 강의계획서0',
        writer: '홍길동 선생님',
        created_at: '2022.07.10',
        date_range_start: '2022.08.05',
        date_range_end: '2022.08.07',
        time_range_start: '09:00',
        time_range_end: '11:59',
        time_range_start_m: 0,
        time_range_end_m: 1,
        open: false,
        views: 3,
        contents: '성격심리학 레슨1 강의계획서입니다. 수업에 참고해 주세요',
      },
    }
  },
  mounted() {
    this.getSyllabusList()
  },
  methods: {
    // 강의 계획서 목록 api
    async getSyllabusList() {
      const payload = {
        current_page: this.currentPage,
        keyword: this.searchText,
        lec_idx: this.lectureIdx,
        mem_idx: this.userIdx,
        per_page_num: 10,
      }
      await apiLectureCourse
        .getSyllabusList(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.syllabusList = data.syllabusList
          this.lectureStudentCount = data.lep_stu_cnt
          this.lectureInfo = {
            lec_title: data.classInfo[0].lec_title,
            csm_name_list: data.classInfo.map((x) => x.csm_name).join(', '),
            mem_name: data.classInfo[0].mem_name,
            student_count: this.setAllCount(
              data.classInfo.map((x) => x.student_count)
            ),
          }
          this.endPageNumber = data.pageMaker.end_page
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 배열의 합 구하기
    setAllCount(array) {
      let count = 0
      array.forEach((x) => {
        count += x
      })
      return count
    },

    // 강의 계획서 상세
    async onClickSyllabus(csmIdx, lepIdx) {
      await apiLectureCourse
        .getSyllabus(this.lectureIdx, lepIdx, this.userIdx)
        .then(({ data: { data } }) => {
          this.syllabus = data
          this.openLecturePlanDetailModal()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // click tab-menu
    onClickHomeWorkBox() {
      this.$router.push(
        `/class/lecturecourse/homeworkbox/${this.lectureIdx}?classidx=${this.classIdx}class=${this.className}&title=${this.lectureTitle}&teacher=${this.teacherName}`
      )
    },
    onClickNoteBox() {
      this.$router.push(
        `/class/lecturecourse/notebox/${this.lectureIdx}?classidx=${this.classIdx}class=${this.className}&title=${this.lectureTitle}&teacher=${this.teacherName}`
      )
    },
    onClickRegisterLecturePlan() {
      this.$router.push(
        `/class/lecturecourse/registerlectureplan/${this.lectureIdx}?lecture=${this.lectureInfo.lec_title}&class=${this.lectureInfo.csm_name_list}&teacher=${this.lectureInfo.mem_name}`
      )
    },
    onClickUpdateLecturePlan() {
      this.$router.push(
        `/class/lecturecourse/updatelectureplan/${this.lectureIdx}?classidx=${this.classIdx}class=${this.className}&title=${this.lectureTitle}&teacher=${this.teacherName}`
      )
    },
    // modal event
    openModalDesc(tit, msg) {
      this.modalDesc = {
        open: true,
        title: tit,
        desc: msg,
      }
    },
    onCloseModalDesc() {
      this.modalDesc.open = false
    },
    openDeleteModalDesc(tit) {
      this.deleteModalDesc = {
        open: true,
        title: tit,
      }
    },
    onCloseDeleteModalDesc() {
      this.deleteModalDesc.open = false
    },

    // input change
    onChangeInput({ target: { value } }) {
      this.searchText = value
      console.log(this.searchText)
    },

    // 강의계획서
    // 강의계획서 상세/미리보기
    openLecturePlanDetailModal() {
      this.LecturePlanDetailModalDesc.open = true
    },
    onCloseLecturePlanDetailModal() {
      this.LecturePlanDetailModalDesc.open = false
    },

    //  강의계획서 검색
    searchLecturePlan() {
      if (this.searchText.length === 1) {
        this.openModalDesc(
          '강의계획서 검색',
          '검색어는 2글자 이상 입력해주세요.'
        )
        return false
      }
      this.getSyllabusList()
    },

    // [pagination] 숫자로 페이징
    onClickPagination(number) {
      this.currentPage = number
    },

    // [pagination] 방향으로 페이징
    paginationDirection(direction) {
      const current = this.currentPage
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

    // 강의계획서 수정
    onClickUpdatePlanBtn() {
      this.LecturePlanDetailModalDesc.open = false
      this.onClickUpdateLecturePlan()
    },
    onChangePlanInput({ target: { value, id } }) {
      this.lecturePlan[id] = value
      console.log(this.lecturePlan[id])
    },
    onClickFileInputBtn() {
      const inputBtn = document.getElementById('upload-input')
      inputBtn.click()
    },

    // 강의계획서 삭제
    onClickCheckBox({ target: { id, checked } }) {
      if (checked) {
        console.log(id)
        this.deleteIdxList.push(id)
      } else {
        this.allCheckBoxFlag = false
        for (let i = 0; i < this.deleteIdxList.length; i++) {
          if (this.deleteIdxList[i] === id) {
            this.deleteIdxList.splice(i, 1)
          }
        }
      }
      console.log(this.deleteIdxList)
    },
    deletePlan() {
      if (this.deleteIdxList.length === 0) {
        this.openModalDesc(
          '강의 계획서 삭제',
          '삭제할 강의 계획서를 선택해주세요.'
        )
        return false
      } else {
        console.log(this.deleteIdxList)
        this.openDeleteModalDesc('강의계획서')
      }
    },
    selectAll({ target: { checked } }) {
      const checkboxes = document.getElementsByName('chk')
      if (checked) {
        this.allCheckBoxFlag = true
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = true
          this.deleteIdxList.push(checkboxes[i].id)
        }
        console.log(this.deleteIdxList)
      } else {
        this.allCheckBoxFlag = false
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = false
          this.deleteIdxList.pop()
        }
        console.log(this.deleteIdxList)
      }
    },
  },
}
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
</style>
