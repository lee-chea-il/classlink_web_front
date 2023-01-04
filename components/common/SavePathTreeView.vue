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
  watch: {
    dataList(newValue) {
      this.setData(newValue)
    },
  },
  methods: {
    setData(dataList) {
      const dataMapping = (data, isReadOnly) => {
        const result = []
        const len = data.length
        for (let i = 0; i < len; i++) {
          const nObj = data[i]
          nObj.treeViewId = nObj.id
          nObj.id = this.pid
          nObj.pid = this.pid
          nObj.isChecked = false
          nObj.readOnly = isReadOnly
          nObj.active = false
          nObj.name = nObj.title
          nObj.type = this.treeViewType

          if (nObj.group_yn) {
            nObj.isLeaf = false
            result[i] = nObj
            this.pid++
            if (nObj.children) {
              result[i].children = dataMapping(nObj.children, isReadOnly)
            }
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
        dataMapping(dataList, !this.editable)
      )
    },
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
      console.log(params)

      let path = params.name
      const getParentName = (item) => {
        if (item.name !== 'root') {
          path = item.name + ' > ' + path
          getParentName(item.parent)
        }
      }
      getParentName(params.parent)
      this.$emit('folder-click', path, params)
    },
  },
}
</script>
