<template>
  <vue-tree-list
    :model="datas"
    :default-expanded="false"
    listType="listView"
    :is-drop="true"
    :is-show-option="false"
  >
    <span slot="addTreeNodeIcon" class="icon">＋</span>
    <span slot="addLeafNodeIcon" class="icon"></span>

    <span slot="addTreeNodeIcon" class="icon"></span>
    <span slot="delNodeIcon" class="icon"></span>
  </vue-tree-list>
</template>

<script>
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
    setDataList(listData) {
      this.receiveDataList=listData
      const copyData = (data) => {
        const nObj={}
        for(const item in data){
          nObj[item]=data[item]
        }
        nObj.id=this.pid
        nObj.isLeaf=true
        nObj.readOnly=false
        nObj.isChecked=false
        nObj.isLink=false
        nObj.linkIdx=-1
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
      for(let i=0;i<this.datas.children.length;i++){
        if(listIdx===this.datas.children[i].id){
          this.datas.children[i].isLink=true
          this.datas.children[i].linkIdx=imgIdx
          break
        }
      }
    },
    unLinkData(listIdx){
      for(let i=0;i<this.datas.children.length;i++){
        if(listIdx===this.datas.children[i].id){
          this.datas.children[i].isLink=false
          this.datas.children[i].linkIdx=-1
          break
        }
      }
    }
  },
}
</script>

<style>

#modalCuriRegi .form-inline{
  width:initial;
}
</style>
