<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <div class="title_type2">
        <h2>교육기관 개설</h2>
      </div>
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
              @change-input="onChangeEduInfoInput"
            />

            <CustomInput
              id="tel"
              name="연락처"
              placeholder="연락처 입력"
              rules="required"
              type="text"
              :inputValue="eduInfo.tel"
              @change-input="onChangeEduInfoInput"
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
              @change-input="onChangeEduInfoInput"
              @click-address="openModalAddress"
            />

            <CustomInput
              id="address"
              name="교육기관 상세 주소"
              placeholder="교육기관 상세 주소 입력"
              rules="required"
              type="text"
              :inputValue="eduInfo.address"
              @change-input="onChangeEduInfoInput"
              @click-address="openModalAddress"
            />

            <CustomInput
              id="description"
              name="교육기관 설명"
              placeholder="교육기관 설명 입력"
              rules="required"
              type="text"
              :inputValue="eduInfo.description"
              @change-input="onChangeEduInfoInput"
            />

            <button
              class="btn btn_crud_point btn_mt"
              :class="{ disabled: invalid }"
              data-dismiss="modal"
              @click.prevent
            >
              교육기관 개설하기
            </button>
          </form>
        </ValidationObserver>
        <div class="question_txt">
          <nuxt-link to="/">나중에 만들고 싶어요.</nuxt-link>
        </div>
      </div>
    </div>
    <!-- 주소 검색 모달 -->
    <MapSearchModal
      :show="mapSearchModal.open"
      @openMap="addressSearched"
      @close="onCloseModalAddress"
    />
  </div>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import CustomInput from '@/components/common/custom/CustomInput.vue'
import MapSearchModal from '@/components/common/modal/mypage/MapSearchModal.vue'
export default {
  name: 'RegistEdu',
  components: { ValidationObserver, CustomInput, MapSearchModal },
  layout: 'LoginLayout',
  data() {
    return {
      eduInfo: {
        edu_title: '',
        tel: '',
        address: '',
        address_detail: '',
        description: '',
      },
      mapSearchModal: {
        open: false,
        target: '',
      },
    }
  },
  methods: {
    // 교육기관 정보 수정
    onChangeEduInfoInput({ target: { value, id } }) {
      this.eduInfo[id] = value
    },

    // 주소 검색 api
    openModalAddress(e) {
      e.preventDefault()
      const { dataset } = e.target
      this.mapSearchModal.open = true
      this.mapSearchModal.target = dataset.target
    },

    onCloseModalAddress() {
      this.mapSearchModal.open = false
    },

    addressSearched(data) {
      const selectAddress = data.userSelectedType
      console.log(selectAddress)
      if (selectAddress === 'J') {
        this.eduInfo.address = data.jibunAddress
      } else if (selectAddress === 'R') {
        this.eduInfo.address = data.roadAddress
      }
      this.mapSearchModal.open = false
    },
  },
}
</script>
<style scoped>
.btn_mt {
  margin-top: 30px;
}
</style>
