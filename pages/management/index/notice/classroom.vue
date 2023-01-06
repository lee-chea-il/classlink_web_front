<template>
  <div>
    <div class="content_area">
      <!--  3Depth -->
      <CustomPageHeader />
      <div class="tab-content depth03 ac_manage_notice ac_manage_notice_class">
        <ClassroomNoticeListBox
          :sortChange="sortChange"
          :noticeList="noticeList"
          :allCheck="allCheck"
          :open_detail="open_detail"
          @select-sort="onSelectSort"
          @notice-delete="onClickDelete"
          @open-noticeTarget="onOpenClassNoticeTargetModal"
          @click-allcheck="onClickAllCheck"
          @notice-checkbox="onClickCheckBox"
          @open-content="onClickShowContent"
          @open-detail="onOpenNoticeDetailModal"
          @open-confirm="onOpenNoticeConfirmCheckModal"
        />
      </div>
    </div>

    <ShowNoticeConfirmCheck
      :show="openNoticeConfirmCheckModal.open"
      :data="openNoticeConfirmCheckModal.data"
      :openConfirmFilter="open_confirmFilter"
      @onClickConfirm="onClickConfirm"
      @filter-radio="onClickConfirmRadio"
      @close="onCloseNoticeConfirmCheckModal"
    />
    <ShowNoticeDetailModal
      :show="openNoticeDetailModal.open"
      :data="openNoticeDetailModal.data"
      @close="onCloseNoticeDetailModal"
    />
    <ClassNoticeTargetModal
      :show="openClassNoticeTargetModal.open"
      @close="onCloseClassNoticeTargetModal"
    />

    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />
    <DeleteModal
      :open="deleteModalDesc.open"
      :title="deleteModalDesc.title"
      @close="onCloseDeleteModalDesc"
    />

    <CustomSnackbar :show="openSnackbar.open" :message="message" />
  </div>
</template>

