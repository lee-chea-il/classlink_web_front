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
        :lectureCourse="lectureCourse"
        :lecturePlanList="lecturePlanList"
        :searchFlag="searchFlag"
        :searchList="searchList"
        :allCheckBoxFlag="allCheckBoxFlag"
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
      @update="onClickUpdatePlanBtn"
      @close="onCloseLecturePlanDetailModal"
    />
  </div>
</template>
<script>
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
      searchFlag: 0,
      allCheckBoxFlag: false,
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
      lecturePlanList: [
        {
          id: 0,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서0',
          writer: '홍길동 선생님',
          created_at: '2022.07.10',
          open: false,
          views: 3,
          contents: '성격심리학 레슨1 강의계획서입니다. 수업에 참고해 주세요',
        },
        {
          id: 1,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서1',
          writer: '김지원 선생님',
          created_at: '2022.07.10',
          open: true,
          views: 4,
          contents: '성격심리학 레슨1 강의계획서입니다. 수업에 참고해 주세요',
        },
        {
          id: 2,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서2',
          writer: '임꺽정 선생님',
          created_at: '2022.07.10',
          open: false,
          views: 0,
          contents: '성격심리학 레슨1 강의계획서입니다. 수업에 참고해 주세요',
        },
        {
          id: 3,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서3',
          writer: '임꺽정 선생님',
          created_at: '2022.07.10',
          open: true,
          views: 2,
          contents: '성격심리학 레슨1 강의계획서입니다. 수업에 참고해 주세요',
        },
        {
          id: 4,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서4',
          writer: '임창정 선생님',
          created_at: '2022.07.10',
          open: true,
          views: 7,
          contents: '성격심리학 레슨1 강의계획서입니다. 수업에 참고 필수',
        },
        {
          id: 5,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서',
          writer: '임창정 선생님',
          created_at: '2022.07.10',
          open: false,
          views: 7,
          contents: '성격심리학 레슨1 강의계획서입니다 수업에 참고 필수',
        },
        {
          id: 6,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서',
          writer: '임창정 선생님',
          created_at: '2022.07.10',
          open: false,
          views: 8,
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
          contents: '성격심리학 레슨1 강의계획서입니다.  수업에 참고 필수',
        },
        {
          id: 8,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서',
          writer: '임창정 선생님',
          created_at: '2022.07.10',
          open: true,
          views: 0,
          contents: '성격심리학 레슨1 강의계획서입니다.  수업에 참고 필수',
        },
        {
          id: 9,
          course_id: 0,
          title: '성격심리학 레슨1 강의계획서',
          writer: '김지원 선생님',
          created_at: '2022.07.10',
          open: true,
          views: 0,
          contents: '성격심리학 레슨1 강의계획서입니다.  수업에 참고 필수',
        },
      ],
    }
  },
  created() {},
  methods: {
    // click tab-menu
    onClickHomeWorkBox() {
      this.$router.push(
        `/class/lecturecourse/homeworkbox/${this.$route.params.id}`
      )
    },
    onClickNoteBox() {
      this.$router.push(`/class/lecturecourse/notebox/${this.$route.params.id}`)
    },
    onClickRegisterLecturePlan() {
      this.$router.push(
        `/class/lecturecourse/registerlectureplan/${this.$route.params.id}`
      )
    },
    onClickUpdateLecturePlan() {
      this.$router.push(
        `/class/lecturecourse/updatelectureplan/${this.$route.params.id}`
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
      if (this.searchText.length < 2) {
        this.openModalDesc(
          '강의계획서 검색',
          '검색어는 2글자 이상 입력해주세요.'
        )
        return false
      }

      const result = this.lecturePlanList.filter((elem) => {
        return (
          elem.title.includes(this.searchText) ||
          elem.writer.includes(this.searchText) ||
          elem.contents.includes(this.searchText)
        )
      })
      if (result.length === 0) {
        this.openModalDesc('강의계획서 검색', '일치하는 강의계획서가 없습니다.')
        return false
      } else {
        this.searchFlag = 1
        this.searchList = result
        console.log(this.searchList)
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
