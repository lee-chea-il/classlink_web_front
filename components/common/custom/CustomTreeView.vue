<template>
  <vue-tree-list
    :model="datas"
    :default-expanded="expanded"
    default-tree-node-name="새 폴더"
    :is-drop="identity == 'institution' ? true : false"
    :is-show-option="identity == 'institution' ? true : false"
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
    @add-node="addFolder"
  >
    <span slot="addTreeNodeIcon" class="icon">＋</span>
    <span slot="addLeafNodeIcon" class="icon"></span>
    <span slot="addTreeNodeIcon" class="icon"></span>
    <span slot="delNodeIcon" class="icon"></span>
  </vue-tree-list>
</template>

<script>
import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'
import { apiClassCurriculum } from '~/services'

export default {
  name: 'TreeView',
  components: {
    VueTreeList,
  },
  props: {
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
    treeViewType: {
      type: String,
      default: 'ins',
    },
  },
  data() {
    return {
      datas: new Tree(false, []),
      pid: this.pidNum,
      updateNode: null,
      deleteList: [],
      updateFolderInfo: {},
    }
  },
  methods: {
    async addFolder(node) {
      await apiClassCurriculum
        .addFolderTreeViewList(this.addFolderData(node))
        .then(({ data: { data } }) => {
          console.log("data   ",data)
          this.$emit(`tree-view-${this.treeViewType.toLowerCase()}`)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addFolderData(node) {
      if (this.treeViewType === 'ID') {
        return {
          datatable_type: this.treeViewType,
          parent_id: node.target.treeViewId,
          title: '새 폴더',
        }
      } else if (this.treeViewType === 'FD') {
        return {
          datatable_type: this.treeViewType,
          parent_id: node.target.treeViewId,
          title: '새 폴더',
        }
      } else {
        return {
          datatable_type: this.treeViewType,
          parent_id: node.target.treeViewId,
          title: '새 폴더',
        }
      }
    },
    deleteFolder(ids) {
      const payload = `${this.treeViewType}/${ids}`
      apiClassCurriculum
        .deleteFolderTreeViewList(payload)
        .then(({ data: { data } }) => {
          if (data) {
            this.$emit(`tree-view-${this.treeViewType.toLowerCase()}`)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async updateFolder() {
      await apiClassCurriculum
        .updateFolderTreeViewList(this.updateFolderInfo)
        .then(({ data: { data } }) => {
          if (data) {
            this.$emit(`tree-view-${this.treeViewType.toLowerCase()}`)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setData(dataList) {
      console.log(dataList)
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
        dataMapping(dataList[0].children, !this.editable)
      )
    },
    delData() {
      this.deleteList = []
      const deleteList = this.deleteList
      this.$emit('un-active')

      function _dell(oldNode,isChildAll) {
        if(isChildAll){
          deleteList.push(oldNode.treeViewId)
        }else if(oldNode.isChecked){
          deleteList.push(oldNode.treeViewId)
          if(oldNode.group_yn)isChildAll=true
        }
        if (oldNode.children && oldNode.children.length > 0) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            _dell(oldNode.children[i],isChildAll)
          }
        }
      }
      _dell(this.datas,false)
      const len = this.deleteList.length
      if (len > 0) {
        let deleteStr = ''
        for (let i = 0; i < len; i++) {
          if (i < len - 1) {
            deleteStr += this.deleteList[i] + '-'
          } else {
            deleteStr += this.deleteList[i]
          }
        }
        this.deleteFolder(deleteStr)
      }
    },
    onChangeName(params) {
      if (params.eventType && params.eventType === 'blur') {
        this.updateFolderInfo = {
          datatable_type: this.treeViewType,
          treeinfo_idx: params.node.treeViewId,
          title: params.newName,
        }
        this.updateFolder()
      }
    },





    
    addData(data) {
      const sp = data.savepathInfo.path.split(' > ')
      let depth = 0
      const pidNum = this.pid
      this.pid++
      function _checkNode(oldNode) {
        if (oldNode.children && oldNode.children.length > 0) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            if (oldNode.children[i].name === sp[depth]) {
              depth++
              if (sp.length === depth) {
                const newTreeNode = new TreeNode(data)
                for (const item in data) {
                  if (item !== 'parent' && item !== 'children') {
                    newTreeNode[item] = data[item]
                  }
                }
                newTreeNode.isLeaf = true
                newTreeNode.active = true
                newTreeNode.id = pidNum
                oldNode.children[i].addChildren(newTreeNode)
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
    updateFile(data) {
      console.log('---')
      console.log(data)
      console.log(this.updateNode)
      for (const item in data) {
        if (item !== 'parent' && item !== 'children') {
          this.updateNode[item] = data[item]
        }
      }
      console.log('11  ', this.updateNode)
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
      this.updateNode = node
      const nodeToData = {}
      for (const item in node) {
        nodeToData[item] = node[item]
      }
      this.$emit('update-data', nodeToData)
    },
    moreMenuView(node) {
      console.log(`view ${node}`)
    },
    moreMenuDell(node) {
      console.log(node)
      // node.remove()
    },
    moreMenuCopy(node) {
      console.log(`copy ${node}`)
    },
    updateFileDel() {
      console.log(this.updateNode)
      this.updateNode.remove()
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
