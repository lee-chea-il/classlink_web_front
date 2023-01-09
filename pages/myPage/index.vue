<template>
  <div class="page_mypage edu_head_bef row">
    <div class="title">내 정보</div>
    <!-- 왼쪽 영역 -->
    <MyInfoLeft
      :userInfo="userInfo"
      :myInfo="myInfo"
      :identityNames="setIdentity(userInfo.identity_type)"
      :positionNames="setPosition(userInfo.position)"
      @click-updatePw="openUpdatePwModal"
      @click-alarm="updateAlarm"
    />
    <!-- 오른쪽 영역 -->
    <MyInfoRightEdu
      :userInfo="userInfo"
      :institutionInfo="institutionInfo"
      :franchiseInfo="franchiseInfo"
      :myInfo="myInfo"
      :eduInfo="eduInfo"
      :franInfo="franInfo"
      :isInstitutionFlag="isInstitutionFlag"
      @click-openIns="openInstitutionModal"
      @click-updateIns="openUpdateInstitutionModal"
      @click-openFran="openFranchiseModal"
      @click-alarm="updateAlarm"
    />
    <!-- /.오른쪽 영역 -->
    <!-- 하단 버튼 영역 -->
    <div class="btn_area">
      <button
        class="btn btn_crud_default"
        data-toggle="modal"
        data-target="#modalLogout"
      >
        로그아웃
      </button>
      <button class="btn btn_crud_default" @click="openUpdateUserInfoModal">
        정보 수정
      </button>
    </div>
    <!-- /.하단 버튼 영역 -->
    <!-- //container -->

    <!-- 모달 팝업 ------------------------------------->
    <!-- 내 정보 수정 -->
    <UpdateMyInfoModal
      :open="isUserInfoFlag"
      :userInfo="newUserInfo"
      :myInfo="myInfo"
      :nickNameCheck="nickNameCheck"
      :isEmailCheck="isEmailCheck"
      @check-email="getEmailCheck"
      @change-input="onChangeMyInfoInput"
      @change-check="onChangeCheckBox"
      @click-update="updateUserInfo"
      @close="onCloseUpdateUserInfoModal"
    />

    <!-- 팝업 M2- 내정보 수정 - 프로필 이미지 등록1 -->
    <ProfileImageModal
      title="프로필 이미지 등록"
      :myInfo="myInfo"
      :uploadImageFile="uploadImageFile"
      @uploadBtn-click="onClickInputButton"
      @selected-file="onFileSelected"
    />

    <!-- 팝업 M2- 내정보 수정 - CW 이미지 등록1 -->
    <ProfileCWImageModal
      :myInfo="myInfo"
      :uploadImageFile="uploadImageFile"
      @uploadBtn-click="onClickInputButton"
      @selected-file="onFileSelected"
    />

    <!-- 팝업 M2-비밀번호변경 -->
    <UpdatePasswordModal
      :open="isUpdatePw"
      :myInfo="myInfo"
      :newPassword="newPassword"
      :pwTypeInfo="pwTypeInfo"
      :isError="isError"
      @confirm-click="updatePw"
      @change-input="onChangeInput"
      @check-pw="onChangePasswordCheck"
      @change-type1="onChangeType1"
      @change-type2="onChangeType2"
      @change-type3="onChangeType3"
      @close="onCloseUpdatePwModal"
    />

    <!-- 교육기관 정보 개설 -->
    <OpenInstitutionModal
      :open="isOpenInstitutionInfo"
      :institutionInfo="newInstitutionInfo"
      @change-input="onChangeEduInfoInput"
      @click-address="openModalAddress"
      @open-institution="openInstitution"
      @close="onCloseInstitutionModal"
    />

    <!-- 교육기관 정보 수정1  -->
    <UpdateInstitutionModal
      :open="isUpdateInstitution"
      :eduInfo="eduInfo"
      :institutionInfo="newInstitutionInfo"
      @change-input="onChangeEduInfoInput"
      @click-address="openModalAddress"
      @click-update="updateInstitution"
      @close="onCloseUpdateInstitution"
    />

    <!-- 프랜차이즈 개설 -->
    <OpenFranchiseModal
      :open="isOpenFranchise"
      :franchiseInfo="franchiseInfo"
      @change-input="onChangeFranchiseInput"
      @click-address="openModalAddress"
      @open-institution="openFranchise"
      @close="onCloseFranchiseModal"
    />

    <!-- 팝업 M2-교육기관정보수정2 - 로고업로드1 -->
    <EduLogoImageModal
      title="교육기관 로고 업로드"
      :eduInfo="eduInfo"
      :uploadImageFile="uploadImageFile"
      @uploadBtn-click="onClickInputButton"
      @selected-file="onFileSelected"
    />

    <!-- 팝업 M2-교육기관정보수정4 - 교육기관이미지등록1 -->
    <EduCWImageModal
      :eduInfo="eduInfo"
      :uploadImageFile="uploadImageFile"
      @uploadBtn-click="onClickInputButton"
      @selected-file="onFileSelected"
    />

    <!-- 팝업 S2-로그아웃 -->
    <LogoutModal @logoutBtn-click="goLoginPage" />

    <!-- 팝업 S1-신분전환 -->
    <ChangeIdentityModal @click-change="changeIdentity" />

    <!-- 설명 모달 -->
    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />

    <!-- 주소 검색 모달 -->
    <MapSearchModal
      :show="mapSearchModal.open"
      @openMap="addressSearched"
      @close="onCloseModalAddress"
    />
  </div>
