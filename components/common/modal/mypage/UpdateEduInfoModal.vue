<template>
  <Transition name="modal">
    <div
      v-if="open"
      id="modalInstinfo01"
      class="modal modal_Instinfo01 modal-mask modal-index"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              교육기관 정보 수정
            </h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div
              class="thumbnail_area"
              :style="{
                'background-image': `url(${eduInfo.cw_image})`,
              }"
            >
              <button
                type="button"
                class="btn icons_camera_gray"
                data-toggle="modal"
                data-target="#modalInstinfo04"
                data-dismiss="modal"
              ></button>
              <i id="thumbnail"></i>
              <div class="edit_result">
                <button
                  type="button"
                  class="btn icons_camera"
                  data-toggle="modal"
                  data-target="#modalInstinfo02"
                  data-dismiss="modal"
                ></button>
                <div
                  class="outer2"
                  :style="{
                    'background-image': `url(${eduInfo.logo_image})`,
                  }"
                >
                  <i
                    v-if="
                      eduInfo.logo_image === null || eduInfo.logo_image === ''
                    "
                    class="icons_thumbnail"
                  ></i>
                </div>
              </div>
            </div>

            <div class="form_section">
              <ValidationObserver>
                <form>
                  <CustomInput
                    id="ins_name"
                    name="교육기관 이름"
                    placeholder="교육기관 이름 입력"
                    rules="min:2|required"
                    type="text"
                    :inputValue="institutionInfo.ins_name"
                    :isEduInfo="true"
                    @change-input="$emit('change-input', $event)"
                  />

                  <CustomInput
                    id="ins_phone"
                    name="연락처"
                    placeholder="연락처 입력"
                    rules="phone|required"
                    type="text"
                    :inputValue="institutionInfo.ins_phone"
                    :isEduInfo="true"
                    @change-input="$emit('change-input', $event)"
                  />

                  <CustomInput
                    id="ins_address1"
                    name="교육기관 주소"
                    placeholder="교육기관 주소 입력"
                    rules="required"
                    type="text"
                    :isAddressBtn="true"
                    :inputValue="institutionInfo.ins_address1"
                    :isEduInfo="true"
                    @change-input="$emit('change-input', $event)"
                    @click-address="$emit('click-address', $event)"
                  />
                  <CustomInput
                    id="ins_address2"
                    name="교육기관 상세 주소"
                    placeholder="교육기관 상세 주소 입력"
                    rules="required"
                    type="text"
                    :isEduInfo="true"
                    :inputValue="institutionInfo.ins_address2"
                    @change-input="$emit('change-input', $event)"
                  />

                  <CustomInput
                    id="ins_desc"
                    name="교육기관 설명"
                    placeholder="교육기관 설명 입력"
                    type="text"
                    :isEduInfo="true"
                    :inputValue="institutionInfo.ins_desc"
                    @change-input="$emit('change-input', $event)"
                  />
                </form>
              </ValidationObserver>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">저장</button>
            <button class="btn btn_crud_default" @click="$emit('close')">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import CustomInput from '@/components/common/custom/CustomInput.vue'
export default {
  name: 'UpdateEduInfoModal',
  components: {
    CustomInput,
    ValidationObserver,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
    eduInfo: {
      type: Object,
      default: () => {},
    },
    institutionInfo: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style scoped>
.thumbnail_area {
  background-size: cover !important;
  background-position: center !important;
}
.outer2 {
  background-size: cover;
  background-position: center;
}
.form-group {
  padding: 0px !important;
}
</style>
