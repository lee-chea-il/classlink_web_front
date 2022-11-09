<template>
  <vue-tree-list
    :model="datas"
    :default-expanded="false"
    listType="image"
    :is-drop="true"
    :is-show-option="false"
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
    cwData:{
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
    const dataMapping = (item) => {
      const result = []
      const len = item.length
      for (let i = 0; i < len; i++) {
        result[i] = {
          name: item[i].name,
          id: 'imgListView_'+this.pid
        }
        this.pid++
      }
      return result
    }
    this.datas = new Tree( false, dataMapping(this.cwData.interactionObjects, false) )
    this.$nextTick(function () {
      $("#cwBoxBackImg").attr("src",this.cwData.backImg_url)
      for (let i = 0; i < this.pid; i++) {
        $("#imgListView_"+i).find(".vtl-node-main").addClass('inter_action_object')
        $("#imgListView_"+i).find(".vtl-node-main").css({
          "background":"url("+this.cwData.interactionObjects[i].nomal_url+")",
          "left":this.cwData.interactionObjects[i].left+"px",
          "top":this.cwData.interactionObjects[i].top+"px",
          "width":"100%",
          "height":"100%",
          "background-repeat":"no-repeat",
          "background-size":"100%",
          "position":"absolute"
        })
        console.log($("#imgListView_"+i).find(".vtl-node-main").width())
      }
    })
  },
  methods: {
    
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
  width: 24.5%;
  height: 24.5%;
}
</style>
