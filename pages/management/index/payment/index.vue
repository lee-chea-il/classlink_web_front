<template>
  <div>
    <NavBox />
    <MyPaymentPlanBox :paymentPlan="paymentPlan" />

    <!-- 모달 팝업 ------------------------------------->

    <!-- 구독취소 버튼 클릭 시 출력되는 팝업 -->
    <UnsubscribeModal />
  </div>
</template>
<script>
import NavBox from '@/components/payment/NavBox.vue'
import MyPaymentPlanBox from '@/components/payment/MyPaymentPlanBox.vue'
import UnsubscribeModal from '@/components/common/modal/payment/UnsubscribeModal.vue'
export default {
  name: 'Payment',
  components: {
    NavBox,
    MyPaymentPlanBox,
    UnsubscribeModal,
  },
  data() {
    return {
      paymentPlan: { title: 'basic' },
    }
  },
}
</script>
<style scoped></style>
