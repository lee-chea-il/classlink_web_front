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
          <ModalHeader title="자료 열람" @close="$emit('close')" />

          <div class="modal-body">
            <!-- 자료 열람 -->
            <div class="reading_section modal_dataquiz">
              <QuizLeftSection
                :quizList="selectData.quizList"
                :currentIdx="currentPageIdx"
                @pagination="setPagination"
                @change-number="$emit('change-number', $event)"
              />

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
                          <button
                            class="btn btn_crud_default btn_first"
                            @click="$emit('preview', 'browse', 'first')"
                          >
                            처음부터<br />미리보기
                          </button>
                          <button
                            class="btn btn_crud_default btn_present"
                            @click="$emit('preview', 'browse')"
                          >
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
                            :value="item.subjectiveAnswer"
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
                              :value="item.shortAnswer"
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
                              :value="item.shortWrongAnswer"
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
                @click="$emit('open-save-path', 'isQuizBrowseModal')"
              >
                이동
              </button>
              <button class="btn btn_crud_default" data-toggle="modal">
                <!-- @click="
                  $emit('view-url', 'isQuizBrowseModal', selectData.savePath)
                " -->
                공유
              </button>
              <button class="btn btn_crud_default">다운로드</button>
              <button
                class="btn btn_crud_default"
                data-dismiss="modal"
                data-toggle="modal"
                @click="$emit('change')"
              >
                수정
              </button>
              <button
                class="btn btn_crud_default"
                data-toggle="modal"
                @click="$emit('delete', 'isQuizBrowseModal')"
              >
                삭제
              </button>
            </div>

            <!-- [개발참조] 하단 info_section 부분은 열람 팝업 공통 -->
            <FileInfoSection :fileInfo="selectData" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'
import FileInfoSection from '@/components/reference/FileInfoSection.vue'
import QuizLeftSection from '~/components/reference/quizBrowse/QuizLeftSection.vue'

export default {
  name: 'QuizBrowseModal',
  components: { FileInfoSection, ModalHeader, QuizLeftSection },
  props: {
    open: Boolean,
    selectData: {
      type: Object,
      default: () => {},
    },
    currentPageIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setPagination(e, idx) {
      this.$emit('pagination', e, idx)
    },
  },
}
</script>
