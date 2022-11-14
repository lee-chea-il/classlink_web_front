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
import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'
export default {
  name: 'CustomListView',
  components: {
    VueTreeList,
  },
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    editable: {
      type: Boolean,
      default: false,
    },
    identity: {
      type: String,
      default: 'teacher',
    },
    pidNum: {
      type: Number,
      default: 0,
    },
    expanded: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      datas: new Tree(false, []),
      pid: this.pidNum,
      receiveDataList: this.dataList
    }
  },
  mounted() {
    const dataMapping = (item, isReadOnly) => {
      const result = []
      const len = item.length
      let sp = []
      let dType = ''
      for (let i = 0; i < len; i++) {
        sp = item[i].name.split('.')
        dType = sp[sp.length - 1]
        if (
          dType === 'mp4' ||
          dType === 'mp3' ||
          dType === 'avi' ||
          dType === 'mov' ||
          dType === 'flv'
        ) {
          dType = 'video'
        } else if (
          dType === 'pdf' ||
          dType === 'ppt' ||
          dType === 'doc' ||
          dType === 'xls' ||
          dType === 'hwp' ||
          dType === 'txt'
        ) {
          dType = 'document'
        } else if (dType === 'quiz') {
          dType = 'quiz'
        } else if (dType === 'exam') {
          dType = 'exam'
        } else if (dType === 'utobe') {
          dType = 'utobe'
        } else if (dType === 'utobe') {
          dType = 'url'
        }
        result[i] = {
          name: item[i].name,
          id: this.pid,
          pid: this.pid,
          isLeaf: true,
          dataType: dType,
          readOnly: isReadOnly,
          isChecked: false,
          type: item[i].type,
          dbIdx: item[i].dbIdx,
          exp: item[i].exp,
          title: item[i].title,
          goal: item[i].goal,
          isLink: false,
          linkIdx: -1,
          addTreeNodeDisabled: true,
          addLeafNodeDisabled: true,
          editNodeDisabled: true,
          delNodeDisabled: true,
        }
        this.pid++
      }
      return result
    }
    this.datas = new Tree(false, dataMapping(this.receiveDataList, false))
  },
  methods: {
    addNode() {
      const node = new TreeNode({ name: 'new node', isLeaf: false })
      if (!this.data.children) this.data.children = []
      this.data.addChildren(node)
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
<style scoped>
.custom-control-input:checked ~ .custom-control-label::after {
  margin-left: 0.15rem;
}
</style>
