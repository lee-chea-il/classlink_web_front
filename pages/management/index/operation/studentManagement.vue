<template>
  <div>
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
    <div class="tab-content depth03 ac_manage_std">
      <StudentListBox
        :rangeList="rangeList"
        :studentList="studentList"
        :identityList="identityList"
        :isRangeFlag="isRangeFlag"
        :statusList="statusList"
        :studentStatusList="studentStatusList"
        :isIdentityFlag="isIdentityFlag"
        :isStatusFlag="isStatusFlag"
        :isStudentStatusFlag="isStudentStatusFlag"
        :searchStudentText="searchStudentText"
        :expandIdx="expandIdx"
        :endPageNumber="endPageNumber"
        :currentPage="currentPage"
        @click-page="onClickPagination"
        @click-direction="paginationDirection"
        @click-report="openReportFilterModal"
        @click-attendance="openStudentAttendanceModal"
        @click-memo="openStudentMemoModalDesc"
        @click-lectureInfo="openLectureInfoModalDesc"
        @click-more="onClickExpandBtn"
        @search-student="searchStudent"
        @change-input="changeSearchInput"
        @click-detail="getStudentInfo"
        @click-addStudent="openNewStudentInfoModalDesc"
        @click-batchStudent="openBatchRegistrationModalDesc"
        @select-identity="selectIdentityFlag"
        @select-range="selectRangeFlag"
        @select-status="selectStatusFlag"
        @select-studentStatus="selectStudentStatusFlag"
      />
    </div>
    <!-- 모달 팝업 ------------------------------------->

    <!-- 학생 일괄 등록1 - 팝업 M2 -->
    <BatchRegistrationModal
      :open="batchRegistrationModalDesc.open"
      :uploadFileName="uploadFileName"
      @upload="onClickInputFileButton"
      @selected-file="onXlsxFileSelected"
      @close="onCloseBatchRegistrationModalDesc"
    />

    <!-- 학생 일괄 등록2(성공) - 팝업 S2 -->
    <!-- [개발참조] 학생 등록을 성공한 경우 나오는 팝업 -->
    <BatchSuccessModal @close="onCloseBatchRegistrationModalDesc" />

    <!-- 학생 일괄 등록3(실패) - 팝업 S2 -->
    <!-- [개발참조] 학생 등록을 실패한 경우 나오는 팝업 -->
    <BatchFailedModal @close="onCloseBatchRegistrationModalDesc" />

    <!-- 학생 개별 등록 -->
    <StudentInfoModal
      :isNewStudent="true"
      :studentInfo="studentInfo"
      :open="newStudentInfoModalDesc.open"
      :nickNameCheck="nickNameCheck"
      :familySearchText="familySearchText"
      :isRegister="true"
      :isIdCheck="isIdCheck"
      :isEmailCheck="isEmailCheck"
      :isAttNumberCheck="isAttNumberCheck"
      :isStayRegister="isStayRegister"
      @close="onCloseNewStudentInfoModalDesc"
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
      @add-student="registerStudent"
      @check-id="getIdCheck"
      @check-email="getEmailCheck"
      @check-sttnumber="getAttendanceNumberCheck"
      @check-stay="checkStayRegister"
      @update-student="updateStudentInfo"
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

    <!-- 일촌등록 - 팝업 M2 -->
    <!-- [개발참조]: 모달에서 띄워지는 모달 class "double" 추가 -->
    <RegisterFamilyModal
      :familySearchText="familySearchText"
      :familySearchList="familySearchList"
      @change-input="onChangeFamilySearchInput"
      @reset-input="resetFamilySearchInput"
      @search-family="searchFamily"
      @check-family="checkSelectedFamily"
      @add-family="registerFamily"
    />

    <!-- 학생재배정 - 팝업 M1 -->
    <!-- [개발참조]: 모달에서 띄워지는 모달 class "double" 추가 -->
    <ResetAssignmentModal
      :classList="classList"
      :studentInfo="studentInfo"
      :resetClassList="resetClassList"
      @check-class="onChangeStudentClass"
      @reset-check="onClickNoClass"
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

    <!-- 비밀번호초기화 -->
    <ResetPasswordModal @reset="initPassword" />

    <!-- 수강정보-팝업 M1 -->
    <LectureInfoModal
      :open="lectureInfoModalDesc.open"
      :lectureList="lectureList"
      :lectureInfo="studentInfo.lectureInfo"
      :isNewLectureMemoFlag="isNewLectureMemoFlag"
      :lectureId="lectureId"
      :isUpdateLectureMemoFlag="isUpdateLectureMemoFlag"
      :lectureMemoId="lectureMemoId"
      :lectureInfoMemo="lectureInfoMemo"
      @click-cancel="onClickLectureMemoCancelBtn"
      @click-sameBtn="onClickSameDate"
      @click-date="onClickDueDatePicker"
      @change-input="changeLectureMemoInput"
      @add-memo="addLectureMemo"
      @click-update="onClickUpdateLectureMemoBtn"
      @click-delete="onClickLectureMemoDelete"
      @update-memo="updateLectureMemo"
      @click-newMemo="onClickNewLectureMemoBtn"
      @close="onCloseLectureInfoModalDesc"
    />

    <!-- 납부일 설정 모달 -->
    <!-- <DatePickerModal
      :open="datePickerModalDesc.open"
      @close="onCloseDatePickerModalDesc"
      @select-date="selectDay"
      @confirm="onClickDueDateConfirm"
    /> -->

    <!-- 메모-팝업 L -->
    <StudentMemoModal
      :open="studentMemoModalDesc.open"
      :studentMemoList="studentMemoList"
      :isNewStudentMemoFlag="isNewStudentMemoFlag"
      :studentMemoId="studentMemoId"
      :studentMemo="studentMemo"
      :isStudentMemoMoreFlag="isStudentMemoMoreFlag"
      :isUpdateStudentMemoFlag="isUpdateStudentMemoFlag"
      :memoRange="memoRange"
      :endPageNumber="memoEndPageNumber"
      :currentPage="memoCurrentPage"
      @click-page="onClickMemoPagination"
      @click-direction="memoPaginationDirection"
      @click-more="onClickMoreBtn"
      @change-input="changeStudentMemoInput"
      @click-add="onClickNewStudentMemoBtn"
      @click-update="onClickUpdateStudentMemoBtn"
      @update-memo="updateStudentMemo"
      @click-cancel="onClickCancelBtn"
      @click-delete="openDeleteStudentMemoModalDesc"
      @add-memo="addStudentMemo"
      @select-range="selectMemoRange"
      @close="onCloseStudentMemoModalDesc"
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

    <!-- [개발참조] : 저장안함은 저장안하고 메모팝업창-L을 닫기 / 취소는 팝업창-S 만 닫기 (메모모달창 모두 닫기 스크립트 찹조)  -->
    <!-- 메모 저장 - 팝업 S2 -->
    <SaveMemoModal />

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

    <!-- 학습 리포트 pdf-->
    <ReportPrintPage
      :reportList="reportList"
      :studentInfo="studentInfo"
      :reportHeight="reportHeight"
      :bgList="bgList"
    />

    <!-- 설명 모달 -->
    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />

    <!-- 달력 기간 모달 호출 -->
    <RangeDataPicker
      :open="isRangeCalendar"
      :isMonthRange="isMonthRange"
      @select-date="onChangeDate"
      @close="closeModalCalendar"
    />

    <!-- 토스트메세지 victor.js ------------------------------------->
    <!-- [개발참조] : 출결팝업의 선택날짜범위 밖으로의 이전 다음 버튼 클리 시 노출 -->
    <CustomSnackbar
      :show="customSnackbarDesc.show"
      :message="customSnackbarDesc.message"
    />

    <!-- 팝업 S2- 일촌ID삭제 -->
    <DeleteSimpleModal
      :open="deleteSimpleModalDesc.open"
      :message="deleteSimpleModalDesc.message"
      @delete="deleteFamily"
      @close="onCloseDeleteSimpleModalDesc"
    />

    <!-- 수강정보 메모 삭제 -->
    <DeleteSimpleModal
      :open="deleteLectureMemoModalDesc.open"
      :message="deleteLectureMemoModalDesc.message"
      @delete="deleteLectureMemo"
      @close="onCloseDeleteLectureMemoModal"
    />

    <!-- 학생 메모 삭제 -->
    <DeleteSimpleModal
      :open="deleteStudentMemoDesc.open"
      :message="deleteStudentMemoDesc.message"
      @delete="deleteStudentMemo"
      @close="onCloseDeleteStudentMemoModal"
    />
  </div>
