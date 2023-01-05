<template>
  <div>
    <!-- [개발참조] 등록된 학생이 없는 경우 -->
    <div v-if="classListB.length === 0" class="nothing_txt">
      <div class="txt">
        등록된 반이 없습니다.<br />
        먼저 반을 등록해주세요.
      </div>
      <div class="btn_area">
        <button class="btn btn_crud_point" @click="onOpenClassRegist()">
          반 만들기
        </button>
      </div>
    </div>
    <!-- /.등록된 학생이 없는 경우 -->

    <div v-else class="tab-pane active">
      <!-- 컨트롤 버튼 영역 -->
      <div class="search_section">
        <div class="left_area">
          <div class="btn btn_crud_default" @click="$emit('class-copy')">
            복사
          </div>
          <button class="btn btn_crud_default" @click="$emit('class-move')">
            이동
          </button>
          <button class="btn btn_crud_danger" @click="$emit('class-delete')">
            삭제
          </button>
          <!-- [개발참조]toasts 메세지 '반을 선택해주세요.'' : 아무런 반을 체크하지 않고 복사를 누르면 -->
        </div>
        <div class="right_area">
          <button class="btn btn_crud_point" @click="$emit('class-regist')">
            반 만들기
          </button>
          <button
            class="btn btn_crud_default"
            @click="$emit('unallocation-student')"
          >
            배정 X
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
              {{ sortTeacherSelect }}
            </button>
            <div class="dropdown-menu">
              <a
                class="dropdown-item cursor"
                @click="$emit('sort-teacher', $event)"
              >
                선생님 전체
              </a>
              <a
                v-for="(item, idx) in teacherList"
                :key="idx"
                class="dropdown-item cursor"
                @click="$emit('sort-teacher', $event, item.tch_idx)"
              >
                {{ item.mem_name }} 선생님
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
              {{ sortNumberSelect }}
            </button>
            <div class="dropdown-menu">
              <a
                class="dropdown-item cursor"
                @click="$emit('sort-number', $event)"
                >10개씩 보기</a
              >
              <a
                class="dropdown-item cursor"
                @click="$emit('sort-number', $event)"
                >100개씩 보기</a
              >
              <a
                class="dropdown-item cursor"
                @click="$emit('sort-number', $event)"
                >200개씩 보기</a
              >
            </div>
          </div>
        </div>
        <div class="right_area">
          <div class="custom-control custom-radio custom-control-inline">
            <input
              id="radio01"
              type="radio"
              name="radio00"
              class="custom-control-input"
              checked
              @input="$emit('search-radio', true)"
            />
            <label class="custom-control-label" for="radio01">반</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              id="radio02"
              type="radio"
              name="radio00"
              class="custom-control-input"
              @input="$emit('search-radio', false)"
            />
            <label class="custom-control-label" for="radio02">이름</label>
            <!-- <label class="custom-control-label" for="radio02">학생</label> -->
          </div>
          <div class="input-group input-search form-inline">
            <input
              v-model="syncSearchText"
              type="text"
              placeholder="반 이름 검색"
              class="form-control"
              @keyup.enter="$emit('search-classlist')"
            />
            <div class="input-group-append" @click="$emit('search-classlist')">
              <button class="btn icons_search_off" type="button"></button>
            </div>
          </div>
        </div>
      </div>
      <!-- 검색 영역 -->
      <!-- 테이블 영역 -->
      <div class="table_section">
        <table class="table">
          <!-- <colgroup>
								<col width="80">
								<col>
								<col>
								<col>
								<col width="80">
								<col width="80">
								<col width="80">
							</colgroup> -->
          <thead>
            <tr>
              <th>
                <div class="custom-control custom-checkbox form-inline">
                  <input
                    id="chkAll"
                    type="checkbox"
                    class="custom-control-input"
                    :checked="allCheck"
                    @input="$emit('click-allcheck')"
                  />
                  <label class="custom-control-label" for="chkAll"></label>
                </div>
              </th>
              <th>반</th>
              <th>학생 수</th>
              <th>담당 선생님</th>
              <th>수정</th>
              <th>상세</th>
              <th>이동</th>
            </tr>
          </thead>
          <Draggable
            v-model="syncClassList"
            class="drag-box"
            tag="tbody"
            animation="200"
            draggable=".classList"
            handle=".icons_move_off"
            @start="$emit('drag-start')"
            @change="$emit('drag-change', $event)"
          >
            <tr v-for="(item, idx) in classList" :key="idx" class="classList">
              <td>
                <div class="custom-control custom-checkbox form-inline">
                  <input
                    :id="idx"
                    type="checkbox"
                    class="custom-control-input"
                    :checked="checkList.includes(item.csm_idx)"
                    @input="$emit('click-checkbox', item.csm_idx)"
                  />
                  <label class="custom-control-label" :for="idx"></label>
                </div>
              </td>
              <td class="classroom">{{ item.csm_name }}</td>
              <td>{{ item.std_num }}</td>
              <td>{{ item.mem_name }} 선생님</td>
              <td>
                <i
                  class="btn icons_pencil_off"
                  @click="$emit('open-modify', item)"
                ></i>
              </td>
              <td>
                <i
                  class="btn icons_zoom_off"
                  @click="$emit('open-detail', item.csm_idx, item.csm_name)"
                ></i>
              </td>
              <td>
                <i class="btn icons_move_off"></i>
              </td>
            </tr>
          </Draggable>
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
                :class="{ active: currentPage === item }"
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
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
export default {
  name: 'ClassListBox',
  components: {
    Draggable,
  },
  props: {
    classList: {
      type: Array,
      default: () => [],
    },
    classListB: {
      type: Array,
      default: () => [],
    },
    sortTeacherSelect: {
      type: String,
      default: '',
    },
    teacherList: {
      type: Array,
      default: () => [],
    },
    sortNumberSelect: {
      type: String,
      default: '',
    },
    searchText: {
      type: String,
      default: '',
    },
    allCheck: {
      type: Boolean,
      default: true,
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
  },
  computed: {
    syncClassList: {
      get() {
        return this.classList
      },
      set(value) {
        this.$emit('update:classList', value)
      },
    },
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
.cursor {
  cursor: pointer;
}
.classroom {
  max-width: 105px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.drag-box {
  display: contents;
}
</style>
