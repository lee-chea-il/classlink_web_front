<template>
  <div>
    <PageHeader title="커리큘럼" />
    <div class="tab-content depth03 ac_manage_dtr">
      <div class="tab-pane active">
        <MainBtnBox
          pageType="lesson"
          @open-add="openCurriculumAdd"
          @copy="copyData"
          @paste="pasteData"
          @delete="delData"
          @copyDataCallBack="copyDataCallBack"
        />
        
        <div class="divide_section">
          <DivideSection
            ref="leftSection"
            directionType="left"
            :identity="identity"
            :institutionData="receiveInstitutionData"
            :franchiseData="receiveFranchiseData"
            @un-active="unActive"
            @copyDataCallBack="copyDataCallBack"
          />
          <DivideSection
            ref="rightSection"
            directionType="right"
            :identity="identity"
            :curriculumData="receiveCurriculumData"
            @un-active="unActive"
            @copyDataCallBack="copyDataCallBack"
          />
        </div>
      </div>
    </div>
    <CurriculumUpdateModal
      ref="curriculumUpdateModal"
      :open="isShowOpenAddModal"
      @open-file-path="
        () => {
          isShowOpenPathModal = true
        }
      "
      @open-save-path="
        () => {
          isShowSavePathModal = true
        }
      "
      @close="
        () => {
          isShowOpenAddModal = false
        }
      "
    />
    <OpenSearchFileModal
      :open="isShowOpenPathModal"
      :institutionData="receiveInstitutionLessonData"
      :franchiseData="receiveFranchiseLessonData"
      :myData="receiveLessonList"
      @close="
        () => {
          isShowOpenPathModal = false
        }
      "
      @open-file-info="openFileInfo"
    />
    <SavePathSearchModal
      :open="isShowSavePathModal"
      :institutionData="receiveInstitutionData"
      :franchiseData="receiveFranchiseData"
      :myData="receiveCurriculumData"
      @close="
        () => {
          isShowSavePathModal = false
        }
      "
      @save-file-path="saveFilePath"
    />
  </div>
</template>

<script>
import MainBtnBox from '~/components/common/MainBtnBox.vue'
import PageHeader from '~/components/common/PageHeader.vue'
import initialState from '~/data/classPreperation/curriculum/initialState'
import CurriculumUpdateModal from '@/components/common/modal/curriculum/CurriculumUpdateModal.vue'
import SavePathSearchModal from '@/components/common/modal/curriculum/SavePathSearchModal.vue'
import OpenSearchFileModal from '@/components/common/modal/curriculum/OpenSearchFileModal.vue'
import DivideSection from '~/components/curriculum/DivideSection.vue'

export default {
  name: 'MyCurriculum',
  components: {
    PageHeader,
    CurriculumUpdateModal,
    SavePathSearchModal,
    OpenSearchFileModal,
    MainBtnBox,
    DivideSection,
  },
  data() {
    return initialState()
  },
  methods: {
    openCurriculumAdd() {
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
      this.isShowOpenAddModal = true
      this.$refs.curriculumUpdateModal.setData(createCurriculumData)
    },
    copyData() {
      const instiTab = document.getElementById('institute')
      if (instiTab.classList.contains('show')) {
        this.isCopyType = 'institution'
        this.$refs.leftSection.$refs.institution.copyData()
      } else {
        this.isCopyType = 'franchise'
        this.$refs.leftSection.$refs.franchise.copyData()
      }
    },
    pasteData() {
      this.$refs.rightSection.$refs.curriculum.pasteData(this.copyCheckData)
      if (this.isCopyType === 'institution') {
        this.$refs.leftSection.$refs.institution.copyComp()
      } else if (this.isCopyType === 'franchise') {
        this.$refs.leftSection.$refs.franchise.copyComp()
      }
    },
    delData() {
      if (this.identity === 'master') {
        const instiTab = document.getElementById('institute')
        if (instiTab.classList.contains('show')) {
          this.$refs.leftSection.$refs.institution.delData()
        } else {
          this.$refs.leftSection.$refs.franchise.delData()
        }
      }
      this.$refs.rightSection.$refs.curriculum.delData()
    },
    copyDataCallBack(copyData) {
      this.copyCheckData = copyData
      console.log(this.copyCheckData)
    },
    saveFilePath(pathInfo) {
      this.$refs.curriculumUpdateModal.setSavePath(pathInfo)
      this.isShowSavePathModal = false
    },
    openFileInfo(fileInfo) {
      this.$refs.curriculumUpdateModal.setFileInfo(fileInfo)
      this.isShowOpenPathModal = false
    },
    unActive() {
      this.$refs.leftSection.$refs.institution.unActiveAll()
      this.$refs.leftSection.$refs.franchise.unActiveAll()
      this.$refs.rightSection.$refs.curriculum.unActiveAll()
    }
  },
}
</script>

<style scoped></style>
