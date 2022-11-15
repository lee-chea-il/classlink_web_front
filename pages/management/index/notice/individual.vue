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
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  조회 높은 순
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" @click="onClickSortViewCount"
                    >조회 높은 순</a
                  >
                  <a class="dropdown-item" @click="onClickSortLatest">최신순</a>
                  <a class="dropdown-item" @click="onClickSortName">이름순</a>
                </div>
              </div>
              <button class="btn btn_crud_default">삭제</button>
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
                to="/management/notice/regist/individual"
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
                        :id="`chk${item.id}`"
                        v-model="item.attributes.check"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        :for="`chk${item.id}`"
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
                          to="/management/notice/individual"
                          >수정</NuxtLink
                        >
                        <button
                          class="btn btn_crud_default"
                          data-toggle="modal"
                          :data-target="`.modalNoticeView${item.id}`"
                        >
                          상세
                        </button>
                        <button
                          class="btn btn_crud_default"
                          data-toggle="modal"
                          :data-target="`.modalNoticeConfirm${item.id}`"
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

    <div v-for="(item, idx) in noticeList" :key="idx">
      <ShowNoticeDetailModal
        :idx="item.id"
        :content="item.attributes.content"
      />
      <ShowNoticeConfirmCheck
        :id="item.id"
        :confirmFilter="item.attributes.confirmFilter"
        :student="item.attributes.student"
        @onClickConfirm="onClickConfirm"
      />
    </div>
  </div>
</template>

<script>
// import PageHeader from '~/components/common/PageHeader.vue'
import CustomPageHeader from '~/components/common/custom/CustomPageHeader.vue'
import ShowNoticeDetailModal from '~/components/common/modal/notice/ShowNoticeDetailModal.vue'
import ShowNoticeConfirmCheck from '~/components/common/modal/notice/ShowNoticeConfirmCheck.vue'

export default {
  name: 'Individual',
  components: {
    CustomPageHeader,
    ShowNoticeDetailModal,
    ShowNoticeConfirmCheck,
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
            state: '준비중',
            deadline: {
              startDate: '2022.06.06',
              startTime: '오전 09:00',
              endDate: '2022.08.05',
              endTime: '오후 11:59',
            },
            writer: '홍길동',
            target: '개인',
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
            state: 'D-1',
            deadline: {
              startDate: '2022.06.06',
              startTime: '오전 09:00',
              endDate: '2022.08.25',
              endTime: '오후 11:59',
            },
            writer: '강희진',
            target: '개인',
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
            state: 'D-2',
            deadline: {
              startDate: '2022.06.06',
              startTime: '오전 09:00',
              endDate: '2022.08.25',
              endTime: '오후 11:59',
            },
            writer: '홍길동',
            target: '개인',
            content: '안녕하십니까? 홍길동 학원장입니다.',
            createdAt: '2022-12-01',
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
            state: 'D-1',
            deadline: {
              startDate: '2022.06.06',
              startTime: '오전 09:00',
              endDate: '2022.08.25',
              endTime: '오후 11:59',
            },
            writer: '전미진',
            target: '개인',
            content: '안녕하십니까? 홍길동 학원장입니다.',
            createdAt: '2022-08-01',
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
            state: 'D-3',
            deadline: {
              startDate: '2022.06.06',
              startTime: '오전 09:00',
              endDate: '2022.08.25',
              endTime: '오후 11:59',
            },
            writer: '심화A',
            target: '개인',
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
      searchText: '',
      searchKeyword: '',
      allCheck: false,
    }
  },
  watch: {
    allCheck: 'onClickAllCheck',
  },
  mounted() {
    this.noticeList = this.notice
  },
  methods: {
    onClickShowContent(idx) {
      if (this.noticeList[idx].attributes.showContent === false) {
        this.noticeList[idx].attributes.showContent = true
      } else {
        this.noticeList[idx].attributes.showContent = false
      }
    },

    // 더보기 열기 닫기
    onClickConfirm(idx) {
      if (this.noticeList[idx - 1].attributes.confirmFilter === false) {
        this.noticeList[idx - 1].attributes.confirmFilter = true
      } else {
        this.noticeList[idx - 1].attributes.confirmFilter = false
      }
    },

    // 정렬
    onClickSortViewCount() {
      this.noticeList = this.noticeList.sort((a, b) => {
        return b.attributes.view_count - a.attributes.view_count
      })
    },
    onClickSortLatest() {
      this.noticeList = this.noticeList.sort(
        (a, b) =>
          new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
      )
    },
    onClickSortName() {
      this.noticeList = this.noticeList.sort((a, b) => {
        if (a.attributes.writer > b.attributes.writer) return 1
        if (a.attributes.writer < b.attributes.writer) return -1
        return 0
      })
    },

    // 공지사항 검색
    onClickSearchNotice() {
      if (this.searchText === '') {
        this.noticeList = this.notice
      } else if (this.searchText.length === 1) {
        console.log('error')
      } else {
        this.noticeList = this.notice.filter((elem) => {
          return (
            elem.attributes.title.includes(this.searchText) ||
            elem.attributes.content.includes(this.searchText) ||
            elem.attributes.writer.includes(this.searchText)
          )
        })
      }
    },

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

    onClickAllCheck() {
      if (this.allCheck === true) {
        for (let i = 0; i < this.noticeList.length; i++) {
          this.noticeList[i].attributes.check = true
        }
      } else {
        for (let i = 0; i < this.noticeList.length; i++) {
          this.noticeList[i].attributes.check = false
        }
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
