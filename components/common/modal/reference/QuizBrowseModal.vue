<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataReadQuiz"
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
            <h5 id="exampleModalLabel" class="modal-title">자료 열람</h5>
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
            <!-- 자료 열람 -->
            <div class="reading_section modal_dataquiz">
              <div class="left_section">
                <div class="num_area">
                  <button
                    v-for="(item, idx) in selectData.quizList"
                    :key="idx"
                    class="num"
                    :class="{ active: idx === currentPageIdx }"
                    @click="$emit('change-number', idx)"
                  >
                    {{ idx + 1 }}
                  </button>
                </div>
                <div v-for="(item, idx) in selectData.quizList" :key="idx">
                  <div v-if="idx === currentPageIdx" class="write_area">
                    <div class="edit_area edit_area_padding_12">
                      <button class="btn icons_fullscreen"></button>
                      <div v-html="item.problem"></div>
                    </div>
                  </div>
                </div>
                <div class="btn_area button_margin_top_3">
                  <button
                    class="btn icons_arrow_square_l"
                    :disabled="currentPageIdx === 0"
                    @click="$emit('pagination', 'min')"
                  ></button>
                  <span class="counter">
                    {{ currentPageIdx + 1 }} /
                    {{ selectData?.quizList?.length }}
                  </span>
                  <button
                    class="btn icons_arrow_square_r"
                    :disabled="
                      selectData?.quizList?.length === currentPageIdx + 1
                    "
                    @click="$emit('pagination', 'plus')"
                  ></button>
                </div>
              </div>
              <div class="right_section">
                <div v-for="(item, idx) in selectData.quizList" :key="idx">
                  <div v-if="idx === currentPageIdx" class="info_area">
                    <div class="row">
                      <div class="quiz_area04">
                        <div class="tit">
                          <div
                            class="custom-control custom-radio custom-control-inline"
                          >
                            <input
                              id="rad01"
                              type="radio"
                              name="radA01"
                              class="custom-control-input"
                              :checked="item.quizType === 0"
                              disabled
                            />
                            <label class="custom-control-label" for="rad01"
                              >OX 유형</label
                            >
                          </div>
                        </div>
                        <div class="cnt">
                          <button
                            class="btn btn_activated"
                            :class="{ active: item.oxAnswer === 0 }"
                            disabled
                          >
                            O
                          </button>
                          <button
                            class="btn btn_activated"
                            :class="{ active: item.oxAnswer === 1 }"
                            disabled
                          >
                            X
                          </button>
                        </div>
                      </div>
                      <div class="quiz_area04">
                        <div class="etcbtn_area">
                          <button class="btn btn_crud_default btn_first">
                            처음부터<br />미리보기
                          </button>
                          <button class="btn btn_crud_default btn_present">
                            현재부터<br />미리보기
                          </button>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="tit">
                          <div
                            class="custom-control custom-radio custom-control-inline"
                          >
                            <input
                              id="rad02"
                              type="radio"
                              name="radA01"
                              class="custom-control-input"
                              :checked="item.quizType === 1"
                              disabled
                            />
                            <label class="custom-control-label" for="rad02"
                              >주관식 단답형</label
                            >
                          </div>
                        </div>
                        <div class="cnt">
                          <input
                            type="text"
                            placeholder="정답 입력"
                            class="form-control form-inline"
                            :value="item.shortAnswer"
                            readOnly
                          />
                        </div>
                      </div>
                      <div class="quiz_area">
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            id="rad03"
                            type="radio"
                            name="radA01"
                            class="custom-control-input"
                            :checked="item.quizType === 2"
                            disabled
                          />
                          <label class="custom-control-label" for="rad03"
                            >단답형</label
                          >
                        </div>
                        <div class="mult">
                          <div class="tit stit">정답</div>
                          <div class="cnt">
                            <input
                              type="text"
                              placeholder="정답 입력"
                              class="form-control form-inline"
                              :value="item.subjectiveAnswer"
                              readOnly
                            />
                          </div>
                        </div>
                        <div class="mult">
                          <div class="tit stit">오답</div>
                          <div class="cnt">
                            <input
                              type="text"
                              placeholder="오답 입력"
                              class="form-control form-inline"
                              :value="item.subjectiveWrongAnswer"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="mult">
                          <div class="tit">난이도</div>
                          <div class="cnt">
                            <button
                              class="btn btn_activated"
                              :class="{ active: item.dificultade === 0 }"
                              disabled
                            >
                              상
                            </button>
                            <button
                              class="btn btn_activated"
                              :class="{ active: item.dificultade === 1 }"
                              disabled
                            >
                              중
                            </button>
                            <button
                              class="btn btn_activated"
                              :class="{ active: item.dificultade === 2 }"
                              disabled
                            >
                              하
                            </button>
                          </div>
                        </div>
                        <div class="mult">
                          <div class="tit">제한시간</div>
                          <div class="cnt">
                            <input
                              type="text"
                              placeholder="문제당 제한시간(초)"
                              class="form-control form-inline"
                              :value="item.limitTime"
                              readonly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="idx === currentPageIdx" class="comment_area">
                    <div class="tit_area">
                      <div class="tit">해설</div>
                      <div class="check">
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="checkbox01"
                            type="checkbox"
                            class="custom-control-input"
                            checked
                          />
                          <label class="custom-control-label" for="checkbox01"
                            >정답 및 해설 노출</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="cnt_area">
                      <textarea
                        id=""
                        rows="3"
                        placeholder="입력한 해설"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.자료 열람 -->
            <div class="btnsec">
              <button
                class="btn btn_crud_default"
                data-toggle="modal"
                data-target="#modalStoragepath"
              >
                이동
              </button>
              <button
                class="btn btn_crud_default"
                data-toggle="modal"
                data-target="#modalDataShare01"
              >
                공유
              </button>
              <button class="btn btn_crud_default">다운로드</button>
              <button
                class="btn btn_crud_default"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#modalDataRegiQuiz"
              >
                수정
              </button>
              <button
                class="btn btn_crud_default"
                data-toggle="modal"
                data-target="#modalDataDelete"
              >
                삭제
              </button>
            </div>
            <!-- [개발참조] 하단 info_section 부분은 열람 팝업 공통 -->
            <div class="info_section">
              <div class="cont">
                <span class="title">파일 이름</span>
                <span>등록한 자료 이름</span>
              </div>
              <div class="cont">
                <div class="title">설명</div>
                <span>등록한 설명</span>
              </div>
              <div class="line"></div>

              <div class="cont02">
                <div class="title">자료 구분</div>
                <span class="title03-1">프랜차이즈</span>
              </div>
              <div class="cont02">
                <div class="title">콘텐츠 유형</div>
                <span class="title04-1">동영상</span>
              </div>
              <div class="cont02">
                <div class="title">공개 여부</div>
                <span class="title05-1">ON</span>
              </div>
              <div class="cont02">
                <div class="title">과목</div>
                <span class="title06-1">수학</span>
              </div>
              <div class="cont02">
                <div class="title">경로</div>
                <span class="title07-1">저장 경로가 입력되는 공간입니다.</span>
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
  name: 'QuizBrowseModal',
  props: {
    open: Boolean,
    selectData: {
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
