<template>
  <swiper class="swiper swiper_horizontal lecture" :options="swiperOption" direction='horizontal'>
    <swiper-slide
      v-for="data, index in dataList"
      :key="index"
      class="swiper-slide swiper-slide-active"
    >
      <div :id="`imgIcon${index}`" class="item">
        <img src=''/>
        <button class="btn icons_x_circle_off" type="button" @click="unLinkEvent($event)"></button>
      </div>
    </swiper-slide>
    <div slot="scrollbar" class="swiper-scrollbar"
    ></div>
  </swiper>
</template>

<script>
  import $ from 'jquery'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'CustomCurriculumSwiper',
    title: 'CustomCurriculumSwiper',
    components: {
      Swiper,
      SwiperSlide
    },
    props:{
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
        dataList: [],
        swiperOption: {
          direction: 'horizontal',
          slidesPerView: 3.4,
          spaceBetween: 10,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
          },
          mousewheel: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            360: {
              slidesPerView: 1.2
            },
            575.98: {
              slidesPerView: 2.2
            },
            767.98: {
              slidesPerView: 3.2
            },
          }
        }
      }
    },
    methods: {
      setData(data){
        this.dataList=data
        setTimeout(()=>{
          let target
          const len=this.dataList.length
          for (let i = 0; i < len; i++) {
            target=$("#imgIcon"+i).find("img")
            if(this.dataList[i].linkListIdx===-1){
              target.attr({"src":this.dataList[i].icon_dim_url})
            }else{
              target.attr({"src":this.dataList[i].icon_normal_url})
            }
          }
        },500)
      },
      linkData(linkListIdx,imgIdx){
        const len=this.dataList.length
        for (let i = 0; i < len; i++) {
          if(this.dataList[i].imgIdx===imgIdx){
            this.dataList[i].linkListIdx=linkListIdx
            const target=$("#imgIcon"+i).find("img")
            target.attr({"src":this.dataList[i].icon_normal_url})
            break
          }
        }
      },
      unLinkData(imgIdx){
        const len=this.dataList.length
        for (let i = 0; i < len; i++) {
          if(this.dataList[i].imgIdx===imgIdx){
            this.dataList[i].linkListIdx=-1
            const target=$("#imgIcon"+i).find("img")
            target.attr({"src":this.dataList[i].icon_dim_url})
            break
          }
        }
      },
      unLinkEvent(e){
        const target=e.target.parentElement
        const imgIdx=Number(target.id.split('imgIcon')[1])
        console.log(imgIdx)
        const tIdx=this.dataList[imgIdx].linkListIdx
        if(tIdx!==-1){
          $(`#${target.id}`).find("img").attr({"src":this.dataList[imgIdx].icon_dim_url})
          this.dataList[imgIdx].linkListIdx=-1
          this.$emit('unLink-event',tIdx,imgIdx)
        }
      }
    }
  }
</script>

<style>
.modal_curiregi .item_list .swiper-container{
  min-height: 75px;
}
.modal_curiregi .item_list .swiper-container-horizontal > .swiper-scrollbar{
  bottom: 0;
}
.modal_curiregi .swiper-slide{
  width:70px !important;
}
.modal_curiregi .divide_area.left .cw_box + .item_list_wrap .item {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 52px;
  margin-top: 15px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  margin-right:initial;
  background-image:initial;
}
.modal_curiregi .swiper-scrollbar{
  opacity: 1 !important;
}
</style>