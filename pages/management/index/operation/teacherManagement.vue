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
        url3="/management/operation/classmanagement"
        url4="/management/operation/exammanagement"
      />
      <div class="tab-content depth03 ac_manage_tch">
        <TeacherListBox
          :teacherList="teacherList"
          :stateFlag="stateFlag"
          :sortFlag="sortFlag"
          :stateTrue="stateTrue"
          :stateFalse="stateFalse"
          :allCheckBoxFlag="allCheckBoxFlag"
          @click-state="onClickState"
          @click-sort="onClickSort"
          @delete="deleteTeacher"
          @click-detail="getTeacherInfo"
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
      :teacherInfo="teacherInfo"
      :nickNameCheck="newNickNameCheck"
      :isEmailCheck="isEmailCheck"
      :isIdCheck="isIdCheck"
      :newSubjectList="newSubjectList"
      @close="onCloseRegisterTeacherModalDesc"
      @click-profile="openUploadNewTeacherImgModalDesc"
      @click-cwimg="openUploadNewTeacherCWImgModalDesc"
      @change-input="onChangeUpdateInput"
      @click-birthday="openDatePickerModalDesc"
      @select-position="selectPosition"
      @click-save="onClickSaveBtn"
      @check-target="onChangeTargetCheck"
      @check-role="onChangeRoleCheck"
      @click-m="onClickGenderMen"
      @click-w="onClickGenderWomen"
      @click-y="onClickStatusTrue"
      @click-n="onClickStatusFalse"
      @check-email="getEmailCheck"
      @check-id="getIdCheck"
      @edit-subjects="openEditSubjectsModal"
    />
    <!-- 선생님 상세 -->
    <TeacherInfoModal
      title="선생님 상세정보"
      :open="teacherInfoModalDesc.open"
      :teacherInfo="teacherInfo"
      :nickNameCheck="nickNameCheck"
      :isEmailCheck="isEmailCheck"
      :isIdCheck="isIdCheck"
      :targetCheckList="targetCheckList"
      :roleCheckList="roleCheckList"
      @close="onCloseTeacherInfoModalDesc"
      @click-profile="openUploadTeacherImgModalDesc"
      @click-cwimg="openUploadTeacherCWImgModalDesc"
      @change-input="onChangeUpdateInput"
      @click-birthday="openDatePickerModalDesc"
      @select-position="selectPosition"
      @click-save="onClickSaveBtn"
      @check-target="onChangeTargetCheck"
      @check-role="onChangeRoleCheck"
      @click-m="onClickGenderMen"
      @click-w="onClickGenderWomen"
      @click-y="onClickStatusTrue"
      @click-n="onClickStatusFalse"
      @init-password="initPassword"
      @check-email="getEmailCheck"
      @edit-subjects="openEditSubjectsModal"
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

    <!-- 과목 수정 -->
    <EditSubjectsModal
      :open="editSubjectsModal.open"
      :newSubjectList="newSubjectList"
      :isAddSubject="isAddSubject"
      :newSubjectTitle="newSubjectTitle"
      :isUpdateSubject="isUpdateSubject"
      :isMoreBtn="isMoreBtn"
      :newSubject="newSubject"
      @add-subject="addSubject"
      @change-input="onChangeSubjectInput"
      @click-add="onClickAddSubject"
      @close-add="onCloseAddSubject"
      @click-more="onClickSubjectMore"
      @update-title="updateSubjectTitle"
      @delete-subject="deleteSubject"
      @close="onCloseEditSubjectsModal"
    />
  </div>
  <!-- //container -->
