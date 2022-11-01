<template>
  <div>
    <PageHeader title="커리큘럼" />
    <div class="tab-content depth03 ac_manage_dtr">
				<div class="tab-pane active">
					<!-- 컨트롤 버튼 영역 -->
					<div class="search_section">
						<div class="left_area">
							<div class="btn btn_crud_default">복사</div>
							<button class="btn btn_crud_default">붙여넣기</button>
							<button class="btn btn_crud_default">삭제</button>
						</div>
						<div class="right_area">
							<button class="btn btn_crud_point" data-toggle="modal" data-target="#modalCuriRegi">등록</button>
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
									<button id="grade-tab" class="nav-link active" data-toggle="tab" data-target="#institute" type="button" role="tab" aria-controls="home" aria-selected="true">
										교육기관
									</button>
								</li>
								<li class="nav-item" role="presentation">
									<button id="class-tab" class="nav-link" data-toggle="tab" data-target="#franchise" type="button" role="tab" aria-controls="profile" aria-selected="false">
										프랜차이즈
									</button>
								</li>
							</ul>
							<div id="myTabContent" class="tab-content">
								<!-- 탭 내용01 -->
								<div id="institute" class="tab-pane fade show active" role="tabpanel" aria-labelledby="grade-tab">
                  <vue-tree-list
                    :model="data"
                    :default-expanded="true"
                    default-tree-node-name="새폴더"
                    :is-drop="false"
                    @click="onClick"
                    @change-name="onChangeName"
                  >
                    <span slot="addTreeNodeIcon1" class="custom-control custom-checkbox form-inline">
                      <input id="chkC01" class="custom-control-input" type="checkbox">
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
								<div id="franchise" class="tab-pane fade" role="tabpanel" aria-labelledby="class-tab">




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
									<button id="grade-tab" class="nav-link active" data-toggle="tab" data-target="#mydata" type="button" role="tab" aria-controls="home" aria-selected="true">
										내 커리큘럼
									</button>
								</li>
							</ul>
							<div id="myTabContent" class="tab-content">
								<!-- 탭 내용01 -->
								<div id="mydata" class="tab-pane fade show active" role="tabpanel" aria-labelledby="grade-tab">
									
                  <vue-tree-list
                    :model="data1"
                    :default-expanded="false"
                    @click="onClick"
                    @change-name="onChangeName"
                  >
                    <span slot="addTreeNodeIcon1" class="custom-control custom-checkbox form-inline">
                      <input id="chkC01" class="custom-control-input" type="checkbox">
                      <label class="custom-control-label" for="chkC01"></label>
                    </span>

                    <span slot="addTreeNodeIcon" class="icon">＋</span>
                    <span slot="addLeafNodeIcon" class="icon"></span>

                    <span slot="addTreeNodeIcon" class="icon"></span>
                    <span slot="delNodeIcon" class="icon"></span>
                  </vue-tree-list>

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

