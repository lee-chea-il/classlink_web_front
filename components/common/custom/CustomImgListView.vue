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
      isImgLoadComp: false
    }
  },
  mounted() {
    window.addEventListener('resize', this.imgReSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.imgReSize)
  },
  methods: {
    imgReSize(){
      if(this.isImgLoadComp){
        console.log(33)
      }
    },
    setData(cwData) {
      const dataMapping = (data) => {
        const result = []
        const len = data.length
        for (let i = 0; i < len; i++) {
          const newStr = JSON.stringify(data[i])
          const nObj = JSON.parse(newStr)
          nObj.id='imgListView_'+this.pid
          nObj.pid=this.pid
          nObj.isLink=false
          nObj.linkListIdx=-1
          result[i]=nObj
          this.pid++
        }
        return result
      }
      this.isImgLoadComp=false
      this.datas = new Tree( false, dataMapping(cwData.interactionObjects, false) )
      $("#cwBoxBackImg").attr("src",cwData.backImg_url)
      $('.cw_box> .vtl').css('opacity',0)

      setTimeout(() => {
        let target
        for (let i = 0; i < this.pid; i++) {
          target=$("#imgListView_"+i).find(".vtl-node-main")
          target.html(`<img src="${cwData.interactionObjects[i].nomal_url}" class="inter_action_object" style="left:${cwData.interactionObjects[i].left}px;top:${cwData.interactionObjects[i].top}px;" />`)
        }
        setTimeout(() => {
          let target, tHei
          for (let i = 0; i < this.pid; i++) {
            target=$("#imgListView_"+i).find(".inter_action_object")
            tHei=target.height()*0.285
            target.css({'height':tHei+'px'})
          }
          $('.cw_box> .vtl').css('opacity',1)
          this.isImgLoadComp=true
        }, 500)
      }, 500)
    },
    dragImgEnter(node) {
      if(!node.isLink){
        $('#'+node.id).find('img').css('opacity',1).attr("src",node.over_url)
      }
    },
    dragImgLeave(node) {
      if(!node.isLink){
        $('#'+node.id).find('img').css('opacity',0.3).attr("src",node.nomal_url)
      }
    },
    dragImgDrop(node,dragTaget) {
      $('#'+node.id).find('img').css('opacity',1).attr("src",node.nomal_url)
      if(node.isLink){
        this.$emit('unlink-data-to-list', node.linkListIdx)
      }
      if(dragTaget.model.isLink){
        this.$emit('unlink-data-to-img', dragTaget.model.linkIdx)
        this.unLinkData(dragTaget.model.linkIdx)
      }
      node.isLink=true
      node.linkListIdx=dragTaget.model.id
      this.$emit('link-data', node.linkListIdx, node.imgIdx)
    },
    dragImgClick(node) {
      console.log('dragImgClick', node.id)
    },
    unLinkData(imgIdx){
      this.datas.children[imgIdx].isLink=false
      $('#imgListView_'+imgIdx).find('img').css('opacity',0.3)
    },
    unLinkAllItem(){
      if(this.datas.children){
        for(let i=0;i<this.datas.children.length;i++){
          this.datas.children[i].isLink=false
          this.datas.children[i].linkListIdx=-1
          $('#imgListView_'+i).find('img').css('opacity',0.3)
        }
      }
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
</style>
