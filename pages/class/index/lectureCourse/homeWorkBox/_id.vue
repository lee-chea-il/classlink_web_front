<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickLecturePlan">강의계획서</div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link active">과제함</div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickNoteBox">노트함</div>
        </li>
      </ul>
      <HomeWorkBox
        :lectureCourse="lectureCourse"
        :homeWorkList="homeWorkList"
        :searchFlag="searchFlag"
        :searchList="searchList"
        :allCheckBoxFlag="allCheckBoxFlag"
        @checked-all="selectAll"
        @change-input="onChangeInput"
        @search-homework="searchHomeWork"
        @select-homework="onClickCheckBox"
        @delete-homework="deleteHomeWork"
        @click-register="onClickRegisterHomeWork"
        @open-detail="openHomeWorkDetailModal"
        @click-submission="openSubmissionStatusModal"
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
    <!-- 과제 상세 모달 -->
    <HomeWorkDetailModal
      :open="HomeWorkDetailModalDesc.open"
      @update="onClickUpdateHomeWorkBtn"
      @close="onCloseHomeWorkDetailModal"
    />
    <!-- 제출 현황 모달 -->
    <SubmissionStatusModal
      :open="submissionStatusModalDesc.open"
      :homeWork="homeWork"
      :submissionList="submissionList"
      @close="onCloseSubmissionStatusModal"
      @click-expand="onClickExpandBtn"
    />
  </div>
</template>
<script>
import DeletePlanModal from '@/components/lecturecourse/DeletePlanModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import HomeWorkBox from '@/components/lecturecourse/HomeWorkBox.vue'
import HomeWorkDetailModal from '@/components/common/modal/lecturecourse/HomeWorkDetailModal.vue'
import SubmissionStatusModal from '@/components/common/modal/lecturecourse/SubmissionStatusModal.vue'