export default {
  name: 'MyCurriculum',
  components: {
    PageHeader,
    VueTreeList
  },
  layout: 'EducationLayout',
  data() {
    return {
      newTree: {},
      data: new Tree([
        {
          name: '학원',
          id: 1,
          pid: 0,
          children: [
            {
              name: '국어',
              id: 2,
              isLeaf: false,
              pid: 1,
              children: [
                {
                  name: '1단원',
                  id: 7,
                  isLeaf: false,
                  pid: 6,
                  children: [
                    {
                      name: '화법과 작문.mp4',
                      id: 17,
                      isLeaf: true,
                      pid: 16
                    },
                    {
                      name: '화법과 작문.ppt',
                      id: 18,
                      isLeaf: true,
                      pid: 17
                    },
                    {
                      name: '화법과 작문.pdf',
                      id: 19,
                      isLeaf: true,
                      pid: 18
                    },
                    {
                      name: '화법과 작문.img',
                      id: 20,
                      isLeaf: true,
                      pid: 19
                    },
                  ]
                },
                {
                  name: '2단원',
                  id: 8,
                  isLeaf: false,
                  pid: 7,
                  children: [
                    {
                      name: '화법과 작문.mp4',
                      id: 23,
                      isLeaf: true,
                      pid: 22
                    },
                    {
                      name: '화법과 작문.ppt',
                      id: 20,
                      isLeaf: true,
                      pid: 19
                    },
                    {
                      name: '화법과 작문.pdf',
                      id: 21,
                      isLeaf: true,
                      pid: 20
                    },
                    {
                      name: '화법과 작문.img',
                      id: 22,
                      isLeaf: true,
                      pid: 21
                    },
                  ]
                },
              ]
            },
            {
              name: '영어',
              id: 3,
              isLeaf: false,
              pid: 2,
              children: [
                {
                  name: '1단원 영어',
                  id: 9,
                  isLeaf: true,
                  pid: 8
                },
                {
                  name: '2단원 영어',
                  id: 10,
                  isLeaf: true,
                  pid: 9
                },
              ]
            },
            {
              name: '과학',
              id: 4,
              isLeaf: false,
              pid: 3,
              children: [
                {
                  name: '1단원 과학',
                  id: 11,
                  isLeaf: true,
                  pid: 10
                },
                {
                  name: '2단원 과학',
                  id: 12,
                  isLeaf: true,
                  pid: 11
                },
              ]
            },
            {
              name: '심리학',
              id: 5,
              isLeaf: false,
              pid: 4,
              children: [
                {
                  name: '1단원 심리학',
                  id: 13,
                  isLeaf: true,
                  pid: 12
                },
                {
                  name: '2단원 심리학',
                  id: 14,
                  isLeaf: true,
                  pid: 13
                },
              ]
            },
            {
              name: '수학',
              id: 6,
              isLeaf: false,
              pid: 5,
              children: [
                {
                  name: '1단원 수학',
                  id: 15,
                  isLeaf: true,
                  pid: 14
                },
                {
                  name: '2단원 수학',
                  id: 16,
                  isLeaf: true,
                  pid: 15
                },
              ]
            }
          ]
        }
      ]),
      data1: new Tree([
        {
          name: '학원',
          id: 1,
          pid: 0,
          children: [
            {
              name: '국어',
              id: 2,
              isLeaf: false,
              pid: 1,
              children: [
                {
                  name: '1단원',
                  id: 7,
                  isLeaf: false,
                  pid: 6,
                  children: [
                    {
                      name: '화법과 작문.mp4',
                      id: 17,
                      isLeaf: true,
                      pid: 16
                    },
                    {
                      name: '화법과 작문.ppt',
                      id: 18,
                      isLeaf: true,
                      pid: 17
                    },
                    {
                      name: '화법과 작문.pdf',
                      id: 19,
                      isLeaf: true,
                      pid: 18
                    },
                    {
                      name: '화법과 작문.img',
                      id: 20,
                      isLeaf: true,
                      pid: 19
                    },
                  ]
                },
                {
                  name: '2단원',
                  id: 8,
                  isLeaf: false,
                  pid: 7,
                  children: [
                    {
                      name: '화법과 작문.mp4',
                      id: 23,
                      isLeaf: true,
                      pid: 22
                    },
                    {
                      name: '화법과 작문.ppt',
                      id: 20,
                      isLeaf: true,
                      pid: 19
                    },
                    {
                      name: '화법과 작문.pdf',
                      id: 21,
                      isLeaf: true,
                      pid: 20
                    },
                    {
                      name: '화법과 작문.img',
                      id: 22,
                      isLeaf: true,
                      pid: 21
                    },
                  ]
                },
              ]
            },
            {
              name: '영어',
              id: 3,
              isLeaf: false,
              pid: 2,
              children: [
                {
                  name: '1단원 영어',
                  id: 9,
                  isLeaf: true,
                  pid: 8
                },
                {
                  name: '2단원 영어',
                  id: 10,
                  isLeaf: true,
                  pid: 9
                },
              ]
            },
            {
              name: '과학',
              id: 4,
              isLeaf: false,
              pid: 3,
              children: [
                {
                  name: '1단원 과학',
                  id: 11,
                  isLeaf: true,
                  pid: 10
                },
                {
                  name: '2단원 과학',
                  id: 12,
                  isLeaf: true,
                  pid: 11
                },
              ]
            },
            {
              name: '심리학',
              id: 5,
              isLeaf: false,
              pid: 4,
              children: [
                {
                  name: '1단원 심리학',
                  id: 13,
                  isLeaf: true,
                  pid: 12
                },
                {
                  name: '2단원 심리학',
                  id: 14,
                  isLeaf: true,
                  pid: 13
                },
              ]
            },
            {
              name: '수학',
              id: 6,
              isLeaf: false,
              pid: 5,
              children: [
                {
                  name: '11단원 수학',
                  id: 15,
                  isLeaf: true,
                  pid: 14
                },
                {
                  name: '12단원 수학',
                  id: 16,
                  isLeaf: true,
                  pid: 15
                },
              ]
            }
          ]
        }
      ])
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
    },

    addNode() {
      console.log('vvvvvvvvvvvvvvvvvvvvvvvv')
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
    }
  },
}
</script>
<style>
.divide_area.left .vtl-operation,
.divide_area.left .addTreeNode{
  display: none;
}
.main > ul{
  display: none;
}
</style>
