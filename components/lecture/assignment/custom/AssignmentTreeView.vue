<template>
  <vue-tree-list
    :identity="true"
    :model="datas"
    :isDrop="false"
    :editable="true"
    :listType="listType"
    :isShowOption="false"
    @drag-start="$emit('drag-start')"
    @drag-end="$emit('drag-end')"
  >
  </vue-tree-list>
</template>

<script>
import { VueTreeList, Tree } from 'vue-tree-list'
export default {
  name: 'TreeView',
  components: {
    VueTreeList,
  },
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    listType: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      datas: new Tree(false, []),
      pid: 0,
    }
  },
  mounted() {
    const dataMapping = (data, isReadOnly) => {
      const result = []
      const len = data.length
      for (let i = 0; i < len; i++) {
        const newStr = JSON.stringify(data[i])
        const nObj = JSON.parse(newStr)
        nObj.id = this.pid
        nObj.pid = this.pid
        nObj.readOnly = isReadOnly
        nObj.active = false

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
      true,
      dataMapping(this.dataList, true)
    )
  },
  methods: {
    
  },
}
</script>
<style scoped></style>
