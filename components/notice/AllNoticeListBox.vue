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
            <a class="dropdown-item" @click="$emit('select-sort', $event)"
              >조회 높은 순</a
            >
            <a class="dropdown-item" @click="$emit('select-sort', $event)"
              >최신순</a
            >
            <a class="dropdown-item" @click="$emit('select-sort', $event)"
              >이름순</a
            >
          </div>
        </div>
        <button class="btn btn_crud_danger" @click="$emit('notice-delete')">
          삭제
        </button>
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
        <NuxtLink class="btn btn_crud_point" to="/management/notice/regist/all"
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
                  :id="`${item.id}`"
                  v-model="item.attributes.check"
                  type="checkbox"
                  class="custom-control-input"
                  @input="onClickCheckBox(item)"
                />
                <label class="custom-control-label" :for="`${item.id}`"></label>
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
                id="btnExpand cursor"
                class="btn icons_arrow_dn btn_expand"
                :class="{ up: open_detail.includes(idx) }"
                @click="$emit('click-showContent', idx)"
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
                    @click="$emit('open-noticeDetail', item.attributes)"
                  >
                    상세
                  </button>
                  <button
                    class="btn btn_crud_default"
                    @click="$emit('open-confirmCheck', item.attributes)"
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
  max-width: 525px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.cursor {
  cursor: pointer;
}
</style>
