<template>
  <div>
    <PageHeader title="월드셋" />
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
            @update-data="updateData"
          />
          <DivideSection
            ref="rightSection"
            directionType="right"
            rightListTitle="내 건물SET"
            :identity="identity"
            :curriculumData="receiveWorldSetData"
            @un-active="unActive"
            @copyDataCallBack="copyDataCallBack"
            @update-data="updateData"
          />
        </div>
      </div>
    </div>
    <CurriculumUpdateModal
      ref="curriculumUpdateModal"
      :txtInfo="{
        'fileSet':'set',
        'modatTitle':'건물SET 등록',
        'ioTitle':'CW 교실',
        'rightTitle':'패키지 정보',
        'listTitle':'패키지 자료',
        'listEmptyTxt':'현재 불러온 패키지가 없습니다.'
      }"
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
      :open="isShowOpenPathModal"
      :institutionData="receiveInstitutionPackData"
      :franchiseData="receiveFranchisePackData"
      :myData="receivePackList"
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
      :myData="receiveWorldSetData"
      @close="
        () => {
          isShowSavePathModal = false
        }
      "
      @save-file-path="saveFilePath"
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
import initialState from '~/data/world/worldSet/initialState'
import CurriculumUpdateModal from '@/components/common/modal/curriculum/CurriculumUpdateModal.vue'
import SavePathSearchModal from '@/components/common/modal/curriculum/SavePathSearchModal.vue'
import OpenSearchFileModal from '@/components/common/modal/curriculum/OpenSearchFileModal.vue'
import DivideSection from '~/components/curriculum/DivideSection.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'

export default {
  name: 'WordlSet',
  components: {
    PageHeader,
    CurriculumUpdateModal,
    SavePathSearchModal,
    OpenSearchFileModal,
    MainBtnBox,
    DivideSection,
    ModalDesc,
  },
  data() {
    return initialState()
  },
  mounted(){
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
    },
    changeModalDescMsg(msg){
      this.isShowModalDesc=true
      this.modalDescMsg=msg
    },
    addCuriiculumData(data){
      this.isShowOpenAddModal = false
      if(data.type==='institution'){
        this.$refs.leftSection.$refs.institution.addData(data)
      }else if(data.type==='franchise'){
        this.$refs.leftSection.$refs.franchise.addData(data)
      }else{
        this.$refs.rightSection.$refs.curriculum.addData(data)
      }
    },
    updateData(data,type){
      this.updateType=type
      this.isShowOpenAddModal = true
      $("#modalCuriRegi").modal("show")
      this.$refs.curriculumUpdateModal.setData(data)
    },
    updateFileDel(){
      if(this.updateType==='institution'){
        this.$refs.leftSection.$refs.institution.updateFileDel()
      }else if(this.updateType==='franchise'){
        this.$refs.leftSection.$refs.franchise.updateFileDel()
      }else{
        this.$refs.rightSection.$refs.curriculum.updateFileDel()
      }
    },
    updateCuriiculumData(data){
      if(this.updateType==='institution'){
        this.$refs.leftSection.$refs.institution.updateFile(data)
      }else if(this.updateType==='franchise'){
        this.$refs.leftSection.$refs.franchise.updateFile(data)
      }else{
        this.$refs.rightSection.$refs.curriculum.updateFile(data)
      }
    }
  },
}
</script>

<style scoped></style>
