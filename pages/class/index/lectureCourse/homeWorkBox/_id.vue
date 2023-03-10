<template>
  <div>
    <div>
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
        :searchFlag="searchFlag"
        :searchList="searchList"
        :allCheckBoxFlag="allCheckBoxFlag"
        :taskList="taskList"
        :lectureInfo="lectureInfo"
        :deleteIdxList="deleteIdxList"
        :endPageNumber="endPageNumber"
        :currentPage="currentPage"
        @checked-all="selectAll"
        @change-input="onChangeInput"
        @search-homework="searchHomeWork"
        @select-homework="onClickCheckBox"
        @delete-homework="deleteHomeWork"
        @click-register="onClickRegisterHomeWork"
        @open-detail="onClickTask"
        @click-submission="openSubmissionStatusModal"
        @click-page="onClickPagination"
        @click-direction="paginationDirection"
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
      @delete="deleteTask"
      @close="onCloseDeleteModalDesc"
    />
    <!-- 과제 상세 모달 -->
    <HomeWorkDetailModal
      :open="HomeWorkDetailModalDesc.open"
      :task="task"
      @update="onClickUpdateHomeWorkBtn"
      @close="onCloseHomeWorkDetailModal"
    />
    <!-- 제출 현황 모달 -->
    <SubmissionStatusModal
      :open="submissionStatusModalDesc.open"
      :task="task"
      :submissionList="submissionList"
      :submissionFlag="submissionFlag"
      :endPageNumber="subEndPageNumber"
      :currentPage="subCurrentPage"
      @click-range="onClickSubmissionRange"
      @close="onCloseSubmissionStatusModal"
      @click-expand="onClickExpandBtn"
      @click-page="onClickSubPagination"
      @click-direction="subPaginationDirection"
    />
  </div>
