<template>
  <div
    id="modalInstRegi"
    class="modal fade modalInstRegi"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">교육기관 개설</h5>
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
          <div class="section">
            <div id="loginRwrap" class="wrap">
              <div class="form_section">
                <ValidationObserver v-slot="{ invalid }">
                  <form>
                    <CustomInput
                      id="edu_title"
                      name="교육기관 이름"
                      placeholder="교육기관 이름 입력"
                      rules="required"
                      type="text"
                      :inputValue="eduInfo.edu_title"
                      @change-input="$emit('change-input', $event)"
                    />

                    <CustomInput
                      id="tel"
                      name="연락처"
                      placeholder="연락처 입력"
                      rules="required"
                      type="text"
                      :inputValue="eduInfo.tel"
                      @change-input="$emit('change-input', $event)"
                    />

                    <!-- <div class="form-group">
                      <label for="reg-form02">연락처</label>
                      <input
                        id="reg-form02"
                        type="text"
                        placeholder="연락처 입력"
                        class="form-control"
                      />
                    </div> -->

                    <CustomInput
                      id="address"
                      name="교육기관 주소"
                      placeholder="교육기관 주소 입력"
                      rules="required"
                      type="text"
                      :isAddressBtn="true"
                      :inputValue="eduInfo.address"
                      @change-input="$emit('change-input', $event)"
                      @click-address="$emit('click-address', $event)"
                    />
                    <CustomInput
                      id="address_detail"
                      name="교육기관 상세 주소"
                      placeholder="교육기관 상세 주소 입력"
                      rules="required"
                      type="text"
                      :inputValue="eduInfo.address_detail"
                      @change-input="$emit('change-input', $event)"
                    />

                    <CustomInput
                      id="description"
                      name="교육기관 설명"
                      placeholder="교육기관 설명 입력"
                      rules="required"
                      type="text"
                      :inputValue="eduInfo.description"
                      @change-input="$emit('change-input', $event)"
                    />

                    <button
                      class="btn btn_crud_point btn_mb"
                      :class="{ disabled: invalid }"
                      data-dismiss="modal"
                      @click.prevent
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
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import CustomInput from '@/components/common/custom/CustomInput.vue'
export default {
  name: 'RegistEduModal',
  components: { ValidationObserver, CustomInput },
  props: {
    eduInfo: {
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
</style>
