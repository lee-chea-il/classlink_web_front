<template>
  <Transition name="modal">
    <div
      v-if="show.open"
      id="modalClassMove"
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
            <h5 id="exampleModalLabel" class="modal-title">반 이동</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="cnts_section">
              <!-- 이름 검색 - 왼쪽 -->
              <div class="search_std">
                <div class="search_name">
                  <div class="dropdown form-inline">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      이름 내림차순
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">이름 내림차순</a>
                      <a class="dropdown-item" href="#">이름 오름차순</a>
                    </div>
                  </div>
                  <div class="input-group input-search form-inline">
                    <input
                      type="text"
                      placeholder="학생 이름 검색"
                      class="form-control"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                      ></button>
                    </div>
                  </div>
                </div>
                <div
                  v-for="(item, idx) in show.data"
                  :key="idx"
                  class="table_area"
                >
                  <div class="table_thead">
                    <table class="tb">
                      <!-- <colgroup>
											<col width="50">
											<col>
										</colgroup> -->
                      <thead>
                        <tr>
                          <th class="th01">
                            <div
                              class="custom-control custom-checkbox form-inline"
                            >
                              <input
                                :id="`move0${idx}`"
                                type="checkbox"
                                class="custom-control-input"
                                :checked="moveClassCheckboxRight === idx"
                                @input="$emit('move-to-class-right', idx)"
                              />
                              <label
                                class="custom-control-label"
                                :for="`move0${idx}`"
                              ></label>
                            </div>
                          </th>
                          <th>{{ item.class }}</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div class="table_tbody">
                    <table class="tb">
                      <!-- <colgroup>
											<col width="50">
											<col width="70">
											<col width="100">
											<col>
										</colgroup> -->
                      <tbody>
                        <tr v-for="(items, id) in item.studentList" :key="id">
                          <td class="td01">
                            <div
                              class="custom-control custom-checkbox form-inline"
                            >
                              <input
                                :id="`move1${idx}${id}`"
                                type="checkbox"
                                class="custom-control-input"
                                :checked="leftCheckbox.includes(items)"
                                @input="$emit('student-list-check', items)"
                              />
                              <label
                                class="custom-control-label"
                                :for="`move1${idx}${id}`"
                              ></label>
                            </div>
                          </td>
                          <td class="td02">{{ items.grade }}</td>
                          <td class="td03">{{ items.name }}</td>
                          <td class="td04">{{ items.phone }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- /.이름 검색 - 왼쪽 -->

              <!-- 이동버튼 영역 -->
              <div class="btn_move_area">
                <div class="custom-control custom-checkbox form-inline">
                  <input
                    id="copyCheckbox01"
                    type="checkbox"
                    class="custom-control-input"
                    :checked="copy"
                    @change="$emit('copy-check')"
                  />
                  <label class="custom-control-label" for="copyCheckbox01"
                    >복사</label
                  >
                </div>
                <!-- [개발참조]toasts 메세지 '이동할 반을 선택해주세요.'' : 아무런 반을 체크하지 않고 누르면 -->
                <button
                  class="btn btn_arrow_square2_r"
                  @click="$emit('move-student', leftCheckbox, true)"
                ></button>
                <button
                  class="btn btn_arrow_square2_l"
                  @click="$emit('move-student', rightCheckbox, false)"
                ></button>
                <!-- <button class="btn btn_crud_default">초기화</button> -->
              </div>
              <!-- /.이동버튼 영역 -->

              <!-- 이름 검색 - 오른쪽 -->
              <div class="search_std">
                <div class="search_name">
                  <div class="dropdown form-inline">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      이름 내림차순
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">이름 내림차순</a>
                      <a class="dropdown-item" href="#">이름 오름차순</a>
                    </div>
                  </div>
                  <div class="input-group input-search form-inline">
                    <input
                      type="text"
                      placeholder="학생 이름 검색"
                      class="form-control"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                      ></button>
                    </div>
                  </div>
                </div>
                <div class="table_area right">
                  <!-- 반 list -->
                  <div
                    v-for="(item, idx) in classList"
                    :key="idx"
                    class="list_class"
                  >
                    <table class="tb">
                      <!-- <colgroup>
											<col width="50">
											<col>
										</colgroup> -->
                      <thead>
                        <tr class="class_tr">
                          <th>
                            <div
                              class="custom-control custom-checkbox form-inline"
                            >
                              <input
                                :id="`move2${idx}`"
                                type="checkbox"
                                class="custom-control-input"
                                :checked="moveClassCheckbox === idx"
                                @input="$emit('move-to-class', idx)"
                              />
                              <label
                                class="custom-control-label"
                                :for="`move2${idx}`"
                              ></label>
                            </div>
                          </th>
                          <th colspan="2">{{ item.class }}</th>
                          <th>
                            <button
                              id="showStudents01"
                              class="btn btn_filter"
                              :class="{ active: idx === moveDetail }"
                              @click="$emit('open-detail', idx)"
                            >
                              펴기
                            </button>
                          </th>
                        </tr>
                      </thead>
                    </table>

                    <div
                      v-if="idx === moveDetail"
                      id="listStudents01"
                      class="list_class_students"
                    >
                      <table class="tb">
                        <tbody>
                          <!-- 반 소속 학생리스트 -->
                          <div class="list_class_students">
                            <colgroup>
                              <col width="10%" />
                              <col width="30%" />
                              <col width="25%" />
                              <col width="100%" />
                            </colgroup>
                            <tr
                              v-for="(items, id) in item.studentList"
                              :key="id"
                            >
                              <td>
                                <div
                                  class="custom-control custom-checkbox form-inline"
                                >
                                  <input
                                    :id="`move3${idx}${id}`"
                                    type="checkbox"
                                    class="custom-control-input"
                                    :checked="rightCheckbox.includes(items)"
                                    @input="
                                      $emit('student-list-check-right', items)
                                    "
                                  />
                                  <label
                                    class="custom-control-label"
                                    :for="`move3${idx}${id}`"
                                  ></label>
                                </div>
                              </td>
                              <td class="text-right">
                                <i v-if="items.new" class="icons_new"></i>
                                {{ items.grade }}
                              </td>
                              <td>{{ items.name }}</td>
                              <td>{{ items.phone }}</td>
                            </tr>
                          </div>
                          <!-- /.반 소속 학생리스트 -->
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- 반 list -->
                  <!-- 해당반의학생 list -->

                  <!-- 해당반의학생 list -->
                </div>
              </div>
              <!-- /.이름 검색 - 오른쪽 -->
            </div>
          </div>
          <!-- <div class="modal-footer">
            <button class="btn btn_crud_point">저장하기</button>
          </div> -->
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ClassMoveModal',
  props: {
    show: {
      type: Object,
      default: () => {},
    },
    classList: {
      type: Array,
      default: () => [],
    },
    checkList: {
      type: Array,
      default: () => [],
    },
    moveDetail: {
      type: Number,
      default: null,
    },
    copy: {
      type: Boolean,
      default: false,
    },
    leftCheckbox: {
      type: Array,
      default: () => [],
    },
    moveClassCheckbox: {
      type: Number,
      default: null,
    },
    rightCheckbox: {
      type: Array,
      default: () => [],
    },
    moveClassCheckboxRight: {
      type: Number,
      default: null,
    },
  },
}
</script>

<style scoped>
.modal_ac_manage_cls .search_std {
  overflow-y: auto;
  height: 560px;
}
.modal_ac_manage_cls .search_std .table_area .table_tbody {
  height: 100%;
}
</style>
