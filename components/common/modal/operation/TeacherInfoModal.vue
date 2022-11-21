<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalMyinfo"
      class="modal modal_myinfo modal_ac_manage_tch modal-mask index"
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
            <h5 id="modalMyinfo" class="modal-title">선생님 상세정보</h5>
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
            <div class="profile_images_area">
              <button
                type="button"
                class="btn icons_camera_gray"
                data-toggle="modal"
                data-target="#modalMyinfo04"
                data-dismiss="modal"
              ></button>
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
              <div class="left_section">
                <div class="info_area left">
                  <div class="form-group row">
                    <label for="" class="title00 col-form-label">이름</label>
                    <div class="col">
                      <CustomOperationInput
                        id="name"
                        name="이름"
                        placeholder="이름입력"
                        rules="min:2|required"
                        type="text"
                        :inputValue="teacherInfo.name"
                        @change-input="$emit('change-input', $event)"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="title00 col-form-label">닉네임</label>
                    <div class="col">
                      <CustomOperationInput
                        id="nickname"
                        name="닉네임"
                        placeholder="닉네임입력"
                        rules="min:2|required"
                        type="text"
                        :nickNameCheck="nickNameCheck"
                        :inputValue="teacherInfo.nickname"
                        :isCheckBox="true"
                        @change-input="$emit('change-input', $event)"
                      />
                      <!-- <div class="group">
                        <input
                          type="text"
                          placeholder="닉네임입력"
                          class="form-control"
                          value=""
                        />
                        <div class="custom-control custom-checkbox custom-sm">
                          <input
                            id="checkbox01"
                            type="checkbox"
                            class="custom-control-input"
                            checked
                          />
                          <label class="custom-control-label" for="checkbox01"
                            >이름과 동일</label
                          >
                        </div>
                      </div> -->
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="title00 col-form-label">ID</label>
                    <div class="col">
                      <span>{{ teacherInfo.account }}</span>
                      <div class="exp_text">*초기 비밀번호:123456</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="title00 col-form-label">성별</label>
                    <div class="col">
                      <button
                        class="btn btn_activated"
                        :class="teacherInfo.gender === 0 ? 'active' : false"
                        @click="$emit('click-gender')"
                      >
                        남
                      </button>
                      <button
                        class="btn btn_activated"
                        :class="teacherInfo.gender === 1 ? 'active' : false"
                        @click="$emit('click-gender')"
                      >
                        여
                      </button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="title00 col-form-label"
                      >상태 변경</label
                    >
                    <div class="col">
                      <button
                        class="btn btn_activated"
                        data-toggle="modal"
                        data-target="#modalTcNum"
                        data-dismiss="modal"
                        :class="teacherInfo.status ? 'active' : false"
                      >
                        활성화
                      </button>
                      <button
                        class="btn btn_activated"
                        :class="!teacherInfo.status ? 'active' : false"
                      >
                        비활성화
                      </button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="title00 col-form-label">연락처</label>
                    <div class="col">
                      <CustomOperationInput
                        id="phone"
                        name="연락처"
                        placeholder="연락처입력"
                        rules="required"
                        type="text"
                        :inputValue="teacherInfo.phone"
                        @change-input="$emit('change-input', $event)"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="title00 col-form-label"
                      >기관코드</label
                    >
                    <div class="col">
                      <span class="readonly_txt">0000000</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="title00 col-form-label">이메일</label>
                    <div class="col">
                      <CustomOperationInput
                        id="email"
                        name="이메일"
                        placeholder="연락처입력"
                        rules="required|email"
                        type="email"
                        :inputValue="teacherInfo.email"
                        @change-input="$emit('change-input', $event)"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="title00 col-form-label"
                      >생년월일</label
                    >
                    <div class="col">
                      <CustomOperationInput
                        id="birthday"
                        name="생년월일"
                        placeholder="2022-11-18"
                        rules="required"
                        type="text"
                        :inputValue="teacherInfo.birthday"
                        :isBirthdayBtn="true"
                        @change-input="$emit('change-input', $event)"
                        @click-birthday="onClickBirthdayBtn"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="title00 col-form-label"
                      >신분 목록</label
                    >
                    <div class="col">
                      <span>교육기관장 / 프랜차이즈장</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="title00 col-form-label">직위</label>
                    <div class="col">
                      <div class="dropdown form-inline">
                        <button
                          class="btn dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                        >
                          선생님
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">교육기관장</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.왼쪽 영역 -->
              <!-- 오른쪽 영역 -->
              <div class="right_section">
                <div class="info_area right">
                  <div class="form-group row">
                    <label for="" class="title01 col-form-label"
                      >가르치는 대상</label
                    >
                    <div class="col">
                      <div class="box_area">
                        <div class="row">
                          <div class="title02">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box01chk01"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box01chk01"
                                >초등</label
                              >
                            </div>
                          </div>
                          <div class="title02">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box01chk02"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box01chk02"
                                >중등</label
                              >
                            </div>
                          </div>
                          <div class="title02">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box01chk03"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box01chk03"
                                >고등</label
                              >
                            </div>
                          </div>
                          <div class="title02">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box01chk04"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label box01chk04"
                                for="box01chk04"
                                >대학생</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="title02">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box01chk05"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box01chk05"
                                >성인</label
                              >
                            </div>
                          </div>
                          <!-- <div class="title02">
													<div class="custom-control custom-checkbox custom-sm inline_block">
														<input type="checkbox" class="custom-control-input" id="box01chk01" checked />
														<label class="custom-control-label" for="box01chk01">aa</label>
													</div>
												</div>
												<div class="title02">
													<div class="custom-control custom-checkbox custom-sm inline_block">
														<input type="checkbox" class="custom-control-input" id="box01chk01" checked />
														<label class="custom-control-label" for="box01chk01">aa</label>
													</div>
												</div>
												<div class="title02">
													<div class="custom-control custom-checkbox custom-sm inline_block">
														<input type="checkbox" class="custom-control-input" id="box01chk01" checked />
														<label class="custom-control-label" for="box01chk01">aa</label>
													</div>
												</div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row subject">
                    <label for="" class="title01 col-form-label">과목</label>
                    <div class="col">
                      <div class="box_area">
                        <div class="row">
                          <div class="title02">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box02chk01"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box02chk01"
                                >전체</label
                              >
                            </div>
                          </div>
                          <div class="title02">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box02chk02"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box02chk02"
                                >국어</label
                              >
                            </div>
                          </div>
                          <div class="title02">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box02chk03"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box02chk03"
                                >수학</label
                              >
                            </div>
                          </div>
                          <div class="title02">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box02chk04"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box02chk04"
                                >영어</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="title02">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box02chk05"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box02chk05"
                                >음악</label
                              >
                            </div>
                          </div>
                          <div class="title02">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box02chk06"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box02chk06"
                                >기타</label
                              >
                            </div>
                          </div>
                          <div class="title02">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box02chk07"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box02chk07"
                                >직접입력</label
                              >
                              <div class="form-group">
                                <input
                                  type="text"
                                  placeholder="과목 입력"
                                  class="form-control form-inline xs-input"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group row authority">
                    <label for="" class="title01 col-form-label">권한</label>
                    <div class="col">
                      <div class="box_area">
                        <div class="row">
                          <div class="title03">
                            <span class="tit">공지사항</span>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk01"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk01"
                                >전체</label
                              >
                            </div>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk02"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk02"
                                >반</label
                              >
                            </div>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk03"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk03"
                                >개별공지</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="title03">
                            <span class="tit">수업준비</span>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk04"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk04"
                                >자료실</label
                              >
                            </div>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk05"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk05"
                                >레슨</label
                              >
                            </div>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk06"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk06"
                                >커리큘럼</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="title03">
                            <span class="tit">강좌</span>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk07"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk07"
                                >강좌 개설</label
                              >
                            </div>
                          </div>
                          <div class="title04">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk08"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk08"
                                >시간표 수정</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="title03">
                            <span class="tit">관리</span>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk09"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk09"
                                >결제관리</label
                              >
                            </div>
                          </div>
                          <div class="title04">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk10"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk10"
                                >프랜차이즈 가입관리</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="title03">
                            <span class="tit">운영관리</span>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk11"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk11"
                                >선생님관리</label
                              >
                            </div>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk12"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk12"
                                >학생관리</label
                              >
                            </div>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk13"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk13"
                                >반관리</label
                              >
                            </div>
                          </div>
                          <div class="title03">
                            <span class="tit"></span>
                          </div>
                          <div class="title05">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk14"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk14"
                                >시험관리</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="title03">
                            <span class="tit">건물</span>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk15"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk15"
                                >자료실</label
                              >
                            </div>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk16"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk16"
                                >패키지</label
                              >
                            </div>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk17"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk17"
                                >건물SET</label
                              >
                            </div>
                          </div>
                          <div class="title03">
                            <span class="tit"></span>
                          </div>
                          <div class="title05">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk18"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk18"
                                >빌딩</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="title03">
                            <span class="tit">프랜</span>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk19"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk19"
                                >수업</label
                              >
                            </div>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk20"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk20"
                                >관리</label
                              >
                            </div>
                          </div>
                          <div class="title03">
                            <div
                              class="custom-control custom-checkbox custom-sm inline_block"
                            >
                              <input
                                id="box03chk21"
                                type="checkbox"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="box03chk21"
                                >건물</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.오른쪽 영역 -->
            </div>
          </div>
          <div class="modal-footer">
            <!-- [개발참조] 선생님 상세정보 일때 출력되는 버튼 -->
            <div class="btn_left">
              <button
                class="btn btn_crud_default"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#modalPwchange"
              >
                비밀번호 초기화
              </button>
            </div>
            <div class="btn_right">
              <button class="btn btn_crud_point">저장하기</button>
              <button class="btn btn_crud_default" data-dismiss="modal">
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import CustomOperationInput from '~/components/common/custom/CustomOperationInput.vue'
export default {
  name: 'UpdateTeacherInfoModal',
  components: { CustomOperationInput },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    teacherInfo: {
      type: Object,
      default: () => {},
    },
    nickNameCheck: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClickBirthdayBtn() {
      this.$emit('click-birthday')
    },
  },
}
</script>
<style scoped>
.form-group {
  margin-bottom: 0 !important;
}
.index {
  z-index: 1000;
}
</style>
