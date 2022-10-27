<template>
  <div
    id="modalDataRegiNote"
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
          <div class="modal_dataquiz datanote row">
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
                      placeholder=""
                      class="form-control"
                      value="설명 입력"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2">키워드</label>
                  <div class="col">
                    <input
                      type="text"
                      placeholder=""
                      class="form-control"
                      value="키워드 입력 후 Enter 키 입력"
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
                <div class="num_area">
                  <!-- [개발참조] 문항 20개 이상부터는 +버튼이 보이지 않게 돼 추가할 수 없음 -->
                  <button class="num active">1</button>
                  <button class="num">2</button>
                  <button class="num">3</button>
                  <button class="num">4</button>
                  <button class="num">5</button>
                  <button class="num">6</button>
                  <button class="num">7</button>
                  <button class="num">8</button>
                  <button class="num">9</button>
                  <button class="num">10</button>
                  <button class="num">11</button>
                  <button class="num">12</button>
                  <button class="num">13</button>
                  <button class="num">14</button>
                  <button class="num">15</button>
                  <button class="num">16</button>
                  <button class="num">17</button>
                  <button class="num">18</button>
                  <button class="num">19</button>
                  <!--
									<button class="num">20</button>
									-->
                  <button class="num plus">
                    <i class="btn icons_plus_circle_off"></i>
                  </button>
                </div>
                <div class="write_area">
                  <div class="title_area">
                    <span class="tit">문제</span>
                    <button class="btn btn_crud_default btn_first">
                      처음부터<br />미리보기
                    </button>
                    <button class="btn btn_crud_default btn_present">
                      현재부터<br />미리보기
                    </button>
                  </div>
                  <div class="edit_area">글쓰기 에디터 영역</div>
                  <div class="btn_area">
                    <button class="btn icons_arrow_square_l"></button>
                    <span class="counter">1/1</span>
                    <button class="btn icons_arrow_square_r"></button>
                    <button class="btn btn_crud_default btn_del">삭제</button>
                  </div>
                  <div class="info_area">
                    <div class="row">
                      <div class="col-12">
                        <!-- 문제의 보기 1 -->
                        <div class="example">
                          <div class="tit">
                            <div
                              class="custom-control custom-radio custom-control-inline"
                            >
                              <input
                                id="radB01"
                                type="radio"
                                name="radB"
                                class="custom-control-input"
                                checked
                              />
                              <label class="custom-control-label" for="radB01">
                                보기1 <br />
                                <span class="exp_smtxt">(정답)</span>
                              </label>
                            </div>
                          </div>
                          <div class="edit_area_inline">
                            <button class="btn icons_thumbnail"></button>
                            글쓰기 공간입니다.
                          </div>
                          <button class="btn icons_x_circle_off"></button>
                        </div>
                        <!-- /.문제의 보기 1 -->
                        <!-- 문제의 보기 2 -->
                        <div class="example">
                          <div class="tit">
                            <div
                              class="custom-control custom-radio custom-control-inline"
                            >
                              <input
                                id="radB02"
                                type="radio"
                                name="radB"
                                class="custom-control-input"
                              />
                              <label class="custom-control-label" for="radB02">
                                보기2
                              </label>
                            </div>
                          </div>
                          <div class="edit_area_inline">
                            <button class="btn icons_thumbnail"></button>
                            글쓰기 공간입니다.
                          </div>
                          <button class="btn icons_x_circle_off"></button>
                        </div>
                        <!-- /.문제의 보기 2 -->
                        <!-- 문제의 보기 3 -->
                        <div class="example">
                          <div class="tit">
                            <div
                              class="custom-control custom-radio custom-control-inline"
                            >
                              <input
                                id="radB03"
                                type="radio"
                                name="radB"
                                class="custom-control-input"
                              />
                              <label class="custom-control-label" for="radB03">
                                보기3
                              </label>
                            </div>
                          </div>
                          <div class="edit_area_inline">
                            <button class="btn icons_thumbnail"></button>
                            글쓰기 공간입니다.
                          </div>
                          <button class="btn icons_x_circle_off"></button>
                        </div>
                        <!-- /.문제의 보기 3 -->
                        <!-- 문제의 보기 4 --
												<div class="example">
													<div class="tit">
														<div class="custom-control custom-radio custom-control-inline">
															<input type="radio" id="radB04" name="radB" class="custom-control-input">
															<label class="custom-control-label" for="radB04">
																보기4 </span>
															</label>
														</div>
													</div>
													<div class="edit_area_inline">
														<button class="btn icons_thumbnail"></button>
														글쓰기 공간입니다.
													</div>
													<button class="btn icons_x_circle_off"></button>
												</div>

												<-- /.문제의 보기 4 -->

                        <!-- [개발참조] 보기 4까지 생성되었을 때는 추가 버튼 보이지 않음 -->
                        <div class="example text-center">
                          <button class="btn icons_plus_circle_off"></button>
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
                        <div class="tit">제한시간</div>
                        <div class="cnt">
                          <input
                            type="text"
                            placeholder="문제당 제한시간(초)"
                            class="form-control form-inline"
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
export default {
  name: 'NoteTestAddModal',
}
</script>

<style></style>
