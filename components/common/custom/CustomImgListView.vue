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
      pid: this.pidNum
    }
  },
  mounted() {
    
  },
  methods: {
    setData(cwData) {
      const dataMapping = (item) => {
        const result = []
        const len = item.length
        for (let i = 0; i < len; i++) {
          result[i] = {
            name: item[i].name,
            id: 'imgListView_'+this.pid,
            isLink: false
          }
          this.pid++
        }
        return result
      }
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
        }, 500)
      }, 500)
    },
    dragImgEnter(node) {
      if(!node.isLink){
        $('#'+node.id).find('img').css('opacity',1)
      }
      console.log('dragImgEnter', node.id)
    },
    dragImgLeave(node) {
      console.log('dragImgLeave', node.id)
      if(!node.isLink){
        $('#'+node.id).find('img').css('opacity',0.5)
      }
    },
    dragImgDrop(node) {
      node.isLink=true
      console.log('dragImgDrop', node.id)
    },
    dragImgClick(node) {
      console.log('dragImgClick', node.id)
    },
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
  opacity: 0.5;
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
