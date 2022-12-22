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
                  {{ memoRangeList[isMemoRangeFlag].title }}
                </button>
                <div class="dropdown-menu">
                  <a
                    v-for="(item, idx) in memoRangeList"
                    :key="idx"
                    class="dropdown-item"
                    href="#"
                    @click="$emit('select-range', item.id)"
                    >{{ item.title }}</a
                  >
                </div>
              </div>
              <button class="btn btn_crud_point" @click="$emit('click-add')">
                등록
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
                      <td class="td01">0</td>
                      <td class="td02">2022.08.17 PM 09:00</td>
                      <td class="td03">본인 이름</td>
                      <td class="memo td04">
                        <input
                          type="text"
                          placeholder="내용 입력"
                          class="form-control"
                          :value="studentMemo.contents"
                          @input="$emit('change-input', $event)"
                        />
                        <button @click="$emit('add-memo')">등록</button>
                        <button @click="$emit('click-cancel')">엑스</button>
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

                    <tr v-for="(item, idx) in memoList" :key="idx">
                      <td class="td01">{{ item.id }}</td>
                      <td class="td02">{{ item.createdAt }}</td>
                      <td class="td03">{{ item.consultant }}</td>
                      <td
                        v-if="
                          isUpdateStudentMemoFlag && studentMemoId === item.id
                        "
                        class="memo td04"
                      >
                        <input
                          type="text"
                          placeholder="내용 입력"
                          class="form-control"
                          :value="studentMemo.contents"
                          @input="$emit('change-input', $event)"
                        />
                        <button @click="$emit('update-memo')">저장</button>
                        <button @click="$emit('click-cancel')">엑스</button>
                      </td>
                      <td v-else class="memo td04">
                        {{ item.contents }}
                      </td>
                      <td>
                        <i
                          class="btn icons_mu_off more_mu"
                          @click="$emit('click-more', item.id)"
                        >
                          <div
                            class="more_list"
                            :class="
                              isStudentMemoMoreFlag === true &&
                              studentMemoId === item.id
                                ? 'show-more'
                                : ''
                            "
                          >
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
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span class="previous"></span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
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
export default {
  name: 'StudentMemoModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    memoList: {
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
    memoRangeList: {
      type: Array,
      default: () => [],
    },
    isMemoRangeFlag: {
      type: Number,
      default: 0,
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
</style>
