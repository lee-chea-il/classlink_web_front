<template>
  <div
    id="modalClassModify"
    class="modal fade modal_ac_manage_cls"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">반 수정</h5>
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
          <!-- 반이름 검색 -->
          <div class="search_class">
            <div class="form-group">
              <label for="input00">반 이름</label>
              <input
                id="input00"
                type="text"
                class="form-control form-inline"
                placeholder="반 이름을 입력해 주세요."
                value="심화 A반"
              />
            </div>
          </div>
          <!-- /.반이름 검색 -->
          <div class="cnts_section">
            <!-- 반 선생님 -->
            <div class="class_section">
              <div class="tit">반 선생님</div>
              <div class="move_section">
                <div class="list_section">
                  <div class="input-group input-search">
                    <input
                      type="text"
                      placeholder="선생님 이름"
                      class="form-control"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_x_circle_off"
                        type="button"
                      ></button>
                      <button
                        class="btn icons_search_off"
                        type="button"
                      ></button>
                    </div>
                  </div>
                  <div class="list_area">
                    <!-- [개발참조] 등록된 데이터 없는 경우 -->
                    <!-- <div class="nothing_txt">
											<div class="txt">
												선생님 관리 페이지에서<br />
												선생님을 등록해 주세요
											</div>
										</div> -->
                    <!-- /.등록된 데이터 없는 경우 -->
                    <ul>
                      <li>
                        <span class="text">홍길동 선생님</span>
                        <i class="icons_plus_circle_off"></i>
                      </li>
                      <li>
                        <span class="text">홍길동 선생님</span>
                        <i class="icons_plus_circle_off"></i>
                      </li>
                      <li>
                        <span class="text">홍길동 선생님</span>
                        <i class="icons_plus_circle_off"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="list_section">
                  <div class="sum_info">선택된 선생님 <span>1</span>명</div>
                  <div class="list_area">
                    <!-- [개발참조] 등록된 데이터 없는 경우 -->
                    <!-- <div class="nothing_txt">
											<div class="txt">
												왼쪽의 +를 눌러<br />
												선생님을 선택하세요.
											</div>
										</div> -->
                    <!-- /.등록된 데이터 없는 경우 -->
                    <ul>
                      <li>
                        <span class="text">홍길동 선생님</span>
                        <i class="icons_minus_circle_off"></i>
                      </li>
                      <li>
                        <span class="text">홍길동 선생님</span>
                        <i class="icons_minus_circle_off"></i>
                      </li>
                      <li>
                        <span class="text">홍길동 선생님</span>
                        <i class="icons_minus_circle_off"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- 반 선생님/. -->
            <!-- 반 학생 -->
            <div class="class_section">
              <div class="tit">반 학생</div>
              <div class="move_section">
                <div class="list_section selected">
                  <div class="input-group input-search">
                    <input
                      type="text"
                      placeholder="학생 이름"
                      class="form-control"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_x_circle_off"
                        type="button"
                      ></button>
                      <button
                        class="btn icons_search_off"
                        type="button"
                      ></button>
                    </div>
                  </div>
                  <div class="list_area" style="border: none">
                    <!-- 탭 컨텐츠 -->
                    <ul id="myTab" class="nav nav-tabs" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button
                          id="grade-tab"
                          class="nav-link active"
                          data-toggle="tab"
                          data-target="#grade"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          학년
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          id="class-tab"
                          class="nav-link"
                          data-toggle="tab"
                          data-target="#class"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          반
                        </button>
                      </li>
                    </ul>
                    <div id="myTabContent" class="tab-content">
                      <!-- [개발참조] 등록된 데이터 없는 경우 -->
                      <!-- <div class="nothing_txt">
												<div class="txt">
													학생 관리 페이지에서<br />
													학생을 등록해 주세요
												</div>
											</div> -->
                      <!-- /.등록된 데이터 없는 경우 -->
                      <!-- 학년 탭 내용 -->
                      <div
                        id="grade"
                        class="tab-pane fade show active"
                        role="tabpanel"
                        aria-labelledby="grade-tab"
                      >
                        <ul>
                          <li>
                            <div class="list">
                              <i
                                id="show_sublist2"
                                class="btn icons_arrow_r"
                              ></i>
                              <span class="text"
                                >초2<span class="ss_txt">1명</span></span
                              >
                              <i class="icons_plus_circle_off"></i>
                            </div>
                            <!-- 학년에 해당하는 학생 리스트 -->
                            <div
                              id="list_sub2"
                              class="list_sub"
                              style="display: none"
                            >
                              <ul>
                                <li>
                                  <span class="text">이미미</span>
                                  <i class="icons_plus_circle_off"></i>
                                </li>
                              </ul>
                            </div>
                            <!-- /.학년에 해당하는 학생 리스트 -->
                          </li>
                          <li>
                            <div class="list">
                              <i
                                id="show_sublist3"
                                class="btn icons_arrow_r"
                              ></i>
                              <span class="text"
                                >초3<span class="ss_txt">1명</span></span
                              >
                              <i class="icons_plus_circle_off"></i>
                            </div>
                            <!-- 학년에 해당하는 학생 리스트 -->
                            <div
                              id="list_sub3"
                              class="list_sub"
                              style="display: none"
                            >
                              <ul>
                                <li>
                                  <span class="text">삼삼삼</span>
                                  <i class="icons_plus_circle_off"></i>
                                </li>
                              </ul>
                            </div>
                            <!-- /.학년에 해당하는 학생 리스트 -->
                          </li>
                        </ul>
                      </div>
                      <!-- /.학년 탭 내용 -->
                      <!-- 반 탭 내용 -->
                      <div
                        id="class"
                        class="tab-pane fade"
                        role="tabpanel"
                        aria-labelledby="class-tab"
                      >
                        <ul>
                          <li>
                            <div class="list">
                              <i id="" class="btn icons_arrow_r"></i>
                              <span class="text"
                                >영어 심화 B반<span class="ss_txt"
                                  >1명</span
                                ></span
                              >
                              <i class="icons_plus_circle_off"></i>
                            </div>
                            <!-- 반에 해당하는 학생 리스트 -->
                            <div id="" class="list_sub" style="display: none">
                              <ul>
                                <li>
                                  <span class="text">이미미</span>
                                  <i class="icons_plus_circle_off"></i>
                                </li>
                              </ul>
                            </div>
                            <!-- /.반에 해당하는 학생 리스트 -->
                          </li>
                          <li>
                            <div class="list">
                              <i id="" class="btn icons_arrow_r"></i>
                              <span class="text"
                                >영어 심화 C반<span class="ss_txt"
                                  >1명</span
                                ></span
                              >
                              <i class="icons_plus_circle_off"></i>
                            </div>
                            <!-- 반에 해당하는 학생 리스트 -->
                            <div id="" class="list_sub" style="display: none">
                              <ul>
                                <li>
                                  <span class="text">삼삼삼</span>
                                  <i class="icons_plus_circle_off"></i>
                                </li>
                              </ul>
                            </div>
                            <!-- /.학년에 해당하는 학생 리스트 -->
                          </li>
                        </ul>
                      </div>
                      <!-- /.반 탭 내용 -->
                    </div>
                    <!-- /.탭 컨텐츠 -->
                  </div>
                </div>
                <div class="list_section selected">
                  <div class="sum_info">선택된 학생 <span>1</span>명</div>
                  <div class="list_area">
                    <!-- [개발참조] 등록된 데이터 없는 경우 -->
                    <!-- <div class="nothing_txt">
											<div class="txt">
												왼쪽의 +를 눌러<br />
												학생을 선택하세요.
											</div>
										</div> -->
                    <!-- /.등록된 데이터 없는 경우 -->
                    <ul>
                      <li>
                        <div class="list">
                          <i id="show_sublist" class="btn icons_arrow_r"></i>
                          <span class="text"
                            >초1<span class="ss_txt">1명</span></span
                          >
                          <i class="icons_minus_circle_off"></i>
                        </div>
                        <!-- 해당하는 학생 리스트 -->
                        <div
                          id="list_sub"
                          class="list_sub"
                          style="display: none"
                        >
                          <ul>
                            <li>
                              <span class="text">홍미미</span>
                              <i class="icons_minus_circle_off"></i>
                            </li>
                          </ul>
                        </div>
                        <!-- /.해당하는 학생 리스트 -->
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- 반 학생/. -->
          </div>
        </div>
        <div class="modal-footer">
          <!-- [개발참조] 등록, 수정 버튼 상황에 따라 -->
          <button class="btn btn_crud_point">확인</button>
          <button class="btn btn_crud_default">취소</button>
          <button class="btn btn_crud_point">저장하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassModifyModal',
}
</script>

<style></style>
