<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataReadNote"
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
            <div class="reading_section modal_dataquiz note_divide">
              <div class="left_section">
                <div class="left_area">
                  <div class="num_area" style="justify-content: flex-start">
                    <button
                      v-for="(item, idx) in selectData.noteTestList"
                      :key="idx"
                      class="num"
                      :class="{ active: idx === currentPageIdx }"
                      @click="$emit('change-number', idx)"
                    >
                      {{ idx + 1 }}
                    </button>
                  </div>
                  <div
                    v-for="(item, idx) in selectData.noteTestList"
                    :key="idx"
                  >
                    <div v-if="idx === currentPageIdx" class="write_area">
                      <div class="edit_area edit_area_padding_12">
                        <div v-html="item.problem"></div>
                        <button class="btn icons_fullscreen"></button>
                      </div>
                    </div>
                  </div>

                  <div class="btn_area button_margin_top_3">
                    <button
                      class="btn icons_arrow_square_l"
                      :disabled="currentPageIdx === 0"
                      @click="$emit('pagination', 'min')"
                    ></button>
                    <span class="counter"
                      >{{ currentPageIdx + 1 }}/{{
                        selectData?.noteTestList?.length
                      }}</span
                    >
                    <button
                      class="btn icons_arrow_square_r"
                      :disabled="
                        selectData?.noteTestList?.length - 1 === currentPageIdx
                      "
                      @click="$emit('pagination', 'plus')"
                    ></button>
                  </div>
                </div>

                <div v-if="selectData?.noteTestList" class="right_area">
                  <div class="write_area">
                    <div
                      v-for="(item, idx) in selectData?.noteTestList[
                        currentPageIdx
                      ]?.exampleList"
                      :key="idx"
                      class="edit_area02 edit_area_padding_12"
                    >
                      <div v-html="item?.example"></div>
                      <button class="btn icons_fullscreen"></button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="right_section">
                <div v-for="(item, idx) in selectData.noteTestList" :key="idx">
                  <div v-if="idx === currentPageIdx" class="info_area">
                    <div class="row">
                      <div class="col-12">
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
                        <div class="tit">정답</div>
                        <select
                          id="answer"
                          name="answer"
                          class="cnt"
                          :value="item.answer"
                        >
                          <option :value="1">1</option>
                          <option :value="2">2</option>
                          <option :value="3">3</option>
                          <option :value="4">4</option>
                          <option :value="5">5</option>
                        </select>
                      </div>
                      <div class="col-12">
                        <div class="tit">난이도</div>
                        <div class="cnt difficult">
                          <button
                            class="btn btn_activated"
                            disabled
                            :class="{ active: item.dificultade === 0 }"
                          >
                            상
                          </button>
                          <button
                            class="btn btn_activated"
                            disabled
                            :class="{ active: item.dificultade === 1 }"
                          >
                            중
                          </button>
                          <button
                            class="btn btn_activated"
                            disabled
                            :class="{ active: item.dificultade === 2 }"
                          >
                            하
                          </button>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="tit">제한시간</div>
                        <div class="cnt">
                          <input
                            type="text"
                            placeholder="문제당 제한시간(초)"
                            class="form-control"
                            disabled
                            :value="item.limitTime"
                          />
                        </div>
                      </div>
                      <div class="col-12 comment_area">
                        <div class="tit_area">
                          <div class="tit">해설</div>
                          <div class="check">
                            <div
                              class="custom-control custom-checkbox form-inline"
                            >
                              <input
                                id="checkbox01"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="checkbox01"
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
                data-target="#modalDataRegiNote"
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
  name: 'NoteTestBrowseModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
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

<style></style>
