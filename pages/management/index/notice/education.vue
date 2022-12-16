<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->

      <CustomPageHeader />
      <div class="tab-content depth03 ac_manage_notice">
        <div class="tab-pane active">
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="left_area">
              <div class="dropdown form-inline">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  조회 높은 순
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">조회 높은 순</a>
                  <a class="dropdown-item" href="#">최신순</a>
                  <a class="dropdown-item" href="#">이름순</a>
                </div>
              </div>
              <button class="btn btn_crud_danger" @click="onClickDelete">
                삭제
              </button>
            </div>
            <div class="right_area">
              <div class="input-group input-search form-inline form-search">
                <input
                  type="text"
                  class="form-control"
                  placeholder="제목, 내용, 작성자 검색"
                />
                <div class="input-group-append">
                  <button class="btn icons_search_off" type="button"></button>
                </div>
              </div>
              <NuxtLink
                to="/management/notice/regist/education"
                class="btn btn_crud_point"
                >등록</NuxtLink
              >
            </div>
          </div>
          <!-- /.검색 영역 -->
          <!-- 테이블 영역 -->
          <!-- [개발참조] 데이터 없을 경우 
					<div class="page_nodata">
						등록된 공지사항이 없습니다.
					</div>
					-->
          <div class="table_section">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chkAll"
                        v-model="allCheck"
                        type="checkbox"
                        class="custom-control-input"
                        @input="onClickAllCheck"
                      />
                      <label class="custom-control-label" for="chkAll"></label>
                    </div>
                  </th>
                  <th>제목</th>
                  <th>상태</th>
                  <th>기한</th>
                  <th>작성자</th>
                  <th>대상</th>
                  <th>게시일</th>
                  <th>조회</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-if="noticeList.length === 0">
                <tr>
                  <td colspan="9">
                    <div class="page_nodata">등록된 공지사항이 없습니다.</div>
                  </td>
                </tr>
              </tbody>

              <tbody v-for="(item, idx) in noticeList" v-else :key="idx">
                <tr class="cursor" @click="onClickShowContent(idx)">
                  <td>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        :id="`${item.id}`"
                        v-model="item.attributes.check"
                        type="checkbox"
                        class="custom-control-input"
                        @input="onClickCheckBox(item)"
                      />
                      <label
                        class="custom-control-label"
                        :for="`${item.id}`"
                      ></label>
                    </div>
                  </td>
                  <td class="word">{{ item.attributes.title }}</td>
                  <td>
                    <span
                      class="state"
                      :class="{
                        warning: item.attributes.state.includes('D-'),
                      }"
                    >
                      {{ item.attributes.state }}
                    </span>
                  </td>
                  <td>
                    <span class="date">
                      {{ item.attributes.deadline.startDate }} -
                      {{ item.attributes.deadline.endDate }}<br />
                      {{ item.attributes.deadline.startTime }} -
                      {{ item.attributes.deadline.endTime }}
                    </span>
                  </td>
                  <td>{{ item.attributes.writer }}</td>
                  <td>{{ item.attributes.target }}</td>
                  <td>{{ item.attributes.createdAt }}</td>
                  <td>{{ item.attributes.view_count }}</td>
                  <td>
                    <button
                      id="btnExpand"
                      class="btn icons_arrow_dn btn_expand"
                      :class="{ up: open_detail.includes(idx) }"
                    ></button>
                  </td>
                </tr>
                <!-- 상세 tr [개발참조] 공지사항 상세 TR 펼치고 접기 -->
                <tr
                  v-show="open_detail.includes(idx)"
                  id="trExpand"
                  class="tr_expand"
                >
                  <td></td>
                  <td class="td_expand" colspan="8">
                    <div class="file_info">
                      <span class="file_icon"></span>
                      일반 첨부파일 1개(10KB)
                      <span class="save">모두 저장</span>
                    </div>
                    <div class="file_name">컴플레인 응대 매뉴얼.hwp</div>
                    <div class="notice_contents">
                      {{ item.attributes.content }}
                    </div>
                    <div class="functional_area">
                      <div class="thumbnail_area">
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail">
                          <div class="more_cover">+3</div>
                        </div>
                      </div>
                      <div class="btns_area">
                        <NuxtLink
                          :to="`/management/notice/modify/education/${item.id}`"
                          class="btn btn_crud_default"
                          >수정</NuxtLink
                        >
                        <button
                          class="btn btn_crud_default"
                          @click="onOpenNoticeDetailModal(item.attributes)"
                        >
                          상세
                        </button>
                        <button
                          class="btn btn_crud_default"
                          @click="
                            onOpenNoticeConfirmCheckModal(item.attributes)
                          "
                        >
                          컨펌체크
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <!-- /.상세 tr -->
              </tbody>
            </table>
          </div>
          <!-- /.테이블 영역 -->
          <!-- 페이징 영역 -->
          <div class="pagination_section">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span class="previous"></span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span class="next"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- /.페이징 영역 -->
        </div>
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
import ShowNoticeDetailModal from '~/components/common/modal/notice/ShowNoticeDetailModal.vue'
import ShowNoticeConfirmCheck from '~/components/common/modal/notice/ShowNoticeConfirmCheck.vue'
import CustomPageHeader from '~/components/notice/CustomPageHeader.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import DeleteModal from '@/components/lecturecourse/DeletePlanModal.vue'
import CustomSnackbar from '@/components/common/CustomSnackbar.vue'
export default {
  name: 'Education',
  components: {
    CustomPageHeader,
    ShowNoticeDetailModal,
    ShowNoticeConfirmCheck,
    ModalDesc,
    DeleteModal,
    CustomSnackbar,
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
      selectNoticeList: [],
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
        sortation: '교육기관',
      },

      // 스낵바
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
  created() {
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

    // 정렬
    onSelectSort(e) {
      if (e.target.value === '조회수 높은 순') {
        this.noticeList = this.noticeList.sort((a, b) => {
          return b.attributes.view_count - a.attributes.view_count
        })
      } else if (e.target.value === '최신순') {
        this.noticeList = this.noticeList.sort(
          (a, b) =>
            new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
        )
      } else {
        this.noticeList = this.noticeList.sort((a, b) => {
          if (a.attributes.writer > b.attributes.writer) return 1
          if (a.attributes.writer < b.attributes.writer) return -1
          return 0
        })
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
