<template>
  <div
    id="modalExamResult01"
    class="modal fade modal_ac_manage_exam"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">시험 결과</h5>
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
          <div v-if="selectedExamInfo.type === '퀴즈'" class="exam_result">
            <div class="left_area">
              <div class="tit_area">
                <div class="title">
                  {{ selectedExamInfo.course }}
                  {{ selectedExamInfo.lesson }} 퀴즈
                  <span>정답률60%</span>
                </div>
                <div class="date">2022.01.01</div>
              </div>
              <div class="questions_section">
                <!-- 왼쪽문제들 -->
                <div class="questions_area">
                  <!-- 문제 BOX(퀴즈)-->
                  <div class="question_box">
                    <div class="num_area">
                      <div class="num">1.</div>
                      <div class="grade high">상</div>
                    </div>
                    <div class="questions">
                      <div class="exam_area">문제 출력 영역</div>
                      <div class="example_area left blue">보기 출력 영역</div>
                      <div class="example_area right red">보기 출력 영역</div>
                    </div>
                    <button
                      v-if="true"
                      class="btn btn_light3_ss btn_detail_view"
                    >
                      상세
                    </button>
                    <button v-else class="btn btn_light3_ss btn_detail_hide">
                      접기
                    </button>
                  </div>
                  <!-- /.문제 BOX(퀴즈)-->
                  <!-- 문제 BOX(퀴즈)-->
                  <div class="question_box">
                    <div class="num_area">
                      <div class="num">2.</div>
                      <div class="grade medium">중</div>
                    </div>
                    <div class="questions">
                      <div class="exam_area">문제 출력 영역</div>
                      <div class="example_area left blue">보기 출력 영역</div>
                      <div class="example_area right red">보기 출력 영역</div>
                    </div>
                    <button class="btn btn_light3_ss btn_detail_view">
                      상세
                    </button>
                    <button
                      class="btn btn_light3_ss btn_detail_hide"
                      style="display: none"
                    >
                      접기
                    </button>
                  </div>
                  <!-- /.문제 BOX(퀴즈)-->
                  <!-- 문제 BOX(퀴즈)-->
                  <div class="question_box">
                    <div class="num_area">
                      <div class="num">3.</div>
                      <div class="grade low">하</div>
                    </div>
                    <div class="questions">
                      <div class="exam_area">문제 출력 영역</div>
                      <div class="example_area left blue">보기 출력 영역</div>
                      <div class="example_area right red">보기 출력 영역</div>
                    </div>
                    <button class="btn btn_light3_ss btn_detail_view">
                      상세
                    </button>
                    <button
                      class="btn btn_light3_ss btn_detail_hide"
                      style="display: none"
                    >
                      접기
                    </button>
                  </div>
                  <!-- /.문제 BOX(퀴즈)-->
                </div>
                <!-- 오른쪽문제들 -->
                <div class="questions_area">
                  <!-- 문제 BOX(퀴즈)-->
                  <div class="question_box">
                    <div class="num_area">
                      <div class="num">1.</div>
                      <div class="grade high">상</div>
                    </div>
                    <div class="questions">
                      <div class="exam_area">문제 출력 영역</div>
                      <div class="example_area left blue">보기 출력 영역</div>
                      <div class="example_area right red">보기 출력 영역</div>
                    </div>
                    <button class="btn btn_light3_ss btn_detail_view">
                      상세
                    </button>
                    <button
                      class="btn btn_light3_ss btn_detail_hide"
                      style="display: none"
                    >
                      접기
                    </button>
                  </div>
                  <!-- /.문제 BOX(퀴즈)-->
                  <!-- 문제 BOX(퀴즈)-->
                  <div class="question_box">
                    <div class="num_area">
                      <div class="num">2.</div>
                      <div class="grade medium">중</div>
                    </div>
                    <div class="questions">
                      <div class="exam_area">문제 출력 영역</div>
                      <div class="example_area left blue">보기 출력 영역</div>
                      <div class="example_area right red">보기 출력 영역</div>
                    </div>
                    <button class="btn btn_light3_ss btn_detail_view">
                      상세
                    </button>
                    <button
                      class="btn btn_light3_ss btn_detail_hide"
                      style="display: none"
                    >
                      접기
                    </button>
                  </div>
                  <!-- /.문제 BOX(퀴즈)-->
                  <!-- 문제 BOX(퀴즈)-->
                  <div class="question_box">
                    <div class="num_area">
                      <div class="num">3.</div>
                      <div class="grade low">하</div>
                    </div>
                    <div class="questions">
                      <div class="exam_area">문제 출력 영역</div>
                      <div class="example_area left blue">보기 출력 영역</div>
                      <div class="example_area right red">보기 출력 영역</div>
                    </div>
                    <button class="btn btn_light3_ss btn_detail_view">
                      상세
                    </button>
                    <button
                      class="btn btn_light3_ss btn_detail_hide"
                      style="display: none"
                    >
                      접기
                    </button>
                  </div>
                  <!-- /.문제 BOX(퀴즈)-->
                </div>
              </div>
            </div>
            <div class="right_area">
              <!-- 개인 -->
              <div class="view_personal">
                <div class="tit_area">{{ selectedExamInfo.name }}</div>
                <div class="search_result">
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
                  <div class="tbl_overflow">
                    <table class="table table-borderless">
                      <!-- <colgroup>
												<col width="20%">
												<col width="35%">
												<col width="45%">
											</colgroup> -->
                      <tbody>
                        <tr>
                          <td class="td01">1</td>
                          <td class="td02">O</td>
                          <td class="td03"><span>정조</span></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>X</td>
                          <td><span class="wrong">이순신</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- /.개인 -->
              <!-- 상세 -->
              <div class="view_details" style="display: none">
                <div class="tit_area">문항 00</div>
                <div class="search_result">
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
              <!-- /.상세 -->
            </div>
          </div>

          <div v-else class="exam_result">
            <div class="left_area">
              <div class="tit_area">
                <div class="title">
                  {{ selectedExamInfo.course }}
                  {{ selectedExamInfo.lesson }} 쪽지시험
                  <span>정답률60%</span>
                </div>
                <div class="date">2022.01.01</div>
              </div>
              <div class="questions_section">
                <!-- 왼쪽문제들 -->
                <div class="questions_area">
                  <!-- 문제 BOX(쪽지)-->
                  <div class="question_box">
                    <div class="num_area">
                      <div class="num">1.</div>
                      <div class="grade high">상</div>
                    </div>
                    <div class="questions">
                      <div class="exam_area">문제 출력 영역</div>
                      <div class="popquiz_text">
                        <!-- 동그란 숫자 : ①②③④ -->
                        <ol>
                          <li>
                            <span class="blue"
                              >① 보기 1번 출력 보기 1번 출력 보기 1번 출력 보기
                              1번</span
                            >
                          </li>
                          <li>
                            <span class="red"
                              >② 보기 2번 출력 보기 2번 출력 보기 2번 출력 보기
                              2번</span
                            >
                          </li>
                          <li>
                            <span
                              >③ 보기 3번 출력 보기 3번 출력 보기 3번 출력 보기
                              3번</span
                            >
                          </li>
                          <li>
                            <span
                              >④ 보기 4번 출력 보기 4번 출력 보기 4번 출력 보기
                              4번</span
                            >
                          </li>
                        </ol>
                      </div>
                    </div>
                    <button class="btn btn_light3_ss btn_detail_view">
                      상세
                    </button>
                    <button
                      class="btn btn_light3_ss btn_detail_hide"
                      style="display: none"
                    >
                      접기
                    </button>
                  </div>
                  <!-- /.문제 BOX(쪽지)-->
                  <!-- 문제 BOX(쪽지)-->
                  <div class="question_box">
                    <div class="num_area">
                      <div class="num">2.</div>
                      <div class="grade medium">중</div>
                    </div>
                    <div class="questions">
                      <div class="exam_area">문제 출력 영역</div>
                      <!-- 이미지 사지선다 형 동그란 숫자 : ①②③④ -->
                      <div class="four_choice">
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
                      </div>
                    </div>
                    <button class="btn btn_light3_ss btn_detail_view">
                      상세
                    </button>
                    <button
                      class="btn btn_light3_ss btn_detail_hide"
                      style="display: none"
                    >
                      접기
                    </button>
                  </div>
                  <!-- /.문제 BOX(쪽지)-->
                </div>
                <!-- 오른쪽문제들 -->
                <div class="questions_area">
                  <!-- 문제 BOX(쪽지)-->
                  <div class="question_box">
                    <div class="num_area">
                      <div class="num">3.</div>
                      <div class="grade low">하</div>
                    </div>
                    <div class="questions">
                      <div class="exam_area">문제 출력 영역</div>
                      <div class="popquiz_text">
                        <!-- 동그란 숫자 : ①②③④ -->
                        <ol>
                          <li>
                            <span class="blue"
                              >① 보기 1번 출력 보기 1번 출력 보기 1번 출력 보기
                              1번</span
                            >
                          </li>
                          <li>
                            <span class="red"
                              >② 보기 2번 출력 보기 2번 출력 보기 2번 출력 보기
                              2번</span
                            >
                          </li>
                          <li>
                            <span
                              >③ 보기 3번 출력 보기 3번 출력 보기 3번 출력 보기
                              3번</span
                            >
                          </li>
                        </ol>
                      </div>
                    </div>
                    <button class="btn btn_light3_ss btn_detail_view">
                      상세
                    </button>
                    <button
                      class="btn btn_light3_ss btn_detail_hide"
                      style="display: none"
                    >
                      접기
                    </button>
                  </div>
                  <!-- /.문제 BOX(쪽지)-->
                  <!-- 문제 BOX(쪽지)-->
                  <div class="question_box">
                    <div class="num_area">
                      <div class="num">4.</div>
                      <div class="grade medium">중</div>
                    </div>
                    <div class="questions">
                      <div class="exam_area">문제 출력 영역</div>
                      <!-- 이미지 사지선다 형 동그란 숫자 : ①②③④ -->
                      <div class="four_choice">
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
                      </div>
                    </div>
                    <button class="btn btn_light3_ss btn_detail_view">
                      상세
                    </button>
                    <button
                      class="btn btn_light3_ss btn_detail_hide"
                      style="display: none"
                    >
                      접기
                    </button>
                  </div>
                  <!-- /.문제 BOX(쪽지)-->
                </div>
              </div>
            </div>
            <div class="right_area">
              <div class="view_personal">
                <div class="tit_area">{{ selectedExamInfo.name }}</div>
                <div class="search_result">
                  <table class="table table-borderless">
                    <!-- <colgroup>
											<col width="20%">
											<col width="40%">
											<col width="40%">
										</colgroup> -->
                    <thead>
                      <tr>
                        <th>번호</th>
                        <th>정답 여부</th>
                        <th>오답 체크</th>
                      </tr>
                    </thead>
                  </table>
                  <div class="tbl_overflow">
                    <table class="table table-borderless">
                      <!-- <colgroup>
												<col width="20%">
												<col width="40%">
												<col width="40%">
											</colgroup> -->
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>O</td>
                          <td><span>①</span></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>X</td>
                          <td><span class="wrong">②</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="view_details" style="display: none">
                <div class="tit_area">문항 00</div>
                <div class="search_result">
                  <table class="table table-borderless">
                    <!-- <colgroup>
											<col width="20%">
											<col width="40%">
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
                      <!-- <colgroup>
												<col width="20%">
												<col width="40%">
												<col width="40%">
											</colgroup> -->
                      <tbody>
                        <tr>
                          <td class="td01">홍길동</td>
                          <td class="td02">O</td>
                          <td class="td03"><span>①</span></td>
                        </tr>
                        <tr>
                          <td>홍길순</td>
                          <td>X</td>
                          <td><span class="wrong">②</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExamResult01',
  props: {
    selectedExamInfo: {
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