</template>

<script>
import { apiMypage } from '~/services'
import MyInfoLeft from '@/components/mypage/MyInfoLeft.vue'
import MyInfoRightEdu from '@/components/mypage/MyInfoRightEdu.vue'
import UpdateMyInfoModal from '@/components/common/modal/mypage/UpdateMyInfoModal.vue'
import ProfileImageModal from '@/components/common/modal/mypage/ProfileImageModal.vue'
import ProfileCWImageModal from '@/components/common/modal/mypage/ProfileCWImageModal.vue'
import UpdatePasswordModal from '@/components/common/modal/mypage/UpdatePasswordModal.vue'
import LogoutModal from '@/components/common/modal/mypage/LogoutModal.vue'
import ChangeIdentityModal from '@/components/common/modal/mypage/ChangeIdentityModal.vue'
import UpdateInstitutionModal from '@/components/common/modal/mypage/UpdateInstitutionModal.vue'
import OpenInstitutionModal from '@/components/common/modal/mypage/OpenInstitutionModal.vue'
import OpenFranchiseModal from '@/components/common/modal/mypage/OpenFranchiseModal.vue'
import EduLogoImageModal from '@/components/common/modal/mypage/EduLogoImageModal.vue'
import EduCWImageModal from '@/components/common/modal/mypage/EduCWImageModal.vue'
import MapSearchModal from '@/components/common/modal/mypage/MapSearchModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import { deepCopy } from '~/utiles/common'
export default {
  name: 'MyPage',
  components: {
    MyInfoLeft,
    MyInfoRightEdu,
    UpdateMyInfoModal,
    ProfileImageModal,
    ProfileCWImageModal,
    UpdatePasswordModal,
    LogoutModal,
    ChangeIdentityModal,
    UpdateInstitutionModal,
    OpenInstitutionModal,
    OpenFranchiseModal,
    EduLogoImageModal,
    EduCWImageModal,
    MapSearchModal,
    ModalDesc,
  },
  layout: 'EducationLayout',
  data() {
    return {
      userIdx: 0,
      userInfo: {
        alarm_yn: '',
        mem_email: '',
        mem_id: '',
        mem_name: '',
        mem_nickname: '',
        mem_phone: '',
        mem_status: '',
        tch_grade: null,
      },
      newUserInfo: {
        alarm_yn: '',
        mem_email: '',
        mem_id: '',
        mem_name: '',
        mem_nickname: '',
        mem_phone: '',
        mem_status: '',
        tch_grade: null,
      },
      isUserInfoFlag: false,
      isChangeUserInfo: false,
      isEmailCheck: true,
      isAlarm: false,
      // 교육기관
      institutionInfo: {
        fra_code: '',
        ins_address1: '',
        ins_address2: '',
        ins_code: '',
        ins_name: '',
        ins_phone: '',
      },
      initInstitutionInfo: {
        ins_address1: '',
        ins_address2: '',
        ins_code: '',
        ins_name: '',
        ins_phone: '',
        ins_desc: '',
      },
      newInstitutionInfo: {
        ins_address1: '',
        ins_address2: '',
        ins_code: '',
        ins_name: '',
        ins_phone: '',
        ins_desc: '',
      },
      isInstitutionFlag: false,
      insZoneCode: '',
      // 교육기관 개설 모달
      isOpenInstitutionInfo: false,
      // 교육기관 정보 수정 모달
      isUpdateInstitution: false,
      //
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      mapSearchModal: {
        open: false,
        target: '',
      },
      myInfo: {
        account: 'id',
        name: '김유진',
        nickname: '유진',
        identity: '기관장, 선생님',
        position: '기관장',
        phone: '010-1234-1234',
        email: 'lastepisode@naver.com',
        state: true,
        alarm: false,
        profile_image: require('@/assets/images/mypage/profile1.png'),
        profile_cw_image: require('@/assets/images/mypage/cwprofile1.png'),

        password: '1234!',
        authNumber: '',
      },
      eduInfo: {
        edu_title: '김유진',
        tel: '010-1234-1234',
        address: '집',
        address_detail: '1층',
        description: '설명',
        code: '67890',
        logo_image: require('@/assets/images/mypage/profile1.png'),
        cw_image: require('@/assets/images/mypage/cwprofile1.png'),
      },
      franInfo: {
        name: '유진 프랜',
        tel: '031-634-4742',
        code: '12345',
        address: '주소',
      },
      // 비밀번호 변경
      isUpdatePw: false,
      newPassword: {
        recentPassword: '',
        password: '',
        passwordCheck: '',
      },
      initNewPassword: {
        recentPassword: '',
        password: '',
        passwordCheck: '',
      },
      pwTypeInfo: {
        isPwEyeOn1: false,
        isPwEyeOn2: false,
        isPwEyeOn3: false,
      },
      isError: false,
      nickNameCheck: false,
      uploadImageFile: '',
      // 프랜차이즈 개설
      isOpenFranchise: false,
      franchiseInfo: {
        fra_code: '',
        fra_address: '',
        fra_address2: '',
        fra_name: '',
        fra_phone: '',
        fra_zoncode: '',
        fra_cw_img: '',
        fra_desc: '',
        fra_img: '',
        mem_idx: this.$store.state.common.user.mem_idx,
      },
      initFranchiseInfo: {
        fra_code: '',
        fra_address: '',
        fra_address2: '',
        fra_name: '',
        fra_phone: '',
        fra_zoncode: '',
        fra_cw_img: '',
        fra_desc: '',
        fra_img: '',
        mem_idx: this.$store.state.common.user.mem_idx,
      },
    }
  },
  created() {
    this.userIdx = this.$store.state.common.user.mem_idx
  },
  mounted() {
    this.getUserInfo()
    if (this.newUserInfo.mem_name === this.newUserInfo.mem_nickname) {
      this.nickNameCheck = true
    } else {
      this.nickNameCheck = false
    }
  },
  methods: {
    // 깊은 복사
    deepCopy(data) {
      return JSON.parse(JSON.stringify(data))
    },

    // 메인 정보 불러오기 api
    async getUserInfo() {
      await apiMypage
        .getUserInfo(this.userIdx)
        .then(({ data: { data } }) => {
          this.userInfo = data.myPageMainList
          if (data.myPageMainInstitutionList !== null) {
            this.isInstitutionFlag = true
            this.institutionInfo = data.myPageMainInstitutionList
          }
          if (data.myPageMainFranchiseVOList !== null) {
            this.franchiseInfo = data.myPageMainFranchiseVOList
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 설명 모달
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

    openUpdatePwModal() {
      this.isUpdatePw = true
    },
    onCloseUpdatePwModal() {
      this.newPassword = this.deepCopy(this.initNewPassword)
      this.isUpdatePw = false
    },

    // 로그아웃
    goLoginPage() {
      this.$router.push('/login')
      this.$store.commit('common/initState')
      window.localStorage.clear()
    },

    // 비밀번호 변경
    // 정보 수정
    onChangeInput({ target: { value, id } }) {
      this.newPassword[id] = value
    },
    // 비밀번호 확인
    onChangePasswordCheck({ target: { value } }) {
      this.newPassword.passwordCheck = value
      if (this.newPassword.passwordCheck === this.newPassword.password) {
        this.isError = false
      } else {
        this.isError = true
      }
    },
    // 비밀번호 타입 변경
    onChangeType1() {
      if (this.pwTypeInfo.isPwEyeOn1 === false) {
        this.pwTypeInfo.isPwEyeOn1 = true
      } else {
        this.pwTypeInfo.isPwEyeOn1 = false
      }
    },
    onChangeType2() {
      if (this.pwTypeInfo.isPwEyeOn2 === false) {
        this.pwTypeInfo.isPwEyeOn2 = true
      } else {
        this.pwTypeInfo.isPwEyeOn2 = false
      }
    },
    onChangeType3() {
      if (this.pwTypeInfo.isPwEyeOn3 === false) {
        this.pwTypeInfo.isPwEyeOn3 = true
      } else {
        this.pwTypeInfo.isPwEyeOn3 = false
      }
    },
    // 비밀번호 변경 api
    async updatePw() {
      const payload = {
        mem_pw: this.newPassword.recentPassword,
        new_pw: this.newPassword.password,
      }
      await apiMypage
        .putUpdatePw(payload)
        .then(() => {
          this.openModalDesc('비밀번호 변경', '비밀번호가 변경되었습니다.')
          this.onCloseUpdatePwModal()
        })
        .catch(() => {
          this.openModalDesc('비밀번호 변경', '비밀번호를 다시 입력해주세요.')
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

    // 내 정보 수정
    // 내 정보 수정 모달
    openUpdateUserInfoModal() {
      Object.assign(this.newUserInfo, deepCopy(this.userInfo))
      this.isUserInfoFlag = true
    },
    onCloseUpdateUserInfoModal() {
      this.isUserInfoFlag = false
    },
    // 내 정보 수정
    onChangeMyInfoInput({ target: { value, id } }) {
      this.newUserInfo[id] = value
      if (
        this.newUserInfo.mem_name !== '' &&
        this.newUserInfo.mem_nickname === this.newUserInfo.mem_name
      ) {
        this.nickNameCheck = true
      } else {
        this.nickNameCheck = false
      }
      if (id === 'mem_phone') {
        this.newUserInfo[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(-{1,2})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
      if (this.newUserInfo.mem_email === this.userInfo.mem_email) {
        this.isEmailCheck = true
      } else {
        this.isEmailCheck = false
      }
    },
    // 닉네임 체크
    onClickNickNameCheck() {
      this.newUserInfo.mem_nickname = this.newUserInfo.mem_name
    },
    onChangeCheckBox({ target: { checked } }) {
      this.nickNameCheck = checked
      if (checked) {
        this.newUserInfo.mem_nickname = this.newUserInfo.mem_name
      }
    },
    // 내 정보 수정 api
    async updateUserInfo() {
      const payload = this.newUserInfo
      await apiMypage
        .putUpdateUserInfo(payload)
        .then((res) => {
          console.log(res)
          this.openModalDesc('내 정보 수정', '내 정보가 수정되었습니다.')
          this.onCloseUpdateUserInfoModal()
          this.getUserInfo()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 이메일 중복 확인 api
    async getEmailCheck() {
      await apiMypage
        .getEmailCheck(this.newUserInfo.mem_email)
        .then(({ data: { data } }) => {
          console.log(data)
          if (data) {
            this.isEmailCheck = true
          } else {
            this.isEmailCheck = false
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 알림 팝업 수정
    async updateAlarm() {
      if (this.userInfo.alarm_yn === 'Y') {
        this.isAlarm = false
      } else {
        this.isAlarm = true
      }
      const payload = {
        alarmOn: this.isAlarm,
        mem_idx: this.userIdx,
      }
      await apiMypage
        .putUpdateAlarm(payload)
        .then(() => {
          this.getUserInfo()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 교육기관 정보
    openInstitutionModal() {
      this.isOpenInstitutionInfo = true
    },
    onCloseInstitutionModal() {
      this.isOpenInstitutionInfo = false
      this.newInstitutionInfo = this.deepCopy(this.initInstitutionInfo)
    },
    openUpdateInstitutionModal() {
      Object.assign(this.newInstitutionInfo, deepCopy(this.institutionInfo))
      this.isUpdateInstitution = true
    },
    onCloseUpdateInstitution() {
      this.isUpdateInstitution = false
    },
    // 교육기관 정보 수정
    onChangeEduInfoInput({ target: { value, id } }) {
      this.newInstitutionInfo[id] = value
      if (id === 'ins_phone') {
        this.newInstitutionInfo[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(-{1,2})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
    },
    // 교육기관 개설 api
    async openInstitution() {
      delete this.newInstitutionInfo.ins_code
      const payload = this.newInstitutionInfo
      console.log(payload)
      // const payload = {
      //   ins_address1: '인천 계양구 계양산로134번길 37',
      //   ins_address2: '1',
      //   ins_desc: '1',
      //   ins_name: '유잔학원',
      //   ins_phone: '010-1111-1111',
      // }
      console.log(payload)
      await apiMypage
        .postOpenInstitution(payload)
        .then(() => {
          this.openModalDesc('교육기관 개설', '교육기관이 개설되었습니다.')
          this.onCloseInstitutionModal()
          this.getUserInfo()
          this.getNewUserInfo()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 교육기관 정보 수정 api
    async updateInstitution() {
      const payload = this.newInstitutionInfo
      await apiMypage
        .putUpdateInstitution(payload)
        .then((res) => {
          console.log(res)
          this.openModalDesc(
            '교육기관 정보 수정',
            '교육기관 정보가 수정되었습니다.'
          )
          this.onCloseUpdateInstitution()
          this.getUserInfo()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 프랜차이즈
    openFranchiseModal() {
      this.isOpenFranchise = true
    },
    onCloseFranchiseModal() {
      this.isOpenFranchise = false
      this.franchiseInfo = this.deepCopy(this.initFranchiseInfo)
    },
    // 프랜차이즈 정보 수정
    onChangeFranchiseInput({ target: { value, id } }) {
      this.franchiseInfo[id] = value
      if (id === 'fra_phone') {
        this.franchiseInfo[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(-{1,2})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
    },
    // 프랜차이즈 개설 api
    async openFranchise() {
      const payload = this.franchiseInfo
      console.log(payload)
      await apiMypage
        .postOpenFranchise(payload)
        .then(() => {
          this.openModalDesc('프랜차이즈 개설', '프랜차이즈가 개설되었습니다.')
          this.onCloseFranchiseModal()
          this.getUserInfo()
          this.getNewUserInfo()
          this.user = this.$store.state.common.user
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 신분 전환 버튼
    changeIdentity() {
      this.$store.commit('common/setUserIdentity', 'F')
      if (this.$store.state.common.user.fra_code === null) {
        localStorage.setItem('identity', 'temporary franchise')
      } else {
        localStorage.setItem('identity', 'franchise')
      }
      this.$router.push('/franchise')
    },

    // 교육기관/프랜차이즈 개설 후 state 업데이트
    async getNewUserInfo() {
      await apiMypage
        .getNewUserInfo()
        .then(({ data: { data } }) => {
          this.$store.commit('common/setUser', data)
          localStorage.setItem('identity', 'institution')
          console.log('identity', 'institution')
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 주소 검색 api
    openModalAddress(e) {
      e.preventDefault()
      const { dataset } = e.target
      this.mapSearchModal.open = true
      this.mapSearchModal.target = dataset.target
    },
    onCloseModalAddress() {
      this.mapSearchModal.open = false
    },
    addressSearched(data) {
      if (this.isOpenInstitutionInfo) {
        const selectAddress = data.userSelectedType
        if (selectAddress === 'J') {
          this.newInstitutionInfo.ins_address1 = data.jibunAddress
        } else if (selectAddress === 'R') {
          this.newInstitutionInfo.ins_address1 = data.roadAddress
        }
      } else {
        this.franchiseInfo.fra_zoncode = data.zonecode
        const selectAddress = data.userSelectedType
        if (selectAddress === 'J') {
          this.franchiseInfo.fra_address = data.jibunAddress
        } else if (selectAddress === 'R') {
          this.franchiseInfo.fra_address = data.roadAddress
        }
      }

      this.mapSearchModal.open = false
    },

    // 신분 목록 변환
    setIdentityName(initial) {
      let answer = ''
      switch (initial) {
        case 'S':
          answer = '학생'
          break
        case 'T':
          answer = '선생님'
          break
        case 'P':
          answer = '학부모'
          break
        case 'F':
          answer = '프랜차이즈장'
          break
        case 'I':
          answer = '교육기관장'
          break
        case 'G':
          answer = '게스트'
          break
        case 'M':
          answer = '학원관리자'
          break
        case 'A':
          answer = '프랜차이즈관리자'
          break
        default:
      }
      return answer
    },
    setIdentity(array) {
      if (array !== undefined) {
        if (array.length > 0) {
          const names = []
          for (const x of array) {
            names.push(this.setIdentityName(x))
          }
          return names.join(', ')
        } else {
          return '교육기관장'
        }
      } else {
        return '교육기관장'
      }
    },
    // 신분 목록 변환
    setPositionName(initial) {
      let answer = ''
      switch (initial) {
        case 'T':
          answer = '선생님'
          break
        case 'F':
          answer = '교육기관장'
          break
        case 'I':
          answer = '교육기관장'
          break
        case 'M':
          answer = '선생님'
          break
        case 'A':
          answer = '선생님'
          break
        default:
      }
      return answer
    },
    setPosition(array) {
      if (array !== undefined) {
        if (array !== null) {
          const names = []
          let result = []
          for (const x of array) {
            names.push(this.setPositionName(x))
          }
          result = new Set(names)
          return result.join(', ')
        } else {
          return '교육기관장'
        }
      } else {
        return ''
      }
    },
  },
}
</script>
<style></style>
