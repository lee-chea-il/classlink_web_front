<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickLecturePlan">강의계획서</div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickHomeWorkBox">과제함</div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link active">노트함</div>
        </li>
      </ul>
      <NoteBox :lectureCourse="lectureCourse" />
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
import NoteBox from '@/components/lecturecourse/NoteBox.vue'
export default {
  name: 'LectureDetail',
  components: {
    NoteBox,
    ModalDesc,
    DeletePlanModal,
  },
  data() {
    return {
      courseFlag: 0,
      // modal
      LecturePlanDetailModalDesc: {
        open: false,
      },
      HomeWorkDetailModalDesc: {
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
    onClickHomeWorkBox() {
      this.$router.push(
        `/class/lecturecourse/homeworkbox/${this.$route.params.id}`
      )
    },
    onClickRegisterLecturePlan() {
      this.courseFlag = 3
      this.searchFlag = 0
      this.searchText = ''
      this.deleteIdxList = []
      this.searchList = []
      this.allCheckBoxFlag = false
    },
    onClickRegisterHomeWork() {
      this.courseFlag = 4
      this.searchFlag = 0
      this.searchText = ''
      this.deleteIdxList = []
      this.searchList = []
      this.allCheckBoxFlag = false
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
  },
}
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
</style>
