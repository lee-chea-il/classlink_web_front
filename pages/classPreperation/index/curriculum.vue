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
                <TreeView
                  ref="institution"
                  :dataList="receiveInstitutionData"
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
                  :dataList="receiveFranchiseData"
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
                <TreeView
                  ref="curriculum"
                  :expanded="false"
                  :dataList="receiveCurriculumData"
                  identity="master"
                  :pidNum="2000"
                />
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
    <CurriculumUpdateModal
      ref="curriculumUpdateModal"
      @open-file-path="()=>{isShowOpenPathModal=true}"
      @open-save-path="()=>{isShowSavePathModal=true}"
    />
    <OpenSearchFileModal
      :open="isShowOpenPathModal"
      :institutionData="receiveInstitutionLessonData"
      :franchiseData="receiveFranchiseLessonData"
      :myData="receiveLessonList"
      @close="()=>{isShowOpenPathModal=false}"
      @open-file-info="openFileInfo"
    />
    <SavePathSearchModal
      :open="isShowSavePathModal"
      :institutionData="receiveInstitutionData"
      :franchiseData="receiveFranchiseData"
      :myData="receiveCurriculumData"
      @close="()=>{isShowSavePathModal=false}"
      @save-file-path="saveFilePath"
    />
  </div>
</template>

<script>
import PageHeader from '~/components/common/PageHeader.vue'
import TreeView from '@/components/common/custom/CustomTreeView.vue'
import initialState from '~/data/curriculum/initialState'
import CurriculumUpdateModal from '@/components/common/modal/curriculum/CurriculumUpdateModal.vue'
import SavePathSearchModal from '@/components/common/modal/curriculum/SavePathSearchModal.vue'
import OpenSearchFileModal from '@/components/common/modal/curriculum/openSearchFileModal.vue'

export default {
  name: 'MyCurriculum',
  components: {
    PageHeader,
    TreeView,
    CurriculumUpdateModal,
    SavePathSearchModal,
    OpenSearchFileModal
  },
  data() {
    return initialState()
  },
  methods: {
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
    saveFilePath(pathInfo){
      this.$refs.curriculumUpdateModal.setSavePath(pathInfo)
      this.isShowSavePathModal=false
    },
    openFileInfo(fileInfo){
      this.$refs.curriculumUpdateModal.setFileInfo(fileInfo)
      this.isShowOpenPathModal=false
    }
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
</style>
