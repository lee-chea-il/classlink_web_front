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
              id="ins_name"
              name="교육기관 이름"
              placeholder="교육기관 이름 입력"
              rules="required"
              type="text"
              :inputValue="institutionInfo.ins_name"
              @change-input="onChangeEduInfoInput"
            />
            <CustomInput
              id="ins_phone"
              name="연락처"
              placeholder="연락처 입력"
              rules="required"
              type="text"
              :inputValue="institutionInfo.ins_phone"
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
              id="ins_address1"
              name="교육기관 주소"
              placeholder="교육기관 주소 입력"
              rules="required"
              type="text"
              :isAddressBtn="true"
              :inputValue="institutionInfo.ins_address1"
              @change-input="onChangeEduInfoInput"
              @click-address="openModalAddress"
            />

            <CustomInput
              id="ins_address2"
              name="교육기관 상세 주소"
              placeholder="교육기관 상세 주소 입력"
              rules="required"
              type="text"
              :inputValue="institutionInfo.ins_address2"
              @change-input="onChangeEduInfoInput"
            />

            <CustomInput
              id="ins_desc"
              name="교육기관 설명"
              placeholder="교육기관 설명 입력"
              rules="required"
              type="text"
              :inputValue="institutionInfo.ins_desc"
              @change-input="onChangeEduInfoInput"
            />

            <button
              class="btn btn_crud_point btn_mt"
              :class="{ disabled: invalid }"
              data-dismiss="modal"
              @click.prevent
              @click="OpenInstitution"
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
    <!-- 설명 모달 -->
    <SuccessModalDesc
      :open="successModalDesc.open"
      :title="successModalDesc.title"
      :desc="successModalDesc.desc"
      @close="onCloseSuccessModalDesc"
      @confirm="goMainPage"
    />
  </div>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import CustomInput from '@/components/common/custom/CustomInput.vue'
import MapSearchModal from '@/components/common/modal/mypage/MapSearchModal.vue'
import { apiLogin } from '@/services'
import SuccessModalDesc from '@/components/common/modal/signup/SuccessModalDesc.vue'
export default {
  name: 'RegisterInstitution',
  components: {
    ValidationObserver,
    CustomInput,
    MapSearchModal,
    SuccessModalDesc,
  },
  layout: 'LoginLayout',
  data() {
    return {
      institutionInfo: {
        fra_code: '',
        ins_address1: '',
        ins_address2: '',
        ins_desc: '',
        ins_name: '',
        ins_phone: '',
        zone_code: '',
        mem_idx: this.$store.state.common.user.mem_idx,
      },
      mapSearchModal: {
        open: false,
        target: '',
      },
      // 모달
      successModalDesc: {
        open: false,
        title: '',
        desc: '',
      },
    }
  },
  methods: {
    // 모달 이벤트
    openSuccessModalDesc(tit, msg) {
      this.successModalDesc = {
        open: true,
        title: tit,
        desc: msg,
      }
    },
    onCloseSuccessModalDesc() {
      this.successModalDesc.open = false
    },

    // 교육기관 정보 수정
    onChangeEduInfoInput({ target: { value, id } }) {
      this.institutionInfo[id] = value
      if (id === 'ins_phone') {
        this.institutionInfo[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(-{1,2})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
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
      this.institutionInfo.zone_code = data.zonecode
      const selectAddress = data.userSelectedType
      console.log(selectAddress)
      if (selectAddress === 'J') {
        this.institutionInfo.ins_address1 = data.jibunAddress
      } else if (selectAddress === 'R') {
        this.institutionInfo.ins_address1 = data.roadAddress
      }
      this.mapSearchModal.open = false
    },

    // 교육기관 개설 api
    async OpenInstitution() {
      const payload = this.institutionInfo
      await apiLogin
        .postOpenInstitution(payload)
        .then((res) => {
          console.log(res)
          this.openSuccessModalDesc(
            '교육기관 개설',
            '교육기관이 개설되었습니다.'
          )
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 메인 페이지로 이동
    goMainPage() {
      this.$router.push('/')
    },
  },
}
</script>
<style scoped>
.btn_mt {
  margin-top: 30px;
}
</style>
