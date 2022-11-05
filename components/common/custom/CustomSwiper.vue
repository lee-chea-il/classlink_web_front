<template>
  <swiper :class="(isHorizontal)?'swiper swiper_horizontal lecture':'swiper swiper_vertical'" :options="swiperOption" :direction="(isHorizontal)?'horizontal':'vertical'">
    <swiper-slide
      v-for="data, index in dataList"
      :key="index"
      class="swiper-slide swiper-slide-active"
    >
      <div v-if="!isHorizontal" class="study_box">
        <div class="academy">{{data.academy}}</div>
        <div class="time">{{data.time}}</div>
        <div class="subject">{{data.subject}}</div>
        <div class="lesson">
          <span>{{data.lessonTitle}}</span><span class="divid"></span>
          <span>{{data.lessonClass}}</span><br/>
          <span class="teacher">{{data.teacher}}</span>
        </div>
      </div>

      <div v-else class="study_box">
        <div class="box">
          <div class="subject">{{data.subject}}</div>
          <div class="time">{{data.time}}</div>
          <div class="lesson">
            <span>{{data.lessonTitle}}</span><span class="divid"></span>
            <span>{{data.lessonClass}}</span><span class="divid"></span>
            <span class="teacher">{{data.teacher}}</span>
          </div>
        </div>
        <div class="academy">{{data.academy}}</div>
      </div>
    </swiper-slide>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
    <div slot="scrollbar" :class="(isHorizontal)?'swiper-scrollbar':'swiper-scrollbar swiper-scrollbar-vertical'"
    ></div>
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
      SwiperSlide
    },
    props:{
      dataList:{
        type:Array,
        default:() => []
      },
      isHorizontal:{
        type:Boolean,
        default:true
      },
      copyCheckData:{
        type:Array,
        default:() => []
      }
    },
    data() {
      return {
        swiperOption: {
          direction: (this.isHorizontal)?'horizontal':'vertical',
          slidesPerView: 3.4,
          spaceBetween: (this.isHorizontal)?10:0,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
          },
          mousewheel: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: (this.isHorizontal)?{
            360: {
              slidesPerView: 1.2
            },
            575.98: {
              slidesPerView: 2.2
            },
            767.98: {
              slidesPerView: 3.2
            },
          }:{
            360: {
              slidesPerView: 1
            },
            575.98: {
              slidesPerView: 2.2
            },
            767.98: {
              slidesPerView: 3.3
            },
          }
        }
      }
    }
  }
</script>

<style scoped>
.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after,
.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after{
  content: '';
}
.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
  opacity: 0;
}
.page_myhome .today_study .swiper-slide{
  padding-bottom: 10px;
}
</style>