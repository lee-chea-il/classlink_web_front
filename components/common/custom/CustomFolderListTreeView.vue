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
    const dataMapping = (item, isReadOnly) => {
      const result = []
      const len = item.length
      for (let i = 0; i < len; i++) {
        if (item[i].children !== undefined) {
          result[i] = {
            name: item[i].name,
            id: "folder"+this.pid,
            isLeaf: false,
            pid: this.pid,
            children: [],
            readOnly: isReadOnly,
            isChecked: false,
            type: item[i].type,
          }
          this.pid++
          result[i].children = dataMapping(item[i].children, isReadOnly)
        } else {
          result[i] = {
            name: item[i].name,
            id: "folder"+this.pid,
            pid: this.pid,
            isLeaf: true,
            readOnly: isReadOnly,
            isChecked: false,
            type: item[i].type,
          }
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