<template>
  <vue-tree-list
    :model="datas"
    :default-expanded="false"
    listType="listView"
    :is-drop="true"
    :is-show-option="false"
    @leaf-name-click="nodeNameClick"
    @click="removeActive"
  >
    <span slot="addTreeNodeIcon" class="icon">＋</span>
    <span slot="addLeafNodeIcon" class="icon"></span>

    <span slot="addTreeNodeIcon" class="icon"></span>
    <span slot="delNodeIcon" class="icon"></span>
  </vue-tree-list>
</template>

<script>
import $ from 'jquery'
import { VueTreeList, Tree } from 'vue-tree-list'
export default {
  name: 'CustomListView',
  components: {
    VueTreeList,
  },
  props: {
    pidNum: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      datas: new Tree(false, []),
      pid: this.pidNum,
      receiveDataList: []
    }
  },
  methods: {
    getData(){
      const result = []
      const list = this.datas.children
      const len =list.length
      for (let i = 0; i < len; i++) {
        const newObj = {}
        for (const item in list[i]) {
          /* if (item !== 'children' && item !== 'parent') {
            /* newObj[item] = JSON.stringify(list[i][item]) * /
            newObj[item] = list[i][item]
          } */
          newObj[item] = list[i][item]
        }
        result.push(newObj)
      }
      return result
    },
    setDataList(listData) {
      this.pid=this.pidNum
      this.receiveDataList=listData
      const copyData = (data) => {
        /* const newStr = JSON.stringify(data)
        const nObj = JSON.parse(newStr) */
        const nObj = data
        nObj.isLeaf=true
        nObj.readOnly=false
        nObj.isChecked=false
        if(nObj.isLink===undefined){
          nObj.isLink=false
          nObj.linkIdx=-1
        }
        /* if(!nObj.isLink){
          nObj.isLink=false
          nObj.linkIdx=-1
        } */
        nObj.id="list_"+this.pid
        nObj.addTreeNodeDisabled=true
        nObj.addLeafNodeDisabled=true
        nObj.editNodeDisabled=true
        nObj.delNodeDisabled=true
        return nObj
      }
      const dataMapping = (datas) => {
        const result = []
        const len = datas.length
        for (let i = 0; i < len; i++) {
          result[i] = copyData(datas[i])
          this.pid++
        }
        return result
      }
      this.datas = new Tree(false, dataMapping(this.receiveDataList.referenceList))
    },
    linkData(listIdx,imgIdx){
      this.removeActive()
      for(let i=0;i<this.datas.children.length;i++){
        if(listIdx===this.datas.children[i].id){
          this.datas.children[i].isLink=true
          this.datas.children[i].linkIdx=imgIdx
          break
        }
      }
      this.checkLinkDataCnt()
    },
    unLinkData(listIdx){
      this.removeActive()
      for(let i=0;i<this.datas.children.length;i++){
        if(listIdx===this.datas.children[i].id){
          this.datas.children[i].isLink=false
          this.datas.children[i].linkIdx=-1
          break
        }
      }
      this.checkLinkDataCnt()
    },
    checkLinkDataCnt(){
      let cnt=0
      for(let i=0;i<this.datas.children.length;i++){
        if(this.datas.children[i].isLink){
          cnt++
        }
      }
      this.$emit('update-link-cnt', cnt)
    },
    unLinkAllItem(){
      this.removeActive()
      if(this.datas.children){
        for(let i=0;i<this.datas.children.length;i++){
          this.datas.children[i].isLink=false
          this.datas.children[i].linkIdx=-1
        }
      }
      this.$emit('update-link-cnt', 0)
    },
    itemClick(imgIdx){
      this.removeActive()
      if(this.datas.children){
        for(let i=0;i<this.datas.children.length;i++){
          if(parseInt(this.datas.children[i].linkIdx)===parseInt(imgIdx)){
            $("#"+this.datas.children[i].id).addClass('curriculum_list_active')
            break
          }
        }
      }
    },
    nodeNameClick(node){
      this.removeActive()
      $("#"+node.id).addClass('curriculum_list_active')
      if(node.isLink){
        this.$emit("select-list-img",node.linkIdx)
      }
    },
    removeActive() {
      $(".vtl-leaf-node").removeClass('curriculum_list_active')
    },
  },
}
</script>

<style>
#modalCuriRegi .form-inline{
  width:initial;
}
#modalCuriRegi .list_area .icon_institute{
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url(~assets/images/icon_institute.png);
}
#modalCuriRegi .list_area .icon_fran {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url(~assets/images/icon_fran.png);
}
#modalCuriRegi .list_area .icon_mydata {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url(~assets/images/icon_mydata.png);
}
.curriculum_list_active {
  background-color: #e7edff !important;
}
</style>
