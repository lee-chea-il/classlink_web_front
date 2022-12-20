<template>
  <Transition name="modal">
    <div
      v-if="show.open"
      id="modalClassModify"
      class="modal double modal-mask modal_ac_manage_cls"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              반 {{ show.data === null ? '만들기' : '수정' }}
            </h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <!-- 반이름 검색 -->
            <div class="search_class">
              <div class="form-group">
                <label for="input00">반 이름</label>
                <input
                  id="input00"
                  v-model="syncClassName"
                  type="text"
                  class="form-control form-inline"
                  placeholder="반 이름을 입력해 주세요."
                />
              </div>
            </div>
            <!-- /.반이름 검색 -->
            <div class="cnts_section">
              <!-- 반 선생님 -->
              <div class="class_section">
                <div class="tit">반 선생님</div>
                <div class="move_section">
                  <div class="list_section">
                    <div class="input-group input-search">
                      <input
                        v-model="syncClassTeacherSearch"
                        type="text"
                        placeholder="선생님 이름"
                        class="form-control"
                        @keyup.enter="$emit('search-teacher')"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn icons_x_circle_off"
                          type="button"
                        ></button>
                        <button
                          class="btn icons_search_off"
                          type="button"
                          @click="$emit('search-teacher')"
                        ></button>
                      </div>
                    </div>
                    <div class="list_area">
                      <!-- [개발참조] 등록된 데이터 없는 경우 -->
                      <div v-if="teacherList.length === 0" class="nothing_txt">
                        <div class="txt">
                          선생님 관리 페이지에서<br />
                          선생님을 등록해 주세요
                        </div>
                      </div>
                      <!-- /.등록된 데이터 없는 경우 -->
                      <ul v-else>
                        <li v-for="(item, idx) in teacherList" :key="idx">
                          <span class="text">{{ item.mem_name }} 선생님</span>
                          <i
                            class="icons_plus_circle_off"
                            @click="$emit('add-selected-teacher', item)"
                          ></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="list_section">
                    <div class="sum_info">
                      선택된 선생님 <span>{{ selectedTeacher.length }}</span
                      >명
                    </div>
                    <div class="list_area">
                      <!-- [개발참조] 등록된 데이터 없는 경우 -->
                      <div
                        v-if="selectedTeacher.length === 0"
                        class="nothing_txt"
                      >
                        <div class="txt">
                          왼쪽의 +를 눌러<br />
                          선생님을 선택하세요.
                        </div>
                      </div>
                      <!-- /.등록된 데이터 없는 경우 -->
                      <ul v-else>
                        <li v-for="(item, idx) in selectedTeacher" :key="idx">
                          <span class="text">{{ item.mem_name }} 선생님</span>
                          <i
                            class="icons_minus_circle_off"
                            @click="$emit('delete-selected-teacher', item)"
                          ></i>
                        </li>
                        <!-- <li>
                        <span class="text">홍길동 선생님</span>
                        <i class="icons_minus_circle_off"></i>
                      </li>
                      <li>
                        <span class="text">홍길동 선생님</span>
                        <i class="icons_minus_circle_off"></i>
                      </li> -->
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 반 선생님/. -->
              <!-- 반 학생 -->
              <div class="class_section">
                <div class="tit">반 학생</div>
                <div class="move_section">
                  <div class="list_section selected">
                    <div class="input-group input-search">
                      <input
                        v-model="syncClassStudentSearch"
                        type="text"
                        placeholder="학생 이름"
                        class="form-control"
                        @keyup.enter="$emit('search-student')"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn icons_x_circle_off"
                          type="button"
                        ></button>
                        <button
                          class="btn icons_search_off"
                          type="button"
                          @click="$emit('search-student')"
                        ></button>
                      </div>
                    </div>
                    <div class="list_area" style="border: none">
                      <!-- 탭 컨텐츠 -->
                      <ul id="myTab" class="nav nav-tabs" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button
                            id="grade-tab"
                            class="nav-link"
                            :class="{ active: studentTab === 0 }"
                            type="button"
                            role="tab"
                            @click="$emit('move-student-tab', 0)"
                          >
                            학년
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            id="class-tab"
                            class="nav-link"
                            :class="{ active: studentTab === 1 }"
                            type="button"
                            role="tab"
                            @click="$emit('move-student-tab', 1)"
                          >
                            반
                          </button>
                        </li>
                      </ul>
                      <div id="myTabContent" class="tab-content">
                        <!-- [개발참조] 등록된 데이터 없는 경우 -->
                        <div
                          v-if="
                            studentTab === 0
                              ? studentList.banList.length === 0
                              : studentList.gradeList.length === 0
                          "
                          class="nothing_txt"
                        >
                          <div class="txt">
                            학생 관리 페이지에서<br />
                            학생을 등록해 주세요
                          </div>
                        </div>
                        <!-- /.등록된 데이터 없는 경우 -->
                        <!-- 학년 탭 내용 -->
                        <div
                          v-else-if="studentTab === 0"
                          id="grade"
                          class="tab-pane active"
                          role="tabpanel"
                          aria-labelledby="grade-tab"
                        >
                          <ul>
                            <li
                              v-for="(item, idx) in studentList.gradeList"
                              :key="idx"
                            >
                              <div class="list">
                                <i
                                  id="show_sublist2"
                                  class="btn"
                                  :class="
                                    modalModifyDetail === idx
                                      ? 'icons_arrow_dn'
                                      : 'icons_arrow_r'
                                  "
                                  @click="$emit('modify-detail', idx)"
                                ></i>
                                <span class="text">
                                  {{ item.std_year }}
                                  <span class="ss_txt">
                                    {{ item.std_num }}명
                                  </span>
                                </span>
                                <i
                                  class="icons_plus_circle_off"
                                  @click="
                                    $emit('add-selected-student-all', item)
                                  "
                                ></i>
                              </div>
                              <!-- 학년에 해당하는 학생 리스트 -->
                              <div
                                v-if="modalModifyDetail === idx"
                                id="list_sub2"
                                class="list_sub"
                              >
                                <ul>
                                  <li
                                    v-for="(items, id) in item.studentList"
                                    :key="id"
                                  >
                                    <span class="text">{{
                                      items.mem_name
                                    }}</span>
                                    <i
                                      class="icons_plus_circle_off"
                                      @click="
                                        $emit(
                                          'add-selected-student',
                                          items,
                                          item.std_year
                                        )
                                      "
                                    ></i>
                                  </li>
                                </ul>
                              </div>
                              <!-- /.학년에 해당하는 학생 리스트 -->
                            </li>
                          </ul>
                        </div>
                        <!-- /.학년 탭 내용 -->
                        <!-- 반 탭 내용 -->
                        <div
                          v-else
                          id="class"
                          role="tabpanel"
                          aria-labelledby="class-tab"
                        >
                          <ul>
                            <li
                              v-for="(item, idx) in studentList.banList"
                              :key="idx"
                            >
                              <div class="list">
                                <i
                                  id=""
                                  class="btn"
                                  :class="
                                    modalModifyClassDetail === idx
                                      ? 'icons_arrow_dn'
                                      : 'icons_arrow_r'
                                  "
                                  @click="$emit('modify-class-detail', idx)"
                                ></i>
                                <span class="text"
                                  >{{ item.csm_name
                                  }}<span class="ss_txt">
                                    {{ item.studentList.length }}명
                                  </span>
                                </span>
                                <i
                                  class="icons_plus_circle_off"
                                  @click="
                                    $emit('add-selected-student-all', item)
                                  "
                                ></i>
                              </div>
                              <!-- 반에 해당하는 학생 리스트 -->
                              <div
                                v-if="modalModifyClassDetail === idx"
                                id=""
                                class="list_sub"
                              >
                                <ul>
                                  <li
                                    v-for="(items, id) in item.studentList"
                                    :key="id"
                                  >
                                    <span class="text">{{
                                      items.mem_name
                                    }}</span>
                                    <i
                                      class="icons_plus_circle_off"
                                      @click="
                                        $emit(
                                          'add-selected-student',
                                          items,
                                          item.std_year
                                        )
                                      "
                                    ></i>
                                  </li>
                                </ul>
                              </div>
                              <!-- /.반에 해당하는 학생 리스트 -->
                            </li>
                          </ul>
                        </div>
                        <!-- /.반 탭 내용 -->
                      </div>
                      <!-- /.탭 컨텐츠 -->
                    </div>
                  </div>
                  <div class="list_section selected">
                    <div class="sum_info">
                      선택된 학생 <span>{{ selectedStudentAll.length }}</span
                      >명
                    </div>
                    <div class="list_area">
                      <!-- [개발참조] 등록된 데이터 없는 경우 -->
                      <div
                        v-if="selectedStudentAll.length === 0"
                        class="nothing_txt"
                      >
                        <div class="txt">
                          왼쪽의 +를 눌러<br />
                          학생을 선택하세요.
                        </div>
                      </div>
                      <!-- /.등록된 데이터 없는 경우 -->
                      <ul v-else>
                        <li
                          v-for="(item, idx) in selectedStudentAll"
                          :key="idx"
                        >
                          <div class="list">
                            <i
                              id="show_sublist"
                              class="btn"
                              :class="
                                modalModifySelectDetail === idx
                                  ? 'icons_arrow_dn'
                                  : 'icons_arrow_r'
                              "
                              @click="$emit('modify-selected-detail', idx)"
                            ></i>
                            <span class="text"
                              >{{ item.grade
                              }}<span class="ss_txt"
                                >{{ item.student.length }}명</span
                              ></span
                            >
                            <i
                              class="icons_minus_circle_off"
                              @click="
                                $emit('delete-selected-student-all', item)
                              "
                            ></i>
                          </div>
                          <!-- 해당하는 학생 리스트 -->
                          <div
                            v-if="modalModifySelectDetail === idx"
                            id="list_sub"
                            class="list_sub"
                          >
                            <ul>
                              <li v-for="(items, id) in item.student" :key="id">
                                <span class="text">{{ items.mem_name }}</span>
                                <i
                                  class="icons_minus_circle_off"
                                  @click="
                                    $emit('delete-selected-student', items)
                                  "
                                ></i>
                              </li>
                            </ul>
                          </div>
                          <!-- /.해당하는 학생 리스트 -->
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 반 학생/. -->
            </div>
          </div>
          <div class="modal-footer">
            <!-- [개발참조] 등록, 수정 버튼 상황에 따라 -->
            <button class="btn btn_crud_point">
              {{ show.data === null ? '확인' : '저장하기' }}
            </button>
            <button class="btn btn_crud_default" @click="$emit('close')">
              취소
            </button>
            <!-- <button class="btn btn_crud_point">저장하기</button> -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ClassModifyModal',
  props: {
    show: {
      type: Object,
      default: () => {},
    },
    teacherList: {
      type: Array,
      default: () => [],
    },
    studentList: {
      type: Object,
      default: () => {},
    },
    selectedTeacher: {
      type: Array,
      default: () => [],
    },
    selectedStudentAll: {
      type: Array,
      default: () => [],
    },
    modalModifyDetail: {
      type: Number,
      default: null,
    },
    modalModifyClassDetail: {
      type: Number,
      default: null,
    },
    modalModifySelectDetail: {
      type: Number,
      default: null,
    },
    studentTab: {
      type: Number,
      default: 0,
    },
    className: {
      type: String,
      default: '',
    },
    classTeacherSearch: {
      type: String,
      default: '',
    },
    classStudentSearch: {
      type: String,
      default: '',
    },
  },
  computed: {
    syncClassName: {
      get() {
        return this.className
      },
      set(value) {
        this.$emit('update:className', value)
      },
    },
    syncClassTeacherSearch: {
      get() {
        return this.classTeacherSearch
      },
      set(value) {
        this.$emit('update:classTeacherSearch', value)
      },
    },
    syncClassStudentSearch: {
      get() {
        return this.classStudentSearch
      },
      set(value) {
        this.$emit('update:classStudentSearch', value)
      },
    },
  },
}
</script>

<style></style>
