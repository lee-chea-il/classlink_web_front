<template>
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
      <div class="tab-content depth03 ac_manage_tch">
        <TeacherListBox
          :teacherList="teacherList"
          :statusTrue="statusTrue"
          :statusFalse="statusFalse"
          @delete="deleteTeacher"
          @click-detail="openTeacherInfoModalDesc"
        />
      </div>
    </div>
    <!-- 선생님 등록 -->
    <RegisterTeacherModal />

    <!-- 선생님 상세 -->
    <TeacherInfoModal
      :open="teacherInfoModalDesc.open"
      :teacherInfo="teacherInfo"
      :nickNameCheck="nickNameCheck"
      @close="onCloseTeacherInfoModalDesc"
      @change-input="onChangeUpdateInput"
      @click-birthday="openDatePickerModalDesc"
      @click-gender="onClickGenderBtn"
    />

    <!-- 생일 날짜 선택 모달 -->
    <DatePickerModal
      :open="datePickerModalDesc.open"
      :teacherInfo="teacherInfo"
      @close="onCloseDatePickerModalDesc"
      @select-date="selectBirthday"
      @confirm="onClickBirthdayConfirm"
    />

    <!-- 팝업 M2- 내정보 수정 - 프로필 이미지 등록1 -->
    <UploadTeacherImg />

    <!-- 팝업 M2- 내정보 수정 - CW 이미지 등록1 -->
    <UploadTeacherCWImg />

    <!-- 팝업 S2-비밀번호초기화 -->
    <ResetPasswordModal />

    <!-- 팝업 S2-선생님수 초과 알림 팝업창 -->
    <TeacherCountAlertModal />

    <!-- 설명 모달 -->
    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />

    <!-- 삭제 모달 -->
    <DeleteModal />

    <!-- 팝업 M2- 내정보 수정 - 프로필 이미지 등록2-->
    <!-- <div
      id="modalMyinfo03"
      class="modal fade modal_myinfo03"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              프로필 이미지 등록
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
            <div class="explainType01">
              파일 업로드 후, 이미지를 자르고 '확인’을 클릭하세요. <br />
              업로드 가능한 이미지 파일 형식 : <span>png, jpg, jpeg</span>
              <br />
              자르기 영역은 정방형으로 설정됩니다.
            </div>
            <div class="btn_section">
              <button class="btn btn_crud_default btn_sec">이미지 교체</button>
              <button class="btn btn_crud_default btn_sec" data-dismiss="modal">
                자르기
              </button>
            </div>
            <div class="thumbnail">
              <div class="profile_photo">
                <span
                  style="
                    background-image: url(../images/sample_profile_photo.jpg);
                  "
                ></span>
              </div>
              <div class="outer1">
                <div class="box_set">
                  <button type="button" class="btn box1"></button>
                  <button type="button" class="btn box2"></button>
                  <button type="button" class="btn box3"></button>
                  <button type="button" class="btn box4"></button>
                  <button type="button" class="btn box5"></button>
                </div>
              </div>
            </div>
            <div class="edit_result">
              <div class="edit_title">편집 결과보기</div>
              <div class="outer2">
                <div class="profile_photo">
                  <span
                    style="
                      background-image: url(../images/sample_profile_photo.jpg);
                    "
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">저장</button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              취소
            </button>
          </div>
        </div>
      </div>
    </div> -->

    <!-- 팝업 M2- 내정보 수정 - CW 이미지 등록2-->
    <!-- <div
      id="modalMyinfo05"
      class="modal fade modal_myinfo05"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">CW 이미지 등록</h5>
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
            <div class="explainType01">
              파일 업로드 후, 이미지를 자르고 '확인’을 클릭하세요. <br />
              업로드 가능한 이미지 파일 형식 : <span>png, jpg, jpeg</span>
              <br />
              자르기 영역은 가로형으로 설정됩니다.
            </div>
            <div class="btn_section">
              <button class="btn btn_crud_default btn_sec">이미지 교체</button>
              <button class="btn btn_crud_default btn_sec" data-dismiss="modal">
                자르기
              </button>
            </div>
            <div class="thumbnail">
              <div class="outer0">
                <div class="sample_uplodeimg"></div>
              </div>
              <div class="outer1">
                <div class="box_set">
                  <button type="button" class="btn box1"></button>
                  <button type="button" class="btn box2"></button>
                  <button type="button" class="btn box3"></button>
                  <button type="button" class="btn box4"></button>
                  <button type="button" class="btn box5"></button>
                </div>
              </div>
            </div>
            <div class="edit_result">
              <div class="edit_title">편집 결과보기</div>
              <div class="outer2">
                <i class="icons_thumbnail"></i>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">저장</button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              취소
            </button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
  <!-- //container -->
