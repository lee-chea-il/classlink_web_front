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
  name: 'SavePathTreeView',
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
    },
    treeViewType: {
      type: String,
      default: 'ins',
    },
  },
  data() {
    return {
      datas: new Tree(false, []),
      pid: this.pidNum,
      receiveDataList: [],
    }
  },
  mounted() {
    const dataMapping = (data, isReadOnly) => {
      const result = []
      const len = data.length
      for (let i = 0; i < len; i++) {
        const newStr = JSON.stringify(data[i])
        const nObj = JSON.parse(newStr)
        nObj.id = 'folder' + this.pid
        nObj.pid = this.pid
        nObj.isChecked = false
        nObj.readOnly = isReadOnly
        nObj.name = nObj.title
        nObj.type = this.setType(nObj.datatable_type)
        if (data[i].children !== undefined) {
          nObj.isLeaf = false
          nObj.children = []

          result[i] = nObj
          this.pid++

          result[i].children = dataMapping(data[i].children, isReadOnly)
        } else {
          nObj.isLeaf = true

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
    setType(type) {
      let newType = ''
      switch (type) {
        case 'IL':
        case 'ID':
          newType = 'ID'
          break
        case 'FL':
        case 'FD':
          newType = 'FD'
          break
        case 'ML':
        case 'MD':
          newType = 'MD'
          break
        case 'OD':
          newType = 'OD'
          break
        default:
          newType = ''
          break
      }
      return newType
    },
    onClick(params) {
      $('.vtl-node-main').removeClass('active')
      $('#' + params.id)
        .find('.vtl-node-main')
        .addClass('active')

      let path = params.name
      const getParentName = (item) => {
        if (item.name !== 'root') {
          path = item.name + ' > ' + path
          getParentName(item.parent)
        }
      }
      getParentName(params.parent)
      this.$emit('folder-click', path)
    },
  },
}
</script>
