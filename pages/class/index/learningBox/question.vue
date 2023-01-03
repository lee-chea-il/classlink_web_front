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
      <!-- <div v-if="askingboxList.length === 0" class="tab-pane active">
        [개발참조] 데이터가 없는 경우
        <div class="page_nodata">
          <div class="txt">질문이 없습니다.</div>
          <button
            class="btn btn_crud_point"
            data-toggle="modal"
            data-target="#modalLectureRegi"
          >
            강좌 만들기
          </button>
        </div>
        /.데이터가 없는 경우
      </div> -->
      <div class="tab-pane active">
        <!-- 검색 영역 -->
        <!-- [개발참조] 필터링한 목록이 없는 경우 출력됨 -->
        <div v-if="filterList.length === 0" class="search_section">
          <button class="btn btn_crud_danger" @click="onClickQuestionDelete">
            삭제
          </button>
          <div class="right_area">
            <div class="input-group input-search form-inline form-lec">
              <input
                v-model="search"
                type="text"
                placeholder="키워드 검색"
                class="form-control"
              />
              <div class="input-group-append">
                <button class="btn icons_search_off" type="button"></button>
              </div>
            </div>
            <button class="btn btn_filter" @click="onOpenQueFilterModal">
              필터
            </button>
            <button class="btn btn_crud_default filter_lift" disabled>
              필터 해제
            </button>
          </div>
        </div>

        <!-- [개발참조] 필터링한 목록이 있는 경우 출력됨 -->
        <div v-else class="search_section">
          <div class="left_area">
            <div class="row">
              <div class="keyword_area left_area">
                <div class="keyword_area_01">
                  <span v-for="(item, idx) in 20" :key="idx" class="keyword01">
                    <span class="keyword01-1">내가 한 질문</span
                    ><span class="x cursor"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="right_area">
            <button class="btn btn_crud_danger" @click="onClickQuestionDelete">
              삭제
            </button>
            <div class="input-group input-search form-inline form-lec">
              <input
                v-model="search"
                type="text"
                placeholder="키워드 검색"
                class="form-control"
                @keyup.enter="getQuestionList"
              />
              <div class="input-group-append" @click="getQuestionList">
                <button class="btn icons_search_off" type="button"></button>
              </div>
            </div>
            <button class="btn btn_filter" @click="onOpenQueFilterModal">
              필터
            </button>
            <button class="btn btn_crud_default filter_lift" disabled>
              필터 해제
            </button>
          </div>
        </div>
        <!-- 검색 영역 -->
        <!-- 테이블 영역 -->
        <div class="table_section">
          <table class="table">
            <thead>
              <tr>
                <th>
                  <div class="custom-control custom-checkbox form-inline">
                    <input
                      id="chkAll"
                      :checked="allCheck"
                      type="checkbox"
                      class="custom-control-input"
                      @input="onClickQuestionAllCheck"
                    />
                    <label class="custom-control-label" for="chkAll"></label>
                  </div>
                </th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>강좌</th>
                <th>공개여부</th>
                <th>조회</th>
              </tr>
            </thead>
            <tbody v-for="(item, idx) in askingboxList" :key="idx">
              <tr :class="item.type === 1 ? 'que_reply' : ''">
                <td>
                  <div class="custom-control custom-checkbox form-inline">
                    <input
                      :id="`question${idx}`"
                      type="checkbox"
                      class="custom-control-input"
                      :checked="checkList.includes(item.questionvo.qtb_idx)"
                      @input="onClickQuestionCheck(item.questionvo.qtb_idx)"
                    />
                    <label
                      class="custom-control-label"
                      :for="`question${idx}`"
                    ></label>
                  </div>
                </td>
                <td
                  class="cursor"
                  @click="onOpenQuestionViewModal(item.questionvo.qtb_idx)"
                >
                  <div class="study_qustion">
                    {{ item.questionvo.qtb_title }}
                  </div>
                </td>
                <td>
                  {{
                    item.questionvo.qtb_writer_public_yn
                      ? item.questionvo.mem_name
                      : '비공개'
                  }}
                </td>
                <td>
                  {{
                    item.questionvo.qtb_registration_date
                      .substr(0, 10)
                      .replaceAll('-', '.')
                  }}
                </td>
                <td>{{ item.questionvo.icu_title }}</td>
                <td>
                  {{ item.questionvo.qtb_open_yn ? '공개' : '비공개' }}
                </td>
                <td>{{ item.questionvo.qtb_view_cnt }}</td>
              </tr>
              <tr
                v-for="(items, id) in item.answervo"
                :key="id"
                class="que_reply"
              >
                <td>
                  <div class="custom-control custom-checkbox form-inline">
                    <input
                      :id="`answer${idx}${id}`"
                      type="checkbox"
                      class="custom-control-input"
                      :checked="
                        answerCheckList.some(
                          (e) => e.qba_idxs === items.qba_idx
                        )
                      "
                      @input="onClickAnswerCheck(items.qba_idx, items.mem_idx)"
                    />
                    <label
                      class="custom-control-label"
                      :for="`answer${idx}${id}`"
                    ></label>
                  </div>
                </td>
                <td
                  class="study_qustion"
                  @click="onOpenReplyViewModal(items.qba_idx)"
                >
                  └─ {{ items.qba_title }}
                </td>
                <td>{{ items.mem_name }} 선생님</td>
                <td>
                  {{
                    items.qba_registration_date
                      .substr(0, 10)
                      .replaceAll('-', '.')
                  }}
                </td>
                <td>{{ items.icu_title === null ? '-' : items.icu_title }}</td>
                <td>
                  {{ items.qba_open_yn ? '공개' : '비공개' }}
                </td>
                <td>
                  {{ items.qba_view_cnt === null ? 0 : items.qba_view_cnt }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /.테이블 영역 -->
        <!-- 페이징 영역 -->
        <div class="pagination_section">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link cursor" @click="onClickPrevPage">
                  <span class="previous"></span>
                </a>
              </li>
              <li v-for="(item, idx) in endPage" :key="idx" class="page-item">
                <a
                  class="page-link cursor"
                  :class="{ active: currentPage === item }"
                  @click="onClickCurrentPage(item)"
                  >{{ item }}</a
                >
              </li>
              <li class="page-item">
                <a class="page-link cursor" @click="onClickNextPage">
                  <span class="next"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- /.페이징 영역 -->
      </div>
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
import QueFilterModal from '@/components/common/modal/learningbox/QueFilterModal.vue'
import QuestionViewModal from '@/components/common/modal/learningbox/QuestionViewModal.vue'
import ReplyViewModal from '@/components/common/modal/learningbox/ReplyViewModal.vue'
import DeleteModal from '@/components/lecturecourse/DeletePlanModal.vue'
import CustomSnackbar from '@/components/common/CustomSnackbar.vue'
import { apiLeaningBox } from '~/services'
export default {
  name: 'Question',
  components: {
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
      this.deleteAnswer()
    },
    async deleteAnswer() {
      const payload = {
        data: {
          list: this.answerCheckList,
        },
      }
      console.log(payload)

      if (
        this.userPermission.includes('I') ||
        this.answerCheckList.some((e) => e.mem_idxs === this.mem_idx)
      ) {
        await apiLeaningBox
          .deleteAnswer(payload)
          .then(() => {
            this.answerCheckList = []
            this.checkList = []
            this.onCloseDeleteModalDesc()
            this.getQuestionList()
          })
          .catch((err) => {
            console.log(err)
          })
      }
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
    // 답변상세
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
    onClickQuestionCheck(qtb_idx) {
      if (this.checkList.includes(qtb_idx)) {
        this.checkList = this.checkList.filter((item) => item !== qtb_idx)
        if (this.checkList.length !== this.askingboxList.length) {
          this.allCheck = false
        }
      } else {
        this.checkList.push(qtb_idx)
        if (this.checkList.length === this.askingboxList.length) {
          this.allCheck = true
        }
      }
      console.log(this.checkList)
    },
    // 답변 체크박스
    onClickAnswerCheck(qba_idx, mem_idx) {
      if (this.answerCheckList.some((e) => e.qba_idxs === qba_idx)) {
        this.answerCheckList = this.answerCheckList.filter(
          (item) => item.qba_idxs !== qba_idx
        )
      } else {
        const answerInfo = {
          mem_idxs: mem_idx,
          qba_idxs: qba_idx,
        }
        this.answerCheckList.push(answerInfo)
      }
      console.log(this.answerCheckList)
    },
    // 질문 전체 체크
    onClickQuestionAllCheck() {
      if (this.allCheck) {
        this.checkList = []
        this.answerCheckList = []
        this.allCheck = false
      } else {
        this.checkList = []
        for (let i = 0; i < this.askingboxList.length; i++) {
          this.checkList.push(this.askingboxList[i].questionvo.qtb_idx)
          if (this.askingboxList[i].answervo !== null) {
            for (let j = 0; j < this.askingboxList[i].answervo.length; j++) {
              const answerInfo = {
                mem_idxs: this.askingboxList[i].answervo[j].mem_idx,
                qba_idxs: this.askingboxList[i].answervo[j].qba_idx,
              }

              this.answerCheckList.push(answerInfo)
            }
          }
        }
        this.allCheck = true
      }
      console.log(this.checkList, this.answerCheckList)
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
      this.$router.push(
        `/class/learningBox/registquestionreply/${
          data.selectQuestionBox.qtb_idx
        }?open_yn=${
          this.askingboxList.find(
            (e) => e.questionvo.qtb_idx === data.selectQuestionBox.qtb_idx
          ).questionvo.qtb_open_yn
        }&cstm_idx=${data.selectQuestionBox.cstm_idx}&icu_idx=${
          data.selectQuestionBox.icu_idx
        }`
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