export default {
  name: 'LectureDetail',
  components: {
    HomeWorkBox,
    ModalDesc,
    DeletePlanModal,
    HomeWorkDetailModal,
    SubmissionStatusModal,
  },
  data() {
    return {
      // Flag
      searchFlag: 0,
      allCheckBoxFlag: false,
      // modal
      HomeWorkDetailModalDesc: {
        open: false,
      },
      submissionStatusModalDesc: {
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
      homeWork: {
        id: 0,
        course_id: 0,
        title: '성격심리학 레슨1 과제입니당',
        writer: '이성국 선생님',
        created_at: '2022.07.10',
        open: false,
        views: 3,
        contents: '성격심리학 레슨1 과제입니다. 지금 당장 제출하세요.',
      },
      submissionList: [
        {
          id: 0,
          grade: '1학년',
          student_name: '김지원',
          student_phone: '010-3566-1888',
          progress: '100',
          submission_time: '22.08.13 오후 11:00',
          submission_file: '성격심리학.docx',
          contents: '과제를 제출합니다 과제를 제출합니다요',
        },
        {
          id: 0,
          grade: '1학년',
          student_name: '김지원',
          student_phone: '010-3566-1888',
          progress: '100',
          submission_time: '22.08.13 오후 11:00',
          submission_file: '성격심리학.docx',
          contents: '과제를 제출합니다 과제를 제출합니다요',
        },
        {
          id: 0,
          grade: '1학년',
          student_name: '김지원',
          student_phone: '010-3566-1888',
          progress: '100',
          submission_time: '22.08.13 오후 11:00',
          submission_file: '성격심리학.docx',
          contents: '과제를 제출합니다 과제를 제출합니다요',
        },
        {
          id: 0,
          grade: '1학년',
          student_name: '김지원',
          student_phone: '010-3566-1888',
          progress: '100',
          submission_time: '22.08.13 오후 11:00',
          submission_file: '성격심리학.docx',
          contents: '과제를 제출합니다 과제를 제출합니다요',
        },
        {
          id: 0,
          grade: '1학년',
          student_name: '김지원',
          student_phone: '010-3566-1888',
          progress: '100',
          submission_time: '22.08.13 오후 11:00',
          submission_file: '성격심리학.docx',
          contents: '과제를 제출합니다 과제를 제출합니다요',
        },
      ],
      homeWorkList: [
        {
          id: 0,
          course_id: 0,
          title: '성격심리학 레슨1 과제',
          writer: '홍길동 선생님',
          created_at: '2022.07.10',
          open: false,
          views: 3,
          submitted: 3,
          contents: '성격심리학 레슨1 과제입니다. 수업에 참고해 주세요',
        },
        {
          id: 1,
          course_id: 0,
          title: '성격심리학 레슨1 과제',
          writer: '김지원 선생님',
          created_at: '2022.07.10',
          open: true,
          views: 4,
          submitted: 3,
          contents: '성격심리학 레슨1 과제입니다. 수업에 참고해 주세요',
        },
        {
          id: 2,
          course_id: 0,
          title: '성격심리학 레슨1 과제',
          writer: '임꺽정 선생님',
          created_at: '2022.07.10',
          open: false,
          views: 0,
          submitted: 3,
          contents: '성격심리학 레슨1 과제입니다. 수업에 참고해 주세요',
        },
        {
          id: 3,
          course_id: 0,
          title: '성격심리학 레슨1 과제',
          writer: '임꺽정 선생님',
          created_at: '2022.07.10',
          open: true,
          views: 2,
          submitted: 3,
          contents: '성격심리학 레슨1 과제입니다. 수업에 참고해 주세요',
        },
        {
          id: 4,
          course_id: 0,
          title: '성격심리학 레슨1 과제',
          writer: '임창정 선생님',
          created_at: '2022.07.10',
          open: true,
          views: 7,
          submitted: 3,
          contents: '성격심리학 레슨1 과제입니다. 수업에 참고 필수',
        },
        {
          id: 5,
          course_id: 0,
          title: '성격심리학 레슨1 과제',
          writer: '임창정 선생님',
          created_at: '2022.07.10',
          open: false,
          views: 7,
          submitted: 3,
          contents: '성격심리학 레슨1 과제입니다 수업에 참고 필수',
        },
        {
          id: 6,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서',
          writer: '임창정 선생님',
          created_at: '2022.07.10',
          open: false,
          views: 8,
          submitted: 3,
          contents: '성격심리학 레슨1 강의계획서입니다.  수업에 참고 필수',
        },
        {
          id: 7,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서',
          writer: '임창정 선생님',
          created_at: '2022.07.10',
          open: true,
          views: 0,
          submitted: 3,
          contents: '성격심리학 레슨1 과제입니다. 수업에 참고해 주세요',
        },
        {
          id: 8,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서',
          writer: '임창정 선생님',
          created_at: '2022.07.10',
          open: true,
          views: 0,
          submitted: 3,
          contents: '성격심리학 레슨1 과제입니다. 수업에 참고해 주세요',
        },
        {
          id: 9,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서',
          writer: '김지원 선생님',
          created_at: '2022.07.10',
          open: true,
          views: 0,
          submitted: 3,
          contents: '성격심리학 레슨1 과제입니다. 수업에 참고해 주세요',
        },
      ],
    }
  },
  created() {},
  methods: {
    // click tab-menu
    onClickLecturePlan() {
      this.$router.push(
        `/class/lecturecourse/lectureplan/${this.$route.params.id}`
      )
    },
    onClickNoteBox() {
      this.$router.push(`/class/lecturecourse/notebox/${this.$route.params.id}`)
    },
    onClickRegisterHomeWork() {
      this.$router.push(
        `/class/lecturecourse/registerhomework/${this.$route.params.id}`
      )
    },
    onClickUpdateHomeWork() {
      this.$router.push(
        `/class/lecturecourse/Updatehomework/${this.$route.params.id}`
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

    onClickFileInputBtn() {
      const inputBtn = document.getElementById('upload-input')
      inputBtn.click()
    },

    selectAll({ target: { checked } }) {
      const checkboxes = document.getElementsByName('chk')
      if (checked) {
        this.allCheckBoxFlag = true
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = true
          this.deleteIdxList.push(checkboxes[i].id)
        }
      } else {
        this.allCheckBoxFlag = false
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = false
          this.deleteIdxList.pop()
        }
      }
    },

    // 과제함
    // 과제 상세/미리보기 모달
    openHomeWorkDetailModal() {
      this.HomeWorkDetailModalDesc.open = true
    },
    onCloseHomeWorkDetailModal() {
      this.HomeWorkDetailModalDesc.open = false
    },

    // 과제 수정
    onClickUpdateHomeWorkBtn() {
      this.HomeWorkDetailModalDesc.open = true
      this.onClickUpdateHomeWork()
    },

    //  과제 검색
    searchHomeWork() {
      if (this.searchText.length < 2) {
        this.openModalDesc('과제 검색', '검색어는 2글자 이상 입력해주세요.')
        return false
      }
      const result = this.homeWorkList.filter((elem) => {
        return (
          elem.title.includes(this.searchText) ||
          elem.writer.includes(this.searchText) ||
          elem.contents.includes(this.searchText)
        )
      })
      if (result.length === 0) {
        this.openModalDesc('과제 검색', '일치하는 과제가 없습니다.')
        return false
      } else {
        this.searchFlag = 1
        this.searchList = result
        console.log(this.searchList)
      }
    },

    // 과제 삭제
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
    },
    deleteHomeWork() {
      if (this.deleteIdxList.length === 0) {
        this.openModalDesc('과제 삭제', '삭제할 과제를 선택해주세요.')
        return false
      } else {
        console.log(this.deleteIdxList)
        this.openDeleteModalDesc('과제')
      }
    },

    // 과제 제출 현황
    openSubmissionStatusModal() {
      this.submissionStatusModalDesc.open = true
    },
    onCloseSubmissionStatusModal() {
      this.submissionStatusModalDesc.open = false
    },
    onClickExpandBtn(idx) {
      console.log(idx)
    },
  },
}
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
</style>
