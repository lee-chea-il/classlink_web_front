<template>
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
        url3="/management/operation/classmanagement"
        url4="/management/operation/exammanagement"
      />

      <div class="tab-content depth03 ac_manage_cls">
        <div class="tab-pane active">
          <!-- [개발참조] 등록된 학생이 없는 경우 -->
          <!-- <div class="nothing_txt">
            <div class="txt">
              등록된 반이 없습니다.<br />
              먼저 반을 등록해주세요.
            </div>
            <div class="btn_area">
              <button class="btn btn_crud_point">반 만들기</button>
            </div>
          </div> -->
          <!-- /.등록된 학생이 없는 경우 -->
          <!-- 컨트롤 버튼 영역 -->
          <div class="search_section">
            <div class="left_area">
              <div
                class="btn btn_crud_default"
                onClick="toasts('반을 선택해주세요.')"
              >
                복사
              </div>
              <button
                class="btn btn_crud_default"
                onClick="toasts('반을 선택해주세요.')"
                data-toggle="modal"
                data-target="#modalClassMove"
              >
                이동
              </button>
              <button
                class="btn btn_crud_danger"
                onClick="toasts('반을 선택해주세요.')"
              >
                삭제
              </button>
              <!-- [개발참조]toasts 메세지 '반을 선택해주세요.'' : 아무런 반을 체크하지 않고 복사를 누르면 -->
            </div>
            <div class="right_area">
              <button
                class="btn btn_crud_point"
                data-toggle="modal"
                data-target="#modalClassModify"
              >
                반 만들기
              </button>
              <button class="btn btn_crud_default">배정 X</button>
            </div>
          </div>
          <!-- /.컨트롤 버튼 영역 -->
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="left_area">
              <div class="dropdown form-inline">
                <!-- <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  선생님 전체
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item">선생님 전체</a>
                  <a class="dropdown-item">홍길동 선생님</a>
                </div> -->
                <select class="btn dropdown-toggle">
                  <option value="all-teacher">선생님 전체</option>
                  <option value="">홍길동 선생님</option>
                </select>
              </div>
              <div class="dropdown form-inline">
                <!-- <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  10개씩 보기
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item">100개씩 보기</a>
                  <a class="dropdown-item">200개씩 보기</a>
                </div> -->
                <select class="btn dropdown-toggle">
                  <option value="10">10개씩 보기</option>
                  <option value="100">100개씩 보기</option>
                  <option value="200">200개씩 보기</option>
                </select>
              </div>
            </div>
            <div class="right_area">
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  id="radio01"
                  type="radio"
                  name="radio00"
                  class="custom-control-input"
                  checked
                />
                <label class="custom-control-label" for="radio01">반</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  id="radio02"
                  type="radio"
                  name="radio00"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="radio02">이름</label>
              </div>
              <div class="input-group input-search form-inline">
                <input
                  type="text"
                  placeholder="반 이름 검색"
                  class="form-control"
                />
                <div class="input-group-append">
                  <button class="btn icons_search_off" type="button"></button>
                </div>
              </div>
            </div>
          </div>
          <!-- 검색 영역 -->
          <!-- 테이블 영역 -->
          <div class="table_section">
            <table class="table">
              <!-- <colgroup>
								<col width="80">
								<col>
								<col>
								<col>
								<col width="80">
								<col width="80">
								<col width="80">
							</colgroup> -->
              <thead>
                <tr>
                  <th>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chkAll"
                        type="checkbox"
                        class="custom-control-input"
                        :checked="allCheck"
                        @input="onClickClassAllCheck"
                      />
                      <label class="custom-control-label" for="chkAll"></label>
                    </div>
                  </th>
                  <th>반</th>
                  <th>학생 수</th>
                  <th>담당 선생님</th>
                  <th>수정</th>
                  <th>상세</th>
                  <th>이동</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in classList" :key="idx">
                  <td>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        :id="idx"
                        type="checkbox"
                        class="custom-control-input"
                        :checked="checkList.includes(idx)"
                        @input="onClickCheckBox(idx)"
                      />
                      <label class="custom-control-label" :for="idx"></label>
                    </div>
                  </td>
                  <td>{{ item.class }}</td>
                  <td>{{ item.personnel }}</td>
                  <td>{{ item.teacher }} 선생님</td>
                  <td>
                    <i
                      class="btn icons_pencil_off"
                      data-toggle="modal"
                      data-target="#modalClassModify"
                    ></i>
                  </td>
                  <td>
                    <i
                      class="btn icons_zoom_off"
                      data-toggle="modal"
                      data-target="#modalClassDetail"
                      @click="onClickClassInfo(item)"
                    ></i>
                  </td>
                  <td>
                    <i class="btn icons_move_off"></i>
                  </td>
                </tr>
                <!-- <tr>
                  <td>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chk02"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chk02"></label>
                    </div>
                  </td>
                  <td>심화A반</td>
                  <td>24</td>
                  <td>홍길동 선생님</td>
                  <td>
                    <i
                      class="btn icons_pencil_off"
                      data-toggle="modal"
                      data-target="#modalClassModify"
                    ></i>
                  </td>
                  <td>
                    <i
                      class="btn icons_zoom_off"
                      data-toggle="modal"
                      data-target="#modalClassDetail"
                    ></i>
                  </td>
                  <td>
                    <i class="btn icons_move_off"></i>
                  </td>
                </tr> -->
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

    <!-- 반관리-반등록,수정 - 팝업 L -->
    <ClassModifyModal />

    <!-- [개발참조] : 반 상세 모달에서 뜨는 2번째 팝업(학생상세 및 더보기 메뉴의 모달 팝업)은 겹치는 팝업이므로 class="double" 추가 필요 -->
    <!-- 반 상세 팝업 (팝업 L) -->
    <ClassDetailModal
      :classInfo="classInfo"
      :modalDetailMore="modalDetailMore"
      :studentInfoModalDesc="studentInfoModalDesc"
      :nickNameCheck="nickNameCheck"
      :familySearchText="familySearchText"
      @close="onCloseStudentInfoModalDesc"
      @change-input="onChangeUpdateInput"
      @click-birthday="openDatePickerModalDesc"
      @click-lecturedate="openDatePickerLectureDateModalDesc"
      @click-identity="onClickIdentityBtn"
      @click-grade="onClickTypeGrade"
      @click-adult="onClickTypeAdult"
      @click-men="onClickGenderMen"
      @click-women="onClickGenderWomen"
      @click-statusTrue="onClickStatusTrue"
      @click-statusFalse="onClickStatusFalse"
      @click-stuStatusTrue="onClickStudentStatusTrue"
      @click-stuStatusFalse="onClickStudentStatusFalse"
      @select-grade="selectGrade"
      @click-profile="openUploadStudentImgModalDesc"
      @click-deleteFamily="onClickFamilyDeleteBtn"
      @change-familyInput="onChangeFamilySearchInput"
      @search-family="onClickSearchBtn"
      @open-detail="onClickOpenDetailMore"
    />

    <!-- 반관리-반이동 - 팝업 L -->
    <ClassMoveModal />

    <div
      id="modalMyinfo"
      class="modal fade modal_myinfo ac_manage_std double"
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
                <!-- <span
                  style="
                    background-image: url(../images/sample_profile_photo.jpg);
                  "
                ></span> -->
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
  </div>
