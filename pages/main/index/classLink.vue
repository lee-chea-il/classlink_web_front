<template>
  <div>
    <MainVideo />
    <MainSlogan />
    <MainPoint />

    <div id="classworld"></div>
    <SlideSection :swiperOption="swiperOption" />

    <div id="extraact"></div>
    <Main4 />
    <Main5 />

    <NoticeList :noticeList="noticeList" />
  </div>
</template>

<script>
import Main4 from '~/components/classLinkMain/mainSection/Main4.vue'
import Main5 from '~/components/classLinkMain/mainSection/Main5.vue'
import MainPoint from '~/components/classLinkMain/mainSection/MainPoint.vue'
import MainSlogan from '~/components/classLinkMain/mainSection/MainSlogan.vue'
import MainVideo from '~/components/classLinkMain/mainSection/MainVideo.vue'
import NoticeList from '~/components/classLinkMain/mainSection/NoticeList.vue'
import SlideSection from '~/components/classLinkMain/mainSection/SlideSection.vue'

export default {
  name: 'ClassLinkMain',
  components: {
    MainVideo,
    MainSlogan,
    MainPoint,
    SlideSection,
    Main4,
    Main5,
    NoticeList,
  },
  layout: 'MainLayout',
  data() {
    return {
      noticeList: [
        {
          id: 1,
          title: '청담어학원 영어심화리스닝 질문 드려요',
          createdAt: '2020-12-12',
        },
        {
          id: 2,
          title: '청담어학원 수학문제 질문 드려요',
          createdAt: '2020-12-13',
        },
        {
          id: 3,
          title: '청담어학원 사회문제 질문 드려요',
          createdAt: '2020-12-14',
        },
        {
          id: 4,
          title: '청담어학원 과학문제 질문 드려요',
          createdAt: '2020-12-15',
        },
        {
          id: 5,
          title: '청담어학원 국어 질문 드려요',
          createdAt: '2020-12-16',
        },
      ],
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

<style></style>
