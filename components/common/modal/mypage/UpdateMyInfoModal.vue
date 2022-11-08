<template>
  <div
    id="modalMyinfo"
    class="modal fade modal_myinfo"
    tabindex="-1"
    aria-labelledby="modalMyinfo"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="modalMyinfo" class="modal-title">내 정보 수정</h5>
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
          <div
            class="profile_images_area"
            :style="{
              'background-image': `url(${myInfo.profile_cw_image})`,
            }"
          >
            <!-- <img :src="myInfo.profile_cw_image" class="profile_cw_img" /> -->
            <button
              type="button"
              class="btn icons_camera_gray"
              data-toggle="modal"
              data-target="#modalMyinfo04"
              data-dismiss="modal"
            ></button>
            <div
              class="profile_photo"
              :style="
                myInfo.profile_image === '' || myInfo.profile_image === null
                  ? {
                      'background-image': `url(${sample_photo})`,
                    }
                  : {
                      'background-image': `url(${myInfo.profile_image})`,
                    }
              "
            >
              <button
                type="button"
                class="btn icons_camera"
                data-toggle="modal"
                data-target="#modalMyinfo02"
                data-dismiss="modal"
              ></button>
            </div>
          </div>
          <ValidationObserver>
            <div class="divid_section">
              <div class="info_area">
                <CustomMypageInput
                  id="name"
                  name="이름"
                  placeholder="이름 입력"
                  rules="min:2|required"
                  type="text"
                  :inputValue="myInfo.name"
                  @change-input="$emit('change-input', $event)"
                />

                <CustomMypageInput
                  id="nickname"
                  name="닉네임"
                  rules="min:2|required"
                  placeholder="닉네임 입력"
                  :isCheckBox="true"
                  type="text"
                  :inputValue="myInfo.nickname"
                  :nickNameCheck="nickNameCheck"
                  @change-input="$emit('change-input', $event)"
                  @change-check="$emit('change-check', $event)"
                />

                <CustomMypageInput
                  id="phone"
                  name="연락처"
                  placeholder="연락처 입력"
                  rules="min:2|required"
                  type="text"
                  :inputValue="myInfo.phone"
                  @change-input="$emit('change-input', $event)"
                />

                <CustomMypageInput
                  id="email"
                  name="이메일"
                  rules="required|email"
                  placeholder="이메일 입력"
                  type="email"
                  :inputValue="myInfo.email"
                  :isBtn="true"
                  @change-input="$emit('change-input', $event)"
                />

                <CustomMypageInput
                  id="authNumber"
                  name="인증번호"
                  rules="required|numeric|digits:6"
                  placeholder="인증번호 입력"
                  type="authNumber"
                  :inputValue="myInfo.authNumber"
                  :isBtn="true"
                  :auth="true"
                  @change-input="$emit('change-input', $event)"
                />
              </div>
            </div>
          </ValidationObserver>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point_center" data-dismiss="modal">
            저장하기
          </button>
        </div>
      </div>
    </div>
  </div>
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
    myInfo: {
      type: Object,
      default: null,
    },
    nickNameCheck: {
      type: Boolean,
      default: false,
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
</style>
