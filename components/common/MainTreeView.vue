<template>
  <vue-tree-list
    ref="treeItem"
    class="tree"
    :model="datas"
    :default-expanded="expanded"
    default-tree-node-name="새 폴더"
    :is-drop="identity == 'institution' ? true : false"
    :is-show-option="identity == 'institution' ? true : false"
    :list-type="listType"
    :isHideDownload="isHideDownload"
    @more-show-click="moreShowClick"
    @change-name="onChangeName"
    @more-menu="moreMenu"
    @more-menu-down="moreMenuDown"
    @more-menu-update="moreMenuUpdate"
    @more-menu-view="moreMenuView"
    @more-menu-dell="moreMenuDell"
    @more-menu-copy="moreMenuCopy"
    @add-node="addFolder"
    @leaf-name-click="$emit('un-active')"
    @click="$emit('un-active')"
    @drag-start="$emit('un-active')"
    @drop-before="dropBefore"
    @drop="drop"
  >
    <span slot="addTreeNodeIcon" class="icon">＋</span>
    <span slot="addLeafNodeIcon" class="icon"></span>
    <span slot="addTreeNodeIcon" class="icon"></span>
    <span slot="delNodeIcon" class="icon"></span>
  </vue-tree-list>
</template>

<script>
import { VueTreeList, Tree } from 'vue-tree-list'
import { apiData } from '~/services'
import { deepCopy } from '~/utiles/common'
export default {
  name: 'MainTreeView',
  components: {
    VueTreeList,
  },
  props: {
    editable: { type: Boolean, default: true },
    identity: { type: String, default: '' },
    pidNum: { type: Number, default: 0 },
    expanded: { type: Boolean, default: true },
    listType: { type: String, default: '' },
    isHideDownload: { type: Boolean, default: true },
    treeViewType: { type: String, default: 'ID' },
    dataList: { type: Array, default: () => [] },
  },
  data() {
    return {
      datas: new Tree(false, []),
      pid: this.pidNum,
      deleteList: [],
      checkboxCopyData: {},
      checkedIdxList: [],
    }
  },
  watch: {
    dataList: {
      handler(newValue) {
        this.setData(newValue)
      },
      immediate: true,
      flush: true,
    },
  },
  methods: {
    async addFolder(node) {
      this.getCheckedIdxList()
      await apiData
        .addFolderTreeViewList(this.addFolderData(node))
        .then(({ data: { data } }) => {
          this.$emit(`tree-view-${this.treeViewType.toLowerCase()}`)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addFolderData(node) {
      return {
        datatable_type: this.treeViewType,
        parent_id: node.target.treeViewId,
        title: '새 폴더',
      }
    },
    setType(type) {
      switch (type) {
        case 'ID':
        case 'IL':
        case 'IC':
          return 'ID'
        case 'FD':
        case 'FL':
        case 'FC':
          return 'FD'
        case 'MD':
        case 'ML':
        case 'MC':
          return 'MD'
        case 'OD':
          return 'OD'
        default:
          return null
      }
    },
    deleteFolder(ids) {
      this.getCheckedIdxList()
      if (this.treeViewType !== 'MD' && ids !== '') {
        console.log('내자료 아닌 상태로 삭제 요청옴. 얼럿창 필요')
      } else {
        const payload = `${this.treeViewType}/${ids}`
        apiData
          .deleteFolderTreeViewList(payload)
          .then(({ data: { data } }) => {
            if (data) {
              this.$emit(`tree-view-${this.treeViewType.toLowerCase()}`)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    async updateFolder() {
      await apiData
        .updateFolderTreeViewList(this.updateFolderInfo)
        .then(({ data: { data } }) => {
          this.$emit(`tree-view-${this.treeViewType.toLowerCase()}`)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setData(dataList) {
      const copyItem = deepCopy(dataList)
      const iconType = this.setType(this.treeViewType)
      console.log('dataList', copyItem, this.treeViewType)
      let isFirst = true
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
          nObj.iconType = iconType
          nObj.treeViewType = this.treeViewType
          if (isFirst) {
            isFirst = false
            nObj.checkboxDisable = true
          }

          if (nObj.group_yn) {
            nObj.type = this.treeViewType
            nObj.isLeaf = false
            result[i] = nObj
            this.pid++
            if (nObj.children) {
              result[i].children = dataMapping(nObj.children, isReadOnly)
            }
          } else {
            if (iconType === 'MD') {
              nObj.type = nObj.datatable_type
              if (nObj.mda_correct_yn) {
                if (this.setType(nObj.datatable_type) === 'ID') {
                  nObj.iconType = 'IM'
                } else if (this.setType(nObj.datatable_type) === 'FD') {
                  nObj.iconType = 'FM'
                }
              } else {
                nObj.iconType = this.setType(nObj.datatable_type)
              }
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
        dataMapping(copyItem[0]?.children, !this.editable)
      )
      this.setCheckedIdxList()
    },
    onDel(node) {
      console.log(node)
      node.remove()
    },
    onChangeName(params) {
      if (params.eventType && params.eventType === 'blur') {
        console.log(params)
        this.updateFolderInfo = {
          datatable_type: this.treeViewType,
          treeinfo_idx: params.node.treeViewId,
          title: params.newName,
        }
        this.updateFolder()
      }
    },
    copyData() {
      const copyList = []
      function _dfs(parentChild, oldNode) {
        let data = {}
        oldNode.isactive = false
        if (!oldNode.isLeaf) {
          if (oldNode.isChecked) {
            data = {
              id: oldNode.treeViewId,
              children: [],
            }
            parentChild.push(data)
            oldNode.isactive = true
          }
          if (oldNode.children && oldNode.children.length > 0) {
            if (oldNode.isChecked) {
              for (let i = 0, len = oldNode.children.length; i < len; i++) {
                _dfs(data.children, oldNode.children[i])
              }
            } else {
              for (let i = 0, len = oldNode.children.length; i < len; i++) {
                _dfs(parentChild, oldNode.children[i])
              }
            }
          }
        } else if (oldNode.isChecked) {
          parentChild.push({ id: oldNode.treeViewId })
          oldNode.isactive = true
        }
      }
      this.$emit('un-active')
      _dfs(copyList, this.datas)

      this.checkboxCopyData = {
        datatable_type: this.treeViewType,
        copyTreeData: copyList,
        pasteParentIdxs: [],
      }
      this.$emit('copyDataCallBack', this.checkboxCopyData)
    },
    noCheckedCopyData(targetIdx) {
      const copyList = []
      let isAutoChecked = false
      function _dfs(parentChild, oldNode) {
        let data = {}
        oldNode.isactive = false
        if (!oldNode.isLeaf) {
          console.log('111')
          if (!isAutoChecked) {
            if (oldNode.treeViewId === targetIdx) {
              console.log('112221')
              data = {
                id: oldNode.treeViewId,
                children: [],
              }
              parentChild.push(data)
              oldNode.isactive = true
              isAutoChecked = true
            }
          } else {
            console.log('1133331')
            data = {
              id: oldNode.treeViewId,
              children: [],
            }
            parentChild.push(data)
            oldNode.isactive = true
          }
          if (oldNode.children && oldNode.children.length > 0) {
            for (let i = 0, len = oldNode.children.length; i < len; i++) {
              _dfs(data.children, oldNode.children[i])
            }
          }
        } else if (isAutoChecked) {
          console.log('4444')
          parentChild.push({ id: oldNode.treeViewId })
          oldNode.isactive = true
        } else if (oldNode.treeViewId === targetIdx) {
          console.log('5555')
          parentChild.push({ id: oldNode.treeViewId })
          oldNode.isactive = true
        }
      }
      this.$emit('un-active')
      _dfs(copyList, this.datas)

      this.checkboxCopyData = {
        datatable_type: this.treeViewType,
        copyTreeData: copyList,
        pasteParentIdxs: [],
      }
      this.$emit('copyDataCallBack', this.checkboxCopyData)
    },
    checkPastePosition() {
      const checkList = []
      const parentIdList = []
      function _checkData(oldNode) {
        if (oldNode.isLeaf) {
          if (oldNode.isChecked) {
            const pIdx = parentIdList.indexOf(oldNode.data.parent)
            if (pIdx === -1) {
              checkList.push({
                parentIdx: oldNode.data.parent,
              })
              parentIdList.push(oldNode.data.parent)
            }
          }
        } else {
          if (oldNode.isChecked) {
            const pIdx = parentIdList.indexOf(oldNode.treeViewId)
            if (pIdx === -1) {
              checkList.push({
                parentIdx: oldNode.treeViewId,
              })
              parentIdList.push(oldNode.treeViewId)
            }
          }

          if (oldNode.children && oldNode.children.length > 0) {
            for (let i = 0, len = oldNode.children.length; i < len; i++) {
              _checkData(oldNode.children[i])
            }
          }
        }
      }
      _checkData(this.datas)
      return checkList
    },
    changeIsactiveToActive() {
      function _changeIsactiveToActive(oldNode) {
        if (oldNode.isactive) {
          oldNode.active = true
        } else {
          oldNode.active = false
        }
        oldNode.isactive = false
        if (oldNode.children && oldNode.children.length > 0) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            _changeIsactiveToActive(oldNode.children[i])
          }
        }
      }
      _changeIsactiveToActive(this.datas)
    },
    setActiveDataList(dataList) {
      function _active(oldNode) {
        if (oldNode.isLeaf) {
          const pIdx = dataList.indexOf(oldNode.treeViewId)
          if (pIdx > -1) {
            oldNode.active = true
          }
        } else {
          const pIdx = dataList.indexOf(oldNode.treeViewId)
          if (pIdx > -1) {
            oldNode.active = true
          }
          if (oldNode.children && oldNode.children.length > 0) {
            for (let i = 0, len = oldNode.children.length; i < len; i++) {
              _active(oldNode.children[i])
            }
          }
        }
      }
      _active(this.datas)
    },
    getCheckedIdxList() {
      this.checkedIdxList = []
      function _checkData(oldNode, checkedIdxList) {
        if (oldNode.isLeaf) {
          if (oldNode.isChecked) {
            const pIdx = checkedIdxList.indexOf(oldNode.treeViewId)
            if (pIdx === -1) {
              checkedIdxList.push(oldNode.treeViewId)
            }
          }
        } else {
          if (oldNode.isChecked) {
            const pIdx = checkedIdxList.indexOf(oldNode.treeViewId)
            if (pIdx === -1) {
              checkedIdxList.push(oldNode.treeViewId)
            }
          }

          if (oldNode.children && oldNode.children.length > 0) {
            for (let i = 0, len = oldNode.children.length; i < len; i++) {
              _checkData(oldNode.children[i], checkedIdxList)
            }
          }
        }
      }
      _checkData(this.datas, this.checkedIdxList)
    },
    setCheckedIdxList() {
      function _checkData(oldNode, checkedIdxList) {
        if (oldNode.isLeaf) {
          const pIdx = checkedIdxList.indexOf(oldNode.treeViewId)
          if (pIdx > -1) {
            oldNode.isChecked = true
          }
        } else {
          const pIdx = checkedIdxList.indexOf(oldNode.treeViewId)
          if (pIdx > -1) {
            oldNode.isChecked = true
          }

          if (oldNode.children && oldNode.children.length > 0) {
            for (let i = 0, len = oldNode.children.length; i < len; i++) {
              _checkData(oldNode.children[i], checkedIdxList)
            }
          }
        }
      }
      _checkData(this.datas, this.checkedIdxList)
    },
    dropBefore({ node, target }) {
      console.log('dropBefore', node, target)
    },
    drop({ node, target }) {
      if (this.treeViewType === 'MD') {
        this.getCheckedIdxList()
        if (this.treeViewType !== node.treeViewType) {
          if (node.isChecked) {
            if (target.group_yn) {
              this.$emit('tree-view-copy', {
                isChecked: true,
                parentIdx: target.treeViewId,
                displayNo: 10000,
              })
            } else {
              this.$emit('tree-view-copy', {
                isChecked: true,
                parentIdx: target.data.parent,
                displayNo: target.display_no,
              })
            }
          } else if (node.group_yn) {
            this.$emit('tree-view-copy', {
              isChecked: false,
              nodeIdx: node.treeViewId,
              parentIdx: target.data.parent,
              displayNo: 10000,
            })
          } else {
            this.$emit('tree-view-copy', {
              isChecked: false,
              nodeIdx: node.treeViewId,
              parentIdx: target.data.parent,
              displayNo: target.display_no,
            })
          }
        } else {
          // this.$emit('tree-view-move', { parentIdx: target.data.parent })
          console.log('MD isMove 1 ', node, target)
          // target이 먼저 생성된거면
          /* if(){

          }else{

          } */
        }
      } else if (this.treeViewType === node.treeViewType) {
        // this.$emit('tree-view-move', { parentIdx: target.data.parent })
        console.log('ID,FD isMove 2 ', node, target)
      }
    },
    delData() {
      this.deleteList = []
      const deleteList = this.deleteList
      this.$emit('un-active')

      function _dell(oldNode, isChildAll) {
        if (isChildAll) {
          deleteList.push(oldNode.treeViewId)
        } else if (oldNode.isChecked) {
          deleteList.push(oldNode.treeViewId)
          if (oldNode.group_yn) isChildAll = true
        }
        if (oldNode.children && oldNode.children.length > 0) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            _dell(oldNode.children[i], isChildAll)
          }
        }
      }
      _dell(this.datas, false)
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

    moreMenu({ e }) {
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

    moreMenuClose() {
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
    },

    moreMenuDown(node) {
      console.log(`download ${node}`)
      this.$emit('download-data', node)
      this.moreMenuClose()
    },

    moreMenuUpdate(node) {
      const newItem = {
        ...node,
        type: this.treeViewType,
      }
      this.$emit('update-data', newItem)
      let path = node.name
      const getParentName = (item) => {
        if (item.name !== 'root') {
          path = item.name + ' > ' + path
          getParentName(item.parent)
        }
      }
      getParentName(node.parent)
      this.moreMenuClose()
      this.$emit('get-savepath', { ...node, type: this.treeViewType, path })
    },

    moreMenuView(node) {
      const newItem = {
        ...node,
        type: this.treeViewType,
      }
      // console.log(`view ${node}`)
      this.$emit('open-data', newItem)
      let path = node.name
      const getParentName = (item) => {
        if (item.name !== 'root') {
          path = item.name + ' > ' + path
          getParentName(item.parent)
        }
      }
      getParentName(node.parent)
      this.moreMenuClose()
      this.$emit('get-savepath', { ...node, type: this.treeViewType, path })
    },

    moreMenuDell(node) {
      this.getCheckedIdxList()
      const newItem = {
        ...node,
        type: this.treeViewType,
      }
      // node.remove()
      // console.log(node)
      this.$emit('delete-data', newItem)
    },

    moreMenuCopy(node) {
      this.getCheckedIdxList()
      // const payload={}
      this.$emit('copy-item', {
        datatable_type: node.type,
        treeinfo_idx: node.treeViewId,
      })
      // console.log(`copy ${node}`)
    },

    getCheckDataList() {
      const checkList = []
      function _checkData(oldNode) {
        if (oldNode.children && oldNode.children.length > 0) {
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            _checkData(oldNode.children[len - i - 1])
          }
        }
        if (oldNode.isLeaf && oldNode.isChecked) {
          checkList.push(oldNode.save_path)
        }
      }
      _checkData(this.datas)
      return checkList
    },

    moreShowClick(node) {
      this.$emit('moreShowClick', node)
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
<style scoped>
.tree::v-deep .vtl-node-content.vtl-ml {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
}
</style>
