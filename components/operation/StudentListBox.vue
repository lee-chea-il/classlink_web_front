<template>
  <div class="tab-pane active">
    <!-- [개발참조] 등q록된 학생이 없는 경우 -- -->
    <div v-if="studentList.length === 0" class="nothing_txt">
      <div class="txt">
        등록된 학생이 없습니다.<br />
        먼저 학생을 등록해주세요.
      </div>
      <div class="btn_area">
        <button class="btn btn_regi_studentsall">학생 일괄 등록</button>
        <button class="btn btn_regi_student">학생 개별 등록</button>
      </div>
    </div>
    <!-- 검색 영역 -->
    <div v-else class="search_section">
      <div class="left_area">
        <div class="dropdown form-inline">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            최신 등록순
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">최신 등록순</a>
            <a class="dropdown-item" href="#">이름 오름차순</a>
            <a class="dropdown-item" href="#">이름 내림차순</a>
            <a class="dropdown-item" href="#">학년 오름차순</a>
            <a class="dropdown-item" href="#">학년 내림차순</a>
          </div>
        </div>
        <div class="dropdown form-inline">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            학생
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">학생</a>
            <a class="dropdown-item" href="#">학부모</a>
            <a class="dropdown-item" href="#">학부모&학생</a>
          </div>
        </div>
        <div class="dropdown form-inline">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            활성화
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">활성화</a>
            <a class="dropdown-item" href="#">비활성화</a>
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
            <a class="dropdown-item" href="#">재원</a>
            <a class="dropdown-item" href="#">퇴원</a>
          </div>
        </div>
        <div class="info_txt">9,999명</div>
      </div>
      <div class="right_area">
        <div class="input-group input-search form-inline">
          <input
            type="text"
            class="form-control"
            placeholder="학생 이름 검색"
          />
          <div class="input-group-append">
            <button class="btn icons_search_off" type="button"></button>
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
            <td>{{ item.id }}</td>
            <td>
              <i v-if="item.identity === '학부모'" class="icons_parent"></i>
              <i
                v-if="item.identity === '학부모&학생'"
                class="icons_parentstd"
              ></i>
            </td>
            <td>{{ item.status }}</td>
            <td>{{ item.grade }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.nickname }}</td>
            <td>{{ setFamilyNameList(item.family) }}</td>
            <td>{{ item.account }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.parent_phone }}</td>
            <td>
              <i
                class="btn icons_zoom_off"
                @click="$emit('click-detail', item.id)"
              ></i>
            </td>
            <td>
              <i class="btn icons_mu_off more_mu">
                <div class="more_list" style="display: none">
                  <ul>
                    <li data-toggle="modal" data-target="#modalMoreCourse">
                      수강 정보
                    </li>
                    <li data-toggle="modal" data-target="#modalMoreAttendance">
                      출결
                    </li>
                    <li data-toggle="modal" data-target="#modalMoreMemo">
                      메모
                    </li>
                    <li data-toggle="modal" data-target="#modalMoreReports">
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
  name: 'StudentListBox',
  props: {
    studentList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setFamilyNameList(array) {
      const nameList = []
      for (const value of array) {
        nameList.push(value.name)
      }
      return nameList.join(', ')
    },
  },
}
</script>
<style scoped></style>
