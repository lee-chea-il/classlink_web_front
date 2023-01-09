<template>
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
            {{ sortChange }}
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" @click="$emit('select-sort', 1)">최신순</a>
            <a class="dropdown-item" @click="$emit('select-sort', 2)"
              >조회 높은 순</a
            >
            <a class="dropdown-item" @click="$emit('select-sort', 3)">이름순</a>
          </div>
        </div>
      </div>
      <div class="right_area">
        <div class="input-group input-search form-inline form-search">
          <input
            v-model="syncSearchText"
            type="text"
            class="form-control"
            placeholder="제목, 내용, 작성자 검색"
            @keyup.enter="$emit('search-notice')"
          />
          <div class="input-group-append">
            <button
              class="btn icons_search_off"
              type="button"
              @click="$emit('search-notice')"
            ></button>
          </div>
        </div>
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
            <th class="width">
              <div class="custom-control custom-checkbox form-inline">
                <input
                  id="chkAll"
                  :checked="allCheck"
                  type="checkbox"
                  class="custom-control-input"
                  @input="$emit('click-allcheck')"
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
                  :id="`${idx}`"
                  type="checkbox"
                  class="custom-control-input"
                  :checked="checkList.includes(item.brd_idx)"
                  @input="$emit('click-checkbox', item.brd_idx)"
                />
                <label class="custom-control-label" :for="`${idx}`"></label>
              </div>
            </td>
            <td class="word">{{ item.brd_title }}</td>
            <td>
              <span
                class="state"
                :class="{
                  warning: setFilterStatus(
                    item?.brd_time_sdate,
                    item?.brd_time_edate
                  )?.includes('D-'),
                }"
              >
                {{ setFilterStatus(item.brd_time_sdate, item.brd_time_edate) }}
              </span>
            </td>
            <td>
              <span class="date">
                {{ item.brd_time_sdate.replaceAll('-', '.').substr(0, 10) }} -
                {{ item.brd_time_edate.replaceAll('-', '.').substr(0, 10)
                }}<br />
                {{ item.brd_time_stime.split(':')[0] >= 12 ? '오후' : '오전' }}
                {{ item.brd_time_stime.substr(0, 5) }} -
                {{ item.brd_time_etime.split(':')[0] >= 12 ? '오후' : '오전' }}
                {{ item.brd_time_etime.substr(0, 5) }}
              </span>
            </td>
            <td>{{ item.mem_name }}</td>
            <td>전체</td>
            <td>
              {{
                item.brd_registration_date.replaceAll('-', '.').substr(0, 10)
              }}
            </td>
            <td>{{ item.brd_view_cnt }}</td>
            <td>
              <button
                id="btnExpand cursor"
                class="btn icons_arrow_dn btn_expand"
                :class="{ up: open_detail.includes(idx) }"
                @click="$emit('click-showContent', idx)"
              ></button>
            </td>
          </tr>
          <!-- 상세 tr [개발참조] 공지사항 상세 TR 펼치고 접기 -->
          <tr v-show="open_detail.includes(idx)" class="tr_expand">
            <td></td>
            <td class="td_expand" colspan="8">
              <div class="file_info">
                <span class="file_icon"></span>
                일반 첨부파일 1개(10KB)
                <span class="save">모두 저장</span>
              </div>
              <div class="file_name">컴플레인 응대 매뉴얼.hwp</div>
              <div class="notice_contents">
                {{ item.brd_content }}
              </div>
              <div class="functional_area">
                <div class="thumbnail_area">
                  <!-- <div
                    class="thumbnail"
                    style="
                      background-image: url('../images/sample_teacher.jpg');
                    "
                  ></div> -->
                  <div
                    v-for="(items, id) in 10"
                    :key="id"
                    class="thumbnail"
                  ></div>
                  <!-- <div class="thumbnail"></div>
												<div class="thumbnail"></div>
												<div class="thumbnail"></div>
												<div class="thumbnail"></div> -->
                  <div class="thumbnail">
                    <div class="more_cover">+3</div>
                  </div>
                </div>
                <div class="btns_area">
                  <button
                    class="btn btn_crud_default"
                    @click="$emit('open-noticeDetail', item)"
                  >
                    상세
                  </button>
                </div>
              </div>
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
            <a class="page-link cursor" @click="$emit('prev-page')">
              <span class="previous"></span>
            </a>
          </li>
          <li v-for="(item, idx) in endPage" :key="idx" class="page-item">
            <a
              class="page-link cursor"
              :class="{ active: item === currentPage }"
              @click="$emit('current-page', item)"
              >{{ item }}</a
            >
          </li>
          <li class="page-item">
            <a class="page-link cursor" @click="$emit('next-page')">
              <span class="next"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /.페이징 영역 -->
  </div>
</template>

<script>
export default {
  name: 'AllNoticeListBox',
  props: {
    sortChange: {
      type: String,
      default: '',
    },
    searchText: {
      type: String,
      default: '',
    },
    allCheck: {
      type: Boolean,
      default: false,
    },
    noticeList: {
      type: Array,
      default: () => [],
    },
    open_detail: {
      type: Array,
      default: () => [],
    },
    checkList: {
      type: Array,
      default: () => [],
    },
    endPage: {
      type: Number,
      default: 1,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    setFilterStatus: {
      type: Function,
      default: () => {},
    },
    beforeExpire: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    syncSearchText: {
      get() {
        return this.searchText
      },
      set(value) {
        this.$emit('update:searchText', value)
      },
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
.notice_contents {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
}
.width {
  width: 70px;
}
</style>
