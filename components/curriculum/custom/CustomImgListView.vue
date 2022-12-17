<template>
  <vue-tree-list
    :model="datas"
    :default-expanded="false"
    listType="image"
    :is-drop="true"
    :is-show-option="false"
    @drag-img-enter="dragImgEnter"
    @drag-img-leave="dragImgLeave"
    @drag-img-drop="dragImgDrop"
    @drag-img-click="dragImgClick"
  >
  </vue-tree-list>
</template>

<script>
import { VueTreeList, Tree } from 'vue-tree-list'
import $ from 'jquery'

const imgMaxWid = 513

export default {
  name: 'CustomImgListView',
  components: {
    VueTreeList
  },
  props: {
    cwData1:{
      type:Object,
      default:() => {}
    },
    pidNum:{
      type:Number,
      default:0
    }
  },
  data(){
    return {
      datas: new Tree(false, []),
      pid: this.pidNum,
      imgSizeType: 'init',
      isImgLoadComp: false,
      defaultRatio: 0.285,
      currentCBWwid: 0,
      perRatio: 1
    }
  },
  mounted() {
    window.addEventListener('resize', this.imgReSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.imgReSize)
  },
  methods: {
    resizeIO(){
      this.isImgLoadComp=false
      const len = this.datas.children.length
      for (let i = 0; i < len; i++) {
        const imgNode = this.datas.children[i]
        const reLeft=imgNode.left*this.perRatio
        const reTop=imgNode.top*this.perRatio
        const hei=imgNode.height*this.defaultRatio*this.perRatio
        const target=$("#"+imgNode.id).find('img')
        target.css({'top':reTop+'px','left':reLeft+'px'}).height(hei)
      }
      this.isImgLoadComp=true
    },
    imgReSize(){
      if(this.isImgLoadComp){
        const cbw=$("#cwBoxBackImg").width()
        const cha=Math.abs(this.currentCBWwid-cbw)
        if(cbw>0&&cha>3){
          this.currentCBWwid=cbw
          this.perRatio=(this.currentCBWwid/imgMaxWid).toFixed(3)
          this.$emit('img-resize',this.perRatio)
          this.resizeIO()
        }
      }
    },
    getData(){
      const result = []
      const list = this.datas.children
      const len =list.length
      const _convertTxt=(num) => {
        let txt
        if(num>99){
          txt=String(num)
        }else if(num>9){
          txt='0'+num
        }else{
          txt='00'+num
        }
        return txt
      }
      for (let i = 0; i < len; i++) {
        if(list[i].isLink){
          result.push({
            'codeNum':_convertTxt(i+1),
            'referId':list[i].referId
          })
        }
      }
      console.log(result)
      return result
    },
    setData(cwData) {
      const dataMapping = (data) => {
        const result = []
        const len = data.length
        for (let i = 0; i < len; i++) {
          const nObj = data[i]
          nObj.id='imgListView_'+this.pid
          nObj.pid=this.pid
          if(nObj.referId===undefined||nObj.referId===''){
            nObj.isLink=false
            nObj.referId=''
          }else{
            nObj.isLink=true
          }
          nObj.height=0
          result[i]=nObj
          this.pid++
        }
        return result
      }
      this.isImgLoadComp=false
      if(this.datas){
        this.datas = new Tree(false, [])
      }
      this.pid=0
      if(cwData.interactionObjects&&cwData.interactionObjects.length>0){
        this.datas = new Tree( false, dataMapping(cwData.interactionObjects, false) )
        $("#cwBoxBackImg").attr("src",this.setRequire(cwData.backImg_url))
        $('.cw_box> .vtl').css('opacity',0)
        setTimeout(() => {
          let target
          for (let i = 0; i < this.pid; i++) {
            target=$("#imgListView_"+i).find(".vtl-node-main")
            if(cwData.interactionObjects[i].isLink){
              target.html(`<img src="${this.setRequire(cwData.interactionObjects[i].nomal_url)}" class="inter_action_object" style="opacity:1;left:${cwData.interactionObjects[i].left}px;top:${cwData.interactionObjects[i].top}px;" />`)
            }else{
              target.html(`<img src="${this.setRequire(cwData.interactionObjects[i].nomal_url)}" class="inter_action_object" style="left:${cwData.interactionObjects[i].left}px;top:${cwData.interactionObjects[i].top}px;" />`)
            }
          }
          setTimeout(() => {
            let target, tHei
            for (let i = 0; i < this.pid; i++) {
              target=$("#imgListView_"+i).find(".inter_action_object")
              this.datas.children[i].height=target.height()
              tHei=target.height()*this.defaultRatio
              target.css({'height':tHei+'px'})
            }
            $('.cw_box> .vtl').css('opacity',1)
            this.isImgLoadComp=true
            this.imgReSize()
          }, 500)
        }, 500)
      }else{
        $("#cwBoxBackImg").attr("src","")
      }
    },
    setRequire(imgPath){
      return require(`@/assets/images/${imgPath}`)
    },
    dragImgEnter(node) {
      if(!node.isLink){
        $('#'+node.id).find('img').css('opacity',1).attr("src",this.setRequire(node.over_url))
      }
    },
    dragImgLeave(node) {
      if(!node.isLink){
        $('#'+node.id).find('img').css('opacity',0.3).attr("src",this.setRequire(node.nomal_url))
      }
    },
    dragImgDrop(node,dragTaget) {
      $('#'+node.id).find('img').css('opacity',1).attr("src",this.setRequire(node.nomal_url))
      if(node.isLink){
        this.$emit('unlink-data-to-list', node.referId)
      }
      if(dragTaget.model.isLink){
        this.$emit('unlink-data-to-img', dragTaget.model.linkIdx)
        this.unLinkData(dragTaget.model.linkIdx)
      }
      node.isLink=true
      node.referId=dragTaget.model.referId
      this.$emit('link-data', node.referId, node.imgIdx)
    },
    dragImgClick(node) {
      console.log('dragImgClick', node.id)
    },
    unLinkData(imgIdx){
      console.log(`unLinkData   ${imgIdx}`)
      this.datas.children[imgIdx].isLink=false
      $('#imgListView_'+imgIdx).find('img').css('opacity',0.3)
    },
    unLinkAllItem(){
      if(this.datas.children){
        for(let i=0;i<this.datas.children.length;i++){
          this.datas.children[i].isLink=false
          this.datas.children[i].referId=''
          $('#imgListView_'+i).find('img').css('opacity',0.3)
        }
      }
    },
    selectListImg(imgIdx){
      this.itemClick(imgIdx)
    },
    itemClick(imgIdx){
      const target=$('#imgListView_'+imgIdx).find('img')
      let nYpos =0
      const currentScrollPosition=$('.cw_box').scrollTop()
      const targetHei=target.height()
      const targetYpos=target.position().top
      const areaHei=$('.cw_box').height()
      
      let isChangeYpos=false
      const targetMaxYpos=targetYpos+targetHei
      if(targetMaxYpos>areaHei){
        isChangeYpos=true
        nYpos=targetYpos-(targetMaxYpos-areaHei)
        $('.cw_box').scrollTop(nYpos)
      }else if(targetYpos<0){
        isChangeYpos=true
        nYpos=currentScrollPosition+targetYpos
        if(nYpos<0)nYpos=0
        $('.cw_box').scrollTop(nYpos)
      }
      
      let delay = 0
      if(isChangeYpos){
        delay=200
      }
      setTimeout(() => {
        target.addClass("imgActive")
        setTimeout(() => {
          target.removeClass("imgActive")
        },500)
        setTimeout(() => {
          target.addClass("imgActive")
        },1000)
        setTimeout(() => {
          target.removeClass("imgActive")
        },1500)
      },delay)
    }
  }
}
</script>
<style>
.modal_curiregi .divide_area.left .cw_box{
  overflow-y: auto;
  background-size: 100%;
}
#cwBoxBackImg{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.inter_action_object{
  position: absolute;
  opacity: 0.3;
}
.cw_box .vtl-node-main{
  padding: 0;
}
#modalCuriRegi .modal_curiregi .divide_area.right .list_box{
  overflow-y: hidden;
}
.modal-content .divide_area.right .section{
  margin-bottom: 17px;
}
.modal-content .vtl-border.vtl-up{
  margin-top: initial;
}
#modalCuriRegi .modal_curiregi .divide_area.right .list_box .vtl-node-main .custom-control-label::before{
  margin: -8px 0px 0px 12px;
}
#modalCuriRegi .modal_curiregi .divide_area.right .list_box .vtl-node-main .custom-control-label::after{
  margin: -8px 0px 0px 12px;
}
#modalCuriRegi .modal_curiregi .divide_area.right .icons_unlink,
#modalCuriRegi .modal_curiregi .divide_area.right .icons_link{
  margin-left: auto;
  margin-right:10px;
}
#modalCuriRegi .modal_curiregi .divide_area.right .icon_pdf_sm,
#modalCuriRegi .modal_curiregi .divide_area.right .icon_quiz_sm,
#modalCuriRegi .modal_curiregi .divide_area.right .icon_exam_sm,
#modalCuriRegi .modal_curiregi .divide_area.right .icon_youtube_sm,
#modalCuriRegi .modal_curiregi .divide_area.right .icon_link_sm,
#modalCuriRegi .modal_curiregi .divide_area.right .icon_mp4_sm{
  margin-right: 11px;
}
.imgActive{
  -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
  opacity: 1 !important;
}
</style>
