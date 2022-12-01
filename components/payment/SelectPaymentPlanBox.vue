<template>
  <div class="step-1">
    <div class="page_title">구독할 요금제를 선택해 주세요</div>

    <div class="select_plan">
      <!-- Swiper -->
      <PaymentSwiper
        :dataList="paymentList"
        :defaultId="myPaymentPlan.id"
        @select-plan="onClickPlan"
      />
    </div>

    <div class="page_title">결제 금액</div>
    <div class="payment_amount">
      <table class="table table-borderless">
        <thead>
          <tr>
            <td>선택한 요금제</td>
            <td>선생님 추가(기본 1명)</td>
            <td>총 결제 예정 금액</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>{{ myPaymentPlan.title }}</p>
              <p>₩{{ priceToString(myPaymentPlan.price) }}/월</p>
            </td>
            <td>
              <i class="cal_symbol">+</i>
              <input
                type="number"
                placeholder=""
                class="form-control form-inline"
                :value="teacherCount"
                min="0"
                @input="$emit('change-count', $event)"
              />
              <div class="num_updn">
                <!-- [개발참조]이미지 버튼 클릭시 수 증감 개발 필요 요소 -->
                <img
                  src="@/assets/images/btn_inputnum_up.png"
                  alt="up"
                  @click="$emit('click-up')"
                />
                <img
                  src="@/assets/images/btn_inputnum_dn.png"
                  alt="down"
                  @click="$emit('click-down')"
                />
              </div>
              <i class="cal_symbol cross">+</i>
              <span>50,000/인당</span>
              <i class="cal_symbol">=</i>
            </td>
            <td>₩{{ priceToString(allPrice) }}/월</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <div class="warning_txt">
      <div class="warning">활성화 선생님 수보다 선택 수가 적습니다</div>
      <div class="explain">
        활성화 선생님 <span class="circle">7</span> 비활성화 선생님
        <span class="circle">3</span>
      </div>
    </div> -->
  </div>
</template>
<script>
import PaymentSwiper from '@/components/payment/PaymentSwiper.vue'
export default {
  name: 'SelectPaymentPlanBox',
  components: { PaymentSwiper },
  props: {
    paymentList: {
      type: Array,
      default: () => [],
    },
    myPaymentPlan: {
      type: Object,
      default: () => {},
    },
    allPrice: {
      type: String,
      default: '',
    },
    teacherCount: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    onClickPlan(idx) {
      this.$emit('select-plan', idx)
    },
    priceToString(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
}
</script>
<style scoped></style>
