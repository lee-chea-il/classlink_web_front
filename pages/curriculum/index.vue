<template>
  <div>
    <PageHeader title="커리큘럼" />
    <div class="tab-content depth03 ac_manage_dtr">
      <div class="tab-pane active">
        <!-- 컨트롤 버튼 영역 -->
        <div class="search_section">
          <div class="left_area">
            <div class="btn btn_crud_default" @click="copyData">복사</div>
            <button class="btn btn_crud_default" @click="pasteData">
              붙여넣기
            </button>
            <button class="btn btn_crud_default" @click="delData">삭제</button>
          </div>
          <div class="right_area">
            <button
              class="btn btn_crud_point"
              data-toggle="modal"
              data-target="#modalCuriRegi"
            >
              등록
            </button>
          </div>
        </div>
        <!-- /.컨트롤 버튼 영역 -->

        <!-- [개발참조] 커리큘럼 : 컨텐츠구성 자료실과 동일 -->
        <!-- 2단 분류 컨텐츠 -->
        <div class="divide_section">
          <!-- 왼쪽 영역 -->
          <div class="divide_area left">
            <!-- 탭 컨텐츠 -->
            <ul id="myTab" class="nav nav-tabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  id="grade-tab"
                  class="nav-link active"
                  data-toggle="tab"
                  data-target="#institute"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <span class="icon_institute"></span>
                  교육기관
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  id="class-tab"
                  class="nav-link"
                  data-toggle="tab"
                  data-target="#franchise"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <span class="icon_fran"></span>
                  프랜차이즈
                </button>
              </li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <!-- 탭 내용01 -->
              <div
                id="institute"
                class="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="grade-tab"
              >
                <vue-tree-list
                  :model="institutionData"
                  :default-expanded="true"
                  default-tree-node-name="새 폴더"
                  :is-drop="identity == 'master' ? true : false"
                  :is-show-option="identity == 'master' ? true : false"
                  @click="onClick"
                  @change-name="onChangeName"
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
                  <span slot="delNodeIcon" class="icon"></span>
                </vue-tree-list>
              </div>
              <!-- /.탭 내용01 -->

              <!-- 탭 내용02 -->
              <div
                id="franchise"
                class="tab-pane fade"
                role="tabpanel"
                aria-labelledby="class-tab"
              >
                <vue-tree-list
                  :model="franchiseData"
                  :default-expanded="true"
                  default-tree-node-name="새 폴더"
                  :is-drop="identity == 'master' ? true : false"
                  :is-show-option="identity == 'master' ? true : false"
                  @click="onClick"
                  @change-name="onChangeName"
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
                  <span slot="delNodeIcon" class="icon"></span>
                </vue-tree-list>
              </div>
              <!-- /.탭 내용02 -->
            </div>
            <!-- /.탭 컨텐츠 -->
          </div>
          <!-- /.왼쪽 영역 -->

          <!-- 오른쪽 영역 -->
          <div class="divide_area right">
            <!-- 탭 컨텐츠 -->
            <ul id="myTab" class="nav nav-tabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  id="grade-tab"
                  class="nav-link active"
                  data-toggle="tab"
                  data-target="#mydata"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <span class="icon_mydata"></span>
                  내 커리큘럼
                </button>
              </li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <!-- 탭 내용01 -->
              <div
                id="mydata"
                class="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="grade-tab"
              >
                <vue-tree-list
                  :model="myCurriculumData"
                  :default-expanded="false"
                  @click="onClick"
                  @change-name="onChangeName"
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
                  <span slot="delNodeIcon" class="icon"></span>
                </vue-tree-list>
                <br />
                <br />
              </div>
              <!-- /.탭 내용01 -->
            </div>
            <!-- /.탭 컨텐츠 -->
          </div>
          <!-- /.오른쪽 영역 -->
        </div>
        <!-- /.2단 분류 컨텐츠 -->
      </div>
    </div>
  </div>
</template>

<script>
import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'
import PageHeader from '@/components/common/PageHeader.vue'

let copyCheckData = []

