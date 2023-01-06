<template>
  <div>
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
      <ClassListBox
        :classList.sync="classList"
        :classListB="classListB"
        :sortTeacherSelect="sortTeacherSelect"
        :teacherList="teacherList"
        :sortNumberSelect="sortNumberSelect"
        :searchText.sync="searchText"
        :allCheck="allCheck"
        :checkList="checkList"
        :endPage="endPage"
        :currentPage="currentPage"
        @class-copy="onClickClassCopy"
        @class-move="onClickClassMove"
        @class-delete="onClickClassDelete"
        @class-regist="onOpenClassRegist"
        @unallocation-student="onClickUnallocation"
        @sort-teacher="onChangeTeacherSort"
        @sort-number="onChangeNumberSort"
        @search-radio="searchRadio"
        @search-classlist="getClassList"
        @click-allcheck="onClickClassAllCheck"
        @drag-start="onStart"
        @drag-change="onDrop"
        @click-checkbox="onClickCheckBox"
        @open-modify="onOpenClassModify"
        @open-detail="getClassDetail"
        @prev-page="onClickPrevPage"
        @next-page="onClickNextPage"
        @current-page="onClickCurrentPage"
      />
    </div>

    <!-- ------- 모달 --------- -->
    <!-- 반관리-반등록,수정 - 팝업 L -->
    <ClassModifyModal
      :show="openClassModify"
      :teacherList="teacherList"
      :studentList="studentList"
      :selectedTeacher="selectedTeacher"
      :selectedStudentAll="selectedStudentAll"
      :selectedStudentList="selectedStudentList"
      :modalModifyDetail="modalModifyDetail"
      :modalModifyClassDetail="modalModifyClassDetail"
      :modalModifySelectDetail="modalModifySelectDetail"
      :studentTab="studentTab"
      :className.sync="className"
      :classTeacherSearch.sync="classTeacherSearch"
      :classStudentSearch.sync="classStudentSearch"
      @add-selected-teacher="onClickAddSelectedTeacher"
      @delete-selected-teacher="onClickDeleteSelectedTeacher"
      @add-selected-student-all="onClickAddSelectedStudentAll"
      @delete-selected-student-all="onClickDeleteSelectedStudentAll"
      @add-selected-student="onClickAddSelectedStudent"
      @delete-selected-student="onClickDeleteSelectedStudent"
      @add-banlist="onClickAddSelectedBanListAll"
      @close="onCloseClassModify"
      @modify-detail="onClickModalModifyDetail"
      @modify-class-detail="onClickModalModifyClassDetail"
      @modify-selected-detail="onClickModalModifySelectedDetail"
      @move-student-tab="onMoveStudentTab"
      @search-teacher="getSearchTeacher"
      @init-teacher="setInitSearchTeacher"
      @search-student="getSearchStudent"
      @init-student="setInitSearchStudent"
      @upload="postRegistClass"
      @save="putUpdClass"
    />

    <!-- [개발참조] : 반 상세 모달에서 뜨는 2번째 팝업(학생상세 및 더보기 메뉴의 모달 팝업)은 겹치는 팝업이므로 class="double" 추가 필요 -->
    <!-- 반 상세 팝업 (팝업 L) -->
    <ClassDetailModal
      :open="openClassDetailModal"
      :classInfo="classInfo"
      :modalDetailMore="modalDetailMore"
      :studentInfoModalDesc="studentInfoModalDesc"
      :detailSearch.sync="detailSearch"
      :sortDetailChange="sortDetailChange"
      :sortCheckStd="sortCheckStd"
      :sortStatus="sortStatus"
      :sortAttend="sortAttend"
      :onFilterCheckStdSort="onFilterCheckStdSort"
      :detailCurrentPage="detailCurrentPage"
      :detailEndPage="detailEndPage"
      :next="onClickDetailNextPage"
      :prev="onClickDetailPrevPage"
      @open-student="getStudentInfo"
      @current="onClickDetailCurrentPage"
      @close-modal="onCloseClassDetailModal"
      @change-filter="onChangeDetailSort"
      @change-check="onChangeCheckStdSort"
      @change-status="onChangeStatusSort"
      @change-attend="onChangeAttendSort"
      @open-detail="onClickOpenDetailMore"
      @search="onSearchFilterDetail"
      @open-attendance="openStudentAttendanceModal"
      @open-reportFilter="openReportFilterModal"
    />

    <!-- 반관리-반이동 - 팝업 L -->
    <ClassMoveModal
      :show="openClassMove"
      :classList="modalMoveRightList"
      :selectClass="modalMoveLeftList"
      :checkList="checkList"
      :moveDetail="modalMoveDetail"
      :copy="modalMoveCopy"
      :leftCheckbox="selectedMoveModalLeftCheckbox"
      :moveClassCheckbox="selectedMoveToClassCheckbox"
      :rightCheckbox="selectedMoveModalRightCheckbox"
      :moveClassCheckboxRight="selectedMoveToClassCheckboxRight"
      :leftSearch.sync="modalMoveLeftSearch"
      :leftSort="modalMoveLeftSort"
      :rightSearch.sync="modalMoveRightSearch"
      :rightSort="modalMoveRightSort"
      :noAssignStudent="noAssignStudent"
      :unallocationSearch.sync="modalUnallocationSearch"
      :unallocationSort="modalUnallocationSort"
      :unallocationCheckbox="selectedUnallocationCheckbox"
      @close="onCloseClassMove"
      @open-detail="onClickOpenDetail"
      @move-student="putMoveClass"
      @move-unallocation-student="onUnallocationPutMoveClass"
      @move-unallocation="putMoveReverseClass"
      @copy-check="onClickCopyCheck"
      @student-list-check="onClickMoveModalLeftCheckbox"
      @move-class="onClickMoveToClass"
      @student-list-check-right="onClickMoveModalRightCheckbox"
      @move-class-right="onClickMoveToClassRight"
      @search-left="getMoveClassLeft"
      @sort-left="onClickModalMoveLeftSort"
      @search-right="getMoveClassRight"
      @sort-right="onClickModalMoveRightSort"
      @search-unallocation="onSearchUnallocation"
      @sort-unallocation="onClickModalUnallocationSort"
      @unallocation-check="onClickUnallocationCheckbox"
    />

    <!-- 학생 상세 정보 -->
    <StudentInfoModal
      :studentInfo="studentInfo"
      :open="studentInfoModalDesc.open"
      :nickNameCheck="nickNameCheck"
      :familySearchText="familySearchText"
      :isEmailCheck="isEmailCheck"
      :isAttNumberCheck="isAttNumberCheck"
      @close="onCloseStudentInfoModalDesc"
      @change-input="onChangeUpdateInput"
      @click-birthday="openDatePickerModalDesc"
      @click-lecturedate="openDatePickerLectureDateModalDesc"
      @click-student="onClickStudentBtn"
      @click-parent="onClickParentBtn"
      @click-grade="onClickTypeGrade"
      @click-adult="onClickTypeAdult"
      @click-men="onClickGenderMen"
      @click-women="onClickGenderWomen"
      @click-statusTrue="onClickStatusTrue"
      @click-statusFalse="onClickStatusFalse"
      @click-stuStatusTrue="onClickStudentStatusTrue"
      @click-stuStatusFalse="onClickStudentStatusFalse"
      @click-stuStatusNo="onClickStudentStatusNo"
      @select-grade="selectGrade"
      @click-profile="openUploadStudentImgModalDesc"
      @click-deleteFamily="onClickFamilyDeleteBtn"
      @change-familyInput="onChangeFamilySearchInput"
      @search-family="onClickSearchBtn"
      @check-id="getIdCheck"
      @check-email="getEmailCheck"
      @check-sttnumber="getAttendanceNumberCheck"
      @update-student="updateStudentInfo"
      @add-student="registerStudent"
    />
    <!-- 학생 정보 수정 - 프로필 이미지 등록1 -->
    <UploadStudentImg
      :open="uploadStudentImgModalDesc.open"
      :teacherInfo="studentInfo"
      :uploadImageFile="uploadImageFile"
      @select-file="onFileSelected"
      @click-upload="onClickInputButton"
      @close="onCloseUploadStudentImgModalDesc"
      @confirm="onClickImgConfirm"
    />
    <!-- 생일 날짜 선택 모달 -->
    <DatePickerModal
      :open="datePickerModalDesc.open"
      :date="studentInfo.mem_birthday"
      @close="onCloseDatePickerModalDesc"
      @select-date="selectDay"
      @confirm="onClickBirthdayConfirm"
    />
    <!-- 수강일 선택 모달 -->
    <DatePickerModal
      :open="datePickerLectureDateModalDesc.open"
      :date="studentInfo.std_courses"
      @close="onCloseDatePickerLectureDateModalDesc"
      @select-date="selectLectureDate"
      @confirm="onClickLectureDateConfirm"
    />

    <!-- 출결-팝업 L -->
    <StudentAttendanceModal
      :open="studentAttendanceModal.open"
      :studentInfo="studentInfo"
      :dateRange="dateRange"
      :isLectureTitleIdx="isLectureTitleIdx"
      @click-lecture="selectAttendanceLecture"
      @click-nextWeek="openCustomSnackbarNext"
      @click-prevWeek="openCustomSnackbarPrev"
      @close="onCloseStudentAttendanceModal"
      @click-calendar="openModalCalendar"
    />
    <!-- 토스트메세지 victor.js ------------------------------------->
    <!-- [개발참조] : 출결팝업의 선택날짜범위 밖으로의 이전 다음 버튼 클리 시 노출 -->
    <CustomSnackbar
      :show="customSnackbarDesc.show"
      :message="customSnackbarDesc.message"
    />
    <!-- 달력 기간 모달 호출 -->
    <RangeDataPicker
      :open="isRangeCalendar"
      :isMonthRange="isMonthRange"
      @select-date="onChangeDate"
      @close="closeModalCalendar"
    />

    <!-- 학습리포트 : 필터 -팝업 L -->
    <ReportFilterModal
      :open="reportFilterModal.open"
      :dateRange="dateRange"
      :studentInfo="studentInfo"
      :filterList="filterList"
      :tagList="tagList"
      :searchTextList="searchTextList"
      @search-filter="searchFilterList"
      @change-input="changeReportSearchInput"
      @click-calendar="openModalCalendar"
      @click-search="openReportDetailModal"
      @close="onCloseReportFilterModal"
      @all-check="onClickTagAllCheck"
      @add-tag="onClickTagList"
      @complete="onClickAddFilterTag"
    />
    <!-- 학습리포트 : 리포트열람 -팝업 L -->
    <ReportDetailModal
      :open="reportDetailModalDesc.open"
      :reportList="reportList"
      :studentInfo="studentInfo"
      :bgList="bgList"
      @click-save="exportPdf"
      @close="onCloseReportDetailModal"
    />

    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />
    <DeleteModal
      :open="deleteModalDesc.open"
      :title="deleteModalDesc.title"
      @delete="deleteClassList"
      @close="onCloseDeleteModalDesc"
    />

    <CustomSnackbar :show="openSnackbar.open" :message="message" />
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'
import NavBox from '@/components/operation/NavBox.vue'
import ClassListBox from '@/components/operation/ClassListBox.vue'
import ClassModifyModal from '@/components/common/modal/operation/ClassModifyModal.vue'
import ClassDetailModal from '@/components/common/modal/operation/ClassDetailModal.vue'
import ClassMoveModal from '@/components/common/modal/operation/ClassMoveModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import DeleteModal from '@/components/lecturecourse/DeletePlanModal.vue'
import StudentInfoModal from '@/components/common/modal/operation/StudentInfoModal.vue'
import CustomSnackbar from '@/components/common/CustomSnackbar.vue'
import { apiOperation } from '~/services'

