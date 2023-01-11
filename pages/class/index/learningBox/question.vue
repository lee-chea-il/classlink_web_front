<template>
  <div>
    <!--  3Depth -->
    <ul class="nav nav-tabs depth03">
      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          :class="{ active: $route.fullPath.includes('/question') }"
          to="/class/learningBox/question"
          >질문함</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          :class="{ active: $route.fullPath.includes('/report') }"
          to="/class/learningBox/report"
          >리포트</NuxtLink
        >
      </li>
    </ul>
    <div class="tab-content depth03 ac_manage_que">
      <QuestionListBox
        :filterList="filterList"
        :search.sync="search"
        :allCheck="allCheck"
        :checkList="checkList"
        :askingboxList="askingboxList"
        :answerCheckList="answerCheckList"
        :endPage="endPage"
        :currentPage="currentPage"
        @qa-delete="onClickQuestionDelete"
        @open-quefilter="onOpenQueFilterModal"
        @delete-quefilter="onClickDeleteFilter"
        @search-question="getQuestionList"
        @click-allcheck="onClickQuestionAllCheck"
        @check-question="onClickQuestionCheck"
        @check-answer="onClickAnswerCheck"
        @open-question="onOpenQuestionViewModal"
        @open-reply="onOpenReplyViewModal"
        @prev-page="onClickPrevPage"
        @next-page="onClickNextPage"
        @current-page="onClickCurrentPage"
      />
    </div>

    <QueFilterModal
      :open="openQueFilterModal.open"
      :icuTitle="icuTitle"
      :icuTitleCheck="icuTitleCheck"
      :isTitle="isTitle"
      :isTitleCheck="isTitleCheck"
      @close="onCloseQueFilterModal"
    />

    <QuestionViewModal
      :open="openQuestionViewModal.open"
      :data="questionData"
      @close="onCloseQuestionViewModal"
      @move="onMoveRegistQuestionReply"
    />
    <ReplyViewModal
      :open="openReplyViewModal.open"
      :data="answerData"
      :userPermission="userPermission"
      @close="onCloseReplyViewModal"
      @move="onMoveUpdateQuestionReply"
    />

    <DeleteModal
      :open="deleteModalDesc.open"
      :title="deleteModalDesc.title"
      @delete="deleteQuestionList"
      @close="onCloseDeleteModalDesc"
    />
    <CustomSnackbar :show="openSnackbar.open" :message="message" />
  </div>
</template>