</template>
<script>
import { apiLectureCourse } from '~/services'
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
      // 유저 정보
      userIdx: this.$store.state.common.user.mem_idx,
      institutionIdx: this.$store.state.common.user.ins_code,
      lectureIdx: this.$route.params.id,
      // 강좌 정보
      lectureInfo: {
        lec_title: '',
        csm_name_list: '',
        mem_name: '',
      },
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
          hwb_idx: 0,
          hbs_idx: 0,
          smem_idx: 0,
          mem_name: '이성국',
          mem_phone: '010-1111-1111',
          std_year: '초1',
          hbs_stubbornness: '완강률',
          hbs_title: '과제제출 제목',
          hbs_content: '과제제출 내용 내용 내용',
          hbs_registration_date: '2023-01-04',
          fileList: null,
        },
      ],
      taskList: [],
      task: {
        hwb_title: '',
        hwb_idx: 0,
        hwb_open_yn: true,
        hwb_content: '',
        mem_name: '',
        mem_idx: 0,
        hwb_registration_date: '',
        hwb_update_date: '',
        assignmentFile: null,
      },
      // pagination
      currentPage: 1,
      endPageNumber: 0,
      // 과제 제출 pagination
      subCurrentPage: 1,
      subEndPageNumber: 0,
      submissionFlag: false,
    }
  },
  watch: {
    submissionFlag() {
      this.getSubmissions()
    },
    currentPage() {
      this.getTaskList()
    },
  },
  mounted() {
    this.getTaskList()
  },
  methods: {
    // 과제함 목록 api
    async getTaskList() {
      const payload = {
        current_page: this.currentPage,
        keyword: this.searchText,
        lec_idx: this.lectureIdx,
        ins_code: this.institutionIdx,
        per_page_num: 10,
      }
      await apiLectureCourse
        .getTaskList(payload)
        .then(({ data: { data } }) => {
          this.taskList = data.assignmentListvo
          this.lectureInfo = {
            lec_title: data.classInfo[0].lec_title,
            csm_name_list: data.classInfo.map((x) => x.csm_name).join(', '),
            mem_name: data.classInfo[0].mem_name,
          }
          this.endPageNumber = data.pageMaker.end_page
        })
        .catch((err) => {
          console.log(err)
        })
    },
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
        `/class/lecturecourse/registerhomework/${this.$route.params.id}?lecture=${this.lectureInfo.lec_title}&class=${this.lectureInfo.csm_name_list}&teacher=${this.lectureInfo.mem_name}`
      )
    },
    onClickUpdateHomeWork() {
      localStorage.setItem('taskData', JSON.stringify(this.task))
      this.$router.push(
        `/class/lecturecourse/Updatehomework/${this.$route.params.id}?lecture=${this.lectureInfo.lec_title}&class=${this.lectureInfo.csm_name_list}&teacher=${this.lectureInfo.mem_name}`
      )
    },

    // 과제 상세 api
    async onClickTask(hwbIdx) {
      const payload = {
        lec_idx: this.lectureIdx,
        hwb_idx: hwbIdx,
      }
      await apiLectureCourse
        .getTask(payload)
        .then(({ data: { data } }) => {
          this.task = data
          this.openHomeWorkDetailModal()
        })
        .catch((err) => {
          console.log(err)
        })
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
      console.log(this.HomeWorkDetailModalDesc.open)
    },
    onCloseHomeWorkDetailModal() {
      this.HomeWorkDetailModalDesc.open = false
      this.getTaskList()
    },

    // 과제 수정
    onClickUpdateHomeWorkBtn() {
      this.HomeWorkDetailModalDesc.open = true
      this.onClickUpdateHomeWork()
    },

    //  과제 검색
    searchHomeWork() {
      if (this.searchText.length === 1) {
        this.openModalDesc('과제 검색', '검색어는 2글자 이상 입력해주세요.')
        return false
      }
      this.getTaskList()
    },

    // 과제 삭제
    onClickCheckBox({ target: { id, checked } }, mem_idx) {
      if (checked) {
        const task = {
          hwb_idxs: Number(id),
          mem_idxs: mem_idx,
        }
        this.deleteIdxList.push(task)
        console.log(this.deleteIdxList)
      } else {
        this.allCheckBoxFlag = false
        const index = this.deleteIdxList.findIndex(
          (x) => x.hwb_idxs === Number(id)
        )
        this.deleteIdxList.splice(index, 1)
        console.log(this.deleteIdxList)
      }
    },
    // 과제 삭제 api
    async deleteTask() {
      const payload = {
        data: {
          list: this.deleteIdxList,
        },
      }
      await apiLectureCourse
        .deleteTask(payload)
        .then((res) => {
          if (res.data.return_code === '_15') {
            this.onCloseDeleteModalDesc()
            this.openModalDesc('과제함 삭제', '권한이 없습니다.')
          } else {
            this.getTaskList()
            this.deleteIdxList = []
            this.onCloseDeleteModalDesc()
          }
        })
        .catch((err) => {
          console.log(err)
        })
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

    // 과제 제출 현황 api
    async getSubmissions() {
      const payload = {
        current_page: this.subCurrentPage,
        lec_idx: this.lectureIdx,
        hwb_idx: this.task.hwb_idx,
        ins_code: this.institutionIdx,
        per_page_num: 5,
        arrange: this.submissionFlag,
      }
      await apiLectureCourse
        .getSubmissions(payload)
        .then(({ data: { data } }) => {
          this.submissionList = data.submitList
          this.subEndPageNumber = data.pageMaker.end_page
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 과제 제출 현황
    openSubmissionStatusModal(item) {
      Object.assign(this.task, item)
      this.getSubmissions()
      this.submissionStatusModalDesc.open = true
    },
    onCloseSubmissionStatusModal() {
      this.submissionStatusModalDesc.open = false
    },
    onClickExpandBtn(idx) {
      console.log(idx)
    },
    // 과제 제출 현황 정렬
    onClickSubmissionRange() {
      if (this.submissionFlag) {
        this.submissionFlag = false
      } else {
        this.submissionFlag = true
      }
    },

    // [pagination] 숫자로 페이징
    onClickPagination(number) {
      this.currentPage = number
    },

    // [pagination] 방향으로 페이징
    paginationDirection(direction) {
      const current = this.currentPage
      if (direction === 'plus') {
        if (current < this.endPageNumber) {
          this.currentPage += 1
        }
      } else if (current > 1) {
        this.currentPage -= 1
      }
    },

    // 제출 현황 [pagination] 숫자로 페이징
    onClickSubPagination(number) {
      this.subCurrentPage = number
    },

    // 제출 현황 [pagination] 방향으로 페이징
    subPaginationDirection(direction) {
      const current = this.subCurrentPage
      if (direction === 'plus') {
        if (current < this.subEndPageNumber) {
          this.subCurrentPage += 1
        }
      } else if (current > 1) {
        this.subCurrentPage -= 1
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
