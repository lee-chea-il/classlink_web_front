<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalMoreMemo"
      class="modal modal-mask modal-index"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">메모</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="search_section">
              <div class="dropdown form-inline">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ memoRange ? '최신 등록 순' : '오래된 순' }}
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" @click="$emit('select-range')">{{
                    memoRange ? '오래된 순' : '최신 등록 순'
                  }}</a>
                </div>
              </div>
              <button class="btn btn_crud_point" @click="$emit('click-add')">
                메모 추가
              </button>
            </div>
            <div class="table_area">
              <div class="table_thead">
                <table class="tb">
                  <!-- <colgroup>
									<col width="10%">
									<col width="15%">
									<col width="15%">
									<col width="40%">
									<col width="10%">
									<col width="10%">
								</colgroup> -->
                  <thead>
                    <tr>
                      <th class="th01">번호</th>
                      <th class="th02">상담일자</th>
                      <th>면담/상담자</th>
                      <th class="th04">내용</th>
                      <th class="th05">수정/삭제</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table_tbody">
                <table class="tb">
                  <!-- <colgroup>
									<col width="10%">
									<col width="15%">
									<col width="15%">
									<col>
									<col width="10%">
								</colgroup> -->
                  <tbody>
                    <tr v-if="isNewStudentMemoFlag">
                      <td class="td01">
                        {{ isNewStudentMemoFlag ? '' : item.sm_idx }}
                      </td>
                      <td class="td02">
                        {{ studentMemo.sm_consult_date.substr(0, 10) }}
                      </td>
                      <td class="td03">{{ studentMemo.sm_consultant }}</td>
                      <td class="memo td04">
                        <input
                          type="text"
                          placeholder="내용 입력"
                          class="form-control"
                          rules="required"
                          :value="studentMemo.sm_desc"
                          @input="$emit('change-input', $event)"
                        />
                        <button
                          class="btn btn_crud_point"
                          :disabled="studentMemo.sm_desc.length === 0"
                          @click="$emit('add-memo')"
                        >
                          등록
                        </button>
                        <i
                          class="icons_x_circle_off"
                          @click="$emit('click-cancel')"
                        ></i>
                      </td>
                      <td>
                        <i class="btn icons_mu_off more_mu">
                          <div class="more_list" style="display: none">
                            <ul>
                              <li>수정</li>
                              <li>삭제</li>
                            </ul>
                          </div>
                        </i>
                      </td>
                    </tr>

                    <tr v-for="(item, idx) in studentMemoList" :key="idx">
                      <td class="td01">{{ item.sm_idx }}</td>
                      <td class="td02">{{ item.sm_consult_date }}</td>
                      <td class="td03">{{ item.sm_consultant }}</td>
                      <td
                        v-if="
                          isUpdateStudentMemoFlag &&
                          studentMemoId === item.sm_idx
                        "
                        class="memo td04"
                      >
                        <input
                          type="text"
                          placeholder="내용 입력"
                          class="form-control"
                          :value="studentMemo.sm_desc"
                          @input="$emit('change-input', $event)"
                        />
                        <button
                          class="btn btn_crud_point"
                          :disabled="studentMemo.sm_desc.length === 0"
                          @click="$emit('update-memo')"
                        >
                          저장
                        </button>
                        <i
                          class="icons_x_circle_off"
                          @click="$emit('click-cancel')"
                        ></i>
                      </td>
                      <td v-else class="memo td04">
                        {{ item.sm_desc }}
                      </td>
                      <td>
                        <i
                          class="btn icons_mu_off more_mu"
                          @click="$emit('click-more', item.sm_idx)"
                        >
                          <div
                            class="more_list"
                            :class="
                              isStudentMemoMoreFlag === true &&
                              studentMemoId === item.sm_idx
                                ? 'show-more'
                                : ''
                            "
                            style="display: none"
                          >
                            <!-- :class="
                              isStudentMemoMoreFlag === true &&
                              studentMemoId === item.sm_idx
                                ? 'show-more'
                                : ''
                            " -->
                            <ul>
                              <li @click="$emit('click-update')">수정</li>
                              <li @click="$emit('click-delete')">삭제</li>
                            </ul>
                          </div>
                        </i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item cursor">
                  <a
                    class="page-link"
                    @click="$emit('click-direction', 'minus')"
                  >
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
                  <a
                    class="page-link"
                    @click="$emit('click-direction', 'plus')"
                  >
                    <span class="next"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
// import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'StudentMemoModal',
  // components: { ValidationObserver, ValidationProvider },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    studentMemoList: {
      type: Array,
      default: () => [],
    },
    isNewStudentMemoFlag: {
      type: Boolean,
      default: false,
    },
    studentMemoId: {
      type: Number,
      default: 0,
    },
    studentMemo: {
      type: Object,
      default: () => {},
    },
    isStudentMemoMoreFlag: {
      type: Boolean,
      default: false,
    },
    isUpdateStudentMemoFlag: {
      type: Boolean,
      default: false,
    },
    memoRange: {
      type: Boolean,
      default: true,
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
}
</script>
<style scoped>
.modal-index {
  z-index: 999;
}
#modalMoreMemo td {
  white-space: normal !important;
}
.show-more {
  display: block !important;
}
.btn_crud_point {
  min-width: 82px !important;
  height: 40px;
  padding: 7px 24px !important;
}
.form-control {
  width: 80% !important;
  height: 39px !important;
  padding: 10px !important;
  font-size: 14px !important;
  border-radius: 5px !important;
  border-color: rgba(167, 169, 172, 0.4) !important;
  border-width: 0.4px !important;
}
.cursor {
  cursor: pointer;
}
</style>
