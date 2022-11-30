<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalMyinfo"
      class="modal modal_myinfo ac_manage_std modal-mask modal-index"
      tabindex="-1"
      aria-labelledby="modalMyinfo"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
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
              <div
                class="profile_photo"
                :style="
                  studentInfo.profile_image === '' ||
                  studentInfo.profile_image === null
                    ? {
                        'background-image': `url(${sample_photo})`,
                      }
                    : {
                        'background-image': `url(${studentInfo.profile_image})`,
                      }
                "
              >
                <!-- <span
                  style="
                    background-image: url(../images/sample_profile_photo.jpg);
                  "
                ></span> -->
                <button
                  type="button"
                  class="btn icons_camera"
                  @click="$emit('click-profile')"
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
                      <button
                        class="btn btn_choice"
                        :class="
                          studentInfo.identity.includes('학생')
                            ? 'active'
                            : false
                        "
                        @click="$emit('click-identity', '학생')"
                      >
                        학생
                      </button>
                      <button
                        class="btn btn_choice"
                        :class="
                          studentInfo.identity.includes('학부모')
                            ? 'active'
                            : false
                        "
                        @click="$emit('click-identity', '학부모')"
                      >
                        학부모
                      </button>
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
                      <button
                        class="btn btn_activated"
                        :class="studentInfo.grade_type === 0 ? 'active' : ''"
                        @click="$emit('click-grade')"
                      >
                        학년
                      </button>
                      <div class="dropdown form-inline">
                        <button
                          class="btn dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {{ studentInfo.grade }}
                        </button>
                        <div class="dropdown-menu">
                          <a
                            v-for="(item, idx) in gradeList"
                            :key="idx"
                            class="dropdown-item"
                            href="#"
                            @click="$emit('select-grade', item.title)"
                            >{{ item.title }}</a
                          >
                        </div>
                      </div>
                      <button
                        class="btn btn_activated"
                        :class="studentInfo.grade_type === 1 ? 'active' : ''"
                        @click="$emit('click-adult')"
                      >
                        성인
                      </button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label">성별</label>
                    <div class="col">
                      <button
                        class="btn btn_activated"
                        :class="studentInfo.gender === 0 ? 'active' : ''"
                        @click="$emit('click-men')"
                      >
                        남
                      </button>
                      <button
                        class="btn btn_activated"
                        :class="studentInfo.gender === 1 ? 'active' : ''"
                        @click="$emit('click-women')"
                      >
                        여
                      </button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >상태 변경</label
                    >
                    <div class="col">
                      <button
                        class="btn btn_activated"
                        :class="studentInfo.status ? 'active' : ''"
                        @click="$emit('click-statusTrue')"
                      >
                        활성화
                      </button>
                      <button
                        class="btn btn_activated"
                        :class="!studentInfo.status ? 'active' : ''"
                        @click="$emit('click-statusFalse')"
                      >
                        비활성화
                      </button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >학생 상태</label
                    >
                    <div class="col">
                      <button
                        class="btn btn_activated"
                        data-toggle="modal"
                        data-target="#modalReassignstudent"
                        :class="studentInfo.student_status ? 'active' : ''"
                        @click="$emit('click-stuStatusTrue')"
                      >
                        재원
                      </button>
                      <button
                        class="btn btn_activated"
                        :class="!studentInfo.student_status ? 'active' : ''"
                        @click="$emit('click-stuStatusFalse')"
                      >
                        퇴원
                      </button>
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
                      <CustomOperationInput
                        id="attendance_num"
                        name="출결번호"
                        placeholder="출결번호입력"
                        rules="attendance"
                        type="text"
                        :isIdCheckBtn="true"
                        :inputValue="studentInfo.attendance_num"
                        :isStudentInput="true"
                        @change-input="$emit('change-input', $event)"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >학생 연락처</label
                    >
                    <div class="col">
                      <CustomOperationInput
                        id="phone"
                        name="학생 연락처"
                        placeholder="학생 연락처입력"
                        type="text"
                        :isStudentInput="true"
                        :inputValue="studentInfo.phone"
                        @change-input="$emit('change-input', $event)"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >학교 이름</label
                    >
                    <div class="col">
                      <CustomOperationInput
                        id="school"
                        name="학교 이름"
                        placeholder="학교 이름입력"
                        type="text"
                        :isStudentInput="true"
                        :inputValue="studentInfo.school"
                        @change-input="$emit('change-input', $event)"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >수강일</label
                    >
                    <div class="col">
                      <CustomOperationInput
                        id="lecture_date"
                        name="수강일"
                        placeholder="2022-11-18"
                        type="text"
                        :inputValue="studentInfo.lecture_date"
                        :isBirthdayBtn="true"
                        :isStudentInput="true"
                        @change-input="$emit('change-input', $event)"
                        @click-birthday="$emit('click-lecturedate')"
                      />
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
                      <CustomOperationInput
                        id="birthday"
                        name="생년월일"
                        placeholder="2022-11-18"
                        type="text"
                        :inputValue="studentInfo.birthday"
                        :isBirthdayBtn="true"
                        :isStudentInput="true"
                        @change-input="$emit('change-input', $event)"
                        @click-birthday="$emit('click-birthday')"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >이메일</label
                    >
                    <div class="col">
                      <CustomOperationInput
                        id="email"
                        name="이메일"
                        placeholder="이메일입력"
                        rules="email"
                        type="email"
                        :isStudentInput="true"
                        :inputValue="studentInfo.email"
                        @change-input="$emit('change-input', $event)"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="st_title00 col-form-label"
                      >학부모 연락처</label
                    >
                    <div class="col">
                      <CustomOperationInput
                        id="phone"
                        name="학부모 연락처"
                        placeholder="학부모 연락처입력"
                        type="text"
                        :isStudentInput="true"
                        :inputValue="studentInfo.parent_phone"
                        @change-input="$emit('change-input', $event)"
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
                          :value="familySearchText"
                          @input="$emit('change-familyInput', $event)"
                          @keyup.enter="$emit('search-family')"
                        />
                        <div class="input-group-append">
                          <button
                            id="modalFamilySearch"
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
                    <div
                      v-for="(item, idx) in studentInfo.family"
                      :key="idx"
                      class="friends"
                    >
                      <span>{{ item.name }}</span
                      ><span class="divid"></span
                      ><span class="frid">{{ item.account }}</span>
                      <button class="btn btn_crud_default">상세</button>
                      <button
                        class="btn icons_minus_circle_off"
                        type="button"
                        @click="$emit('click-deleteFamily', item.id)"
                      ></button>
                    </div>
                  </div>
                  <!-- /.일촌 id검색 결과 -->
                </div>
              </div>
              <!-- /.오른쪽 영역 -->
              <div class="st_title01">
                <!-- 배정받은 강좌 정보 -->
                <div v-if="!isNewStudent" class="lacture_info">
                  <div class="title">배정받은 강좌 정보</div>
                  <div class="list_area">
                    <div
                      v-for="(item, idx) in studentInfo.lectureInfo"
                      :key="idx"
                      class="lacture"
                    >
                      {{ item }}
                    </div>
                  </div>
                </div>
                <!-- /.배정받은 강좌 정보-->
              </div>
            </div>
            <!-- 사용분류에 따른 하단 버튼 -->
            <div v-if="isNewStudent" class="btn_section regi">
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
            <div v-else class="btn_section">
              <button
                class="btn btn_crud_default"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#modalPwchange"
              >
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
    nickNameCheck: {
      type: Boolean,
      default: false,
    },
    studentInfo: {
      type: Object,
      default: () => {},
    },
    familySearchText: {
      type: String,
      default: '',
    },
    isNewStudent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      today: Date(),
      gradeList: [
        { id: 0, title: '초1' },
        { id: 1, title: '초2' },
        { id: 2, title: '초3' },
        { id: 3, title: '초4' },
        { id: 4, title: '초5' },
        { id: 5, title: '초6' },
        { id: 6, title: '중1' },
        { id: 7, title: '중2' },
        { id: 8, title: '중3' },
        { id: 9, title: '고1' },
        { id: 10, title: '고2' },
        { id: 11, title: '고3' },
      ],
      sample_photo: require('@/assets/images/sample_profile_photo.jpg'),
    }
  },
}
</script>
<style scoped>
.invalid_text {
  height: 5px;
  margin-top: -32px !important;
}
.modal-index {
  z-index: 999;
}
.profile_img {
  width: 108px;
  height: 108px;
  object-fit: cover;
  border-radius: 55px;
}
.profile_images_area {
  width: 100%;
  height: 170px;
  background-size: cover !important;
  background-position: center !important;
}

.profile_photo {
  border-radius: 50;
  background-size: cover;
  background-position: center;
}
.form-control[readonly] {
  background-color: #ffffff;
  opacity: 1;
}
</style>
