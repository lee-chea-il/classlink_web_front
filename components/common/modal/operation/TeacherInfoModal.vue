<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalMyinfo"
      class="modal modal_ac_manage_tch modal_myinfo modal-mask index"
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
          <ValidationObserver v-slot="{ invalid }">
            <div class="modal-header">
              <h5 id="modalMyinfo" class="modal-title">
                {{ title }}
              </h5>
              <button type="button" class="close" @click="$emit('close')">
                <i class="icons_close"></i>
              </button>
            </div>
            <div class="modal-body">
              <!-- 프로필 사진 영역 -->
              <div
                class="profile_images_area"
                :style="{
                  'background-image': `url(${teacherInfo.profile_cw_image})`,
                }"
              >
                <button
                  type="button"
                  class="btn icons_camera_gray"
                  @click="$emit('click-cwimg')"
                ></button>
                <!-- [개발참조]: 업로드 사진은 <span>의 backgroung-image로 젹용 -->
                <div
                  class="profile_photo"
                  :style="
                    teacherInfo.profile_image === '' ||
                    teacherInfo.profile_image === null
                      ? {
                          'background-image': `url(${sample_photo})`,
                        }
                      : {
                          'background-image': `url(${teacherInfo.profile_image})`,
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
                <div class="left_section">
                  <div class="info_area left">
                    <div class="form-group row">
                      <label for="" class="title00 col-form-label">이름</label>
                      <div class="col">
                        <CustomOperationInput
                          id="mem_name"
                          name="이름"
                          placeholder="이름입력"
                          rules="min:2|required"
                          type="text"
                          :inputValue="teacherInfo.mem_name"
                          @change-input="$emit('change-input', $event)"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="" class="title00 col-form-label"
                        >닉네임</label
                      >
                      <div class="col">
                        <CustomOperationInput
                          id="mem_nickname"
                          name="닉네임"
                          placeholder="닉네임입력"
                          rules="min:2|required"
                          type="text"
                          :nickNameCheck="nickNameCheck"
                          :inputValue="teacherInfo.mem_nickname"
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
                      <div v-if="register" class="col">
                        <CustomOperationInput
                          id="mem_id"
                          name="ID"
                          placeholder="ID입력"
                          rules="account|required"
                          type="text"
                          :isIdCheckBtn="true"
                          :inputValue="teacherInfo.mem_id"
                          @change-input="$emit('change-input', $event)"
                        />
                        <div class="exp_text mt">*초기 비밀번호:123456</div>
                      </div>
                      <div v-else class="col">
                        <span>{{ teacherInfo.mem_id }}</span>
                        <div class="exp_text">*초기 비밀번호:123456</div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="" class="title00 col-form-label">성별</label>
                      <div class="col">
                        <button
                          class="btn btn_activated"
                          :class="
                            teacherInfo.mem_sex === 'M' ? 'active' : false
                          "
                          @click="$emit('click-m')"
                        >
                          남
                        </button>
                        <button
                          class="btn btn_activated"
                          :class="
                            teacherInfo.mem_sex === 'W' ? 'active' : false
                          "
                          @click="$emit('click-w')"
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
                          :class="
                            teacherInfo.tch_use_yn === 'Y' ? 'active' : false
                          "
                          @click="$emit('click-y')"
                        >
                          활성화
                        </button>
                        <button
                          class="btn btn_activated"
                          :class="
                            teacherInfo.tch_use_yn === 'N' ? 'active' : false
                          "
                          @click="$emit('click-n')"
                        >
                          비활성화
                        </button>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="" class="title00 col-form-label"
                        >연락처</label
                      >
                      <div class="col">
                        <CustomOperationInput
                          id="mem_phone"
                          name="연락처"
                          placeholder="연락처입력"
                          rules="phone|required"
                          type="text"
                          :inputValue="teacherInfo.mem_phone"
                          @change-input="$emit('change-input', $event)"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="" class="title00 col-form-label"
                        >기관코드</label
                      >
                      <div class="col">
                        <span class="readonly_txt">{{
                          teacherInfo.ins_code
                        }}</span>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="" class="title00 col-form-label"
                        >이메일</label
                      >
                      <div class="col">
                        <CustomOperationInput
                          id="mem_email"
                          name="이메일"
                          placeholder="이메일입력"
                          rules="required|email"
                          type="email"
                          :isEmailCheckBtn="true"
                          :inputValue="teacherInfo.mem_email"
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
                          id="mem_birthday"
                          name="생년월일"
                          placeholder="2022-11-18"
                          type="text"
                          :inputValue="teacherInfo.mem_birthday"
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
                        <span>{{
                          teacherInfo.tch_grade === 'M'
                            ? '교육기관 관리자 / 선생님'
                            : '선생님'
                        }}</span>
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
                            {{
                              teacherInfo.tch_grade === 'M'
                                ? '교육기관 관리자'
                                : '선생님'
                            }}
                          </button>
                          <div class="dropdown-menu">
                            <a
                              class="dropdown-item"
                              href="#"
                              @click="$emit('select-position')"
                              >{{
                                teacherInfo.tch_grade === 'M'
                                  ? '선생님'
                                  : '교육기관 관리자'
                              }}</a
                            >
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
                                  id="01"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.target_list.includes('01')
                                  "
                                  @input="$emit('check-target', $event)"
                                />
                                <label class="custom-control-label" for="01"
                                  >초등</label
                                >
                              </div>
                            </div>
                            <div class="title02">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="02"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.target_list.includes('02')
                                  "
                                  @input="$emit('check-target', $event)"
                                />
                                <label class="custom-control-label" for="02"
                                  >중등</label
                                >
                              </div>
                            </div>
                            <div class="title02">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="03"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.target_list.includes('03')
                                  "
                                  @input="$emit('check-target', $event)"
                                />
                                <label class="custom-control-label" for="03"
                                  >고등</label
                                >
                              </div>
                            </div>
                            <div class="title02">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="04"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.target_list.includes('04')
                                  "
                                  @input="$emit('check-target', $event)"
                                />
                                <label
                                  class="custom-control-label update_box01chk04"
                                  for="04"
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
                                  id="05"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.target_list.includes('05')
                                  "
                                  @input="$emit('check-target', $event)"
                                />
                                <label class="custom-control-label" for="05"
                                  >성인</label
                                >
                              </div>
                            </div>
                            <!-- <div class="title02">
													<div class="custom-control custom-checkbox custom-sm inline_block">
														<input type="checkbox" class="custom-control-input" id="update_box01chk01" checked />
														<label class="custom-control-label" for="update_box01chk01">aa</label>
													</div>
												</div>
												<div class="title02">
													<div class="custom-control custom-checkbox custom-sm inline_block">
														<input type="checkbox" class="custom-control-input" id="update_box01chk01" checked />
														<label class="custom-control-label" for="update_box01chk01">aa</label>
													</div>
												</div>
												<div class="title02">
													<div class="custom-control custom-checkbox custom-sm inline_block">
														<input type="checkbox" class="custom-control-input" id="update_box01chk01" checked />
														<label class="custom-control-label" for="update_box01chk01">aa</label>
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
                                  id="update_box02chk01"
                                  type="checkbox"
                                  class="custom-control-input"
                                  checked
                                />
                                <label
                                  class="custom-control-label"
                                  for="update_box02chk01"
                                  >전체</label
                                >
                              </div>
                            </div>
                            <div class="title02">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="update_box02chk02"
                                  type="checkbox"
                                  class="custom-control-input"
                                  checked
                                />
                                <label
                                  class="custom-control-label"
                                  for="update_box02chk02"
                                  >국어</label
                                >
                              </div>
                            </div>
                            <div class="title02">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="update_box02chk03"
                                  type="checkbox"
                                  class="custom-control-input"
                                  checked
                                />
                                <label
                                  class="custom-control-label"
                                  for="update_box02chk03"
                                  >수학</label
                                >
                              </div>
                            </div>
                            <div class="title02">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="update_box02chk04"
                                  type="checkbox"
                                  class="custom-control-input"
                                  checked
                                />
                                <label
                                  class="custom-control-label"
                                  for="update_box02chk04"
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
                                  id="update_box02chk05"
                                  type="checkbox"
                                  class="custom-control-input"
                                  checked
                                />
                                <label
                                  class="custom-control-label"
                                  for="update_box02chk05"
                                  >음악</label
                                >
                              </div>
                            </div>
                            <div class="title02">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="update_box02chk06"
                                  type="checkbox"
                                  class="custom-control-input"
                                  checked
                                />
                                <label
                                  class="custom-control-label"
                                  for="update_box02chk06"
                                  >기타</label
                                >
                              </div>
                            </div>
                            <div class="title02">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="update_box02chk07"
                                  type="checkbox"
                                  class="custom-control-input"
                                  checked
                                />
                                <label
                                  class="custom-control-label"
                                  for="update_box02chk07"
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
                                  id="1"
                                  name="1"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(1)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="1"
                                  >전체</label
                                >
                              </div>
                            </div>
                            <div class="title03">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="2"
                                  name="1"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(2)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="2"
                                  >반</label
                                >
                              </div>
                            </div>
                            <div class="title03">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="3"
                                  name="1"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(3)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="3"
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
                                  id="4"
                                  name="2"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(4)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="4"
                                  >자료실</label
                                >
                              </div>
                            </div>
                            <div class="title03">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="5"
                                  name="2"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(5)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="5"
                                  >레슨</label
                                >
                              </div>
                            </div>
                            <div class="title03">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="6"
                                  name="2"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(6)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="6"
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
                                  id="7"
                                  name="3"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(7)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="7"
                                  >강좌 개설</label
                                >
                              </div>
                            </div>
                            <div class="title04">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="8"
                                  name="3"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(8)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="8"
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
                                  id="9"
                                  name="4"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(9)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="9"
                                  >결제관리</label
                                >
                              </div>
                            </div>
                            <div class="title04">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="10"
                                  name="4"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(10)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="10"
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
                                  id="11"
                                  name="5"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(11)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="11"
                                  >선생님관리</label
                                >
                              </div>
                            </div>
                            <div class="title03">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="12"
                                  name="5"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(12)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="12"
                                  >학생관리</label
                                >
                              </div>
                            </div>
                            <div class="title03">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="13"
                                  name="5"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(13)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="13"
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
                                  id="14"
                                  name="5"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(14)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="14"
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
                                  id="15"
                                  name="6"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(15)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="15"
                                  >자료실</label
                                >
                              </div>
                            </div>
                            <div class="title03">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="16"
                                  name="6"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(16)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="16"
                                  >패키지</label
                                >
                              </div>
                            </div>
                            <div class="title03">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="17"
                                  name="6"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(17)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="17"
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
                                  id="18"
                                  name="6"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(18)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="18"
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
                                  id="19"
                                  name="7"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(19)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="19"
                                  >수업</label
                                >
                              </div>
                            </div>
                            <div class="title03">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="20"
                                  name="7"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(20)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="20"
                                  >관리</label
                                >
                              </div>
                            </div>
                            <div class="title03">
                              <div
                                class="custom-control custom-checkbox custom-sm inline_block"
                              >
                                <input
                                  id="21"
                                  name="7"
                                  type="checkbox"
                                  class="custom-control-input"
                                  :checked="
                                    teacherInfo.auth_list
                                      .map((x) => x.rin_idx)
                                      .includes(21)
                                  "
                                  :disabled="teacherInfo.tch_grade === 'T'"
                                  @input="$emit('check-role', $event)"
                                />
                                <label class="custom-control-label" for="21"
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
              <div v-show="!register" class="btn_left">
                <button
                  class="btn btn_crud_default"
                  @click="$emit('init-password')"
                >
                  비밀번호 초기화
                </button>
              </div>
              <div class="btn_right">
                <button
                  class="btn btn_crud_point"
                  :disabled="invalid"
                  @click="$emit('click-save')"
                >
                  {{ register ? '등록하기' : '저장하기' }}
                </button>
                <button class="btn btn_crud_default" @click="$emit('close')">
                  취소
                </button>
              </div>
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import CustomOperationInput from '~/components/common/custom/CustomOperationInput.vue'
export default {
  name: 'TeacherInfoModal',
  components: { CustomOperationInput, ValidationObserver },
  props: {
    title: { type: String, default: '' },
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
    register: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sample_photo: require('@/assets/images/sample_profile_photo.jpg'),
    }
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
  background-size: cover;
  background-position: center;
}

.mt {
  height: 10px;
}
</style>
