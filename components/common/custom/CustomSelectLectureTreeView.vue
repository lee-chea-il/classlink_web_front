<template>
  <vue-tree-list
    :model="datas"
    :default-expanded="expanded"
    default-tree-node-name="새 폴더"
    :is-drop="identity == 'master' ? true : false"
    :is-show-option="identity == 'master' ? true : false"
    :isHideDownload="isHideDownload"
    listType="lecture"
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
      default: true
    },
    isPlus: {
      type: Boolean,
      default: true
    }
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
        nObj.id=this.pid
        nObj.pid=this.pid
        nObj.isChecked=false
        nObj.readOnly=isReadOnly
        nObj.isCurriculum=this.isPlus

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
    onAddNode(params) {
      console.log(params)
    },

    addNode() {
      const node = new TreeNode({ name: 'new node', isLeaf: false })
      if (!this.data.children) this.data.children = []
      this.data.addChildren(node)
    },

    copyData() {
      let idNum = new Date().valueOf()
      function _dfs(oldNode) {
        const newNode={}
        if (oldNode.isChecked) {
          for(const item in oldNode){
            newNode[item] = oldNode[item]
          }
          newNode.children = []
          newNode.id = idNum
          newNode.isChecked = false
          idNum++
        }
        if (oldNode.children && oldNode.children.length > 0) {
          const list = []
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            list.push(_dfs(oldNode.children[i]))
          }
          newNode.children = list
        }
        return newNode
      }
      this.$emit('copyDataCallBack', _dfs(this.datas))
    },
    pasteData(copyCheckData) {
      let idNum = new Date().valueOf()
      function _addNode(parentNode, oldNode) {
        let node, i, len
        if (oldNode.name) {
          const newNode={}
          for(const item in oldNode){
            newNode[item] = oldNode[item]
          }
          newNode.children = []
          newNode.id = idNum
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
                oldNode.isPaste = true
              }
            } else {
              _checkPasteData(oldNode.children[len - i - 1])
            }
          }
        }
        if (oldNode.isChecked) {
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
      if (copyCheckData.children && copyCheckData.children.length > 0) {
        _checkPasteData(this.datas)
        _pasteData(this.datas)
        _resetPasteData(this.datas)
      }
    },
    delData() {
      function _dell(oldNode) {
        if (
          !oldNode.isChecked &&
          oldNode.children &&
          oldNode.children.length > 0
        ) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            _dell(oldNode.children[len - i - 1])
          }
        }
        if (oldNode.isChecked) {
          oldNode.remove()
        }
      }
      _dell(this.datas)
    },
    pluseEventClick(node) {
      this.$emit('plus-event-click', node)
    },
    minusEventClick(node) {
      node.remove()
    },
  },
}
</script>
<style scoped>
</style>
