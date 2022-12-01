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
            @click-report="openReportFilterModal"
            @click-attendance="openStudentAttendanceModal"
            @click-memo="openStudentMemoModalDesc"
            @click-lectureInfo="openLectureInfoModalDesc"
            @click-more="onClickExpandBtn"
            @search-student="searchStudent"
            @change-input="changeSearchInput"
            @click-detail="openStudentInfoModalDesc"
            @click-addStudent="openNewStudentInfoModalDesc"
            @click-batchStudent="openBatchRegistrationModalDesc"
            @select-identity="selectIdentityFlag"
            @select-range="selectRangeFlag"
            @select-status="selectStatusFlag"
            @select-studentStatus="selectStudentStatusFlag"
          />
        </div>
      </div>
    </div>
    <!-- //container -->

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
      @close="onCloseNewStudentInfoModalDesc"
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
    />

    <!-- 학생 개별 등록/학생 상세 정보 -->
    <StudentInfoModal
      :studentInfo="studentInfo"
      :open="studentInfoModalDesc.open"
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
      @add-family="addFamily"
    />

    <!-- 학생재배정 - 팝업 M1 -->
    <!-- [개발참조]: 모달에서 띄워지는 모달 class "double" 추가 -->
    <ResetAssignmentModal
      :classList="classList"
      :studentInfo="studentInfo"
      :resetClassList="resetClassList"
      @check-class="checkResetClass"
      @reset-check="resetAllCheck"
    />

    <!-- 생일 날짜 선택 모달 -->
    <DatePickerModal
      :open="datePickerModalDesc.open"
      :date="studentInfo.birthday"
      @close="onCloseDatePickerModalDesc"
      @select-date="selectDay"
      @confirm="onClickBirthdayConfirm"
    />

    <!-- 수강일 선택 모달 -->
    <DatePickerModal
      :open="datePickerLectureDateModalDesc.open"
      :date="studentInfo.lecture_date"
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
    <ResetPasswordModal @reset="onClickResetBtn" />

    <!-- 수강정보-팝업 M1 -->
    <LectureInfoModal
      :open="lectureInfoModalDesc.open"
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
    <DatePickerModal
      :open="datePickerModalDesc.open"
      @close="onCloseDatePickerModalDesc"
      @select-date="selectDay"
      @confirm="onClickDueDateConfirm"
    />

    <!-- 메모-팝업 L -->
    <StudentMemoModal
      :open="studentMemoModalDesc.open"
      :memoList="studentInfo.memo"
      :isNewStudentMemoFlag="isNewStudentMemoFlag"
      :studentMemoId="studentMemoId"
      :studentMemo="studentMemo"
      :isStudentMemoMoreFlag="isStudentMemoMoreFlag"
      :isUpdateStudentMemoFlag="isUpdateStudentMemoFlag"
      :memoRangeList="memoRangeList"
      :isMemoRangeFlag="isMemoRangeFlag"
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
      @close="onCloseReportDetailModal"
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
import StudentListBox from '@/components/operation/StudentListBox.vue'
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
  },
  data() {
    return {
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
        memo: [],
      },
      initStudent: {},
      studentList: [
        {
          id: 0,
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
              account: 'rlfehd1004',
              phone: '010-1234-1234',
              parent_phone: '010-1234-1111',
              gender: '남',
            },
            {
              id: 2,
              identity: '학부모',
              status: '재원',
              grade: '중1',
              name: '이성국',
              nickname: '성국쓰',
              family: '홍길순, 홍길삼, 홍길사',
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
            {
              id: 0,
              lectureTitle: '영어리딩심화1',
              class: '심화 A반',
              dueDate: '2022-11-28',
              lectureDate: '2022-11-29',
              memo: [
                {
                  id: 0,
                  contents: '안녕하세요 메모입니다.',
                  updatedAt: '2022-08-05',
                  writer: '서유진',
                },
                {
                  id: 1,
                  contents: '안녕하세요 메모일까요.',
                  updatedAt: '2022-08-05',
                  writer: '서유진',
                },
              ],
            },
            {
              id: 1,
              lectureTitle: '영어리딩심화2',
              class: '심화 B반',
              dueDate: '2022-11-28',
              lectureDate: '2022-11-29',
              memo: [],
            },
            {
              id: 2,
              lectureTitle: '영어리딩심화3',
              class: '심화 C반',
              dueDate: '2022-11-28',
              lectureDate: '2022-11-29',
              memo: [],
            },
          ],
          memo: [
            {
              id: 11,
              createdAt: '2022.08.17 PM 09:00',
              consultant: '김유진',
              contents: '상담내용입니다.',
            },
            {
              id: 12,
              createdAt: '2022.08.17 PM 09:00',
              consultant: '이성국',
              contents: '학생메모입니다.',
            },
            {
              id: 13,
              createdAt: '2022.08.17 PM 09:00',
              consultant: '유잔',
              contents: '학생의 메모',
            },
          ],
        },
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
              account: 'rlfehd1004',
              phone: '010-1234-1234',
              parent_phone: '010-1234-1111',
              gender: '남',
            },
            {
              id: 2,
              identity: '학부모',
              status: '재원',
              grade: '중1',
              name: '이성국',
              nickname: '성국쓰',
              family: '홍길순, 홍길삼, 홍길사',
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
            {
              id: 4,
              lectureTitle: '영어리딩심화4',
              class: '심화 D반',
              dueDate: '2022-11-28',
              lectureDate: '2022-11-29',
              memo: [
                {
                  id: 3,
                  contents: '안녕하세요 메모일까요.',
                  updatedAt: '2022-08-05',
                  writer: '서유진',
                },
              ],
            },
            {
              id: 5,
              lectureTitle: '영어리딩심화5',
              class: '심화 E반',
              dueDate: '2022-11-28',
              lectureDate: '2022-11-29',
              memo: [
                {
                  id: 4,
                  contents: '안녕하세요 메모일까요.',
                  updatedAt: '2022-08-05',
                  writer: '서유진',
                },
              ],
            },
            {
              id: 6,
              lectureTitle: '영어리딩심화6',
              class: '심화 F반',
              dueDate: '2022-11-28',
              lectureDate: '2022-11-29',
              memo: [],
            },
          ],
          memo: [
            {
              id: 14,
              createdAt: '',
              consultant: '이성국 ',
              contents: '상담내용입니까??.',
            },
            {
              id: 15,
              createdAt: '',
              consultant: '이성국',
              contents: '학생메모입니다요',
            },
            {
              id: 16,
              createdAt: '',
              consultant: '성국',
              contents: '학생의 메모',
            },
          ],
        },
        {
          id: 2,
          identity: ['학생'],
          status: '재원',
          grade: '중1',
          name: '이성국',
          nickname: '성국쓰',
          class: [],
          family: [],
          account: 'rlfehd1004',
          phone: '010-1234-1234',
          parent_phone: '010-1234-1111',
          gender: '남',
        },
        {
          id: 3,
          identity: ['학생'],
          status: '퇴원',
          grade: '중1',
          name: '김단우',
          class: [],
          nickname: '단우쓰',
          family: [],
          account: 'rlfehd1004',
          phone: '010-1234-1234',
          parent_phone: '010-1234-1111',
          gender: '남',
        },
        {
          id: 4,
          identity: ['학생'],
          status: '재원',
          grade: '중1',
          name: '박세익',
          class: [],
          nickname: '세익쓰',
          family: [],
          account: 'rlfehd1004',
          phone: '010-1234-1234',
          parent_phone: '010-1234-1111',
          gender: '여',
        },
      ],
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
      isRangeFlag: 0,
      isIdentityFlag: 0,
      isStatusFlag: 0,
      isStudentStatusFlag: 0,
      rangeList: [
        { id: 0, title: '최신 등록순' },
        { id: 1, title: '이름 오름차순' },
        { id: 2, title: '이름 내림차순' },
        { id: 3, title: '학년 오름차순' },
        { id: 4, title: '학년 내림차순' },
      ],
      identityList: [
        { id: 0, title: '학생' },
        { id: 1, title: '학부모' },
        { id: 2, title: '학부모&학생' },
      ],
      statusList: [
        { id: 0, title: '활성화' },
        { id: 1, title: '비활성화' },
      ],
      studentStatusList: [
        { id: 0, title: '재원' },
        { id: 1, title: '퇴원' },
      ],
      memoRangeList: [
        { id: 0, title: '최신 등록순' },
        { id: 1, title: '오래된 순' },
      ],
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
      // 학생 일괄 등록
      uploadFileName: null,
      // 학생 이름 검색
      searchStudentText: '',
      // 더보기
      expandIdx: [],
      // 수강 정보 메모
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
      studentMemo: {
        id: 0,
        createdAt: '2022.11.29',
        consultant: '본인 이름',
        contents: '',
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
    }
  },
  watch: {
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
  methods: {
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
    openStudentInfoModalDesc(id) {
      const student = this.studentList.find((result) => result.id === id)
      console.log(student)
      Object.assign(this.studentInfo, student)
      this.studentInfoModalDesc.open = true
    },
    onCloseStudentInfoModalDesc() {
      Object.assign(this.studentInfo, this.initStudent)
      this.studentInfoModalDesc.open = false
    },
    // 학생 개별 등록
    openNewStudentInfoModalDesc() {
      Object.assign(this.studentInfo, this.initStudent)
      this.newStudentInfoModalDesc.open = true
    },
    onCloseNewStudentInfoModalDesc() {
      this.newStudentInfoModalDesc.open = false
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
    openLectureInfoModalDesc(id) {
      const student = this.studentList.find((result) => result.id === id)
      Object.assign(this.studentInfo, student)
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
    openStudentMemoModalDesc(id) {
      const student = this.studentList.find((result) => result.id === id)
      Object.assign(this.studentInfo, student)
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
      console.log(this.bgList)
      this.onCloseReportFilterModal()
      this.reportDetailModalDesc.open = true
    },
    onCloseReportDetailModal() {
      this.reportDetailModalDesc.open = false
    },
    // 깊은 복사
    deepCopy(data) {
      return JSON.parse(JSON.stringify(data))
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
    // 생일 수정
    selectDay(e) {
      this.selectedDate = e.id
    },
    onClickBirthdayConfirm() {
      this.studentInfo.birthday = this.selectedDate
      this.datePickerModalDesc.open = false
    },
    // 수강일 수정
    selectLectureDate(e) {
      this.lectureDate = e.id
    },
    onClickLectureDateConfirm() {
      this.studentInfo.lecture_date = this.lectureDate
      this.datePickerLectureDateModalDesc.open = false
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
    selectGrade(grade) {
      this.studentInfo.grade = grade
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
    checkResetClass({ target: { id, checked } }) {
      // 반 재배정
      if (checked) {
        this.studentInfo.class.push(id)
      } else {
        for (let i = 0; i < this.resetClassList.length; i++) {
          if (this.studentInfo.class[i] === id) {
            this.studentInfo.class.splice(i, 1)
          }
        }
      }
    },
    resetAllCheck() {
      this.studentInfo.class = []
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
    // 비밀번호 초기화
    onClickResetBtn() {
      this.openModalDesc('비밀번호 초기화', '비밀번호가 초기화되었습니다.')
    },
    // 일촌
    onChangeFamilySearchInput({ target: { value } }) {
      this.familySearchText = value
    },
    resetFamilySearchInput() {
      this.familySearchText = ''
    },
    searchFamily() {
      if (this.familySearchText.length < 2) {
        this.openModalDesc('일촌 검색', '검색어는 2글자 이상 입력해주세요.')
        return false
      }
      const result = this.studentList.filter((elem) => {
        return (
          elem.name.includes(this.familySearchText) ||
          elem.account.includes(this.familySearchText)
        )
      })
      if (result.length === 0) {
        this.openModalDesc('일촌 검색', '일치하는 학생이 없습니다.')
        return false
      } else {
        this.familySearchList = result
        console.log(this.familySearchList)
      }
    },
    checkSelectedFamily({ target: { id, checked } }) {
      console.log(id, checked)
      if (checked) {
        this.registerFamilyList.push(id)
      } else {
        for (let i = 0; i < this.registerFamilyList.length; i++) {
          if (this.registerFamilyList[i] === id) {
            this.registerFamilyList.splice(i, 1)
          }
        }
      }
      console.log(this.registerFamilyList)
    },
    addFamily() {
      // for (let i = 0; i < this.registerFamilyList.length; i++) {
      const result = this.studentList.filter(
        (elem, idx) => elem.id === Number(this.registerFamilyList[idx])
      )
      console.log(result)
      const newArray = [...this.studentInfo.family, ...result]

      this.studentInfo.family = Array.from(new Set(newArray))
      // }
      console.log(this.studentInfo.family)
    },
    onClickFamilyDeleteBtn(id) {
      this.deleteFamilyId = id
      this.openDeleteSimpleModalDesc('일촌 ID를 삭제하시겠습니까?')
    },
    deleteFamily() {
      for (let i = 0; i < this.studentInfo.family.length; i++) {
        if (this.studentInfo.family[i].id === this.deleteFamilyId) {
          this.studentInfo.family.splice(i, 1)
        }
      }
      this.deleteSimpleModalDesc.open = false
    },
    onClickSearchBtn() {
      const btn = document.getElementById('modalFamilySearch')
      btn.click()
      this.searchFamily()
    },
    // 학생 일괄 등록
    onClickInputFileButton() {
      const inputBtn = document.getElementById('upload-file')
      inputBtn.click()
    },
    onXlsxFileSelected({ target }) {
      this.uploadFileName = target.files[0].name
    },
    // 정렬 필터링
    selectRangeFlag(idx) {
      this.isRangeFlag = idx
    },
    selectIdentityFlag(idx) {
      this.isIdentityFlag = idx
    },
    selectStatusFlag(idx) {
      this.isStatusFlag = idx
    },
    selectStudentStatusFlag(idx) {
      this.isStudentStatusFlag = idx
    },
    // 학생 이름 검색
    changeSearchInput({ target: { value } }) {
      this.searchStudentText = value
    },
    searchStudent() {
      const result = this.studentList.filter((elem) => {
        return elem.name.includes(this.searchStudentText)
      })
      this.studentList = result
    },
    onClickExpandBtn(idx) {
      if (this.expandIdx.includes(idx)) {
        this.expandIdx.pop()
      } else {
        this.expandIdx.push(idx)
      }
      if (this.expandIdx.length === 2) {
        this.expandIdx.splice(0, 1)
      }
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
    onClickDueDateConfirm() {
      const lecture = this.studentInfo.lectureInfo.find(
        (result) => result.id === this.lectureId
      )
      lecture.dueDate = this.selectedDate
      this.datePickerModalDesc.open = false
    },
    // 납부일 위와 동일
    onClickSameDate(lectureId) {
      this.lectureId = lectureId
      const lecture = this.studentInfo.lectureInfo.find(
        (result) => result.id === this.lectureId
      )
      const idx = this.studentInfo.lectureInfo.indexOf(lecture)
      lecture.dueDate = this.studentInfo.lectureInfo[idx - 1].dueDate
    },

    // 학생 메모 - 새 메모
    changeStudentMemoInput({ target: { value } }) {
      this.studentMemo.contents = value
    },
    onClickNewStudentMemoBtn() {
      this.studentMemo = this.deepCopy(this.initStudentMemo)
      if (!this.isNewStudentMemoFlag) {
        this.isNewStudentMemoFlag = true
      } else {
        this.isNewStudentMemoFlag = false
      }
    },
    addStudentMemo() {
      this.studentInfo.memo.push(this.studentMemo)
      this.isNewStudentMemoFlag = false
    },
    onClickCancelBtn() {
      if (this.isNewStudentMemoFlag || this.isUpdateStudentMemoFlag) {
        this.isNewStudentMemoFlag = false
        this.isUpdateStudentMemoFlag = false
      }
    },
    // 학생 메모 - 더보기
    onClickMoreBtn(memoId) {
      if (this.isStudentMemoMoreFlag && this.studentMemoId === memoId) {
        this.isStudentMemoMoreFlag = false
        return false
      }
      this.studentMemoId = memoId
      this.isStudentMemoMoreFlag = true
      this.isUpdateStudentMemoFlag = false
    },
    // 학생 메모 - 수정
    onClickUpdateStudentMemoBtn() {
      this.isUpdateStudentMemoFlag = true
      const memo = this.studentInfo.memo.find(
        (result) => result.id === this.studentMemoId
      )
      this.studentMemo.contents = memo.contents
    },
    updateStudentMemo() {
      const memo = this.studentInfo.memo.find(
        (result) => result.id === this.studentMemoId
      )
      memo.contents = this.studentMemo.contents
      this.isUpdateStudentMemoFlag = false
    },
    // 학생 메모 - 삭제
    deleteStudentMemo() {
      const memo = this.studentInfo.memo.find(
        (result) => result.id === this.studentMemoId
      )
      const idx = this.studentInfo.memo.indexOf(memo)
      this.studentInfo.memo.splice(idx, 1)
      this.deleteStudentMemoDesc.open = false
    },
    // 메모 정렬
    selectMemoRange(id) {
      this.isMemoRangeFlag = id
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
  },
}
</script>
<style scoped></style>