</template>
<script>
import { apiOperation } from '~/services'
import NavBox from '@/components/operation/NavBox.vue'
import TeacherListBox from '@/components/operation/TeacherListBox.vue'
import ResetPasswordModal from '@/components/common/modal/operation/ResetPasswordModal.vue'
import TeacherCountAlertModal from '@/components/common/modal/operation/TeacherCountAlertModal.vue'
import TeacherInfoModal from '@/components/common/modal/operation/TeacherInfoModal.vue'
import UploadTeacherImg from '@/components/common/modal/operation/UploadTeacherImg.vue'
import EditSubjectsModal from '@/components/common/modal/operation/EditSubjectsModal.vue'
import DatePickerModal from '@/components/common/modal/operation/DatePickerModal.vue'
import UploadTeacherCWImg from '@/components/common/modal/operation/UploadTeacherCWImg.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import DeleteModal from '@/components/lecturecourse/DeletePlanModal.vue'
export default {
  name: 'TeacherManagement',
  components: {
    NavBox,
    TeacherListBox,
    ResetPasswordModal,
    TeacherCountAlertModal,
    UploadTeacherImg,
    UploadTeacherCWImg,
    TeacherInfoModal,
    DeleteModal,
    ModalDesc,
    DatePickerModal,
    EditSubjectsModal,
  },
  data() {
    return {
      institutionIdx: this.$store.state.common.user.ins_code,
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
      // teacherInfo: {
      //   id: 0,
      //   name: '김지원',
      //   nickname: '지원쓰',
      //   account: 'wldnjs93',
      //   subject: '수학',
      //   group: '초등, 중등',
      //   phone: '010-1234-1234',
      //   status: true,
      //   gender: 0,
      //   educationCode: 123456,
      //   email: 'wldnjs@naver.com',
      //   birthday: '2022-11-15',
      //   identity: '',
      //   position: '교육기관장',
      //   profile_image: require('@/assets/images/mypage/profile1.png'),
      //   profile_cw_image: require('@/assets/images/mypage/cwprofile1.png'),
      // },
      teacherList: [],
      initTeacherInfo: {
        ins_code: this.$store.state.common.user.ins_code,
        mem_birthday: null,
        mem_email: '',
        mem_id: '',
        mem_idx: 33,
        mem_name: '',
        mem_nickname: '',
        mem_phone: '',
        mem_sex: null,
        tch_grade: 'T',
        tch_use_yn: true,
        auth_check: false,
        auth_list: [],
        subject_check: true,
        subject_list: [],
        target_check: false,
        target_list: [],
      },
      teacherInfo: {
        ins_code: this.$store.state.common.user.ins_code,
        mem_birthday: null,
        mem_email: '',
        mem_id: '',
        mem_idx: 33,
        mem_name: '',
        mem_nickname: '',
        mem_phone: '',
        mem_sex: null,
        tch_grade: 'T',
        tch_use_yn: true,
        auth_check: false,
        auth_list: [],
        subject_check: true,
        subject_list: [],
        target_check: false,
        target_list: [],
      },
      allAuthList: [
        { rac_idx: 1, rin_idx: 1 },
        { rac_idx: 1, rin_idx: 2 },
        { rac_idx: 1, rin_idx: 3 },
        { rac_idx: 2, rin_idx: 4 },
        { rac_idx: 2, rin_idx: 5 },
        { rac_idx: 2, rin_idx: 6 },
        { rac_idx: 3, rin_idx: 7 },
        { rac_idx: 3, rin_idx: 8 },
        { rac_idx: 4, rin_idx: 9 },
        { rac_idx: 4, rin_idx: 10 },
        { rac_idx: 5, rin_idx: 11 },
        { rac_idx: 5, rin_idx: 12 },
        { rac_idx: 5, rin_idx: 13 },
        { rac_idx: 5, rin_idx: 14 },
        { rac_idx: 6, rin_idx: 15 },
        { rac_idx: 6, rin_idx: 16 },
        { rac_idx: 6, rin_idx: 17 },
        { rac_idx: 6, rin_idx: 18 },
        { rac_idx: 7, rin_idx: 19 },
        { rac_idx: 7, rin_idx: 20 },
        { rac_idx: 7, rin_idx: 21 },
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
      editSubjectsModal: {
        open: false,
      },
      // 목록
      searchFlag: 0,
      stateFlag: true,
      sortFlag: 1,
      currentPage: 1,
      stateTrue: 0,
      stateFalse: 0,
      searchText: '',
      // 선생님 상세/수정
      targetCheckList: [],
      roleCheckList: [],
      newNickNameCheck: false,
      nickNameCheck: false,
      birthday: '',
      uploadImageFile: '',
      isEmailCheck: false,
      isIdCheck: false,
      prevEmail: '',
      prevId: '',
      newSubjectList: [
        { is_idx: 6, is_title: '화학' },
        { is_idx: 7, is_title: '윤리' },
        { is_idx: 8, is_title: '음악' },
        { is_idx: 9, is_title: '미술' },
      ],
      isAddSubject: false,
      newSubjectTitle: '',
      newSubject: '',
      isUpdateSubject: false,
      isMoreBtn: false,
      // 선생님 삭제
      deleteIdxList: [],
      allCheckBoxFlag: false,
    }
  },
  watch: {
    stateFlag() {
      this.getTeacherList()
    },
    sortFlag() {
      this.getTeacherList()
    },
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
  mounted() {
    this.getTeacherList()
  },
  methods: {
    // 선생님 목록 불러오기 api
    async getTeacherList() {
      const payload = {
        current_page: this.currentPage,
        ins_code: this.institutionIdx,
        latest: this.sortFlag,
        per_page_num: 10,
        search: this.searchText,
        status: this.stateFlag,
      }
      await apiOperation
        .getTeacherList(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          if (data === null) {
            this.teacherList = []
          } else {
            this.stateTrue = data.activate_count
            this.stateFalse = data.deactivate_count
            this.teacherList = data.dto
          }
          console.log(this.teacherList)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 목록
    // 정렬 필터링
    onClickSort(number) {
      this.sortFlag = number
    },
    // 상태 필터링
    onClickState() {
      if (!this.stateFlag) {
        this.stateFlag = true
      } else {
        this.stateFlag = false
      }
    },
    // 선생님 검색
    onChangeInput({ target: { value } }) {
      this.searchText = value
    },
    searchTeacher() {
      this.getTeacherList()
    },

    // 선생님 상세 정보 불러오기 api
    async getTeacherInfo(mem_idx) {
      await apiOperation
        .getTeacherInfo(mem_idx)
        .then(({ data: { data } }) => {
          console.log(data)
          Object.assign(this.teacherInfo, data.vo)
          this.teacherInfo.auth_list = data.auth_list
          this.teacherInfo.target_list = data.target_list
          this.prevId = data.vo.mem_id
          this.prevEmail = data.vo.mem_email
        })
        .catch((err) => {
          console.log(err)
        })
      this.openTeacherInfoModalDesc()
    },

    // 선생님 등록 api
    async registerTeacher() {
      const payload = this.teacherInfo
      console.log(payload)
      await apiOperation
        .registerTeacher(payload)
        .then(() => {
          this.onCloseRegisterTeacherModalDesc()
          this.getTeacherList()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 선생님 정보 수정 api
    async updateTeacherInfo() {
      const payload = this.teacherInfo
      await apiOperation
        .updateTeacherInfo(payload)
        .then(() => {
          this.onCloseTeacherInfoModalDesc()
          this.getTeacherList()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 선생님 정보 수정
    onChangeUpdateInput({ target: { value, id, checked } }) {
      console.log(checked)
      this.teacherInfo[id] = value
      if (checked) {
        console.log(checked)
        this.teacherInfo.mem_nickname = this.teacherInfo.mem_name
        this.nickNameCheck = true
      }
      if (this.teacherInfo.mem_nickname !== this.teacherInfo.mem_name) {
        this.nickNameCheck = false
      } else {
        this.nickNameCheck = true
      }
      if (id === 'mem_phone') {
        this.teacherInfo[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(-{1,2})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }

      if (id === 'mem_id') {
        this.isIdCheck = false
      }
      if (id === 'mem_email') {
        if (this.teacherInfo.mem_email === this.prevEmail) {
          this.isEmailCheck = true
        } else {
          this.isEmailCheck = false
        }
      }
    },
    // 성별 수정
    onClickGenderMen() {
      this.teacherInfo.mem_sex = 'M'
    },
    onClickGenderWomen() {
      this.teacherInfo.mem_sex = 'W'
    },
    // 상태 변경
    onClickStatusTrue() {
      this.teacherInfo.tch_use_yn = true
    },
    onClickStatusFalse() {
      this.teacherInfo.tch_use_yn = false
      console.log(this.teacherInfo.tch_use_yn)
    },
    // 가르치는 대상 수정
    onChangeTargetCheck({ target: { id, checked } }) {
      if (checked) {
        this.teacherInfo.target_list.push(id)
      } else {
        const index = this.teacherInfo.target_list.indexOf(id)
        this.teacherInfo.target_list.splice(index, 1)
      }
    },
    // 권한 수정
    onChangeRoleCheck({ target: { id, name, checked } }) {
      const role = { rac_idx: Number(name), rin_idx: Number(id) }
      if (checked) {
        this.teacherInfo.auth_list.push(role)
      } else {
        const index = this.teacherInfo.auth_list
          .map((x) => x.rin_idx)
          .indexOf(role.rin_idx)
        this.teacherInfo.auth_list.splice(index, 1)
      }
    },
    // 직위 수정
    selectPosition() {
      if (this.teacherInfo.tch_grade === 'M') {
        this.teacherInfo.tch_grade = 'T'
        this.teacherInfo.auth_check = false
        this.teacherInfo.auth_list = []
      } else {
        this.teacherInfo.tch_grade = 'M'
        this.teacherInfo.auth_check = true
        this.teacherInfo.auth_list = this.deepCopy(this.allAuthList)
      }
    },

    // 아이디 중복체크
    async getIdCheck() {
      await apiOperation
        .getIdCheck(this.teacherInfo.mem_id)
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
    // 이메일 중복체크
    async getEmailCheck() {
      await apiOperation
        .getEmailCheck(this.teacherInfo.mem_email)
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
    // 비밀번호 초기화
    async initPassword() {
      await apiOperation
        .initPassword(this.teacherInfo.mem_id)
        .then((res) => {
          console.log(res)
          this.openModalDesc('', '비밀번호가 초기화되었습니다.')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 수정된 정보 저장하기
    onClickSaveBtn() {
      if (this.registerTeacherModal.open) {
        this.registerTeacher()
        this.openRegisterConfirmModalDesc(
          '선생님 등록',
          '선생님이 등록되었습니다.'
        )
      } else {
        this.updateTeacherInfo()
        this.openModalDesc(
          '선생님 정보 수정',
          '선생님 상세 정보가 수정되었습니다.'
        )
      }
    },

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
      setTimeout(() => {
        this.teacherInfo = this.deepCopy(this.initTeacherInfo)
        this.isIdCheck = false
        this.isEmailCheck = false
      }, 500)
    },
    openTeacherInfoModalDesc() {
      this.teacherInfoModalDesc.open = true
      this.isIdCheck = true
      this.isEmailCheck = true
    },
    onCloseTeacherInfoModalDesc() {
      this.teacherInfoModalDesc.open = false
      setTimeout(() => {
        this.teacherInfo = this.deepCopy(this.initTeacherInfo)
        this.isIdCheck = false
        this.isEmailCheck = false
      }, 500)
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
    openEditSubjectsModal() {
      this.editSubjectsModal.open = true
    },
    onCloseEditSubjectsModal() {
      this.editSubjectsModal.open = false
    },
    // 선생님 삭제
    setIdxNumber(string) {
      return Number(string.substr(4))
    },
    onClickCheckBox({ target: { id, checked } }) {
      if (checked) {
        const teacher = { mem_idx: this.setIdxNumber(id) }
        this.deleteIdxList.push(teacher)
      } else {
        this.allCheckBoxFlag = false
        const index = this.deleteIdxList
          .map((x) => x.mem_idx)
          .indexOf(this.setIdxNumber(id))
        this.deleteIdxList.splice(index, 1)
      }
    },
    selectAll({ target: { checked } }) {
      const checkboxes = document.getElementsByName('chk')
      if (checked) {
        this.deleteIdxList = []
        this.allCheckBoxFlag = true
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = true
          const teacher = { mem_idx: this.setIdxNumber(checkboxes[i].id) }
          this.deleteIdxList.push(teacher)
          console.log(this.deleteIdxList)
        }
      } else {
        this.allCheckBoxFlag = false
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = false
          this.deleteIdxList.pop()
        }
      }
    },
    async deleteTeacher() {
      if (this.deleteIdxList.length === 0) {
        this.openModalDesc('선생님 삭제', '삭제할 선생님을 선택해주세요.')
        return false
      } else {
        const payload = {
          data: {
            ins_code: this.institutionIdx,
            mem_idx_list: this.deleteIdxList,
          },
        }
        console.log(payload)
        await apiOperation
          .deleteTeacher(payload)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
        // this.openDeleteModalDesc('선생님')
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
      this.teacherInfo.mem_birthday = this.birthday
      this.datePickerModalDesc.open = false
    },
    // 비밀번호 초기화
    onClickResetBtn() {
      this.openModalDesc('비밀번호 초기화', '비밀번호가 초기화되었습니다.')
    },

    // 과목 수정 과목 추가
    onClickAddSubject() {
      this.newSubjectTitle = ''
      this.isAddSubject = true
      this.isUpdateSubject = false
    },
    // 과목 추가하기
    addSubject() {
      this.isAddSubject = false
      this.newSubjectTitle = ''
    },
    // 과목 추가 닫기
    onCloseAddSubject() {
      this.isAddSubject = false
      this.isUpdateSubject = false
    },
    // 과목 input
    onChangeSubjectInput({ target: { value } }) {
      this.newSubjectTitle = value
    },
    // 과목 더보기 버튼
    onClickSubjectMore(is_title) {
      if (this.isMoreBtn && this.newSubject === is_title) {
        this.isMoreBtn = false
        console.log(this.isMoreBtn)
        return false
      }
      this.isMoreBtn = true
      this.newSubject = is_title
      console.log(this.isMoreBtn, this.newSubject)
    },
    // 과목 삭제
    deleteSubject() {
      this.isMoreBtn = false
      console.log('삭제', this.isMoreBtn)
    },
    // 과목 수정
    updateSubjectTitle(title) {
      this.isAddSubject = false
      this.isMoreBtn = false
      this.isUpdateSubject = true
      this.newSubjectTitle = title
      console.log('수정', title, this.isUpdateSubject, this.newSubjectTitle)
    },

    // 깊은 복사
    deepCopy(data) {
      return JSON.parse(JSON.stringify(data))
    },
  },
}
</script>
<style scoped></style>
