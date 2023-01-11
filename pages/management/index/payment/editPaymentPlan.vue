<template>
  <div>
    <NavBox />

    <div class="tab-content depth03 ac_manage_pay">
      <div class="tab-pane active">
        <!-- [개발참조]구독중 서비스가 없을때  -->
        <div v-if="!myPaymentPlan.title" class="page_nodata">
          <p>
            현재 구독 중인 서비스가 없습니다.<br />
            서비스를 구독하여 사용해 보세요.
          </p>
          <p>
            <button class="btn btn_crud_point">내 카드 등록</button>
            <button class="btn btn_crud_point">서비스 구독</button>
          </p>
        </div>
        <div v-else>
          <SelectPaymentPlanBox
            v-show="isEditStepFlag === 0"
            :paymentList="paymentList"
            :myPaymentPlan="myPaymentPlan"
            :allPrice="allPriceString"
            :teacherCount="teacherCount"
            @select-plan="selectPaymentPlan"
            @change-count="changeTeacherCount"
            @click-up="onClickCountUpBtn"
            @click-down="onClickCountDownBtn"
          />
          <CardInfoBox
            v-show="isEditStepFlag === 1"
            :cardInfo="cardInfo"
            :myCardInfo="myCardInfo"
            :isBillingContact="isBillingContact"
            :isBuyerContact="isBuyerContact"
            :isPaymentType="isPaymentType"
            @click-updateIcon="onClickUpdateIcon"
            @change-input="changeCardInfoInput"
            @click-save="onClickSaveBtn"
            @click-cancel="onClickCancelBtn"
            @click-sameContact="changeSameContact"
            @click-sameAddress="changeSameAddress"
          />
          <ConfirmPaymentPlan v-show="isEditStepFlag === 2" />
          <Payment v-show="isEditStepFlag === 3" />
        </div>
        <div class="btn_area">
          <button class="btn btn_crud_default" @click="onClickPrevBtn">
            {{ isEditStepFlag === 0 ? '취소' : '이전' }}
          </button>
          <button class="btn btn_crud_point" @click="onClickNextBtn">
            {{ isEditStepFlag === 2 ? '결제' : '다음' }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- //container -->
</template>
<script>
import NavBox from '@/components/payment/NavBox.vue'
import SelectPaymentPlanBox from '@/components/payment/SelectPaymentPlanBox.vue'
import CardInfoBox from '@/components/payment/CardInfoBox.vue'
import ConfirmPaymentPlan from '@/components/payment/ConfirmPaymentPlan.vue'
import Payment from '@/components/payment/Payment.vue'
export default {
  name: 'EditPaymentPlan',
  components: {
    NavBox,
    SelectPaymentPlanBox,
    CardInfoBox,
    ConfirmPaymentPlan,
    Payment,
  },
  data() {
    return {
      isEditStepFlag: 0,
      paymentList: [
        {
          id: 0,
          title: 'Free',
          price: '무료(1개월)',
          classLink: [
            '최대학생수 20명',
            '스쿨월드',
            '클래스월드',
            '스터디카페',
            '본관',
            '갤러리',
            '메타수업준비',
            '선생님 추가 불가',
            '화면공유',
            '음성채팅',
            '화상채팅',
            '전칠판기능',
            '판서저장',
          ],
          classBoard: [
            '자료실 5G',
            '공지사항',
            '과제함',
            '노트함',
            '필기함',
            '강의계획서',
            '출결',
          ],
          franchise: [],
          description: [
            '최대 학생 수 20명',
            '자료실 용량 5GB',
            '선생님 추가 불가',
            '프랜차이즈 확장 불가',
          ],
        },
        {
          id: 1,
          title: 'Light',
          price: '400000',
          classLink: [
            '최대학생수 40명',
            '스쿨월드',
            '클래스월드',
            '스터디카페',
            '본관',
            '갤러리',
            '메타수업준비',
            '선생님 추가',
            '화면공유',
            '음성채팅',
            '화상채팅',
            '전칠판기능',
            '판서저장',
          ],
          classBoard: [
            '자료실 50G',
            '공지사항',
            '과제함',
            '노트함',
            '필기함',
            '강의계획서',
            '출결',
          ],
          franchise: [],
          description: [
            '최대 학생 수 40명',
            '자료실 용량 50GB',
            '선생님 추가 가능',
            '프랜차이즈 확장 불가',
          ],
        },
        {
          id: 2,
          title: 'Basic',
          price: '700000',
          classLink: [
            '최대학생수 70명',
            '스쿨월드',
            '클래스월드',
            '스터디카페',
            '본관',
            '갤러리',
            '메타수업준비',
            '선생님 추가',
            '화면공유',
            '음성채팅',
            '화상채팅',
            '전칠판기능',
            '판서저장',
          ],
          classBoard: [
            '자료실 70G',
            '공지사항',
            '과제함',
            '노트함',
            '필기함',
            '강의계획서',
            '출결',
          ],
          franchise: [],
          description: [
            '최대 학생 수 70명',
            '자료실 용량 70GB',
            '선생님 추가 가능',
            '프랜차이즈 확장 불가',
          ],
        },
        {
          id: 3,
          title: 'Standard',
          price: '1000000',
          classLink: [
            '최대학생수 200명',
            '스쿨월드',
            '클래스월드',
            '스터디카페',
            '본관',
            '갤러리',
            '메타수업준비',
            '선생님 추가',
            '화면공유',
            '음성채팅',
            '화상채팅',
            '전칠판기능',
            '판서저장',
          ],
          classBoard: [
            '자료실 100G',
            '공지사항',
            '과제함',
            '노트함',
            '필기함',
            '강의계획서',
            '출결',
          ],
          franchise: ['가맹사업', '자료공유', '홍보관'],
          description: [
            '최대 학생 수 200명',
            '자료실 용량 100GB',
            '선생님 추가 가능',
            '프랜차이즈 확장 가능',
          ],
        },
        {
          id: 4,
          title: 'Premium',
          price: '3000000',
          classLink: [
            '최대학생수 300명',
            '스쿨월드',
            '클래스월드',
            '스터디카페',
            '본관',
            '갤러리',
            '메타수업준비',
            '선생님 추가',
            '화면공유',
            '음성채팅',
            '화상채팅',
            '전칠판기능',
            '판서저장',
          ],
          classBoard: [
            '자료실 200G',
            '공지사항',
            '과제함',
            '노트함',
            '필기함',
            '강의계획서',
            '출결',
          ],
          franchise: ['가맹사업', '자료공유', '홍보관'],
          description: [
            '최대 학생 수 300명',
            '자료실 용량 200GB',
            '선생님 추가 가능',
            '프랜차이즈 확장 가능',
          ],
        },
        {
          id: 5,
          title: 'Enterprise',
          price: '5000000',
          classLink: [
            '최대학생수 1,000명',
            '스쿨월드',
            '클래스월드',
            '스터디카페',
            '본관',
            '갤러리',
            '메타수업준비',
            '선생님 추가',
            '화면공유',
            '음성채팅',
            '화상채팅',
            '전칠판기능',
            '판서저장',
          ],
          classBoard: [
            '자료실 300G',
            '공지사항',
            '과제함',
            '노트함',
            '필기함',
            '강의계획서',
            '출결',
          ],
          franchise: ['가맹사업', '자료공유', '홍보관'],
          description: [
            '최대 학생 수 1,000명',
            '자료실 용량 300GB',
            '선생님 추가 가능',
            '프랜차이즈 확장 가능',
          ],
        },
      ],
      myPaymentPlan: {
        id: 1,
        title: 'Light',
        price: '400000',
        classLink: [
          '최대학생수 40명',
          '스쿨월드',
          '클래스월드',
          '스터디카페',
          '본관',
          '갤러리',
          '메타수업준비',
          '선생님 추가',
          '화면공유',
          '음성채팅',
          '화상채팅',
          '전칠판기능',
          '판서저장',
        ],
        classBoard: [
          '자료실 50G',
          '공지사항',
          '과제함',
          '노트함',
          '필기함',
          '강의계획서',
          '출결',
        ],
        franchise: [],
        description: [
          '최대 학생 수 40명',
          '자료실 용량 50GB',
          '선생님 추가 가능',
          '프랜차이즈 확장 불가',
        ],
      },
      teacherCount: 0,
      allPrice: '',
      allPriceNumber: 0,
      allPriceString: '',
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
    // 선생님 수 추가 총 결제액
    this.allPrice = JSON.parse(JSON.stringify(this.myPaymentPlan.price))
    this.allPriceString = this.allPrice
    // 유저 카드 정보 가져오기
    this.cardInfo = JSON.parse(JSON.stringify(this.myCardInfo))
  },
  methods: {
    // 깊은 복사
    deepCopy(data) {
      return JSON.parse(JSON.stringify(data))
    },
    // 요금제 선택
    selectPaymentPlan(idx) {
      this.myPaymentPlan = this.paymentList[idx]
      this.allPrice = JSON.parse(JSON.stringify(this.myPaymentPlan.price))
      this.allPriceString = this.allPrice
    },
    // 선생님 추가
    changeTeacherCount({ target: { value } }) {
      const count = parseInt(value)
      this.teacherCount = count
    },
    onClickCountUpBtn() {
      if (this.myPaymentPlan.title === 'Free') {
        return false
      }
      this.teacherCount++
      this.allPriceNumber = parseInt(this.allPrice)
      this.allPriceNumber = this.allPriceNumber + this.teacherCount * 50000
      this.allPriceString = String(this.allPriceNumber)
      console.log(this.allPriceString)
    },
    onClickCountDownBtn() {
      if (this.teacherCount === 0) {
        return false
      } else {
        this.teacherCount--
        this.allPriceNumber = parseInt(this.allPrice)
        this.allPriceNumber = this.allPriceNumber + this.teacherCount * 50000
        this.allPriceString = String(this.allPriceNumber)
        console.log(this.allPriceString)
      }
    },
    // 다음 버튼
    onClickNextBtn() {
      if (this.isEditStepFlag === 2) {
        return false
      } else {
        this.isEditStepFlag++
      }
    },
    // 뒤로 버튼
    onClickPrevBtn() {
      if (this.isEditStepFlag === 0) {
        this.$router.push('/management/payment')
        return false
      } else {
        this.isEditStepFlag--
      }
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
