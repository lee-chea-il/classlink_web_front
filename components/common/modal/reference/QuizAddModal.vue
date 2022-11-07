<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataRegiQuiz"
      class="modal modal_ac_manage_dtr modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="자료 등록" @close="$emit('close')" />

          <div class="modal-body">
            <div class="modal_dataquiz row">
              <!-- 모달 내용 구분 class-->

              <!-- 왼쪽 영역 -->
              <ReferenceAddLeftField
                :reference="reference"
                :pushKeyword="pushKeyword"
                @change-input="$emit('change-input', $event)"
                @set-keyword="$emit('set-keyword', $event)"
                @change-keyword="$emit('changePushKeyword', $event)"
                @delete-keyword="$emit('delete-keyword', $event)"
              />
              <!-- /.왼쪽 영역 -->

              <!-- 오른쪽 영역 -->
              <div class="right_area">
                <div class="regi_area right">
                  <PageNumberList
                    :itemList="quizList"
                    :currentIdx="currentPageIdx"
                    @change-number="$emit('change-number', $event)"
                    @plus-item="$emit('plus-item', $event)"
                  />

                  <div class="write_area">
                    <div class="title_area">
                      <span class="tit">{{ currentPageIdx + 1 }}번 문제</span>
                      <button
                        class="btn btn_crud_default btn_first"
                        @click="$emit('preview', 'add', 'first')"
                      >
                        처음부터<br />미리보기
                      </button>
                      <button
                        class="btn btn_crud_default btn_present"
                        @click="$emit('preview', 'add')"
                      >
                        현재부터<br />미리보기
                      </button>
                    </div>

                    <div class="edit_area">
                      <CustomEditor
                        :itemList="quizList"
                        :currentIdx="currentPageIdx"
                      />
                    </div>

                    <div class="btn_area">
                      <button
                        class="btn icons_arrow_square_l"
                        :class="{ disabled: currentPageIdx === 0 }"
                        @click="$emit('pagination', 'min')"
                      ></button>
                      <span class="counter">{{
                        `${currentPageIdx + 1}/${quizList.length}`
                      }}</span>
                      <button
                        class="btn icons_arrow_square_r"
                        :class="{
                          disabled: currentPageIdx === quizList.length - 1,
                        }"
                        @click="$emit('pagination', 'plus', quizList.length)"
                      ></button>
                      <button
                        v-if="quizList.length > 1"
                        class="btn btn_crud_default btn_del"
                        @click="$emit('delete-quiz', currentPageIdx)"
                      >
                        삭제
                      </button>
                    </div>
                  </div>

                  <div
                    v-for="(item, idx) in quizList"
                    :key="item.id"
                    class="info_area"
                  >
                    <div v-if="currentPageIdx === idx" class="row">
                      <div class="quiz_area">
                        <div class="tit">
                          <div
                            class="custom-control custom-radio custom-control-inline"
                          >
                            <input
                              id="isOx"
                              type="radio"
                              name="isOx"
                              class="custom-control-input"
                              :checked="item.quizType === 0"
                              @change="$emit('select-type', idx, 0)"
                            />
                            <label class="custom-control-label" for="isOx"
                              >OX 유형</label
                            >
                          </div>
                        </div>
                        <div class="cnt">
                          <button
                            class="btn btn_activated"
                            :disabled="item.quizType !== 0"
                            :class="{ active: item.oxAnswer === 0 }"
                            @click="$emit('select-ox', idx, 0)"
                          >
                            O
                          </button>
                          <button
                            class="btn btn_activated"
                            :disabled="item.quizType !== 0"
                            :class="{ active: item.oxAnswer === 1 }"
                            @click="$emit('select-ox', idx, 1)"
                          >
                            X
                          </button>
                        </div>
                      </div>
                      <div class="quiz_area">
                        <div class="tit">난이도</div>
                        <div class="cnt">
                          <button
                            class="btn btn_activated"
                            :class="{ active: item.dificultade === 0 }"
                            @click="$emit('select-dificultade', idx, 0)"
                          >
                            상
                          </button>
                          <button
                            class="btn btn_activated"
                            :class="{ active: item.dificultade === 1 }"
                            @click="$emit('select-dificultade', idx, 1)"
                          >
                            중
                          </button>
                          <button
                            class="btn btn_activated"
                            :class="{ active: item.dificultade === 2 }"
                            @click="$emit('select-dificultade', idx, 2)"
                          >
                            하
                          </button>
                        </div>
                      </div>
                      <div class="quiz_area">
                        <div class="tit">
                          <div
                            class="custom-control custom-radio custom-control-inline"
                          >
                            <input
                              id="isShortAnswer"
                              type="radio"
                              name="isShortAnswer"
                              class="custom-control-input"
                              :checked="item.quizType === 1"
                              @change="$emit('select-type', idx, 1)"
                            />
                            <label
                              class="custom-control-label"
                              for="isShortAnswer"
                              >주관식 단답형</label
                            >
                          </div>
                        </div>
                        <div class="cnt">
                          <input
                            id="subjectiveAnswer"
                            type="text"
                            placeholder="정답 입력"
                            class="form-control form-inline"
                            name="subjectiveAnswer"
                            :value="item.subjectiveAnswer"
                            :disabled="item.quizType !== 1"
                            @input="$emit('change-item', $event, idx)"
                          />
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
                      <div class="quiz_area">
                        <div>
                          <div class="tit">
                            <div
                              class="custom-control custom-radio custom-control-inline"
                            >
                              <input
                                id="isSubjective"
                                type="radio"
                                name="isSubjective"
                                class="custom-control-input"
                                :checked="item.quizType === 2"
                                @change="$emit('select-type', idx, 2)"
                              />
                              <label
                                class="custom-control-label"
                                for="isSubjective"
                                >단답형</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="mult">
                          <div class="tit stit">정답</div>
                          <div class="cnt">
                            <input
                              id="shortAnswer"
                              type="text"
                              placeholder="정답 입력"
                              name="shortAnswer"
                              :value="item.shortAnswer"
                              class="form-control form-inline"
                              :disabled="item.quizType !== 2"
                              @input="$emit('change-item', $event, idx)"
                            />
                          </div>
                        </div>
                        <div class="mult">
                          <div class="tit stit">오답</div>
                          <div class="cnt">
                            <input
                              id="shortWrongAnswer"
                              name="shortWrongAnswer"
                              :value="item.shortWrongAnswer"
                              type="text"
                              placeholder="오답 입력"
                              class="form-control form-inline"
                              :disabled="item.quizType !== 2"
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
          <div class="modal-footer">
            <!-- [개발참조] 자료등록일때 출력되는 버튼 -->
            <button class="btn btn_crud_point">등록</button>
            <button
              class="btn btn_crud_default"
              data-dismiss="modal"
              @click="$emit('close')"
            >
              취소
            </button>
            <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
            <!-- 	<button class="btn btn_crud_point">완료</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'
import PageNumberList from '@/components/reference/PageNumberList.vue'
import ReferenceAddLeftField from '@/components/reference/ReferenceAddLeftField.vue'
import CustomEditor from '~/components/reference/CustomEditor.vue'

export default {
  name: 'QuizAddModal',
  components: {
    PageNumberList,
    ReferenceAddLeftField,
    CustomEditor,
    ModalHeader,
  },
  props: {
    open: Boolean,
    quizList: {
      type: Array,
      default: () => [],
    },
    currentPageIdx: {
      type: Number,
      default: 0,
    },
    reference: {
      type: Object,
      default: () => {},
    },
    pushKeyword: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
