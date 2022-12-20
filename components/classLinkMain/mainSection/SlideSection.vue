<template>
  <div class="main03">
    <div class="main_tit">
      수업의 특성에 맞는<br />
      실감나는 강의 공간을 소개합니다!
    </div>
    <div class="main_con">
      <span class="blue_bold"
        >현장감과 몰입감을 느낄 수 있도록 현실 세계의 교육 공간</span
      >을 최대한 담았습니다. <br />
      선생님들이 수업의 특성에 맞는 교실을 선택하여 수업을 진행합니다.
    </div>
    <MainSwiper :swiperOption="swiperOption" />
  </div>
</template>

<script>
import MainSwiper from '../common/MainSwiper.vue'

export default {
  name: 'SlideSection',
  components: { MainSwiper },
  props: {
    swiperOption: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
