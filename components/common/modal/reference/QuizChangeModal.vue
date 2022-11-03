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
          <div class="modal-header">
            <!-- [개발참조] 자료등록일때 출력되는 버튼 -->
            <h5 id="exampleModalLabel" class="modal-title">자료 수정</h5>
            <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
            <!-- <h5 class="modal-title" id="exampleModalLabel">자료 수정</h5> -->
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="$emit('close')"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal_dataquiz row">
              <!-- 모달 내용 구분 class-->
              <!-- 왼쪽 영역 -->
              <ReferenceAddLeftField
                :reference="quiz"
                @change-input="$emit('change-input')"
              />
              <!-- /.왼쪽 영역 -->
              <!-- 오른쪽 영역 -->
              <div class="right_area">
                <div class="regi_area right">
                  <PageNumberList
                    :itemList="quiz.quizList"
                    :currentIdx="currentPageIdx"
                    @change-number="$emit('change-number', $event)"
                    @plus-item="$emit('plus-item', $event)"
                  />
                  <div class="write_area">
                    <div class="title_area">
                      <span class="tit">문제</span>
                      <button
                        class="btn btn_crud_default btn_first"
                        data-toggle="modal"
                        data-target="#modalPreviewQuiz"
                        data-dismiss="modal"
                      >
                        처음부터<br />미리보기
                      </button>
                      <button
                        class="btn btn_crud_default btn_present"
                        data-toggle="modal"
                        data-target="#modalPreviewQuiz"
                        data-dismiss="modal"
                      >
                        현재부터<br />미리보기
                      </button>
                    </div>
                    <div class="edit_area">
                      <CustomEditor
                        :itemList="quiz.quizList"
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
                        `${currentPageIdx + 1}/${quiz.quizList?.length}`
                      }}</span>
                      <button
                        class="btn icons_arrow_square_r"
                        :class="{
                          disabled:
                            currentPageIdx === quiz.quizList?.length - 1,
                        }"
                        @click="$emit('pagination', 'plus')"
                      ></button>
                      <button
                        v-if="quiz.quizList?.length > 1"
                        class="btn btn_crud_default btn_del"
                        @click="$emit('delete-quiz', currentPageIdx)"
                      >
                        삭제
                      </button>
                    </div>
                  </div>

                  <div
                    v-for="(item, idx) in quiz.quizList"
                    :key="idx"
                    class="info_area"
                  >
                    <div v-if="currentPageIdx === idx" class="row">
                      <div class="quiz_area">
                        <div class="tit">
                          <div
                            class="custom-control custom-radio custom-control-inline"
                          >
                            <input
                              id="isOxItem"
                              type="radio"
                              name="isOxItem"
                              class="custom-control-input"
                              :checked="item.quizType === 0"
                              @change="$emit('select-type', idx, 0)"
                            />
                            <label class="custom-control-label" for="isOxItem"
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
                              id="isShortAnswerItem"
                              type="radio"
                              name="isShortAnswerItem"
                              class="custom-control-input"
                              :checked="item.quizType === 1"
                              @change="$emit('select-type', idx, 1)"
                            />
                            <label
                              class="custom-control-label"
                              for="isShortAnswerItem"
                              >단답형</label
                            >
                          </div>
                        </div>

                        <div class="cnt">
                          <input
                            id="shortAnswer"
                            type="text"
                            placeholder="정답 입력"
                            name="shortAnswer"
                            :value="item.shortAnswer"
                            class="form-control form-inline"
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
                                id="isSubjectiveItem"
                                type="radio"
                                name="isSubjectiveItem"
                                class="custom-control-input"
                                :checked="item.quizType === 2"
                                @change="$emit('select-type', idx, 2)"
                              />
                              <label
                                class="custom-control-label"
                                for="isSubjectiveItem"
                                >주관식 단답형</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="mult">
                          <div class="tit stit">정답</div>
                          <div class="cnt">
                            <input
                              id="subjectiveAnswer"
                              type="text"
                              placeholder="정답 입력"
                              class="form-control form-inline"
                              name="subjectiveAnswer"
                              :value="item.subjectiveAnswer"
                              :disabled="item.quizType !== 2"
                              @input="$emit('change-item', $event, idx)"
                            />
                          </div>
                        </div>
                        <div class="mult">
                          <div class="tit stit">오답</div>
                          <div class="cnt">
                            <input
                              id="subjectiveWrongAnswer"
                              name="subjectiveWrongAnswer"
                              :value="item.subjectiveWrongAnswer"
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
import CustomEditor from '@/components/reference/CustomEditor.vue'
import PageNumberList from '@/components/reference/PageNumberList.vue'

export default {
  name: 'QuizChangeModal',
  components: { PageNumberList, CustomEditor },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    quiz: {
      type: Object,
      default: null,
    },
    currentPageIdx: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
