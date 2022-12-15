<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalInstRegi"
      class="modal modalInstRegi modal-mask modal-index"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">교육기관 개설</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="section">
              <div id="loginRwrap" class="wrap">
                <div class="form_section">
                  <ValidationObserver v-slot="{ invalid }">
                    <form>
                      <CustomInput
                        id="ins_name"
                        name="교육기관 이름"
                        placeholder="교육기관 이름 입력"
                        rules="required"
                        type="text"
                        :inputValue="institutionInfo.ins_name"
                        @change-input="$emit('change-input', $event)"
                      />
                      <CustomInput
                        id="ins_phone"
                        name="연락처"
                        placeholder="연락처 입력"
                        rules="phone|required"
                        type="text"
                        :inputValue="institutionInfo.ins_phone"
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
                        @change-input="$emit('change-input', $event)"
                        @click-address="$emit('click-address', $event)"
                      />
                      <CustomInput
                        id="ins_address2"
                        name="교육기관 상세 주소"
                        placeholder="교육기관 상세 주소 입력"
                        rules="required"
                        type="text"
                        :inputValue="institutionInfo.ins_address2"
                        @change-input="$emit('change-input', $event)"
                      />

                      <CustomInput
                        id="ins_desc"
                        name="교육기관 설명"
                        placeholder="교육기관 설명 입력"
                        rules="required"
                        type="text"
                        :inputValue="institutionInfo.ins_desc"
                        @change-input="$emit('change-input', $event)"
                      />

                      <button
                        class="btn btn_crud_point btn_mb"
                        :class="{ disabled: invalid }"
                        :disabled="invalid"
                        @click.prevent="$emit('open-institution')"
                      >
                        교육기관 개설하기
                      </button>
                    </form>
                  </ValidationObserver>
                  <!-- [개발참조]:class="disabled"제거시 활성 -->
                  <!-- <button class="btn btn_crud_point disabled btn_mb">
                  교육기관 개설하기
                </button> -->

                  <!-- <div class="question_txt">나중에 만들고 싶어요.</div> -->
                </div>
              </div>
            </div>
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
  name: 'InstitutionInfoModal',
  components: { ValidationObserver, CustomInput },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    institutionInfo: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style scoped>
.btn_mb {
  margin-bottom: 30px;
}
.modal-index {
  z-index: 999;
}
</style>
