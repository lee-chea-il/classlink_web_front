<template>
  <div
    id="modalDataReadQuiz"
    class="modal fade modal_ac_manage_dtr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">자료 열람</h5>
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
          <!-- 자료 열람 -->
          <div class="reading_section modal_dataquiz">
            <div class="left_section">
              <div class="num_area">
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
                <button class="num">20</button>
              </div>
              <div class="write_area">
                <div class="edit_area">
                  <button class="btn icons_fullscreen"></button>
                </div>
                <div class="btn_area">
                  <button class="btn icons_arrow_square_l"></button>
                  <span class="counter">1/1</span>
                  <button class="btn icons_arrow_square_r"></button>
                </div>
              </div>
            </div>
            <div class="right_section">
              <div class="info_area">
                <div class="row">
                  <div class="col-6">
                    <div class="tit">
                      <div
                        class="custom-control custom-radio custom-control-inline"
                      >
                        <input
                          id="rad01"
                          type="radio"
                          name="radA01"
                          class="custom-control-input"
                          checked
                          disabled
                        />
                        <label class="custom-control-label" for="rad01"
                          >OX 유형</label
                        >
                      </div>
                    </div>
                    <div class="cnt">
                      <button class="btn btn_activated active">O</button>
                      <button class="btn btn_activated">X</button>
                    </div>
                  </div>
                  <div class="col-6">
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
                        />
                        <label class="custom-control-label" for="rad02"
                          >단답형</label
                        >
                      </div>
                    </div>
                    <div class="cnt">
                      <input
                        type="text"
                        placeholder="정답 입력"
                        class="form-control form-inline"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div
                      class="custom-control custom-radio custom-control-inline"
                    >
                      <input
                        id="rad03"
                        type="radio"
                        name="radA01"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="rad03"
                        >주관식 단답형</label
                      >
                    </div>
                    <div class="mult">
                      <div class="tit stit">정답</div>
                      <div class="cnt">
                        <input
                          type="text"
                          placeholder="정답 입력"
                          class="form-control form-inline"
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
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mult">
                      <div class="tit">난이도</div>
                      <div class="cnt">
                        <button class="btn btn_activated active">상</button>
                        <button class="btn btn_activated">중</button>
                        <button class="btn btn_activated">하</button>
                      </div>
                    </div>
                    <div class="mult">
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
              <div class="comment_area">
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
                  <textarea id="" rows="3" placeholder="입력한 해설"></textarea>
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
</template>

<script>
export default {
  name: 'QuizBrowseModal',
}
</script>

<style></style>
