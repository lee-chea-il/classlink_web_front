<template>
  <vue-tree-list
    :model="datas"
    :default-expanded="expanded"
    default-tree-node-name="새 폴더"
    :is-drop="identity == 'master' ? true : false"
    :is-show-option="identity == 'master' ? true : false"
    :isHideDownload="isHideDownload"
    @leaf-name-click="$emit('un-active')"
    @click="$emit('un-active')"
    @drag-start="$emit('un-active')"
    @change-name="onChangeName"
    @more-menu="moreMenu"
    @more-menu-down="moreMenuDown"
    @more-menu-update="moreMenuUpdate"
    @more-menu-view="moreMenuView"
    @more-menu-dell="moreMenuDell"
    @more-menu-copy="moreMenuCopy"
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
        nObj.id = this.pid
        nObj.pid = this.pid
        nObj.isChecked = false
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
      !this.editable,
      dataMapping(this.dataList, !this.editable)
    )
  },
  methods: {
    onDel(node) {
      console.log(node)
      node.remove()
    },

    onChangeName(params) {
      console.log(params)
    },

    onAddNode(params) {
      console.log(params)
    },

    onClick(params) {
      console.log(params)
      this.$emit('un-active')
    },

    addNode() {
      const node = new TreeNode({ name: 'new node', isLeaf: false })
      if (!this.data.children) this.data.children = []
      this.data.addChildren(node)
    },
    addData(data) {
      console.log(data.savePathInfo)
      const sp = data.savePathInfo.path.split(' > ')
      let depth = 0
      function _checkNode(oldNode) {
        if (oldNode.children && oldNode.children.length > 0) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            if (oldNode.children[i].name === sp[depth]) {
              depth++
              if (sp.length === depth) {
                oldNode.children[i].addChildren(data)
              } else {
                _checkNode(oldNode.children[i])
              }
            }
          }
        }
      }
      _checkNode(this.datas)
    },
    copyData() {
      let idNum = new Date().valueOf()
      function _dfs(oldNode) {
        const newNode = {}
        if (oldNode.isChecked) {
          oldNode.isactive = true
          for (const item in oldNode) {
            newNode[item] = oldNode[item]
          }
          newNode.children = []
          newNode.id = idNum
          newNode.isChecked = false
          idNum++
        } else {
          oldNode.isactive = false
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
      this.$emit('un-active')
      this.$emit('copyDataCallBack', _dfs(this.datas))
    },
    copyComp() {
      function _copyComp(oldNode) {
        if (oldNode.isactive) {
          oldNode.active = true
        } else {
          oldNode.active = false
        }
        if (oldNode.children && oldNode.children.length > 0) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            _copyComp(oldNode.children[i])
          }
        }
      }
      _copyComp(this.datas)
    },
    pasteData(copyCheckData) {
      let idNum = new Date().valueOf()
      function _addNode(parentNode, oldNode) {
        let node, i, len
        if (oldNode.name) {
          const newNode = {}
          for (const item in oldNode) {
            newNode[item] = oldNode[item]
          }
          newNode.active = true
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
              oldNode.children[len - i - 1].isPaste = false
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
            /* if (!oldNode.children[len - i - 1].isLeaf) oldNode.paste = false */
            _resetPasteData(oldNode.children[i])
          }
        }
        oldNode.paste = false
      }
      this.$emit('un-active')
      if (copyCheckData.children && copyCheckData.children.length > 0) {
        _checkPasteData(this.datas)
        _pasteData(this.datas)
        _resetPasteData(this.datas)
      }
    },
    delData() {
      this.$emit('un-active')
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
    moreMenu({ e }) {
      this.$emit('un-active')
      const hasOffClass = e.target.classList.contains('icons_mu_off')
      const iLists = document.querySelectorAll('.more_mu ')
      let i = 0
      for (i = 0; i < iLists.length; i++) {
        iLists[i].classList.remove('icons_mu_on')
        iLists[i].classList.add('icons_mu_off')
      }
      const moreLists = document.querySelectorAll('.more_list')
      for (i = 0; i < moreLists.length; i++) {
        moreLists[i].style.display = 'none'
      }
      if (hasOffClass) {
        e.target.classList.remove('icons_mu_off')
        e.target.classList.add('icons_mu_on')
        e.target.querySelector('.more_list').style.display = 'block'
      }
    },
    moreMenuDown(node) {
      console.log(`down ${node}`)
    },
    moreMenuUpdate(node) {
      console.log(`update ${node}`)
    },
    moreMenuView(node) {
      console.log(`view ${node}`)
    },
    moreMenuDell(node) {
      node.remove()
    },
    moreMenuCopy(node) {
      console.log(`copy ${node}`)
    },
    unActiveAll() {
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
<style scoped></style>