import UploadStudentImg from '@/components/common/modal/operation/UploadTeacherImg.vue'
import DatePickerModal from '@/components/common/modal/operation/DatePickerModal.vue'
import StudentAttendanceModal from '@/components/common/modal/operation/StudentAttendanceModal.vue'
import RangeDataPicker from '~/components/common/modal/RangeDataPicker.vue'
import ReportFilterModal from '@/components/common/modal/operation/ReportFilterModal.vue'
import ReportDetailModal from '@/components/common/modal/operation/ReportDetailModal.vue'
export default {
  name: 'ClassManagement',
  components: {
    NavBox,
    ClassListBox,
    ClassModifyModal,
    ClassDetailModal,
    ClassMoveModal,
    ModalDesc,
    DeleteModal,
    CustomSnackbar,
    StudentInfoModal,

    UploadStudentImg,
    DatePickerModal,
    StudentAttendanceModal,
    RangeDataPicker,
    ReportFilterModal,
    ReportDetailModal,
  },
  data() {
    return {
      // 학생 상세 모달
      studentInfoModalDesc: {
        open: false,
      },
      datePickerModalDesc: {
        open: false,
      },
      datePickerLectureDateModalDesc: {
        open: false,
      },
      uploadStudentImgModalDesc: {
        open: false,
      },
      nickNameCheck: false,
      selectedDate: '',
      lectureDate: '',
      resetClassList: [],
      uploadImageFile: '',
      familySearchText: '',
      familySearchList: [],
      registerFamilyList: [],
      deleteFamilyId: 0,
      isIdCheck: false,
      isEmailCheck: false,
      isAttNumberCheck: false,
      isStayRegister: false,
      studentInfo: {
        mem_name: '',
        ins_code: this.$store.state.common.user.ins_code,
        fra_code: '',
        mem_img: '',
        mem_id: '',
        mem_nickname: '',
        mem_email: '',
        itm_status: '02',
        std_year: '',
        std_adult_yn: false,
        mem_sex: 'M',
        std_grade: 'S',
        std_use_yn: true,
        std_att_num: '',
        mem_phone: '',
        std_school: '',
        std_courses: '',
        mem_birthday: '',
        std_parent_phone: '',
        itm_acc_yn: true,
        std_idx: 0,
        family_id: null,
        lecture_info_dto: [],
        all_lecture_info: [],
      },
      studentTab: 0,

      // 출결
      studentAttendanceModal: {
        open: false,
      },
      customSnackbarDesc: {
        show: false,
        message: '',
      },
      isRangeCalendar: false,
      dateRange: {
        start: '',
        end: '',
      },
      isLectureTitleIdx: 0,
      isMonthRange: false,

      // 학습리포트
      reportFilterModal: {
        open: false,
      },
      reportDetailModalDesc: {
        open: false,
      },
      filterList: {
        class: ['심화A반', '심화B반', '심화C반'],
        subject: ['수학', '국어', '영어', '사회'],
        course: ['영어리딩심화', '영어리딩기초', '영어리딩기초1'],
        exam: ['쪽지시험', '퀴즈', '정기시험'],
      },
      tagList: {
        classList: [],
        subjectList: [],
        courseList: [],
        examList: [],
      },
      searchTextList: {
        classSearchText: '',
        subjectSearchText: '',
        courseSearchText: '',
        examSearchText: '',
      },
      reportList: [
        {
          learningRange: '22.05.11 - 22.05.21',
          lectureTitle: '영어리딩심화',
          class: '심화A',
          attendancePercent: '80%',
          examType: '쪽지시험',
          date: '22.05.11',
          score: 80,
          classAverage: '70',
          question: '12/15',
        },
        {
          learningRange: '22.05.11 - 22.05.21',
          lectureTitle: '영어리딩기초',
          class: '심화A',
          attendancePercent: '70%',
          examType: '쪽지시험',
          date: '22.05.11',
          score: 20,
          classAverage: '70',
          question: '12/15',
        },
        {
          learningRange: '22.05.11 - 22.05.21',
          lectureTitle: '영어회화기초',
          class: '심화A',
          attendancePercent: '20%',
          examType: '쪽지시험',
          date: '22.05.11',
          score: 50,
          classAverage: '60',
          question: '12/15',
        },
        {
          learningRange: '22.05.11 - 22.05.21',
          lectureTitle: '영어리딩심화',
          class: '심화A',
          attendancePercent: '80%',
          examType: '쪽지시험',
          date: '22.05.11',
          score: 80,
          classAverage: '70',
          question: '12/15',
        },
        {
          learningRange: '22.05.11 - 22.05.21',
          lectureTitle: '영어리딩기초',
          class: '심화A',
          attendancePercent: '70%',
          examType: '쪽지시험',
          date: '22.05.11',
          score: 20,
          classAverage: '70',
          question: '12/15',
        },
        {
          learningRange: '22.05.11 - 22.05.21',
          lectureTitle: '영어회화기초',
          class: '심화A',
          attendancePercent: '20%',
          examType: '쪽지시험',
          date: '22.05.11',
          score: 50,
          classAverage: '60',
          question: '12/15',
        },
        {
          learningRange: '22.05.11 - 22.05.21',
          lectureTitle: '영어리딩심화',
          class: '심화A',
          attendancePercent: '80%',
          examType: '쪽지시험',
          date: '22.05.11',
          score: 80,
          classAverage: '70',
          question: '12/15',
        },
        {
          learningRange: '22.05.11 - 22.05.21',
          lectureTitle: '영어리딩기초',
          class: '심화A',
          attendancePercent: '70%',
          examType: '쪽지시험',
          date: '22.05.11',
          score: 20,
          classAverage: '70',
          question: '12/15',
        },
        {
          learningRange: '22.05.11 - 22.05.21',
          lectureTitle: '영어회화기초',
          class: '심화A',
          attendancePercent: '20%',
          examType: '쪽지시험',
          date: '22.05.11',
          score: 50,
          classAverage: '60',
          question: '12/15',
        },
        {
          learningRange: '22.05.11 - 22.05.21',
          lectureTitle: '영어리딩심화',
          class: '심화A',
          attendancePercent: '80%',
          examType: '쪽지시험',
          date: '22.05.11',
          score: 80,
          classAverage: '70',
          question: '12/15',
        },
        {
          learningRange: '22.05.11 - 22.05.21',
          lectureTitle: '영어리딩기초',
          class: '심화A',
          attendancePercent: '70%',
          examType: '쪽지시험',
          date: '22.05.11',
          score: 20,
          classAverage: '70',
          question: '12/15',
        },
        {
          learningRange: '22.05.11 - 22.05.21',
          lectureTitle: '영어회화기초',
          class: '심화A',
          attendancePercent: '20%',
          examType: '쪽지시험',
          date: '22.05.11',
          score: 50,
          classAverage: '60',
          question: '12/15',
        },
      ],
      bgList: ['color01', 'color02', 'color03'],

      // 반 리스트
      classList: [],
      classInfo: [],

      teacherList: [],
      studentList: {},
      selectedTeacher: [],
      selectedStudentAll: [],
      selectedStudentList: [],

      // 왼쪽
      // 학생 선택
      selectedMoveModalLeftCheckbox: [],
      // 반 선택
      selectedMoveToClassCheckbox: [],
      // 오른쪽
      // 학생 선택
      selectedMoveModalRightCheckbox: [],
      // 반 선택
      selectedMoveToClassCheckboxRight: [],
      // 배정X 학생 선택
      selectedUnallocationCheckbox: [],

      // 정렬
      sortTeacherSelect: '선생님 전체',
      sortNumberSelect: '10개씩 보기',
      sortDetailChange: '최신 등록순',
      detailFilter: 1,
      sortCheckStd: null,
      sortStatus: true,
      sortAttend: true,

      // 상세 모달 더보기
      modalDetailMore: null,

      // 반 만들기/수정 반 학셍 학년, 반 상세
      modalModifyDetail: null,
      modalModifyClassDetail: null,
      modalModifySelectDetail: null,

      // 반 이동 펴기 버튼
      modalMoveDetail: null,

      // 반 이동 복사 여부
      modalMoveCopy: false,

      // 반 이동 왼족 리스트
      modalMoveLeftList: [],
      modalMoveLeftSearch: '',
      modalMoveLeftSort: true,
      // 반 이동 오른쪽 리스트
      modalMoveRightList: [],
      modalMoveRightSearch: '',
      modalMoveRightSort: true,
      // 배정X 학생 리스트
      noAssignStudent: {},
      modalUnallocationSearch: '',
      modalUnallocationSort: false,

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
        allocation: null,
      },
      openClassDetailModal: {
        open: false,
        class: '',
      },

      openSnackbar: {
        open: false,
      },
      message: '',

      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      deleteModalDesc: {
        open: false,
        title: '',
      },

      classListB: [],

      ins_code: this.$store.state.common.user.ins_code,
      fra_code: this.$store.state.common.user.fra_code,

      orderList: [],

      // 반 등록 반이름
      className: '',
      // 반 등록 반 선생님 검색
      classTeacherSearch: '',
      // 반 등록 반 학생 검색
      classStudentSearch: '',

      // 검색 반 이름 선택
      cond: true,
      // 상세
      csmIdx: null,
      // 선생님 선택
      tchIdx: 0,

      // 필터 상태
      filterStatus: false,

      // 검색
      searchText: '',
      detailSearch: '',

      // 페이지네이션
      // 페이지 수
      endPage: 1,
      detailEndPage: 1,
      // 다음/이전
      next: false,
      prev: false,
      // 현재 페이지
      currentPage: 1,
      detailCurrentPage: 1,
      // 보여지는 개수
      showCount: 1,
    }
  },
  watch: {
    checkList: {
      handler() {
        console.log('checkList', this.checkList)
      },
      immediate: false,
    },
    showCount: {
      handler() {
        this.getClassList()
        this.currentPage = 1
      },
      immediate: false,
    },
    tchIdx: {
      handler() {
        this.getClassList()
      },
      immediate: false,
    },
    currentPage: {
      handler() {
        this.getClassList()
      },
      immediate: false,
    },

    detailFilter: {
      handler() {
        this.onSearchFilterDetail()
      },
      immediate: false,
    },
    sortStatus: {
      handler() {
        this.onSearchFilterDetail()
      },
      immediate: false,
    },
    detailCurrentPage: {
      handler() {
        this.onSearchFilterDetail()
      },
      immediate: false,
    },
    sortCheckStd: {
      handler() {
        this.onSearchFilterDetail()
      },
      immediate: false,
    },
    sortAttend: {
      handler() {
        this.onSearchFilterDetail()
      },
      immediate: false,
    },

    modalMoveLeftSort: {
      handler() {
        this.getMoveClassLeft()
      },
      immediate: false,
    },
    modalMoveRightSort: {
      handler() {
        this.getMoveClassRight()
      },
      immediate: false,
    },

    modalUnallocationSort: {
      handler() {
        this.onSearchUnallocation()
      },
      immediate: false,
    },

    // 현재 날짜와 한달 전 기간
    isMonthRange() {
      const setDate = (date) =>
        `${date?.getFullYear()}.${date?.getMonth() + 1}.${date?.getDate()}`
      if (this.isMonthRange) {
        this.dateRange = {
          start: setDate(
            new Date(new Date().setMonth(new Date().getMonth() - 1))
          ),
          end: setDate(new Date()),
        }
      } else {
        const setDate = (date) =>
          `${date?.getFullYear()}.${date?.getMonth() + 1}.${date?.getDate()}`
        this.dateRange = {
          start: setDate(
            new Date(
              new Date().setDate(
                new Date().getDate() -
                  new Date().getDay() +
                  (new Date().getDay() === 0 ? -6 : 1)
              )
            )
          ),
          end: setDate(
            new Date(
              new Date().setDate(
                new Date().getDate() -
                  new Date().getDay() +
                  (new Date().getDay() === 0 ? -6 : 7)
              )
            )
          ),
        }
      }
    },
  },
  created() {
    // 현재 날짜의 월요일, 일요일 구하기
    const setDate = (date) =>
      `${date?.getFullYear()}.${date?.getMonth() + 1}.${date?.getDate()}`
    this.dateRange = {
      start: setDate(
        new Date(
          new Date().setDate(
            new Date().getDate() -
              new Date().getDay() +
              (new Date().getDay() === 0 ? -6 : 1)
          )
        )
      ),
      end: setDate(
        new Date(
          new Date().setDate(
            new Date().getDate() -
              new Date().getDay() +
              (new Date().getDay() === 0 ? -6 : 7)
          )
        )
      ),
    }
  },
  mounted() {
    this.getClassList()
    this.getSearchTeacher()
    this.getSearchStudent()
  },
  methods: {
    // 드래그 앤 드롭 기능
    onStart() {
      const order_list = []
      for (let i = this.classList.length - 1; i >= 0; i--) {
        const order = {
          csm_idx: this.classList[i].csm_idx,
          csm_display_no: this.classList[i].csm_display_no,
        }
        order_list.push(order)
      }
      this.orderList = order_list
    },
    onDrop(evt) {
      if (evt.moved.oldIndex !== evt.moved.newIndex && !this.filterStatus) {
        this.putChangeOrder(
          evt.moved.element.csm_idx,
          this.classList.length - evt.moved.oldIndex,
          this.classList.length - evt.moved.newIndex,
          this.orderList
        )

        this.orderList = []
      }
    },

    // 반 리스트 api
    async getClassList() {
      const payload = {
        cond: this.cond === true ? '' : `&cond=${this.cond}`,
        current_page: this.currentPage,
        search: this.searchText === '' ? '' : `&search=${this.searchText}`,
        show_count: this.showCount === 1 ? '' : `&show_count=${this.showCount}`,
        tch_idx: this.tchIdx === 0 ? '' : `&tch_idx=${this.tchIdx}`,
      }
      await apiOperation
        .getClassList(this.ins_code, payload)
        .then(({ data: { data } }) => {
          this.classList = data.banList
          this.endPage = data.pageMaker.end_page
          this.next = data.pageMaker.next
          this.prev = data.pageMaker.prev
          if (
            this.searchText === '' &&
            this.showCount === 1 &&
            this.tchIdx === 0
          ) {
            this.filterStatus = false
          } else {
            this.filterStatus = true
          }

          if (this.classListB.length === 0) {
            this.classListB = this.classList
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 반 목록 이동
    async putChangeOrder(csmIdx, indexNum, update, orderList) {
      const payload = {
        csm_idx: csmIdx,
        index: indexNum,
        ins_code: this.ins_code,
        order_list: orderList,
        update_index: update,
      }
      console.log(orderList)
      if (
        this.cond === true &&
        this.searchText === '' &&
        this.showCount === 1 &&
        this.tchIdx === 0
      ) {
        await apiOperation
          .putChangeOrder(payload)
          .then(({ data: { data } }) => {
            console.log(data)
            this.getClassList()
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    // 반 상세 api
    async getClassDetail(csm_idx, classroom) {
      this.onInitDetailFilterSearch()

      this.csmIdx = csm_idx
      const payload = {
        csm_idx: `&csm_idx=${this.csmIdx}`,
        ins_code: this.ins_code,
        search: this.detailSearch === '' ? '' : `&search=${this.detailSearch}`,
        filter: this.detailFilter === 1 ? '' : `&filter=${this.detailFilter}`,
        check_std:
          this.sortCheckStd === null ? '' : `&check_std=${this.sortCheckStd}`,
        status: this.sortStatus === true ? '' : `&status=${this.sortStatus}`,
        current_page:
          this.detailCurrentPage === 1
            ? ''
            : `&current_page=${this.detailCurrentPage}`,
        std_status: this.sortAttend ? '' : `&std_status=${this.sortAttend}`,
      }

      await apiOperation
        .getClassDetail(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.modalDetailMore = null
          this.classInfo = data.dto_list

          this.detailEndPage = data.pageMaker.end_page
          this.openClassDetailModal.class = classroom
          this.onOpenClassDetailModal()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 상세모달 학생검색/필터 api
    async onSearchFilterDetail() {
      const payload = {
        csm_idx: `&csm_idx=${this.csmIdx}`,
        ins_code: this.ins_code,
        search: this.detailSearch === '' ? '' : `&search=${this.detailSearch}`,
        filter: this.detailFilter === 1 ? '' : `&filter=${this.detailFilter}`,
        check_std:
          this.sortCheckStd === null ? '' : `&check_std=${this.sortCheckStd}`,
        status: this.sortStatus === true ? '' : `&status=${this.sortStatus}`,
        current_page:
          this.detailCurrentPage === 1
            ? ''
            : `&current_page=${this.detailCurrentPage}`,
        std_status: this.sortAttend ? '' : `&std_status=${this.sortAttend}`,
      }

      await apiOperation
        .getClassDetail(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.modalDetailMore = null
          this.classInfo = data.dto_list
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 상세 필터/검색 값 초기화
    onInitDetailFilterSearch() {
      this.detailFilter = 1
      this.detailSearch = ''
      this.sortDetailChange = '최신 등록순'
      this.sortCheckStd = true
      this.sortStatus = true
      this.detailCurrentPage = 1
      this.openClassDetailModal.class = ''
    },

    // 반 등록
    // 반 선생님 검색 api
    async getSearchTeacher() {
      const payload = {
        ins_code: this.ins_code,
        search:
          this.classTeacherSearch === ''
            ? ''
            : `&search=${this.classTeacherSearch}`,
      }

      await apiOperation
        .getSearchTeacher(payload)
        .then(({ data: { data } }) => {
          // console.log(data)
          this.teacherList = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setInitSearchTeacher() {
      this.classTeacherSearch = ''
    },
    // 반 학생 검색 api
    async getSearchStudent() {
      const payload = {
        ins_code: this.ins_code,
        search:
          this.classStudentSearch === ''
            ? ''
            : `&search=${this.classStudentSearch}`,
      }

      await apiOperation
        .getSearchStudent(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.studentList = data
          console.log(this.studentList)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setInitSearchStudent() {
      this.classStudentSearch = ''
    },
    // 반 등록하기 api
    async postRegistClass() {
      const selStudentList = []

      for (let i = 0; i < this.selectedStudentList.length; i++) {
        const student = {
          itm_idx: this.selectedStudentList[i].itm_idx,
          mem_idx: this.selectedStudentList[i].mem_idx,
          mem_name: this.selectedStudentList[i].mem_name,
          std_idx: this.selectedStudentList[i].std_idx,
        }
        selStudentList.push(student)
      }

      const payload = {
        csm_name: this.className,
        fra_code: this.fra_code,
        ins_code: this.ins_code,
        studentList: selStudentList,
        teacherList: this.selectedTeacher,
      }
      console.log(payload, selStudentList)

      if (
        payload.csm_name !== '' &&
        payload.studentList.length !== 0 &&
        payload.teacherList.length !== 0
      ) {
        await apiOperation
          .postRegistClass(payload)
          .then((res) => {
            console.log(res)
            this.openModalDesc('등록 성공', '반 등록을 성공했습니다.')
            this.onCloseClassModify()
            this.getClassList()
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        this.openModalDesc('등록 실패', '반을 작성해주세요.')
      }
    },
    // 반 수정하기 api
    async putUpdClass(csmIdx) {
      const selStudentList = []

      for (let i = 0; i < this.selectedStudentList.length; i++) {
        const student = {
          itm_idx: this.selectedStudentList[i].itm_idx,
          mem_idx: this.selectedStudentList[i].mem_idx,
          mem_name: this.selectedStudentList[i].mem_name,
          std_idx: this.selectedStudentList[i].std_idx,
        }
        selStudentList.push(student)
      }

      const payload = {
        choice_GradeList: [
          {
            std_num: 0,
            studentList: selStudentList,
          },
        ],
        csm_idx: csmIdx,
        csm_name: this.className,
        fra_code: this.fra_code,
        ins_code: this.ins_code,
        teacherList: this.selectedTeacher,
      }
      console.log(payload)

      if (
        payload.choice_GradeList[0].studentList.length !== 0 &&
        payload.teacherList.length !== 0
      ) {
        await apiOperation
          .putUpdClass(payload)
          .then((res) => {
            console.log(res)
            this.openModalDesc('수정 성공', '반 수정을 성공했습니다.')
            this.onCloseClassModify()
            this.getClassList()
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    // 반 삭제 api
    async deleteClassList() {
      const payload = {
        data: {
          class_list: this.checkList,
          ins_code: this.ins_code,
        },
      }
      console.log('checkList', this.checkList)
      console.log(payload)

      await apiOperation
        .deleteClassList(payload)
        .then(() => {
          this.checkList = []
          this.onCloseDeleteModalDesc()
          this.getClassList()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 반 복사 api
    async postClassCopy() {
      const postList = []
      console.log(
        'filter',
        this.classList.filter((item) =>
          item.csm_name.includes(
            this.classList.find((e) => e.csm_idx === this.checkList[0]).csm_name
          )
        )
      )

      for (let i = 0; i < this.checkList.length; i++) {
        const copyList = {
          copy_csm_idx: this.checkList[i],
          csm_name:
            this.classList.find((e) => e.csm_idx === this.checkList[i])
              .csm_name +
            `(${
              this.classList.filter((item) =>
                item.csm_name.includes(
                  this.classList.find((e) => e.csm_idx === this.checkList[i])
                    .csm_name
                )
              ).length
            })`,
        }
        postList.push(copyList)
      }
      console.log(postList)

      const payload = {
        copyBanList: postList,
        fra_code: this.fra_code,
        ins_code: this.ins_code,
        now_mem_idx: this.$store.state.common.user.mem_idx,
      }

      await apiOperation
        .postClassCopy(payload)
        .then((res) => {
          console.log(res)
          this.checkList = []
          this.allCheck = false
          this.getClassList()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 리스트 페이지네이션
    onClickNextPage() {
      if (this.currentPage >= this.endPage) {
        return false
      } else {
        this.currentPage = this.currentPage + 1
      }
    },
    onClickPrevPage() {
      if (this.currentPage <= 1) {
        return false
      } else {
        this.currentPage = this.currentPage - 1
      }
    },
    onClickCurrentPage(page) {
      this.currentPage = page
    },
    // 상세 페이지네이션
    onClickDetailNextPage() {
      if (this.detailCurrentPage >= this.detailEndPage) {
        return false
      } else {
        this.detailCurrentPage = this.detailCurrentPage + 1
      }
    },
    onClickDetailPrevPage() {
      if (this.detailCurrentPage <= 1) {
        return false
      } else {
        this.detailCurrentPage = this.detailCurrentPage - 1
      }
    },
    onClickDetailCurrentPage(page) {
      this.detailCurrentPage = page
    },

    // 검색 라디오 버튼
    searchRadio(radio) {
      this.searchText = ''
      this.cond = radio
    },

    onOpenClassDetailModal() {
      this.openClassDetailModal.open = true
    },
    onCloseClassDetailModal() {
      this.openClassDetailModal.open = false
    },

    // 스낵바
    onOpenSnackbar(text) {
      this.openSnackbar.open = true
      this.message = text
    },
    onCloseSnackbar() {
      this.openSnackbar.open = false
      this.message = ''
    },
    // 모달
    openModalDesc(tit, msg) {
      this.modalDesc = {
        open: true,
        title: tit,
        desc: msg,
      }
    },
    onCloseModalDesc() {
      this.modalDesc.open = false
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
    onOpenClassRegist() {
      this.openClassModify.open = true
      this.openClassModify.data = null
    },
    async onOpenClassModify(item) {
      await apiOperation
        .getUpdClassList(item.csm_idx, this.ins_code)
        .then(({ data: { data } }) => {
          console.log('res', data, item)
          for (let i = 0; i < data.student_list.length; i++) {
            this.onClickAddSelectedStudent(
              data.student_list[i],
              data.student_list[i].std_year
            )
          }

          this.selectedTeacher = data.teacher_list
          this.selectedStudentList = data.student_list
          this.className = item.csm_name
        })
        .catch((err) => {
          console.log(err)
        })
      console.log(item)
      this.openClassModify.open = true
      this.openClassModify.data = item
    },
    onCloseClassModify() {
      this.openClassModify.open = false
      this.openClassModify.data = null
      this.className = ''
      this.selectedTeacher = []
      this.selectedStudentAll = []
      this.selectedStudentList = []
    },

    // 반 이동 모달 열기
    onOpenClassMove(allocation) {
      this.openClassMove.open = true
      this.openClassMove.allocation = allocation
    },
    onCloseClassMove() {
      this.openClassMove.open = false
      this.modalMoveLeftList = []
      this.modalMoveRightList = []
      this.modalMoveLeftSearch = ''
      this.modalMoveLeftSort = true
      this.modalMoveRightSearch = ''
      this.modalMoveRightSort = true
      this.selectedMoveToClassCheckbox = []
      this.selectedMoveToClassCheckboxRight = []
      this.selectedMoveModalLeftCheckbox = []
      this.selectedMoveModalRightCheckbox = []
      this.modalMoveCopy = false
    },

    onClickOpenDetailMore(id) {
      console.log(id)
      if (this.modalDetailMore === id) {
        this.modalDetailMore = null
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
          this.checkList.push(this.classList[i].csm_idx)
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

    // 배정X 버튼 클릭
    async onClickUnallocation() {
      const payload = {
        ins_code: this.ins_code,
        name_orderby: ``,
        search: ``,
        sort_check: '',
      }

      await apiOperation
        .getNoAssignStudent(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.noAssignStudent = data
        })
        .catch((err) => {
          console.log(err)
        })

      await apiOperation
        .getMoveClass(payload)
        .then(({ data: { data } }) => {
          this.modalMoveRightList = data
        })
        .catch((err) => {
          console.log(err)
        })

      this.onOpenClassMove(0)
    },
    // 배정X 학생 검색
    async onSearchUnallocation() {
      const payload = {
        ins_code: this.ins_code,
        search:
          this.modalUnallocationSearch === ''
            ? ''
            : `&search=${this.modalUnallocationSearch}`,
        sort_check: !this.modalUnallocationSort
          ? ''
          : `&sort_check=${this.modalUnallocationSort}`,
      }

      await apiOperation
        .getNoAssignStudent(payload)
        .then(({ data: { data } }) => {
          this.noAssignStudent = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 배정X 학생 정렬
    onClickModalUnallocationSort(sort) {
      this.modalUnallocationSort = sort
    },
    // 배정X로 이동
    async putMoveReverseClass() {
      const studentList = []

      for (let i = 0; i < this.selectedMoveModalRightCheckbox.length; i++) {
        const student = {
          csm_idx: this.selectedMoveModalRightCheckbox[i].csm_idx,
          fra_code: this.fra_code,
          ins_code: this.ins_code,
          itm_idx: this.selectedMoveModalRightCheckbox[i].itm_idx,
          mem_idx: this.selectedMoveModalRightCheckbox[i].mem_idx,
          std_idx: this.selectedMoveModalRightCheckbox[i].std_idx,
        }
        studentList.push(student)
      }

      const payload = {
        moveBanDataList: studentList,
      }

      console.log('sadfasdfag', payload, this.selectedMoveModalRightCheckbox)

      if (payload.moveBanDataList.length !== 0) {
        await apiOperation
          .putMoveReverseClass(payload)
          .then(({ data: { data } }) => {
            console.log(data)
            this.openModalDesc('이동 성공', '반 이동을 성공했습니다.')
            this.selectedMoveModalRightCheckbox = []
            this.onSearchUnallocation()
            this.getMoveClassRight()
            this.getClassList()
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        this.openModalDesc('이동 실패', '이동할 학생을 선택해주세요.')
      }
    },
    // 배정X 체크박스
    onClickUnallocationCheckbox(items) {
      if (
        this.selectedUnallocationCheckbox.find(
          (e) => e.mem_idx === items.mem_idx
        )?.mem_idx === items.mem_idx
      ) {
        this.selectedUnallocationCheckbox =
          this.selectedUnallocationCheckbox.filter(
            (item) => item.mem_idx === items.mem_idx
          )
      } else {
        const payload = {
          ...items,
        }
        // console.log('items', items, payload)
        this.selectedUnallocationCheckbox.push(payload)
      }
      console.log('asfsfsf', this.selectedUnallocationCheckbox)
    },
    // 배정X에서 반으로 이동
    async onUnallocationPutMoveClass() {
      const banList = []
      const studentList = []
      for (let i = 0; i < this.selectedMoveToClassCheckboxRight.length; i++) {
        const ban = {
          csm_idx: this.selectedMoveToClassCheckboxRight[i].csm_idx,
          csm_name: this.selectedMoveToClassCheckboxRight[i].csm_name,
        }
        banList.push(ban)
      }
      for (let i = 0; i < this.selectedUnallocationCheckbox.length; i++) {
        const student = {
          itm_idx: this.selectedUnallocationCheckbox[i].itm_idx,
          mem_idx: this.selectedUnallocationCheckbox[i].mem_idx,
          std_idx: this.selectedUnallocationCheckbox[i].std_idx,
        }
        studentList.push(student)
      }
      console.log(this.selectedMoveToClassCheckboxRight)

      const payload = {
        ban_list: banList,
        copy_check: false,
        fra_code: this.fra_code,
        ins_code: this.ins_code,
        student_list: studentList,
      }
      if (payload.ban_list.length !== 0 && payload.student_list.length !== 0) {
        await apiOperation
          .putMoveClass(payload)
          .then(({ data: { data } }) => {
            console.log(data)
            this.openModalDesc('이동 성공', '반 이동을 성공했습니다.')
            this.onSearchUnallocation()
            this.getMoveClassRight()
            this.getClassList()
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        this.openModalDesc('이동 실패', '반 이동을 실패했습니다.')
      }
    },

    // 체크 박스 선택 후
    // 삭제버튼 클릭
    onClickClassDelete() {
      if (this.checkList.length === 0) {
        this.onOpenSnackbar('반을 선택해주세요.')
        setTimeout(() => {
          this.onCloseSnackbar()
        }, 2000)
      } else {
        this.openDeleteModalDesc('반')
      }
    },
    // 이동 버튼 클릭
    async onClickClassMove() {
      if (this.checkList.length === 0) {
        this.onOpenSnackbar('반을 선택해주세요.')
        setTimeout(() => {
          this.onCloseSnackbar()
        }, 2000)
      } else {
        const payload = {
          ins_code: this.ins_code,
          name_orderby: ``,
          search: ``,
        }
        const item = []

        await apiOperation
          .getMoveClass(payload)
          .then(({ data: { data } }) => {
            for (let i = 0; i < this.checkList.length; i++) {
              item.push(data.find((e) => e.csm_idx === this.checkList[i]))
            }

            this.modalMoveLeftList = item
            this.modalMoveRightList = data
          })
          .catch((err) => {
            console.log(err)
          })

        this.onOpenClassMove(1)
      }
    },
    // 복사 버튼
    onClickClassCopy() {
      if (this.checkList.length === 0) {
        this.onOpenSnackbar('반을 선택해주세요.')
        setTimeout(() => {
          this.onCloseSnackbar()
        }, 2000)
      } else {
        this.postClassCopy()
      }
    },

    // 반 수정/만들기 모달
    // 반 선생님 추가/삭제
    onClickAddSelectedTeacher(data) {
      if (!this.selectedTeacher.includes(data)) {
        this.selectedTeacher.push(data)
      }
    },
    onClickDeleteSelectedTeacher(data) {
      this.selectedTeacher = this.selectedTeacher.filter(
        (item) => item !== data
      )
    },
    // 반 학생 학년 추가/삭제 (학년 전체)
    onClickAddSelectedStudentAll(data) {
      console.log(data)
      for (let i = 0; i < data.studentList.length; i++) {
        this.onClickAddSelectedStudent(data.studentList[i], data.std_year)
      }
    },
    onClickDeleteSelectedStudentAll(data) {
      for (let i = 0; i <= data.student.length; i++) {
        console.log(`student[${i}]`, data.student[0])
        this.onClickDeleteSelectedStudent(data.student[0], data.grade)
      }
    },
    onClickAddSelectedBanListAll(data) {
      console.log(data)
      for (let i = 0; i < data.studentList.length; i++) {
        this.onClickAddSelectedStudent(
          data.studentList[i],
          data.studentList[i].std_year
        )
      }
    },
    // 반 학생 반 학년 추가/삭제 (개인)
    onClickAddSelectedStudent(data, stdYear) {
      // console.log('data,stdYear', data, stdYear)

      if (
        this.selectedStudentAll.find((e) => e.grade === stdYear) === undefined
      ) {
        const student = {
          grade: stdYear,
          student: [data],
        }
        this.selectedStudentAll.push(student)
        this.selectedStudentList.push(data)
      } else {
        const students = this.selectedStudentAll.find(
          (e) => e.grade === stdYear
        )

        if (
          students.student?.filter((item) => item?.mem_idx === data?.mem_idx)[0]
            ?.mem_idx !== data.mem_idx
        ) {
          students.student.push(data)
          this.selectedStudentList.push(data)
        }
      }
    },
    onClickDeleteSelectedStudent(data, stdYear) {
      for (let i = 0; i < this.selectedStudentAll.length; i++) {
        if (this.selectedStudentAll[i].grade === stdYear) {
          this.selectedStudentAll[i].student = this.selectedStudentAll[
            i
          ].student.filter((item) => item.mem_idx !== data.mem_idx)

          this.selectedStudentList = this.selectedStudentList.filter(
            (item) => item.mem_idx !== data.mem_idx
          )

          if (this.selectedStudentAll[i].student.length === 0) {
            this.selectedStudentAll = this.selectedStudentAll.filter(
              (item) => item.student.length !== 0
            )
          }
        }
      }
    },

    // 반 만들기/수정 반 학생 학년 상세
    onClickModalModifyDetail(idx) {
      if (this.modalModifyDetail === idx) {
        this.modalModifyDetail = null
      } else {
        this.modalModifyDetail = idx
      }
    },
    onClickModalModifyClassDetail(idx) {
      if (this.modalModifyClassDetail === idx) {
        this.modalModifyClassDetail = null
      } else {
        this.modalModifyClassDetail = idx
      }
    },
    // 반 만들기/수정 선택된 학생 상세
    onClickModalModifySelectedDetail(idx) {
      if (this.modalModifySelectDetail === idx) {
        this.modalModifySelectDetail = null
      } else {
        this.modalModifySelectDetail = idx
      }
    },

    // 반 학생 탭 이동
    onMoveStudentTab(num) {
      this.studentTab = num
    },

    // 정렬
    onChangeTeacherSort(e, teacher) {
      this.sortTeacherSelect = e.target.innerText
      if (teacher !== undefined) {
        this.tchIdx = teacher
      } else {
        this.tchIdx = 0
      }
    },
    onChangeNumberSort(e) {
      this.sortNumberSelect = e.target.innerText
      if (e.target.innerText === '10개씩 보기') {
        this.showCount = 1
      } else if (e.target.innerText === '100개씩 보기') {
        this.showCount = 2
      } else {
        this.showCount = 3
      }
    },
    onChangeDetailSort(num) {
      this.detailFilter = num
      if (num === 1) {
        this.sortDetailChange = '최신 등록순'
      } else if (num === 2) {
        this.sortDetailChange = '이름 오름차순'
      } else if (num === 3) {
        this.sortDetailChange = '이름 내림차순'
      } else if (num === 4) {
        this.sortDetailChange = '학년 오름차순'
      } else {
        this.sortDetailChange = '학년 내림차순'
      }
    },
    onChangeCheckStdSort(std) {
      this.sortCheckStd = std
    },
    onFilterCheckStdSort() {
      let result = ''
      if (this.sortCheckStd === true) {
        result = '학생'
      } else if (this.sortCheckStd === false) {
        result = '학부모'
      } else if (this.sortCheckStd === null) {
        result = '학부모&학생'
      }
      return result
    },
    onChangeStatusSort(active) {
      this.sortStatus = active
    },
    onChangeAttendSort(attend) {
      this.sortAttend = attend
    },

    // 반 이동 모달
    // 반 펴기
    onClickOpenDetail(idx) {
      if (this.modalMoveDetail === idx) {
        // this.modalMoveDetail.filter((item) => item !== idx)
        this.modalMoveDetail = null
      } else {
        this.modalMoveDetail = idx
      }
    },

    // 반 이동 학생 이름 검색 왼쪽
    async getMoveClassLeft() {
      const payload = {
        ins_code: this.ins_code,
        name_orderby: this.modalMoveLeftSort
          ? ''
          : `&name_orderby=${this.modalMoveLeftSort}`,
        search:
          this.modalMoveLeftSearch === ''
            ? ``
            : `&search=${this.modalMoveLeftSearch}`,
      }
      const item = []

      await apiOperation
        .getMoveClass(payload)
        .then(({ data: { data } }) => {
          for (let i = 0; i < this.checkList.length; i++) {
            item.push(data.find((e) => e.csm_idx === this.checkList[i]))
          }

          this.modalMoveLeftList = item
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onClickModalMoveLeftSort(sort) {
      this.modalMoveLeftSort = sort
    },
    // 반 이동 학생 이름 검색 오른쪽
    async getMoveClassRight() {
      const payload = {
        ins_code: this.ins_code,
        name_orderby: this.modalMoveRightSort
          ? ''
          : `&name_orderby=${this.modalMoveRightSort}`,
        search:
          this.modalMoveRightSearch === ''
            ? ``
            : `&search=${this.modalMoveRightSearch}`,
      }

      await apiOperation
        .getMoveClass(payload)
        .then(({ data: { data } }) => {
          this.modalMoveRightList = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onClickModalMoveRightSort(sort) {
      this.modalMoveRightSort = sort
    },
    // 반 이동 기능
    // 반 이동 api
    async putMoveClass(type) {
      const studentList = []
      const banList = []
      const banStudent = []
      // type => true: 오른쪽 화실표, false: 왼쪽 화살표
      if (type) {
        for (let i = 0; i < this.selectedMoveModalLeftCheckbox.length; i++) {
          const student = {
            csm_idx: this.selectedMoveModalLeftCheckbox[i]?.csm_idx,
            itm_idx: this.selectedMoveModalLeftCheckbox[i]?.itm_idx,
            mem_idx: this.selectedMoveModalLeftCheckbox[i]?.mem_idx,
            std_idx: this.selectedMoveModalLeftCheckbox[i]?.std_idx,
          }
          studentList.push(student)
        }
        for (let i = 0; i < this.selectedMoveToClassCheckboxRight.length; i++) {
          const ban = {
            csm_idx: this.selectedMoveToClassCheckboxRight[i].csm_idx,
            csm_name: this.selectedMoveToClassCheckboxRight[i].csm_name,
          }
          banList.push(ban)
          for (
            let j = 0;
            j < this.selectedMoveToClassCheckboxRight[i].student_list.length;
            j++
          ) {
            const studentInfo = {
              mem_idx:
                this.selectedMoveToClassCheckboxRight[i].student_list[j]
                  .mem_idx,
            }
            banStudent.push(studentInfo)
          }
        }
      } else {
        for (let i = 0; i < this.selectedMoveModalRightCheckbox.length; i++) {
          const student = {
            csm_idx: this.selectedMoveModalRightCheckbox[i]?.csm_idx,
            itm_idx: this.selectedMoveModalRightCheckbox[i]?.itm_idx,
            mem_idx: this.selectedMoveModalRightCheckbox[i]?.mem_idx,
            std_idx: this.selectedMoveModalRightCheckbox[i]?.std_idx,
          }
          studentList.push(student)
        }
        for (let i = 0; i < this.selectedMoveToClassCheckbox.length; i++) {
          const ban = {
            csm_idx: this.selectedMoveToClassCheckbox[i].csm_idx,
            csm_name: this.selectedMoveToClassCheckbox[i].csm_name,
          }
          banList.push(ban)

          for (
            let j = 0;
            j < this.selectedMoveToClassCheckbox[i].student_list.length;
            j++
          ) {
            const studentInfo = {
              mem_idx:
                this.selectedMoveToClassCheckbox[i].student_list[j].mem_idx,
            }
            banStudent.push(studentInfo)
          }
        }
      }
      console.log(studentList, banList)

      const payload = {
        ban_list: banList,
        copy_check: this.modalMoveCopy,
        fra_code: this.fra_code,
        ins_code: this.ins_code,
        student_list: studentList,
      }
      console.log('payload', payload)
      console.log('ClassCheckboxRight', this.selectedMoveToClassCheckboxRight)

      if (payload.ban_list.length !== 0 && payload.student_list.length !== 0) {
        if (
          // 이동하려는 반이 같은 반이 아닌지 체크
          studentList.filter((x1) =>
            banList.some((x2) => x1.csm_idx === x2.csm_idx)
          ).length === 0
        ) {
          if (
            // 이동하려는 반에 같은 학생이 없는지 체크
            studentList.filter((x1) =>
              banStudent.some((x2) => x1.mem_idx === x2.mem_idx)
            ).length === 0
          ) {
            await apiOperation
              .putMoveClass(payload)
              .then(({ data: { data } }) => {
                console.log(data)
                this.selectedMoveToClassCheckbox = []
                this.selectedMoveToClassCheckboxRight = []
                this.selectedMoveModalLeftCheckbox = []
                this.selectedMoveModalRightCheckbox = []
                this.openModalDesc('이동 성공', '반 이동을 성공했습니다.')
                this.getMoveClassLeft()
                this.getMoveClassRight()
                this.getClassList()
              })
              .catch((err) => {
                console.log(err)
              })
          } else {
            this.openModalDesc('이동 실패', '반 이동을 실패했습니다.')
          }
        } else {
          this.openModalDesc('이동 실패', '반 이동을 실패했습니다.')
        }
      } else {
        this.onOpenSnackbar('이동할 반을 선택해주세요.')
        setTimeout(() => {
          this.onCloseSnackbar()
        }, 2000)
      }
    },

    // 반 이동 시 복사 체크박스
    onClickCopyCheck() {
      if (this.modalMoveCopy) {
        this.modalMoveCopy = false
      } else {
        this.modalMoveCopy = true
      }
    },
    // 반 이동 학생 체크박스
    onClickMoveModalLeftCheckbox(items, csmIdx) {
      if (
        this.selectedMoveModalLeftCheckbox.find(
          (e) => e.mem_idx === items.mem_idx
        )?.mem_idx === items.mem_idx
      ) {
        this.selectedMoveModalLeftCheckbox =
          this.selectedMoveModalLeftCheckbox.filter(
            (item) => item.mem_idx !== items.mem_idx
          )
        console.log('delete')
      } else {
        const payload = {
          ...items,
          csm_idx: csmIdx,
        }
        this.selectedMoveModalLeftCheckbox.push(payload)
      }
      console.log('asfsfsf', this.selectedMoveModalLeftCheckbox)
    },
    // 이동할 반 선택 (오른쪽으로)
    onClickMoveToClass(item) {
      if (
        this.selectedMoveToClassCheckbox.find((e) => e.csm_idx === item.csm_idx)
          ?.csm_idx === item.csm_idx
      ) {
        this.selectedMoveToClassCheckbox =
          this.selectedMoveToClassCheckbox.filter(
            (idx) => idx.csm_idx !== item.csm_idx
          )
      } else {
        this.selectedMoveToClassCheckbox.push(item)
      }
      console.log('classCheckbox', this.selectedMoveToClassCheckbox)
    },
    // 학생 체크박스
    onClickMoveModalRightCheckbox(items, csmIdx) {
      if (
        this.selectedMoveModalRightCheckbox.find(
          (e) => e.mem_idx === items.mem_idx
        )?.mem_idx === items.mem_idx
        // this.selectedMoveModalRightCheckbox.some((e) => e.csm_idx === csmIdx)
      ) {
        this.selectedMoveModalRightCheckbox =
          this.selectedMoveModalRightCheckbox.filter(
            (item) => item.mem_idx !== items.mem_idx
          )
      } else {
        const payload = {
          ...items,
          csm_idx: csmIdx,
        }

        this.selectedMoveModalRightCheckbox.push(payload)
      }
      console.log(
        'RightCheckbox',
        this.selectedMoveModalRightCheckbox,
        items,
        this.selectedMoveModalRightCheckbox.some(
          (item) => item.mem_idx === items.mem_idx
        )
      )
    },
    // 이동할 반 선택 (왼쪽으로)
    onClickMoveToClassRight(item) {
      if (
        this.selectedMoveToClassCheckboxRight.find(
          (e) => e.csm_idx === item.csm_idx
        )?.csm_idx === item.csm_idx
      ) {
        this.selectedMoveToClassCheckboxRight =
          this.selectedMoveToClassCheckboxRight.filter(
            (idx) => idx.csm_idx !== item.csm_idx
          )
      } else {
        this.selectedMoveToClassCheckboxRight.push(item)
      }
      console.log('classCheckbox', this.selectedMoveToClassCheckboxRight)
    },

    // 학생 개별 등록/학생 상세 정보 모달
    // 모달 이벤트
    // 학생 상세 api
    async getStudentInfo(std_idx) {
      await apiOperation
        .getStudentInfo(std_idx)
        .then(({ data: { data } }) => {
          console.log(data)
          this.studentInfo = data
          this.openStudentInfoModalDesc()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 학생 상세 정보 / 수정
    openStudentInfoModalDesc(id) {
      // Object.assign(this.studentInfo, student)
      this.studentInfoModalDesc.open = true
      this.isEmailCheck = true
      this.isAttNumberCheck = true
    },
    onCloseStudentInfoModalDesc() {
      this.studentInfoModalDesc.open = false
      setTimeout(() => {
        Object.assign(this.studentInfo, this.initStudent)
        this.selectedDate = ''
        this.lectureDate = ''
        this.familySearchText = ''
      }, 500)
    },
    // 학생 정보 수정
    onChangeUpdateInput({ target: { value, id, checked } }) {
      this.studentInfo[id] = value
      if (checked) {
        this.studentInfo.mem_nickname = this.studentInfo.mem_name
        this.nickNameCheck = true
      }
      if (this.studentInfo.mem_nickname !== this.studentInfo.mem_name) {
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
      if (id === 'std_att_num') {
        this.studentInfo[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
      if (id === 'mem_id') {
        this.isIdCheck = false
      }
      if (id === 'std_att_num') {
        this.isAttNumberCheck = false
      }
      if (id === 'mem_email') {
        this.isEmailCheck = false
      }
    },
    // 생년월일
    openDatePickerModalDesc() {
      this.datePickerModalDesc.open = true
    },
    onCloseDatePickerModalDesc() {
      this.datePickerModalDesc.open = false
    },
    // 수강일
    openDatePickerLectureDateModalDesc() {
      this.datePickerLectureDateModalDesc.open = true
    },
    onCloseDatePickerLectureDateModalDesc() {
      this.datePickerLectureDateModalDesc.open = false
    },
    // 나의 신분 수정
    onClickStudentBtn() {
      if (this.studentInfo.std_grade === 'P') {
        this.studentInfo.std_grade = 'F'
      } else {
        this.studentInfo.std_grade = 'S'
      }
    },
    onClickParentBtn() {
      if (this.studentInfo.std_grade === 'S') {
        this.studentInfo.std_grade = 'F'
      } else {
        this.studentInfo.std_grade = 'P'
      }
    },
    // 학년 수정
    onClickTypeGrade() {
      this.studentInfo.std_adult_yn = false
    },
    onClickTypeAdult() {
      this.studentInfo.std_adult_yn = true
      this.studentInfo.std_year = ''
    },
    selectGrade(grade) {
      this.studentInfo.std_year = grade
    },
    // 성별 수정
    onClickGenderMen() {
      this.studentInfo.mem_sex = 'M'
    },
    onClickGenderWomen() {
      this.studentInfo.mem_sex = 'W'
    },
    // 활성화 여부 수정
    onClickStatusTrue() {
      this.studentInfo.std_use_yn = true
    },
    onClickStatusFalse() {
      this.studentInfo.std_use_yn = false
    },
    // 학생 상태 수정
    onClickStudentStatusTrue() {
      this.studentInfo.itm_status = '02'
    },
    onClickStudentStatusFalse() {
      this.studentInfo.itm_status = '01'
    },
    onClickStudentStatusNo() {
      this.studentInfo.itm_status = '99'
    },
    // 프로필 이미지
    openUploadStudentImgModalDesc() {
      this.uploadStudentImgModalDesc.open = true
    },
    onCloseUploadStudentImgModalDesc() {
      this.uploadStudentImgModalDesc.open = false
    },
    // 일촌 삭제
    onClickFamilyDeleteBtn(id) {
      this.deleteFamilyId = id
      this.openDeleteSimpleModalDesc('일촌 ID를 삭제하시겠습니까?')
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
    // 아이디 중복체크 api
    async getIdCheck() {
      await apiOperation
        .getIdCheck(this.studentInfo.mem_id)
        .then(({ data: { data } }) => {
          if (data) {
            this.isIdCheck = true
            this.openModalDesc('아이디 중복확인', '사용 가능한 아이디입니다.')
          } else {
            this.isIdCheck = false
            this.openModalDesc('아이디 중복확인', '중복된 아이디입니다.')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 이메일 중복체크 api
    async getEmailCheck() {
      await apiOperation
        .getEmailCheck(this.studentInfo.mem_email)
        .then(({ data: { data } }) => {
          console.log(data)
          if (data) {
            this.isEmailCheck = true
            this.openModalDesc('이메일 중복확인', '사용 가능한 이메일입니다.')
          } else {
            this.isEmailCheck = false
            this.openModalDesc('이메일 중복확인', '중복된 이메일입니다.')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 출결번호 중복체크 api
    async getAttendanceNumberCheck() {
      await apiOperation
        .getAttendanceNumberCheck(
          this.studentInfo.std_att_num,
          this.institutionIdx
        )
        .then(({ data: { data } }) => {
          if (data) {
            this.isAttNumberCheck = true
            this.openModalDesc(
              '출결번호 중복확인',
              '사용 가능한 출결번호입니다.'
            )
          } else {
            this.isAttNumberCheck = false
            this.openModalDesc('출결번호 중복확인', '중복된 출결번호입니다.')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 학생 수정 api
    async updateStudentInfo() {
      const payload = this.studentInfo
      await apiOperation
        .updateStudentInfo(payload)
        .then((res) => {
          console.log(res)
          this.openModalDesc('학생 상세 정보', '학생 정보가 수정되었습니다.')
          this.getStudentList()
          this.onSearchFilterDetail()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 학생 등록 api
    async registerStudent() {
      const payload = this.studentInfo
      await apiOperation
        .registerStudent(payload)
        .then((res) => {
          console.log(res)
          this.openModalDesc('학생 개별 등록', '새로운 학생이 등록되었습니다.')
          if (this.isStayRegister) {
            this.studentInfo = this.deepCopy(this.initStudent)
            this.getStudentList()
            this.onSearchFilterDetail()
          } else {
            this.onCloseNewStudentInfoModalDesc()
            this.getStudentList()
            this.onSearchFilterDetail()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 이미지 업로드
    onClickInputButton() {
      const inputBtn = document.getElementById('upload-input')
      inputBtn.click()
    },
    onFileSelected({ target }) {
      const input = target
      if (input.files && input.files[0]) {
        if (input.files[0].size < 3145728) {
          const reader = new FileReader()
          reader.onload = (e) => {
            this.uploadImageFile = e.target.result
            console.log(this.uploadImageFile)
          }
          reader.readAsDataURL(input.files[0])
        } else {
          this.openModalDesc(
            '업로드 제한',
            '해당 파일은 제한된 용량을 초과하였습니다. (이미지 제한 용량: 3MB)'
          )
        }
      }
    },
    onClickImgConfirm() {
      this.studentInfo.profile_image = this.uploadImageFile
      this.uploadStudentImgModalDesc.open = false
    },
    // 생일 수정
    selectDay(e) {
      this.selectedDate = e.id
      console.log(this.selectedDate)
    },
    onClickBirthdayConfirm() {
      this.studentInfo.mem_birthday = this.selectedDate
      this.datePickerModalDesc.open = false
    },
    // 수강일 수정
    selectLectureDate(e) {
      this.lectureDate = e.id
    },
    onClickLectureDateConfirm() {
      this.studentInfo.std_courses = this.lectureDate
      this.datePickerLectureDateModalDesc.open = false
    },

    // 반 상세 출결 모달
    // 학생 출결관리
    openStudentAttendanceModal(item) {
      // const student = this.studentList.find((result) => result.id === id)
      Object.assign(this.studentInfo, item)
      this.studentAttendanceModal.open = true
    },
    onCloseStudentAttendanceModal() {
      this.studentAttendanceModal.open = false
    },
    // 달력 날짜 설정
    selectAttendanceLecture(idx) {
      this.isLectureTitleIdx = idx + 1
    },
    // 커스텀 스낵바
    openCustomSnackbarNext() {
      this.customSnackbarDesc = {
        show: true,
        message: '다음 주로 이동할 수 없습니다.',
      }
      setTimeout(() => {
        this.onCloseCustomSnackbar()
      }, 2000)
    },
    onCloseCustomSnackbar() {
      this.customSnackbarDesc.show = false
    },
    openCustomSnackbarPrev() {
      this.customSnackbarDesc = {
        show: true,
        message: '지난 주로 이동할 수 없습니다.',
      }
      setTimeout(() => {
        this.onCloseCustomSnackbar()
      }, 2000)
    },
    // 기간 달력 모달
    openModalCalendar() {
      this.isRangeCalendar = true
    },
    closeModalCalendar() {
      this.isRangeCalendar = false
    },
    // 달력 날짜 설정
    onChangeDate({ start, end }) {
      const setDate = (date) =>
        `${date?.getFullYear()}.${date?.getMonth() + 1}.${date?.getDate()}`
      console.log(setDate(start), setDate(end))
      this.dateRange.start = setDate(start)
      this.dateRange.end = setDate(end)
      this.isRangeCalendar = false
    },

    // 학습리포트
    openReportFilterModal(item) {
      // const student = this.studentList.find((result) => result.id === id)
      Object.assign(this.studentInfo, item)
      this.reportFilterModal.open = true
      this.isMonthRange = true
    },
    onCloseReportFilterModal() {
      this.reportFilterModal.open = false
      this.isMonthRange = false
    },
    searchFilterList(id) {
      if (id === 'classSearchText') {
        this.filterList.class = this.deepCopy(this.initFilterList.class)
        const result = this.filterList.class.filter((elem) => {
          return elem.includes(this.searchTextList.classSearchText)
        })
        this.filterList.class = result
      } else if (id === 'subjectSearchText') {
        this.filterList.subject = this.deepCopy(this.initFilterList.subject)
        const result = this.filterList.subject.filter((elem) => {
          return elem.includes(this.searchTextList.subjectSearchText)
        })
        this.filterList.subject = result
      } else if (id === 'courseSearchText') {
        this.filterList.course = this.deepCopy(this.initFilterList.course)
        const result = this.filterList.course.filter((elem) => {
          return elem.includes(this.searchTextList.courseSearchText)
        })
        this.filterList.course = result
      } else if (id === 'examSearchText') {
        this.filterList.exam = this.deepCopy(this.initFilterList.exam)
        const result = this.filterList.exam.filter((elem) => {
          return elem.includes(this.searchTextList.examSearchText)
        })
        this.filterList.exam = result
      }
    },
    changeReportSearchInput({ target: { value, id } }) {
      this.searchTextList[id] = value
    },
    openReportDetailModal() {
      const array = []
      for (let i = 0; i < this.reportList.length; i++) {
        const count = i
        if (array.length === this.reportList.length) {
          break
        } else if (count === this.bgList.length) {
          i = -1
        } else {
          array.push(this.bgList[count])
        }
      }
      this.bgList = array
      this.onCloseReportFilterModal()
      this.reportDetailModalDesc.open = true
    },
    onCloseReportDetailModal() {
      this.reportDetailModalDesc.open = false
    },
    // 필터 태그
    onClickTagAllCheck(title) {
      if (title === 'classList') {
        this.tagList.classList = []
      } else if (title === 'subjectList') {
        this.tagList.subjectList = []
      } else if (title === 'courseList') {
        this.tagList.courseList = []
      } else if (title === 'examList') {
        this.tagList.examList = []
      }
      console.log(this.tagList.classList)
    },
    onClickTagList(text, title, e) {
      if (title === 'classList') {
        if (this.tagList.classList.includes(text)) {
          this.tagList.classList = this.tagList.class.filter(
            (item) => item !== text
          )
        } else {
          console.log(text)
          this.tagList.classList.push(text)
          if (this.tagList.classList.length === this.filterList.class.length) {
            this.tagList.classList = []
            e.target.checked = false
          }
        }
      } else if (title === 'subjectList') {
        if (this.tagList.subjectList.includes(text)) {
          this.tagList.subjectList = this.tagList.subjectList.filter(
            (item) => item !== text
          )
        } else {
          console.log(text)
          this.tagList.subjectList.push(text)
          if (
            this.tagList.subjectList.length === this.filterList.subject.length
          ) {
            this.tagList.subjectList = []
            e.target.checked = false
          }
        }
      } else if (title === 'courseList') {
        if (this.tagList.courseList.includes(text)) {
          this.tagList.courseList = this.tagList.courseList.filter(
            (item) => item !== text
          )
        } else {
          console.log(text)
          this.tagList.courseList.push(text)
          if (
            this.tagList.courseList.length === this.filterList.course.length
          ) {
            this.tagList.courseList = []
            e.target.checked = false
          }
        }
      } else if (title === 'examList') {
        if (this.tagList.examList.includes(text)) {
          this.tagList.examList = this.tagList.examList.filter(
            (item) => item !== text
          )
        } else {
          console.log(text)
          this.tagList.examList.push(text)
          if (this.tagList.examList.length === this.filterList.exam.length) {
            this.tagList.examList = []
            e.target.checked = false
          }
        }
      }
      console.log(
        this.tagList.subjectList.length,
        this.filterList.subject.length
      )
      console.log(this.tagList)
    },
    onClickAddFilterTag() {
      if (
        this.tagList.classList.length !== 0 ||
        this.tagList.subjectList.length !== 0 ||
        this.tagList.courseList.length !== 0 ||
        this.tagList.examList.length !== 0 ||
        this.tagList.studentList.length !== 0
      ) {
        for (const value in this.tagList.classList) {
          this.filterTag.push(this.tagList.classList[value])
        }
        for (const value in this.tagList.subjectList) {
          this.filterTag.push(this.tagList.subjectList[value])
        }
        for (const value in this.tagList.courseList) {
          this.filterTag.push(this.tagList.courseList[value])
        }
        for (const value in this.tagList.examList) {
          this.filterTag.push(this.tagList.examList[value])
        }
        for (const value in this.tagList.studentList) {
          this.filterTag.push(this.tagList.studentList[value])
        }
        this.tagList = {
          classList: [],
          subjectList: [],
          courseList: [],
          examList: [],
          studentList: [],
        }
      }
      this.openReportDetailModal()
    },
    // PDF변환
    exportPdf(name) {
      window.scrollTo(0, 0)
      const targetElem = document.querySelector('#pdfPrintSave')
      console.log(targetElem)
      const el = document.getElementById('pdfArea')
      this.reportHeight = el.scrollHeight + 'px'
      console.log(el.style.height)
      html2pdf(targetElem, {
        margin: [10, 0, 10, 0],
        filename: `${name}_report.pdf`,
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: {
          scrollY: 0,
          scale: 1,
          dpi: 300,
          letterRendering: true,
          allowTaint: false,
          ignoreElements(element) {
            // pdf에 출력하지 않아야할 dom이 있다면 해당 옵션 사용
            if (element.id === 'noneItem') {
              return true
            }
          },
        },
        jsPDF: {
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4',
          compressPDF: true,
        },
      })
    },
  },
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
.classroom {
  max-width: 105px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.drag-box {
  display: contents;
}
</style>
