<template>
  <div
    id="modalDataRegiNote"
    class="modal fade modal_ac_manage_dtr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <!-- [개발참조] 자료등록일때 출력되는 버튼 -->
          <h5 id="exampleModalLabel" class="modal-title">자료 등록</h5>
          <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
          <!-- <h5 class="modal-title" id="exampleModalLabel">자료 수정</h5> -->
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal_dataquiz datanote row">
            <!-- 모달 내용 구분 class-->
            <!-- 왼쪽 영역 -->
            <ReferenceAddLeftField
              :reference="reference"
              :noteTest="true"
              @change-input="$emit('change-input', $event)"
            />
            <!-- /.왼쪽 영역 -->

            <!-- 오른쪽 영역 -->
            <div class="right_area">
              <div
                v-for="(item, idx) in noteTestList"
                :key="item.id"
                class="regi_area right"
              >
                <div v-if="currentNoteTestIdx === idx">
                  <PageNumberList
                    :itemList="noteTestList"
                    :currentIdx="currentNoteTestIdx"
                    @change-number="$emit('change-number', $event)"
                    @plus-item="$emit('plus-item', $event)"
                  />
                  <div class="write_area">
                    <div class="title_area">
                      <span class="tit">문제</span>
                      <button class="btn btn_crud_default btn_first">
                        처음부터<br />미리보기
                      </button>
                      <button class="btn btn_crud_default btn_present">
                        현재부터<br />미리보기
                      </button>
                    </div>
                    <div class="edit_area">
                      <CustomEditor
                        :itemList="noteTestList"
                        :currentIdx="currentNoteTestIdx"
                      />
                    </div>
                    <div class="btn_area">
                      <button class="btn icons_arrow_square_l"></button>
                      <span class="counter">1/1</span>
                      <button class="btn icons_arrow_square_r"></button>
                      <button class="btn btn_crud_default btn_del">삭제</button>
                    </div>
                    <div class="info_area">
                      <div class="row">
                        <div class="quiz_area02">
                          <!-- 문제의 보기  -->
                          <CustomDescEditor
                            :itemList="noteTestList[currentNoteTestIdx]"
                            :currentNoteTestIdx="currentNoteTestIdx"
                            @select-answer="
                              $emit('select-answer', currentNoteTestIdx, $event)
                            "
                          />
                          <!-- /.문제의 보기  -->
                          <!-- [개발참조] 보기 4까지 생성되었을 때는 추가 버튼 보이지 않음 -->
                          <div class="example">
                            <button class="btn icons_plus_circle_off"></button>
                          </div>
                        </div>
                        <div class="quiz_area">
                          <div class="tit">난이도</div>
                          <div class="cnt">
                            <button
                              class="btn btn_activated"
                              :class="{ active: item.dificultade === 0 }"
                              @click="$emit('change-dificultade', idx, 0)"
                            >
                              상
                            </button>
                            <button
                              class="btn btn_activated"
                              :class="{ active: item.dificultade === 1 }"
                              @click="$emit('change-dificultade', idx, 1)"
                            >
                              중
                            </button>
                            <button
                              class="btn btn_activated"
                              :class="{ active: item.dificultade === 2 }"
                              @click="$emit('change-dificultade', idx, 2)"
                            >
                              하
                            </button>
                          </div>
                        </div>
                        <div class="quiz_area">
                          <div class="tit">제한시간</div>
                          <div class="cnt">
                            <input
                              id="limitTime"
                              type="text"
                              name="limitTime"
                              :value="item.limitTime"
                              placeholder="문제당 제한시간(초)"
                              class="form-control form-inline"
                              @input="$emit('change-item', $event, idx)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <!-- [개발참조] 자료등록일때 출력되는 버튼 -->
          <button class="btn btn_crud_point">등록</button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
          <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
          <!-- 	<button class="btn btn_crud_point">완료</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReferenceAddLeftField from '@/components/reference/ReferenceAddLeftField.vue'
import CustomEditor from '@/components/reference/CustomEditor.vue'
import CustomDescEditor from '@/components/reference/CustomDescEditor.vue'
import PageNumberList from '@/components/reference/PageNumberList.vue'

export default {
  name: 'NoteTestAddModal',
  components: {
    ReferenceAddLeftField,
    CustomEditor,
    CustomDescEditor,
    PageNumberList,
  },
  props: {
    reference: {
      type: Object,
      default: null,
    },
    noteTestList: {
      type: Array,
      default: null,
    },
    currentNoteTestIdx: {
      type: Number,
      default: null,
    },
  },
}
</script>

<style></style>
