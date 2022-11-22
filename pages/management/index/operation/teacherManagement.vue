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
          :teacherList="searchList"
          :statusFlag="statusFlag"
          :statusTrue="statusTrue"
          :statusFalse="statusFalse"
          :allCheckBoxFlag="allCheckBoxFlag"
          @click-status="onClickStatusFilter"
          @delete="deleteTeacher"
          @click-detail="openTeacherInfoModalDesc"
          @click-register="openRegisterTeacherModalDesc"
          @select-teacher="onClickCheckBox"
          @checked-all="selectAll"
          @change-input="onChangeInput"
          @search-teacher="searchTeacher"
        />
      </div>
    </div>
    <!-- 선생님 등록 -->
    <!-- <RegisterTeacherModal /> -->
    <TeacherInfoModal
      title="선생님 등록"
      :open="registerTeacherModal.open"
      :register="registerTeacherModal.open"
      :teacherInfo="newTeacherInfo"
      :nickNameCheck="newNickNameCheck"
      @close="onCloseRegisterTeacherModalDesc"
      @click-profile="openUploadNewTeacherImgModalDesc"
      @click-cwimg="openUploadNewTeacherCWImgModalDesc"
      @change-input="onChangeUpdateInput"
      @click-birthday="openDatePickerModalDesc"
      @click-gender="onClickGenderBtn"
      @select-position="selectPosition"
      @click-save="onClickSaveBtn"
    />
    <!-- 선생님 등록 - 프로필 이미지 등록1 -->
    <UploadTeacherImg
      :open="uploadNewTeacherImgModalDesc.open"
      :teacherInfo="newTeacherInfo"
      :uploadImageFile="uploadImageFile"
      :register="registerTeacherModal.open"
      @select-file="onFileSelected"
      @click-upload="onClickInputButton"
      @close="onCloseUploadNewTeacherImgModalDesc"
    />

    <!-- 선생님 등록 - CW 이미지 등록1 -->
    <UploadTeacherCWImg
      :open="uploadNewTeacherCWImgModalDesc.open"
      :teacherInfo="newTeacherInfo"
      :uploadImageFile="uploadImageFile"
      :register="registerTeacherModal.open"
      @select-file="onFileSelected"
      @click-upload="onClickInputButton"
      @close="onCloseUploadNewTeacherCWImgModalDesc"
    />

    <!-- 선생님 상세 -->
    <TeacherInfoModal
      title="선생님 상세정보"
      :open="teacherInfoModalDesc.open"
      :teacherInfo="teacherInfo"
      :nickNameCheck="nickNameCheck"
      @close="onCloseTeacherInfoModalDesc"
      @click-profile="openUploadTeacherImgModalDesc"
      @click-cwimg="openUploadTeacherCWImgModalDesc"
      @change-input="onChangeUpdateInput"
      @click-birthday="openDatePickerModalDesc"
      @click-gender="onClickGenderBtn"
      @select-position="selectPosition"
      @click-save="onClickSaveBtn"
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
    <UploadTeacherImg
      :open="uploadTeacherImgModalDesc.open"
      :teacherInfo="teacherInfo"
      :uploadImageFile="uploadImageFile"
      :register="registerTeacherModal.open"
      @select-file="onFileSelected"
      @click-upload="onClickInputButton"
      @close="onCloseUploadTeacherImgModalDesc"
    />

    <!-- 팝업 M2- 내정보 수정 - CW 이미지 등록1 -->
    <UploadTeacherCWImg
      :open="uploadTeacherCWImgModalDesc.open"
      :teacherInfo="teacherInfo"
      :uploadImageFile="uploadImageFile"
      :register="registerTeacherModal.open"
      @select-file="onFileSelected"
      @click-upload="onClickInputButton"
      @close="onCloseUploadTeacherCWImgModalDesc"
    />

    <!-- 팝업 S2-비밀번호초기화 -->
    <ResetPasswordModal @reset="onClickResetBtn" />

    <!-- 팝업 S2-선생님수 초과 알림 팝업창 -->
    <TeacherCountAlertModal />

    <!-- 설명 모달 -->
    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />
    <!-- 등록 확인 모달 -->
    <ModalDesc
      :open="registerConfirmModalDesc.open"
      :title="registerConfirmModalDesc.title"
      :desc="registerConfirmModalDesc.desc"
      @close="onCloseRegisterConfirmModalDesc"
    />
    <!-- 삭제 모달 -->
    <DeleteModal
      :open="deleteModalDesc.open"
      :title="deleteModalDesc.title"
      @close="onCloseDeleteModalDesc"
    />

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
// import RegisterTeacherModal from '@/components/common/modal/operation/RegisterTeacherModal.vue'
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
    // RegisterTeacherModal,
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
      newTeacherInfo: {
        id: 0,
        name: '',
        nickname: '',
        account: '',
        subject: '',
        group: '',
        phone: '',
        status: false,
        gender: 0,
        educationCode: 123456,
        email: '',
        birthday: '',
        identity: '',
        position: '교육기관장',
        profile_image: '',
        profile_cw_image: '',
      },
      teacherInfo: {
        id: 0,
        name: '김지원',
        nickname: '지원쓰',
        account: 'wldnjs93',
        subject: '수학',
        group: '초등, 중등',
        phone: '010-1234-1234',
        status: true,
        gender: 0,
        educationCode: 123456,
        email: 'wldnjs@naver.com',
        birthday: '2022-11-15',
        identity: '',
        position: '교육기관장',
        profile_image: require('@/assets/images/mypage/profile1.png'),
        profile_cw_image: require('@/assets/images/mypage/cwprofile1.png'),
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
          status: true,
        },
        {
          id: 4,
          name: '전현무',
          nickname: '털쓰',
          account: 'wldnjs93',
          subject: '수학',
          group: '초등, 중등',
          phone: '010-1234-1234',
          status: true,
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
        open: false,
      },
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      registerConfirmModalDesc: {
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
      registerTeacherModal: {
        open: false,
      },
      uploadTeacherImgModalDesc: {
        open: false,
      },
      uploadTeacherCWImgModalDesc: {
        open: false,
      },
      uploadNewTeacherImgModalDesc: {
        open: false,
      },
      uploadNewTeacherCWImgModalDesc: {
        open: false,
      },
      // 목록
      searchFlag: 0,
      statusFlag: 0,
      sortFlag: 0,
      statusTrue: 0,
      statusFalse: 0,
      searchText: '',
      searchList: [],

      // 선생님 상세/수정
      newNickNameCheck: false,
      nickNameCheck: false,
      birthday: '',
      uploadImageFile: '',
      // 선생님 삭제
      deleteIdxList: [],
      allCheckBoxFlag: false,
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
    this.searchList = trueArray
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
      this.registerConfirmModalDesc.open = false
    },
    openRegisterConfirmModalDesc(tit, msg) {
      this.registerConfirmModalDesc = {
        open: true,
        title: tit,
        desc: msg,
      }
    },
    onCloseRegisterConfirmModalDesc() {
      this.registerConfirmModalDesc.open = false
      this.registerTeacherModal.open = false
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
    openRegisterTeacherModalDesc() {
      this.registerTeacherModal.open = true
    },
    onCloseRegisterTeacherModalDesc() {
      this.registerTeacherModal.open = false
    },
    openTeacherInfoModalDesc() {
      this.teacherInfoModalDesc.open = true
    },
    onCloseTeacherInfoModalDesc() {
      this.teacherInfoModalDesc.open = false
    },
    openUploadTeacherImgModalDesc() {
      this.uploadTeacherImgModalDesc.open = true
    },
    onCloseUploadTeacherImgModalDesc() {
      this.uploadTeacherImgModalDesc.open = false
    },
    openUploadTeacherCWImgModalDesc() {
      this.uploadTeacherCWImgModalDesc.open = true
    },
    onCloseUploadTeacherCWImgModalDesc() {
      this.uploadTeacherCWImgModalDesc.open = false
    },
    openUploadNewTeacherImgModalDesc() {
      this.uploadNewTeacherImgModalDesc.open = true
    },
    onCloseUploadNewTeacherImgModalDesc() {
      this.uploadNewTeacherImgModalDesc.open = false
    },
    openUploadNewTeacherCWImgModalDesc() {
      this.uploadNewTeacherCWImgModalDesc.open = true
    },
    onCloseUploadNewTeacherCWImgModalDesc() {
      this.uploadNewTeacherCWImgModalDesc.open = false
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
    selectAll({ target: { checked } }) {
      const checkboxes = document.getElementsByName('chk')
      if (checked) {
        this.allCheckBoxFlag = true
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = true
          this.deleteIdxList.push(checkboxes[i].id)
        }
        console.log(this.deleteIdxList)
      } else {
        this.allCheckBoxFlag = false
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = false
          this.deleteIdxList.pop()
        }
        console.log(this.deleteIdxList)
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
    // 정보 수정
    onChangeUpdateInput({ target: { value, id, checked } }) {
      console.log(checked)
      if (this.registerTeacherModal.open) {
        this.newTeacherInfo[id] = value
        if (checked) {
          this.newTeacherInfo.nickname = this.newTeacherInfo.name
          this.newNickNameCheck = true
        }
        if (this.newTeacherInfo.nickname !== this.newTeacherInfo.name) {
          this.newNickNameCheck = false
        } else {
          this.newNickNameCheck = true
        }
        if (id === 'phone') {
          this.newTeacherInfo[id] = value
            .replace(/[^0-9]/g, '')
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
            .replace(/(-{1,2})$/g, '')
            .replace(/ /g, '')
            .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
        }
      } else {
        this.teacherInfo[id] = value
        if (checked) {
          console.log(checked)
          this.teacherInfo.nickname = this.teacherInfo.name
          this.nickNameCheck = true
        }
        if (this.teacherInfo.nickname !== this.teacherInfo.name) {
          this.nickNameCheck = false
        } else {
          this.nickNameCheck = true
        }
        if (id === 'phone') {
          this.teacherInfo[id] = value
            .replace(/[^0-9]/g, '')
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
            .replace(/(-{1,2})$/g, '')
            .replace(/ /g, '')
            .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
        }
      }
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
    // 생일 수정
    selectBirthday(e) {
      this.birthday = e.id
    },
    onClickBirthdayConfirm() {
      if (this.registerTeacherModal.open) {
        this.newTeacherInfo.birthday = this.birthday
      } else {
        this.teacherInfo.birthday = this.birthday
      }
      this.datePickerModalDesc.open = false
    },
    // 성별 수정
    onClickGenderBtn() {
      if (this.registerTeacherModal.open) {
        if (this.newTeacherInfo.gender === 0) {
          this.newTeacherInfo.gender = 1
        } else {
          this.newTeacherInfo.gender = 0
        }
      } else if (this.teacherInfo.gender === 0) {
        this.teacherInfo.gender = 1
      } else {
        this.teacherInfo.gender = 0
      }
    },
    // 상태 변경
    onClickStatusBtn() {
      if (this.registerTeacherModal.open) {
        if (this.newTeacherInfo.status) {
          this.newTeacherInfo.status = false
        } else {
          this.newTeacherInfo.status = true
        }
      } else if (this.teacherInfo.status) {
        this.teacherInfo.status = false
      } else {
        this.teacherInfo.status = true
      }
    },
    // 직위 변경
    selectPosition() {
      if (this.registerTeacherModal.open) {
        if (this.newTeacherInfo.position === '교육기관장') {
          this.newTeacherInfo.position = '선생님'
        } else {
          this.newTeacherInfo.position = '교육기관장'
        }
      } else if (this.teacherInfo.position === '교육기관장') {
        this.teacherInfo.position = '선생님'
      } else {
        this.teacherInfo.position = '교육기관장'
      }
    },
    // 비밀번호 초기화
    onClickResetBtn() {
      this.openModalDesc('비밀번호 초기화', '비밀번호가 초기화되었습니다.')
    },
    // 수정된 정보 저장하기
    onClickSaveBtn() {
      if (this.registerTeacherModal.open) {
        this.openRegisterConfirmModalDesc(
          '선생님 등록',
          '선생님이 등록되었습니다.'
        )
      } else {
        this.openModalDesc(
          '선생님 정보 수정',
          '선생님 상세 정보가 수정되었습니다.'
        )
      }
    },

    // 필터링
    onClickStatusFilter() {
      if (this.statusFlag === 0) {
        this.statusFlag = 1
        const result = this.teacherList.filter((elem) => {
          return !elem.status
        })
        this.searchList = result
      } else {
        this.statusFlag = 0
        const result = this.teacherList.filter((elem) => {
          return elem.status
        })
        this.searchList = result
      }
    },
    onChangeInput({ target: { value } }) {
      this.searchText = value
      console.log(value)
    },
    searchTeacher() {
      if (this.searchText.length < 2) {
        this.openModalDesc('선생님 검색', '검색어는 2글자 이상 입력해주세요.')
        return false
      }

      if (this.statusFlag === 0) {
        const result = this.teacherList.filter((elem) => {
          return elem.name.includes(this.searchText) && elem.status
        })
        if (result.length === 0) {
          this.openModalDesc('선생님 검색', '일치하는 선생님이 없습니다.')
          return false
        } else {
          this.searchList = result
        }
      } else {
        const result = this.teacherList.filter((elem) => {
          return elem.name.includes(this.searchText) && !elem.status
        })
        if (result.length === 0) {
          this.openModalDesc('선생님 검색', '일치하는 선생님이 없습니다.')
          return false
        } else {
          this.searchList = result
        }
      }
    },
  },
}
</script>
<style scoped></style>
