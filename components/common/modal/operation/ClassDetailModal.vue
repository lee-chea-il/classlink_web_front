<template>
  <Transition name="modal">
    <div
      v-show="open.open"
      id="modalClassDetail"
      class="modal modalIndex modal_ac_manage_cls modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              {{ open.class }}
            </h5>
            <button type="button" class="close" @click="$emit('close-modal')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal_classdetail">
              <!-- 모달 내용 구분 class-->
              <!-- 검색 영역 -->
              <div class="search_section">
                <div class="left_area">
                  <div class="dropdown form-inline">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {{ sortDetailChange }}
                    </button>
                    <div class="dropdown-menu">
                      <a
                        class="dropdown-item cursor"
                        @click="$emit('change-filter', 1)"
                        >최신 등록순</a
                      >
                      <a
                        class="dropdown-item cursor"
                        @click="$emit('change-filter', 2)"
                        >이름 오름차순</a
                      >
                      <a
                        class="dropdown-item cursor"
                        @click="$emit('change-filter', 3)"
                        >이름 내림차순</a
                      >
                      <a
                        class="dropdown-item cursor"
                        @click="$emit('change-filter', 4)"
                        >학년 오름차순</a
                      >
                      <a
                        class="dropdown-item cursor"
                        @click="$emit('change-filter', 5)"
                        >학년 내림차순</a
                      >
                    </div>
                  </div>
                  <div class="dropdown form-inline">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {{ onFilterCheckStdSort() }}
                    </button>
                    <div class="dropdown-menu">
                      <a
                        class="dropdown-item cursor"
                        @click="$emit('change-check', true)"
                        >학생</a
                      >
                      <a
                        class="dropdown-item cursor"
                        @click="$emit('change-check', false)"
                        >학부모</a
                      >
                      <a
                        class="dropdown-item cursor"
                        @click="$emit('change-check', null)"
                        >학부모&학생</a
                      >
                    </div>
                  </div>
                  <div class="dropdown form-inline">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {{ sortStatus ? '활성화' : '비활성화' }}
                    </button>
                    <div class="dropdown-menu">
                      <a
                        class="dropdown-item cursor"
                        @click="$emit('change-status', !sortStatus)"
                      >
                        {{ sortStatus ? '비활성화' : '활성화' }}
                      </a>
                    </div>
                  </div>
                  <div class="dropdown form-inline">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {{ sortAttend ? '재원' : '퇴원' }}
                    </button>
                    <div class="dropdown-menu">
                      <a
                        class="dropdown-item cursor"
                        @click="$emit('change-attend', !sortAttend)"
                      >
                        {{ sortAttend ? '퇴원' : '재원' }}
                      </a>
                    </div>
                  </div>
                  <div class="info_txt">{{ classInfo.length }}명</div>
                </div>
                <div class="right_area">
                  <div class="input-group input-search form-inline">
                    <input
                      v-model="syncedStudentSearch"
                      type="text"
                      class="form-control"
                      placeholder="학생 이름 검색"
                      @keyup.enter="$emit('search')"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                        @click="$emit('search')"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 검색 영역 -->
              <!-- 테이블 영역 -->
              <div class="table_section">
                <table class="table">
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>학년</th>
                      <th>학생 이름</th>
                      <th>ID</th>
                      <th>학생 연락처</th>
                      <th>학부모 연락처</th>
                      <th>상세</th>
                      <th>더보기</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, idx) in classInfo" :key="idx">
                      <td>{{ item.std_idx }}</td>
                      <td>{{ item.std_year }}</td>
                      <td>{{ item.mem_name }}</td>
                      <td>{{ item.mem_id }}</td>
                      <td>
                        {{ item.mem_phone === null ? '-' : item.mem_phone }}
                      </td>
                      <td>
                        {{
                          item.std_parent_phone === null
                            ? '-'
                            : item.std_parent_phone
                        }}
                      </td>
                      <td>
                        <i
                          class="btn icons_zoom_off"
                          @click="$emit('open-student', item.std_idx)"
                        ></i>
                      </td>
                      <td>
                        <i
                          class="btn icons_mu_off more_mu"
                          @click="$emit('click-more', item.std_idx)"
                        >
                          <div
                            v-show="expandIdx.includes(item.std_idx)"
                            class="more_list"
                            :class="
                              expandIdx.includes(item.std_idx)
                                ? 'expand-more'
                                : ''
                            "
                          >
                            <ul>
                              <li @click="$emit('open-lectureInfo')">
                                수강 정보
                              </li>
                              <li @click="$emit('open-attendance', item.id)">
                                출결
                              </li>
                              <li @click="$emit('open-memo')">메모</li>
                              <li @click="$emit('open-reportFilter', item.id)">
                                학습 리포트
                              </li>
                            </ul>
                          </div>
                        </i>
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
                      <a class="page-link cursor" @click="prev">
                        <span class="previous"></span>
                      </a>
                    </li>
                    <li
                      v-for="(item, idx) in detailEndPage"
                      :key="idx"
                      class="page-item"
                    >
                      <a
                        class="page-link cursor"
                        :class="{ active: detailCurrentPage === item }"
                        @click="$emit('current', item)"
                        >{{ item }}</a
                      >
                    </li>
                    <li class="page-item">
                      <a class="page-link cursor" @click="next">
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
      </div>

      <!-- [개발참조] : 이하 모달은 학생관리의 모달 팝업들과 동일 / 겹치는 모달팝업이므로 class="double" 추가 -->
      <!-- 학생 개별 등록/학생 상세 정보 -->
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ClassDetailModal',
  components: {},
  props: {
    open: {
      type: Object,
      default: () => {},
    },
    classInfo: {
      type: Array,
      default: () => [],
    },
    expandIdx: {
      type: Array,
      default: () => [],
    },
    studentInfoModalDesc: {
      type: Object,
      default: () => {},
    },
    detailSearch: {
      type: String,
      default: '',
    },
    sortDetailChange: {
      type: String,
      default: '',
    },
    sortCheckStd: {
      type: Boolean,
      default: true,
    },
    sortStatus: {
      type: Boolean,
      default: true,
    },
    sortAttend: {
      type: Boolean,
      default: true,
    },
    onFilterCheckStdSort: {
      type: Function,
      default: () => {},
    },
    detailCurrentPage: {
      type: Number,
      default: 1,
    },
    detailEndPage: {
      type: Number,
      default: 1,
    },
    next: {
      type: Function,
      default: () => {},
    },
    prev: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    syncedStudentSearch: {
      get() {
        return this.detailSearch
      },
      set(value) {
        this.$emit('update:detailSearch', value)
      },
    },
  },
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
.modalIndex {
  z-index: 998;
}
</style>
