<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalPreviewQuiz"
      class="modal double modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="퀴즈 미리보기" @close="$emit('close')" />

          <div class="modal-body">
            <div class="preview_quiz row">
              <!-- 왼쪽영역 -->
              <div class="left_area">
                <div class="answer_result">
                  <div class="ar_title">정답 결과</div>
                  <div
                    v-for="(item, idx) in quizList"
                    :key="idx"
                    class="ar_question row"
                  >
                    <!-- [개발참조]문제 선택 시 출력 -->
                    <div class="ar_number_select">
                      <div class="ar_num_font01">{{ idx + 1 }}</div>
                    </div>
                    <!-- [개발참조]정답일때 출력 : class="ar_num_correct" -->
                    <div v-if="item.quizType === 0" class="ar_result_select">
                      <div class="ar_correct">
                        {{ item.oxAnswer === 0 ? 'O' : 'X' }}
                      </div>
                    </div>
                    <div
                      v-else-if="item.quizType === 1"
                      class="ar_result_select"
                    >
                      <div class="ar_correct">
                        {{ item.subjectiveAnswer }}
                      </div>
                    </div>
                    <div v-else class="ar_result_select">
                      <div class="ar_correct">
                        {{ item.shortAnswer }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /. 왼쪽영역 -->

              <!-- 오른쪽영역 -->
              <div class="right_area">
                <div class="question_area">
                  <div class="qa_title row">
                    <div class="qa_title_font">
                      퀴즈 | <span>과목이름</span> | <span>홍미미</span> 선생님
                    </div>
                    <div class="qa_title_font02">
                      <span>{{ currentPageIdx + 1 }}</span
                      >/<span>{{ quizList.length }}</span>
                    </div>
                  </div>

                  <div v-for="(quiz, idx) in quizList" :key="idx">
                    <div v-if="idx === currentPageIdx" class="question_area02">
                      <div class="limit_time">
                        <span class="limit_time_font"
                          >제한시간 : <span>{{ quiz.limitTime }}</span>
                          <span>초</span></span
                        >
                        <span class="icon_timer"></span>
                      </div>
                      <div>
                        <div class="qusetion_area03 row">
                          <div class="qa_num">
                            <div class="qa_num_font">
                              {{ currentPageIdx + 1 }}
                            </div>
                          </div>
                          <div class="qa_cnts" v-html="quiz.problem"></div>
                        </div>
                      </div>
                    </div>

                    <!-- ox 유형일때 -->
                    <div v-if="idx === currentPageIdx">
                      <div v-if="quiz.quizType === 0" class="answer_area row">
                        <div v-if="quiz.oxAnswer === 0">
                          <div class="icon_o_correct"></div>
                          &emsp;&emsp;&emsp;&emsp;
                          <div class="icon_xx"></div>
                        </div>
                        <div v-if="quiz.oxAnswer === 1">
                          <div class="icon_o"></div>
                          <div class="icon_xx_correct"></div>
                        </div>
                      </div>

                      <!-- 주관식 단답형일때 -->
                      <div v-if="quiz.quizType === 1" class="answer_area03 row">
                        <div class="aa_question row">
                          <div class="aa_number_select">
                            <div class="aa_num_font01">정답</div>
                          </div>
                          <div class="aa_result_select">
                            <div class="aa_correct">
                              {{ quiz.subjectiveAnswer }}
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- 단답형일때 -->
                      <div v-if="quiz.quizType === 2" class="answer_area02 row">
                        <div class="aa_question row">
                          <!-- [개발참조]문제 선택 시 출력  -->
                          <div class="aa_number_select">
                            <div class="aa_num_font01">정답</div>
                          </div>
                          <!-- [개발참조]정답일때 출력 : class="aa_num_correct"  -->
                          <div class="aa_result_select">
                            <div class="aa_correct">{{ quiz.shortAnswer }}</div>
                          </div>
                        </div>
                        <div class="aa_question row">
                          <div class="aa_number">
                            <div class="aa_num_font01">2</div>
                          </div>
                          <div class="aa_result">
                            <div class="aa_wrong">
                              {{ quiz.shortWrongAnswer }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="data_prev">
                <i
                  class="icons_arrow_square_l"
                  @click="$emit('pagination', 'min')"
                ></i>
              </div>
              <div class="data_next">
                <i
                  class="icons_arrow_square_r"
                  @click="$emit('pagination', 'plus', quizList.length)"
                ></i>
              </div>
            </div>
            <!-- /. 오른쪽영역 -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'

export default {
  name: 'QuizPreviewModal',
  components: { ModalHeader },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    currentPageIdx: {
      type: Number,
      default: 0,
    },
    quizList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