<script>
// import PageHeader from '~/components/common/PageHeader.vue'
import ClassroomNoticeListBox from '@/components/notice/ClassroomNoticeListBox.vue'
import CustomPageHeader from '~/components/notice/CustomPageHeader.vue'
import ShowNoticeDetailModal from '~/components/common/modal/notice/ShowNoticeDetailModal.vue'
import ShowNoticeConfirmCheck from '~/components/common/modal/notice/ShowNoticeConfirmCheck.vue'
import ClassNoticeTargetModal from '@/components/common/modal/notice/ClassNoticeTargetModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import DeleteModal from '@/components/lecturecourse/DeletePlanModal.vue'
import CustomSnackbar from '@/components/common/CustomSnackbar.vue'
export default {
  name: 'Classroom',
  components: {
    ClassroomNoticeListBox,
    CustomPageHeader,
    ShowNoticeDetailModal,
    ShowNoticeConfirmCheck,
    ClassNoticeTargetModal,
    ModalDesc,
    DeleteModal,
    CustomSnackbar,
  },
  data() {
    return {
      sortChange: '조회 높은 순',
      pageNumberList: 3,
      currentPage: 1,
      notice: [
        {
          id: 1,
          attributes: {
            title: '컴플레인 이슈사항 공지드립니다.',
            state: 'D-1',
            deadline: {
              startDate: '2022.06.06',
              startTime: '오전 09:00',
              endDate: '2022.08.05',
              endTime: '오후 11:59',
            },
            writer: '홍길동',
            target: '반',
            content:
              '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.  안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
            createdAt: '2022-08-01',
            view_count: 222,
            confirmSearchRadio: 0,
            check: false,
            commentCheck: true,
            comments: [
              {
                name: '빅토리아',
                content:
                  '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
                date: '2022.11.24',
                time: '23:55',
                reply: [
                  {
                    name: '홍길동',
                    content:
                      '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
                    date: '2022.11.24',
                    time: '23:55',
                  },
                ],
              },
              {
                name: '홍길동',
                content:
                  '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
                date: '2022.11.24',
                time: '23:55',
                reply: [],
              },
            ],
            student: [
              {
                name: '홍길동',
                class: '영어심화A',
              },
              {
                name: '강희진',
                class: '영어심화A',
              },
              {
                name: '전미진',
                class: '영어심화A',
              },
              {
                name: '홍길동',
                class: '영어심화A',
              },
            ],
          },
        },
        {
          id: 2,
          attributes: {
            title: '지속적인 컴플레인이 공유드립니다.​',
            state: 'D-2',
            deadline: {
              startDate: '2022.06.06',
              startTime: '오전 09:00',
              endDate: '2022.08.25',
              endTime: '오후 11:59',
            },
            writer: '강희진',
            target: '반',
            content: '안녕하십니까? 학원장입니다.',
            createdAt: '2022-08-01',
            view_count: 87,
            confirmSearchRadio: 0,
            check: false,
            commentCheck: true,
            comments: [],
            student: [
              {
                name: '홍길동',
                class: '영어심화A',
              },
              {
                name: '강희진',
                class: '영어심화A',
              },
              {
                name: '전미진',
                class: '영어심화A',
              },
              {
                name: '홍길동',
                class: '영어심화A',
              },
            ],
          },
        },
        {
          id: 3,
          attributes: {
            title: '컴플레인 이슈사항 공지드립니다.',
            state: 'D-1',
            deadline: {
              startDate: '2022.06.06',
              startTime: '오전 09:00',
              endDate: '2022.08.25',
              endTime: '오후 11:59',
            },
            writer: '홍길동',
            target: '반',
            content: '안녕하십니까? 홍길동 학원장입니다.',
            createdAt: '2022-08-15',
            view_count: 57,
            confirmSearchRadio: 0,
            check: false,
            commentCheck: false,
            comments: [],
            student: [
              {
                name: '홍길동',
                class: '영어심화C',
              },
              {
                name: '강희진',
                class: '영어심화A',
              },
              {
                name: '전미진',
                class: '영어심화B',
              },
              {
                name: '홍길동',
                class: '영어심화A',
              },
            ],
          },
        },
        {
          id: 4,
          attributes: {
            title: '지속적인 컴플레인이 공유드립니다.​',
            state: 'D-3',
            deadline: {
              startDate: '2022.06.06',
              startTime: '오전 09:00',
              endDate: '2022.08.25',
              endTime: '오후 11:59',
            },
            writer: '전미진',
            target: '반',
            content: '안녕하십니까? 홍길동 학원장입니다.',
            createdAt: '2022-09-24',
            view_count: 3,
            confirmSearchRadio: 0,
            check: false,
            commentCheck: false,
            comments: [
              {
                name: '빅토리아',
                content:
                  '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
                date: '2022.11.24',
                time: '23:55',
                reply: [
                  {
                    name: '빅토리아',
                    content:
                      '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
                    date: '2022.11.24',
                    time: '23:55',
                  },
                ],
              },
              {
                name: '빅토리아',
                content:
                  '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
                date: '2022.11.24',
                time: '23:55',
                reply: [],
              },
            ],
            student: [
              {
                name: '홍길동',
                class: '영어심화A',
              },
              {
                name: '강희진',
                class: '영어심화A',
              },
              {
                name: '전미진',
                class: '영어심화A',
              },
              {
                name: '홍길동',
                class: '영어심화A',
              },
            ],
          },
        },
        {
          id: 5,
          attributes: {
            title: '컴플레인 이슈사항 공지드립니다.',
            state: '준비중',
            deadline: {
              startDate: '2022.06.06',
              startTime: '오전 09:00',
              endDate: '2022.08.25',
              endTime: '오후 11:59',
            },
            writer: '심화A',
            target: '반',
            content: '안녕하십니까? 홍길동 학원장입니다.',
            createdAt: '2022-12-01',
            view_count: 16,
            confirmSearchRadio: 0,
            check: false,
            commentCheck: false,
            comments: [
              {
                name: '빅토리아',
                content:
                  '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
                date: '2022.11.24',
                time: '23:55',
                reply: [
                  {
                    name: '빅토리아',
                    content:
                      '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
                    date: '2022.11.24',
                    time: '23:55',
                  },
                ],
              },
              {
                name: '빅토리아',
                content:
                  '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
                date: '2022.11.24',
                time: '23:55',
                reply: [],
              },
            ],
            student: [
              {
                name: '홍길동',
                class: '영어심화A',
              },
              {
                name: '강희진',
                class: '영어심화A',
              },
              {
                name: '전미진',
                class: '영어심화A',
              },
              {
                name: '홍길동',
                class: '영어심화A',
              },
            ],
          },
        },
      ],

      noticeList: [],
      selectNoticeList: [],
      searchText: '',
      searchKeyword: '',
      allCheck: false,
      open_detail: [],
      open_confirmFilter: 0,

      openNoticeConfirmCheckModal: {
        open: false,
        data: {
          confirmFilter: false,
        },
      },
      openNoticeDetailModal: {
        open: false,
        data: {},
        sortation: '반',
      },
      openClassNoticeTargetModal: {
        open: false,
      },

      openSnackbar: {
        open: false,
      },
      message: '',

      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      deleteModalDesc: {
        open: false,
        title: '',
      },
    }
  },
  watch: {
    // allCheck: 'onClickAllCheck',
    noticeList: 'check',
  },
  mounted() {
    this.noticeList = this.notice
  },
  methods: {
    // 스낵바
    onOpenSnackbar(text) {
      this.openSnackbar.open = true
      this.message = text
    },
    onCloseSnackbar() {
      this.openSnackbar.open = false
      this.message = ''
    },
    // 모달
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
    onClickDelete() {
      console.log(this.selectNoticeList.length)
      if (this.selectNoticeList.length === 0) {
        this.onOpenSnackbar('공지사항을 선택해주세요.')
        setTimeout(() => {
          this.onCloseSnackbar()
        }, 2000)
      } else {
        this.openDeleteModalDesc('공지사항')
      }
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

    // 공지사항 컨펌체크 열기
    onOpenNoticeConfirmCheckModal(data) {
      this.openNoticeConfirmCheckModal.open = true
      this.openNoticeConfirmCheckModal.data = data
      console.log(this.openNoticeConfirmCheckModal.data)
    },
    // 공지사항 컨펌체크 닫기
    onCloseNoticeConfirmCheckModal() {
      this.openNoticeConfirmCheckModal.open = false
      this.openNoticeConfirmCheckModal.data = {}
      this.open_confirmFilter = 0
    },

    // 공지사항 상세 열기
    onOpenNoticeDetailModal(data) {
      this.openNoticeDetailModal.open = true
      this.openNoticeDetailModal.data = data
    },
    onCloseNoticeDetailModal() {
      this.openNoticeDetailModal.open = false
      this.openNoticeDetailModal.data = {}
    },

    // 공지대상자설정 열기
    onOpenClassNoticeTargetModal() {
      this.openClassNoticeTargetModal.open = true
    },
    onCloseClassNoticeTargetModal() {
      this.openClassNoticeTargetModal.open = false
    },

    // 자세히보기 열기 닫기
    onClickShowContent(idx) {
      if (this.open_detail.includes(idx)) {
        this.open_detail = this.open_detail.filter((item) => item !== idx)
      } else {
        this.open_detail.push(idx)
      }
    },

    // 컨펌체크 필터 열기 닫기
    onClickConfirm() {
      if (this.open_confirmFilter === 0) {
        this.open_confirmFilter = 1
      } else {
        this.open_confirmFilter = 0
      }
    },

    // 정렬
    onSelectSort(e) {
      if (e.target.innerText === '조회 높은 순') {
        this.sortChange = '조회 높은 순'
        this.noticeList = this.noticeList.sort((a, b) => {
          return b.attributes.view_count - a.attributes.view_count
        })
      } else if (e.target.innerText === '최신순') {
        this.sortChange = '최신순'
        this.noticeList = this.noticeList.sort(
          (a, b) =>
            new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
        )
      } else {
        this.sortChange = '이름순'
        this.noticeList = this.noticeList.sort((a, b) => {
          if (a.attributes.writer > b.attributes.writer) return 1
          if (a.attributes.writer < b.attributes.writer) return -1
          return 0
        })
      }
    },

    // 공지사항 검색
    onClickSearchNotice() {
      if (this.searchText.length < 2) {
        this.openModalDesc('검색 실패', '검색어는 2글자 이상 입력해주세요.')
      } else {
        const result = this.notice.filter((elem) => {
          return (
            elem.attributes.title.includes(this.searchText) ||
            elem.attributes.content.includes(this.searchText) ||
            elem.attributes.writer.includes(this.searchText)
          )
        })
        if (result.length === 0) {
          this.openModalDesc('검색 실패', '일치하는 공지사항이 없습니다.')
          return false
        } else {
          this.noticeList = result
        }
      }
    },

    // 컨펌체크 필터 검색
    onClickSearchKeyword() {
      if (this.student.name === '') {
        this.noticeList.student = this.notice.student
      } else if (this.student.name.length === 1) {
        return false
      } else {
        this.noticeList.student = this.notice.student.filter((elem) => {
          return elem.attributes.student.includes(this.searchKeyword)
        })
      }
    },

    // 체크박스 모두 선택
    onClickAllCheck() {
      if (!this.allCheck) {
        this.selectNoticeList.splice(0, 10)
        for (let i = 0; i < this.noticeList.length; i++) {
          this.noticeList[i].attributes.check = true
          this.selectNoticeList.push(i)
        }
      } else {
        for (let i = 0; i < this.noticeList.length; i++) {
          this.noticeList[i].attributes.check = false
          this.selectNoticeList.pop()
        }
      }
      console.log(this.selectNoticeList)
    },
    // 공지사항 삭제
    onClickCheckBox(data) {
      if (data.attributes.check) {
        data.attributes.check = false
        this.selectNoticeList = this.selectNoticeList.filter(
          (item) => item !== data.id - 1
        )
        if (this.selectNoticeList.length !== 5) {
          this.allCheck = false
        }
      } else {
        data.attributes.check = true
        this.selectNoticeList.push(data.id - 1)
        if (this.selectNoticeList.length === 5) {
          this.allCheck = true
        }
      }
      console.log(this.selectNoticeList)
      // if (this.noticeList[id - 1].attributes.check) {
      //   this.noticeList[id - 1].attributes.check = false
      //   this.selectNoticeList = this.selectNoticeList.filter((item) => item !== )
      // } else {
      //   this.noticeList[id - 1].attributes.check = true
      //   this.selectNoticeList.push(id - 1)
      // }
    },

    check() {
      if (this.selectNoticeList.length === 5) {
        this.allCheck = true
      } else {
        this.allCheck = false
      }
    },

    // 컨펌체크 필터 반, 학생 선택
    onClickConfirmRadio({ target: { id } }, data) {
      // console.log(id)
      if (id === 'radio01') {
        data.confirmSearchRadio = 0
      } else if (id === 'radio02') {
        data.confirmSearchRadio = 1
      }
      // console.log(this.noticeList)
    },
  },
}
</script>

<style scoped>
.table tbody + tbody {
  border-top: 0;
}
.CommentItem--reply {
  border-top: 0.4px solid #d1d3d4 !important;
}
.word {
  max-width: 525px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.cursor {
  cursor: pointer;
}
</style>
