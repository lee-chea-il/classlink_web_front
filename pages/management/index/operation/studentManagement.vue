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
          url4="/management/operation/exammanagement"
        />
        <div class="tab-content depth03 ac_manage_std">
          <StudentListBox
            :studentList="studentList"
            @click-detail="openStudentInfoModalDesc"
          />
        </div>
      </div>
    </div>
    <!-- //container -->

    <!-- 모달 팝업 ------------------------------------->

    <!-- 학생 일괄 등록1 - 팝업 M2 -->
    <BatchRegistrationModal />

    <!-- 학생 일괄 등록2(성공) - 팝업 S2 -->
    <!-- [개발참조] 학생 등록을 성공한 경우 나오는 팝업 -->
    <BatchSuccessModal />

    <!-- 학생 일괄 등록3(실패) - 팝업 S2 -->
    <!-- [개발참조] 학생 등록을 실패한 경우 나오는 팝업 -->
    <BatchFailedModal />

    <!-- 학생 개별 등록/학생 상세 정보 -->
    <StudentInfoModal
      :studentInfo="studentInfo"
      :open="studentInfoModalDesc.open"
      @close="onCloseStudentInfoModalDesc"
      @change-input="onChangeUpdateInput"
    />

    <!-- 일촌등록 - 팝업 M2 -->
    <!-- [개발참조]: 모달에서 띄워지는 모달 class "double" 추가 -->
    <RegisterFamilyModal />

    <!-- 학생재배정 - 팝업 M1 -->
    <!-- [개발참조]: 모달에서 띄워지는 모달 class "double" 추가 -->
    <ResetAssignmentModal />

    <!-- 수강정보-팝업 M1 -->
    <LectureInfoModal />

    <!-- 출결-팝업 L -->
    <StudentAttendanceModal />

    <!-- 메모-팝업 L -->
    <StudentMemoModal />

    <!-- [개발참조] : 저장안함은 저장안하고 메모팝업창-L을 닫기 / 취소는 팝업창-S 만 닫기 (메모모달창 모두 닫기 스크립트 찹조)  -->
    <!-- 메모 저장 - 팝업 S2 -->
    <SaveMemoModal />

    <!-- 학습리포트 : 필터 -팝업 L -->
    <ReportFilterModal />

    <!-- 학습리포트 : 리포트열람 -팝업 L -->
    <ReportDetailModal />

    <!-- 설명 모달 -->
    <ModalDesc />

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

    <!-- 기본 모달로 대체 예정 -->
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
  },
  data() {
    return {
      studentInfo: {
        id: 1,
        identity: '학생',
        status: '재원',
        grade: '중1',
        grade_type: 0,
        name: '김유진',
        nickname: '유진쓰',
        family: '홍길순, 홍길삼, 홍길사',
        account: 'rlfehd1004',
        phone: '010-1234-1234',
        parent_phone: '010-1234-1111',
        gender: 0,
        leave: false,
        school: '스노우',
        attendance_num: 12345,
        created_at: '2022.11.22',
        lecture_date: '2022.11.30',
        birthday: '2022.11.01',
        email: 'test@naver.com',
        profile_image: require('@/assets/images/mypage/profile1.png'),
        lectureInfo: [],
      },
      studentList: [
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
        },
        {
          id: 1,
          identity: '학생',
          status: '재원',
          grade: '중1',
          name: '김유진',
          nickname: '유진쓰',
          family: '홍길순, 홍길삼, 홍길사',
          account: 'rlfehd1004',
          phone: '010-1234-1234',
          parent_phone: '010-1234-1111',
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
        },
        {
          id: 3,
          identity: '학부모&학생',
          status: '퇴원',
          grade: '중1',
          name: '김단우',
          nickname: '단우쓰',
          family: '홍길순, 홍길삼, 홍길사',
          account: 'rlfehd1004',
          phone: '010-1234-1234',
          parent_phone: '010-1234-1111',
        },
        {
          id: 4,
          identity: '학생',
          status: '재원',
          grade: '중1',
          name: '박세익',
          nickname: '세익쓰',
          family: '홍길순, 홍길삼, 홍길사',
          account: 'rlfehd1004',
          phone: '010-1234-1234',
          parent_phone: '010-1234-1111',
        },
      ],
      // 모달
      studentInfoModalDesc: {
        open: true,
      },
    }
  },
  methods: {
    // 모달이벤트
    openStudentInfoModalDesc() {
      this.studentInfoModalDesc.open = true
    },
    onCloseStudentInfoModalDesc() {
      this.studentInfoModalDesc.open = false
    },

    // 학생 정보 등록/수정
    onChangeUpdateInput({ target: { value, id, checked } }) {
      this.studentInfo[id] = value
      if (checked) {
        this.studentInfo.nickname = this.studentInfo.name
        this.studentInfo = true
      }
      if (this.studentInfo.nickname !== this.studentInfo.name) {
        this.NickNameCheck = false
      } else {
        this.NickNameCheck = true
      }
      if (id === 'phone') {
        this.studentInfo[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(-{1,2})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
    },
  },
}
</script>
<style scoped></style>
