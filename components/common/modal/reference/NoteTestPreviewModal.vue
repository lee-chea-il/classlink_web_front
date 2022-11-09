<template>
  <Transition name="modal">
    <div
      v-show="open"
      class="modal double modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="쪽지시험 미리보기" @close="$emit('close')" />

          <div id="modalPreviewTest" class="modal-body">
            <div class="preview_quiz row">
              <!-- 왼쪽영역 -->
              <div id="noneItem" class="left_area">
                <div class="answer_result">
                  <div class="ar_title">정답 결과</div>
                  <div
                    v-for="(test, idx) in testList"
                    :key="idx"
                    class="ar_question row"
                  >
                    <!-- [개발참조]문제 선택 시 출력 -->
                    <div class="ar_number_select">
                      <div class="ar_num_font01">{{ idx + 1 }}</div>
                    </div>
                    <!-- [개발참조]정답일때 출력 : class="ar_num_correct" -->
                    <div class="ar_result_select">
                      <div class="ar_correct">{{ test.answer }}</div>
                    </div>
                  </div>
                </div>
                <!-- div class="answer_result" -->
              </div>
              <!-- /. 왼쪽영역 -->

              <!-- 오른쪽영역 -->
              <div id="pdfItem" class="right_area">
                <div v-for="(test, idx) in testList" :key="idx">
                  <div v-if="idx === currentPageIdx" class="question_area">
                    <div class="qa_title row">
                      <div class="qa_title_font">
                        쪽지시험 | <span>과목이름</span> |
                        <span>홍미미</span> 선생님
                      </div>
                      <div class="qa_title_font02">
                        <span>{{ currentPageIdx + 1 }}</span
                        >/<span>{{ testList.length }}</span>
                      </div>
                    </div>
                    <!-- 쪽지시험 - 미리보기 - 문제 이미지있는 경우 출력 -->
                    <div class="question_area04-1">
                      <div class="limit_time">
                        <span class="limit_time_font"
                          >제한시간 : <span>{{ test.limitTime }}</span>
                          <span>초</span></span
                        >
                        <span class="icon_timer"></span>
                      </div>
                      <div class="qusetion_area04-2">
                        <div class="qa_num">
                          <div class="qa_num_font">{{ idx + 1 }}</div>
                        </div>
                        <div class="qa_cnts" v-html="test.problem"></div>
                      </div>
                    </div>
                    <!-- 쪽지시험 - 미리보기 - 답변 이미지없는 경우 -->

                    <div class="answer_area04">
                      <div
                        v-for="(example, index) in test.exampleList"
                        :key="index"
                        class="aa_question row"
                      >
                        <!-- [개발참조]문제 선택 시 출력  -->
                        <div
                          :class="
                            test.answer === index + 1
                              ? 'aa_number_select aa_correct'
                              : 'aa_number'
                          "
                        >
                          <div class="aa_num_font01">{{ index + 1 }}</div>
                        </div>
                        <!--  [개발참조]정답일때 출력 : class="aa_num_correct"  -->
                        <div
                          :class="
                            test.answer === index + 1
                              ? 'aa_result_select'
                              : 'aa_result'
                          "
                        >
                          <div
                            :class="
                              test.answer === index + 1
                                ? 'aa_correct'
                                : 'aa_wrong'
                            "
                            v-html="example.example"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <!-- div class="question_area" -->
                    <div
                      id="noneItem"
                      class="data_prev"
                      @click="$emit('pagination', 'min')"
                    >
                      <i class="icons_arrow_square_l"></i>
                    </div>
                    <div
                      id="noneItem"
                      class="data_next"
                      @click="$emit('pagination', 'plus', testList.length)"
                    >
                      <i class="icons_arrow_square_r"></i>
                    </div>
                  </div>
                </div>
                <!-- /. 오른쪽영역 -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'

export default {
  name: 'NoteTestPreviewModal',
  components: { ModalHeader },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    testList: { type: Array, default: () => [] },
    currentPageIdx: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped>
#modalPreviewQuiz .answer_area04,
#modalPreviewTest .answer_area04 {
  height: 310px;
}
</style>
