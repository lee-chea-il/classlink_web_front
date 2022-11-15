<template>
  <div
    id="modalLessonView"
    class="tab-content depth03 ac_manage_dtr ac_manage_note"
  >
    <div class="tab-pane active">
      <!-- 검색 영역 -->
      <div class="search_section">
        <div class="left_area">
          <span class="course_tit">영어리딩심화</span>
          <span class="course_con">영어 / 심화 A반 / 홍길동 선생님</span>
        </div>
        <div class="right_area">
          <nuxt-link to="/class/lecturecourse" class="btn btn_crud_default"
            >강의목록 보기</nuxt-link
          >
        </div>
      </div>
      <!-- /.검색 영역 -->
      <!-- 2단 분류 컨텐츠 -->
      <div class="divide_section">
        <!-- 왼쪽 영역 -->
        <div class="divide_area left_area">
          <!-- 탭 컨텐츠 -->
          <button class="btn btn_crud_default">다운로드</button>
          <button
            class="btn btn_crud_danger"
            data-toggle="modal"
            data-target="#modalDataDelete
								"
            data-dismiss="modal"
          >
            삭제
          </button>
          <ul id="myTab" class="nav nav-tabs" role="tablist">
            <!-- <li class="nav-item" role="presentation">
									<button class="nav-link active" id="grade-tab" data-toggle="tab" data-target="#institute" type="button" role="tab" aria-controls="home" aria-selected="true">
										교육기관
									</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="class-tab" data-toggle="tab" data-target="#franchise" type="button" role="tab" aria-controls="profile" aria-selected="false">
										프랜차이즈
									</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="class-tab" data-toggle="tab" data-target="#open" type="button" role="tab" aria-controls="profile" aria-selected="false">
										공개자료실
									</button>
								</li> -->
          </ul>
          <div id="myTabContent" class="tab-content">
            <!-- 탭 내용01 -->
            <div
              id="institute"
              class="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="grade-tab"
            >
              <ul>
                <li>
                  <!-- 리스트01 -->
                  <div class="list">
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chkA01"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chkA01"></label>
                    </div>
                    <i id="show_sublist01" class="btn icons_arrow_r"></i>
                    <span class="text">영어리딩심화</span>
                    <i class="icons_plus_circle_off"></i>
                  </div>
                  <!-- 리스트01_sub-->
                  <div id="list_sub01" class="list_sub" style="display: none">
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkB01"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chkB01"
                          ></label>
                        </div>
                        <i
                          id="show_sublist01_sub"
                          class="btn icons_arrow_r"
                        ></i>
                        <span class="text">1강</span>
                        <i class="icons_plus_circle_off"></i>
                      </li>
                    </ul>
                  </div>
                  <!-- /.리스트01_sub-->
                  <!-- 리스트01_sub_sub-->
                  <div
                    id="list_sub01_sub"
                    class="list_sub_sub"
                    style="display: none"
                  >
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkC01"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chkC01"
                          ></label>
                        </div>
                        <span class="text">커리큘럼01_20220801015959.pdf</span>
                        <i class="icons_zoom_off"></i>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkC02"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chkC02"
                          ></label>
                        </div>
                        <span class="text">커리큘럼01_20220801015959.pdf</span>
                        <i class="icons_zoom_off"></i>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkC03"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chkC03"
                          ></label>
                        </div>
                        <span class="text">커리큘럼01_20220801015959.pdf</span>
                        <i class="icons_zoom_off"></i>
                      </li>
                    </ul>
                  </div>
                  <!-- /.리스트01_sub_sub-->
                  <!-- /.리스트01 -->
                </li>
                <li>
                  <!-- 리스트02 -->
                  <div class="list">
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chkA02"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chkA02"></label>
                    </div>
                    <i id="show_sublist02" class="btn icons_arrow_r"></i>
                    <span class="text">수학</span>
                    <i class="icons_plus_circle_off"></i>
                  </div>
                  <div id="list_sub02" class="list_sub" style="display: none">
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkB02"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chkB02"
                          ></label>
                        </div>
                        <i
                          id="show_sublist02_sub"
                          class="btn icons_arrow_r"
                        ></i>
                        <span class="text">자연수 I</span>
                        <i class="icons_plus_circle_off"></i>
                      </li>
                    </ul>
                  </div>
                  <!-- /.리스트02 -->
                </li>
              </ul>
            </div>
            <!-- /.탭 내용01 -->
          </div>
          <!-- /.탭 컨텐츠 -->
        </div>
        <!-- /.왼쪽 영역 -->
        <!-- 오른쪽 영역 -->
        <div class="divide_area right_area">
          <div class="thumb_box">
            <div class="row">
              <div class="title">자료 열람</div>
              <div class="thumbnail_view">
                <button class="btn icons_fullscreen"></button>
              </div>
            </div>

            <div class="row name">
              <label for="" class="title02">파일 이름</label>
              <div class="col">
                <span>등록한 자료 이름</span>
              </div>
            </div>

            <div class="div_line01"></div>

            <div class="div_cont02">
              <div class="row">
                <label for="" class="title02 cont">콘텐츠 유형</label>
                <div class="col cont">
                  <span>PDF</span>
                </div>
              </div>

              <div class="row">
                <label for="" class="title02 cont">공개 여부</label>
                <div class="col cont">
                  <span>ON</span>
                </div>
              </div>

              <div class="row">
                <label for="" class="title02 cont">과목</label>
                <div class="col cont">
                  <span>수학</span>
                </div>
              </div>

              <div class="row">
                <label for="" class="title02 cont">경로</label>
                <div class="col cont">
                  <span>저장 경로가 입력되는 공간입니다.</span>
                </div>
              </div>
            </div>

            <!-- [개발참조] 자료열람 - 선택 안 했을 때 출력되는 문구 -->
            <!-- <div class="nodata">
									자료를 확인하는 공간입니다. <br>
									자료의 <i class="icons_zoom_off"></i> 버튼을 누르면 해당 자료를 볼 수 있습니다.
								</div> -->
          </div>
          <!-- div class="thumb_box" -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NoteBox',
}
</script>
<style></style>
