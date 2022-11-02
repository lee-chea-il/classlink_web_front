<template>
  <div class="main">
    <EducationHeader />
    <div id="content" class="content">
      <div class="content_area">
        <div class="page_mypage edu_head_aft row">
          <div class="title col-12">내 정보</div>
          <!-- 왼쪽 영역 -->
          <MyInfoLeft />
          <!-- 오른쪽 영역 -->
          <!-- <MyInfoRightFran /> -->
          <MyInfoRightEdu />
          <!-- /.오른쪽 영역 -->
          <!-- 하단 버튼 영역 -->
          <div class="btn_area col-12">
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
        </div>
      </div>
    </div>
    <!-- //container -->

    <!-- 모달 팝업 ------------------------------------->
    <!-- 팝업M1-내정보수정 -->
    <UpdateMyInfoModal />

    <!-- 팝업 M2- 내정보 수정 - 프로필 이미지 등록1 -->
    <ProfileImageModal />

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

    <!-- 팝업 M2- 내정보 수정 - CW 이미지 등록1 -->
    <ProfileCWImageModal />

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

    <!-- 팝업 M2-비밀번호변경 -->
    <UpdatePasswordModal
      :userInfo="userInfo"
      :typeCheck="typeCheck"
      :isError="isError"
      @change-type2="onChangeType2"
      @change-input="onChangeInput"
      @check-password="onChangePasswordCheck"
      @change-type1="onChangeType1"
    />

    <!-- 팝업 M2-교육기관정보수정1  -->
    <UpdateEduInfoModal :eduInfo="eduInfo" />

    <!-- 팝업 M2-교육기관정보수정2 - 로고업로드1 -->
    <div
      id="modalInstinfo02"
      class="modal fade modal_Instinfo02"
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
              <button class="btn btn_crud_default btn_sec">
                이미지 불러오기
              </button>
              <button class="btn btn_crud_default btn_sec" data-dismiss="modal">
                자르기
              </button>
            </div>
            <div class="explainType02">
              <a
                class=""
                data-toggle="modal"
                data-target="#modalInstinfo03"
                data-dismiss="modal"
              >
                <i class="icons_plus_circle_off"></i> 이미지 불러오기
              </a>
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
    </div>

    <!-- 팝업 M2-교육기관정보수정3 - 로고업로드2-->
    <div
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
    </div>

    <!-- 팝업 M2-교육기관정보수정4 - 교육기관이미지등록1 -->
    <div
      id="modalInstinfo04"
      class="modal fade modal_Instinfo04"
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
              <button class="btn btn_crud_default btn_sec">
                이미지 불러오기
              </button>
              <button class="btn btn_crud_default btn_sec" data-dismiss="modal">
                자르기
              </button>
            </div>
            <div class="explainType02">
              <a
                class=""
                data-toggle="modal"
                data-target="#modalInstinfo05"
                data-dismiss="modal"
              >
                <i class="icons_plus_circle_off"></i> 이미지 불러오기
              </a>
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
    </div>

    <!-- 팝업 M2-교육기관정보수정5 - 교육기관이미지등록2-->
    <div
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
    </div>

    <!-- 팝업 S2-로그아웃 -->
    <LogoutModal @logoutBtn-click="goLoginPage" @change-input="onChangeInput" />

    <!-- 팝업 S1-신분전환 -->
    <ChangeIdentityModal />
  </div>
</template>

<script>
import MyInfoLeft from '@/components/mypage/MyInfoLeft.vue'
// import MyInfoRightFran from '@/components/mypage/MyInfoRightFran.vue'
import MyInfoRightEdu from '@/components/mypage/MyInfoRightEdu.vue'
import UpdateMyInfoModal from '@/components/common/modal/mypage/UpdateMyInfoModal.vue'
import ProfileImageModal from '@/components/common/modal/mypage/ProfileImageModal.vue'
import ProfileCWImageModal from '@/components/common/modal/mypage/ProfileCWImageModal.vue'
import UpdatePasswordModal from '@/components/common/modal/mypage/UpdatePasswordModal.vue'
import UpdateEduInfoModal from '@/components/common/modal/mypage/UpdateEduInfoModal.vue'
import LogoutModal from '@/components/common/modal/mypage/LogoutModal.vue'
import ChangeIdentityModal from '@/components/common/modal/mypage/ChangeIdentityModal.vue'
export default {
  name: 'MyPage',
  components: {
    MyInfoLeft,
    MyInfoRightEdu,
    UpdateMyInfoModal,
    ProfileImageModal,
    ProfileCWImageModal,
    UpdatePasswordModal,
    UpdateEduInfoModal,
    LogoutModal,
    ChangeIdentityModal,
  },
  methods: {
    goLoginPage() {
      this.$router.push('/login')
    },
    onChangeInput({ target: { value, id } }) {
      this.userInfo[id] = value
    },
    onChangePasswordCheck({ target: { value } }) {
      this.userInfo.passwordCheck = value
      if (this.userInfo.passwordCheck === this.userInfo.password) {
        this.isError = false
      } else {
        this.isError = true
      }
    },
    onChangeType1() {
      if (this.isPwEyeOn1 === false) {
        this.isPwEyeOn1 = true
      } else {
        this.isPwEyeOn1 = false
      }
    },
    onChangeType2() {
      if (this.isPwEyeOn2 === false) {
        this.isPwEyeOn2 = true
      } else {
        this.isPwEyeOn2 = false
      }
    },
  },
  date() {
    return {
      userInfo: {
        recentPassword: '',
        newPassword: '',
        newPasswordCheck: '',
      },
      eduInfo: {
        name: '',
        tel: '',
        address: '',
        description: '',
      },
      typeCheck: {
        isPwEyeOn1: false,
        isPwEyeOn2: false,
        isPwEyeOn3: false,
      },
      isError: false,
    }
  },
}
</script>
<style></style>
