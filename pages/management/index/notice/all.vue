<template>
  <div>
    <div class="content_area">
      <!--  3Depth -->
      <CustomPageHeader />
      <div class="tab-content depth03 ac_manage_notice">
        <AllNoticeListBox
          :sortChange="sortChange"
          :searchText.sync="searchText"
          :allCheck="allCheck"
          :noticeList="noticeList"
          :open_detail="open_detail"
          :checkList="checkList"
          :endPage="endPage"
          :currentPage="currentPage"
          :setFilterStatus="setFilterStatus"
          @select-sort="onSelectSort"
          @search-notice="getAllNoticeList"
          @click-allcheck="onClickAllCheck"
          @click-checkbox="onClickCheckBox"
          @click-showContent="onClickShowContent"
          @open-noticeDetail="onOpenNoticeDetailModal"
          @open-confirmCheck="onOpenNoticeConfirmCheckModal"
        />
      </div>
    </div>

    <ShowNoticeDetailModal
      :show="openNoticeDetailModal.open"
      :data="openNoticeDetailModal.data"
      :setFilterStatus="setFilterStatus"
      @close="onCloseNoticeDetailModal"
    />
    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />

    <CustomSnackbar :show="openSnackbar.open" :message="message" />
  </div>
</template>

<script>
// import PageHeader from '~/components/common/PageHeader.vue'
import AllNoticeListBox from '@/components/notice/AllNoticeListBox.vue'
import CustomPageHeader from '~/components/notice/CustomPageHeader.vue'
import ShowNoticeDetailModal from '~/components/common/modal/notice/ShowNoticeDetailModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import CustomSnackbar from '@/components/common/CustomSnackbar.vue'
import { apiNotice } from '~/services'
export default {
  name: 'All',
  components: {
    AllNoticeListBox,
    CustomPageHeader,
    ShowNoticeDetailModal,
    ModalDesc,
    CustomSnackbar,
  },
  data() {
    return {
      sortChange: '최신순',
      sortFilter: 1,

      endPage: 3,
      currentPage: 1,

      // 공지사항 리스트
      noticeList: [
        {
          brd_time_sdate: '',
          brd_time_edate: '',
          brd_registration_date: '',
          brd_view_cnt: 0,
          mem_name: '',
        },
      ],
      // 리스트 검색
      searchText: '',
      // 체크박스 전체 선택
      allCheck: false,
      checkList: [],
      open_detail: [],
      open_confirmFilter: 0,

      openNoticeDetailModal: {
        open: false,
        data: {},
      },

      // 스낵바
      openSnackbar: {
        open: false,
      },
      message: '',

      // 모달
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
    }
  },
  watch: {
    currentPage: {
      handler() {
        this.getAllNoticeList()
      },
      immediate: true,
    },
    sortFilter: {
      handler() {
        this.getAllNoticeList()
      },
      immediate: false,
    },
  },
  methods: {
    // 공지사항 전체 api
    async getAllNoticeList() {
      const payload = {
        current_page: `?current_page=${this.currentPage}`,
        filter: this.sortFilter === 1 ? '' : `&filter=${this.sortFilter}`,
        keyword: this.searchText === '' ? '' : `&keyword=${this.searchText}`,
      }

      await apiNotice
        .getAllNoticeList(payload)
        .then(({ data: { data } }) => {
          this.noticeList = data.listAll
          this.endPage = data.pageMaker.end_page
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 상태 필터
    setFilterStatus(sdate, edate) {
      if (new Date() < new Date(sdate)) {
        return '준비중'
      } else if (
        Math.floor(
          (new Date().getTime() - new Date(edate).getTime()) /
            (1000 * 60 * 60 * 24)
        ) >= -3
      ) {
        return `D${Math.floor(
          (new Date().getTime() - new Date(edate).getTime()) /
            (1000 * 60 * 60 * 24)
        )}`
      } else if (new Date() > new Date(edate)) {
        return '만료'
      }
    },

    // 정렬
    onSelectSort(num) {
      if (num === 1) {
        this.sortChange = '최신순'
      } else if (num === 2) {
        this.sortChange = '조회 높은 순'
      } else {
        this.sortChange = '이름순'
      }
      this.sortFilter = num
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
        this.checkList = []
        for (let i = 0; i < this.noticeList.length; i++) {
          this.checkList.push(this.noticeList[i].brd_idx)
        }
        this.allCheck = true
      } else {
        this.checkList = []
        this.allCheck = false
      }
      console.log(this.checkList)
    },
    // 공지사항 삭제
    onClickCheckBox(idx) {
      if (this.checkList.includes(idx)) {
        this.checkList = this.checkList.filter((item) => item !== idx)
        if (this.checkList.length !== this.noticeList.length) {
          this.allCheck = false
        }
      } else {
        this.checkList.push(idx)
        if (this.checkList.length === this.noticeList.length) {
          this.allCheck = true
        }
      }
      console.log(this.checkList)
    },

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
      console.log(data)
      this.openNoticeDetailModal.open = true
      this.openNoticeDetailModal.data = data
    },
    onCloseNoticeDetailModal() {
      this.openNoticeDetailModal.open = false
      this.openNoticeDetailModal.data = {}
    },

    // 자세히보기 열기 닫기
    onClickShowContent(idx) {
      if (this.open_detail.includes(idx)) {
        this.open_detail = this.open_detail.filter((item) => item !== idx)
      } else {
        this.open_detail.push(idx)
      }
    },
  },
}
</script>

<style scoped>
.table tbody + tbody {
  border-top: 0;
}
.word {
  max-width: 250px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.cursor {
  cursor: pointer;
}
</style>
