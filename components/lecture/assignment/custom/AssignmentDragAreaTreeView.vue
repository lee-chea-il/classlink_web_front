<template>
  <vue-tree-list
    :model="datas"
    :default-expanded="false"
    listType="image"
    :is-drop="true"
    :is-show-option="false"
    @drag-img-drop="dragImgDrop"
    @drag-img-click="dragImgClick"
  >
  </vue-tree-list>
</template>

<script>
import $ from 'jquery'
import { VueTreeList, Tree } from 'vue-tree-list'

export default {
  name: 'AssignmentDragAreaTreeView',
  components: {
    VueTreeList
  },
  props: {
    
  },
  data(){
    return {
      datas: new Tree(false, []),
      pid: 0,
      isImgLoadComp: false,
    }
  },
  created() {
    const dataMapping = () => {
      const result = []
      for (let i = 0; i < 35; i++) {
        const nObj = {}
        nObj.id='calDayView_'+this.pid
        nObj.pid=this.pid
        nObj.isLink=false
        nObj.linkListIdx=0
        result[i]=nObj
        this.pid++
      }
      return result
    }
    this.isImgLoadComp=false
    this.datas = new Tree( false, dataMapping() )
    setTimeout(() => {
      $('.calendar_data > .vtl').addClass('calContainer')
      let target
      for (let i = 0; i < 35; i++) {
        target=$('#calDayView_'+i).find('.vtl-node-main')
        target.addClass('dayClass')
        target.addClass('noHover')
        const xpos=parseInt(i%7)*108.8
        const ypos=parseInt(i/7)*90
        target.css({
          'left':xpos+'px',
          'top':ypos+'px',
          'position':'absolute',
          'width':'108.8px',
          'height':'90px',
          'cursor':'pointer'
        })
      }
      this.showHideDragArea(false)
    }, 300)
  },
  methods: {
    showHideDragArea(isShow){
      if(isShow){
        $('.calContainer').show()
      }else{
        $('.calContainer').hide()
      }
    },
    update(startidx,endIdx){
      const lastIdx=6-endIdx
      for (let i = 0; i < 35; i++) {
        const target=$('#calDayView_'+i).find('.vtl-node-main')
        if(i<startidx){
          target.css("pointer-events",'none')
        }else if(34-i<lastIdx){
          target.css("pointer-events",'none')
        }else{
          target.css("pointer-events",'auto')
        }
      }
    },
    getData(){
      const result = []
      const list = this.datas.children
      const len =list.length
      for (let i = 0; i < len; i++) {
        result.push($.extend(true, {}, list[i]))
      }
      return result
    },
    setData() {
      
    },
    dragImgDrop(node,dragTaget) {
      console.log(node,dragTaget.model)
      this.$emit('link-active',dragTaget.model,node)
    },
    dragImgClick(node) {
      console.log('dragImgClick', node.id)
    },
  }
}
</script>
<style scoped>
.calContainer{
  position: absolute;
  top: 82px;
  left: 326px;
  width: 70%;
  height: 450px;
}
</style>
<style>
.noHover:hover{
  background-color:initial !important;
}
</style>