<template>
  <div>
    <PageHeader title="커리큘럼" />
    <div class="tab-content depth03 ac_manage_dtr">
      <div class="tab-pane active">
        <!-- 컨트롤 버튼 영역 -->
        <MainBtnBox
          pageType="lesson"
          @open-add="openCurriculumAdd"
          @copy="copyData"
          @paste="pasteData"
          @delete="delData"
        />
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
                  :isHideDownload="false"
                  @un-active="unActive"
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
                  :isHideDownload="false"
                  @un-active="unActive"
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
                  :expanded="true"
                  :dataList="receiveCurriculumData"
                  identity="master"
                  :pidNum="2000"
                  :isHideDownload="false"
                  @un-active="unActive"
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
      :open="isShowOpenAddModal"
      @open-file-path="()=>{isShowOpenPathModal=true}"
      @open-save-path="()=>{isShowSavePathModal=true}"
      @close="()=>{isShowOpenAddModal=false}"
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
import MainBtnBox from '~/components/common/MainBtnBox.vue'
import PageHeader from '~/components/common/PageHeader.vue'
import TreeView from '@/components/common/custom/CustomTreeView.vue'
import initialState from '~/data/curriculum/initialState'
import CurriculumUpdateModal from '@/components/common/modal/curriculum/CurriculumUpdateModal.vue'
import SavePathSearchModal from '@/components/common/modal/curriculum/SavePathSearchModal.vue'
import OpenSearchFileModal from '@/components/common/modal/curriculum/OpenSearchFileModal.vue'

export default {
  name: 'MyCurriculum',
  components: {
    PageHeader,
    TreeView,
    CurriculumUpdateModal,
    SavePathSearchModal,
    OpenSearchFileModal,
    MainBtnBox
  },
  data() {
    return initialState()
  },
  methods: {
    openCurriculumAdd(){
      const createCurriculumData = {
        subTitle: '',
        desc: '',
        openFileInfo: '',
        savePath: '',
        cwInfo: {},
        isOpenEducation: true,
        isContinuedRegist: true,
        lessonInfo: {},
      }
      this.isShowOpenAddModal=true
      this.$refs.curriculumUpdateModal.setData(createCurriculumData)
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
      if(this.identity==='master'){
        const instiTab = document.getElementById('institute')
        if (instiTab.classList.contains('show')) {
          this.$refs.institution.delData()
        }else{
          this.$refs.franchise.delData()
        }
      }
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
    },
    unActive(){
      this.$refs.institution.unActiveAll()
      this.$refs.franchise.unActiveAll()
      this.$refs.curriculum.unActiveAll()
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
