<template>
  <div
    id="modalDataRegiQuiz"
    class="modal fade modal_ac_manage_dtr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <!-- [개발참조] 자료등록일때 출력되는 버튼 -->
          <h5 id="exampleModalLabel" class="modal-title">자료 등록</h5>
          <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
          <!-- <h5 class="modal-title" id="exampleModalLabel">자료 수정</h5> -->
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
          <div class="modal_dataquiz row">
            <!-- 모달 내용 구분 class-->
            <!-- 왼쪽 영역 -->
            <div class="col-lg-6">
              <div class="regi_area left">
                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2"
                    >파일 이름</label
                  >
                  <div class="col">
                    <input
                      type="text"
                      placeholder=""
                      class="form-control"
                      value="파일 제목으로 자동 출력.pdf"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2">과목</label>
                  <div class="col">
                    <div class="dropdown form-inline">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        과목 선택
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">등록한 과목01</a>
                        <a class="dropdown-item" href="#">등록한 과목02</a>
                        <a class="dropdown-item" href="#">등록한 과목03</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2">설명</label>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="설명 입력"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2">키워드</label>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="키워드 입력 후 Enter 키 입력"
                    />
                    <span class="info"
                      >키워드는 쉼표(,)와 엔터로 구분할 수 있습니다</span
                    >
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2">등록자</label>
                  <div class="col">
                    <input
                      type="text"
                      placeholder=""
                      class="form-control"
                      value="이름"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2"
                    >저장 경로</label
                  >
                  <div class="col">
                    <input
                      type="text"
                      placeholder="저장할 폴더를 선택해 주세요"
                      class="form-control form-inline front_button"
                    />
                    <button
                      class="btn btn_crud_default"
                      data-toggle="modal"
                      data-target="#modalStoragepath"
                    >
                      찾아보기
                    </button>
                  </div>
                </div>

                <div class="form-group row check03">
                  <label for="" class="col-2 col-lg-2 col-sm-2"></label>
                  <div class="cont07">
                    <span class="check01">
                      <span
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="chk01"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label
                          class="custom-control-label check"
                          for="chk01"
                        ></label> </span
                      ><span>교육기관에 해당 자료를 공개합니다.</span>
                    </span>

                    <span class="check02">
                      <span
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="chk02"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label
                          class="custom-control-label check"
                          for="chk02"
                        ></label> </span
                      ><span>공개자료실에 해당 자료를 공개합니다.</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.왼쪽 영역 -->
            <!-- 오른쪽 영역 -->
            <div class="col-lg-6">
              <div class="regi_area right">
                <QuizNumberList
                  :quizList="quizList"
                  :currentQuizIdx="currentQuizIdx"
                  @change-quiz="$emit('change-quiz', $event)"
                  @plus-quiz="$emit('plus-quiz', $event)"
                />

                <div class="write_area">
                  <div class="title_area">
                    <span class="tit">{{ currentQuizIdx + 1 }}번 문제</span>
                    <button class="btn btn_crud_default btn_first">
                      처음부터<br />미리보기
                    </button>
                    <button class="btn btn_crud_default btn_present">
                      현재부터<br />미리보기
                    </button>
                  </div>
                  <div class="edit_area">
                    <client-only v-for="(item, idx) in quizList" :key="idx">
                      <VueEditor
                        v-if="currentQuizIdx === idx"
                        v-model="item.quizItem"
                        :customModules="customModules"
                        :editorOptions="editorOptions"
                        :editorToolbar="editorToolbar"
                      />
                    </client-only>
                  </div>
                  <div class="btn_area">
                    <button
                      class="btn icons_arrow_square_l"
                      :class="{ disabled: currentQuizIdx === 0 }"
                      @click="$emit('quiz-pagination', 'min')"
                    ></button>
                    <span class="counter">{{
                      `${currentQuizIdx + 1}/${quizList.length}`
                    }}</span>
                    <button
                      class="btn icons_arrow_square_r"
                      :class="{
                        disabled: currentQuizIdx === quizList.length - 1,
                      }"
                      @click="$emit('quiz-pagination', 'plus')"
                    ></button>
                    <button
                      v-if="quizList.length > 1"
                      class="btn btn_crud_default btn_del"
                      @click="$emit('delete-quiz', currentQuizIdx)"
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
                  <div v-if="currentQuizIdx === idx" class="row">
                    <div class="col-xl-6">
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
                        <button class="btn btn_activated active">O</button>
                        <button class="btn btn_activated">X</button>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="tit">난이도</div>
                      <div class="cnt">
                        <button class="btn btn_activated active">상</button>
                        <button class="btn btn_activated">중</button>
                        <button class="btn btn_activated">하</button>
                      </div>
                    </div>
                    <div class="col-xl-6">
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
                    <div class="col-xl-6">
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
                    <div class="col-xl-6">
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
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
          <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
          <!-- 	<button class="btn btn_crud_point">완료</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Quill } from 'vue2-editor'
import { ImageDrop } from 'quill-image-drop-module'
import ImageEdit from 'quill-image-edit-module'
import QuizNumberList from '@/components/reference/QuizNumberList.vue'

Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageEdit', ImageEdit)

export default {
  name: 'QuizAddModal',
  components: { QuizNumberList },
  props: {
    quizList: {
      type: Array,
      default: null,
    },
    currentQuizIdx: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      customModules: [
        { alias: 'imageDrop', module: ImageDrop },
        { alias: 'imageEdit', module: ImageEdit },
      ],
      editorOptions: {
        modules: {
          imageDrop: true,
          imageEdit: true,
        },
      },
      editorToolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' },
        ],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block'],
      ],
    }
  },
}
</script>

<style></style>
