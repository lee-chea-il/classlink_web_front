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
              <button class="btn btn_crud_default" @click="onOpenClassMove">
                이동
              </button>
              <button class="btn btn_crud_danger" @click="onClickClassDelete">
                삭제
              </button>
              <!-- [개발참조]toasts 메세지 '반을 선택해주세요.'' : 아무런 반을 체크하지 않고 복사를 누르면 -->
            </div>
            <div class="right_area">
              <button class="btn btn_crud_point" @click="onOpenClassModify()">
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
                  <option
                    v-for="(item, idx) in classList"
                    :key="idx"
                    :value="item.teacher"
                  >
                    {{ item.teacher }} 선생님
                  </option>
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
                      @click="onOpenClassModify(item)"
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
    <ClassModifyModal
      :show="openClassModify"
      :teacherList="teacherList"
      :studentList="studentList"
      :selectedTeacher="selectedTeacher"
      @add-selected-teacher="onClickAddSelectedTeacher"
      @delete-selected-teacher="onClickDeleteSelectedTeacher"
      @close="onCloseClassModify"
    />

    <!-- [개발참조] : 반 상세 모달에서 뜨는 2번째 팝업(학생상세 및 더보기 메뉴의 모달 팝업)은 겹치는 팝업이므로 class="double" 추가 필요 -->
    <!-- 반 상세 팝업 (팝업 L) -->
    <ClassDetailModal
      :classInfo="classInfo"
      :studentInfo="studentInfo"
      :modalDetailMore="modalDetailMore"
      :studentInfoModalDesc="studentInfoModalDesc"
      :nickNameCheck="nickNameCheck"
      :familySearchText="familySearchText"
      @open="onOpenStudentInfoModalDesc"
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
    <ClassMoveModal :show="openClassMove" @close="onCloseClassMove" />

    <DeleteModal
      :open="deleteModalDesc.open"
      :title="deleteModalDesc.title"
      @close="onCloseDeleteModalDesc"
    />

    <Toast :show="openToast.open" :message="message" />
  </div>
</template>

<script>
import NavBox from '@/components/operation/NavBox.vue'
import ClassModifyModal from '@/components/common/modal/operation/ClassModifyModal.vue'
import ClassDetailModal from '@/components/common/modal/operation/ClassDetailModal.vue'
import ClassMoveModal from '@/components/common/modal/operation/ClassMoveModal.vue'
import DeleteModal from '@/components/lecturecourse/DeletePlanModal.vue'
import Toast from '@/components/common/Toast.vue'
export default {
  name: 'ClassManagement',
  components: {
    NavBox,
    ClassModifyModal,
    ClassDetailModal,
    ClassMoveModal,
    DeleteModal,
    Toast,
  },
  data() {
    return {
      studentInfoModalDesc: {
        open: false,
      },
      nickNameCheck: false,
      familySearchText: '',
      // 반 리스트
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
              name: '이성국',
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
              school: '디지텍',
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
      studentInfo: {
        id: 0,
        identity: [],
        status: false,
        grade: '초1',
        grade_type: 0,
        class: [],
        name: '',
        nickname: '',
        family: [],
        account: '',
        phone: '',
        parent_phone: '',
        gender: 0,
        student_status: false,
        school: '',
        attendance_num: '',
        created_at: '',
        lecture_date: '',
        birthday: '',
        email: '',
        profile_image: '',
        lectureInfo: [],
      },

      teacherList: [
        {
          id: 1,
          name: '홍길동',
        },
        {
          id: 2,
          name: '길동홍',
        },
        {
          id: 3,
          name: '동홍길',
        },
      ],
      studentList: {
        gradeList: [
          {
            grade: '초1',
            student: [
              {
                id: 1,
                name: '홍미미',
              },
              {
                id: 2,
                name: '이미미',
              },
              {
                id: 3,
                name: '삼삼삼',
              },
            ],
          },
        ],
        classList: [
          {
            id: 1,
            className: '영어 심화 A반',
            student: [
              {
                id: 1,
                name: '홍미미',
              },
              {
                id: 2,
                name: '이미미',
              },
              {
                id: 3,
                name: '삼삼삼',
              },
            ],
          },
        ],
      },
      selectedTeacher: [],

      // 상세 모달 더보기
      modalDetailMore: 0,

      // 반 만들기/수정 반 학셍 상세
      modalModifyDetail: null,

      // 체크박스
      allCheck: false,
      checkList: [],

      // 모달
      openClassModify: {
        open: false,
        data: null,
      },
      openClassMove: {
        open: false,
        data: null,
      },

      openToast: {
        open: false,
      },
      message: '',

      deleteModalDesc: {
        open: false,
        title: '',
      },
    }
  },
  methods: {
    // 토스트
    onOpenToast(text) {
      this.openToast.open = true
      this.message = text
    },
    onCloseToast() {
      this.openToast.open = false
      this.message = ''
    },
    // 삭제모달
    openDeleteModalDesc(tit) {
      this.deleteModalDesc = {
        open: true,
        title: tit,
      }
    },
    onCloseDeleteModalDesc() {
      this.deleteModalDesc.open = false
    },

    // 반 만들기/수정 모달 열기
    onOpenClassModify(data) {
      this.openClassModify.open = true
      this.openClassModify.data = data === undefined ? null : data
    },
    onCloseClassModify() {
      this.openClassModify.open = false
      this.openClassModify.data = null
    },

    // 반 이동 모달 열기
    onOpenClassMove() {
      this.openClassMove.open = true
    },
    onCloseClassMove() {
      this.openClassMove.open = false
    },

    onClickClassInfo(data) {
      this.modalDetailMore = 0
      this.classInfo = data
      console.log(this.classInfo)
    },
    onClickOpenDetailMore(id) {
      if (this.modalDetailMore === id) {
        this.modalDetailMore = 0
      } else {
        this.modalDetailMore = id
      }
    },

    // 체크박스
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

    // 체크 박스 선택 후
    // 삭제버튼 클릭
    onClickClassDelete() {
      if (this.checkList.length === 0) {
        this.onOpenToast('반을 선택해주세요.')
        setTimeout(() => {
          this.onCloseToast()
        }, 2000)
      } else {
        this.openDeleteModalDesc('반')
      }
    },
    // 이동 버튼 클릭
    onClickClassMove() {},
    // 복사 버튼 클릭
    onClickClassCopy() {},

    // 반 수정/만들기 모달
    // 반 선생님 추가/삭제
    onClickAddSelectedTeacher(data) {
      this.teacherList = this.teacherList.filter((item) => item !== data)
      this.selectedTeacher.push(data)
    },
    onClickDeleteSelectedTeacher(data) {
      this.selectedTeacher = this.selectedTeacher.filter(
        (item) => item !== data
      )
      this.teacherList.push(data)
    },

    // 반 만들기/수정 반 학생

    // 학생 개별 등록/학생 상세 정보 모달
    // 모달 이벤트
    onOpenStudentInfoModalDesc(data) {
      this.studentInfoModalDesc.open = true
      this.studentInfo = data
      console.log(data)
    },
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
