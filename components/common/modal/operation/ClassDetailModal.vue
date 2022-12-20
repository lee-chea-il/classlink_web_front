<template>
  <Transition name="modal">
    <div
      v-show="open.open"
      id="modalClassDetail"
      class="modal modal_ac_manage_cls modal-mask"
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
                      재원
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item cursor">퇴원</a>
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
                      <td>{{ item.mem_phone }}</td>
                      <td>{{ item.std_parent_phone }}</td>
                      <td>
                        <i
                          class="btn icons_zoom_off"
                          @click="$emit('open', item)"
                        ></i>
                      </td>
                      <td>
                        <i
                          class="btn icons_mu_off more_mu"
                          @click="$emit('open-detail', idx)"
                        >
                          <div v-if="modalDetailMore === idx" class="more_list">
                            <ul>
                              <li
                                data-toggle="modal"
                                data-target="#modalMoreCourse"
                              >
                                수강 정보
                              </li>
                              <li
                                data-toggle="modal"
                                data-target="#modalMoreAttendance"
                              >
                                출결
                              </li>
                              <li
                                data-toggle="modal"
                                data-target="#modalMoreMemo"
                              >
                                메모
                              </li>
                              <li
                                data-toggle="modal"
                                data-target="#modalMoreReports"
                              >
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
      <StudentInfoModal
        :studentInfo="studentInfo"
        :open="studentInfoModalDesc.open"
        :nickNameCheck="nickNameCheck"
        :familySearchText="familySearchText"
        @close="$emit('close')"
        @change-input="$emit('change-input')"
        @click-birthday="$emit('click-birthday')"
        @click-lecturedate="$emit('click-lecturedate')"
        @click-identity="$emit('click-identity')"
        @click-grade="$emit('click-grade')"
        @click-adult="$emit('click-adult')"
        @click-men="$emit('click-men')"
        @click-women="$emit('click-women')"
        @click-statusTrue="$emit('click-statusTrue')"
        @click-statusFalse="$emit('click-statusFalse')"
        @click-stuStatusTrue="$emit('click-stuStatusTrue')"
        @click-stuStatusFalse="$emit('click-stuStatusFalse')"
        @select-grade="$emit('select-grade')"
        @click-profile="$emit('click-profile')"
        @click-deleteFamily="$emit('click-deleteFamily')"
        @change-familyInput="$emit('change-familyInput')"
        @search-family="$emit('search-family')"
      />
    </div>
  </Transition>
</template>

<script>
import StudentInfoModal from '@/components/common/modal/operation/StudentInfoModal.vue'
export default {
  name: 'ClassDetailModal',
  components: {
    StudentInfoModal,
  },
  props: {
    open: {
      type: Object,
      default: () => {},
    },
    classInfo: {
      type: Array,
      default: () => [],
    },
    studentInfo: {
      type: Object,
      default: () => {},
    },
    modalDetailMore: {
      type: Number,
      default: 0,
    },
    studentInfoModalDesc: {
      type: Object,
      default: () => {},
    },
    nickNameCheck: {
      type: Boolean,
      default: false,
    },
    familySearchText: {
      type: String,
      default: '',
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
</style>
