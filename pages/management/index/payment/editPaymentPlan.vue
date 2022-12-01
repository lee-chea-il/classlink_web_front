<template>
  <!-- container -->
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <NavBox />

      <div class="tab-content depth03 ac_manage_pay">
        <div class="tab-pane active">
          <!-- [개발참조]구독중 서비스가 없을때 
					<div class="page_nodata">
						<p>
						현재 구독 중인 서비스가 없습니다.<br />
						서비스를 구독하여 사용해 보세요.
						</p>
						<p>
							<button class="btn btn_crud_point">내 카드 등록</button>
							<button class="btn btn_crud_point">서비스 구독</button>
						</p>
					</div>-->
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
          <CardInfoBox v-show="isEditStepFlag === 1" />
          <ConfirmPaymentPlan v-show="isEditStepFlag === 2" />
          <div class="btn_area">
            <button class="btn btn_crud_default">취소</button>
            <button
              class="btn btn_crud_point"
              onclick="location.href = '(완)결제관리-현재요금제편집02.html'"
            >
              다음
            </button>
          </div>
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
export default {
  name: 'EditPaymentPlan',
  components: {
    NavBox,
    SelectPaymentPlanBox,
    CardInfoBox,
    ConfirmPaymentPlan,
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
    }
  },
  created() {
    this.allPrice = JSON.parse(JSON.stringify(this.myPaymentPlan.price))
    this.allPriceString = this.allPrice
  },
  methods: {
    selectPaymentPlan(idx) {
      this.myPaymentPlan = this.paymentList[idx]
      this.allPrice = JSON.parse(JSON.stringify(this.myPaymentPlan.price))
      this.allPriceString = this.allPrice
    },
    changeTeacherCount({ target: { value } }) {
      const count = parseInt(value)
      this.teacherCount = count
    },
    onClickCountUpBtn() {
      this.teacherCount++
      this.allPriceNumber = parseInt(this.allPrice)
      this.allPriceNumber = this.allPriceNumber + this.teacherCount * 50000
      this.allPriceString = String(this.allPriceNumber)
      console.log(this.allPriceString)
    },
    onClickCountDownBtn() {
      this.teacherCount--
      this.allPriceNumber = parseInt(this.allPrice)
      this.allPriceNumber = this.allPriceNumber + this.teacherCount * 50000
      this.allPriceString = String(this.allPriceNumber)
      console.log(this.allPriceString)
    },
  },
}
</script>
<style scoped></style>