</template>

<script>
import NavBox from '@/components/operation/NavBox.vue'
import ClassModifyModal from '@/components/common/modal/operation/ClassModifyModal.vue'
import ClassDetailModal from '@/components/common/modal/operation/ClassDetailModal.vue'
import ClassMoveModal from '@/components/common/modal/operation/ClassMoveModal.vue'
export default {
  name: 'ClassManagement',
  components: {
    NavBox,
    ClassModifyModal,
    ClassDetailModal,
    ClassMoveModal,
  },
  data() {
    return {
      studentInfoModalDesc: {
        open: true,
      },
      nickNameCheck: false,
      familySearchText: '',

      classList: [
        {
          class: '심화A반',
          personnel: 24,
          teacher: '홍길동',
          studentList: [
            {
              id: 1,
              identity: ['학생', '학부모'],
              status: true,
              grade: '중1',
              grade_type: 0,
              class: ['심화 A반', '심화 B반'],
              name: '김유진',
              nickname: '유진쓰',
              family: [
                {
                  id: 0,
                  identity: '학생',
                  status: '재원',
                  grade: '중1',
                  name: '홍길동',
                  nickname: '길동쓰',
                  family: '홍길순, 홍길삼, 홍길사, 홍길오, 홍길육',
                  account: 'rlfehd1004',
                  phone: '010-1234-1234',
                  parent_phone: '010-1234-1111',
                  gender: '남',
                },
              ],
              account: 'rlfehd1004',
              phone: '010-1234-1234',
              parent_phone: '010-1234-1111',
              gender: 0,
              student_status: false,
              school: '스노우',
              attendance_num: '12345',
              created_at: '2022.11.22',
              lecture_date: '2022.11.30',
              birthday: '2022.11.01',
              email: 'test@naver.com',
              profile_image: require('@/assets/images/mypage/profile1.png'),
              lectureInfo: [
                '영어리딩심화 | 심화 A반',
                '영어리딩심화 | 심화 B반',
                '영어리딩심화 | 심화 C반',
              ],
            },
            {
              id: 2,
              identity: ['학생', '학부모'],
              status: true,
              grade: '중1',
              grade_type: 0,
              class: ['심화 A반', '심화 B반'],
              name: '김유진',
              nickname: '유진쓰',
              family: [
                {
                  id: 0,
                  identity: '학생',
                  status: '재원',
                  grade: '중1',
                  name: '홍길동',
                  nickname: '길동쓰',
                  family: '홍길순, 홍길삼, 홍길사, 홍길오, 홍길육',
                  account: 'rlfehd1004',
                  phone: '010-1234-1234',
                  parent_phone: '010-1234-1111',
                  gender: '남',
                },
              ],
              account: 'rlfehd1004',
              phone: '010-1234-1234',
              parent_phone: '010-1234-1111',
              gender: 0,
              student_status: false,
              school: '스노우',
              attendance_num: '12345',
              created_at: '2022.11.22',
              lecture_date: '2022.11.30',
              birthday: '2022.11.01',
              email: 'test@naver.com',
              profile_image: require('@/assets/images/mypage/profile1.png'),
              lectureInfo: [
                '영어리딩심화 | 심화 A반',
                '영어리딩심화 | 심화 B반',
                '영어리딩심화 | 심화 C반',
              ],
            },
          ],
        },
        {
          class: '심화B반',
          personnel: 15,
          teacher: '길동홍',
          studentList: [
            {
              id: 1,
              identity: ['학생', '학부모'],
              status: true,
              grade: '중1',
              grade_type: 0,
              class: ['심화 A반', '심화 B반'],
              name: '김유진',
              nickname: '유진쓰',
              family: [
                {
                  id: 0,
                  identity: '학생',
                  status: '재원',
                  grade: '중1',
                  name: '홍길동',
                  nickname: '길동쓰',
                  family: '홍길순, 홍길삼, 홍길사, 홍길오, 홍길육',
                  account: 'rlfehd1004',
                  phone: '010-1234-1234',
                  parent_phone: '010-1234-1111',
                  gender: '남',
                },
              ],
              account: 'rlfehd1004',
              phone: '010-1234-1234',
              parent_phone: '010-1234-1111',
              gender: 0,
              student_status: false,
              school: '스노우',
              attendance_num: '12345',
              created_at: '2022.11.22',
              lecture_date: '2022.11.30',
              birthday: '2022.11.01',
              email: 'test@naver.com',
              profile_image: require('@/assets/images/mypage/profile1.png'),
              lectureInfo: [
                '영어리딩심화 | 심화 A반',
                '영어리딩심화 | 심화 B반',
                '영어리딩심화 | 심화 C반',
              ],
            },
            {
              id: 2,
              identity: ['학생', '학부모'],
              status: true,
              grade: '중1',
              grade_type: 0,
              class: ['심화 A반', '심화 B반'],
              name: '김유진',
              nickname: '유진쓰',
              family: [
                {
                  id: 0,
                  identity: '학생',
                  status: '재원',
                  grade: '중1',
                  name: '홍길동',
                  nickname: '길동쓰',
                  family: '홍길순, 홍길삼, 홍길사, 홍길오, 홍길육',
                  account: 'rlfehd1004',
                  phone: '010-1234-1234',
                  parent_phone: '010-1234-1111',
                  gender: '남',
                },
              ],
              account: 'rlfehd1004',
              phone: '010-1234-1234',
              parent_phone: '010-1234-1111',
              gender: 0,
              student_status: false,
              school: '스노우',
              attendance_num: '12345',
              created_at: '2022.11.22',
              lecture_date: '2022.11.30',
              birthday: '2022.11.01',
              email: 'test@naver.com',
              profile_image: require('@/assets/images/mypage/profile1.png'),
              lectureInfo: [
                '영어리딩심화 | 심화 A반',
                '영어리딩심화 | 심화 B반',
                '영어리딩심화 | 심화 C반',
              ],
            },
          ],
        },
        {
          class: '심화C반',
          personnel: 41,
          teacher: '동홍길',
          studentList: [
            {
              id: 1,
              identity: ['학생', '학부모'],
              status: true,
              grade: '중1',
              grade_type: 0,
              class: ['심화 A반', '심화 B반'],
              name: '김유진',
              nickname: '유진쓰',
              family: [
                {
                  id: 0,
                  identity: '학생',
                  status: '재원',
                  grade: '중1',
                  name: '홍길동',
                  nickname: '길동쓰',
                  family: '홍길순, 홍길삼, 홍길사, 홍길오, 홍길육',
                  account: 'rlfehd1004',
                  phone: '010-1234-1234',
                  parent_phone: '010-1234-1111',
                  gender: '남',
                },
              ],
              account: 'rlfehd1004',
              phone: '010-1234-1234',
              parent_phone: '010-1234-1111',
              gender: 0,
              student_status: false,
              school: '스노우',
              attendance_num: '12345',
              created_at: '2022.11.22',
              lecture_date: '2022.11.30',
              birthday: '2022.11.01',
              email: 'test@naver.com',
              profile_image: require('@/assets/images/mypage/profile1.png'),
              lectureInfo: [
                '영어리딩심화 | 심화 A반',
                '영어리딩심화 | 심화 B반',
                '영어리딩심화 | 심화 C반',
              ],
            },
            {
              id: 2,
              identity: ['학생', '학부모'],
              status: true,
              grade: '중1',
              grade_type: 0,
              class: ['심화 A반', '심화 B반'],
              name: '김유진',
              nickname: '유진쓰',
              family: [
                {
                  id: 0,
                  identity: '학생',
                  status: '재원',
                  grade: '중1',
                  name: '홍길동',
                  nickname: '길동쓰',
                  family: '홍길순, 홍길삼, 홍길사, 홍길오, 홍길육',
                  account: 'rlfehd1004',
                  phone: '010-1234-1234',
                  parent_phone: '010-1234-1111',
                  gender: '남',
                },
              ],
              account: 'rlfehd1004',
              phone: '010-1234-1234',
              parent_phone: '010-1234-1111',
              gender: 0,
              student_status: false,
              school: '스노우',
              attendance_num: '12345',
              created_at: '2022.11.22',
              lecture_date: '2022.11.30',
              birthday: '2022.11.01',
              email: 'test@naver.com',
              profile_image: require('@/assets/images/mypage/profile1.png'),
              lectureInfo: [
                '영어리딩심화 | 심화 A반',
                '영어리딩심화 | 심화 B반',
                '영어리딩심화 | 심화 C반',
              ],
            },
          ],
        },
      ],
      classInfo: {
        studentList: [],
      },

      modalDetailMore: 0,

      allCheck: false,
      checkList: [],
    }
  },
  methods: {
    onClickClassInfo(data) {
      this.modalDetailMore = 0
      this.classInfo = data
    },
    onClickOpenDetailMore(id) {
      if (this.modalDetailMore === id) {
        this.modalDetailMore = 0
      } else {
        this.modalDetailMore = id
      }
    },

    onClickClassAllCheck() {
      if (this.allCheck) {
        this.checkList.splice(0, this.classList.length)
        this.allCheck = false
      } else {
        this.checkList.splice(0, this.classList.length)
        for (let i = 0; i < this.classList.length; i++) {
          this.checkList.push(i)
        }
        this.allCheck = true
      }
    },
    onClickCheckBox(idx) {
      if (this.checkList.includes(idx)) {
        this.checkList = this.checkList.filter((item) => item !== idx)
        if (this.checkList.length !== this.classList.length) {
          this.allCheck = false
        }
      } else {
        this.checkList.push(idx)
        if (this.checkList.length === this.classList.length) {
          this.allCheck = true
        }
      }
    },

    // 학생 개별 등록/학생 상세 정보 모달
    // 모달 이벤트
    onCloseStudentInfoModalDesc() {
      this.studentInfoModalDesc.open = false
    },
    openDatePickerModalDesc() {
      this.datePickerModalDesc.open = true
    },
    openDatePickerLectureDateModalDesc() {
      this.datePickerLectureDateModalDesc.open = true
    },
    // 학생 정보 등록/수정
    onChangeUpdateInput({ target: { value, id, checked } }) {
      this.studentInfo[id] = value
      if (checked) {
        this.studentInfo.nickname = this.studentInfo.name
        this.nickNameCheck = true
      }
      if (this.studentInfo.nickname !== this.studentInfo.name) {
        this.nickNameCheck = false
      } else {
        this.nickNameCheck = true
      }
      if (id.includes('phone')) {
        this.studentInfo[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(-{1,2})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
    },
    // 나의 신분 수정
    onClickIdentityBtn(identity) {
      if (this.studentInfo.identity.includes(identity)) {
        for (let i = 0; i < this.studentInfo.identity.length; i++) {
          if (this.studentInfo.identity[i] === identity) {
            this.studentInfo.identity.splice(i, 1)
          }
        }
      } else {
        this.studentInfo.identity.push(identity)
      }
      console.log(this.studentInfo.identity)
    },
    // 학년 수정
    onClickTypeGrade() {
      this.studentInfo.grade_type = 0
    },
    onClickTypeAdult() {
      this.studentInfo.grade_type = 1
    },
    // 성별 수정
    onClickGenderMen() {
      this.studentInfo.gender = 0
    },
    onClickGenderWomen() {
      this.studentInfo.gender = 1
    },
    // 상태 변경 수정
    onClickStatusTrue() {
      this.studentInfo.status = true
    },
    onClickStatusFalse() {
      this.studentInfo.status = false
    },
    // 학생상태 변경 수정
    onClickStudentStatusTrue() {
      this.studentInfo.student_status = true
    },
    onClickStudentStatusFalse() {
      this.studentInfo.student_status = false
    },
    selectGrade(grade) {
      this.studentInfo.grade = grade
    },
    openUploadStudentImgModalDesc() {
      this.uploadStudentImgModalDesc.open = true
    },
    onClickFamilyDeleteBtn(id) {
      this.deleteFamilyId = id
    },
    // 일촌
    onChangeFamilySearchInput({ target: { value } }) {
      this.familySearchText = value
    },
    onClickSearchBtn() {
      const btn = document.getElementById('modalFamilySearch')
      btn.click()
      this.searchFamily()
    },
  },
}
</script>

<style></style>
