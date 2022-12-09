<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalClassAverage01"
      class="modal modal_ac_manage_exam modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">시험 결과</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="exam_result">
              <div class="left_area">
                <div class="tit_area">
                  <div class="title">
                    {{ selectedExamInfo.course }}
                    레슨{{ selectedExamInfo.lesson }}
                    {{
                      selectedExamInfo.fileType === 'quiz'
                        ? '퀴즈'
                        : selectedExamInfo.fileType === 'test'
                        ? '쪽지시험'
                        : ''
                    }}
                    <span>반평균 80</span>
                  </div>
                  <div class="date">{{ selectedExamInfo.date }}</div>
                </div>
                <div
                  v-if="selectedExamInfo.fileType === 'quiz'"
                  class="questions_section"
                >
                  <!-- 왼쪽문제들 -->
                  <div class="questions_area">
                    <!-- 문제 BOX(퀴즈)-->
                    <div
                      v-for="(item, idx) in examQuestion.quizList.filter(
                        (items) =>
                          items.id + 1 <=
                          Math.ceil(examQuestion.quizList.length / 2)
                      )"
                      :key="idx"
                      class="question_box"
                    >
                      <div class="num_area">
                        <div class="num">{{ item.id + 1 }}.</div>
                        <div
                          class="grade"
                          :class="
                            item.dificultade === 2
                              ? 'high'
                              : item.dificultade === 1
                              ? 'medium'
                              : item.dificultade === 0
                              ? 'low'
                              : ''
                          "
                        >
                          {{
                            item.dificultade === 2
                              ? '상'
                              : item.dificultade === 1
                              ? '중'
                              : item.dificultade === 0
                              ? '하'
                              : ''
                          }}
                        </div>
                      </div>
                      <div class="questions">
                        <div class="exam_area" v-html="item.problem"></div>
                        <div class="example_area left blue">O</div>
                        <div class="example_area right red">X</div>
                      </div>
                      <button
                        v-if="openDetail !== item.id"
                        class="btn btn_light3_ss btn_detail_view"
                        @click="$emit('open-detail', item.id)"
                      >
                        상세
                      </button>
                      <button
                        v-else
                        class="btn btn_light3_ss btn_detail_hide"
                        @click="$emit('close-detail')"
                      >
                        접기
                      </button>
                    </div>
                    <!-- /.문제 BOX(퀴즈)-->
                  </div>

                  <!-- 오른쪽문제들 -->
                  <div class="questions_area">
                    <!-- 문제 BOX(퀴즈)-->
                    <div
                      v-for="(item, idx) in examQuestion.quizList.filter(
                        (items) =>
                          items.id + 1 >
                          Math.ceil(examQuestion.quizList.length / 2)
                      )"
                      :key="idx"
                      class="question_box"
                    >
                      <div class="num_area">
                        <div class="num">{{ item.id + 1 }}.</div>
                        <div
                          class="grade"
                          :class="
                            item.dificultade === 2
                              ? 'high'
                              : item.dificultade === 1
                              ? 'medium'
                              : item.dificultade === 0
                              ? 'low'
                              : ''
                          "
                        >
                          {{
                            item.dificultade === 2
                              ? '상'
                              : item.dificultade === 1
                              ? '중'
                              : item.dificultade === 0
                              ? '하'
                              : ''
                          }}
                        </div>
                      </div>
                      <div class="questions">
                        <div class="exam_area" v-html="item.problem"></div>
                        <div class="example_area left blue">O</div>
                        <div class="example_area right red">X</div>
                      </div>
                      <button
                        v-if="openDetail !== item.id"
                        class="btn btn_light3_ss btn_detail_view"
                        @click="$emit('open-detail', item.id)"
                      >
                        상세
                      </button>
                      <button
                        v-else
                        class="btn btn_light3_ss btn_detail_hide"
                        @click="$emit('close-detail')"
                      >
                        접기
                      </button>
                    </div>
                    <!-- /.문제 BOX(퀴즈)-->
                  </div>
                </div>

                <div v-else class="questions_section">
                  <!-- 왼쪽문제들 -->
                  <div class="questions_area">
                    <!-- 문제 BOX(쪽지)-->
                    <div
                      v-for="(item, idx) in examQuestion.questionList.filter(
                        (items) =>
                          items.id + 1 <=
                          Math.ceil(examQuestion.questionList.length / 2)
                      )"
                      :key="idx"
                      class="question_box"
                    >
                      <div class="num_area">
                        <div class="num">{{ item.id + 1 }}.</div>
                        <div
                          class="grade"
                          :class="
                            item.dificultade === 2
                              ? 'high'
                              : item.dificultade === 1
                              ? 'medium'
                              : item.dificultade === 0
                              ? 'low'
                              : ''
                          "
                        >
                          {{
                            item.dificultade === 2
                              ? '상'
                              : item.dificultade === 1
                              ? '중'
                              : item.dificultade === 0
                              ? '하'
                              : ''
                          }}
                        </div>
                      </div>
                      <div class="questions">
                        <div class="exam_area" v-html="item.problem"></div>
                        <div class="popquiz_text">
                          <!-- 동그란 숫자 : ①②③④ -->
                          <ol>
                            <li
                              v-for="(items, id) in item.exampleList"
                              :key="id"
                            >
                              <span
                                :class="item.answer === id ? 'blue' : ''"
                                v-html="items.example"
                              ></span>
                            </li>
                          </ol>
                        </div>
                        <!-- <div v-else class="four_choice">
                        <div class="chioce blue">
                          <div class="num">①</div>
                          <div class="img">이미지</div>
                        </div>
                        <div class="chioce red">
                          <div class="num">②</div>
                          <div class="img">이미지</div>
                        </div>
                        <div class="chioce">
                          <div class="num">③</div>
                          <div class="img">이미지</div>
                        </div>
                        <div class="chioce">
                          <div class="num">④</div>
                          <div class="img">이미지</div>
                        </div>
                      </div> -->
                      </div>
                      <button
                        v-if="openDetail !== item.id"
                        class="btn btn_light3_ss btn_detail_view"
                        @click="$emit('open-detail', item.id)"
                      >
                        상세
                      </button>
                      <button
                        v-else
                        class="btn btn_light3_ss btn_detail_hide"
                        @click="$emit('close-detail')"
                      >
                        접기
                      </button>
                    </div>
                    <!-- /.문제 BOX(쪽지)-->
                  </div>

                  <!-- 오른쪽문제들 -->
                  <div class="questions_area">
                    <!-- 문제 BOX(쪽지)-->
                    <div
                      v-for="(item, idx) in examQuestion.questionList.filter(
                        (items) =>
                          items.id + 1 >
                          Math.ceil(examQuestion.questionList.length / 2)
                      )"
                      :key="idx"
                      class="question_box"
                    >
                      <div class="num_area">
                        <div class="num">{{ item.id + 1 }}.</div>
                        <div
                          class="grade"
                          :class="
                            item.dificultade === 2
                              ? 'high'
                              : item.dificultade === 1
                              ? 'medium'
                              : item.dificultade === 0
                              ? 'low'
                              : ''
                          "
                        >
                          {{
                            item.dificultade === 2
                              ? '상'
                              : item.dificultade === 1
                              ? '중'
                              : item.dificultade === 0
                              ? '하'
                              : ''
                          }}
                        </div>
                      </div>
                      <div class="questions">
                        <div class="exam_area" v-html="item.problem"></div>
                        <div class="popquiz_text">
                          <!-- 동그란 숫자 : ①②③④ -->
                          <ol>
                            <li
                              v-for="(items, id) in item.exampleList"
                              :key="id"
                            >
                              <span
                                :class="item.answer === id ? 'blue' : ''"
                                v-html="items.example"
                              >
                              </span>
                            </li>
                          </ol>
                        </div>
                        <!-- <div v-else class="four_choice">
                        <div class="chioce blue">
                          <div class="num">①</div>
                          <div class="img">이미지</div>
                        </div>
                        <div class="chioce red">
                          <div class="num">②</div>
                          <div class="img">이미지</div>
                        </div>
                        <div class="chioce">
                          <div class="num">③</div>
                          <div class="img">이미지</div>
                        </div>
                        <div class="chioce">
                          <div class="num">④</div>
                          <div class="img">이미지</div>
                        </div>
                      </div> -->
                      </div>
                      <button
                        v-if="openDetail !== item.id"
                        class="btn btn_light3_ss btn_detail_view"
                        @click="$emit('open-detail', item.id)"
                      >
                        상세
                      </button>
                      <button
                        v-else
                        class="btn btn_light3_ss btn_detail_hide"
                        @click="$emit('close-detail')"
                      >
                        접기
                      </button>
                    </div>
                    <!-- /.문제 BOX(쪽지)-->
                  </div>
                </div>
              </div>

              <div class="right_area">
                <!-- 반평균 -->
                <div v-if="openDetail === null" class="view_average">
                  <div class="tit_area">{{ selectedExamInfo.class }}</div>
                  <div class="search_result">
                    <table class="table table-borderless">
                      <!-- <colgroup>
											<col width="60%">
											<col width="40%">
										</colgroup> -->
                      <thead>
                        <tr>
                          <th>이름</th>
                          <th>점수</th>
                        </tr>
                      </thead>
                    </table>
                    <div class="tbl_overflow">
                      <table class="table table-borderless">
                        <!-- <colgroup>
												<col width="60%">
												<col width="40%">
											</colgroup> -->
                        <tbody>
                          <tr>
                            <td class="td011">홍길동</td>
                            <td class="td022">90</td>
                          </tr>
                          <tr>
                            <td>홍길순</td>
                            <td>80</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- /.반평균 -->
                <!-- 상세 -->
                <div v-else class="view_details">
                  <div class="tit_area">문항 00</div>
                  <div class="search_result">
                    <table class="table table-borderless">
                      <!-- 	<colgroup>
											<col width="15%">
											<col width="35%">
											<col width="40%">
										</colgroup> -->
                      <thead>
                        <tr>
                          <th>이름</th>
                          <th>정답 여부</th>
                          <th>오답 체크</th>
                        </tr>
                      </thead>
                    </table>
                    <div class="tbl_overflow">
                      <table class="table table-borderless">
                        <!-- 	<colgroup>
												<col width="15%">
												<col width="35%">
												<col width="40%">
											</colgroup> -->
                        <tbody>
                          <tr>
                            <td class="td01">홍길동</td>
                            <td class="td02">O</td>
                            <td class="td03"><span>정조</span></td>
                          </tr>
                          <tr>
                            <td>홍길순</td>
                            <td>X</td>
                            <td><span class="wrong">중조</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- /.상세 -->
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
  name: 'ClassAverage',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    selectedExamInfo: {
      type: Object,
      default: () => {},
    },
    examQuestion: {
      type: Object,
      default: () => {},
    },
    openDetail: {
      type: Number,
      default: null,
    },
  },
}
</script>

<style></style>