export default {
  name: 'MyCurriculum',
  components: {
    PageHeader,
    VueTreeList,
  },
  layout: 'EducationLayout',
  data() {
    return {
      /*
      master,teacher
      */
      identity: 'master',
      pid: 0,
      newTree: {},
      receiveInstitutionData: [
        {
          name: '마포 학원',
          children: [
            {
              name: '국어',
              children: [
                {
                  name: '1단원',
                  children: [
                    {
                      name: '화법과 작문1.link',
                      type: 'institution',
                      dbIdx: 1,
                    },
                    {
                      name: '화법과 작문2.link',
                      type: 'institution',
                      dbIdx: 2,
                    },
                    {
                      name: '화법과 작문3.link',
                      type: 'institution',
                      dbIdx: 3,
                    },
                    {
                      name: '화법과 작문4.link',
                      type: 'institution',
                      dbIdx: 4,
                    },
                  ],
                },
                {
                  name: '2단원',
                  children: [
                    {
                      name: '법과 작문1.link',
                      type: 'institution',
                      dbIdx: 5,
                    },
                    {
                      name: '법과 작문2.link',
                      type: 'institution',
                      dbIdx: 6,
                    },
                    {
                      name: '법과 작문3.link',
                      type: 'institution',
                      dbIdx: 7,
                    },
                    {
                      name: '법과 작문4.link',
                      type: 'institution',
                      dbIdx: 8,
                    },
                  ],
                },
              ],
            },
            {
              name: '수학',
              children: [
                {
                  name: '1단원',
                  children: [
                    {
                      name: '삼각함수1.link',
                      type: 'institution',
                      dbIdx: 1,
                    },
                    {
                      name: '삼각함수2.link',
                      type: 'institution',
                      dbIdx: 2,
                    },
                    {
                      name: '삼각함수3.link',
                      type: 'institution',
                      dbIdx: 3,
                    },
                    {
                      name: '삼각함수4.link',
                      type: 'institution',
                      dbIdx: 4,
                    },
                  ],
                },
                {
                  name: '2단원',
                  children: [
                    {
                      name: '2차 방정식1.link',
                      type: 'institution',
                      dbIdx: 5,
                    },
                    {
                      name: '2차 방정식2.link',
                      type: 'institution',
                      dbIdx: 6,
                    },
                    {
                      name: '2차 방정식3.link',
                      type: 'institution',
                      dbIdx: 7,
                    },
                    {
                      name: '2차 방정식4.link',
                      type: 'institution',
                      dbIdx: 8,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      receiveFranchiseData: [
        {
          name: '서울 학원',
          children: [
            {
              name: '과학',
              children: [
                {
                  name: '1단원',
                  children: [
                    {
                      name: '일산화탄소1.link',
                      type: 'franchise',
                      dbIdx: 1,
                    },
                    {
                      name: '일산화탄소2.link',
                      type: 'franchise',
                      dbIdx: 2,
                    },
                    {
                      name: '일산화탄소3.link',
                      type: 'franchise',
                      dbIdx: 3,
                    },
                    {
                      name: '일산화탄소4.link',
                      type: 'franchise',
                      dbIdx: 4,
                    },
                  ],
                },
                {
                  name: '2단원',
                  children: [
                    {
                      name: '이산화탄소1.link',
                      type: 'franchise',
                      dbIdx: 5,
                    },
                    {
                      name: '이산화탄소2.link',
                      type: 'franchise',
                      dbIdx: 6,
                    },
                    {
                      name: '이산화탄소3.link',
                      type: 'franchise',
                      dbIdx: 7,
                    },
                    {
                      name: '이산화탄소4.link',
                      type: 'franchise',
                      dbIdx: 8,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      receiveCurriculumData: [
        {
          name: '국어',
          children: [
            {
              name: '1단원',
              children: [
                {
                  name: '사투리 작문1.link',
                  type: 'institution',
                },
                {
                  name: '사투리 작문2.link',
                  type: 'franchise',
                },
              ],
            },
            {
              name: '2단원',
              children: [
                {
                  name: '부산 사투리 작문1.link',
                  type: 'curriculum',
                },
                {
                  name: '부산 사투리 작문2.link',
                  type: 'institution',
                },
                {
                  name: '부산 사투리 작문2.link',
                  type: 'franchise',
                },
                {
                  name: '부산 사투리 작문2.link',
                  type: 'institution',
                },
                {
                  name: '부산 사투리 작문2.link',
                  type: 'franchise',
                },
                {
                  name: '네이버란.link',
                  type: 'curriculum',
                },
              ],
            },
          ],
        },
      ],
      institutionData: new Tree(false, []),
      franchiseData: new Tree(false, []),
      myCurriculumData: new Tree(false, []),
    }
  },
  mounted() {
    const dataMapping = (item, isReadOnly) => {
      const result = []
      const len = item.length
      for (let i = 0; i < len; i++) {
        if (item[i].children !== undefined) {
          result[i] = {
            name: item[i].name,
            id: this.pid,
            isLeaf: false,
            pid: this.pid,
            children: [],
            readOnly: isReadOnly,
            isChecked: false,
            type: item[i].type,
          }
          this.pid++
          result[i].children = dataMapping(item[i].children, isReadOnly)
        } else {
          result[i] = {
            name: item[i].name,
            id: this.pid,
            pid: this.pid,
            isLeaf: true,
            readOnly: isReadOnly,
            isChecked: false,
            type: item[i].type,
          }
          this.pid++
        }
      }
      return result
    }
    if (this.identity === 'master') {
      this.institutionData = new Tree(
        false,
        dataMapping(this.receiveInstitutionData, false)
      )
      this.franchiseData = new Tree(
        false,
        dataMapping(this.receiveFranchiseData, false)
      )
    } else {
      this.institutionData = new Tree(
        true,
        dataMapping(this.receiveInstitutionData, true)
      )
      this.franchiseData = new Tree(
        true,
        dataMapping(this.receiveFranchiseData, true)
      )
    }
    this.myCurriculumData = new Tree(
      false,
      dataMapping(this.receiveCurriculumData, false)
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

      vm.newTree = _dfs(vm.data)
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
      const instiTab = document.getElementById('institute')
      if (instiTab.classList.contains('show')) {
        copyCheckData = _dfs(this.institutionData)
      } else {
        copyCheckData = _dfs(this.franchiseData)
      }
      console.log(copyCheckData)
    },
    pasteData() {
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
        _checkPasteData(this.myCurriculumData)
        _pasteData(this.myCurriculumData)
        _resetPasteData(this.myCurriculumData)
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
      _dell(this.myCurriculumData)
    },
  },
}
</script>
<style scoped>
#institute > .vtl {
  height: 349px;
}
#franchise > .vtl {
  height: 349px;
}
#mydata > .vtl {
  height: 300px;
}
.main > ul {
  display: none;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  margin-left: 0.15rem;
}
</style>
