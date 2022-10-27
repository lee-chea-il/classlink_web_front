<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="n in 6"
      :key="n"
      class="swiper-slide"
    >
      <div class="study_box">
        <div class="academy">청담어학원</div>
        <div class="time">{{n}} 12:00</div>
        <div class="subject">영어심화리딩</div>
        <div class="lesson">
          <span>영어</span><span class="divid"></span>
          <span>심화 A반</span><br/>
          <span class="teacher">홍길동 선생님</span>
        </div>
      </div>
    </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name:'CustomSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
          slidesPerView: 'auto',
          direction: 'vertical',
          slidesPerView: 3,
          spaceBetween: 70,
          scrollbar: {
            el: '.swiper-scrollbar'/*,
            hide: true*/
          },
          mousewheel: true
        }
    };
  },
  methods: {
      appendSlide() {
        this.swiperSlides.push(this.swiperSlides.length + 1)
      },
      prependSlide() {
        this.swiperSlides.unshift(this.swiperSlides[0] - 1)
      },
      popSlide() {
        this.swiperSlides.pop()
      },
      shiftSlide() {
        this.swiperSlides.shift()
      }
    }
}
</script>

<style scoped></style>
