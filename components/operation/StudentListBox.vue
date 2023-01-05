<template>
  <div class="tab-pane active">
    <!-- [개발참조] 등q록된 학생이 없는 경우 -- -->
    <!-- <div v-if="studentList.length === 0" class="nothing_txt">
      <div class="txt">
        등록된 학생이 없습니다.<br />
        먼저 학생을 등록해주세요.
      </div>
      <div class="btn_area">
        <button
          class="btn btn_regi_studentsall"
          @click="$emit('click-batchStudent')"
        >
          학생 일괄 등록
        </button>
        <button class="btn btn_regi_student" @click="$emit('click-addStudent')">
          학생 개별 등록
        </button>
      </div>
    </div> -->
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
            {{ rangeList[isRangeFlag - 1].title }}
          </button>
          <div class="dropdown-menu">
            <a
              v-for="(item, idx) in rangeList"
              :key="idx"
              class="dropdown-item"
              href="#"
              @click="$emit('select-range', item.id)"
              >{{ item.title }}</a
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
            {{ identityList[isIdentityFlag - 1].title }}
          </button>
          <div class="dropdown-menu">
            <a
              v-for="(item, idx) in identityList"
              :key="idx"
              class="dropdown-item"
              href="#"
              @click="$emit('select-identity', item.id)"
              >{{ item.title }}</a
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
            {{ isStatusFlag ? '활성화' : '비활성화' }}
          </button>
          <div class="dropdown-menu">
            <a
              v-for="(item, idx) in statusList"
              :key="idx"
              class="dropdown-item"
              href="#"
              @click="$emit('select-status', item.value)"
              >{{ item.title }}</a
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
            {{ isStudentStatusFlag ? '재원' : '퇴원' }}
          </button>
          <div class="dropdown-menu">
            <a
              v-for="(item, idx) in studentStatusList"
              :key="idx"
              class="dropdown-item"
              href="#"
              @click="$emit('select-studentStatus', item.value)"
              >{{ item.title }}</a
            >
          </div>
        </div>
        <div class="info_txt">{{ studentList.length }}명</div>
      </div>
      <div class="right_area">
        <div class="input-group input-search form-inline">
          <input
            type="text"
            class="form-control"
            placeholder="학생 이름 검색"
            :value="searchStudentText"
            @input="$emit('change-input', $event)"
            @keyup.enter="$emit('search-student')"
          />
          <div class="input-group-append">
            <button
              class="btn icons_search_off"
              type="button"
              @click="$emit('search-student')"
            ></button>
          </div>
        </div>
        <button
          class="btn btn_regi_studentsall"
          @click="$emit('click-batchStudent')"
        >
          학생 일괄 등록
        </button>
        <button class="btn btn_regi_student" @click="$emit('click-addStudent')">
          학생 개별 등록
        </button>
      </div>
    </div>
    <!-- 검색 영역 -->
    <!-- 테이블 영역 -->
    <div class="table_section">
      <table class="table">
        <thead>
          <tr>
            <th>번호</th>
            <th>신분</th>
            <th>상태</th>
            <th>학년</th>
            <th>학생 이름</th>
            <th>닉네임</th>
            <th>일촌</th>
            <th>ID</th>
            <th>학생 연락처</th>
            <th>학부모 연락처</th>
            <th>상세</th>
            <th>더보기</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in studentList" :key="idx">
            <td>{{ item.std_idx }}</td>
            <td>
              <i v-if="item.std_grade === 'P'" class="icons_parent"></i>
              <i v-if="item.std_grade === 'F'" class="icons_parentstd"></i>
            </td>
            <td>{{ setStatusName(item.itm_status) }}</td>
            <td>{{ item.std_year }}</td>
            <td>{{ item.mem_name }}</td>
            <td>{{ item.mem_nickname }}</td>
            <td class="first_cousin">
              {{ setFamilyNameList(item.family_names) }}
            </td>
            <td>{{ item.mem_id }}</td>
            <td>{{ item.mem_phone }}</td>
            <td>{{ item.std_parent_phone }}</td>
            <td>
              <i
                class="btn icons_zoom_off"
                @click="$emit('click-detail', item.std_idx)"
              ></i>
            </td>
            <td>
              <i
                class="btn icons_mu_off more_mu"
                @click="$emit('click-more', item.std_idx)"
              >
                <div
                  class="more_list"
                  style="display: none"
                  :class="expandIdx.includes(item.std_idx) ? 'expand-more' : ''"
                >
                  <ul>
                    <li @click="$emit('click-lectureInfo')">수강 정보</li>
                    <li @click="$emit('click-attendance', item.id)">출결</li>
                    <li @click="$emit('click-memo')">메모</li>
                    <li @click="$emit('click-report', item.id)">학습 리포트</li>
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
          <li class="page-item cursor">
            <a class="page-link" @click="$emit('click-direction', 'minus')">
              <span class="previous"></span>
            </a>
          </li>
          <li
            v-for="(item, idx) in endPageNumber"
            :key="idx"
            class="page-item cursor"
          >
            <a
              class="page-link"
              :class="item === currentPage ? 'active' : ''"
              @click="$emit('click-page', item)"
              >{{ item }}</a
            >
          </li>
          <li class="page-item cursor">
            <a class="page-link" @click="$emit('click-direction', 'plus')">
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
  name: 'StudentListBox',
  props: {
    identityList: {
      type: Array,
      default: () => [],
    },
    statusList: {
      type: Array,
      default: () => [],
    },
    studentStatusList: {
      type: Array,
      default: () => [],
    },
    rangeList: {
      type: Array,
      default: () => [],
    },
    studentList: {
      type: Array,
      default: () => [],
    },
    isRangeFlag: {
      type: Number,
      default: 0,
    },
    isIdentityFlag: {
      type: Number,
      default: 0,
    },
    isStatusFlag: {
      type: Boolean,
      default: true,
    },
    isStudentStatusFlag: {
      type: Boolean,
      default: true,
    },
    searchStudentText: {
      type: String,
      default: '',
    },
    expandIdx: {
      type: Array,
      default: () => [],
    },
    endPageNumber: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    setFamilyNameList(array) {
      if (array !== null) {
        const nameList = []
        for (const value of array) {
          nameList.push(value)
        }
        return nameList.join(', ')
      }
    },
    setStatusName(number) {
      let answer = ''
      switch (number) {
        case '01':
          answer = '퇴원'
          break
        case '02':
          answer = '재원'
          break
        case '03':
          answer = '휴먼'
          break
        case '99':
          answer = '거절'
          break

        default:
      }
      return answer
    },
  },
}
</script>
<style scoped>
.expand-more {
  display: block !important;
}
.cursor {
  cursor: pointer;
}
</style>
