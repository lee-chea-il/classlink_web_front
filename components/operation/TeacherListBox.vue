<template>
  <div class="tab-pane active">
    <!-- 컨트롤 버튼 영역 -->
    <div class="search_section">
      <div class="left_area">
        <button class="btn btn_crud_danger" @click="$emit('delete')">
          삭제
        </button>
        <div class="info_box">
          활성화 {{ stateTrue }}명 비활성화 {{ stateFalse }}명
        </div>
      </div>
      <div class="right_area">
        <button class="btn btn_crud_point" @click="$emit('click-register')">
          선생님 등록
        </button>
      </div>
    </div>
    <!-- /.컨트롤 버튼 영역 -->
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
            {{
              sortFlag === 1
                ? '최신 등록순'
                : sortFlag === 2
                ? '이름 오름차순'
                : '이름 내림차순'
            }}
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" @click="$emit('click-sort', 1)"
              >최신 등록순</a
            >
            <a class="dropdown-item" @click="$emit('click-sort', 2)"
              >이름 오름차순</a
            >
            <a class="dropdown-item" @click="$emit('click-sort', 3)"
              >이름 내림차순</a
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
            {{ stateFlag ? '활성화' : '비활성화' }}
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#" @click="$emit('click-state')">{{
              stateFlag ? '비활성화' : '활성화'
            }}</a>
            <!-- <a class="dropdown-item" href="#">활성화</a>
            <a class="dropdown-item" href="#">비활성화</a> -->
          </div>
        </div>
      </div>
      <div class="right_area">
        <div class="input-group input-search form-inline">
          <input
            type="text"
            class="form-control"
            placeholder="선생님 이름 검색"
            @input="$emit('change-input', $event)"
            @keyup.enter="$emit('search-teacher')"
          />
          <div class="input-group-append">
            <button
              class="btn icons_search_off"
              type="button"
              @click="$emit('search-teacher')"
            ></button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.검색 영역 -->
    <!-- 테이블 영역 -->
    <div class="table_section">
      <table class="table">
        <thead>
          <tr>
            <th>
              <div class="custom-control custom-checkbox form-inline">
                <input
                  id="chkAll"
                  type="checkbox"
                  class="custom-control-input"
                  :checked="deleteIdxList.length === 10"
                  @input="$emit('checked-all', $event)"
                />
                <label class="custom-control-label" for="chkAll"></label>
              </div>
            </th>
            <th>선생님 이름</th>
            <th>닉네임</th>
            <th>ID</th>
            <th>담당 과목</th>
            <th>소속 그룹</th>
            <th>연락처</th>
            <th>상세</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in teacherList" :key="idx">
            <td>
              <div class="custom-control custom-checkbox form-inline">
                <input
                  :id="`tch_${item.mem_idx}`"
                  name="chk"
                  type="checkbox"
                  class="custom-control-input"
                  :checked="
                    deleteIdxList.map((x) => x.mem_idx).includes(item.mem_idx)
                  "
                  @input="$emit('select-teacher', $event)"
                />
                <label
                  class="custom-control-label"
                  :for="`tch_${item.mem_idx}`"
                ></label>
              </div>
            </td>
            <td>
              <span>{{ item.mem_name }}</span> 선생님
            </td>
            <td>{{ item.mem_nickname }}</td>
            <td>{{ item.mem_id }}</td>
            <td>{{ setSubjectArray(item.subject_list) }}</td>
            <td>{{ setTargetArray(item.teach_target) }}</td>
            <td>{{ item.mem_phone }}</td>
            <td>
              <i
                class="btn icons_zoom_off"
                @click="$emit('click-detail', item.mem_idx)"
              ></i>
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
  name: 'TeacherListBox',
  props: {
    stateTrue: {
      type: Number,
      default: 0,
    },
    stateFalse: {
      type: Number,
      default: 0,
    },
    teacherList: {
      type: Array,
      default: () => [],
    },
    allCheckBoxFlag: {
      type: Boolean,
      default: false,
    },
    stateFlag: {
      type: Boolean,
      default: true,
    },
    sortFlag: {
      type: Number,
      default: 1,
    },
    deleteIdxList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // 배열 join
    setSubjectArray(array) {
      if (array !== null) {
        if (array.length !== 0) {
          const names = []
          for (const x of array) {
            names.push(x.is_title)
          }
          return names.join(', ')
        } else {
          return '-'
        }
      } else {
        return '-'
      }
    },
    setTargetName(initial) {
      let answer = ''
      switch (initial) {
        case '01':
          answer = '초등'
          break
        case '02':
          answer = '중등'
          break
        case '03':
          answer = '고등'
          break
        case '04':
          answer = '대학생'
          break
        case '05':
          answer = '성인'
          break
        default:
      }
      return answer
    },
    setTargetArray(array) {
      if (array !== null) {
        if (array.length !== 0) {
          const names = []
          for (const x of array) {
            names.push(this.setTargetName(x.ttm_target))
          }
          return names.join(', ')
        } else {
          return '-'
        }
      } else {
        return '-'
      }
    },
  },
}
</script>
<style scoped></style>
