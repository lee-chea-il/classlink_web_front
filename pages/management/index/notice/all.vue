<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <CustomPageHeader
        title1="전체"
        title2="반"
        title3="개인"
        url1="/management/notice/all"
        url2="/management/notice/class"
        url3="/management/notice/individual"
      />
      <div class="tab-content depth03 ac_manage_notice">
        <div class="tab-pane active">
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="left_area">
              <div class="dropdown form-inline">
                <select class="btn dropdown-toggle" @change="onSelectSort">
                  <option class="dropdown-item" value="조회수 높은 순">
                    조회수 높은 순
                  </option>
                  <option class="dropdown-item" value="최신순">최신순</option>
                  <option class="dropdown-item" value="이름순">이름순</option>
                </select>
              </div>
              <button class="btn btn_crud_default" @click="onClickDelete">
                삭제
              </button>
            </div>
            <div class="right_area">
              <div class="input-group input-search form-inline form-search">
                <input
                  v-model="searchText"
                  type="text"
                  class="form-control"
                  placeholder="제목, 내용, 작성자 검색"
                  @keyup.enter="onClickSearchNotice"
                />
                <div class="input-group-append">
                  <button
                    class="btn icons_search_off"
                    type="button"
                    @click="onClickSearchNotice"
                  ></button>
                </div>
              </div>
              <NuxtLink
                class="btn btn_crud_point"
                to="/management/notice/regist/all"
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
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        :id="`${item.id}`"
                        v-model="item.attributes.check"
                        type="checkbox"
                        class="custom-control-input"
                        @input="onClickCheckBox($event)"
                      />
                      <label
                        class="custom-control-label"
                        :for="`${item.id}`"
                      ></label>
                    </div>
                  </td>
                  <td>{{ item.attributes.title }}</td>
                  <td>
                    <span
                      class="state"
                      :class="{
                        warning: item.attributes.state.substr(0, 2) === 'D-',
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
                      :class="{ up: item.attributes.showContent }"
                      @click="onClickShowContent(idx)"
                    ></button>
                  </td>
                </tr>
                <!-- 상세 tr [개발참조] 공지사항 상세 TR 펼치고 접기 -->
                <tr
                  v-show="item.attributes.showContent"
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
                        <!-- <div
                          class="thumbnail"
                          style="
                            background-image: url('../images/sample_teacher.jpg');
                          "
                        ></div> -->
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <!-- <div class="thumbnail"></div>
												<div class="thumbnail"></div>
												<div class="thumbnail"></div>
												<div class="thumbnail"></div> -->
                        <div class="thumbnail">
                          <div class="more_cover">+3</div>
                        </div>
                      </div>
                      <div class="btns_area">
                        <NuxtLink
                          class="btn btn_crud_default"
                          :to="`/management/notice/modify/all/${item.id}`"
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
                <!-- <tr>
                  <td>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chk01"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chk01"></label>
                    </div>
                  </td>
                  <td>컴플레인 이슈사항 공지드립니다</td>
                  <td><span class="state warning">D-3</span></td>
                  <td>
                    <span class="date">
                      2022.06.06 - 2022.08.05<br />
                      오전 09:00 - 오후 11:59
                    </span>
                  </td>
                  <td>홍길동</td>
                  <td>전체</td>
                  <td>2022.08.01</td>
                  <td>222</td>
                  <td>
                    <button class="btn icons_arrow_dn btn_expand"></button>
                  </td>
                </tr> -->
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
      @onClickConfirm="onClickConfirm"
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
  </div>
</template>

<script>
// import PageHeader from '~/components/common/PageHeader.vue'
import CustomPageHeader from '~/components/common/custom/CustomPageHeader.vue'
import ShowNoticeDetailModal from '~/components/common/modal/notice/ShowNoticeDetailModal.vue'
import ShowNoticeConfirmCheck from '~/components/common/modal/notice/ShowNoticeConfirmCheck.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'

export default {
  name: 'All',
  components: {
    CustomPageHeader,
    ShowNoticeDetailModal,
    ShowNoticeConfirmCheck,
    ModalDesc,
  },
  data() {
    return {
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
            target: '전체',
            content:
              '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.  안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
            createdAt: '2022-08-01',
            view_count: 222,
            showContent: false,
            confirmFilter: false,
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
            showContent: false,
            confirmFilter: false,
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
            showContent: false,
            confirmFilter: false,
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
            showContent: false,
            confirmFilter: false,
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
            showContent: false,
            confirmFilter: false,
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
      searchText: '',
      searchKeyword: '',
      allCheck: false,

      openNoticeConfirmCheckModal: {
        open: false,
        data: {
          confirmFilter: false,
        },
      },
      openNoticeDetailModal: {
        open: false,
        data: {},
      },
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
    }
  },
  watch: {
    allCheck: 'onClickAllCheck',
    check() {
      if (this.selectNoticeList.length === 5) {
        this.allCheck = true
      } else {
        this.allCheck = false
      }
    },
  },
  mounted() {
    this.noticeList = this.notice
  },
  methods: {
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
    onCloseNoticeConfirmCheckModal() {
      this.openNoticeConfirmCheckModal.open = false
      this.openNoticeConfirmCheckModal.data = {}
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
      if (this.noticeList[idx].attributes.showContent === false) {
        this.noticeList[idx].attributes.showContent = true
      } else {
        this.noticeList[idx].attributes.showContent = false
      }
    },

    // 컨펌체크 필터 열기 닫기
    onClickConfirm() {
      if (this.openNoticeConfirmCheckModal.data.confirmFilter === false) {
        this.openNoticeConfirmCheckModal.data.confirmFilter = true
      } else {
        this.openNoticeConfirmCheckModal.data.confirmFilter = false
      }
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
      if (this.allCheck === true) {
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
    onClickCheckBox({ target: { id } }) {
      if (this.noticeList[id - 1].attributes.check) {
        this.noticeList[id - 1].attributes.check = false
        this.selectNoticeList.splice(id - 1, 1)
      } else {
        this.noticeList[id - 1].attributes.check = true
        this.selectNoticeList.push(id - 1)
      }
    },

    onClickDelete() {
      console.log(this.selectNoticeList.length)
      if (this.selectNoticeList.length === 0) {
        this.openModalDesc('공지사항 삭제', '삭제할 공지사항을 선택해주세요.')
      }
    },
  },
}
</script>

<style scoped>
.table tbody + tbody {
  border-top: 0;
}
</style>
