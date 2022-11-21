<template>
  <vue-tree-list
    :model="datas"
    :default-expanded="true"
    listType="file"
    @click="onClick"
  >
  </vue-tree-list>
</template>

<script>
import $ from 'jquery'
import { VueTreeList, Tree } from 'vue-tree-list'
export default {
  name: 'CustomOpenFileListTreeView',
  components: {
    VueTreeList,
  },
  props: {
    pidNum: {
      type: Number,
      default: 0,
    },
    dataList: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      datas: new Tree(false, []),
      pid: this.pidNum,
      receiveDataList: []
    }
  },
  mounted() {
    const dataMapping = (item, isReadOnly) => {
      const result = []
      const len = item.length
      for (let i = 0; i < len; i++) {
        const cNode = {}
        const tNode = item[i]
        for (const k in tNode) {
          cNode[k] = tNode[k]
        }
        cNode.id="file"+this.pid
        cNode.pid=this.pid
        cNode.readOnly=isReadOnly
        cNode.isChecked=false

        if (item[i].children !== undefined) {
          cNode.isLeaf=false
          cNode.children=[]

          result[i] = cNode
          this.pid++
          result[i].children = dataMapping(item[i].children, isReadOnly)
        } else {
          cNode.isLeaf=true

          result[i] = cNode
          this.pid++
        }
      }
      return result
    }
    this.datas = new Tree(
      !this.editable,
      dataMapping(this.dataList, !this.editable)
    )
  },
  methods: {
    onClick(params){
      $(".vtl-node-main").removeClass("active")
      $("#"+params.id).find('.vtl-node-main').addClass("active")

      let path = ''
      const getParentName = (item) => {
        if(item.name!=='root'){
          if(path===''){
            path = item.name
          }else{
            path = item.name + ' > ' +path
          }
          getParentName(item.parent)
        }
      }
      getParentName(params.parent,true)
      this.$emit('file-click',path,params)
    },
  }
}
</script>