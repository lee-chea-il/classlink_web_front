<template>
  <div>
    <!--  3Depth -->
    <NavBox />
    <div class="tab-content depth03 ac_manage_pay">
      <div class="tab-pane active">
        <div class="search_section">
          <div class="right_area">
            <button class="btn btn_crud_default" @click="goBackPage">
              돌아가기
            </button>
          </div>
        </div>
        <!-- 검색 영역 -->
        <CardInfoBox
          :cardInfo="cardInfo"
          :myCardInfo="myCardInfo"
          :isBillingContact="isBillingContact"
          :isBuyerContact="isBuyerContact"
          :isPaymentType="isPaymentType"
          :isCardInfoTab="true"
          @click-updateIcon="onClickUpdateIcon"
          @change-input="changeCardInfoInput"
          @click-save="onClickSaveBtn"
          @click-cancel="onClickCancelBtn"
          @click-sameContact="changeSameContact"
          @click-sameAddress="changeSameAddress"
        />

        <div class="btn_area">
          <button
            class="btn btn_crud_point"
            type="button"
            data-toggle="modal"
            data-target="#modalServiceSub"
            data-dismiss="modal"
          >
            서비스 구독하기
          </button>
        </div>
      </div>
    </div>
    <SubscribeModal @click-go="goPaymentPlanPage" />
  </div>
</template>
<script>
import NavBox from '@/components/payment/NavBox.vue'
import CardInfoBox from '@/components/payment/CardInfoBox.vue'
import SubscribeModal from '@/components/common/modal/payment/SubscribeModal.vue'
export default {
  name: 'CardInfo',
  components: {
    NavBox,
    CardInfoBox,
    SubscribeModal,
  },
  data() {
    return {
      // 카드정보 확인
      myCardInfo: {
        billingContact: {
          name: '김유진',
          email: 'yoojin@naver.com',
          phone: '010-1123-1234',
          groupName: '에듀케이',
          address: '경기도 이천시 증포동 381',
          addressDetail: '',
          city: '',
          state: '',
          postCode: '',
          country: '대한민국',
        },
        buyerContact: {
          name: '유잔',
          email: 'yoojin@naver.com',
          phone: '010-1123-1234',
          groupName: '에듀케이',
          address: '경기도 이천시 증포동 381',
          addressDetail: '',
          city: '',
          state: '',
          postCode: '',
          country: '대한민국',
          businessNumber: '',
        },
        paymentType: {
          paymentType: '신용카드',
          name: '유',
          cardNumber: '************0000',
          cvv: '',
          expirationDateYear: '',
          expirationDateMonth: '',
          address: '경기도 이천시 증포동 381',
          addressDetail: '',
          city: '',
          state: '',
          postCode: '',
          country: '대한민국',
        },
      },
      isBillingContact: false,
      isBuyerContact: false,
      isPaymentType: false,
      cardInfo: {},
    }
  },
  created() {
    // 유저 카드 정보 가져오기
    this.cardInfo = JSON.parse(JSON.stringify(this.myCardInfo))
  },
  methods: {
    // 돌아가기
    goBackPage() {
      this.$router.push('/management/payment')
    },
    // 서비스 구독하기
    goPaymentPlanPage() {
      this.$router.push('/management/payment/paymentplan')
    },
    // 정보 수정
    onClickUpdateIcon(id) {
      if (id === 0) {
        if (this.isBillingContact) {
          this.isBillingContact = false
        } else {
          this.isBillingContact = true
        }
      } else if (id === 1) {
        if (this.isBuyerContact) {
          this.isBuyerContact = false
        } else {
          this.isBuyerContact = true
        }
      } else if (this.isPaymentType) {
        this.isPaymentType = false
      } else {
        this.isPaymentType = true
      }
    },
    changeCardInfoInput({ target: { value, name, id } }) {
      if (id === 'billingContact') {
        this.cardInfo.billingContact[name] = value
      } else if (id === 'buyerContact') {
        this.cardInfo.buyerContact[name] = value
      } else {
        this.cardInfo.paymentType[name] = value
      }
    },
    onClickSaveBtn(id) {
      if (id === 'billingContact') {
        this.myCardInfo.billingContact = this.deepCopy(
          this.cardInfo.billingContact
        )
        this.isBillingContact = false
      } else if (id === 'buyerContact') {
        this.myCardInfo.buyerContact = this.deepCopy(this.cardInfo.buyerContact)
        this.isBuyerContact = false
      } else {
        this.myCardInfo.paymentType = this.deepCopy(this.cardInfo.paymentType)
        this.isPaymentType = false
      }
    },
    onClickCancelBtn(id) {
      if (id === 'billingContact') {
        this.cardInfo.billingContact = this.myCardInfo.billingContact

        this.isBillingContact = false
      } else if (id === 'buyerContact') {
        this.cardInfo.buyerContact = this.myCardInfo.buyerContact
        this.isBuyerContact = false
      } else {
        this.cardInfo.paymentType = this.myCardInfo.paymentType
        this.isPaymentType = false
      }
    },
    changeSameContact({ target: { checked } }) {
      if (checked) {
        Object.assign(
          this.cardInfo.buyerContact,
          this.myCardInfo.billingContact
        )
      }
    },
    changeSameAddress({ target: { checked } }) {
      if (checked) {
        this.cardInfo.paymentType.address =
          this.myCardInfo.billingContact.address
        this.cardInfo.paymentType.addressDetail =
          this.myCardInfo.billingContact.addressDetail
        this.cardInfo.paymentType.city = this.myCardInfo.billingContact.city
        this.cardInfo.paymentType.state = this.myCardInfo.billingContact.state
        this.cardInfo.paymentType.postCode =
          this.myCardInfo.billingContact.postCode
        this.cardInfo.paymentType.country =
          this.myCardInfo.billingContact.country
      }
    },
  },
}
</script>
<style scoped></style>
