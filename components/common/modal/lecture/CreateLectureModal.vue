<template>
  <div
    id="modalLectureRegi"
    class="modal fade modal_ac_manage_lec"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">강좌 만들기</h5>
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
          <div class="cnts_section">
            <!-- 왼쪽 SECTION -->
            <div class="class_section">
              <div class="search_class">
                <div class="form-group">
                  <label for="input00">강좌 이름</label>
                  <input
                    id="input00"
                    type="text"
                    class="form-control form-inline lec_regi01"
                    placeholder="강좌 이름을 입력해주세요."
                    value="심화 A반"
                  />
                </div>
                <div class="form-group">
                  <label for="">강좌 이미지</label>
                  <div class="input_area">
                    <div class="input_file">
                      <input
                        id="fileName"
                        type="text"
                        placeholder="이미지를 선택해 주세요."
                        class="file_input_textbox"
                        readonly
                      />
                      <div class="file_input_div">
                        <button class="btn btn_crud_default">
                          이미지 변경
                        </button>
                        <input
                          type="file"
                          name="file_1"
                          class="file_input_hidden"
                          onchange="javascript: document.getElementById('fileName').value = this.value"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="exp">
                  기본 이미지는 정담임 선생님의 CW 이미지가 선택됩니다.
                </div>
              </div>
              <div class="tit">담당 선생님</div>
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
                    <ul>
                      <li>
                        <span class="text">홍길동 선생님</span>
                        <i class="icons_plus_circle_off more_mu">
                          <div class="more_list" style="display: none">
                            <ul>
                              <li data-toggle="modal">
                                정담임 <i class="icons_check_circle"></i>
                              </li>
                              <li data-toggle="modal">부담임</li>
                            </ul>
                          </div>
                        </i>
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
                  <div class="list_area_all">
                    <div class="list_area02">
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
                    <div class="sum_info">선택된 선생님 <span>1</span>명</div>
                    <div class="list_area03">
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
            </div>
            <!--/. 왼쪽 SECTION -->
            <!-- 오른쪽 SECTION -->
            <div class="class_section">
              <div class="search_class">
                <div>
                  수업을 시작하기
                  <div class="dropdown form-inline">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      10분
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">00</a>
                      <a class="dropdown-item" href="#">00</a>
                      <a class="dropdown-item" href="#">00</a>
                    </div>
                  </div>
                  전에 알림을 보냅니다
                </div>
              </div>
              <div class="search_class02">
                <div>
                  수업을 종료하고
                  <div class="dropdown form-inline">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      10분
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">00</a>
                      <a class="dropdown-item" href="#">00</a>
                      <a class="dropdown-item" href="#">00</a>
                    </div>
                  </div>
                  후에 수업을 자동으로 끝냅니다
                </div>
              </div>
              <div class="tit">수강할 반</div>
              <div class="move_section">
                <div class="list_section">
                  <div class="input-group input-search">
                    <input
                      type="text"
                      placeholder="반 이름"
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
                    <ul>
                      <li>
                        <span class="text">1-1A</span>
                        <i class="icons_plus_circle_off"></i>
                      </li>
                      <li>
                        <span class="text">1-1B</span>
                        <i class="icons_plus_circle_off"></i>
                      </li>
                      <li>
                        <span class="text">1-1C</span>
                        <i class="icons_plus_circle_off"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="list_section">
                  <div class="sum_info">선택된 반 <span>1</span>개</div>
                  <div class="list_area">
                    <ul>
                      <li>
                        <span class="text">1-1A</span>
                        <i class="icons_minus_circle_off"></i>
                      </li>
                      <li>
                        <span class="text">1-1B</span>
                        <i class="icons_minus_circle_off"></i>
                      </li>
                      <li>
                        <span class="text">1-1C</span>
                        <i class="icons_minus_circle_off"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.오른쪽 SECTION -->
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
          <button
            class="btn btn_crud_point"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#modalLectureRegi02"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateLectureModal',
}
</script>

<style></style>
