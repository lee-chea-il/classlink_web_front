<template>
  <div>
    <div class="content_area">
      <!--  3Depth -->
      <CustomPageHeader />
      <div class="tab-content depth03 ac_manage_notice">
        <FranchiseNoticeListBox
          :sortChange="sortChange"
          :noticeList="noticeList"
          :open_detail="open_detail"
          @select-sort="onSelectSort"
          @open-content="onClickShowContent"
          @open-noticeDetail="onOpenNoticeDetailModal"
        />
      </div>
    </div>

    <ShowNoticeDetailModal
      :show="openNoticeDetailModal.open"
      :data="openNoticeDetailModal.data"
      @close="onCloseNoticeDetailModal"
    />
  </div>
</template>

<script>
import FranchiseNoticeListBox from '@/components/notice/FranchiseNoticeListBox.vue'
import CustomPageHeader from '~/components/notice/CustomPageHeader.vue'
import ShowNoticeDetailModal from '~/components/common/modal/notice/ShowNoticeDetailModal.vue'
export default {
  name: 'Franchise',
  components: {
    FranchiseNoticeListBox,
    CustomPageHeader,
    ShowNoticeDetailModal,
  },
  data() {
    return {
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
            target: '전체',
            content:
              '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.  안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
            createdAt: '2022-08-01',
            view_count: 222,
            confirmSearchRadio: 0,
            check: false,
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
            target: '전체',
            content: '안녕하십니까? 학원장입니다.',
            createdAt: '2022-08-01',
            view_count: 87,
            confirmSearchRadio: 0,
            check: false,
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
            target: '전체',
            content: '안녕하십니까? 홍길동 학원장입니다.',
            createdAt: '2022-08-15',
            view_count: 57,
            confirmSearchRadio: 0,
            check: false,
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
            target: '전체',
            content: '안녕하십니까? 홍길동 학원장입니다.',
            createdAt: '2022-09-24',
            view_count: 3,
            confirmSearchRadio: 0,
            check: false,
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
            target: '전체',
            content: '안녕하십니까? 홍길동 학원장입니다.',
            createdAt: '2022-12-01',
            view_count: 16,
            confirmSearchRadio: 0,
            check: false,
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
      open_detail: [],

      sortChange: '조회 높은 순',

      openNoticeDetailModal: {
        open: false,
        data: {},
        sortation: '클래스링크',
      },
    }
  },
  created() {
    this.noticeList = this.notice
  },
  methods: {
    // 자세히보기 열기 닫기
    onClickShowContent(idx) {
      if (this.open_detail.includes(idx)) {
        this.open_detail = this.open_detail.filter((item) => item !== idx)
      } else {
        this.open_detail.push(idx)
      }
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

    // 정렬
    onSelectSort(e) {
      if (e.target.innerText === '조회 높은 순') {
        this.sortChange = e.target.innerText
        this.noticeList = this.noticeList.sort((a, b) => {
          return b.attributes.view_count - a.attributes.view_count
        })
      } else if (e.target.innerText === '최신순') {
        this.sortChange = e.target.innerText
        this.noticeList = this.noticeList.sort(
          (a, b) =>
            new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
        )
      } else {
        this.sortChange = e.target.innerText
        this.noticeList = this.noticeList.sort((a, b) => {
          if (a.attributes.writer > b.attributes.writer) return 1
          if (a.attributes.writer < b.attributes.writer) return -1
          return 0
        })
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
  max-width: 525px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.cursor {
  cursor: pointer;
}
</style>
