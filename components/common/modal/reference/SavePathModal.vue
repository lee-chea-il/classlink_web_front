<template>
  <div
    id="modalStoragepath"
    class="modal fade modal_ac_manage_dtr double"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">저장경로</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <!-- 탭 컨텐츠 -->
          <ul id="myTab" class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="grade-tab"
                class="nav-link active"
                data-toggle="tab"
                data-target="#tab01"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                교육기관
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="class-tab"
                class="nav-link"
                data-toggle="tab"
                data-target="#tab02"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                프랜차이즈
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="class-tab"
                class="nav-link"
                data-toggle="tab"
                data-target="#tab03"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                내자료
              </button>
            </li>
          </ul>
          <div id="myTabContent" class="tab-content path_list">
            <!-- 탭01 내용 -->
            <div
              id="tab01"
              class="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="grade-tab"
            >
              <!-- <VueTreeList
                :model="educationPath"
                :default-expanded="true"
                :class="`id`"
                @click="onClick"
              >
                <span
                  slot="addTreeNodeIcon1"
                  class="custom-control custom-checkbox form-inline"
                >
                  <input
                    id="chkC01"
                    class="custom-control-input"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="chkC01"></label>
                </span>

                <span slot="addTreeNodeIcon" class="icon">＋</span>
                <span slot="addLeafNodeIcon" class="icon"></span>

                <span slot="addTreeNodeIcon" class="icon"></span>
                <span slot="delNodeIcon" class="icon"></span
              ></VueTreeList> -->
            </div>
            <!-- /.탭01 내용 -->
            <!-- 탭02 내용 -->
            <div
              id="tab02"
              class="tab-pane fade"
              role="tabpanel"
              aria-labelledby="class-tab"
            >
              동일 형식
            </div>
            <!-- /.탭02 내용 -->
            <!-- 탭02 내용 -->
            <div
              id="tab03"
              class="tab-pane fade"
              role="tabpanel"
              aria-labelledby="class-tab"
            >
              동일 형식
            </div>
            <!-- /.탭02 내용 -->
          </div>
          <!-- /.탭 컨텐츠 -->
          <div class="select_path">
            <span class="tit">선택폴더</span>
            <span>{{ selectPath.path }}</span>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point">저장</button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'
export default {
  name: 'SavePathModal',
  components: {
    // VueTreeList,
  },
  data() {
    return {
      // educationPath: new Tree([
      //   {
      //     name: '학원',
      //     id: 1,
      //     pid: 0,
      //     path: '학원',
      //     isClick: false,
      //     children: [
      //       {
      //         name: '국어',
      //         id: 2,
      //         isLeaf: false,
      //         path: '학원/국어',
      //         pid: 1,
      //         isClick: false,
      //         children: [
      //           {
      //             name: '1단원',
      //             id: 7,
      //             isLeaf: false,
      //             path: '학원/국어/1단원',
      //             pid: 6,
      //             isClick: false,
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // ]),
      selectPath: {},
    }
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
      this.selectPath = params
    },

    onClickTarget(e) {
      console.log(e)
    },

    // addNode() {
    //   console.log('vvvvvvvvvvvvvvvvvvvvvvvv')
    //   const node = new TreeNode({ name: 'new node', isLeaf: false })
    //   if (!this.data.children) this.data.children = []
    //   this.data.addChildren(node)
    // },

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

      vm.newTree = _dfs(vm.data)
    },
  },
}
</script>

<style scoped>
.background {
  background: #eee;
}
</style>
