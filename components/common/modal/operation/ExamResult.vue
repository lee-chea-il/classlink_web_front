<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalExamResult01"
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
              <!-- <div v-if="selectedExamInfo.type === '퀴즈'" class="exam_result"> -->
              <div class="left_area">
                <div class="tit_area">
                  <div class="title">
                    {{ selectedExamInfo.course }}
                    레슨{{ selectedExamInfo.lesson }}
                    {{
                      examQuestion.uploadType === 'quiz'
                        ? '퀴즈'
                        : examQuestion.uploadType === 'test'
                        ? '쪽지시험'
                        : ''
                    }}
                    <span>정답률60%</span>
                  </div>
                  <div class="date">{{ selectedExamInfo.date }}</div>
                </div>
                <div
                  v-if="examQuestion.uploadType === 'quiz'"
                  class="questions_section"
                >
                  <!-- 왼쪽문제들 -->
                  <div class="questions_area">
                    <!-- 문제 BOX(퀴즈)-->
                    <div
                      v-for="(item, idx) in examQuestion?.quizList.filter(
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
                          :class="{
                            high: item.dificultade === 2,
                            medium: item.dificultade === 1,
                            low: item.dificultade === 0,
                          }"
                        >
                          {{ setFilterDificultade(item.dificultade) }}
                        </div>
                      </div>
                      <div class="questions">
                        <div class="exam_area" v-html="item.question"></div>
                        <div class="d-flex justify-content-between">
                          <div class="example_area left blue">O</div>
                          <div class="example_area right red">X</div>
                          <!-- <div
                            v-for="(items, id) in 2"
                            :key="id"
                            class="example_area right"
                            :class="item.oxAnswer === "
                          >
                            {{ item.oxAnswer === id ? 'O' : 'X' }}
                          </div> -->
                        </div>
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
                      v-for="(item, idx) in examQuestion.quizList?.filter(
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
                          :class="{
                            high: item.dificultade === 2,
                            medium: item.dificultade === 1,
                            low: item.dificultade === 0,
                          }"
                        >
                          {{ setFilterDificultade(item.dificultade) }}
                        </div>
                      </div>
                      <div class="questions">
                        <div class="exam_area" v-html="item.question"></div>
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
                          :class="{
                            high: item.dificultade === 2,
                            medium: item.dificultade === 1,
                            low: item.dificultade === 0,
                          }"
                        >
                          {{ setFilterDificultade(item.dificultade) }}
                        </div>
                      </div>
                      <div class="questions">
                        <div class="exam_area" v-html="item.question"></div>
                        <div
                          v-if="!item.question.includes('<img src=')"
                          class="popquiz_text"
                        >
                          <!-- 동그란 숫자 : ①②③④ -->
                          <ol>
                            <li
                              v-for="(items, id) in item.exampleList"
                              :key="id"
                              class="d-flex justify-content-left ql-align-left answer"
                            >
                              <span
                                class="num"
                                :class="item.answer === id ? 'blue' : ''"
                                >{{ number[id] }}</span
                              >
                              <span
                                class="margin"
                                :class="item.answer === id ? 'blue' : ''"
                                v-html="items.example"
                              >
                              </span>
                            </li>
                          </ol>
                        </div>
                        <div v-else class="four_choice">
                          <div
                            v-for="(items, id) in item.exampleList"
                            :key="id"
                            class="chioce"
                            :class="item.answer === id ? 'blue' : ''"
                          >
                            <div class="num">{{ number[id] }}</div>
                            <div class="img" v-html="items.example"></div>
                          </div>
                          <!-- <div class="chioce red">
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
                          </div> -->
                        </div>
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
                          :class="{
                            high: item.dificultade === 2,
                            medium: item.dificultade === 1,
                            low: item.dificultade === 0,
                          }"
                        >
                          {{ setFilterDificultade(item.dificultade) }}
                          <!-- {{ $emit('filter-dificultade', item.dificultade) }} -->
                        </div>
                      </div>
                      <div class="questions">
                        <div class="exam_area" v-html="item.question"></div>
                        <div
                          v-if="!item.question.includes('<img src=')"
                          class="popquiz_text"
                        >
                          <!-- 동그란 숫자 : ①②③④ -->
                          <ol>
                            <li
                              v-for="(items, id) in item.exampleList"
                              :key="id"
                              class="d-flex justify-content-left ql-align-left answer"
                            >
                              <span
                                class="num"
                                :class="item.answer === id ? 'blue' : ''"
                                >{{ number[id] }}</span
                              >
                              <span
                                class="margin"
                                :class="item.answer === id ? 'blue' : ''"
                                v-html="items.example"
                              >
                              </span>
                            </li>
                          </ol>
                        </div>
                        <div v-else class="four_choice">
                          <div
                            v-for="(items, id) in item.exampleList"
                            :key="id"
                            class="chioce"
                            :class="item.answer === id ? 'blue' : ''"
                          >
                            <div class="num">{{ number[id] }}</div>
                            <div class="img" v-html="items.example"></div>
                          </div>
                          <!-- <div class="chioce red">
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
                          </div> -->
                        </div>
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
                <!-- 개인 -->
                <div class="view_personal">
                  <div class="tit_area">{{ selectedExamInfo.name }}</div>
                  <!-- 개인 -->
                  <div v-if="openDetail === null" class="search_result">
                    <table class="table table-borderless">
                      <!-- 	<colgroup>
											<col width="20%">
											<col width="35%">
											<col width="45%">
										</colgroup> -->
                      <thead>
                        <tr>
                          <th>번호</th>
                          <th>정답 여부</th>
                          <th>오답 체크</th>
                        </tr>
                      </thead>
                    </table>

                    <div v-if="examQuestion.uploadType === 'quiz'">
                      <table class="table table-borderless">
                        <!-- <colgroup>
												<col width="20%">
												<col width="35%">
												<col width="45%">
											</colgroup> -->
                        <tbody>
                          <tr
                            v-for="(item, idx) in selectedExamInfo.examResult"
                            :key="idx"
                          >
                            <td class="td01">{{ item.num }}</td>
                            <td class="td02">
                              {{
                                item.check ===
                                examQuestion?.quizList[idx].oxAnswer
                                  ? 'O'
                                  : 'X'
                              }}
                            </td>
                            <td class="td03">
                              <span>{{ item.check }}</span>
                            </td>
                          </tr>
                          <!-- <tr>
                          <td>2</td>
                          <td>X</td>
                          <td><span class="wrong">이순신</span></td>
                        </tr> -->
                        </tbody>
                      </table>
                    </div>

                    <div v-else class="tbl_overflow">
                      <table class="table table-borderless">
                        <!-- <colgroup>
												<col width="20%">
												<col width="35%">
												<col width="45%">
											</colgroup> -->
                        <tbody>
                          <tr
                            v-for="(item, idx) in selectedExamInfo.examResult"
                            :key="idx"
                          >
                            <td class="td01">{{ item.num }}</td>
                            <td class="td02">
                              {{
                                examQuestion?.questionList[idx].answer ===
                                item.check
                                  ? 'O'
                                  : 'X'
                              }}
                            </td>
                            <td class="td03">
                              <span
                                :class="{
                                  wrong:
                                    examQuestion?.questionList[idx].answer !==
                                    item.check,
                                }"
                                >{{
                                  item.check === 0
                                    ? '①'
                                    : item.check === 1
                                    ? '②'
                                    : item.check === 2
                                    ? '③'
                                    : item.check === 3
                                    ? '④'
                                    : ''
                                }}</span
                              >
                            </td>
                          </tr>
                          <!-- <tr>
                          <td>2</td>
                          <td>X</td>
                          <td><span class="wrong">이순신</span></td>
                        </tr> -->
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <!-- 상세 -->
                  <div v-else class="search_result">
                    <table class="table table-borderless">
                      <!-- <colgroup>
											<col width="20%">
											<col width="35%">
											<col width="45%">
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
                        <!-- <colgroup>
												<col width="20%">
												<col width="35%">
												<col width="45%">
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
                <!-- /.개인 -->
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
  name: 'ExamResult',
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
    number: {
      type: Array,
      default: () => [],
    },
    setFilterDificultade: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.questions {
  max-width: 260px;
}
.exam_area {
  display: block !important;
  text-align: left;
  padding: 10px;
  word-break: break-all;
  /* max-width: 258px !important; */
}
.exam_area > ::v-deep p img {
  max-width: 100%;
}
.answer {
  word-break: break-all;
}
.margin {
  margin-left: 5px;
}
.img {
  padding: 10px;
  max-width: 101px;
}
.img > ::v-deep p img {
  max-width: 100%;
}
.ql-align-center {
  display: flex;
  align-items: center;
}

/* .four_choice {
  max-width: 258px;
} */
</style>
