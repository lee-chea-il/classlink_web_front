<template>
  <Transition name="modal">
    <div
      v-if="open"
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
            <h5 id="exampleModalLabel" class="modal-title">프랜차이즈 개설</h5>
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
                        id="fra_name"
                        name="프랜차이즈 이름"
                        placeholder="프랜차이즈 이름 입력"
                        rules="required"
                        type="text"
                        :inputValue="franchiseInfo.fra_name"
                        @change-input="$emit('change-input', $event)"
                      />
                      <CustomInput
                        id="fra_phone"
                        name="연락처"
                        placeholder="연락처 입력"
                        rules="phone|required"
                        type="text"
                        :inputValue="franchiseInfo.fra_phone"
                        @change-input="$emit('change-input', $event)"
                      />
                      <CustomInput
                        id="fra_address"
                        name="프랜차이즈 주소"
                        placeholder="프랜차이즈 주소 입력"
                        rules="required"
                        type="text"
                        :isAddressBtn="true"
                        :inputValue="franchiseInfo.fra_address"
                        @change-input="$emit('change-input', $event)"
                        @click-address="$emit('click-address', $event)"
                      />
                      <CustomInput
                        id="fra_address2"
                        name="프랜차이즈 상세 주소"
                        placeholder="프랜차이즈 상세 주소 입력"
                        rules="required"
                        type="text"
                        :inputValue="franchiseInfo.fra_address2"
                        @change-input="$emit('change-input', $event)"
                      />

                      <!-- <CustomInput
                        id="ins_desc"
                        name="프랜차이즈 설명"
                        placeholder="프랜차이즈 설명 입력"
                        rules="required"
                        type="text"
                        :inputValue="franchiseInfo.ins_desc"
                        @change-input="$emit('change-input', $event)"
                      /> -->

                      <button
                        class="btn btn_crud_point btn_mb"
                        :disabled="invalid"
                        @click.prevent="$emit('open-institution')"
                      >
                        프랜차이즈 개설하기
                      </button>
                    </form>
                  </ValidationObserver>
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
  name: 'OpenFranchiseModal',
  components: { ValidationObserver, CustomInput },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    franchiseInfo: {
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
