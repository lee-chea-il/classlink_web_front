<template>
  <vue-tree-list
    :model="datas"
    :default-expanded="true"
    listType="folder"
    @click="onClick"
  >
  </vue-tree-list>
</template>

<script>
import $ from 'jquery'
import { VueTreeList, Tree } from 'vue-tree-list'
export default {
  name: 'CustomFolderListTreeView',
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
        nObj.id="folder"+this.pid
        nObj.pid=this.pid
        nObj.isChecked=false
        nObj.readOnly=isReadOnly

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

      let path = params.name
      const getParentName = (item) => {
        if(item.name!=='root'){
          path = item.name + ' > ' +path
          getParentName(item.parent)
        }
      }
      getParentName(params.parent)
      this.$emit('folder-click',path)
    },
  }
}
</script>