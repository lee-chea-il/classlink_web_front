<template>
  <div class="page_mypage edu_head_bef row">
    <div class="title">내 정보</div>
    <!-- 왼쪽 영역 -->
    <MyInfoLeft
      :userInfo="userInfo"
      :myInfo="myInfo"
      @alarmBtn-click="changeAlarmState"
      @click-updatePw="openUpdatePwModal"
    />
    <!-- 오른쪽 영역 -->
    <MyInfoRightEdu
      :userInfo="userInfo"
      :institutionInfo="institutionInfo"
      :myInfo="myInfo"
      :eduInfo="eduInfo"
      :franInfo="franInfo"
      :isInstitutionFlag="isInstitutionFlag"
      @alarmBtn-click="changeAlarmState"
      @click-openIns="openInstitutionModal"
      @click-updateIns="openUpdateInstitutionModal"
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
      <button
        class="btn btn_crud_default"
        data-toggle="modal"
        data-target="#modalMyinfo"
      >
        정보 수정
      </button>
    </div>
    <!-- /.하단 버튼 영역 -->
    <!-- //container -->

    <!-- 모달 팝업 ------------------------------------->
    <!-- 팝업M1-내정보수정 -->
    <UpdateMyInfoModal
      :myInfo="myInfo"
      :nickNameCheck="nickNameCheck"
      @change-input="onChangeMyInfoInput"
      @change-check="onChangeCheckBox"
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
      @open-institution="OpenInstitution"
      @close="onCloseInstitutionModal"
    />

    <!-- 교육기관 정보 수정1  -->
    <UpdateEduInfoModal
      :open="isUpdateInstitution"
      :eduInfo="eduInfo"
      :institutionInfo="newInstitutionInfo"
      @change-input="onChangeEduInfoInput"
      @click-address="openModalAddress"
      @close="onCloseInstitution"
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
    <ChangeIdentityModal />

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

    <!-- 팝업 M2-교육기관정보수정5 - 교육기관이미지등록2-->
    <!-- <div
      id="modalInstinfo05"
      class="modal fade modal_Instinfo05"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              교육기관 이미지 등록
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

    <!-- 팝업 M2-교육기관정보수정3 - 로고업로드2-->
    <!-- <div
      id="modalInstinfo03"
      class="modal fade modal_Instinfo03"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              교육기관 로고 업로드
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
              <div class="sample_uplodeimg"></div>
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
import UpdateEduInfoModal from '@/components/common/modal/mypage/UpdateEduInfoModal.vue'
import OpenInstitutionModal from '@/components/common/modal/mypage/OpenInstitutionModal.vue'
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
    UpdateEduInfoModal,
    OpenInstitutionModal,
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
      institutionInfo: {
        fra_code: '',
        ins_address1: '',
        ins_address2: '',
        ins_code: '',
        ins_name: '',
        ins_phone: '',
      },
      initInstitutionInfo: {
        fra_code: '',
        ins_address1: '',
        ins_address2: '',
        ins_code: '',
        ins_name: '',
        ins_phone: '',
        ins_desc: '',
        zone_code: '',
        mem_idx: this.$store.state.common.user.mem_idx,
      },
      newInstitutionInfo: {
        fra_code: '',
        ins_address1: '',
        ins_address2: '',
        ins_code: '',
        ins_name: '',
        ins_phone: '',
        ins_desc: '',
        zone_code: '',
        mem_idx: this.$store.state.common.user.mem_idx,
      },
      isInstitutionFlag: false,
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
      // 교육기관 개설
      isOpenInstitutionInfo: false,
      // 교육기관 정보 수정
      isUpdateInstitution: false,
    }
  },
  mounted() {
    this.userIdx = this.$store.state.common.user.mem_idx
    this.getUserInfo()
  },
  methods: {
    // 깊은 복사
    deepCopy(data) {
      return JSON.parse(JSON.stringify(data))
    },

    // api
    // 메인 정보 불러오기
    async getUserInfo() {
      await apiMypage
        .getUserInfo(this.userIdx)
        .then(({ data: { data } }) => {
          this.userInfo = data.myPageMainList
          if (data.myPageMainInstitutionList !== null) {
            this.isInstitutionFlag = true
            this.institutionInfo = data.myPageMainInstitutionList
          }
          // console.log(this.userInfo)
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

    openUpdatePwModal() {
      this.isUpdatePw = true
    },
    onCloseUpdatePwModal() {
      this.newPassword = this.deepCopy(this.initNewPassword)
      this.isUpdatePw = false
    },
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
    onCloseInstitution() {
      this.isUpdateInstitution = false
    },

    // 로그아웃
    goLoginPage() {
      this.$store.commit('common/initState')
      this.$store.commit('userInfo/initState')
      window.localStorage.clear()
      this.$router.push('/login')
    },

    // 알림 설정
    changeAlarmState() {
      if (this.myInfo.alarm) {
        this.myInfo.alarm = false
      } else {
        this.myInfo.alarm = true
      }
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
    onChangeMyInfoInput({ target: { value, id } }) {
      this.myInfo[id] = value
      if (
        this.myInfo.name !== '' &&
        this.myInfo.nickname === this.myInfo.name
      ) {
        this.nickNameCheck = true
      } else {
        this.nickNameCheck = false
      }
      if (id === 'mem_phone') {
        this.myInfo[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(-{1,2})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
    },
    onClickNickNameCheck() {
      this.myInfo.nickname = this.myInfo.name
    },
    onChangeCheckBox({ target: { checked } }) {
      this.nickNameCheck = checked
      if (checked) {
        this.myInfo.nickname = this.myInfo.name
      }
    },

    // 교육기관 정보
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
    async OpenInstitution() {
      const payload = this.newInstitutionInfo
      console.log(payload)
      await apiMypage
        .postOpenInstitution(payload)
        .then(() => {
          this.openModalDesc('교육기관 개설', '교육기관이 개설되었습니다.')
          this.onCloseInstitutionModal()
          this.getUserInfo()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 교육기관 정보 수정 api
    

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
      this.newInstitutionInfo.zone_code = data.zonecode
      const selectAddress = data.userSelectedType
      if (selectAddress === 'J') {
        this.newInstitutionInfo.ins_address1 = data.jibunAddress
      } else if (selectAddress === 'R') {
        this.newInstitutionInfo.ins_address1 = data.roadAddress
      }
      this.mapSearchModal.open = false
    },
  },
}
</script>
<style></style>
