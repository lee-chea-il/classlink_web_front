<template>
  <swiper
    class="swiper swiper_horizontal swiper_plans"
    :options="swiperOption"
    direction="horizontal"
  >
    <swiper-slide
      v-for="(data, index) in dataList"
      :key="index"
      class="swiper-slide swiper-slide-active"
    >
      <div
        class="plan_card card-margin"
        :class="[
          index === defaultId ? 'highlight' : '',
          index === 0
            ? 'color01'
            : index === 1 || index === 3
            ? 'color02'
            : index === 2 || index === 4
            ? 'color03'
            : 'color04',
        ]"
        @click="$emit('select-plan', index)"
      >
        <div class="plan_box">
          <div class="plan_tit">
            <div class="name">{{ data.title }}</div>
            <div class="price">₩{{ priceToString(data.price) }}/월</div>
          </div>
          <div class="content_list">
            <ul>
              <li v-for="(item, idx) in data.description" :key="idx">
                <i class="icons_check_circle_gray"></i> {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div slot="button-prev" class="swiper-button-prev btn-size"></div>
    <div slot="button-next" class="swiper-button-next btn-size"></div>
    <div
      slot="scrollbar"
      :class="
        isHorizontal
          ? 'swiper-scrollbar'
          : 'swiper-scrollbar swiper-scrollbar-vertical'
      "
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
    SwiperSlide,
  },
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    isHorizontal: {
      type: Boolean,
      default: true,
    },
    copyCheckData: {
      type: Array,
      default: () => [],
    },
    defaultId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        slidesPerView: 3.4,
        spaceBetween: 30,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
        mousewheel: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: this.isHorizontal
          ? {
              360: {
                slidesPerView: 1.2,
              },
              575.98: {
                slidesPerView: 2.2,
              },
              767.98: {
                slidesPerView: 3.2,
              },
            }
          : {
              360: {
                slidesPerView: 1,
              },
              575.98: {
                slidesPerView: 2.2,
              },
              767.98: {
                slidesPerView: 3.3,
              },
            },
      },
    }
  },
  methods: {
    priceToString(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
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
.swiper-slide {
  padding-bottom: 10px;
  width: 334px !important;
}
.btn-size {
  width: 30px;
  height: 30px;
}
.cursor {
  cursor: pointer;
}
.card-margin {
  margin: 0 20px;
}
.highlight {
  border: 3px solid #7391fa;
  border-radius: 23px;
}
</style>
