<template>
  <div>
    <vue-tree-list
      :model="datas"
      :default-expanded="false"
      listType="lessonList"
      :is-drop="true"
      :is-show-option="false"
      :isDragable="true"
      @more-show-click="moreShowClick"
      @more-remove-click="moreRemoveClick"
      @drop-before="dropBefore"
      @leaf-name-click="$emit('un-active')"
      @click="$emit('un-active')"
      @drag-start="$emit('un-active')"
    >
      <span slot="addTreeNodeIcon" class="icon">＋</span>
      <span slot="addLeafNodeIcon" class="icon"></span>
      <span slot="addTreeNodeIcon" class="icon"></span>
      <span slot="delNodeIcon" class="icon"></span>
    </vue-tree-list>
  </div>
</template>

<script>
import $ from 'jquery'
import { VueTreeList, Tree } from 'vue-tree-list'
export default {
  name: 'CustomListViewLesson',
  components: {
    VueTreeList,
  },
  props: {
    pidNum: {
      type: Number,
      default: 0,
    },
    expanded: {
      type: Boolean,
      default: true,
    },
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      datas: new Tree(false, []),
      pid: this.pidNum,
      isEmptyData: true,
    }
  },
  watch: {
    dataList: {
      handler(value) {
        if (value.length === 0) {
          this.isEmptyData = true
          this.setEmptyArea()
        } else {
          this.isEmptyData = false
          this.setData(value)
          // this.datas = new Tree(false, this.dataMapping(value, false))
        }
      },
      immediate: true,
      flush: true,
    },
  },
  mounted() {
    if (this.dataList.length === 0) {
      this.isEmptyData = true
      this.setEmptyArea()
    } else {
      this.isEmptyData = false
      // this.datas = new Tree(false, this.dataMapping(this.dataList, false))
    }
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
    moreShowClick(node) {
      console.log('show', node)
      this.$emit('moreShowClick', node)
      this.$emit('un-active')
    },
    moreRemoveClick(node) {
      this.$emit('remove-reference', node)
      node.remove()
      this.setEmptyAreaHeight()
      this.$emit('un-active')
    },
    copyData(data) {
      const newStr = JSON.stringify(data)
      const newData = JSON.parse(newStr)
      newData.treeViewId = newData.id
      newData.id = 'list_' + this.pid
      newData.pid = this.pid
      newData.isLeaf = true
      newData.readOnly = true
      newData.name = newData.title
      newData.type = this.setType(newData.datatable_type)
      return newData
    },
    dataMapping(item) {
      const result = []
      for (let i = 0; i < item.length; i++) {
        result[i] = this.copyData(item[i])
        this.pid++
      }
      return result
    },
    setData(dataList) {
      console.log('dataList', dataList, this.treeViewType)
      const dataMapping = (data, isReadOnly) => {
        const result = []
        const len = data?.length
        for (let i = 0; i < len; i++) {
          const nObj = data[i]
          nObj.treeViewId = nObj.id
          nObj.id = this.pid
          nObj.pid = this.pid
          nObj.isChecked = false
          nObj.readOnly = isReadOnly
          nObj.active = false
          nObj.name = nObj.title

          if (nObj.group_yn) {
            nObj.type = this.treeViewType
            nObj.isLeaf = false
            result[i] = nObj
            this.pid++
            if (nObj.children) {
              result[i].children = dataMapping(nObj.children, isReadOnly)
            }
          } else {
            if (this.treeViewType === 'MD') {
              nObj.type = nObj.datatable_type
            } else {
              nObj.type = this.treeViewType
            }
            nObj.isLeaf = true
            result[i] = nObj
            this.pid++
          }
        }
        return result
      }
      this.datas = new Tree(
        !this.editable,
        dataMapping(dataList[0]?.children, !this.editable)
      )
    },
    setEmptyArea() {
      const dummy = [
        {
          title: '',
          type: '',
          dbIdx: -1,
        },
      ]
      this.pid = this.pidNum
      this.datas = new Tree(false, this.dataMapping(dummy, false))
      setTimeout(() => {
        let target = $(`#list_${this.pidNum}`).find('.vtl-node-main')
        target.css({ height: '0px', opacity: '0' })
        target.html('')
        target = $(`#list_${this.pidNum}`).find('.vtl-border')
        target.css({ height: '250px', opacity: '0' })
      }, 10)
    },
    dropBefore({ node, isCopy, target }) {
      console.log('#2323', node, isCopy, target)
      if (isCopy) {
        for (const item in node) {
          if (item !== 'parent' && item !== 'readOnly' && item !== 'isLeaf') {
            target[item] = node[item]
          }
        }
        target.id = 'list_' + this.pid
        this.pid++
        this.setEmptyAreaHeight()
      }
      this.$emit('add-reference', node)
    },
    setEmptyAreaHeight() {
      let nHei = 250
      nHei = nHei - (this.datas.children.length - 1) * 40
      if (nHei < 10) nHei = 10
      const target = $(`#list_${this.pidNum}`).find('.vtl-border')
      target.css({ height: nHei + 'px' })
    },
    unActiveAll() {
      // console.log('fffff')
      function _unActiveAll(oldNode) {
        oldNode.active = false
        if (oldNode.children) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            _unActiveAll(oldNode.children[i])
          }
        }
      }
      _unActiveAll(this.datas)
    },
  },
}
</script>
<style scoped>
.modal_Lessonregi .divide_area.right .vtl::v-deep .custom-checkbox {
  display: none;
}
#modalLessonRegi .check_sec .form-inline {
  display: block;
}
.modal_Lessonregi .divide_area.right .vtl::v-deep .icon_mp4_sm,
.modal_Lessonregi .divide_area.right .vtl::v-deep .icon_pdf_sm,
.modal_Lessonregi .divide_area.right .vtl::v-deep .icon_exam_sm,
.modal_Lessonregi .divide_area.right .vtl::v-deep .icon_quiz_sm,
.modal_Lessonregi .divide_area.right .vtl::v-deep .icon_link_sm,
.modal_Lessonregi .divide_area.right .vtl::v-deep .utobe {
  margin-right: 10px;
}

.modal_Lessonregi .divide_area.right .vtl::v-deep .icon_mydata {
  margin: 0px !important;
}
.icons_zoom_off {
  margin-left: auto;
  margin-right: 6px;
}
.icons_x_circle_off {
  margin-right: 6px;
}
</style>