</template>
<script>
import NavBox from '@/components/operation/NavBox.vue'
import TeacherListBox from '@/components/operation/TeacherListBox.vue'
import RegisterTeacherModal from '@/components/common/modal/operation/RegisterTeacherModal.vue'
import ResetPasswordModal from '@/components/common/modal/operation/ResetPasswordModal.vue'
import TeacherCountAlertModal from '@/components/common/modal/operation/TeacherCountAlertModal.vue'
import TeacherInfoModal from '@/components/common/modal/operation/TeacherInfoModal.vue'
import UploadTeacherImg from '@/components/common/modal/operation/UploadTeacherImg.vue'
import DatePickerModal from '@/components/common/modal/operation/DatePickerModal.vue'
import UploadTeacherCWImg from '@/components/common/modal/operation/UploadTeacherCWImg.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import DeleteModal from '@/components/lecturecourse/DeletePlanModal.vue'
export default {
  name: 'TeacherManagement',
  components: {
    NavBox,
    TeacherListBox,
    RegisterTeacherModal,
    ResetPasswordModal,
    TeacherCountAlertModal,
    UploadTeacherImg,
    UploadTeacherCWImg,
    TeacherInfoModal,
    DeleteModal,
    ModalDesc,
    DatePickerModal,
  },
  data() {
    return {
      teacherInfo: {
        id: 0,
        name: '김지원',
        nickname: '지원쓰',
        account: 'wldnjs93',
        subject: '수학',
        group: '초등, 중등',
        phone: '010-1234-1234',
        status: false,
        gender: 0,
        educationCode: 123456,
        email: 'wldnjs@naver.com',
        birthday: '2022-11-15',
        identity: '',
        position: '',
      },
      teacherList: [
        {
          id: 0,
          name: '김지원',
          nickname: '지원쓰',
          account: 'wldnjs93',
          subject: '수학',
          group: '초등, 중등',
          phone: '010-1234-1234',
          status: true,
        },
        {
          id: 1,
          name: '홍길동',
          nickname: '길동쓰',
          account: 'wldnjs93',
          subject: '수학',
          group: '초등, 중등',
          phone: '010-1234-1234',
          status: true,
        },
        {
          id: 2,
          name: '김유진',
          nickname: '유진쓰',
          account: 'wldnjs93',
          subject: '수학',
          group: '초등, 중등',
          phone: '010-1234-1234',
          status: true,
        },
        {
          id: 3,
          name: '김단우',
          nickname: '단우쓰',
          account: 'wldnjs93',
          subject: '수학',
          group: '초등, 중등',
          phone: '010-1234-1234',
          status: false,
        },
        {
          id: 4,
          name: '전현무',
          nickname: '털쓰',
          account: 'wldnjs93',
          subject: '수학',
          group: '초등, 중등',
          phone: '010-1234-1234',
          status: false,
        },
        {
          id: 5,
          name: '이은애',
          nickname: '은애쓰',
          account: 'wldnjs93',
          subject: '수학',
          group: '초등, 중등',
          phone: '010-1234-1234',
          status: false,
        },
        {
          id: 6,
          name: '이성국',
          nickname: '성국쓰',
          account: 'wldnjs93',
          subject: '수학',
          group: '초등, 중등',
          phone: '010-1234-1234',
          status: false,
        },
      ],
      // modal
      teacherInfoModalDesc: {
        open: true,
      },
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      deleteModalDesc: {
        open: false,
        title: '',
      },
      datePickerModalDesc: {
        open: false,
      },
      // 목록
      statusTrue: 0,
      statusFalse: 0,
      deleteIdxList: [],
      // 상세/수정
      nickNameCheck: false,
      birthday: '',
    }
  },
  created() {
    const trueArray = this.teacherList.filter((elem) => {
      return elem.status === true
    })
    const falseArray = this.teacherList.filter((elem) => {
      return elem.status === false
    })
    this.statusTrue = trueArray.length
    this.statusFalse = falseArray.length
  },
  methods: {
    // modal event
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
    openDeleteModalDesc(tit) {
      this.deleteModalDesc = {
        open: true,
        title: tit,
      }
    },
    onCloseDeleteModalDesc() {
      this.deleteModalDesc.open = false
    },
    openDatePickerModalDesc() {
      this.datePickerModalDesc.open = true
    },
    onCloseDatePickerModalDesc() {
      this.datePickerModalDesc.open = false
    },

    // 선생님 삭제
    onClickCheckBox({ target: { id, checked } }) {
      if (checked) {
        console.log(id)
        this.deleteIdxList.push(id)
      } else {
        this.allCheckBoxFlag = false
        for (let i = 0; i < this.deleteIdxList.length; i++) {
          if (this.deleteIdxList[i] === id) {
            this.deleteIdxList.splice(i, 1)
          }
        }
      }
    },
    deleteTeacher() {
      if (this.deleteIdxList.length === 0) {
        this.openModalDesc('선생님 삭제', '삭제할 선생님을 선택해주세요.')
        return false
      } else {
        console.log(this.deleteIdxList)
        this.openDeleteModalDesc('선생님')
      }
    },

    // 선생님 상세보기
    openTeacherInfoModalDesc() {
      this.teacherInfoModalDesc.open = true
    },
    onCloseTeacherInfoModalDesc() {
      this.teacherInfoModalDesc.open = false
    },
    // 정보 수정
    onChangeUpdateInput({ target: { value, id, checked } }) {
      this.nickNameCheck = false
      if (checked) {
        this.teacherInfo.nickname = this.teacherInfo.name
        this.nickNameCheck = true
      }
      this.teacherInfo[id] = value
      if (this.teacherInfo.nickname !== this.teacherInfo.name) {
        this.nickNameCheck = false
      } else {
        this.nickNameCheck = true
      }
    },
    // 생일 수정
    selectBirthday(e) {
      this.birthday = e.id
    },
    onClickBirthdayConfirm() {
      this.teacherInfo.birthday = this.birthday
      this.datePickerModalDesc.open = false
    },
    // 성별 수정
    onClickGenderBtn() {
      if (this.teacherInfo.gender === 0) {
        this.teacherInfo.gender = 1
      } else {
        this.teacherInfo.gender = 0
      }
    },
    // 상태 변경
    onClickStatusBtn(){
      if(this.teacherInfo.status){
      this.teacherInfo.status=false
      } else {
      this.teacherInfo.status=true
      }
    }
  },
}
</script>
<style scoped></style>
