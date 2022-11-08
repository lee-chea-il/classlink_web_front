<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalLessonView"
      class="modal modal_ac_manage_lesson double modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="레슨 열람" @close="$emit('close')" />
          <div class="modal-body">
            <div class="modal_LessonView">
              <!-- 모달 내용 구분 class-->
              <!-- 2단 분류 컨텐츠 -->
              <div class="divide_section">
                <!-- 왼쪽 영역 -->
                <div class="divide_area left">
                  <div class="form-group">
                    <label for="">제목</label>
                    <div class="col">입력한 레슨 제목</div>
                  </div>
                  <div class="form-group">
                    <label for="">설명</label>
                    <div class="col">입력한 레슨 설명</div>
                  </div>
                  <div class="form-group">
                    <label for="">교육 목표</label>
                    <div class="col">입력한 교육 목표</div>
                  </div>
                  <div class="form-group">
                    <label for="">레슨 자료</label>
                    <div class="col">
                      <div class="list_box">
                        <div class="sum">등록 개수: <span>5</span>개</div>
                        <div class="list_area">
                          <ul>
                            <li>
                              <span class="fran"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <i class="btn icons_zoom_off"></i>
                            </li>
                            <li>
                              <span class="inst"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <i class="btn icons_zoom_off"></i>
                            </li>
                            <li>
                              <span class="normal"
                                >자연수의 혼합 계산 영상1.mp4</span
                              >
                              <i class="btn icons_zoom_off"></i>
                            </li>
                            <li>
                              <span class="fran"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <i class="btn icons_zoom_off"></i>
                            </li>
                            <li>
                              <span class="inst"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <i class="btn icons_zoom_off"></i>
                            </li>
                            <li>
                              <span class="normal"
                                >자연수의 혼합 계산 영상1.mp4</span
                              >
                              <i class="btn icons_zoom_off"></i>
                            </li>
                            <li>
                              <span class="fran"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <i class="btn icons_zoom_off"></i>
                            </li>
                            <li>
                              <span class="inst"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <i class="btn icons_zoom_off"></i>
                            </li>
                            <li>
                              <span class="normal"
                                >자연수의 혼합 계산 영상1.mp4</span
                              >
                              <i class="btn icons_zoom_off"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">키워드</label>
                    <div class="col">
                      <span class="keyword">키워드1</span>
                      <span class="keyword">키워드2</span>
                      <span class="keyword">키워드3</span>
                    </div>
                  </div>

                  <div class="form-group cont div_cont">
                    <label for="">구분</label>
                    <div class="col">프랜차이즈</div>
                  </div>

                  <div class="form-group cont">
                    <label for="">과목</label>
                    <div class="col">수학</div>
                  </div>

                  <div class="form-group cont">
                    <label for="">등록자</label>
                    <div class="col">홍길동</div>
                  </div>

                  <div class="form-group cont">
                    <label for="">등록일</label>
                    <div class="col">2022.08.08</div>
                  </div>

                  <div class="form-group cont">
                    <label for="">저장 경로</label>
                    <div class="col">
                      수학 > 대단원1 > 수학 > 대단원1 > 수학 > 대단원1 수학 >
                      대단원1 > 수학 > 대단원1
                    </div>
                  </div>

                  <div class="form-group">
                    <label for=""></label>
                    <div class="col">
                      <input
                        id=""
                        type="checkbox"
                        class="custom-control-input"
                        disabled
                      />
                      <label class="custom-control-label check" for="checkbox01"
                        >교육기관에 해당 자료를 공개합니다.</label
                      >
                    </div>
                  </div>
                </div>
                <!-- /.왼쪽 영역 -->

                <!-- 오른쪽 영역 -->
                <div class="divide_area right">
                  <!-- [개발참조] 동영상,문서 컨텐츠 -->

                  <div class="thumb_box">
                    <div class="row">
                      <div class="title col-12">자료 열람</div>
                      <div class="thumbnail_view col-12"></div>
                    </div>

                    <div class="row name">
                      <label for="" class="col-3 col-lg-3 col-sm-2"
                        >파일 이름</label
                      >
                      <div class="col">
                        <span>등록한 자료 이름</span>
                      </div>
                    </div>

                    <div class="row">
                      <label for="" class="col-3 col-lg-3 col-sm-2">설명</label>
                      <div class="col">
                        <span>등록한 설명</span>
                      </div>
                    </div>
                    <div class="div_line01"></div>
                    <div class="div_cont02">
                      <div class="row">
                        <label for="" class="col-3 col-lg-3 col-sm-2 cont"
                          >자료 구분</label
                        >
                        <div class="col cont">
                          <span>프랜차이즈</span>
                        </div>
                      </div>

                      <div class="row">
                        <label for="" class="col-3 col-lg-3 col-sm-2 cont"
                          >유형</label
                        >
                        <div class="col cont">
                          <span>동영상</span>
                        </div>
                      </div>

                      <div class="row">
                        <label for="" class="col-3 col-lg-3 col-sm-2 cont"
                          >등록 일시</label
                        >
                        <div class="col cont">
                          <span>2022.07.14 18:28:54</span>
                        </div>
                      </div>

                      <div class="row">
                        <label for="" class="col-3 col-lg-3 col-sm-2 cont"
                          >용량</label
                        >
                        <div class="col cont">
                          <span>21.4MB</span>
                        </div>
                      </div>

                      <div class="row">
                        <label for="" class="col-3 col-lg-3 col-sm-2 cont"
                          >등록자</label
                        >
                        <div class="col cont">
                          <span>홍길동</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- /. 동영상,문서 컨텐츠 -->

                  <!-- [개발참조] 퀴즈 컨텐츠 -->

                  <div class="quiz">
                    <div class="thumb_box">
                      <div class="row">
                        <div class="title col-12">자료 열람</div>
                        <div class="thumbnail_view02 col-12">
                          <button class="btn icons_fullscreen"></button>
                        </div>
                      </div>

                      <div class="page_thumb row">
                        <div class="pagination_section">
                          <nav aria-label="Page navigation example">
                            <ul class="pagination">
                              <li class="page-item">
                                <a class="page-link" href="#">
                                  <span class="previous"></span>
                                </a>
                              </li>
                              <li class="page-item">
                                <a class="page-link active" href="#">1/10</a>
                              </li>
                              <li class="page-item">
                                <a class="page-link" href="#">
                                  <span class="next"></span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <button class="btn btn_crud_default preview">
                          미리보기
                        </button>
                      </div>

                      <div class="quiz_sec01 row">
                        <div class="left_area left col-lg-6">
                          <div class="row">
                            <label for="" class="col-4 col-lg-4 col-sm-3 font"
                              >유형</label
                            >
                            <div class="col">
                              <span>OX 퀴즈</span>
                            </div>
                          </div>

                          <div class="row">
                            <label for="" class="col-4 col-lg-4 col-sm-3 font"
                              >정답</label
                            >
                            <div class="col">
                              <span>O</span>
                            </div>
                          </div>

                          <div class="row">
                            <label for="" class="col-4 col-lg-4 col-sm-3 font"
                              >난이도</label
                            >
                            <div class="col">
                              <span>상</span>
                            </div>
                          </div>

                          <div class="row">
                            <label for="" class="col-4 col-lg-4 col-sm-3 font"
                              >제한시간</label
                            >
                            <div class="col">
                              <span>15초</span>
                            </div>
                          </div>
                        </div>

                        <div class="right_area right col-lg-6">
                          <div class="row">
                            <label for="" class="col-3 col-lg-3 col-sm-2 font"
                              >해설</label
                            >
                            <div class="col">
                              <input
                                id=""
                                type="checkbox"
                                class="custom-control-input"
                                disabled
                              />
                              <label
                                class="custom-control-label check"
                                for="checkbox01"
                                >정답 및 해설 노출</label
                              >
                            </div>
                          </div>

                          <div class="row">
                            <input
                              type="text"
                              placeholder="입력한 해설"
                              class="form-control form-inline"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="div_line01"></div>

                      <div class="row main">
                        <label for="" class="col-3 col-lg-3 col-sm-2"
                          >파일 이름</label
                        >
                        <div class="col main02">
                          <span>등록한 자료 이름</span>
                        </div>
                      </div>

                      <div class="row">
                        <label for="" class="col-3 col-lg-3 col-sm-2"
                          >설명</label
                        >
                        <div class="col main02">
                          <span
                            >등록한 설명이 입력되는 공간입니다 등록된 설명이
                            입력되는 공간입니다 등록한 설명이 입력되는
                            공간입니다 등록된 설명이 입력되는 공간입니다</span
                          >
                        </div>
                      </div>

                      <div class="div_line01"></div>

                      <div class="quiz_sec02 row">
                        <div class="left_area left col-lg-6">
                          <div class="row cont02">
                            <label for="" class="col-6 col-lg-6 col-sm-4"
                              >자료 구분</label
                            >
                            <div class="col">
                              <span>프랜차이즈</span>
                            </div>
                          </div>

                          <div class="row cont02">
                            <label for="" class="col-6 col-lg-6 col-sm-4"
                              >콘텐츠 유형</label
                            >
                            <div class="col">
                              <span>동영상</span>
                            </div>
                          </div>
                        </div>

                        <div class="right area right col-lg-6">
                          <div class="row cont02">
                            <label for="" class="col-6 col-lg-6 col-sm-4"
                              >| 과목</label
                            >
                            <div class="col">
                              <span>수학</span>
                            </div>
                          </div>

                          <div class="row cont02">
                            <label for="" class="col-6 col-lg-6 col-sm-4"
                              >| 공개 여부</label
                            >
                            <div class="col">
                              <span>ON</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row cont02">
                        <label for="" class="col-3 col-lg-3 col-sm-2"
                          >경로</label
                        >
                        <div class="col">
                          <span
                            >저장 경로가 입력되는 공간입니다 저장 경로가
                            입력되는 공간입니다 저장 경로가 입력되는
                            공간입니다</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- /. 퀴즈 컨텐츠 -->

                  <!-- [개발참조] 쪽지시험 컨텐츠 -->

                  <div class="notetest">
                    <div class="thumb_box">
                      <div class="title col-12">자료 열람</div>
                      <div class="row">
                        <div class="left_area left col-lg-8">
                          <div class="thumbnail_view01 col-12">
                            <button class="btn icons_fullscreen"></button>
                          </div>
                        </div>

                        <div class="right_area01 right col-lg-4">
                          <div class="thumbnail_view02 col-12">
                            <button class="btn icons_fullscreen"></button>
                          </div>

                          <div class="thumbnail_view02 col-12">
                            <button class="btn icons_fullscreen"></button>
                          </div>

                          <div class="thumbnail_view02 col-12">
                            <button class="btn icons_fullscreen"></button>
                          </div>

                          <div class="thumbnail_view02 col-12">
                            <button class="btn icons_fullscreen"></button>
                          </div>
                        </div>
                      </div>

                      <div class="page_thumb">
                        <div class="pagination_section">
                          <nav aria-label="Page navigation example">
                            <ul class="pagination">
                              <li class="page-item">
                                <a class="page-link" href="#">
                                  <span class="previous"></span>
                                </a>
                              </li>
                              <li class="page-item">
                                <a class="page-link active" href="#">1/10</a>
                              </li>
                              <li class="page-item">
                                <a class="page-link" href="#">
                                  <span class="next"></span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <button class="btn btn_crud_default preview">
                          미리보기
                        </button>
                      </div>

                      <div class="quiz_sec01 row">
                        <div class="left_area02 left col-lg-6">
                          <div class="row">
                            <label for="" class="col-5 col-lg-5 col-sm-4 font"
                              >유형</label
                            >
                            <div class="col">
                              <span>쪽지시험</span>
                            </div>
                          </div>

                          <div class="row">
                            <label for="" class="col-5 col-lg-5 col-sm-4 font"
                              >정답</label
                            >
                            <div class="col">
                              <span>4</span>
                            </div>
                          </div>

                          <div class="row">
                            <label for="" class="col-5 col-lg-5 col-sm-4 font"
                              >난이도</label
                            >
                            <div class="col">
                              <span>상</span>
                            </div>
                          </div>

                          <div class="row">
                            <label for="" class="col-5 col-lg-5 col-sm-4 font"
                              >제한시간</label
                            >
                            <div class="col">
                              <span>20분</span>
                            </div>
                          </div>
                        </div>

                        <div class="right_area02 right col-lg-6">
                          <div class="row">
                            <label for="" class="col-5 col-lg-5 col-sm-4 font"
                              >해설</label
                            >
                            <div class="col">
                              <input
                                id=""
                                type="checkbox"
                                class="custom-control-input"
                                disabled
                              />
                              <label
                                class="custom-control-label check"
                                for="checkbox01"
                                >정답 및 해설 노출</label
                              >
                            </div>
                          </div>

                          <div class="row">
                            <input
                              type="text"
                              placeholder="입력한 해설"
                              class="form-control form-inline"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="div_line01"></div>

                      <div class="row main">
                        <label for="" class="col-3 col-lg-3 col-sm-2"
                          >파일 이름</label
                        >
                        <div class="col main02">
                          <span>등록한 자료 이름</span>
                        </div>
                      </div>

                      <div class="row main">
                        <label for="" class="col-3 col-lg-3 col-sm-2"
                          >설명</label
                        >
                        <div class="col main02">
                          <span
                            >등록한 설명이 입력되는 공간입니다 등록된 설명이
                            입력되는 공간입니다 등록한 설명이 입력되는
                            공간입니다 등록된 설명이 입력되는 공간입니다</span
                          >
                        </div>
                      </div>

                      <div class="div_line01"></div>

                      <div class="quiz_sec02 row">
                        <div class="left_area left col-lg-6">
                          <div class="row cont02 cont03">
                            <label for="" class="col-6 col-lg-6 col-sm-4"
                              >자료 구분</label
                            >
                            <div class="col">
                              <span>프랜차이즈</span>
                            </div>
                          </div>

                          <div class="row cont02 cont03">
                            <label for="" class="col-6 col-lg-6 col-sm-4"
                              >콘텐츠 유형</label
                            >
                            <div class="col">
                              <span>동영상</span>
                            </div>
                          </div>
                        </div>

                        <div class="right_area right col-lg-6">
                          <div class="row cont02 cont03">
                            <label for="" class="col-6 col-lg-6 col-sm-4"
                              >| 과목</label
                            >
                            <div class="col">
                              <span>수학</span>
                            </div>
                          </div>

                          <div class="row cont02 cont03">
                            <label for="" class="col-6 col-lg-6 col-sm-4"
                              >| 공개 여부</label
                            >
                            <div class="col">
                              <span>ON</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="cont02 row">
                        <label for="" class="col-3 col-lg-3 col-sm-2"
                          >경로</label
                        >
                        <div class="col">
                          <span
                            >저장 경로가 입력되는 공간입니다 저장 경로가
                            입력되는 공간입니다 저장 경로가 입력되는
                            공간입니다</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- /. 쪽지시험 컨텐츠 -->
                </div>
                <!-- /.오른쪽 영역 -->
              </div>
              <!-- /.2단 분류 컨텐츠 -->
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_default">수정</button>
            <button class="btn btn_crud_default" @click="$emit('close')">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'

export default {
  name: 'LessonBrowseModal',
  components: { ModalHeader },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
