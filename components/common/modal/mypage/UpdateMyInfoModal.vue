<template>
  <Transition name="modal">
    <div
      v-if="open"
      id="modalMyinfo"
      class="modal modal_myinfo modal-mask modal-index"
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
            <h5 id="modalMyinfo" class="modal-title">내 정보 수정</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <ValidationObserver v-slot="{ invalid }">
            <div class="modal-body">
              <div class="profile_images_area">
                <!-- :style="{
                  'background-image': `url(${myInfo.profile_cw_image})`,
                }" -->
                <!-- <img :src="myInfo.profile_cw_image" class="profile_cw_img" /> -->
                <button
                  type="button"
                  class="btn icons_camera_gray"
                  @click="$emit('upload-cw')"
                ></button>
                <div
                  class="profile_photo"
                  :style="{
                    'background-image': `url(${sample_photo})`,
                  }"
                >
                  <button
                    type="button"
                    class="btn icons_camera"
                    @click="$emit('upload-img')"
                  ></button>
                </div>
              </div>

              <div class="divid_section">
                <div class="info_area info_width">
                  <CustomMypageInput
                    id="mem_name"
                    name="이름"
                    placeholder="이름 입력"
                    rules="min:2|required"
                    type="text"
                    :inputValue="userInfo.mem_name"
                    @change-input="$emit('change-input', $event)"
                  />
                  <CustomMypageInput
                    id="mem_nickname"
                    name="닉네임"
                    rules="min:2|required"
                    placeholder="닉네임 입력"
                    :isCheckBox="true"
                    type="text"
                    :inputValue="userInfo.mem_nickname"
                    :nickNameCheck="nickNameCheck"
                    @change-input="$emit('change-input', $event)"
                    @change-check="$emit('change-check', $event)"
                  />
                  <CustomMypageInput
                    id="mem_phone"
                    name="연락처"
                    placeholder="연락처 입력"
                    rules="phone|required"
                    type="text"
                    :inputValue="userInfo.mem_phone"
                    @change-input="$emit('change-input', $event)"
                  />
                  <CustomMypageInput
                    id="mem_email"
                    name="이메일"
                    rules="required|email"
                    placeholder="이메일 입력"
                    type="email"
                    :inputValue="userInfo.mem_email"
                    :isBtn="true"
                    :isEmailCheck="isEmailCheck"
                    @change-input="$emit('change-input', $event)"
                    @check-email="$emit('check-email')"
                  />

                  <!-- <CustomMypageInput
                    id="authNumber"
                    name="인증번호"
                    rules="required|numeric|digits:6"
                    placeholder="인증번호 입력"
                    type="authNumber"
                    :inputValue="myInfo.authNumber"
                    :isBtn="true"
                    :auth="true"
                    @change-input="$emit('change-input', $event)"
                  /> -->
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn_crud_point_center"
                :class="{ disabled: invalid || !isEmailCheck }"
                :disabled="invalid || !isEmailCheck"
                @click="$emit('click-update')"
              >
                저장하기
              </button>
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import CustomMypageInput from '@/components/common/custom/CustomMypageInput.vue'
export default {
  name: 'UpdateMyInfoModal',
  components: {
    CustomMypageInput,
    ValidationObserver,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    userInfo: {
      type: Object,
      default: null,
    },
    myInfo: {
      type: Object,
      default: null,
    },
    nickNameCheck: {
      type: Boolean,
      default: false,
    },
    isEmailCheck: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      sample_photo: require('@/assets/images/sample_profile_photo.jpg'),
    }
  },
}
</script>
<style scoped>
.profile_img {
  width: 108px;
  height: 108px;
  object-fit: cover;
  border-radius: 55px;
}
/* .form-group {
  padding: 0 15px;
} */

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

.info_width {
  width: 73%;
  border: 0;
}
.modal-index {
  z-index: 999;
}
</style>
