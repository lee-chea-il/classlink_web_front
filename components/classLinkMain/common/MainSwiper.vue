<template>
  <swiper
    ref="swiper"
    class="swiper swiper_horizontal"
    :options="swiperOption"
    direction="horizontal"
  >
    <swiper-slide
      v-for="(data, index) in 6"
      :key="index"
      class="swiper-slide swiper-slide-active"
    >
      <div class="main03_slider autoplay">
        <div :class="`main03_img${data}`"></div>
      </div>
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
    <div slot="button-prev" class="swiper-button-prev btn-size"></div>
    <div slot="button-next" class="swiper-button-next btn-size"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'CustomSwiper',
  title: 'CustomSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    // swiperOption: {
    //   type: Object,
    //   default: () => {},
    // },
  },
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        breakpoints: {
          360: {
            slidesPerView: 1.2,
          },
          575.98: {
            slidesPerView: 2.2,
          },
          767.98: {
            slidesPerView: 3,
          },
        },
      },
    }
  },
}
</script>

<style scoped>
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after,
.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
  content: '';
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  opacity: 0;
}
.page_myhome .today_study .swiper-slide {
  padding-bottom: 10px;
}
.btn-size {
  width: 30px;
  height: 30px;
}
.cursor {
  cursor: pointer;
}
</style>
