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
      sortChange: '?????? ?????? ???',
      pageNumberList: 3,
      currentPage: 1,
      notice: [
        {
          id: 1,
          attributes: {
            title: '???????????? ???????????? ??????????????????.',
            state: 'D-1',
            deadline: {
              startDate: '2022.06.06',
              startTime: '?????? 09:00',
              endDate: '2022.08.05',
              endTime: '?????? 11:59',
            },
            writer: '?????????',
            target: '???',
            content:
              '??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????. ??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????. ??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????. ??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????. ??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????. ??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????.  ??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????. ??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????. ??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????. ??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????. ??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????.',
            createdAt: '2022-08-01',
            view_count: 222,
            confirmSearchRadio: 0,
            check: false,
            commentCheck: true,
            comments: [
              {
                name: '????????????',
                content:
                  '??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????.',
                date: '2022.11.24',
                time: '23:55',
                reply: [
                  {
                    name: '?????????',
                    content:
                      '??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????.',
                    date: '2022.11.24',
                    time: '23:55',
                  },
                ],
              },
              {
                name: '?????????',
                content:
                  '??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????.',
                date: '2022.11.24',
                time: '23:55',
                reply: [],
              },
            ],
            student: [
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
            ],
          },
        },
        {
          id: 2,
          attributes: {
            title: '???????????? ??????????????? ??????????????????.???',
            state: 'D-2',
            deadline: {
              startDate: '2022.06.06',
              startTime: '?????? 09:00',
              endDate: '2022.08.25',
              endTime: '?????? 11:59',
            },
            writer: '?????????',
            target: '???',
            content: '??????????????????? ??????????????????.',
            createdAt: '2022-08-01',
            view_count: 87,
            confirmSearchRadio: 0,
            check: false,
            commentCheck: true,
            comments: [],
            student: [
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
            ],
          },
        },
        {
          id: 3,
          attributes: {
            title: '???????????? ???????????? ??????????????????.',
            state: 'D-1',
            deadline: {
              startDate: '2022.06.06',
              startTime: '?????? 09:00',
              endDate: '2022.08.25',
              endTime: '?????? 11:59',
            },
            writer: '?????????',
            target: '???',
            content: '??????????????????? ????????? ??????????????????.',
            createdAt: '2022-08-15',
            view_count: 57,
            confirmSearchRadio: 0,
            check: false,
            commentCheck: false,
            comments: [],
            student: [
              {
                name: '?????????',
                class: '????????????C',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????B',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
            ],
          },
        },
        {
          id: 4,
          attributes: {
            title: '???????????? ??????????????? ??????????????????.???',
            state: 'D-3',
            deadline: {
              startDate: '2022.06.06',
              startTime: '?????? 09:00',
              endDate: '2022.08.25',
              endTime: '?????? 11:59',
            },
            writer: '?????????',
            target: '???',
            content: '??????????????????? ????????? ??????????????????.',
            createdAt: '2022-09-24',
            view_count: 3,
            confirmSearchRadio: 0,
            check: false,
            commentCheck: false,
            comments: [
              {
                name: '????????????',
                content:
                  '??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????.',
                date: '2022.11.24',
                time: '23:55',
                reply: [
                  {
                    name: '????????????',
                    content:
                      '??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????.',
                    date: '2022.11.24',
                    time: '23:55',
                  },
                ],
              },
              {
                name: '????????????',
                content:
                  '??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????.',
                date: '2022.11.24',
                time: '23:55',
                reply: [],
              },
            ],
            student: [
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
            ],
          },
        },
        {
          id: 5,
          attributes: {
            title: '???????????? ???????????? ??????????????????.',
            state: '?????????',
            deadline: {
              startDate: '2022.06.06',
              startTime: '?????? 09:00',
              endDate: '2022.08.25',
              endTime: '?????? 11:59',
            },
            writer: '??????A',
            target: '???',
            content: '??????????????????? ????????? ??????????????????.',
            createdAt: '2022-12-01',
            view_count: 16,
            confirmSearchRadio: 0,
            check: false,
            commentCheck: false,
            comments: [
              {
                name: '????????????',
                content:
                  '??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????.',
                date: '2022.11.24',
                time: '23:55',
                reply: [
                  {
                    name: '????????????',
                    content:
                      '??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????.',
                    date: '2022.11.24',
                    time: '23:55',
                  },
                ],
              },
              {
                name: '????????????',
                content:
                  '??????????????????? ????????? ??????????????????. ???????????? ?????? ???????????? ??????????????????.',
                date: '2022.11.24',
                time: '23:55',
                reply: [],
              },
            ],
            student: [
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????A',
              },
              {
                name: '?????????',
                class: '????????????A',
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
        sortation: '???',
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
    // ?????????
    onOpenSnackbar(text) {
      this.openSnackbar.open = true
      this.message = text
    },
    onCloseSnackbar() {
      this.openSnackbar.open = false
      this.message = ''
    },
    // ??????
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
        this.onOpenSnackbar('??????????????? ??????????????????.')
        setTimeout(() => {
          this.onCloseSnackbar()
        }, 2000)
      } else {
        this.openDeleteModalDesc('????????????')
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

    // ???????????? ???????????? ??????
    onOpenNoticeConfirmCheckModal(data) {
      this.openNoticeConfirmCheckModal.open = true
      this.openNoticeConfirmCheckModal.data = data
      console.log(this.openNoticeConfirmCheckModal.data)
    },
    // ???????????? ???????????? ??????
    onCloseNoticeConfirmCheckModal() {
      this.openNoticeConfirmCheckModal.open = false
      this.openNoticeConfirmCheckModal.data = {}
      this.open_confirmFilter = 0
    },

    // ???????????? ?????? ??????
    onOpenNoticeDetailModal(data) {
      this.openNoticeDetailModal.open = true
      this.openNoticeDetailModal.data = data
    },
    onCloseNoticeDetailModal() {
      this.openNoticeDetailModal.open = false
      this.openNoticeDetailModal.data = {}
    },

    // ????????????????????? ??????
    onOpenClassNoticeTargetModal() {
      this.openClassNoticeTargetModal.open = true
    },
    onCloseClassNoticeTargetModal() {
      this.openClassNoticeTargetModal.open = false
    },

    // ??????????????? ?????? ??????
    onClickShowContent(idx) {
      if (this.open_detail.includes(idx)) {
        this.open_detail = this.open_detail.filter((item) => item !== idx)
      } else {
        this.open_detail.push(idx)
      }
    },

    // ???????????? ?????? ?????? ??????
    onClickConfirm() {
      if (this.open_confirmFilter === 0) {
        this.open_confirmFilter = 1
      } else {
        this.open_confirmFilter = 0
      }
    },

    // ??????
    onSelectSort(e) {
      if (e.target.innerText === '?????? ?????? ???') {
        this.sortChange = '?????? ?????? ???'
        this.noticeList = this.noticeList.sort((a, b) => {
          return b.attributes.view_count - a.attributes.view_count
        })
      } else if (e.target.innerText === '?????????') {
        this.sortChange = '?????????'
        this.noticeList = this.noticeList.sort(
          (a, b) =>
            new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
        )
      } else {
        this.sortChange = '?????????'
        this.noticeList = this.noticeList.sort((a, b) => {
          if (a.attributes.writer > b.attributes.writer) return 1
          if (a.attributes.writer < b.attributes.writer) return -1
          return 0
        })
      }
    },

    // ???????????? ??????
    onClickSearchNotice() {
      if (this.searchText.length < 2) {
        this.openModalDesc('?????? ??????', '???????????? 2?????? ?????? ??????????????????.')
      } else {
        const result = this.notice.filter((elem) => {
          return (
            elem.attributes.title.includes(this.searchText) ||
            elem.attributes.content.includes(this.searchText) ||
            elem.attributes.writer.includes(this.searchText)
          )
        })
        if (result.length === 0) {
          this.openModalDesc('?????? ??????', '???????????? ??????????????? ????????????.')
          return false
        } else {
          this.noticeList = result
        }
      }
    },

    // ???????????? ?????? ??????
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

    // ???????????? ?????? ??????
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
    // ???????????? ??????
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

    // ???????????? ?????? ???, ?????? ??????
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
