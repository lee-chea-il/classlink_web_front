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
    const dataMapping = (data, isReadOnly) => {
      const result = []
      const len = data.length
      for (let i = 0; i < len; i++) {
        const newStr = JSON.stringify(data[i])
        const nObj = JSON.parse(newStr)

        nObj.id="file"+this.pid
        nObj.pid=this.pid
        nObj.readOnly=isReadOnly
        nObj.isChecked=false

        if (data[i].children !== undefined) {
          nObj.isLeaf=false
          nObj.children=[]

          result[i] = nObj
          this.pid++
          result[i].children = dataMapping(data[i].children, isReadOnly)
        } else {
          nObj.isLeaf=true

          result[i] = nObj
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