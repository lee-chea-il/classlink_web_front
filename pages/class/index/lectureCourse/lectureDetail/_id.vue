<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item cursor">
          <div
            class="nav-link"
            :class="courseFlag === 0 ? 'active' : true"
            @click="onClickLecturePlan"
          >
            강의계획서
          </div>
        </li>
        <li class="nav-item cursor">
          <div
            class="nav-link"
            :class="courseFlag === 1 ? 'active' : true"
            @click="onClickHomeWorkBox"
          >
            과제함
          </div>
        </li>
        <li class="nav-item cursor">
          <div
            class="nav-link"
            :class="courseFlag === 2 ? 'active' : true"
            @click="onClickNoteBox"
          >
            노트함
          </div>
        </li>
      </ul>
      <LecturePlan
        v-if="courseFlag === 0"
        :lectureCourse="lectureCourse"
        :lecturePlanList="lecturePlanList"
        :searchFlag="searchFlag"
        :searchList="searchList"
        :allCheckBoxFlag="allCheckBoxFlag"
        @change-input="onChangeInput"
        @search-plan="searchLecturePlan"
        @selete-plan="onClickCheckBox"
        @delete-plan="deletePlan"
        @checked-all="selectAll"
      />
      <HomeWorkBox
        v-if="courseFlag === 1"
        :lectureCourse="lectureCourse"
        :homeWorkList="homeWorkList"
        :searchFlag="searchFlag"
        :searchList="searchList"
        :allCheckBoxFlag="allCheckBoxFlag"
        @checked-all="selectAll"
        @change-input="onChangeInput"
        @search-homework="searchHomeWork"
        @selete-homework="onClickCheckBox"
        @delete-homework="deleteHomeWork"
      />
      <NoteBox v-if="courseFlag === 2" />
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
  </div>
</template>
<script>
import DeletePlanModal from '@/components/lecturecourse/DeletePlanModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import LecturePlan from '@/components/lecturecourse/LecturePlan.vue'
import HomeWorkBox from '@/components/lecturecourse/HomeWorkBox.vue'
import NoteBox from '@/components/lecturecourse/NoteBox.vue'
export default {
  name: 'LectureDetail',
  components: { LecturePlan, HomeWorkBox, NoteBox, ModalDesc, DeletePlanModal },
  data() {
    return {
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      deleteModalDesc: {
        open: false,
        title: '',
      },
      courseFlag: 0,
      searchFlag: 0,
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
      homeWorkList: [
        {
          id: 0,
          course_id: 0,
          title: '성격심리학 레슨1 과제',
          writer: '홍길동 선생님',
          created_at: '2022.07.10',
          open: false,
          views: 3,
          submited: 3,
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
          submited: 3,
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
          submited: 3,
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
          submited: 3,
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
          submited: 3,
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
          submited: 3,
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
          submited: 3,
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
          submited: 3,
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
          submited: 3,
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
          submited: 3,
          contents: '성격심리학 레슨1 과제입니다. 수업에 참고해 주세요',
        },
      ],
      searchText: '',
      searchList: [],
      deleteIdxList: [],
      allCheckBoxFlag: false,
    }
  },
  created() {},
  methods: {
    // 탭 메뉴 클릭 이벤트
    onClickLecturePlan() {
      this.courseFlag = 0
      this.searchFlag = 0
      this.allCheckBoxFlag = false
      this.searchText = ''
      this.deleteIdxList = []
      this.searchList = []
    },
    onClickHomeWorkBox() {
      this.courseFlag = 1
      this.searchFlag = 0
      this.allCheckBoxFlag = false
      this.searchText = ''
      this.deleteIdxList = []
      this.searchList = []
    },
    onClickNoteBox() {
      this.courseFlag = 2
    },

    // 모달 이벤트
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

    // 검색 기능
    onChangeInput({ target: { value } }) {
      this.searchText = value
      console.log(this.searchText)
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
        }
      } else {
        this.allCheckBoxFlag = false
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = false
        }
      }
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
    deleteHomeWork() {
      if (this.deleteIdxList.length === 0) {
        this.openModalDesc('과제 삭제', '삭제할 과제를 선택해주세요.')
        return false
      } else {
        console.log(this.deleteIdxList)
        this.openDeleteModalDesc('과제')
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
