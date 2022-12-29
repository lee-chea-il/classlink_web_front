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
        :allCheckBoxFlag="allCheckBoxFlag"
        :lectureStudentCount="lectureStudentCount"
        :currentPage="currentPage"
        :onClickPagination="onClickPagination"
        :deleteIdxList="deleteIdxList"
        :endPageNumber="endPageNumber"
        @click-plan="onClickSyllabus"
        @change-input="onChangeInput"
        @search-plan="searchLecturePlan"
        @select-plan="onClickCheckBox"
        @delete-plan="deletePlan"
        @checked-all="selectAll"
        @click-register="onClickRegisterLecturePlan"
        @open-detail="openLecturePlanDetailModal"
        @click-direction="paginationDirection"
        @click-page="onClickPagination"
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
      @delete="deleteSyllabus"
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
      institutionIdx: this.$store.state.common.user.ins_code,
      lectureIdx: this.$route.params.id,
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
      syllabus: {
        fileList: [
          {
            lep_idx: 0,
            lpa_file: 'string',
            lpa_idx: 0,
            lpa_registration_date: 'string',
            lpa_size: 'string',
          },
        ],
        lec_idx: 0,
        lep_content: '',
        lep_idx: 0,
        lep_registration_date: '',
        lep_time_edate: '',
        lep_time_etime: '',
        lep_time_sdate: '',
        lep_time_stime: '',
        lep_title: '',
        lep_update_date: '',
        mem_idx: 0,
        mem_name: '',
      },
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
      deleteIdxList: [],
      // pagination
      currentPage: 1,
      endPageNumber: 0,
    }
  },
  watch: {
    currentPage() {
      this.getSyllabusList()
    },
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
        ins_code: this.institutionIdx,
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
    async onClickSyllabus(lecIdx, lepIdx) {
      const payload = {
        lec_idx: lecIdx,
        lep_idx: lepIdx,
      }
      await apiLectureCourse
        .getSyllabus(payload)
        .then(({ data: { data } }) => {
          this.syllabus = data
          console.log(this.syllabus)
          this.openLecturePlanDetailModal()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // click tab-menu
    onClickHomeWorkBox() {
      this.$router.push(`/class/lecturecourse/homeworkbox/${this.lectureIdx}`)
    },
    onClickNoteBox() {
      this.$router.push(`/class/lecturecourse/notebox/${this.lectureIdx}`)
    },
    onClickRegisterLecturePlan() {
      this.$router.push(
        `/class/lecturecourse/registerlectureplan/${this.lectureIdx}?lecture=${this.lectureInfo.lec_title}&class=${this.lectureInfo.csm_name_list}&teacher=${this.lectureInfo.mem_name}`
      )
    },
    onClickUpdateLecturePlan() {
      this.$router.push(
        `/class/lecturecourse/updatelectureplan/${this.lectureIdx}?lecture=${this.lectureInfo.lec_title}&class=${this.lectureInfo.csm_name_list}&teacher=${this.lectureInfo.mem_name}&lepidx=${this.syllabus.lep_idx}`
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
      if (direction === 'plus') {
        if (current < this.endPageNumber) {
          this.currentPage += 1
        }
      } else if (current > 1) {
        this.currentPage -= 1
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
    onClickCheckBox({ target: { id, checked } }, mem_idx) {
      if (checked) {
        console.log(Number(id), mem_idx)
        const plan = {
          lep_idxs: Number(id),
          mem_idxs: mem_idx,
        }
        this.deleteIdxList.push(plan)
        console.log(this.deleteIdxList)
      } else {
        this.allCheckBoxFlag = false
        const index = this.deleteIdxList.findIndex(
          (x) => x.lep_idxs === Number(id)
        )
        this.deleteIdxList.splice(index, 1)
        console.log(this.deleteIdxList)
      }
    },
    // 강의계획서 삭제 api
    async deleteSyllabus() {
      const payload = {
        data: {
          list: this.deleteIdxList,
        },
      }
      await apiLectureCourse
        .deleteSyllabus(payload)
        .then(() => {
          this.getSyllabusList()
          this.deleteIdxList = []
          this.onCloseDeleteModalDesc()
        })
        .catch((err) => {
          console.log(err)
        })
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
