<template>
  <swiper class="swiper swiper_vertical" :options="swiperOption">
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
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-scrollbar"></div>
  </swiper>
</template>
  
  <script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  
  export default {
    name:'CustomSwiper',
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 3.2,
          spaceBetween: 40,
          scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        },
        mousewheel: true
        }
      }
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
  
  <style scoped>
  .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after,
  .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after{
  content:''
  }
  
  .swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  }
  .swiper-pointer-events {
  touch-action: pan-y;
  }
  .swiper {
  width: 100%;
  height: 100%;
  }
  .swiper-pointer-events.swiper-vertical {
  touch-action: pan-x;
  }
  
  
  
  
  
  .swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  }
  .swiper-android .swiper-slide, .swiper-wrapper {
  transform: translate3d(0px,0,0);
  }
  .swiper-vertical>.swiper-wrapper {
  flex-direction: column;
  }
  
  
  
  
  
  
  .swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  }
  .swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  }
  .page_myhome .today_study .swiper-slide {
  padding: 0 40px;
  }
  
  .swiper-scrollbar {
  border-radius: 10px;
  position: relative;
  -ms-touch-action: none;
  background: rgba(0,0,0,.1);
  }
  .swiper-scrollbar.swiper-scrollbar-vertical, .swiper-vertical>.swiper-scrollbar {
  position: absolute;
  right: 3px;
  top: 1%;
  z-index: 50;
  width: 5px;
  height: 98%;
  }
  



  .swiper-button-next, .swiper-button-prev {
    position: absolute;
    margin-top: calc(0px - (var(--swiper-navigation-size)/ 2));
    z-index: 10;
    display: flex;
    justify-content: center;
    color: var(--swiper-navigation-color,var(--swiper-theme-color));
}
.swiper-button-prev, .swiper-rtl .swiper-button-next {
    right: auto;
}
.swiper_vertical .swiper-button-prev {
    top: 24px;
    left: calc(50% - 14px);
    width: auto;
    height: 30px;
    align-items: flex-start;
}
  </style>