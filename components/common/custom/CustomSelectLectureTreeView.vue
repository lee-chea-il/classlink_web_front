<template>
  <vue-tree-list
    :model="datas"
    :default-expanded="expanded"
    default-tree-node-name="새 폴더"
    :is-drop="identity == 'institution' ? true : false"
    :is-show-option="identity == 'institution' ? true : false"
    :isHideDownload="isHideDownload"
    listType="lecture"
    @click="$emit('remove-active')"
    @pluse-event-click="pluseEventClick"
    @minus-event-click="minusEventClick"
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
  name: 'TreeView',
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
      default: true,
    },
    identity: {
      type: String,
      default: '',
    },
    pidNum: {
      type: Number,
      default: 0,
    },
    expanded: {
      type: Boolean,
      default: true,
    },
    isHideDownload: {
      type: Boolean,
      default: true,
    },
    isPlus: {
      type: Boolean,
      default: true,
    },
    isMy: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      datas: new Tree(false, []),
      pid: this.pidNum,
    }
  },
  mounted() {
    const dataMapping = (data, isReadOnly) => {
      const result = []
      const len = data.length
      for (let i = 0; i < len; i++) {
        const newStr = JSON.stringify(data[i])
        const nObj = JSON.parse(newStr)
        nObj.treeViewId = nObj.id
        nObj.id = 'lectureTree_' + this.pid
        nObj.pid = this.pid
        nObj.isChecked = false
        nObj.readOnly = isReadOnly
        nObj.isCurriculum = this.isPlus
        nObj.isMy = this.isMy
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
      !this.editable,
      dataMapping(this.dataList, !this.editable)
    )
  },
  methods: {
    resetActiveStyle() {
      function _resetActiveStyle(oldNode) {
        oldNode.active = false
        if (oldNode.children && oldNode.children.length > 0) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            _resetActiveStyle(oldNode.children[i])
          }
        }
      }
      _resetActiveStyle(this.datas)
    },
    copyData(node) {
      let idNum = new Date().valueOf()
      function _dfs(oldNode) {
        oldNode.active = true
        console.log(oldNode)
        const newNode = {}
        for (const item in oldNode) {
          newNode[item] = oldNode[item]
        }
        newNode.children = []
        newNode.id = 'lectureTree_' + idNum
        newNode.isChecked = false
        newNode.isCurriculum = false
        newNode.isMy = true
        idNum++

        if (oldNode.children && oldNode.children.length > 0) {
          const list = []
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            list.push(_dfs(oldNode.children[i]))
          }
          newNode.children = list
        }
        return newNode
      }
      return _dfs(node)
    },
    pluseEventClick(node) {
      setTimeout(() => {
        this.$emit('plus-event-click', this.copyData(node))
      }, 50)
    },
    minusEventClick(node) {
      node.remove()
      this.$emit('remove-active')
    },
    pasteData(copyCheckData) {
      let idNum = new Date().valueOf()
      let checkCnt = 0
      function _addNode(parentNode, oldNode) {
        let node, i, len
        if (oldNode.name) {
          const newNode = {}
          for (const item in oldNode) {
            newNode[item] = oldNode[item]
          }
          newNode.children = []
          newNode.id = 'lectureTree_' + idNum
          newNode.isChecked = false
          node = new TreeNode(newNode)
          parentNode.addChildren(node)
          idNum++
          if (!oldNode.isLeaf) {
            if (oldNode.children && oldNode.children.length > 0) {
              len = oldNode.children.length
              for (i = 0; i < len; i++) {
                _addNode(node, oldNode.children[i])
              }
            }
          }
        } else if (oldNode.children && oldNode.children.length > 0) {
          len = oldNode.children.length
          for (i = 0; i < len; i++) {
            _addNode(parentNode, oldNode.children[i])
          }
        }
      }
      function _pasteData(oldNode) {
        if (oldNode.children && oldNode.children.length > 0) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            _pasteData(oldNode.children[len - i - 1])
          }
        }
        if (oldNode.isPaste) {
          _addNode(oldNode, copyCheckData)
        }
      }
      function _checkPasteData(oldNode) {
        if (oldNode.children && oldNode.children.length > 0) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            if (oldNode.children[len - i - 1].isLeaf) {
              if (oldNode.children[len - i - 1].isChecked) {
                checkCnt++
                oldNode.isPaste = true
              }
            } else {
              _checkPasteData(oldNode.children[len - i - 1])
            }
          }
        }
        if (oldNode.isChecked) {
          checkCnt++
          oldNode.isPaste = true
        }
      }
      function _resetPasteData(oldNode) {
        if (oldNode.children && oldNode.children.length > 0) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            if (!oldNode.children[len - i - 1].isLeaf) oldNode.paste = false
          }
        }
        oldNode.paste = false
      }
      if (this.datas.children && this.datas.children.length > 0) {
        _checkPasteData(this.datas)
        if (checkCnt === 0) {
          _addNode(this.datas, copyCheckData)
        } else {
          _pasteData(this.datas)
          _resetPasteData(this.datas)
        }
      } else {
        _addNode(this.datas, copyCheckData)
      }
    },
  },
}
</script>
<style></style>