</template>
<script>
import html2pdf from 'html2pdf.js'
import { apiOperation } from '~/services'
import NavBox from '@/components/operation/NavBox.vue'
import StudentListBox from '@/components/operation/StudentListBox.vue'
import ReportPrintPage from '@/components/operation/ReportPrintPage.vue'
import BatchRegistrationModal from '@/components/common/modal/operation/BatchRegistrationModal.vue'
import BatchSuccessModal from '@/components/common/modal/operation/BatchSuccessModal.vue'
import BatchFailedModal from '@/components/common/modal/operation/BatchFailedModal.vue'
import StudentInfoModal from '@/components/common/modal/operation/StudentInfoModal.vue'
import RegisterFamilyModal from '@/components/common/modal/operation/RegisterFamilyModal.vue'
import ResetAssignmentModal from '@/components/common/modal/operation/ResetAssignmentModal.vue'
import LectureInfoModal from '@/components/common/modal/operation/LectureInfoModal.vue'
import StudentAttendanceModal from '@/components/common/modal/operation/StudentAttendanceModal.vue'
import StudentMemoModal from '@/components/common/modal/operation/StudentMemoModal.vue'
import SaveMemoModal from '@/components/common/modal/operation/SaveMemoModal.vue'
import ReportFilterModal from '@/components/common/modal/operation/ReportFilterModal.vue'
import ReportDetailModal from '@/components/common/modal/operation/ReportDetailModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import DatePickerModal from '@/components/common/modal/operation/DatePickerModal.vue'
import UploadStudentImg from '@/components/common/modal/operation/UploadTeacherImg.vue'
import ResetPasswordModal from '@/components/common/modal/operation/ResetPasswordModal.vue'
import DeleteSimpleModal from '@/components/common/modal/operation/DeleteSimpleModal.vue'
import CustomSnackbar from '@/components/common/CustomSnackbar.vue'
import RangeDataPicker from '~/components/common/modal/RangeDataPicker.vue'
export default {
  name: 'StudentManagement',
  components: {
    NavBox,
    StudentListBox,
    BatchRegistrationModal,
    BatchSuccessModal,
    BatchFailedModal,
    StudentInfoModal,
    RegisterFamilyModal,
    ResetAssignmentModal,
    LectureInfoModal,
    StudentAttendanceModal,
    StudentMemoModal,
    SaveMemoModal,
    ReportFilterModal,
    ReportDetailModal,
    ModalDesc,
    DatePickerModal,
    UploadStudentImg,
    ResetPasswordModal,
    DeleteSimpleModal,
    CustomSnackbar,
    RangeDataPicker,
    ReportPrintPage,
  },
  data() {
    return {
      institutionIdx: this.$store.state.common.user.ins_code,
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
      initStudent: {},
      studentList: [],
      // 교육기관 반 리스트
      classList: ['심화 A반', '심화 B반', '심화 C반', '심화 D반', '심화 E반'],
      // 학습리포트
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
      // 모달
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
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
      newStudentInfoModalDesc: {
        open: false,
      },
      batchRegistrationModalDesc: {
        open: false,
      },
      lectureInfoModalDesc: {
        open: false,
      },
      studentMemoModalDesc: {
        open: false,
      },
      deleteSimpleModalDesc: {
        open: false,
        message: '',
      },
      deleteStudentMemoDesc: {
        open: false,
        message: '',
      },
      deleteLectureMemoModalDesc: {
        open: false,
        message: '',
      },
      customSnackbarDesc: {
        show: false,
        message: '',
      },
      studentAttendanceModal: {
        open: false,
      },
      reportFilterModal: {
        open: false,
      },
      reportDetailModalDesc: {
        open: false,
      },
      // 정렬 필터링
      isRangeFlag: 1,
      isIdentityFlag: 1,
      isStatusFlag: true,
      isStudentStatusFlag: true,
      rangeList: [
        { id: 1, title: '최신 등록순' },
        { id: 2, title: '이름 오름차순' },
        { id: 3, title: '이름 내림차순' },
        { id: 4, title: '학년 오름차순' },
        { id: 5, title: '학년 내림차순' },
      ],
      identityList: [
        { id: 1, title: '학생' },
        { id: 2, title: '학부모' },
        { id: 3, title: '학부모&학생' },
      ],
      statusList: [
        { id: 1, title: '활성화', value: true },
        { id: 2, title: '비활성화', value: false },
      ],
      studentStatusList: [
        { id: 1, title: '재원', value: true },
        { id: 2, title: '퇴원', value: false },
      ],
      memoRange: true,
      // 정보 수정
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
      // 학생 일괄 등록
      uploadFileName: null,
      // 학생 이름 검색
      searchStudentText: '',
      // 더보기
      expandIdx: [],
      selectStudent: {},
      // 수강 정보 메모
      lectureList: [],
      lecture: {
        id: 0,
        lectureTitle: '',
        class: '',
        dueDate: '',
        lectureDate: '',
        memo: [],
      },
      lectureInfoMemo: {
        contents: '',
        updatedAt: '',
        writer: '',
      },
      initLectureMemo: {},
      isNewLectureMemoFlag: false,
      lectureId: 0,
      // 수강 정보 메모 수정하기
      isUpdateLectureMemoFlag: false,
      lectureMemoId: 0,
      // 학생 메모
      selectStudentIdx: 0,
      studentMemoList: [],
      studentMemo: {
        sm_idx: 0,
        ins_code: this.$store.state.common.user.ins_code,
        sm_consult_date: '2023-01-05',
        sm_consultant: this.$store.state.common.user.mem_name,
        sm_desc: '',
        std_idx: 0,
      },
      initStudentMemo: {},
      isNewStudentMemoFlag: false,
      studentMemoId: 0,
      isStudentMemoMoreFlag: false,
      isUpdateStudentMemoFlag: false,
      isMemoRangeFlag: 0,
      // 출결
      isRangeCalendar: false,
      dateRange: {
        start: '',
        end: '',
      },
      isLectureTitleIdx: 0,
      // 학습리포트
      monthRange: {
        start: '',
        end: '',
      },
      isMonthRange: false,
      filterList: {
        class: ['심화A반', '심화B반', '심화C반'],
        subject: ['수학', '국어', '영어', '사회'],
        course: ['영어리딩심화', '영어리딩기초', '영어리딩기초1'],
        exam: ['쪽지시험', '퀴즈', '정기시험'],
      },
      initFilterList: {
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
      filterDateRange: {},
      searchTextList: {
        classSearchText: '',
        subjectSearchText: '',
        courseSearchText: '',
        examSearchText: '',
      },
      bgList: ['color01', 'color02', 'color03'],
      reportQuery: '',
      reportHeight: '',
      // pagination
      currentPage: 1,
      endPageNumber: 0,
      // 메모 pagination
      memoCurrentPage: 1,
      memoEndPageNumber: 0,
    }
  },
  watch: {
    // 목록
    isRangeFlag() {
      this.currentPage = 1
      this.getStudentList()
    },
    isIdentityFlag() {
      this.currentPage = 1
      this.getStudentList()
    },
    isStatusFlag() {
      this.currentPage = 1
      this.getStudentList()
    },
    isStudentStatusFlag() {
      this.currentPage = 1
      this.getStudentList()
    },
    currentPage() {
      this.getStudentList()
    },
    memoRange() {
      this.getStudentMemoList()
    },
    memoCurrentPage() {
      this.getStudentMemoList()
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
    // 빈 객체(배열)
    this.initStudent = JSON.parse(JSON.stringify(this.studentInfo))
    this.initLectureMemo = JSON.parse(JSON.stringify(this.lectureInfoMemo))
    this.initStudentMemo = JSON.parse(JSON.stringify(this.studentMemo))
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
    this.getStudentList()
  },
  methods: {
    // 깊은 복사
    deepCopy(data) {
      return JSON.parse(JSON.stringify(data))
    },
    // 인덱스
    setIdxNumber(string) {
      return Number(string.substr(4))
    },
    // 학생 목록 불러오기 api
    async getStudentList() {
      this.expandIdx = []
      const payload = {
        ins_code: this.institutionIdx,
        current_page: this.currentPage,
        per_page_num: 10,
        status: this.isStatusFlag,
        latest: this.isRangeFlag,
        cond: this.isIdentityFlag,
        attend: this.isStudentStatusFlag,
        search: this.searchStudentText,
      }
      await apiOperation
        .getStudentList(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.studentList = data.dto_list
          this.endPageNumber = data.pageMaker.end_page
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 정렬 필터링
    selectRangeFlag(idx) {
      this.isRangeFlag = idx
    },
    selectIdentityFlag(idx) {
      this.isIdentityFlag = idx
    },
    selectStatusFlag(value) {
      this.isStatusFlag = value
    },
    selectStudentStatusFlag(value) {
      this.isStudentStatusFlag = value
    },
    // 학생 이름 검색
    changeSearchInput({ target: { value } }) {
      this.searchStudentText = value
    },
    searchStudent() {
      this.currentPage = 1
      this.getStudentList()
    },
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
    // 학생 수정 api
    async updateStudentInfo() {
      const payload = this.studentInfo
      await apiOperation
        .updateStudentInfo(payload)
        .then((res) => {
          console.log(res)
          this.openModalDesc('학생 상세 정보', '학생 정보가 수정되었습니다.')
          this.getStudentList()
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
          } else {
            this.onCloseNewStudentInfoModalDesc()
            this.getStudentList()
          }
        })
        .catch((err) => {
          console.log(err)
        })
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
    // 학생 재배정
    onChangeStudentClass({ target: { id, checked } }) {
      const classIdx = this.setIdxNumber(id)
      const index = this.studentInfo.all_lecture_info.findIndex(
        (x) => x.csm_idx === classIdx
      )
      if (checked) {
        this.studentInfo.all_lecture_info[index].check_ban = true
      } else {
        this.studentInfo.all_lecture_info[index].check_ban = false
      }
    },
    // 학생 재배정 전체해제
    onClickNoClass() {
      this.studentInfo.all_lecture_info.forEach((x) => {
        x.check_ban = false
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
    // 일촌
    onChangeFamilySearchInput({ target: { value } }) {
      this.familySearchText = value
    },
    resetFamilySearchInput() {
      this.familySearchText = ''
    },
    onClickSearchBtn() {
      const btn = document.getElementById('modalFamilySearch')
      btn.click()
      this.searchFamily()
    },
    // 일촌 검색 api
    async searchFamily() {
      await apiOperation
        .searchFamily(
          this.institutionIdx,
          this.familySearchText,
          this.studentInfo.std_idx
        )
        .then(({ data: { data } }) => {
          this.familySearchList = data
          console.log(this.familySearchList)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 일촌 체크
    checkSelectedFamily({ target: { id, checked } }) {
      const idx = this.setIdxNumber(id)
      if (checked) {
        this.registerFamilyList.push(idx)
      } else {
        const index = this.registerFamilyList.indexOf(idx)
        this.registerFamilyList.splice(index, 1)
      }
      console.log(this.registerFamilyList)
    },
    // 일촌 등록 api
    async registerFamily() {
      const payload = {
        ins_code: this.institutionIdx,
        mem_idx_list: this.registerFamilyList,
        std_idx: this.studentInfo.std_idx,
      }
      await apiOperation
        .registerFamily(payload)
        .then((res) => {
          console.log(res)
          this.getStudentInfo(this.studentInfo.std_idx)
          this.getStudentList()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 일촌 삭제
    onClickFamilyDeleteBtn(id) {
      this.deleteFamilyId = id
      this.openDeleteSimpleModalDesc('일촌 ID를 삭제하시겠습니까?')
    },
    // 일촌 삭제 api
    async deleteFamily() {
      await apiOperation
        .deleteFamily(this.deleteFamilyId, this.studentInfo.std_idx)
        .then(() => {
          this.onCloseDeleteSimpleModalDesc()
          this.getStudentInfo(this.studentInfo.std_idx)
          this.getStudentList()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 비밀번호 초기화
    async initPassword() {
      await apiOperation
        .initPassword(this.studentInfo.mem_id)
        .then((res) => {
          console.log(res)
          this.openModalDesc('비밀번호 초기화', '비밀번호가 초기화되었습니다.')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 계속 등록하기
    checkStayRegister({ target: { checked } }) {
      this.isStayRegister = checked
    },

    // 더보기
    onClickExpandBtn(idx) {
      if (this.expandIdx.includes(idx)) {
        this.expandIdx.pop()
      } else {
        this.expandIdx.push(idx)
        this.selectStudentIdx = this.expandIdx[0]
        const student = this.studentList.find(
          (result) => result.std_idx === this.selectStudentIdx
        )
        this.selectStudent = student
      }
      if (this.expandIdx.length === 2) {
        this.expandIdx.splice(0, 1)
      }
    },

    // 학생 메모
    // 메모 목록 api
    async getStudentMemoList() {
      const payload = {
        ins_code: this.institutionIdx,
        std_idx: this.selectStudentIdx,
        current_page: this.memoCurrentPage,
        per_page_num: 10,
        filter: this.memoRange,
      }
      await apiOperation
        .getStudentMemoList(payload)
        .then(({ data: { data } }) => {
          this.studentMemoList = data.dataList
          this.memoEndPageNumber = data.pageMaker.end_page
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 학생 메모 - 새 메모
    changeStudentMemoInput({ target: { value } }) {
      this.studentMemo.sm_desc = value
    },
    // 메모 등록 api
    async addStudentMemo() {
      this.studentMemo.std_idx = this.selectStudentIdx
      const payload = this.studentMemo
      await apiOperation
        .addStudentMemo(payload)
        .then((res) => {
          this.getStudentMemoList()
          this.isNewStudentMemoFlag = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 학생 메모 - 더보기
    onClickMoreBtn(sm_idx) {
      if (this.isStudentMemoMoreFlag && this.studentMemoId === sm_idx) {
        this.isStudentMemoMoreFlag = false
        return false
      }
      this.studentMemoId = sm_idx
      const memo = this.studentMemoList.find(
        (result) => result.sm_idx === this.studentMemoId
      )
      this.studentMemo = memo
      this.isStudentMemoMoreFlag = true
      this.isNewStudentMemoFlag = false
      this.isUpdateStudentMemoFlag = false
    },
    // 학생 메모 - 수정
    onClickUpdateStudentMemoBtn() {
      this.isUpdateStudentMemoFlag = true
      this.isNewStudentMemoFlag = false
    },
    // 메모 수정 api
    async updateStudentMemo() {
      this.studentMemo.std_idx = this.selectStudentIdx
      const payload = this.studentMemo
      await apiOperation
        .updateStudentMemo(payload)
        .then((res) => {
          this.getStudentMemoList()
          this.isUpdateStudentMemoFlag = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 메모 삭제 api
    async deleteStudentMemo() {
      await apiOperation
        .deleteStudentMemo(this.studentMemo.sm_idx)
        .then(() => {
          this.onCloseDeleteStudentMemoModal()
          this.getStudentMemoList()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 수강 정보
    // 수강 정보 목록 api
    async getStudentLectureList() {
      const payload = {
        ins_code: this.institutionIdx,
        std_idx: this.selectStudent.std_idx,
        mem_idx: this.selectStudent.mem_idx,
      }
      await apiOperation
        .getStudentLectureList(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.lectureList = data.lectureList
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 모달 이벤트
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
    openDeleteSimpleModalDesc(msg) {
      this.deleteSimpleModalDesc = { open: true, message: msg }
    },
    onCloseDeleteSimpleModalDesc() {
      this.deleteSimpleModalDesc.open = false
    },
    // 학생 상세 정보 / 수정
    openStudentInfoModalDesc() {
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
    // 학생 개별 등록
    openNewStudentInfoModalDesc() {
      Object.assign(this.studentInfo, this.initStudent)
      this.newStudentInfoModalDesc.open = true
    },
    onCloseNewStudentInfoModalDesc() {
      this.newStudentInfoModalDesc.open = false
      setTimeout(() => {
        this.selectedDate = ''
        this.lectureDate = ''
        this.familySearchText = ''
      }, 500)
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
    // 프로필 이미지
    openUploadStudentImgModalDesc() {
      this.uploadStudentImgModalDesc.open = true
    },
    onCloseUploadStudentImgModalDesc() {
      this.uploadStudentImgModalDesc.open = false
    },
    // 학생 일괄 등록
    openBatchRegistrationModalDesc() {
      this.batchRegistrationModalDesc.open = true
    },
    onCloseBatchRegistrationModalDesc() {
      this.batchRegistrationModalDesc.open = false
    },
    // 수강 정보 모달
    openLectureInfoModalDesc() {
      this.getStudentLectureList()
      this.lectureInfoModalDesc.open = true
    },
    onCloseLectureInfoModalDesc() {
      Object.assign(this.studentInfo, this.initStudent)
      this.lectureInfoModalDesc.open = false
      this.isNewLectureMemoFlag = false
      this.isUpdateLectureMemoFlag = false
    },

    openDeleteLectureMemoModalDesc() {
      this.deleteLectureMemoModalDesc = {
        open: true,
        message: '메모를 삭제하시겠습니까?',
      }
    },
    onCloseDeleteLectureMemoModal() {
      this.deleteLectureMemoModalDesc.open = false
    },
    // 학생 메모 모달
    openStudentMemoModalDesc() {
      this.getStudentMemoList()
      this.studentMemoModalDesc.open = true
    },
    onCloseStudentMemoModalDesc() {
      Object.assign(this.studentInfo, this.initStudent)
      console.log(this.studentInfo)
      this.studentMemoModalDesc.open = false
      this.isNewStudentMemoFlag = false
      this.isUpdateStudentMemoFlag = false
    },
    openDeleteStudentMemoModalDesc() {
      this.deleteStudentMemoDesc = {
        open: true,
        message: '메모를 삭제하시겠습니까?',
      }
    },
    onCloseDeleteStudentMemoModal() {
      this.deleteStudentMemoDesc.open = false
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
    // 학생 출결관리
    openStudentAttendanceModal(id) {
      const student = this.studentList.find((result) => result.id === id)
      Object.assign(this.studentInfo, student)
      this.studentAttendanceModal.open = true
    },
    onCloseStudentAttendanceModal() {
      this.studentAttendanceModal.open = false
    },
    // 기간 달력 모달
    openModalCalendar() {
      this.isRangeCalendar = true
    },
    closeModalCalendar() {
      this.isRangeCalendar = false
    },
    // 학습리포트
    openReportFilterModal(id) {
      const student = this.studentList.find((result) => result.id === id)
      Object.assign(this.studentInfo, student)
      this.reportFilterModal.open = true
      this.isMonthRange = true
    },
    onCloseReportFilterModal() {
      this.reportFilterModal.open = false
      this.isMonthRange = false
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

    // 학생 일괄 등록
    onClickInputFileButton() {
      const inputBtn = document.getElementById('upload-file')
      inputBtn.click()
    },
    onXlsxFileSelected({ target }) {
      this.uploadFileName = target.files[0].name
    },

    // 수강 정보 - 새 메모 만들기
    changeLectureMemoInput({ target: { value } }) {
      this.lectureInfoMemo.contents = value
    },
    onClickNewLectureMemoBtn(id) {
      this.lectureInfoMemo = this.deepCopy(this.initLectureMemo)
      if (!this.isNewLectureMemoFlag) {
        this.lectureId = id
        this.isNewLectureMemoFlag = true
      } else {
        this.isNewLectureMemoFlag = false
      }
    },
    addLectureMemo(id) {
      const lecture = this.studentInfo.lectureInfo.find(
        (result) => result.id === id
      )
      lecture.memo.push(this.lectureInfoMemo)
      this.isNewLectureMemoFlag = false
    },
    onClickLectureMemoCancelBtn() {
      if (this.isNewLectureMemoFlag || this.isUpdateLectureMemoFlag) {
        this.isNewLectureMemoFlag = false
        this.isUpdateLectureMemoFlag = false
      }
    },
    // 수강 정보 - 메모 수정
    onClickUpdateLectureMemoBtn(lectureId, memoId) {
      this.lectureMemoId = memoId
      this.isUpdateLectureMemoFlag = true
      const lecture = this.studentInfo.lectureInfo.find(
        (result) => result.id === lectureId
      )
      const memo = lecture.memo.find((result) => result.id === memoId)
      this.lectureInfoMemo.contents = memo.contents
    },
    updateLectureMemo(lectureId, memoId) {
      const lecture = this.studentInfo.lectureInfo.find(
        (result) => result.id === lectureId
      )
      const memo = lecture.memo.find((result) => result.id === memoId)
      memo.contents = this.lectureInfoMemo.contents
      this.isUpdateLectureMemoFlag = false
    },
    // 수강 정보 - 메모 삭제
    onClickLectureMemoDelete(lectureId, memoId) {
      this.lectureId = lectureId
      this.lectureMemoId = memoId
      this.openDeleteLectureMemoModalDesc()
    },
    deleteLectureMemo() {
      const lecture = this.studentInfo.lectureInfo.find(
        (result) => result.id === this.lectureId
      )
      const memo = lecture.memo.find(
        (result) => result.id === this.lectureMemoId
      )
      const idx = lecture.memo.indexOf(memo)
      lecture.memo.splice(idx, 1)
      this.deleteLectureMemoModalDesc.open = false
    },
    // 납부일 설정
    onClickDueDatePicker(lectureId) {
      this.lectureId = lectureId
      this.datePickerModalDesc.open = true
    },
    // onClickDueDateConfirm() {
    //   const lecture = this.studentInfo.lectureInfo.find(
    //     (result) => result.id === this.lectureId
    //   )
    //   lecture.dueDate = this.selectedDate
    //   this.datePickerModalDesc.open = false
    // },
    // 납부일 위와 동일
    onClickSameDate(lectureId) {
      this.lectureId = lectureId
      const lecture = this.studentInfo.lectureInfo.find(
        (result) => result.id === this.lectureId
      )
      const idx = this.studentInfo.lectureInfo.indexOf(lecture)
      lecture.dueDate = this.studentInfo.lectureInfo[idx - 1].dueDate
    },

    onClickNewStudentMemoBtn() {
      this.isUpdateStudentMemoFlag = false
      this.studentMemo = this.deepCopy(this.initStudentMemo)
      if (!this.isNewStudentMemoFlag) {
        this.isNewStudentMemoFlag = true
      } else {
        this.isNewStudentMemoFlag = false
      }
    },

    onClickCancelBtn() {
      if (this.isNewStudentMemoFlag || this.isUpdateStudentMemoFlag) {
        this.isNewStudentMemoFlag = false
        this.isUpdateStudentMemoFlag = false
      }
    },

    // 메모 정렬
    selectMemoRange() {
      if (this.memoRange) {
        this.memoRange = false
      } else {
        this.memoRange = true
      }
    },
    // 출결
    // 달력 날짜 설정
    onChangeDate({ start, end }) {
      const setDate = (date) =>
        `${date?.getFullYear()}.${date?.getMonth() + 1}.${date?.getDate()}`
      console.log(setDate(start), setDate(end))
      this.dateRange.start = setDate(start)
      this.dateRange.end = setDate(end)
      this.isRangeCalendar = false
    },
    selectAttendanceLecture(idx) {
      this.isLectureTitleIdx = idx + 1
    },
    // 학습리포트
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
    onClickDeleteFilterTag(idx) {
      this.filterTag.splice(idx, 1)
    },
    changeReportSearchInput({ target: { value, id } }) {
      this.searchTextList[id] = value
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

    // [pagination] 숫자로 페이징
    onClickPagination(number) {
      this.currentPage = number
    },

    // [pagination] 방향으로 페이징
    paginationDirection(direction) {
      const current = this.currentPage
      if (direction === 'plus') {
        if (current < this.endPageNumber) {
          this.currentPage += 1
        }
      } else if (current > 1) {
        this.currentPage -= 1
      }
    },

    // 메모 [pagination] 숫자로 페이징
    onClickMemoPagination(number) {
      this.memoCurrentPage = number
    },

    // 메모 [pagination] 방향으로 페이징
    memoPaginationDirection(direction) {
      const current = this.memoCurrentPage
      if (direction === 'plus') {
        if (current < this.memoEndPageNumber) {
          this.memoCurrentPage += 1
        }
      } else if (current > 1) {
        this.memoCurrentPage -= 1
      }
    },
  },
}
</script>
<style scoped></style>
