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
            <h5 id="exampleModalLabel" class="modal-title">
              {{ show.allocation === 0 ? '배정X' : '반 이동' }}
            </h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="cnts_section">
              <!-- 이름 검색 - 왼쪽 -->
              <div class="search_std">
                <div v-if="show.allocation === 0" class="search_name">
                  <div class="dropdown form-inline">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {{
                        !unallocationSort ? '이름 내림차순' : '이름 오름차순'
                      }}
                    </button>
                    <div class="dropdown-menu">
                      <a
                        class="dropdown-item"
                        @click="$emit('sort-unallocation', false)"
                        >이름 내림차순</a
                      >
                      <a
                        class="dropdown-item"
                        @click="$emit('sort-unallocation', true)"
                        >이름 오름차순</a
                      >
                    </div>
                  </div>
                  <div class="input-group input-search form-inline">
                    <input
                      v-model="syncUnallocationSearch"
                      type="text"
                      placeholder="학생 이름 검색"
                      class="form-control"
                      @keyup.enter="$emit('search-unallocation')"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                        @click="$emit('search-unallocation')"
                      ></button>
                    </div>
                  </div>
                </div>
                <div v-else class="search_name">
                  <div class="dropdown form-inline">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {{ leftSort ? '이름 내림차순' : '이름 오름차순' }}
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" @click="$emit('sort-left', true)"
                        >이름 내림차순</a
                      >
                      <a
                        class="dropdown-item"
                        @click="$emit('sort-left', false)"
                        >이름 오름차순</a
                      >
                    </div>
                  </div>
                  <div class="input-group input-search form-inline">
                    <input
                      v-model="syncLeftSearch"
                      type="text"
                      placeholder="학생 이름 검색"
                      class="form-control"
                      @keyup.enter="$emit('search-left')"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                        @click="$emit('search-left')"
                      ></button>
                    </div>
                  </div>
                </div>
                <div v-if="show.allocation === 0">
                  <div class="table_area">
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
                                  :id="`move01`"
                                  type="checkbox"
                                  class="custom-control-input"
                                />
                                <!-- :checked="moveClassCheckboxRight === idx" -->
                                <!-- @input="$emit('move-to-class-right', item)" -->
                                <label
                                  class="custom-control-label"
                                  :for="`move01`"
                                ></label>
                              </div>
                            </th>
                            <th>배정X</th>
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
                          <tr
                            v-for="(item, idx) in noAssignStudent?.studentList"
                            :key="idx"
                          >
                            <td class="td01">
                              <div
                                class="custom-control custom-checkbox form-inline"
                              >
                                <input
                                  :id="`move1${idx}`"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="unallocationCheckbox.includes(item)"
                                  @input="$emit('unallocation-check', item)"
                                />
                                <!-- :checked="leftCheckbox.includes(items)"
                                  @input="
                                    $emit(
                                      'student-list-check',
                                      items,
                                      item.csm_idx
                                    )
                                  " -->
                                <label
                                  class="custom-control-label"
                                  :for="`move1${idx}`"
                                ></label>
                              </div>
                            </td>
                            <td class="td02">
                              {{ item.std_year === null ? '-' : item.std_year }}
                            </td>
                            <td class="td03">{{ item.mem_name }}</td>
                            <td class="td04">{{ item.mem_phone }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div
                    v-for="(item, idx) in selectClass"
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
                                  @input="$emit('move-class-right', item)"
                                />
                                <label
                                  class="custom-control-label"
                                  :for="`move0${idx}`"
                                ></label>
                              </div>
                            </th>
                            <th>{{ item?.csm_name }}</th>
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
                          <tr
                            v-for="(items, id) in item?.studentList"
                            :key="id"
                          >
                            <td class="td01">
                              <div
                                class="custom-control custom-checkbox form-inline"
                              >
                                <input
                                  :id="`move1${idx}${id}`"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="leftCheckbox.includes(items)"
                                  @input="
                                    $emit(
                                      'student-list-check',
                                      items,
                                      item.csm_idx
                                    )
                                  "
                                />
                                <label
                                  class="custom-control-label"
                                  :for="`move1${idx}${id}`"
                                ></label>
                              </div>
                            </td>
                            <td class="td02">{{ items.std_year }}</td>
                            <td class="td03">{{ items.mem_name }}</td>
                            <td class="td04">{{ items.mem_phone }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
                  v-if="show.allocation === 0"
                  class="btn btn_arrow_square2_r"
                  @click="$emit('move-unallocation-student')"
                ></button>
                <button
                  v-else
                  class="btn btn_arrow_square2_r"
                  @click="$emit('move-student', true)"
                ></button>
                <button
                  v-if="show.allocation === 0"
                  class="btn btn_arrow_square2_l"
                  @click="$emit('move-unallocation')"
                ></button>
                <button
                  v-else
                  class="btn btn_arrow_square2_l"
                  @click="$emit('move-student', false)"
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
                      {{ rightSort ? '이름 내림차순' : '이름 오름차순' }}
                    </button>
                    <div class="dropdown-menu">
                      <a
                        class="dropdown-item"
                        @click="$emit('sort-right', true)"
                        >이름 내림차순</a
                      >
                      <a
                        class="dropdown-item"
                        @click="$emit('sort-right', false)"
                        >이름 오름차순</a
                      >
                    </div>
                  </div>
                  <div class="input-group input-search form-inline">
                    <input
                      v-model="syncRightSearch"
                      type="text"
                      placeholder="학생 이름 검색"
                      class="form-control"
                      @keyup.enter="$emit('search-right')"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                        @click="$emit('search-right')"
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
                                @input="$emit('move-class', item)"
                              />
                              <label
                                class="custom-control-label"
                                :for="`move2${idx}`"
                              ></label>
                            </div>
                          </th>
                          <th class="classroom" colspan="2">
                            {{ item.csm_name }}
                          </th>
                          <th>
                            <button
                              id="showStudents01"
                              class="btn btn_filter"
                              :class="{ active: idx === moveDetail }"
                              @click="$emit('open-detail', idx)"
                            >
                              {{ idx === moveDetail ? '접기' : '펴기' }}
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
                            <!-- <colgroup>
                              <col width="10%" />
                              <col width="30%" />
                              <col width="25%" />
                              <col width="100%" />
                            </colgroup> -->
                            <tr
                              v-for="(items, id) in item?.studentList"
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
                                      $emit(
                                        'student-list-check-right',
                                        items,
                                        item.csm_idx
                                      )
                                    "
                                  />
                                  <label
                                    class="custom-control-label"
                                    :for="`move3${idx}${id}`"
                                  ></label>
                                </div>
                              </td>
                              <td class="text-right">
                                <i v-if="false" class="icons_new"></i>
                                {{ items.std_year }}
                              </td>
                              <td>{{ items.mem_name }}</td>
                              <td>{{ items.mem_phone }}</td>
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
    selectClass: {
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
      type: Array,
      default: () => [],
    },
    rightCheckbox: {
      type: Array,
      default: () => [],
    },
    moveClassCheckboxRight: {
      type: Array,
      default: () => [],
    },
    leftSearch: {
      type: String,
      default: '',
    },
    leftSort: {
      type: Boolean,
      default: true,
    },
    rightSearch: {
      type: String,
      default: '',
    },
    rightSort: {
      type: Boolean,
      default: true,
    },
    noAssignStudent: {
      type: Object,
      default: () => {},
    },
    unallocationSearch: {
      type: String,
      default: '',
    },
    unallocationSort: {
      type: Boolean,
      default: false,
    },
    unallocationCheckbox: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    syncLeftSearch: {
      get() {
        return this.leftSearch
      },
      set(value) {
        this.$emit('update:leftSearch', value)
      },
    },
    syncRightSearch: {
      get() {
        return this.rightSearch
      },
      set(value) {
        this.$emit('update:rightSearch', value)
      },
    },
    syncUnallocationSearch: {
      get() {
        return this.unallocationSearch
      },
      set(value) {
        this.$emit('update:unallocationSearch', value)
      },
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

.classroom {
  max-width: 52px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
