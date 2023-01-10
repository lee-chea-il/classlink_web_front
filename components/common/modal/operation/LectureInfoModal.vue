<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalMoreCourse"
      class="modal modal-mask modal-index"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">수강 정보</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="table_area">
              <div class="table_thead">
                <table class="tb">
                  <!-- <colgroup>
									<col width="150">
									<col>
									<col width="100">
									<col width="55">
								</colgroup> -->
                  <thead>
                    <tr>
                      <th class="th01">강좌</th>
                      <th class="th02">납부일</th>
                      <th class="th03">수강 시작일</th>
                      <th class="th04">메모</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table_tbody">
                <table class="tb">
                  <!-- 	<colgroup>
									<col width="150">
									<col>
									<col width="100">
									<col width="55">
								</colgroup> -->
                  <tbody v-for="(item, idx) in lectureList" :key="idx">
                    <tr>
                      <td class="td01">{{ item.lec_title }}</td>
                      <td class="td02">
                        <div class="date">
                          <div class="box01 mr-1">
                            {{ item.sl_payment_date }}
                          </div>
                          <i
                            class="icons_calendar_off mr-1"
                            @click="$emit('click-date', item.lec_idx)"
                          ></i>
                          <div
                            class="btn btn_crud_default"
                            :class="idx == 0 ? 'disabled' : ''"
                            @click="$emit('click-sameBtn', item.lec_idx)"
                          >
                            위와 동일
                          </div>
                        </div>
                      </td>
                      <td class="date02">{{ item.sl_lec_sdate }}</td>
                      <td class="i td04">
                        <i
                          class="icons_plus_circle_off"
                          @click="$emit('click-newMemo', item)"
                        ></i>
                      </td>
                    </tr>

                    <!-- 메모입력 TR : 메모입력 전 -->
                    <tr
                      v-if="isNewLectureMemoFlag && item.lec_idx === lectureId"
                      class="memo"
                    >
                      <td colspan="4" class="memo02">
                        <textarea
                          placeholder="메모입력"
                          :value="lectureInfoMemo.slm_memo"
                          @input="$emit('change-input', $event)"
                        ></textarea>
                        <button
                          class="btn btn_crud_point"
                          type="button"
                          @click="$emit('add-memo')"
                        >
                          등록
                        </button>
                        <i
                          class="icons_x_circle_off"
                          @click="$emit('click-cancel')"
                        ></i>
                      </td>
                    </tr>

                    <!-- 메모입력 TR : 메모입력 후-->
                    <tr
                      v-for="(child_item, child_idx) in lectureList[idx]
                        .memo_list"
                      :key="child_idx"
                      class="memo"
                    >
                      <td
                        v-if="
                          isUpdateLectureMemoFlag &&
                          lectureInfoMemo.slm_idx === child_item.slm_idx
                        "
                        colspan="4"
                        class="memo02"
                      >
                        <textarea
                          placeholder="메모입력"
                          :value="lectureInfoMemo.slm_memo"
                          @input="$emit('change-input', $event)"
                        ></textarea>
                        <button
                          class="btn btn_crud_point"
                          type="button"
                          @click="$emit('update-memo', item.id, child_item.id)"
                        >
                          저장
                        </button>
                        <i
                          class="icons_x_circle_off"
                          @click="$emit('click-cancel')"
                        ></i>
                      </td>
                      <td v-else colspan="4" class="memo02">
                        <div class="box02">
                          {{ child_item.slm_memo }}
                        </div>
                        <div class="memo03">
                          최신 업데이트 :
                          <span>{{
                            child_item.slm_update_date === null
                              ? child_item.slm_registration_date
                              : child_item.slm_update_date
                          }}</span>
                          최신 작성자 :
                          <span
                            >{{ child_item.slm_registrant_name }} 선생님</span
                          >
                        </div>
                      </td>

                      <td>
                        <i
                          v-show="!isUpdateLectureMemoFlag"
                          class="btn icons_mu_off more_mu"
                          @click.stop="
                            $emit('click-more', item.sl_idx, child_item)
                          "
                        >
                          <div
                            class="more_list"
                            style="display: none"
                            :class="
                              lectureMemoId.includes(child_item.slm_idx)
                                ? 'show'
                                : ''
                            "
                          >
                            <ul>
                              <li
                                @click.stop="
                                  $emit('click-update', item.id, child_item.id)
                                "
                              >
                                수정
                              </li>
                              <li
                                data-toggle="modal"
                                data-target="#modalLectureMemoDelete"
                                @click.stop="
                                  $emit('click-delete', item.id, child_item.id)
                                "
                              >
                                삭제
                              </li>
                            </ul>
                          </div>
                        </i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: 'LectureInfoModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    lectureInfo: {
      type: Array,
      default: () => [],
    },
    isNewLectureMemoFlag: {
      type: Boolean,
      default: false,
    },
    lectureId: {
      type: Number,
      default: 0,
    },
    isUpdateLectureMemoFlag: {
      type: Boolean,
      default: false,
    },
    lectureMemoId: {
      type: Array,
      default: () => [],
    },
    lectureInfoMemo: {
      type: Object,
      default: () => {},
    },
    lectureList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped>
.modal-index {
  z-index: 999;
}
.show {
  display: block !important;
}
</style>
