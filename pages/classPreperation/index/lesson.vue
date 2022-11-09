<template>
  <div>
    <PageHeader title="레슨" />

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
              @click="openLessonAdd"
            >
              등록
            </button>
          </div>
        </div>
        <!-- /.컨트롤 버튼 영역 -->

        <!-- [개발참조] 레슨 : 컨텐츠구성 자료실과 동일 -->
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
                <TreeView
                  ref="institution"
                  :dataList="receiveInstitutionLessonData"
                  :editable="identity == 'master' ? true : false"
                  :identity="identity"
                  :pidNum="0"
                  @copyDataCallBack="copyDataCallBack"
                />
              </div>
              <!-- /.탭 내용01 -->
              <!-- 탭 내용02 -->
              <div
                id="franchise"
                class="tab-pane fade"
                role="tabpanel"
                aria-labelledby="class-tab"
              >
                <TreeView
                  ref="franchise"
                  :dataList="receiveFranchiseLessonData"
                  :editable="identity == 'master' ? true : false"
                  :identity="identity"
                  :pidNum="1000"
                  @copyDataCallBack="copyDataCallBack"
                />
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
                  내 레슨
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
                <TreeView
                  ref="curriculum"
                  :expanded="false"
                  :dataList="receiveLessonList"
                  identity="master"
                  :pidNum="2000"
                />
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

    <!-- 레슨 추가 -->
    <LessonAddModal
      :open="isLessonAdd"
      :identity="identity"
      :receiveInstitutionLessonData="receiveInstitutionLessonData"
      :receiveFranchiseLessonData="receiveFranchiseLessonData"
      :receiveAddLessonData="receiveAddLessonData"
      :receiveInstitutionData="receiveInstitutionData"
      :receiveFranchiseData="receiveFranchiseData"
      :isLesson="isLesson"
      @set-lesson="setLessonFlag"
      @call-back="copyDataCallBack"
      @close="isLessonAdd = false"
    />

    <!-- 레슨 변경 -->
    <LessonChangeModal :open="isLessonChange" @close="closeLessonChangeModal" />

    <!-- 레슨 열람 -->
    <LessonBrowseModal :open="isLessonBrowse" @close="closeLessonBrowseModal" />

    <button @click="openLessonChangeModal">레슨변경</button>
    <button @click="openLessonBrowseModal">레슨열람</button>
  </div>
</template>

<script>
import TreeView from '~/components/common/custom/CustomReferenceTreeView.vue'
import LessonAddModal from '~/components/common/modal/lesson/LessonAddModal.vue'
import LessonBrowseModal from '~/components/common/modal/lesson/LessonBrowseModal.vue'
import LessonChangeModal from '~/components/common/modal/lesson/LessonChangeModal.vue'
import PageHeader from '~/components/common/PageHeader.vue'

export default {
  name: 'LessonPage',
  components: {
    PageHeader,
    TreeView,
    LessonAddModal,
    LessonChangeModal,
    LessonBrowseModal,
  },
  layout: 'EducationLayout',
  data() {
    return {
      identity: 'teacher',
      isLesson: false,
      isLessonAdd: false,
      isLessonChange: false,
      isLessonBrowse: false,
      copyCheckData: [],
      receiveInstitutionLessonData: [
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
                      name: '일산화탄소1.lesson',
                      type: 'institution',
                      dbIdx: 1,
                    },
                    {
                      name: '일산화탄소2.lesson',
                      type: 'institution',
                      dbIdx: 2,
                    },
                    {
                      name: '일산화탄소3.lesson',
                      type: 'institution',
                      dbIdx: 3,
                    },
                    {
                      name: '일산화탄소4.lesson',
                      type: 'institution',
                      dbIdx: 4,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      receiveFranchiseLessonData: [
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
                      name: '일산화탄소1.lesson',
                      type: 'franchise',
                      dbIdx: 1,
                    },
                    {
                      name: '일산화탄소2.lesson',
                      type: 'franchise',
                      dbIdx: 2,
                    },
                    {
                      name: '일산화탄소3.lesson',
                      type: 'franchise',
                      dbIdx: 3,
                    },
                    {
                      name: '일산화탄소4.lesson',
                      type: 'franchise',
                      dbIdx: 4,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      receiveLessonList: [
        {
          name: '국어',
          children: [
            {
              name: '1단원',
              children: [
                {
                  name: '사투리 작문1.lesson',
                  type: 'institution',
                },
                {
                  name: '사투리 작문2.lesson',
                  type: 'franchise',
                },
              ],
            },
            {
              name: '2단원',
              children: [
                {
                  name: '부산 사투리 작문1.lesson',
                  type: 'curriculum',
                },
                {
                  name: '부산 사투리 작문2.lesson',
                  type: 'institution',
                },
                {
                  name: '부산 사투리 작문2.lesson',
                  type: 'franchise',
                },
                {
                  name: '부산 사투리 작문2.lesson',
                  type: 'institution',
                },
                {
                  name: '부산 사투리 작문2.lesson',
                  type: 'franchise',
                },
                {
                  name: '네이버란.lesson',
                  type: 'curriculum',
                },
              ],
            },
          ],
        },
      ],
      receiveAddLessonData: [
        {
          name: '내 자료',
          children: [],
        },
      ],
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
                      name: '일산화탄소1.mp4',
                      type: 'institution',
                      dbIdx: 1,
                    },
                    {
                      name: '일산화탄소2.mp4',
                      type: 'institution',
                      dbIdx: 2,
                    },
                    {
                      name: '일산화탄소3.mp4',
                      type: 'institution',
                      dbIdx: 3,
                    },
                    {
                      name: '일산화탄소4.mp4',
                      type: 'institution',
                      dbIdx: 4,
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
                      name: '일산화탄소1.mp4',
                      type: 'franchise',
                      dbIdx: 1,
                    },
                    {
                      name: '일산화탄소2.mp4',
                      type: 'franchise',
                      dbIdx: 2,
                    },
                    {
                      name: '일산화탄소3.mp4',
                      type: 'franchise',
                      dbIdx: 3,
                    },
                    {
                      name: '일산화탄소4.mp4',
                      type: 'franchise',
                      dbIdx: 4,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    openLessonAdd() {
      this.isLessonAdd = !this.isLessonAdd
    },

    openLessonChangeModal() {
      this.isLessonChange = true
    },

    closeLessonChangeModal() {
      this.isLessonChange = false
    },

    openLessonBrowseModal() {
      this.isLessonBrowse = true
    },

    closeLessonBrowseModal() {
      this.isLessonBrowse = false
    },

    setLessonFlag(flag) {
      this.isLesson = flag
    },

    copyData() {
      const instiTab = document.getElementById('institute')
      if (instiTab.classList.contains('show')) {
        this.$refs.institution.copyData()
      } else {
        this.$refs.franchise.copyData()
      }
    },

    pasteData() {
      this.$refs.curriculum.pasteData(this.copyCheckData)
    },

    delData() {
      this.$refs.curriculum.delData()
    },

    copyDataCallBack(copyData) {
      this.copyCheckData = copyData
      console.log(this.copyCheckData)
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
  height: 349px;
}
.main > ul {
  display: none;
}
</style>
