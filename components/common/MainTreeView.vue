<template>
  <vue-tree-list
    ref="treeItem"
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
    @more-menu-copy="copyData"
    @add-node="addFolder"
    @leaf-name-click="$emit('un-active')"
    @click="$emit('un-active')"
    @drag-start="$emit('un-active')"
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
export default {
  name: 'MainTreeView',
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
    listType: {
      type: String,
      default: '',
    },
    isHideDownload: {
      type: Boolean,
      default: true,
    },
    treeViewType: {
      type: String,
      default: 'ins',
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
      deleteList: [],
      checkboxCopyData:{}
    }
  },
  watch: {
    dataList(newValue) {
      this.setData(newValue)
    },
  },
  methods: {
    async addFolder(node) {
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
      } else if (this.treeViewType === 'OD') {
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
      console.log(dataList,this.treeViewType)
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
    onDel(node) {
      console.log(node)
      node.remove()
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
    copyData() {
      const copyList=[]
      function _dfs(parentChild,oldNode) {
        let data={}
        if(!oldNode.isLeaf){
          if (oldNode.isChecked) {
            data={
              id:oldNode.treeViewId,
              children:[]
            }
            parentChild.push(data)
          }
          if (oldNode.children && oldNode.children.length > 0) {
            if (oldNode.isChecked) {
              for (let i = 0, len = oldNode.children.length; i < len; i++) {
                _dfs(data.children,oldNode.children[i])
              }
            }else{
              for (let i = 0, len = oldNode.children.length; i < len; i++) {
                _dfs(parentChild,oldNode.children[i])
              }
            }
          }
        }else if (oldNode.isChecked) {
          parentChild.push({id:oldNode.treeViewId})
        }
      }
      this.$emit('un-active')
      _dfs(copyList,this.datas)
      
      this.checkboxCopyData={
        type:this.treeViewType,
        copyTreeData:copyList,
        pasteParentIdxs:[]
      }
      this.$emit('copyDataCallBack',this.checkboxCopyData)
    },
    checkPastePosition(){
      const checkList = []
      function _checkData(oldNode) {
        if (oldNode.isLeaf) {
          if(oldNode.isChecked){
            checkList.push(oldNode.data.parent)
          }
        }else{
          if(oldNode.isChecked){
            checkList.push(oldNode.treeViewId)
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
      this.$emit('update-data', node)
      let path = node.name
      const getParentName = (item) => {
        if (item.name !== 'root') {
          path = item.name + ' > ' + path
          getParentName(item.parent)
        }
      }
      getParentName(node.parent)
      this.moreMenuClose()
      this.$emit('get-savepath', { ...node, path })
    },

    moreMenuView(node) {
      console.log(`view ${node}`)
      this.$emit('open-data', node)
      let path = node.name
      const getParentName = (item) => {
        if (item.name !== 'root') {
          path = item.name + ' > ' + path
          getParentName(item.parent)
        }
      }
      getParentName(node.parent)
      this.moreMenuClose()
      this.$emit('get-savepath', { ...node, path })
    },

    moreMenuDell(node) {
      node.remove()
    },

    moreMenuCopy(node) {
      console.log(`copy ${node}`)
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
<style scoped></style>
