<template>
  <swiper class="swiper swiper_horizontal lecture" :options="swiperOption" direction='horizontal'>
    <swiper-slide
      v-for="data, index in dataList"
      :key="index"
      class="swiper-slide swiper-slide-active"
    >
      <div :id="`imgIcon${index}`" class="item">
        <img
          src=''
          style="cursor:pointer;"
          @click="itemClick($event)"
        />
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
        ioHeight:0,
        perRatio:1,
        dataList: [],
        swiperOption: {
          direction: 'horizontal',
          slidesPerView: 5,
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
            578: {
              slidesPerView: 5
            },
            992: {
              slidesPerView: 5
            },
            1200: {
              slidesPerView: 5
            },
          }
        },
      }
    },
    methods: {
      setIOType(codeNum){
        /* 건물 외관 */
        if(codeNum==='WDWS001'||codeNum==='WDWS002'||codeNum==='WDWS003'){
          this.ioHeight=104
          /* this.swiperOption.slidesPerView=3
          this.swiperOption.breakpoints={
            578: {
              slidesPerView: 3
            },
            992: {
              slidesPerView: 3
            },
            1200: {
              slidesPerView: 3
            }
          } */
        }else{
          this.ioHeight=52
        }
      },
      setData(data){
        this.dataList=data
        if(data.length>0){
          setTimeout(()=>{
            let target
            const len=this.dataList.length
            for (let i = 0; i < len; i++) {
              target=$("#imgIcon"+i).find("img")
              console.log(this.dataList[i].referId)
              if(this.dataList[i].referId===''){
                target.attr({"src":this.setRequire(this.dataList[i].icon_dim_url)})
              }else{
                target.attr({"src":this.setRequire(this.dataList[i].icon_normal_url)})
              }
            }
            this.imgResize(this.perRatio)
          },500)
        }
      },
      linkData(referId,imgIdx){
        this.selectListImg(imgIdx)
        const len=this.dataList.length
        for (let i = 0; i < len; i++) {
          if(this.dataList[i].imgIdx===imgIdx){
            this.dataList[i].referId=referId
            $("#imgIcon"+i).find("img").attr({"src":this.setRequire(this.dataList[i].icon_normal_url)})
            break
          }
        }
      },
      unLinkData(imgIdx){
        const len=this.dataList.length
        for (let i = 0; i < len; i++) {
          if(this.dataList[i].imgIdx===imgIdx){
            this.dataList[i].referId=''
            const target=$("#imgIcon"+i).find("img")
            target.attr({"src":this.setRequire(this.dataList[i].icon_dim_url)})
            break
          }
        }
      },
      unLinkEvent(e){
        const target=e.target.parentElement
        const imgIdx=Number(target.id.split('imgIcon')[1])
        const tIdx=this.dataList[imgIdx].referId
        if(tIdx!==''){
          $(`#${target.id}`).find("img").attr({"src":this.setRequire(this.dataList[imgIdx].icon_dim_url)})
          this.dataList[imgIdx].referId=''
          this.$emit('unLink-event',tIdx,imgIdx)
        }
      },
      unLinkAllItem(){
        const len=this.dataList.length
        for (let i = 0; i < len; i++) {
          this.dataList[i].referId=''
          const target=$("#imgIcon"+i).find("img")
          target.attr({"src":this.setRequire(this.dataList[i].icon_dim_url)})
        }
      },
      imgResize(perRatio){
        this.perRatio=perRatio
        const len=this.dataList.length
        for (let i = 0; i < len; i++) {
          const target=$("#imgIcon"+i)
          const hei=(this.ioHeight*perRatio).toFixed(3)
          target.width(hei).height(hei)
        }
      },
      itemClick(event){
        const idx=event.currentTarget.parentElement.id.split('imgIcon')[1]
        this.$emit('item-click',idx)
      },
      selectListImg(imgIdx){
        const distanceX=($("#imgIcon0").parent().width()).toFixed(2)
        const moveX=imgIdx*-(Number(distanceX)+10)
        $(".swiper-wrapper").css({"transform":`translate3d(${moveX}px, 0px, 0px)`})
      },
      setRequire(imgPath){
        return require(`@/assets/images/${imgPath}`)
      },
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
</style>