<script>
import QuestionListBox from '@/components/learningBox/QuestionListBox.vue'
import QueFilterModal from '@/components/common/modal/learningbox/QueFilterModal.vue'
import QuestionViewModal from '@/components/common/modal/learningbox/QuestionViewModal.vue'
import ReplyViewModal from '@/components/common/modal/learningbox/ReplyViewModal.vue'
import DeleteModal from '@/components/lecturecourse/DeletePlanModal.vue'
import CustomSnackbar from '@/components/common/CustomSnackbar.vue'
import { apiLeaningBox } from '~/services'
export default {
  name: 'Question',
  components: {
    QuestionListBox,
    QueFilterModal,
    QuestionViewModal,
    ReplyViewModal,
    DeleteModal,
    CustomSnackbar,
  },
  data() {
    return {
      ins_code: this.$store.state.common.user.ins_code,
      userPermission: this.$store.state.common.user.idt_name,
      mem_idx: this.$store.state.common.user.mem_idx,

      openQueFilterModal: {
        open: false,
      },
      openQuestionViewModal: {
        open: false,
      },
      openReplyViewModal: {
        open: false,
      },
      deleteModalDesc: {
        open: false,
        title: '',
      },

      // 스낵바
      openSnackbar: {
        open: false,
      },
      message: '',

      filterList: ['ㅁ'],

      // 질문함 리스트
      askingboxList: [],
      // 질문 상세
      questionData: {
        questionBoxFile: [{}],
        selectQuestionBox: {
          qtb_registration_date: '',
          qtb_update_date: '',
        },
      },
      // 답변상세
      answerData: {
        answerFile: [{}],
        answerList: {
          qba_registration_date: '',
          qba_update_date: '',
        },
      },

      // 학원이 가진 과목이름 목록
      icuTitle: [],
      icuTitleCheck: [],
      // 학원이 가진 강좌이름 목록
      isTitle: [],
      isTitleCheck: [],

      // 체크박스
      allCheck: false,
      checkList: [],
      answerCheckList: [],

      // 리스트 검색
      search: '',

      // 총 페이지 개수
      endPage: 1,
      // 현재 페이지
      currentPage: 1,
      // 다음/이전 페이지 존재 유무
      next: false,
      prev: false,
    }
  },
  watch: {
    currentPage: {
      handler() {
        this.getQuestionList()
      },
      immediate: true,
    },
  },
  methods: {
    // 모달
    onOpenQueFilterModal() {
      this.openQueFilterModal.open = true
    },
    onCloseQueFilterModal() {
      this.openQueFilterModal.open = false
    },
    onOpenQuestionViewModal(qtb_idx) {
      this.openQuestionViewModal.open = true
      this.getSelQuestionbox(qtb_idx)
    },
    onCloseQuestionViewModal() {
      this.openQuestionViewModal.open = false
    },
    onOpenReplyViewModal(qba_idx) {
      this.openReplyViewModal.open = true
      this.getSelAnswer(qba_idx)
    },
    onCloseReplyViewModal() {
      this.openReplyViewModal.open = false
    },

    // 스낵바 모달
    onOpenSnackbar(text) {
      this.openSnackbar.open = true
      this.message = text
    },
    onCloseSnackbar() {
      this.openSnackbar.open = false
      this.message = ''
    },

    // 삭제 모달
    openDeleteModalDesc(tit) {
      this.deleteModalDesc = {
        open: true,
        title: tit,
      }
    },
    onCloseDeleteModalDesc() {
      this.deleteModalDesc.open = false
    },
    deleteQuestionList() {
      this.deleteQuestion()
    },
    // 질문/답변 삭제
    async deleteQuestion() {
      const payloadQuestion = {
        data: {
          list: this.checkList,
        },
      }
      const payloadAnswer = {
        data: {
          list: this.answerCheckList,
        },
      }
      // 질문 삭제
      if (
        this.userPermission.includes('I') &&
        payloadQuestion.data.list.length !== 0
      ) {
        await apiLeaningBox
          .deleteQuestion(payloadQuestion)
          .then(() => {})
          .catch((err) => {
            console.log(err)
          })
      }
      // 답변 삭제
      if (
        !this.userPermission.includes('I') &&
        this.answerCheckList.some((e) => this.mem_idx !== e.mem_idxs) &&
        payloadAnswer.data.list.length === 0
      ) {
        return false
      } else {
        await apiLeaningBox
          .deleteAnswer(payloadAnswer)
          .then(() => {})
          .catch((err) => {
            console.log(err)
          })
      }
      this.checkList = []
      this.answerCheckList = []
      this.onCloseDeleteModalDesc()
      this.getQuestionList()
    },

    // 질문 리스트 api
    async getQuestionList() {
      const payload = {
        checkMine: '',
        current_page: `&current_page=${this.currentPage}`,
        ins_code: `ins_code=${this.ins_code}`,
        keyword: this.search === '' ? '' : `&keyword=${this.search}`,
        lec_idx: `&lec_idx=${1}`,
        per_page_num: `&per_page_num=${10}`,
      }

      await apiLeaningBox
        .getQuestionList(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.askingboxList = data.totaldto
          this.icuTitle = data.icu_title
          this.isTitle = data.is_title

          this.endPage = data.pageMaker.end_page
          this.next = data.pageMaker.next
          this.prev = data.pageMaker.prev
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 질문 상세
    async getSelQuestionbox(qtb_idx) {
      console.log(qtb_idx)
      const payload = {
        ins_code: `ins_code=${this.ins_code}`,
        qtb_idx: `&qtb_idx=${qtb_idx}`,
      }

      await apiLeaningBox
        .getSelQuestionbox(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.questionData = data
          this.getQuestionList()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 답변 상세
    async getSelAnswer(qbaIdx) {
      const payload = {
        ins_code: `ins_code=${this.ins_code}`,
        qba_idx: `&qba_idx=${qbaIdx}`,
      }

      await apiLeaningBox
        .getSelAnswer(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.answerData = data
          this.getQuestionList()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 질문/답변 삭제
    onClickQuestionDelete() {
      if (this.checkList.length === 0 && this.answerCheckList.length === 0) {
        this.onOpenSnackbar('질문을 선택해주세요.')
        setTimeout(() => {
          this.onCloseSnackbar()
        }, 2000)
      } else {
        this.openDeleteModalDesc('질문')
      }
    },

    // 페이지네이션
    onClickCurrentPage(item) {
      this.currentPage = item
    },
    onClickPrevPage() {
      if (this.prev) {
        this.currentPage = this.currentPage - 1
      }
    },
    onClickNextPage() {
      if (this.next) {
        this.currentPage = this.currentPage + 1
      }
    },

    // 질문 체크박스
    onClickQuestionCheck(qtb_idx, mem_idx) {
      // 리스트의 답변 총 개수
      let answervoNum = 0
      for (const item of this.askingboxList) {
        if (item.answervo !== null) {
          answervoNum = answervoNum + item.answervo.length
        }
      }

      if (this.checkList.some((e) => e.qtb_idxs === qtb_idx)) {
        this.checkList = this.checkList.filter(
          (item) => item.qtb_idxs !== qtb_idx
        )

        if (
          this.checkList.length !== this.askingboxList.length ||
          this.answerCheckList.length !== answervoNum
        ) {
          this.allCheck = false
        }
      } else {
        const questionInfo = {
          mem_idxs: mem_idx,
          qtb_idxs: qtb_idx,
        }
        this.checkList.push(questionInfo)

        if (
          this.checkList.length === this.askingboxList.length &&
          this.answerCheckList.length === answervoNum
        ) {
          this.allCheck = true
        }
      }
      console.log(this.checkList)
    },
    // 답변 체크박스
    onClickAnswerCheck(qba_idx, mem_idx) {
      // 리스트의 답변 총 개수
      let answervoNum = 0
      for (const item of this.askingboxList) {
        if (item.answervo !== null) {
          answervoNum = answervoNum + item.answervo.length
        }
      }

      if (this.answerCheckList.some((e) => e.qba_idxs === qba_idx)) {
        this.answerCheckList = this.answerCheckList.filter(
          (item) => item.qba_idxs !== qba_idx
        )

        if (
          this.checkList.length !== this.askingboxList.length ||
          this.answerCheckList.length !== answervoNum
        ) {
          this.allCheck = false
        }
      } else {
        const answerInfo = {
          mem_idxs: mem_idx,
          qba_idxs: qba_idx,
        }
        this.answerCheckList.push(answerInfo)

        if (
          this.checkList.length === this.askingboxList.length &&
          this.answerCheckList.length === answervoNum
        ) {
          this.allCheck = true
        }
      }
      console.log(this.answerCheckList)
    },
    // 질문, 답변 전체 체크
    onClickQuestionAllCheck() {
      if (this.allCheck) {
        this.checkList = []
        this.answerCheckList = []
        this.allCheck = false
      } else {
        this.checkList = []
        this.answerCheckList = []
        for (const item of this.askingboxList) {
          const questionInfo = {
            mem_idxs: item.questionvo.smem_idx,
            qtb_idxs: item.questionvo.qtb_idx,
          }
          this.checkList.push(questionInfo)

          if (item.answervo !== null) {
            for (const items of item.answervo) {
              const answerInfo = {
                mem_idxs: items.mem_idx,
                qba_idxs: items.qba_idx,
              }

              this.answerCheckList.push(answerInfo)
            }
          }
        }
        this.allCheck = true
      }
      console.log(this.checkList, this.answerCheckList)
    },

    // 필터 해제
    onClickDeleteFilter() {
      this.filterList = []
    },

    // router
    // 답변 등록으로 이동
    onMoveRegistQuestionReply(data) {
      console.log(
        this.askingboxList.find(
          (e) => e.questionvo.qtb_idx === data.selectQuestionBox.qtb_idx
        )
      )
      console.log(data.selectQuestionBox.qtb_idx)
      localStorage.setItem(
        'questionData',
        JSON.stringify(data.selectQuestionBox)
      )
      this.$router.push(
        `/class/learningBox/registquestionreply/${data.selectQuestionBox.qtb_idx}`
      )
    },
    // 답변 수정으로 이동
    onMoveUpdateQuestionReply(data) {
      console.log(data)
      localStorage.setItem('answerData', JSON.stringify(data))
      this.$router.push(
        `/class/learningBox/updatequestionreply/${data.answerList.qba_idx}`
      )
    },
  },
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
.table tbody + tbody {
  border-top: 0;
}
</style>
