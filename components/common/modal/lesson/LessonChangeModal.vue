<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalLessonRegi"
      class="modal modal_ac_manage_lesson modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="레슨 수정" @close="$emit('close')" />
          <div class="modal-body">
            <div class="modal_Lessonregi">
              <!-- 모달 내용 구분 class-->
              <!-- 2단 분류 컨텐츠 -->
              <div class="divide_section">
                <!-- 왼쪽 영역 -->
                <div class="divide_area left">
                  <!-- 컨트롤 버튼 영역 [개발참조] 활성화 : active -->
                  <div class="button_tab">
                    <button class="btn btn_activated active">자료실</button>
                    <button class="btn btn_crud_default">레슨</button>
                  </div>
                  <!-- /.컨트롤 버튼 영역 -->
                  <!-- 탭 컨텐츠 -->
                  <ul id="myTab" class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        id="grade-tab"
                        class="nav-link active"
                        data-toggle="tab"
                        data-target="#institutePop"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        교육기관
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        id="class-tab"
                        class="nav-link"
                        data-toggle="tab"
                        data-target="#franchisePop"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        프랜차이즈
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        id="class-tab"
                        class="nav-link"
                        data-toggle="tab"
                        data-target="#mydataPop"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        내자료
                      </button>
                    </li>
                  </ul>
                  <div id="myTabContent" class="tab-content">
                    <!-- 탭 내용01 -->
                    <div
                      id="institutePop"
                      class="tab-pane fade show active"
                      role="tabpanel"
                      aria-labelledby="grade-tab"
                    >
                      <ul>
                        <li>
                          <!-- 리스트01 -->
                          <div class="list">
                            <div
                              class="custom-control custom-checkbox form-inline"
                            >
                              <input
                                id="chkPopA01"
                                type="checkbox"
                                class="custom-control-input"
                              />
                              <label
                                class="custom-control-label"
                                for="chkPopA01"
                              ></label>
                            </div>
                            <i
                              id="show_sublistLessonRegi01"
                              class="btn icons_arrow_r"
                            ></i>
                            <span class="text">국어</span>
                            <!-- <i class="icons_plus_circle_off"></i> -->
                          </div>
                          <!-- 리스트01_sub-->
                          <div
                            id="list_sublistLessonRegi01"
                            class="list_sub"
                            style="display: none"
                          >
                            <ul>
                              <li>
                                <div
                                  class="custom-control custom-checkbox form-inline"
                                >
                                  <input
                                    id="chkPopB01"
                                    type="checkbox"
                                    class="custom-control-input"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="chkPopB01"
                                  ></label>
                                </div>
                                <i
                                  id="show_sublistLessonRegi01_sub"
                                  class="btn icons_arrow_r"
                                ></i>
                                <span class="text">대단원1</span>
                                <!-- <i class="icons_plus_circle_off"></i> -->
                              </li>
                            </ul>
                          </div>
                          <!-- /.리스트01_sub-->
                          <!-- 리스트01_sub_sub-->
                          <div
                            id="list_sublistLessonRegi01_sub"
                            class="list_sub_sub"
                            style="display: none"
                          >
                            <ul>
                              <li>
                                <div
                                  class="custom-control custom-checkbox form-inline"
                                >
                                  <input
                                    id="chkPopC01"
                                    type="checkbox"
                                    class="custom-control-input"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="chkPopC01"
                                  ></label>
                                </div>
                                <span class="text"
                                  >자연수의 혼합 계산 영상1.mp4</span
                                >
                                <!-- [개발참조] 클릭 시 자료실 - 자료열람  팝업 -->
                                <i
                                  class="btn icons_zoom_off"
                                  data-toggle="modal"
                                  data-target="#"
                                ></i>
                              </li>
                              <li>
                                <div
                                  class="custom-control custom-checkbox form-inline"
                                >
                                  <input
                                    id="chkPopC02"
                                    type="checkbox"
                                    class="custom-control-input"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="chkPopC02"
                                  ></label>
                                </div>
                                <span class="text"
                                  >자연수의 혼합 계산 영상2.mp4</span
                                >
                                <!-- [개발참조] 클릭 시 자료실 - 자료열람 팝업 -->
                                <i
                                  class="btn icons_zoom_off"
                                  data-toggle="modal"
                                  data-target="#"
                                ></i>
                              </li>
                            </ul>
                          </div>
                          <!-- /.리스트01_sub_sub-->
                          <!-- /.리스트01 -->
                        </li>
                        <li>
                          <!-- 리스트02 -->
                          <div class="list">
                            <div
                              class="custom-control custom-checkbox form-inline"
                            >
                              <input
                                id="chkPopA02"
                                type="checkbox"
                                class="custom-control-input"
                              />
                              <label
                                class="custom-control-label"
                                for="chkPopA02"
                              ></label>
                            </div>
                            <i
                              id="show_sublistLessonRegi02"
                              class="btn icons_arrow_r"
                            ></i>
                            <span class="text">수학</span>
                            <!-- <i class="icons_plus_circle_off"></i> -->
                          </div>
                          <div
                            id="list_sublistLessonRegi02"
                            class="list_sub"
                            style="display: none"
                          >
                            <ul>
                              <li>
                                <div
                                  class="custom-control custom-checkbox form-inline"
                                >
                                  <input
                                    id="chkPopB02"
                                    type="checkbox"
                                    class="custom-control-input"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="chkPopB02"
                                  ></label>
                                </div>
                                <i
                                  id="show_sublistLessonRegi02_sub"
                                  class="btn icons_arrow_r"
                                ></i>
                                <span class="text">자연수 I</span>
                                <!-- <i class="icons_plus_circle_off"></i> -->
                              </li>
                            </ul>
                          </div>
                          <!-- /.리스트02 -->
                        </li>
                      </ul>
                    </div>
                    <!-- /.탭 내용01 -->
                    <!-- 탭 내용02 -->
                    <div
                      id="franchisePop"
                      class="tab-pane fade"
                      role="tabpanel"
                      aria-labelledby="class-tab"
                    >
                      프랜차이즈 동일 구성
                    </div>
                    <!-- /.탭 내용02 -->
                    <!-- 탭 내용03 -->
                    <div
                      id="mydataPop"
                      class="tab-pane fade"
                      role="tabpanel"
                      aria-labelledby="class-tab"
                    >
                      프랜차이즈 동일 구성
                    </div>
                    <!-- /.탭 내용03 -->
                  </div>
                  <!-- /.탭 컨텐츠 -->
                </div>
                <!-- /.왼쪽 영역 -->
                <!-- 오른쪽 영역 -->
                <div class="divide_area right">
                  <div class="form-group">
                    <label for="">제목</label>
                    <div class="col">
                      <input
                        type="text"
                        placeholder="입력해 주세요"
                        class="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">설명</label>
                    <div class="col">
                      <textarea placeholder="메모입력"></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">교육 목표</label>
                    <div class="col">
                      <input
                        type="text"
                        placeholder="입력해 주세요"
                        class="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">레슨 자료</label>
                    <div class="col">
                      <div class="list_box">
                        <div class="sum">등록 개수: 5개</div>
                        <div class="list_area">
                          <ul>
                            <li>
                              <span class="inst"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <!-- [개발참조] 클릭 시 자료실 - 자료열람 팝업 -->
                              <i class="btn icons_zoom_off"></i>
                              <i class="btn icons_x_circle_off"></i>
                            </li>
                            <li>
                              <span class="inst"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <!-- [개발참조] 클릭 시 자료실 - 자료열람 팝업 -->
                              <i class="btn icons_zoom_off"></i>
                              <i class="btn icons_x_circle_off"></i>
                            </li>
                            <li>
                              <span class="no_icon"
                                >자연수의 혼합 계산 영상1.mp4</span
                              >
                              <!-- [개발참조] 클릭 시 자료실 - 자료열람 팝업 -->
                              <i class="btn icons_zoom_off"></i>
                              <i class="btn icons_x_circle_off"></i>
                            </li>
                            <li>
                              <span class="inst"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <!-- [개발참조] 클릭 시 자료실 - 자료열람 팝업 -->
                              <i class="btn icons_zoom_off"></i>
                              <i class="btn icons_x_circle_off"></i>
                            </li>
                            <li>
                              <span class="fran"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <!-- [개발참조] 클릭 시 자료실 - 자료열람 팝업 -->
                              <i class="btn icons_zoom_off"></i>
                              <i class="btn icons_x_circle_off"></i>
                            </li>
                            <li>
                              <span class="inst"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <!-- [개발참조] 클릭 시 자료실 - 자료열람 팝업 -->
                              <i class="btn icons_zoom_off"></i>
                              <i class="btn icons_x_circle_off"></i>
                            </li>
                            <li>
                              <span class="fran"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <!-- [개발참조] 클릭 시 자료실 - 자료열람 팝업 -->
                              <i class="btn icons_zoom_off"></i>
                              <i class="btn icons_x_circle_off"></i>
                            </li>
                            <li>
                              <span class="inst"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <!-- [개발참조] 클릭 시 자료실 - 자료열람 팝업 -->
                              <i class="btn icons_zoom_off"></i>
                              <i class="btn icons_x_circle_off"></i>
                            </li>
                            <li>
                              <span class="fran"></span>
                              <span>자연수의 혼합 계산 영상1.mp4</span>
                              <!-- [개발참조] 클릭 시 자료실 - 자료열람 팝업 -->
                              <i class="btn icons_zoom_off"></i>
                              <i class="btn icons_x_circle_off"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">저장 경로</label>
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

                  <div class="form-group">
                    <label for="">키워드</label>
                    <div class="col">
                      <input
                        type="text"
                        placeholder="키워드 입력 후 Enter 키를 입력해 주세요."
                        class="form-control"
                        value=""
                      />
                    </div>
                  </div>

                  <div class="check_sec">
                    <span class="custom-control custom-checkbox form-inline">
                      <input
                        id="checkbox06"
                        type="checkbox"
                        class="custom-control-input"
                        checked
                      />
                      <label
                        class="custom-control-label checkbox06"
                        for="checkbox06"
                        >교육기관에 해당 자료를 공개합니다.</label
                      >
                    </span>
                    <!-- [개발참조] 레슨수정시에는 미출력 -->
                    <span class="custom-control custom-checkbox form-inline">
                      <input
                        id="checkbox07"
                        type="checkbox"
                        class="custom-control-input"
                        checked
                      />
                      <label
                        class="custom-control-label checkbox07"
                        for="checkbox07"
                        >계속 등록하기</label
                      >
                    </span>
                  </div>
                </div>
                <!-- /.오른쪽 영역 -->
              </div>
              <!-- /.2단 분류 컨텐츠 -->
            </div>
          </div>
          <div class="modal-footer">
            <!-- [개발참조] 레슨등록 시 출력되는 버튼 -->
            <button class="btn btn_crud_point">등록</button>
            <button
              class="btn btn_crud_default"
              data-dismiss="modal"
              @click="$emit('close')"
            >
              취소
            </button>

            <!-- [개발참조] 레슨수정 시 출력되는 버튼 -->
            <!-- <button class="btn btn_crud_point">수정</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'

export default {
  name: 'LessonChangeModal',
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
