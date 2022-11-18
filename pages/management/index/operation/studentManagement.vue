<template>
  <div>
    <!-- container -->
    <div id="content" class="content">
      <div class="content_area">
        <!--  3Depth -->
        <NavBox
          title1="선생님관리"
          title2="학생 관리"
          title3="반 관리"
          title4="시험관리"
          url1="/management/operation/teachermanagement"
          url2="/management/operation/studentmanagement"
          url3="/management/operation/teachermanagement"
          url4="/management/operation/teachermanagement"
        />
        <div class="tab-content depth03 ac_manage_std">
          <div class="tab-pane active">
            <!-- [개발참조] 등록된 학생이 없는 경우 --
					<div class="nothing_txt">
						<div class="txt">
							등록된 학생이 없습니다.<br />
							먼저 학생을 등록해주세요.
						</div>
						<div class="btn_area">
							<button class="btn btn_regi_studentsall">학생 일괄 등록</button>
							<button class="btn btn_regi_student" data-toggle="modal" data-target="#modalMyinfo">학생 개별 등록</button>
						</div>
					</div>
             검색 영역 -->
            <div class="search_section">
              <div class="left_area">
                <div class="dropdown form-inline">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    최신 등록순
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">이름 오름차순</a>
                    <a class="dropdown-item" href="#">이름 내림차순</a>
                    <a class="dropdown-item" href="#">학년 오름차순</a>
                    <a class="dropdown-item" href="#">학년 내림차순</a>
                  </div>
                </div>
                <div class="dropdown form-inline">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    학생
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">학부모</a>
                    <a class="dropdown-item" href="#">학부모&학생</a>
                  </div>
                </div>
                <div class="dropdown form-inline">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    활성화
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">비활성화</a>
                  </div>
                </div>
                <div class="dropdown form-inline">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    재원
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">퇴원</a>
                  </div>
                </div>
                <div class="info_txt">9,999명</div>
              </div>
              <div class="right_area">
                <div class="input-group input-search form-inline">
                  <input type="text" class="form-control" />
                  <div class="input-group-append">
                    <button class="btn icons_search_off" type="button"></button>
                  </div>
                </div>
                <button
                  class="btn btn_regi_studentsall"
                  data-toggle="modal"
                  data-target="#modalBatchregi"
                >
                  학생 일괄 등록
                </button>
                <button
                  class="btn btn_regi_student"
                  data-toggle="modal"
                  data-target="#modalMyinfo"
                >
                  학생 개별 등록
                </button>
              </div>
            </div>
            <!-- 검색 영역 -->
            <!-- 테이블 영역 -->
            <div class="table_section">
              <table class="table">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>신분</th>
                    <th>상태</th>
                    <th>학년</th>
                    <th>학생 이름</th>
                    <th>닉네임</th>
                    <th>일촌</th>
                    <th>ID</th>
                    <th>학생 연락처</th>
                    <th>학부모 연락처</th>
                    <th>상세</th>
                    <th>더보기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2</td>
                    <td>
                      <i class="icons_parentstd"></i>
                    </td>
                    <td>재원</td>
                    <td>중1</td>
                    <td>홍길동</td>
                    <td>테일러</td>
                    <td>홍길순</td>
                    <td>acbd1234</td>
                    <td>010-1234-5678</td>
                    <td>010-1234-5678</td>
                    <td>
                      <i
                        class="btn icons_zoom_off"
                        data-toggle="modal"
                        data-target="#modalMyinfo"
                      ></i>
                    </td>
                    <td>
                      <i class="btn icons_mu_off more_mu">
                        <div class="more_list" style="display: none">
                          <ul>
                            <li
                              data-toggle="modal"
                              data-target="#modalMoreCourse"
                            >
                              수강 정보
                            </li>
                            <li
                              data-toggle="modal"
                              data-target="#modalMoreAttendance"
                            >
                              출결
                            </li>
                            <li
                              data-toggle="modal"
                              data-target="#modalMoreMemo"
                            >
                              메모
                            </li>
                            <li
                              data-toggle="modal"
                              data-target="#modalMoreReports"
                            >
                              학습 리포트
                            </li>
                          </ul>
                        </div>
                      </i>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <i class="icons_parent"></i>
                    </td>
                    <td>재원</td>
                    <td>중1</td>
                    <td>홍길동</td>
                    <td>테일러</td>
                    <td>홍길순</td>
                    <td>acbd1234</td>
                    <td>010-1234-5678</td>
                    <td>010-1234-5678</td>
                    <td>
                      <i
                        class="btn icons_zoom_off"
                        data-toggle="modal"
                        data-target="#modalMyinfo"
                      ></i>
                    </td>
                    <td>
                      <i class="btn icons_mu_off more_mu">
                        <div class="more_list" style="display: none">
                          <ul>
                            <li
                              data-toggle="modal"
                              data-target="#modalMoreCourse"
                            >
                              수강 정보
                            </li>
                            <li
                              data-toggle="modal"
                              data-target="#modalMoreAttendance"
                            >
                              출결
                            </li>
                            <li
                              data-toggle="modal"
                              data-target="#modalMoreMemo"
                            >
                              메모
                            </li>
                            <li
                              data-toggle="modal"
                              data-target="#modalMoreReports"
                            >
                              학습 리포트
                            </li>
                          </ul>
                        </div>
                      </i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.테이블 영역 -->
            <!-- 페이징 영역 -->
            <div class="pagination_section">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <span class="previous"></span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link active" href="#">1</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <span class="next"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- /.페이징 영역 -->
          </div>
        </div>
      </div>
    </div>
    <!-- //container -->

    <!-- 모달 팝업 ------------------------------------->

    <!-- 학생 일괄 등록1 - 팝업 M2 -->
    <div
      id="modalBatchregi"
      class="modal fade ac_manage_std"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">학생 일괄 등록</h5>
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
            <div class="title01">STEP 1</div>
            <div class="content02">
              엑셀 파일을 다운로드 하여 학생 정보를 입력해주세요.
            </div>
            <div class="content">
              (내용 형식을 수정하면 등록이 불가능합니다.)
            </div>
            <button class="file_down">
              <span class="icon_download"></span>파일 다운로드
            </button>

            <div class="divid_section">
              <div class="title02">STEP 2</div>
              <div class="content03">
                내용 입력된 엑셀 파일을 첨부해 주세요.
              </div>
              <form
                id="uploadForm"
                action="upload"
                method="post"
                enctype="multipart/form-data"
              >
                <input
                  id="file"
                  type="file"
                  name="file"
                  style="display: none"
                />
                <input
                  id="input00"
                  type="text"
                  class="form-control form-inline"
                  placeholder="엑셀 파일을 업로드하세요."
                />
                <div class="button" onclick="onclick=document.all.file.click()">
                  <span class="icon_link"></span>파일 첨부
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn_crud_point"
              data-toggle="modal"
              data-target="#modalBatchregi02"
            >
              등록
            </button>
            <button class="btn btn_crud_default">취소</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 학생 일괄 등록2(성공) - 팝업 S2 -->
    <!-- [개발참조] 학생 등록을 성공한 경우 나오는 팝업 -->
    <div
      id="modalBatchregi01"
      class="modal fade ac_manage_std double"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">학생 일괄 등록</h5>
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
            <div class="title">학생 등록 성공</div>
            <div class="content">
              클래스링크 학생 일괄 등록.xls <span>000</span>명
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">확인</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 학생 일괄 등록3(실패) - 팝업 S2 -->
    <!-- [개발참조] 학생 등록을 실패한 경우 나오는 팝업 -->
    <div
      id="modalBatchregi02"
      class="modal fade ac_manage_std double"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">학생 일괄 등록</h5>
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
            <div class="title">
              <!-- <i class="icon_information"></i> -->
              <span class="icon_information"></span> 학생 등록 실패
            </div>
            <div class="content">
              실패한 학생의 정보를 수정하여 다시 시도해주세요.
            </div>
            <div class="outer">
              <div class="title02">등록 실패 행 번호</div>
              <div class="content02">
                7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
                7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">확인</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 학생 개별 등록/학생 상세 정보 -->
    <div
      id="modalMyinfo"
      class="modal fade modal_myinfo ac_manage_std"
      tabindex="-1"
      aria-labelledby="modalMyinfo"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="modalMyinfo" class="modal-title">
              학생 개별 등록/학생 상세 정보
            </h5>
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
            <!-- 프로필 사진 영역 -->
            <div class="profile_images_area student">
              <!-- [개발참조]: 업로드 사진은 <span>의 backgroung-image로 젹용 -->
              <div class="profile_photo">
                <span
                  style="
                    background-image: url(../images/sample_profile_photo.jpg);
                  "
                ></span>
                <button
                  type="button"
                  class="btn icons_camera"
                  data-toggle="modal"
                  data-target="#modalMyinfo02"
                  data-dismiss="modal"
                ></button>
              </div>
            </div>
            <!-- /.프로필 사진 영역 -->
            <div class="divid_section row">
              <!-- 왼쪽 영역 -->
              <div class="left_area">
                <div class="info_area left">
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label">이름</label>
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control"
                        value="홍길동"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >닉네임</label
                    >
                    <div class="col">
                      <div class="group">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                          value="홍길동"
                        />
                        <div class="custom-control custom-checkbox custom-sm">
                          <input
                            id="checkbox01"
                            type="checkbox"
                            class="custom-control-input"
                            checked
                          />
                          <label class="custom-control-label" for="checkbox01"
                            >이름과 동일</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-inlinebox row">
                    <label for="" class="st_title00 col-form-label">ID</label>
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control form-inline"
                        value="ididid"
                      />
                      <button class="btn btn_crud_default overlap_btn">
                        중복체크
                      </button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >나의 신분<br /><span class="exp_txt02"
                        >(중복선택가능)</span
                      ></label
                    >
                    <div class="col">
                      <button class="btn btn_choice active">학생</button>
                      <button class="btn btn_choice">학부모</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.왼쪽 영역 -->
              <!-- 오른쪽 영역 -->
              <div class="right_area">
                <div class="info_area right">
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label">학년</label>
                    <div class="col">
                      <button class="btn btn_activated active">학년</button>
                      <div class="dropdown form-inline">
                        <button
                          class="btn dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          초1
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">초2</a>
                          <a class="dropdown-item" href="#">초3</a>
                          <a class="dropdown-item" href="#">초4</a>
                        </div>
                      </div>
                      <button class="btn btn_activated">성인</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label">성별</label>
                    <div class="col">
                      <button class="btn btn_activated active">남</button>
                      <button class="btn btn_activated">여</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >상태 변경</label
                    >
                    <div class="col">
                      <button class="btn btn_activated active">활성화</button>
                      <button class="btn btn_activated">비활성화</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >학생 상태</label
                    >
                    <div class="col">
                      <button
                        class="btn btn_activated active"
                        data-toggle="modal"
                        data-target="#modalReassignstudent"
                      >
                        재원
                      </button>
                      <button class="btn btn_activated">퇴원</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.오른쪽 영역 -->
            </div>

            <div class="divid_section row">
              <h6 class="st_title01 sub_title">선택 입력 사항</h6>
              <!-- 왼쪽 영역 -->
              <div class="left_area">
                <div class="info_area left">
                  <div class="form-group form-inlinebox row">
                    <label for="" class="st_title00 col-form-label"
                      >출결번호</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control form-inline"
                        value="12345"
                      />
                      <button class="btn btn_crud_default overlap_btn">
                        중복체크
                      </button>
                      <span class="exp_txt"
                        >출결번호는 5자리 숫자로 입력하세요.</span
                      >
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >학생 연락처</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control"
                        value="010-1234-5678"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >학교 이름</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control"
                        value="길동학교"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >수강일</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control form_calendar datePicker"
                        value=""
                      />
                      <button class="btn icons_calendar_off"></button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >등록일</label
                    >
                    <div class="col">1990.01.01</div>
                  </div>
                </div>
              </div>
              <!-- /.왼쪽 영역 -->
              <!-- 오른쪽 영역 -->
              <div class="right_area">
                <div class="info_area right">
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >생년월일</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control form_calendar datePicker"
                        value=""
                      />
                      <button class="btn icons_calendar_off"></button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >이메일</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control"
                        value="example@mail.com"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >학부모 연락처</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control"
                        value="010-1234-5678"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >일촌 ID</label
                    >
                    <div class="col">
                      <div class="input-group input-search form-inline">
                        <input
                          type="text"
                          placeholder="이름/ID 검색"
                          class="form-control"
                        />
                        <div class="input-group-append">
                          <button
                            class="btn icons_search_off"
                            type="button"
                            data-toggle="modal"
                            data-target="#modalFriendsregi"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 일촌 id검색 결과 -->
                  <div class="friend_search">
                    <div class="friends">
                      <span>홍길동</span><span class="divid"></span
                      ><span class="frid"
                        >abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef</span
                      >
                      <button class="btn btn_crud_default">상세</button>
                      <button
                        class="btn icons_minus_circle_off"
                        type="button"
                        data-toggle="modal"
                        data-target="#modalFriendsDelete"
                      ></button>
                    </div>
                    <div class="friends">
                      <span>홍길동</span><span class="divid"></span
                      ><span class="frid">abcdef</span>
                      <button class="btn btn_crud_default">상세</button>
                      <button
                        class="btn icons_minus_circle_off"
                        type="button"
                        data-toggle="modal"
                        data-target="#modalFriendsDelete"
                      ></button>
                    </div>
                  </div>
                  <!-- /.일촌 id검색 결과 -->
                </div>
              </div>
              <!-- /.오른쪽 영역 -->
              <div class="st_title01">
                <!-- 배정받은 강좌 정보 -->
                <div class="lacture_info">
                  <div class="title">배정받은 강좌 정보</div>
                  <div class="list_area">
                    <div class="lacture">영어리딩심화 | 심화 A반</div>
                    <div class="lacture">영어리딩심화 | 심화 A반</div>
                    <div class="lacture">영어리딩심화 | 심화 A반</div>
                    <div class="lacture">영어리딩심화 | 심화 A반</div>
                  </div>
                </div>
                <!-- /.배정받은 강좌 정보-->
              </div>
            </div>
            <!-- 사용분류에 따른 하단 버튼 -->
            <div class="btn_section regi">
              <div class="custom-control custom-checkbox form-inline">
                <input
                  id="checkbox02"
                  type="checkbox"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="checkbox02"
                  >계속 학생 등록하기</label
                >
              </div>
              <button
                class="btn btn_crud_point"
                type="button"
                data-toggle="modal"
                data-target="#modalMyinfoPop"
              >
                등록하기
              </button>
            </div>
            <div class="btn_section">
              <button class="btn btn_crud_default" data-dismiss="modal">
                비밀번호 초기화
              </button>
              <span class="exp_txt"
                >초기 비밀번호는 123456으로 등록됩니다.</span
              >
              <button class="btn btn_crud_point" data-dismiss="modal">
                저장하기
              </button>
            </div>
            <!-- /.사용분류에 따른 하단 버튼 -->
          </div>
        </div>
      </div>
    </div>

    <!-- 일촌등록 - 팝업 M2 -->
    <!-- [개발참조]: 모달에서 띄워지는 모달 class "double" 추가 -->
    <div
      id="modalFriendsregi"
      class="modal fade double"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">일촌 등록</h5>
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
            <div class="input-group input-search form-inline">
              <input
                type="text"
                class="form-control"
                placeholder="일촌 이름 / ID 검색"
              />
              <div class="input-group-append">
                <button class="btn icons_x_circle_off" type="button"></button>
                <button class="btn icons_search_off" type="button"></button>
              </div>
            </div>
            <div class="table_area">
              <div class="table_thead">
                <table class="tb">
                  <!-- <colgroup>
									<col width="55">
									<col width="70">
									<col>
									<col width="90">
									<col width="55">
									<col width="55">
								</colgroup> -->
                  <thead>
                    <tr>
                      <th></th>
                      <th class="th01">이름</th>
                      <th class="th02">아이디</th>
                      <th class="th03">연락처</th>
                      <th class="th04">성별</th>
                      <th class="th05">나이</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table_tbody">
                <table class="tb">
                  <!-- <colgroup>
									<col width="55">
									<col width="70">
									<col>
									<col width="90">
									<col width="55">
									<col width="50">
								</colgroup> -->
                  <tbody>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk02"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk02"
                          ></label>
                        </div>
                      </td>
                      <td>홍길동</td>
                      <td class="id">aaaaabbbbbcccccddddd</td>
                      <td>010-1111-2222</td>
                      <td>남</td>
                      <td>10세</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk03"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk03"
                          ></label>
                        </div>
                      </td>
                      <td>홍길동</td>
                      <td class="id">aaaaabbbbbcccccddddd</td>
                      <td>010-1111-2222</td>
                      <td>남</td>
                      <td>12세</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk04"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk04"
                          ></label>
                        </div>
                      </td>
                      <td>홍길동</td>
                      <td class="id">aaaaabbbbbcccccddddd</td>
                      <td>010-1111-2222</td>
                      <td>남</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk05"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk05"
                          ></label>
                        </div>
                      </td>
                      <td>홍길동</td>
                      <td class="id">aaaaabbbbbcccccddddd</td>
                      <td>010-1111-2222</td>
                      <td>-</td>
                      <td>12세</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">등록</button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 학생재배정 - 팝업 M1 -->
    <!-- [개발참조]: 모달에서 띄워지는 모달 class "double" 추가 -->
    <div
      id="modalReassignstudent"
      class="modal fade double"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">학생 재배정</h5>
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
            홍길동 학생을 재배정하시겠습니까?

            <div class="class_box">
              <div class="class_first">
                <div class="class_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="chk06"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label class="custom-control-label" for="chk06"></label>
                  </div>
                  <span>심화 A반</span>
                </div>

                <div class="class_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="chk06"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label class="custom-control-label" for="chk06"></label>
                  </div>
                  <span>심화 A반</span>
                </div>

                <div class="class_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="chk06"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label class="custom-control-label" for="chk06"></label>
                  </div>
                  <span>심화 A반</span>
                </div>

                <div class="class_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="chk06"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label class="custom-control-label" for="chk06"></label>
                  </div>
                  <span>심화 A반</span>
                </div>

                <div class="class_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="chk06"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label class="custom-control-label" for="chk06"></label>
                  </div>
                  <span>심화 A반</span>
                </div>
              </div>

              <div class="class_second">
                <div class="class_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="chk06"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label class="custom-control-label" for="chk06"></label>
                  </div>
                  <span>심화 A반</span>
                </div>

                <div class="class_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="chk06"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label class="custom-control-label" for="chk06"></label>
                  </div>
                  <span>심화 A반</span>
                </div>

                <div class="class_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="chk06"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label class="custom-control-label" for="chk06"></label>
                  </div>
                  <span>심화 A반</span>
                </div>

                <div class="class_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="chk06"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label class="custom-control-label" for="chk06"></label>
                  </div>
                  <span>심화 A반</span>
                </div>

                <div class="class_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="chk06"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label class="custom-control-label" for="chk06"></label>
                  </div>
                  <span>심화 A반</span>
                </div>
              </div>
              <div class="content">
                <i class="icons_information"></i>
                전체해제 버튼을 누른 후 재배정을 누르면 ‘배정X’반으로
                이동합니다.
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">재배정</button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              전체해제
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 수강정보-팝업 M1 -->
    <div
      id="modalMoreCourse"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">수강 정보</h5>
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
            <div class="table_area">
              <div class="table_thead">
                <table class="tb">
                  <!-- <colgroup>
									<col width="150">
									<col>
									<col width="100">
									<col width="55">
								</colgroup> -->
                  <thead>
                    <tr>
                      <th class="th01">커리큘럼</th>
                      <th class="th02">납부일</th>
                      <th class="th03">수강 시작일</th>
                      <th class="th04">메모</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table_tbody">
                <table class="tb">
                  <!-- 	<colgroup>
									<col width="150">
									<col>
									<col width="100">
									<col width="55">
								</colgroup> -->
                  <tbody>
                    <tr>
                      <td class="td01">영어리딩심화</td>
                      <td class="td02">
                        <div class="date">
                          <div class="box01 mr-1">2022.08.05</div>
                          <i class="icons_calendar_off mr-1"></i>
                          <div class="btn btn_crud_default disabled">
                            위와 동일
                          </div>
                        </div>
                      </td>
                      <td class="date02">2022.08.05</td>
                      <td class="i td04">
                        <i class="icons_plus_circle_off"></i>
                      </td>
                    </tr>

                    <!-- 메모입력 TR : 메모입력 전 -->
                    <tr class="memo">
                      <td colspan="4" class="memo02">
                        <textarea placeholder="메모입력"></textarea>
                        <button class="btn btn_crud_point" type="button">
                          등록
                        </button>
                      </td>
                    </tr>

                    <!-- 메모입력 TR : 메모입력 후-->
                    <tr class="memo view">
                      <td colspan="4" class="memo02">
                        <div class="box02">
                          홍길동 학생 학원비 납부 관련해서 학부모와 면담 금일
                          진행함.
                        </div>
                        <div class="memo03">
                          최신 업데이트 : <span>2022.08.05</span> 최신 작성자 :
                          <span>서유진 선생님</span>
                        </div>
                      </td>
                      <td>
                        <i class="btn icons_mu_off more_mu">
                          <div class="more_list" style="display: none">
                            <ul>
                              <li>수정</li>
                              <li>삭제</li>
                            </ul>
                          </div>
                        </i>
                      </td>
                    </tr>

                    <tr>
                      <td>영어리딩심화</td>
                      <td>
                        <div class="date">
                          <div class="box01 mr-1">2022.08.05</div>
                          <i class="icons_calendar_off mr-1"></i>
                          <div class="btn btn_crud_default">위와 동일</div>
                        </div>
                      </td>
                      <td class="date02">2022.08.05</td>
                      <td class="i"><i class="icons_plus_circle_off"></i></td>
                    </tr>

                    <tr>
                      <td>영어리딩심화</td>
                      <td>
                        <div class="date">
                          <div class="box01 mr-1">2022.08.05</div>
                          <i class="icons_calendar_off mr-1"></i>
                          <div class="btn btn_crud_default">위와 동일</div>
                        </div>
                      </td>
                      <td class="date02">2022.08.05</td>
                      <td class="i"><i class="icons_plus_circle_off"></i></td>
                    </tr>

                    <tr>
                      <td>영어리딩심화</td>
                      <td>
                        <div class="date">
                          <div class="box01 mr-1">2022.08.05</div>
                          <i class="icons_calendar_off mr-1"></i>
                          <div class="btn btn_crud_default">위와 동일</div>
                        </div>
                      </td>
                      <td class="date02">2022.08.05</td>
                      <td class="i"><i class="icons_plus_circle_off"></i></td>
                    </tr>

                    <tr>
                      <td>영어리딩심화</td>
                      <td>
                        <div class="date">
                          <div class="box01 mr-1">2022.08.05</div>
                          <i class="icons_calendar_off mr-1"></i>
                          <div class="btn btn_crud_default">위와 동일</div>
                        </div>
                      </td>
                      <td class="date02">2022.08.05</td>
                      <td class="i"><i class="icons_plus_circle_off"></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 출결-팝업 L -->
    <div
      id="modalMoreAttendance"
      class="modal fade double"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">출결</h5>
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
            <div class="modal_moreattendance">
              <div class="name">홍길동 <span>1/10</span></div>
              <!-- 달력 전체 영역 -->
              <div class="calendar_type01">
                <div class="search_section">
                  <div class="move_calendar">
                    <i class="icons_arrow_square_l"></i>
                    <span class="date_info">2022년 8월</span>
                    <i class="icons_arrow_square_r"></i>
                  </div>
                  <div class="search_area">
                    <div class="dropdown form-inline mr-2">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        선생님 전체
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">선생님 전체</a>
                        <a class="dropdown-item" href="#">홍길동 선생님</a>
                      </div>
                    </div>
                    <div class="calendar_date_bluebox">
                      2022.08.07 - 2022.08.13
                    </div>
                    <i class="icons_calendar_off mr-2"></i>
                    <div class="input-group input-search form-inline">
                      <input
                        type="text"
                        placeholder="반/학생 이름 검색"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn icons_search_off"
                          type="button"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="calendar_section">
                  <!-- 일주일 기준(일~토)달력 -->
                  <div class="calendar_area">
                    <!-- 왼쪽 시간표시 부분 -->
                    <div class="tit_time">
                      <div class="tit_week">
                        <span>시간<br />요일</span>
                      </div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour">
                        <div class="time">
                          09<span class="sm_hidden">:00</span>
                        </div>
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour">
                        <div class="time">
                          12<span class="sm_hidden">:00</span>
                        </div>
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour">
                        <div class="time">
                          15<span class="sm_hidden">:00</span>
                        </div>
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour">
                        <div class="time">
                          18<span class="sm_hidden">:00</span>
                        </div>
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour">
                        <div class="time">
                          21<span class="sm_hidden">:00</span>
                        </div>
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.왼쪽 시간표시 부분 -->
                    <!-- 일요일 -->
                    <div class="weeks sun">
                      <!-- [개발참조] : 날짜는 0포함 숫자로 표기 01,02,03,04 ... -->
                      <div class="tit_week">일<br />07</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.일요일 -->
                    <!-- 월요일 -->
                    <div class="weeks mon">
                      <div class="tit_week">월<br />08</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour">
                        <!-- 
												[개발참조] : height 1px = 1분
												0. 기획문서 상에서는 30분 단위에 포함시키고 있음.
												1. 커리큘럼의 시작시간은 30분단위 블럭의 해당 시간 박스
													시작 시간을 정확하게 분단위로 하고자 할경우 style="top:10px" 와 같이 추가 시킨다.
												2. 정확한 시간을 표시하고 자 할경우 : 박스의 height는 분단위와 같음 (예:입장~퇴장 130분 = height:130px) 
											-->
                        <!-- 커리큘럼 박스 예 : 오프라인 출결 컬러 01-->
                        <div
                          class="curriculum_box color_light1"
                          style="height: 120px"
                        >
                          <div class="academe">청담어학원</div>
                          <div class="enter">
                            <label>등원</label>
                            <span>AM 01:00:20</span>
                          </div>
                          <div class="leave">
                            <label>하원</label>
                            <span>PM 12:00:50</span>
                          </div>
                        </div>
                        <!-- /.커리큘럼 박스 -->
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.월요일 -->
                    <!-- 화요일 -->
                    <div class="weeks tue">
                      <div class="tit_week">화<br />09</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour">
                        <!-- 커리큘럼 박스 예: 정보없음, 컬러02-->
                        <div
                          class="curriculum_box color_emerald"
                          style="height: 60px"
                        >
                          <div class="academe">수학 수1 심화</div>
                          <div class="enter">
                            <label>정보없음</label>
                          </div>
                        </div>
                        <!-- /.커리큘럼 박스 -->
                      </div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.화요일 -->
                    <!-- 수요일 -->
                    <div class="weeks wed">
                      <div class="tit_week">수<br />10</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour">
                        <!-- 커리큘럼 박스 예: 온라인출결 입장 퇴장, 컬러03-->
                        <div
                          class="curriculum_box color_light2"
                          style="height: 90px"
                        >
                          <div class="academe">청담어학원</div>
                          <div class="enter">
                            <label>입장</label>
                            <span>PM 12:30:20</span>
                          </div>
                          <div class="leave">
                            <label>퇴장</label>
                            <span>PM 02:00:50</span>
                          </div>
                        </div>
                        <!-- /.커리큘럼 박스 -->
                      </div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.수요일 -->
                    <!-- 목요일 -->
                    <div class="weeks thu">
                      <div class="tit_week">목<br />11</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.목요일 -->
                    <!-- 금요일 -->
                    <div class="weeks fri">
                      <div class="tit_week">금<br />12</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.금요일 -->
                    <!-- 토요일 -->
                    <div class="weeks sat">
                      <div class="tit_week">토<br />13</div>
                      <!-- 30분 단위 블럭 -->
                      <div class="half-hour"></div>
                      <!-- 9:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 12:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 15:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 18:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- 21:00 -->
                      <div class="half-hour lined"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <div class="half-hour"></div>
                      <!-- /.30분 단위 블럭 -->
                    </div>
                    <!-- /.토요일 -->
                  </div>
                  <!-- /.일주일 기준(일~토)달력 -->
                </div>
                <!-- 달력의 이전다음 버튼 
								[개발참조] : 출결의 이전 다음 버튼 클릭 시 리스팅된 이전 다음 학생의 커리큘럼
								[개발참조] : 선택날짜범위 밖으로의 이전 다음 버튼 클리 시 toast 노출
							-->
                <div class="data_prev">
                  <i
                    class="btn icons_arrow_circle_l_off"
                    onClick="toasts('지난주로 이동할 수 없습니다.')"
                  ></i>
                </div>
                <div class="data_next">
                  <i
                    class="btn icons_arrow_circle_r_off"
                    onClick="toasts('다음주로 이동할 수 없습니다.')"
                  ></i>
                </div>
              </div>
              <!-- /.달력 전체 영역 -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 토스트메세지 victor.js ------------------------------------->
    <!-- [개발참조] : 출결팝업의 선택날짜범위 밖으로의 이전 다음 버튼 클리 시 노출 -->
    <div
      class="toast hide"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-delay="2000"
    >
      <div class="toast-body">
        <span id="toastMsg" class="message"></span>
      </div>
    </div>

    <!-- 메모-팝업 L -->
    <div
      id="modalMoreMemo"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">메모</h5>
            <button
              type="button"
              class="close"
              aria-label="Close"
              data-toggle="modal"
              data-target="#modalMoreMemo02"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="search_section">
              <div class="dropdown form-inline">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  최신 등록순
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">이름 오름차순</a>
                  <a class="dropdown-item" href="#">이름 내림차순</a>
                  <a class="dropdown-item" href="#">학년 오름차순</a>
                  <a class="dropdown-item" href="#">학년 내림차순</a>
                </div>
              </div>
              <button class="btn btn_crud_point">등록</button>
            </div>
            <div class="table_area">
              <div class="table_thead">
                <table class="tb">
                  <!-- <colgroup>
									<col width="10%">
									<col width="15%">
									<col width="15%">
									<col width="40%">
									<col width="10%">
									<col width="10%">
								</colgroup> -->
                  <thead>
                    <tr>
                      <th class="th01">번호</th>
                      <th class="th02">상담일자</th>
                      <th>면담/상담자</th>
                      <th class="th04">내용</th>
                      <th class="th05">수정/삭제</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table_tbody">
                <table class="tb">
                  <!-- <colgroup>
									<col width="10%">
									<col width="15%">
									<col width="15%">
									<col>
									<col width="10%">
								</colgroup> -->
                  <tbody>
                    <tr>
                      <td class="td01">1</td>
                      <td class="td02">2022.08.17 PM 09:00</td>
                      <td class="td03">홍길동</td>
                      <td class="memo td04">
                        <input
                          type="text"
                          placeholder="내용 입력"
                          class="form-control"
                        />
                      </td>
                      <td>
                        <i class="btn icons_mu_off more_mu">
                          <div class="more_list" style="display: none">
                            <ul>
                              <li>수정</li>
                              <li>삭제</li>
                            </ul>
                          </div>
                        </i>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>2022.08.17 PM 09:00</td>
                      <td>홍길동</td>
                      <td class="memo">금일 홍길동 학생 어머니와 면담 진행</td>
                      <td>
                        <i class="btn icons_mu_off more_mu">
                          <div class="more_list" style="display: none">
                            <ul>
                              <li>수정</li>
                              <li>삭제</li>
                            </ul>
                          </div>
                        </i>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>2022.08.17 PM 09:00</td>
                      <td>홍길동</td>
                      <td class="memo memo02">
                        금일 홍길동 학생 어머니와 면담 진행 금일 홍길동 학생
                        어머니와 면담 진행금일 홍길동 학생 어머니와 면담
                        진행금일 홍길동 학생 어머니와 면담 진행금일 홍길동 학생
                        어머니와 면담 진행금일 홍길동 학생 어머니와 면담
                        진행금일 홍길동 학생 어머니와 면담 진행
                      </td>
                      <td>
                        <i class="btn icons_mu_off more_mu">
                          <div class="more_list" style="display: none">
                            <ul>
                              <li>수정</li>
                              <li>삭제</li>
                            </ul>
                          </div>
                        </i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span class="previous"></span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span class="next"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- [개발참조] : 저장안함은 저장안하고 메모팝업창-L을 닫기 / 취소는 팝업창-S 만 닫기 (메모모달창 모두 닫기 스크립트 찹조)  -->
    <!-- 메모 저장 - 팝업 S2 -->
    <div
      id="modalMoreMemo02"
      class="modal fade ac_manage_std double"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">메모</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">내용을 저장하시겠습니까?</div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">저장</button>
            <button
              id="modalAllclose"
              class="btn btn_crud_default"
              data-dismiss="modal"
            >
              저장 안 함
            </button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 학습리포트 : 필터 -팝업 L -->
    <div
      id="modalMoreReports"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              학습리포트 - <span>홍길동</span>
            </h5>
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
            <div class="modal_morereports">
              <div class="date_area">
                <div class="calendar_date_bluebox">2022.08.07 - 2022.08.13</div>
                <i class="icons_calendar_off mr-2"></i>
              </div>
              <div class="cnts_section">
                <div class="list_section">
                  <div class="title">반</div>
                  <div class="input-group input-search">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="반 이름 검색"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                      ></button>
                    </div>
                  </div>

                  <div class="list_area">
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore01all"
                            type="checkbox"
                            class="custom-control-input"
                            checked
                          />
                          <label class="custom-control-label" for="chkMore01all"
                            >전체</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0101"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0101"
                            >심화A반</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0102"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0102"
                            >심화B반</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0103"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0103"
                            >심화C반</label
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="list_section">
                  <div class="title">과목</div>
                  <div class="input-group input-search">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="과목 검색"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                      ></button>
                    </div>
                  </div>
                  <div class="list_area">
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore02all"
                            type="checkbox"
                            class="custom-control-input"
                            checked
                          />
                          <label class="custom-control-label" for="chkMore02all"
                            >전체</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0201"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0201"
                            >영어</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0202"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0202"
                            >수학</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0203"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0203"
                            >국어</label
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="list_section">
                  <div class="title">강좌</div>
                  <div class="input-group input-search">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="강좌 이름 검색"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                      ></button>
                    </div>
                  </div>
                  <div class="list_area">
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore03all"
                            type="checkbox"
                            class="custom-control-input"
                            checked
                          />
                          <label class="custom-control-label" for="chkMore03all"
                            >전체</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0301"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0301"
                            >영어리딩기초</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0302"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0302"
                            >영어리딩기초</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0303"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0303"
                            >영어리딩기초</label
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="list_section">
                  <div class="title">시험</div>
                  <div class="input-group input-search">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="시험 유형 검색"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                      ></button>
                    </div>
                  </div>
                  <div class="list_area">
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore04all"
                            type="checkbox"
                            class="custom-control-input"
                            checked
                          />
                          <label class="custom-control-label" for="chkMore04all"
                            >전체</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0401"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0401"
                            >쪽지시험(22)</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0402"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0402"
                            >퀴즈(6)</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0403"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0403"
                            >정기시험(1)</label
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn_crud_point"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modalMoreReports2"
            >
              검색
            </button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 학습리포트 : 리포트열람 -팝업 L -->
    <div
      id="modalMoreReports2"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              리포트 열람 <span class="info_txt">1/10</span>
            </h5>
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
            <div class="modal_morereports02">
              <div class="title_name">
                <span>김지원</span> 학생의 학습 리포트
              </div>
              <div class="contents_section">
                <div class="table_area">
                  <div class="search_result">
                    <table class="table table-borderless">
                      <colgroup>
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">학습 기간</th>
                          <th scope="col">강좌</th>
                          <th scope="col">반</th>
                          <th scope="col">출석률</th>
                          <th scope="col">시험 유형</th>
                          <th scope="col">응시일</th>
                          <th scope="col">점수(%)</th>
                          <th scope="col">반평균(%)</th>
                          <th scope="col">문항별</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>22.05.11 - 22.05.21</td>
                          <td>영어리딩심화</td>
                          <td>심화A</td>
                          <td>80%</td>
                          <td>쪽지시험</td>
                          <td>22.05.11</td>
                          <td>80</td>
                          <td>70</td>
                          <td>12/15</td>
                        </tr>
                        <tr>
                          <td>22.05.11 - 22.05.21</td>
                          <td>영어리딩심화</td>
                          <td>심화A</td>
                          <td>80%</td>
                          <td>쪽지시험</td>
                          <td>22.05.11</td>
                          <td>80</td>
                          <td>70</td>
                          <td>12/15</td>
                        </tr>
                        <tr>
                          <td>22.05.11 - 22.05.21</td>
                          <td>영어리딩심화</td>
                          <td>심화A</td>
                          <td>80%</td>
                          <td>쪽지시험</td>
                          <td>22.05.11</td>
                          <td>80</td>
                          <td>70</td>
                          <td>12/15</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="graph_area">
                  <div class="reports_graph">
                    <div class="title">학습 리포트</div>
                    <div class="per_num">
                      <span>0</span>
                      <span>25</span>
                      <span>50</span>
                      <span>75<i>100</i></span>
                    </div>

                    <!-- 커리큘럼 그래프 박스 color01 -->
                    <!-- [개발참조] 컬러테마 color01, color02, color03 : class="report_box color01,02,03 -->
                    <div class="report_box color01">
                      <div class="subject">영어리딩심화</div>
                      <!-- [개발참조] 내평균 위치 표시 = 00% : style="left: 00%;" -->
                      <div class="my_average" style="left: 80%">80%</div>
                      <!-- [개발참조] 반평균 텍스트 위치 = 00% : style="left: calc(00% -->
                      <div class="class_average" style="left: calc(70% - 64px)">
                        반평균 70
                      </div>
                      <div class="graph_bg">
                        <!-- [개발참조] 반평균 그래프 채우기 = 00% : style="width: 00%;" -->
                        <span class="class_percent" style="width: 70%"></span>
                      </div>
                    </div>
                    <!-- /.커리큘럼 그래프 박스 color01 -->

                    <!-- 커리큘럼 그래프 박스 color02 -->
                    <!-- [개발참조] 컬러테마 color01, color02, color03 : class="report_box color01,02,03 -->
                    <div class="report_box color02">
                      <div class="subject">수학 수1</div>
                      <!-- [개발참조] 내평균 위치 표시 = 00% : style="left: 00%;" *없을경우 display:none; -->
                      <div class="my_average" style="left: 00%; display: none">
                        00%
                      </div>
                      <!-- [개발참조] 반평균 텍스트 위치 = 00% : style="left: calc(00% -->
                      <div class="class_average" style="left: calc(50% - 64px)">
                        반평균 50
                      </div>
                      <div class="graph_bg">
                        <!-- [개발참조] 반평균 그래프 채우기 = 00% : style="width: 00%;" -->
                        <span class="class_percent" style="width: 50%"></span>
                      </div>
                    </div>
                    <!-- /.커리큘럼 그래프 박스 color02 -->

                    <!-- 커리큘럼 그래프 박스 color03 -->
                    <!-- [개발참조] 컬러테마 color01, color02, color03 : class="report_box color01,02,03 -->
                    <div class="report_box color03">
                      <div class="subject">국어문법심화</div>
                      <!-- [개발참조] 내평균 위치 표시 = 00% : style="left: 00%;" -->
                      <div class="my_average" style="left: 30%">30%</div>
                      <!-- [개발참조] 반평균 텍스트 위치 = 00% : style="left: calc(00% -->
                      <div class="class_average" style="left: calc(80% - 64px)">
                        반평균 80
                      </div>
                      <div class="graph_bg">
                        <!-- [개발참조] 반평균 그래프 채우기 = 00% : style="width: 00%;" -->
                        <span class="class_percent" style="width: 80%"></span>
                      </div>
                    </div>
                    <!-- /.커리큘럼 그래프 박스 color03 -->
                  </div>
                  <div class="per_area">
                    <div class="title">학습 리포트</div>
                    <div class="value">80</div>
                    <div class="value">-</div>
                    <div class="value">30</div>
                  </div>
                  <div class="per_area">
                    <div class="title">학습 리포트</div>
                    <div class="value">12/15</div>
                    <div class="value">-</div>
                    <div class="value">10/12</div>
                  </div>
                </div>
              </div>
              <!-- 이전다음 버튼 -->
              <div class="data_prev">
                <i class="btn icons_arrow_square_l"></i>
              </div>
              <div class="data_next">
                <i class="btn icons_arrow_square_r"></i>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_default">저장</button>
            <button class="btn btn_crud_default">인쇄</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 팝업 S2- 일촌ID삭제 -->
    <div
      id="modalFriendsDelete"
      class="modal fade double"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm s2">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">삭제</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">일촌 ID를 삭제하시겠습니까?</div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">네</button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              아니요
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 학생 개별 등록2(학생등록완료) - 팝업 S2 -->
    <div
      id="modalMyinfoPop"
      class="modal fade ac_manage_std double"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">학생 개별 등록</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">새로운 학생이 등록되었습니다.</div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">확인</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBox from '@/components/operation/NavBox.vue'
export default {
  name: 'StudentManagement',
  components: { NavBox },
}
</script>
<style scoped></style>
