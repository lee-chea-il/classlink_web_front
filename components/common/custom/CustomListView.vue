<template>
  <vue-tree-list
    :model="datas"
    :default-expanded="false"
    listType="listView"
    :is-drop="true"
    :is-show-option="false"
    @click="onClick"
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
  name: 'CustomListView',
  components: {
    VueTreeList
  },
  props: {
    dataList:{
      type:Array,
      default:() => []
    },
    editable:{
      type:Boolean,
      default:false
    },
    identity:{
      type:String,
      default:'teacher'
    },
    pidNum:{
      type:Number,
      default:0
    },
    expanded:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      datas: new Tree(false, []),
      pid: this.pidNum
    }
  },
  mounted() {
    const dataMapping = (item, isReadOnly) => {
      const result = []
      const len = item.length
      let sp = []
      let dType = ''
      for (let i = 0; i < len; i++) {
        sp=item[i].name.split('.')
        dType=sp[sp.length-1]
        if(dType==='mp4'||dType==='mp3'||dType==='avi'||dType==='mov'||dType==='flv'){
          dType='video'
        }else if(dType==='pdf'||dType==='ppt'||dType==='doc'||dType==='xls'||dType==='hwp'||dType==='txt'){
          dType='document'
        }else if(dType==='quiz'){
          dType='quiz'
        }else if(dType==='exam'){
          dType='exam'
        }else if(dType==='utobe'){
          dType='utobe'
        }else if(dType==='utobe'){
          dType='url'
        }
        result[i] = {
          name: item[i].name,
          id: this.pid,
          pid: this.pid,
          isLeaf: true,
          dataType: dType,
          readOnly: isReadOnly,
          isChecked: false,
          type: item[i].type,
          addTreeNodeDisabled: true,
          addLeafNodeDisabled: true,
          editNodeDisabled: true,
          delNodeDisabled: true,
        }
        this.pid++
      }
      return result
    }
    this.datas = new Tree( false, dataMapping(this.dataList, false) )
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
    },

    addNode() {
      const node = new TreeNode({ name: 'new node', isLeaf: false })
      if (!this.data.children) this.data.children = []
      this.data.addChildren(node)
    },

    getNewTree() {
      const vm = this
      function _dfs(oldNode) {
        const newNode = {}

        for (const k in oldNode) {
          if (k !== 'children' && k !== 'parent') {
            newNode[k] = oldNode[k]
          }
        }

        if (oldNode.children && oldNode.children.length > 0) {
          newNode.children = []
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            newNode.children.push(_dfs(oldNode.children[i]))
          }
        }
        return newNode
      }
      console.log(_dfs(vm.data))
    },
    copyData() {
      let idNum = new Date().valueOf()
      function _dfs(oldNode) {
        const newNode = {}
        if (oldNode.isChecked) {
          newNode.children = []
          newNode.id = idNum
          newNode.isLeaf = oldNode.isLeaf
          newNode.name = oldNode.name
          newNode.parent = oldNode.parent
          newNode.pid = oldNode.id
          newNode.readOnly = oldNode.readOnly
          newNode.isChecked = false
          newNode.dbIdx = oldNode.dbIdx
          newNode.type = oldNode.type
          console.log(newNode.name)
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
      this.$emit('copyDataCallBack',_dfs(this.datas))
    },
    pasteData(copyCheckData) {
      let idNum = new Date().valueOf()
      function _addNode(parentNode, oldNode) {
        let node, i, len
        if (oldNode.name) {
          const newNode = {}
          newNode.children = []
          newNode.id = idNum
          newNode.isLeaf = oldNode.isLeaf
          newNode.name = oldNode.name
          newNode.parent = oldNode.parent
          newNode.pid = oldNode.id
          newNode.readOnly = oldNode.readOnly
          newNode.isChecked = false
          newNode.dbIdx = oldNode.dbIdx
          newNode.type = oldNode.type
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
    moreMenu({e}) {
      const hasOffClass = e.target.classList.contains('icons_mu_off')
      const iLists = document.querySelectorAll('.more_mu ')
      let i=0
      for(i=0;i<iLists.length;i++){
        iLists[i].classList.remove('icons_mu_on')
        iLists[i].classList.add('icons_mu_off')
      }
      const moreLists = document.querySelectorAll('.more_list')
      for(i=0;i<moreLists.length;i++){
        moreLists[i].style.display='none'
      }
      if(hasOffClass){
        e.target.classList.remove('icons_mu_off')
        e.target.classList.add('icons_mu_on')
        e.target.querySelector('.more_list').style.display='block'
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
    }
  },
}
</script>
<style>
.custom-control-input:checked ~ .custom-control-label::after{
  margin-left: 0.15rem;
}
</style>
