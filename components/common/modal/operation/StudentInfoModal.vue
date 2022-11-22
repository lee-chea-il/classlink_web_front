<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalMyinfo"
      class="modal modal_myinfo ac_manage_std modal-mask"
      tabindex="-1"
      aria-labelledby="modalMyinfo"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div
        class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="modalMyinfo" class="modal-title">
              학생 개별 등록/학생 상세 정보
            </h5>
            <button
              type="button"
              class="close"
              aria-label="Close"
              @click="$emit('close')"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <!-- 프로필 사진 영역 -->
            <div class="profile_images_area student">
              <!-- [개발참조]: 업로드 사진은 <span>의 backgroung-image로 젹용 -->
              <div class="profile_photo">
                <span
                  style="
                    background-image: url(../images/sample_profile_photo.jpg);
                  "
                ></span>
                <button
                  type="button"
                  class="btn icons_camera"
                  data-toggle="modal"
                  data-target="#modalMyinfo02"
                  data-dismiss="modal"
                ></button>
              </div>
            </div>
            <!-- /.프로필 사진 영역 -->
            <div class="divid_section row">
              <!-- 왼쪽 영역 -->
              <div class="left_area">
                <div class="info_area left">
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label">이름</label>
                    <div class="col">
                      <CustomOperationInput
                        id="name"
                        name="이름"
                        placeholder="이름입력"
                        rules="min:2|required"
                        type="text"
                        :isStudentInput="true"
                        :inputValue="studentInfo.name"
                        @change-input="$emit('change-input', $event)"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >닉네임</label
                    >
                    <div class="col">
                      <div class="group">
                        <CustomOperationInput
                          id="nickname"
                          name="닉네임"
                          placeholder="닉네임입력"
                          rules="min:2|required"
                          type="text"
                          :nickNameCheck="nickNameCheck"
                          :inputValue="studentInfo.nickname"
                          :isStudentInput="true"
                          :isCheckBox="true"
                          @change-input="$emit('change-input', $event)"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-inlinebox row">
                    <label for="" class="st_title00 col-form-label">ID</label>
                    <div class="col">
                      <CustomOperationInput
                        id="account"
                        name="ID"
                        placeholder="ID입력"
                        rules="account|required"
                        type="text"
                        :isIdCheckBtn="true"
                        :inputValue="studentInfo.account"
                        :isStudentInput="true"
                        @change-input="$emit('change-input', $event)"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >나의 신분<br /><span class="exp_txt02"
                        >(중복선택가능)</span
                      ></label
                    >
                    <div class="col">
                      <button class="btn btn_choice active">학생</button>
                      <button class="btn btn_choice">학부모</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.왼쪽 영역 -->
              <!-- 오른쪽 영역 -->
              <div class="right_area">
                <div class="info_area right">
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label">학년</label>
                    <div class="col">
                      <button class="btn btn_activated active">학년</button>
                      <div class="dropdown form-inline">
                        <button
                          class="btn dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          초1
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">초2</a>
                          <a class="dropdown-item" href="#">초3</a>
                          <a class="dropdown-item" href="#">초4</a>
                        </div>
                      </div>
                      <button class="btn btn_activated">성인</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label">성별</label>
                    <div class="col">
                      <button class="btn btn_activated active">남</button>
                      <button class="btn btn_activated">여</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >상태 변경</label
                    >
                    <div class="col">
                      <button class="btn btn_activated active">활성화</button>
                      <button class="btn btn_activated">비활성화</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >학생 상태</label
                    >
                    <div class="col">
                      <button
                        class="btn btn_activated active"
                        data-toggle="modal"
                        data-target="#modalReassignstudent"
                      >
                        재원
                      </button>
                      <button class="btn btn_activated">퇴원</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.오른쪽 영역 -->
            </div>

            <div class="divid_section row">
              <h6 class="st_title01 sub_title">선택 입력 사항</h6>
              <!-- 왼쪽 영역 -->
              <div class="left_area">
                <div class="info_area left">
                  <div class="form-group form-inlinebox row">
                    <label for="" class="st_title00 col-form-label"
                      >출결번호</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control form-inline"
                        value="12345"
                      />
                      <button class="btn btn_crud_default overlap_btn">
                        중복체크
                      </button>
                      <span class="exp_txt"
                        >출결번호는 5자리 숫자로 입력하세요.</span
                      >
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >학생 연락처</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control"
                        value="010-1234-5678"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >학교 이름</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control"
                        value="길동학교"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >수강일</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control form_calendar datePicker"
                        value=""
                      />
                      <button class="btn icons_calendar_off"></button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >등록일</label
                    >
                    <div class="col">1990.01.01</div>
                  </div>
                </div>
              </div>
              <!-- /.왼쪽 영역 -->
              <!-- 오른쪽 영역 -->
              <div class="right_area">
                <div class="info_area right">
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >생년월일</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control form_calendar datePicker"
                        value=""
                      />
                      <button class="btn icons_calendar_off"></button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >이메일</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control"
                        value="example@mail.com"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >학부모 연락처</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control"
                        value="010-1234-5678"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >일촌 ID</label
                    >
                    <div class="col">
                      <div class="input-group input-search form-inline">
                        <input
                          type="text"
                          placeholder="이름/ID 검색"
                          class="form-control"
                        />
                        <div class="input-group-append">
                          <button
                            class="btn icons_search_off"
                            type="button"
                            data-toggle="modal"
                            data-target="#modalFriendsregi"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 일촌 id검색 결과 -->
                  <div class="friend_search">
                    <div class="friends">
                      <span>홍길동</span><span class="divid"></span
                      ><span class="frid"
                        >abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef</span
                      >
                      <button class="btn btn_crud_default">상세</button>
                      <button
                        class="btn icons_minus_circle_off"
                        type="button"
                        data-toggle="modal"
                        data-target="#modalFriendsDelete"
                      ></button>
                    </div>
                    <div class="friends">
                      <span>홍길동</span><span class="divid"></span
                      ><span class="frid">abcdef</span>
                      <button class="btn btn_crud_default">상세</button>
                      <button
                        class="btn icons_minus_circle_off"
                        type="button"
                        data-toggle="modal"
                        data-target="#modalFriendsDelete"
                      ></button>
                    </div>
                  </div>
                  <!-- /.일촌 id검색 결과 -->
                </div>
              </div>
              <!-- /.오른쪽 영역 -->
              <div class="st_title01">
                <!-- 배정받은 강좌 정보 -->
                <div class="lacture_info">
                  <div class="title">배정받은 강좌 정보</div>
                  <div class="list_area">
                    <div class="lacture">영어리딩심화 | 심화 A반</div>
                    <div class="lacture">영어리딩심화 | 심화 A반</div>
                    <div class="lacture">영어리딩심화 | 심화 A반</div>
                    <div class="lacture">영어리딩심화 | 심화 A반</div>
                  </div>
                </div>
                <!-- /.배정받은 강좌 정보-->
              </div>
            </div>
            <!-- 사용분류에 따른 하단 버튼 -->
            <div class="btn_section regi">
              <div class="custom-control custom-checkbox form-inline">
                <input
                  id="checkbox02"
                  type="checkbox"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="checkbox02"
                  >계속 학생 등록하기</label
                >
              </div>
              <button
                class="btn btn_crud_point"
                type="button"
                data-toggle="modal"
                data-target="#modalMyinfoPop"
              >
                등록하기
              </button>
            </div>
            <div class="btn_section">
              <button class="btn btn_crud_default" data-dismiss="modal">
                비밀번호 초기화
              </button>
              <span class="exp_txt"
                >초기 비밀번호는 123456으로 등록됩니다.</span
              >
              <button class="btn btn_crud_point" data-dismiss="modal">
                저장하기
              </button>
            </div>
            <!-- /.사용분류에 따른 하단 버튼 -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import CustomOperationInput from '~/components/common/custom/CustomOperationInput.vue'
export default {
  name: 'StudentInfoModal',
  components: {
    CustomOperationInput,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    studentInfo: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style scoped>
.invalid_text {
  height: 5px;
  margin-top: -32px !important;
}
</style>
