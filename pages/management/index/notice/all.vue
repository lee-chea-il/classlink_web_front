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
          @current-page="onClickCurrentPage"
          @prev-page="onClickPrevPage"
          @next-page="onClickNextPage"
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
  </div>
</template>

<script>
// import PageHeader from '~/components/common/PageHeader.vue'
import AllNoticeListBox from '@/components/notice/AllNoticeListBox.vue'
import CustomPageHeader from '~/components/notice/CustomPageHeader.vue'
import ShowNoticeDetailModal from '~/components/common/modal/notice/ShowNoticeDetailModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import { apiNotice } from '~/services'
export default {
  name: 'All',
  components: {
    AllNoticeListBox,
    CustomPageHeader,
    ShowNoticeDetailModal,
    ModalDesc,
  },
  data() {
    return {
      // 필터
      sortChange: '최신순',
      sortFilter: 1,

      // 총 페이지 개수
      endPage: 3,
      // 현재 페이지
      currentPage: 1,
      // 다음/이전 페이지 여부
      next: false,
      prev: false,

      // 공지사항 리스트
      noticeList: [
        {
          brd_time_sdate: '',
          brd_time_stime: '',
          brd_time_edate: '',
          brd_time_etime: '',
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

      // 공지 상세 모달
      openNoticeDetailModal: {
        open: false,
        data: {},
      },

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
      this.open_detail = []

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
          this.next = data.pageMaker.next
          this.prev = data.pageMaker.prev
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 상태 필터
    setFilterStatus(sdate, edate) {
      const today = new Date()
      const start = new Date(sdate)
      const end = new Date(edate)

      const dayCount = Math.floor(
        (today.getTime() - end.getTime()) / (1000 * 60 * 60 * 24)
      )

      if (today < start) {
        return '준비중'
      } else if (today > end) {
        return '만료'
      } else if (dayCount >= -3) {
        return `D${dayCount}`
      } else {
        return ''
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

    // 페이지네이션
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
    onClickCurrentPage(item) {
      this.currentPage = item
    },
  },
}
</script>

<style scoped></style>
