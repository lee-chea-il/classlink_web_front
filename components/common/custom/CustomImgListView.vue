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
            id: 'imgListView_'+this.pid
          }
          this.pid++
        }
        return result
      }
      console.log(cwData.interactionObjects)
      this.datas = new Tree( false, dataMapping(cwData.interactionObjects, false) )
      $("#cwBoxBackImg").attr("src",cwData.backImg_url)

      setTimeout(() => {
        let target
        for (let i = 0; i < this.pid; i++) {
          target=$("#imgListView_"+i).find(".vtl-node-main")
          target.html(`<img src="${cwData.interactionObjects[i].nomal_url}" class="inter_action_object" style="top:${cwData.interactionObjects[i].top}px;left:${cwData.interactionObjects[i].left}px;height:${cwData.interactionObjects[i].height*0.285}px;" />`)
          
        }
      }, 500)
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
  opacity: 0.5;
}
</style>
