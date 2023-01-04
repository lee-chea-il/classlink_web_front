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
          <DivideSectionFranchise
            ref="leftSection"
            directionType="left"
            :identity="identity"
            :franchiseData="receiveFranchiseData"
            @un-active="unActive"
            @copyDataCallBack="copyDataCallBack"
            @update-data="updateData"
            @show-ins-to-fran-modal="showInsToFranModal"
          />
          <DivideSectionFranchise
            ref="rightSection"
            directionType="right"
            :identity="identity"
            :curriculumData="receiveCurriculumData"
            @un-active="unActive"
            @copyDataCallBack="copyDataCallBack"
            @update-data="updateData"
          />
        </div>
      </div>
    </div>
    <CurriculumUpdateModal
      ref="curriculumUpdateModal"
      :isCurriculum="true"
      :txtInfo="{
        fileSet: 'link',
        modatTitle: '커리큘럼 등록 / 수정',
        ioTitle: 'CW 교실',
        rightTitle: '레슨정보',
        listTitle: '레슨 자료',
        listEmptyTxt: '현재 불러온 레슨이 없습니다.',
      }"
      :dropMenuData="dropMenuData"
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
      @change-desc="changeModalDescMsg"
      @add-curiiculum-data="addCuriiculumData"
      @update-file-del="updateFileDel"
      @update-curiiculum-data="updateCuriiculumData"
    />
    <OpenSearchFileModal
      modalType="franchise"
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
      modalType="franchise"
      :open="isShowSavePathModal"
      :franchiseData="receiveFranchiseData"
      :myData="receiveCurriculumData"
      @close="
        () => {
          isShowSavePathModal = false
        }
      "
      @save-file-path="saveFilePath"
    />
    <CopyInsToFranDataModal
      :open="isShowCopyInsToFranDataModal"
      :identity="identity"
      :institutionData="receiveInstitutionData"
    />
    <ModalDesc
      :open="isShowModalDesc"
      :desc="modalDescMsg"
      @close="
        () => {
          isShowModalDesc = false
        }
      "
    />
  </div>
</template>

<script>
import $ from 'jquery'
import MainBtnBox from '~/components/common/MainBtnBox.vue'
import PageHeader from '~/components/common/PageHeader.vue'
import initialState from '~/data/classPreperation/curriculum/initialState'
import CurriculumUpdateModal from '@/components/common/modal/curriculum/CurriculumUpdateModal.vue'
import SavePathSearchModal from '@/components/common/modal/curriculum/SavePathSearchModal.vue'
import OpenSearchFileModal from '@/components/common/modal/curriculum/OpenSearchFileModal.vue'
import DivideSectionFranchise from '~/components/curriculum/DivideSectionFranchise.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import CopyInsToFranDataModal from '@/components/common/modal/curriculum/CopyInsToFranDataModal.vue'

export default {
  name: 'MyCurriculum',
  components: {
    PageHeader,
    CurriculumUpdateModal,
    SavePathSearchModal,
    OpenSearchFileModal,
    MainBtnBox,
    DivideSectionFranchise,
    ModalDesc,
    CopyInsToFranDataModal,
  },
  data() {
    return initialState()
  },
  mounted() {
    /* setTimeout(() => {
      this.addCuriiculumData(this.testData)
    },1000) */
  },
  methods: {
    openCurriculumAdd() {
      this.isShowOpenAddModal = true
      this.$refs.curriculumUpdateModal.setData(null)
    },
    copyData() {
      this.isCopyType = 'franchise'
      this.$refs.leftSection.$refs.franchise.copyData()
    },
    pasteData() {
      this.$refs.rightSection.$refs.curriculum.pasteData(this.copyCheckData)
      this.$refs.leftSection.$refs.franchise.copyComp()
    },
    delData() {
      if (this.identity === 'institution') {
        this.$refs.leftSection.$refs.franchise.delData()
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
      this.$refs.leftSection.$refs.franchise.unActiveAll()
      this.$refs.rightSection.$refs.curriculum.unActiveAll()
    },
    changeModalDescMsg(msg) {
      this.isShowModalDesc = true
      this.modalDescMsg = msg
    },
    addCuriiculumData(data) {
      this.isShowOpenAddModal = false
      if (data.type === 'franchise') {
        this.$refs.leftSection.$refs.franchise.addData(data)
      } else {
        this.$refs.rightSection.$refs.curriculum.addData(data)
      }
    },
    updateData(data, type) {
      this.updateType = type
      this.isShowOpenAddModal = true
      $('#modalCuriRegi').modal('show')
      this.$refs.curriculumUpdateModal.setData(data)
    },
    updateFileDel() {
      if (this.updateType === 'franchise') {
        this.$refs.leftSection.$refs.franchise.updateFileDel()
      } else {
        this.$refs.rightSection.$refs.curriculum.updateFileDel()
      }
    },
    updateCuriiculumData(data) {
      if (this.updateType === 'franchise') {
        this.$refs.leftSection.$refs.franchise.updateFile(data)
      } else {
        this.$refs.rightSection.$refs.curriculum.updateFile(data)
      }
    },
    showInsToFranModal() {
      this.isShowCopyInsToFranDataModal = true
    },
  },
}
</script>

<style scoped></style>
