<template>
  <div>
    <PageHeader title="자료실" />
    <LoadingBox v-if="isLoading" />

    <div v-else class="tab-content depth03 ac_manage_dtr">
      <div class="tab-pane active">
        <!-- 컨트롤 버튼 영역 -->
        <MainBtnBox
          :value="searchData.word"
          pageType="reference"
          @open-filter="openFilterModal"
          @open-search-list="openSearchListModal"
          @change-word="changeSearchData"
          @copy="copyData"
          @paste="pasteData"
          @delete="delData"
          @set-create="openSelectReferenceType"
        />
        <!-- /.컨트롤 버튼 영역 -->

        <!-- 2단 분류 컨텐츠 -->
        <TreeSection
          ref="mainEducation"
          pageType="reference"
          :identity="identity"
          :insData="institutionData"
          :franchiseData="franchiseData"
          :myData="myData"
          :openData="openData"
          @open-data="onClickView"
          @delete-data="deleteMoreMenuBtn"
          @copyDataCallBack="copyDataCallBack"
          @download-data="downloadSelectData"
          @update-data="updateSelectData"
          @get-savepath="getSavePath"
          @tree-view-id="getInsTreeViewList"
          @tree-view-fd="getFranTreeViewList"
          @tree-view-od="getPublicTreeViewList"
          @tree-view-md="getMyTreeViewList"
          @tree-view-copy="treeViewCopy"
        />
        <!-- /.2단 분류 컨텐츠 -->
      </div>
    </div>

    <!-- 일반용 -->
    <!-- 일반용 -->
    <!-- 등록 파일 선택 -->
    <SelectReferenceModal
      @add-quiz="onOpenQuizAddModal"
      @add-test="onOpenNoteTestAddModal"
      @set-type="setUploadType"
    />

    <!-- 비디오 & 파일 업로드 선택 -->
    <UploadVideoFileModal
      :selectDataType="selectDataType"
      @upload-video="onUploadVideo"
      @upload-pdf="onUploadPdf"
    />

    <!-- 파일 등록 (동영상,문서,유튜브,url) -->
    <AddReferenceModal
      :open="isReferenceAddModal"
      :modalTitle="modalTitle"
      :reference="referenceData"
      :pushKeyword="pushKeyword"
      :uploadInfo="uploadInfo"
      @change-keyword="changePushKeyword"
      @change-input="onChangeUploadFile"
      @close="onCloseReferenceAddModal"
      @set-keyword="setKeyword"
      @delete-keyword="deleteKeyword"
      @open-save-path="onOpenSavePathModal"
      @submit="postDataroomFile"
      @change-submit="updateDataroomFile"
      @change-file="changeFile"
    />

    <!-- 퀴즈 등록 -->
    <AddQuizModal
      :open="isQuizAddModal"
      :modalTitle="modalTitle"
      :reference="referenceData"
      :quizList="referenceData.quiz_asks"
      :currentPageIdx="currentPageIdx"
      :pushKeyword="pushKeyword"
      :uploadInfo="uploadInfo"
      @change-number="onClickPagination"
      @pagination="onClickQuizPagination"
      @plus-item="onPlusQuizList"
      @delete-quiz="onDeleteQuizItem"
      @change-item="onChangeQuiz"
      @select-type="onClickQuizType"
      @change-input="onChangeUploadFile"
      @select-ox="onSelectOx"
      @select-level="onSelectDificultade"
      @close="onCloseQuizAddModal"
      @preview="onOpenQuizPreviewModal"
      @change-keyword="changePushKeyword"
      @set-keyword="setKeyword"
      @delete-keyword="deleteKeyword"
      @open-save-path="onOpenSavePathModal"
      @submit="postDataroomQuiz"
      @change-submit="updateDataroomQuiz"
    />

    <!-- 쪽지시험 등록 -->
    <AddNoteTestModal
      :open="isNoteTestAddModal"
      :modalTitle="modalTitle"
      :reference="referenceData"
      :currentPageIdx="currentPageIdx"
      :pushKeyword="pushKeyword"
      :uploadInfo="uploadInfo"
      @change-number="onClickPagination"
      @change-input="onChangeUploadFile"
      @change-level="onSelectDificultadeTest"
      @change-item="onChangeTest"
      @close="onCloseNoteTestAddModal"
      @delete-item="onDeleteNoteTest"
      @plus-item="onPlusNoteTestList"
      @pagination="onClickQuizPagination"
      @select-answer="onSelectAnswer"
      @preview="onOpenNoteTestPreviewModal"
      @change-keyword="changePushKeyword"
      @set-keyword="setKeyword"
      @delete-keyword="deleteKeyword"
      @open-save-path="onOpenSavePathModal"
      @add-example="plusExampleList"
      @delete-example="deleteExample"
      @submit="postDataroomNoteExam"
      @change-submit="updateDataroomNoteExam"
    />

    <!-- 비디오 & 문서 & 유튜브 & url 보기 -->
    <BrowseReferenceModal
      :open="isReferenceBrowse"
      :identity="identity"
      :selectData="referenceData"
      :uploadInfo="uploadInfo"
      @close="onCloseReferenceBrowseModal"
      @reference-change="onOpenReferenceChangeModal"
      @view-url="onOpenShareViewModal"
      @delete="openSelectModal"
      @open-save-path="openMovePathModal"
    />
    <!-- 일반용 -->
    <!-- 일반용 -->

    <!-- 유튜브 & url 업로드 선택 -->
    <UploadYoutubeModal
      :urlData="urlData"
      :selectDataType="selectDataType"
      @change-url="onChangeUrl"
      @upload-youtube="onUploadYoutube"
      @upload-page="onUploadUrl"
    />

    <!-- 퀴즈 보기 -->
    <BrowseQuizModal
      :open="isQuizBrowse"
      :identity="identity"
      :selectData="referenceData"
      :currentPageIdx="currentPageIdx"
      :uploadInfo="uploadInfo"
      @change-number="onClickPagination"
      @close="onCloseQuizBrowseModal"
      @pagination="onClickQuizPagination"
      @change="onOpenQuizChangeModal"
      @preview="onOpenQuizPreviewModal"
      @view-url="onOpenShareViewModal"
      @delete="openSelectModal"
      @open-save-path="openMovePathModal"
      @export-pdf="exportPdf"
    />

    <!-- 퀴즈 미리보기 -->
    <PreviewQuizModal
      :open="isQuizPreviewModal.open"
      :quizList="referenceData.quiz_asks"
      :currentPageIdx="currentPageIdx"
      @close="onCloseQuizPreviewModal"
      @pagination="onClickQuizPagination"
    />

    <!-- 쪽지시험 보기 -->
    <BrowseNoteTestModal
      :open="isNoteTestBrowse"
      :identity="identity"
      :selectData="referenceData"
      :currentPageIdx="currentPageIdx"
      :uploadInfo="uploadInfo"
      @change-number="onClickPagination"
      @close="onCloseNoteTestBrowseModal"
      @pagination="onClickQuizPagination"
      @change="onOpenNoteTestChangeModal"
      @preview="onOpenNoteTestPreviewModal"
      @view-url="onOpenShareViewModal"
      @delete="openSelectModal"
      @open-save-path="openMovePathModal"
      @export-pdf="exportPdf"
    />

    <!-- 쪽지시험 미리보기 -->
    <PreviewNoteTestModal
      :open="isNoteTestPreviewModal.open"
      :testList="referenceData.note_exam_asks"
      :currentPageIdx="currentPageIdx"
      @close="onCloseNoteTestPreviewModal"
      @pagination="onClickQuizPagination"
    />

    <!-- 공유하기 -->
    <ShareViewModal
      :open="isShareViewModal.open"
      :url="isShareViewModal.url"
      @close="onCloseShareViewModal"
    />

    <!-- 삭제 모달 -->
    <DeleteModal
      :open="isSelectModal.open"
      :target="isSelectModal.prevPage"
      :data="referenceData"
      @close="onCloseSelectModal"
      @submit="deleteData"
    />

    <!-- 설명 모달 -->
    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />

    <!-- 저장경로 설정 -->
    <SavePathModal
      :identity="identity"
      :open="isSavePathModal.open"
      :institutionData="treeInstitutionData"
      :franchiseData="treeFranchiseData"
      :myData="treeMyData"
      :tableType="selectDatatableType"
      :modalTitle="modalTitle"
      @save-file-path="setSavePath"
      @close="onCloseSavePathModal"
    />

    <!-- 이동 모달 -->
    <MovePathModal
      :identity="identity"
      :open="isMovePathModal.open"
      :institutionData="moveInstitutionData"
      :franchiseData="moveFranchiseData"
      :dataInfo="referenceData"
      :myData="moveMyData"
      :tableType="selectDatatableType"
      :modalTitle="modalTitle"
      @move-data="postMoveData"
      @close="closeMovePathModal"
    />

    <!-- 자료실 검색 필터 -->
    <FilterReferenceModal
      :open="isFilterModal.open"
      :searchData="searchData"
      :typeList="typeList"
      :subjectList="subjectList"
      :categoryList="categoryList"
      @close="closeFilterModal"
      @search-list-view="openSearchListModal"
      @click-item="changeSearchData"
    />

    <!-- 자료실 검색 성공 -->
    <SearchResultModal
      :open="isSearchListModal"
      :searchData="searchData"
      :filterItem="filterItem(referenceList)"
      :checkList="checkList"
      @change-word="changeSearchData"
      @close="closeSearchListModal"
      @open-filter="openFilterModal"
      @copy="copyData"
      @check-handler="checkHandler"
      @detail-view="onClickViewDetail"
    />

    <!-- 퀴즈 프린트 영역 -->
    <PrintQuizModal v-show="isQuizPrint" :quizList="referenceData.quiz_asks" />

    <!-- 쪽지시험 프린트 영역 -->
    <PrintNoteTestModal
      v-show="isNoteTestPrint"
      :noteTestList="referenceData.note_exam_asks"
    />

    <CustomSnackbar :show="isSnackbar.open" :message="isSnackbar.message" />
    <UploadLoadingBox v-if="isUploading" />
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'
import $ from 'jquery'
import file_size_url from 'file_size_url'
import LoadingBox from '~/components/common/LoadingBox.vue'
import UploadLoadingBox from '~/components/common/UploadLoadingBox.vue'
import MainBtnBox from '~/components/common/MainBtnBox.vue'
import PageHeader from '~/components/common/PageHeader.vue'
import ModalDesc from '~/components/common/modal/ModalDesc.vue'
import DeleteModal from '~/components/common/modal/DeleteModal.vue'
import SavePathModal from '~/components/common/modal/SavePathModal.vue'
import TreeSection from '~/components/classPreperation/common/TreeSection.vue'
import CustomSnackbar from '~/components/common/CustomSnackbar.vue'
import AddQuizModal from '~/components/classPreperation/modal/AddQuizModal.vue'
import AddNoteTestModal from '~/components/classPreperation/modal/AddNoteTestModal.vue'
import AddReferenceModal from '~/components/classPreperation/modal/AddReferenceModal.vue'
import BrowseQuizModal from '~/components/classPreperation/modal/BrowseQuizModal.vue'
import BrowseReferenceModal from '~/components/classPreperation/modal/BrowseReferenceModal.vue'
import BrowseNoteTestModal from '~/components/classPreperation/modal/BrowseNoteTestModal.vue'
import FilterReferenceModal from '~/components/classPreperation/modal/FilterReferenceModal.vue'
import PreviewQuizModal from '~/components/classPreperation/modal/PreviewQuizModal.vue'
import PrintQuizModal from '~/components/classPreperation/modal/PrintQuizModal.vue'
import PrintNoteTestModal from '~/components/classPreperation/modal/PrintNoteTestModal.vue'
import PreviewNoteTestModal from '~/components/classPreperation/modal/PreviewNoteTestModal.vue'
import ShareViewModal from '~/components/classPreperation/modal/ShareViewModal.vue'
import SearchResultModal from '~/components/classPreperation/modal/SearchResultModal.vue'
import SelectReferenceModal from '~/components/classPreperation/modal/SelectReferenceModal.vue'
import UploadYoutubeModal from '~/components/classPreperation/modal/UploadYoutubeModal.vue'
import UploadVideoFileModal from '~/components/classPreperation/modal/UploadVideoFileModal.vue'
import initialState from '~/data/common/dataRoom/initialState'
import { urlRegex, setNewArray, jsonItem } from '~/utiles/common'
import { api, apiData } from '~/services'
import MovePathModal from '~/components/common/modal/MovePathModal.vue'

export default {
  name: 'ReferenceRoom',
  components: {
    LoadingBox,
    UploadLoadingBox,
    MainBtnBox,
    PageHeader,
    ModalDesc,
    DeleteModal,
    SavePathModal,
    TreeSection,
    CustomSnackbar,
    AddQuizModal,
    AddNoteTestModal,
    AddReferenceModal,
    BrowseQuizModal,
    BrowseReferenceModal,
    BrowseNoteTestModal,
    FilterReferenceModal,
    PreviewNoteTestModal,
    PrintQuizModal,
    PrintNoteTestModal,
    PreviewQuizModal,
    ShareViewModal,
    SearchResultModal,
    SelectReferenceModal,
    UploadYoutubeModal,
    UploadVideoFileModal,
    MovePathModal,
  },
  data() {
    return initialState()
  },
  mounted() {
    this.identity = localStorage.getItem('identity')
    const { user } = this.$store.state.common
    this.initReferenceData = {
      ...this.initReferenceData,
      ins_code: user.ins_code,
      registrant_name: user.mem_name,
    }
    this.referenceData = jsonItem(this.initReferenceData)
    this.getEarlyData()
  },
  methods: {
    // api 통신
    // 초기 접근 시 api호출
    getEarlyData() {
      this.isLoading = true
      Promise.all([
        this.getServerUrl(),
        this.getInsTreeViewList(),
        this.getFranTreeViewList(),
        this.getMyTreeViewList(),
        this.getPublicTreeViewList(),
      ])
    },

    // 교육기관 트리 가져오기
    async getInsTreeViewList() {
      await apiData
        .getTreeViewList({ type: 'ID' })
        .then(({ data: { data } }) => {
          const newItem = jsonItem(data)
          this.institutionData = jsonItem(newItem)
          this.treeInstitutionData = jsonItem(newItem)
          this.moveInstitutionData = jsonItem(newItem)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 프랜차이즈 트리 가져오기
    async getFranTreeViewList() {
      if (this.$store.state.common.user.fra_code) {
        await apiData
          .getTreeViewList({ type: 'FD' })
          .then(({ data: { data } }) => {
            const newItem = jsonItem(data)
            this.franchiseData = jsonItem(newItem)
            this.treeFranchiseData = jsonItem(newItem)
            this.moveFranchiseData = jsonItem(newItem)
          })
          .catch((err) => {
            console.log(err)
          })
      } else return null
    },

    // 내 트리 가져오기
    async getMyTreeViewList() {
      await apiData
        .getTreeViewList({ type: 'MD' })
        .then(({ data: { data } }) => {
          const newItem = jsonItem(data)
          this.myData = jsonItem(newItem)
          this.treeMyData = jsonItem(newItem)
          this.moveMyData = jsonItem(newItem)

          if (this.isCopyMD) {
            this.isCopyMD = false
            if (this.copyCheckData.datatable_type === 'ID') {
              this.$refs.mainEducation.$refs.education.$refs.institution.copyComp()
            } else if (this.copyCheckData.datatable_type === 'FD') {
              this.$refs.mainEducation.$refs.education.$refs.franchise.copyComp()
            }
            setTimeout(() => {
              this.$refs.mainEducation.$refs.myData.$refs.mydata.setActiveDataList(
                this.copyMDData
              )
              this.copyMDData = null
            }, 100)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 공개 자료실 트리 가져오기
    async getPublicTreeViewList() {
      await apiData
        .getTreeViewList({ type: 'OD' })
        .then(({ data: { data } }) => {
          this.openData = jsonItem(data)
          this.treeOpenData = jsonItem(data)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 체크 박스로 파일 복사
    async copyTreeViewList() {
      await apiData
        .copyTreeViewList(this.copyCheckData)
        .then(({ data: { data } }) => {
          console.log('datassdatadata    ', data)
          if (data.length > 0) {
            this.isCopyMD = true
            this.copyMDData = data
            this.setUpdateTree('MD')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 자료등록시 트리 호출
    setUpdateTree(type) {
      if (type === 'ID') {
        this.getInsTreeViewList()
      } else if (type === 'FD') {
        this.getFranTreeViewList()
      } else {
        this.getMyTreeViewList()
      }
    },

    treeViewCopy(parentInfo) {
      this.copyData()
      this.copyCheckData.pasteParentIdxs = [parentInfo]
      this.copyTreeViewList()
    },

    // 일반용
    // 등록 자료 내용 변경
    onChangeUploadFile({ target: { id, value, type, checked, name } }) {
      const elem = this.referenceData
      const newVal = value.replace(/\./gi, '')
      if (type === 'checkbox') {
        if (checked) return (elem[name] = true)
        else return (elem[name] = false)
      } else if (id === 'title') return (elem[id] = newVal)
      else return (elem[id] = value)
    },
    // 일반용

    // api 통신
    // 업로드 주소 가져오기
    async getServerUrl() {
      this.isLoading = true
      await apiData
        .getServerUrl()
        .then(() => {
          this.isLoading = false
        })
        .catch(() => {})
    },

    // 파일서버 업로드
    async postFile(file) {
      this.isUploading = true
      const formData = new FormData()
      formData.append('file', file)
      await api
        .postFile(formData)
        .then(({ data: { data } }) => {
          this.referenceData = {
            ...this.referenceData,
            file: data.savedNm,
            save_path: data.savePath,
            registration_date: data.uploadDate,
          }
          $('#modalDataregi02').modal('hide')
          this.onOpenReferenceAddModal()
          this.isUploading = false
        })
        .catch(() => {})
    },

    // 업로드 시 확장자 붙히기
    setExtension(code) {
      let msg
      switch (code) {
        case '01':
          msg = '.mp4'
          break
        case '02':
          msg = '.pdf'
          break
        case '03':
          msg = '.quiz'
          break
        case '04':
          msg = '.exam'
          break
        case '05':
          msg = '.youtube'
          break
        case '06':
          msg = '.url'
          break
        default:
          msg = ''
      }
      return msg
    },

    // 연타 막기
    setCallTimeout() {
      this.isApiCall = true
      setTimeout(() => {
        this.isApiCall = false
      }, 2000)
    },

    // 파일 업로드
    // 동영상, PDF, YOUTUBE, URL 업로드
    async postDataroomFile() {
      if (this.isApiCall) return false
      this.setCallTimeout()
      const { title, keyword, ...rest } = this.referenceData
      const payload = {
        ...rest,
        keyword: keyword.join(','),
        title: title + this.setExtension(rest.datatype),
      }
      await apiData
        .postDataroomFile(payload)
        .then(() => {
          this.onCloseReferenceAddModal()
          this.setUpdateTree(payload.datatable_type)
          this.openModalDesc('등록 성공', '자료를 등록했습니다.')
        })
        .catch(() => {
          this.openModalDesc('등록 실패', '자료 등록을 실패했습니다.')
        })
    },

    // 퀴즈 업로드
    async postDataroomQuiz() {
      if (this.isApiCall) return false
      this.setCallTimeout()
      const { title, keyword, ...rest } = this.referenceData
      const payload = {
        ...rest,
        keyword: keyword.join(','),
        title: title + this.setExtension(rest.datatype),
      }
      await apiData
        .postDataroomQuiz(payload)
        .then(() => {
          this.onCloseQuizAddModal()
          this.setUpdateTree(payload.datatable_type)
          this.openModalDesc('등록 성공', '자료를 등록했습니다.')
        })
        .catch(() => {
          this.openModalDesc('등록 실패', '자료 등록을 실패했습니다.')
        })
    },

    // 쪽지시험 업로드
    postDataroomNoteExam() {
      if (this.isApiCall) return false
      this.setCallTimeout()
      const { title, keyword, ...rest } = this.referenceData
      const payload = {
        ...rest,
        keyword: keyword.join(','),
        title: title + this.setExtension(rest.datatype),
      }
      apiData
        .postDataroomNoteExam(payload)
        .then(() => {
          this.onCloseNoteTestAddModal()
          this.setUpdateTree(payload.datatable_type)
          this.openModalDesc('등록 성공', '자료를 등록했습니다.')
        })
        .catch(() => {
          this.openModalDesc('등록 실패', '자료 등록을 실패했습니다.')
        })
    },

    // 파일 조회
    // 동영상, PDF, YOUTUBE, URL 조회
    getDataroomFile({ treeinfo_idx, type }) {
      const payload = { treeinfo_idx, datatable_type: type }
      apiData
        .getDataroomFile(payload)
        .then(({ data: { data } }) => {
          this.referenceData = {
            ...data,
            keyword: data.keyword.split(','),
            title: data.title.replace(/.mp4|.pdf|.youtube|.url/g, ''),
          }
          this.getFileSize(data.full_path)
          if (this.modalTitle === '수정') {
            this.onOpenReferenceAddModal()
          } else {
            this.onOpenReferenceBrowseModal()
          }
          if (data.datatype === '05') {
            const youtubeUrl = data.full_path.replace(
              '//www.youtube.com/embed/',
              ''
            )
            this.setYoutubeTime(youtubeUrl)
          }
        })
        .catch(() => {
          this.openModalDesc('조회 실패', '조회를 실패했습니다.')
        })
    },

    // 퀴즈 조회
    async getDataroomQuiz({ treeinfo_idx, type }) {
      const payload = { treeinfo_idx, datatable_type: type }
      await apiData
        .getDataroomQuiz(payload)
        .then(({ data: { data } }) => {
          this.referenceData = {
            ...data,
            keyword: data.keyword.split(','),
            title: data.title.replace(/.quiz/g, ''),
          }
          if (this.modalTitle === '수정') {
            this.isQuizAddModal = true
          } else {
            this.onOpenQuizBrowseModal()
          }
        })
        .catch(() => {
          this.openModalDesc('조회 실패', '조회를 실패했습니다.')
        })
    },

    // 쪽지시험 조회
    getDataroomNoteExam({ treeinfo_idx, type }) {
      const payload = { treeinfo_idx, datatable_type: type }
      apiData
        .getDataroomNoteExam(payload)
        .then(({ data: { data } }) => {
          this.referenceData = {
            ...data,
            keyword: data.keyword.split(','),
            title: data.title.replace(/.exam/g, ''),
          }
          if (this.modalTitle === '수정') {
            this.isNoteTestAddModal = true
          } else {
            this.onOpenNoteTestBrowseModal()
          }
        })
        .catch(() => {
          this.openModalDesc('조회 실패', '조회를 실패했습니다.')
        })
    },

    // 자료 유형별 핸들러
    selectDataroomType(type, data) {
      const { title } = data
      // console.log(data)
      const payload = {
        treeinfo_idx: data.treeViewId,
        type: data.type,
      }
      if (title.includes('.quiz')) return this.getDataroomQuiz(payload)
      else if (title.includes('.exam')) return this.getDataroomNoteExam(payload)
      else return this.getDataroomFile(payload)
    },

    // 파일 수정
    // 동영상, PDF, YOUTUBE, URL 수정
    updateDataroomFile() {
      if (this.isApiCall) return false
      this.setCallTimeout()
      const { keyword, title, ...rest } = this.referenceData
      const data = {
        ...rest,
        keyword: keyword.join(','),
        title: title + this.setExtension(rest.datatype),
        treeinfo_idx: rest.tree.treeinfo_idx,
        parent_treeinfo_idx: rest.tree.parent_treeinfo_idx,
      }
      apiData
        .updateDataroomFile(data)
        .then(() => {
          this.onCloseReferenceAddModal()
          this.setUpdateTree(data.datatable_type)
          this.openModalDesc('수정 성공', '자료를 수정했습니다.')
        })
        .catch(() => {})
    },

    // 퀴즈 수정
    updateDataroomQuiz() {
      if (this.isApiCall) return false
      this.setCallTimeout()
      const { keyword, title, ...rest } = this.referenceData
      const data = {
        ...rest,
        keyword: keyword.join(','),
        title: title + this.setExtension(rest.datatype),
        treeinfo_idx: rest.tree.treeinfo_idx,
        parent_treeinfo_idx: rest.tree.parent_treeinfo_idx,
      }
      apiData
        .updateDataroomQuiz(data)
        .then(() => {
          this.onCloseQuizAddModal()
          this.setUpdateTree(data.datatable_type)
          this.openModalDesc('수정 성공', '자료를 수정했습니다.')
        })
        .catch(() => {})
    },

    // 쪽지 시험 수정
    updateDataroomNoteExam() {
      if (this.isApiCall) return false
      this.setCallTimeout()
      const {
        keyword,
        title,
        registrant,
        registrant_name,
        registration_date,
        study_type,
        tree,
        file,
        file_name,
        note_exam_asks,
        ...rest
      } = this.referenceData

      const newNoteExam = note_exam_asks.map((item) => {
        return {
          no: item.no,
          question: item.question,
          limit_time: item.limit_time,
          level: item.level,
          explain: item.explain,
          correct_no: item.correct_no,
          note_exam_ask_views: item.note_exam_ask_views.map((data, i) => {
            return {
              question: data.question,
              no: i + 1,
            }
          }),
        }
      })

      const data = {
        ...rest,
        keyword: keyword.join(','),
        title: title + this.setExtension(rest.datatype),
        treeinfo_idx: tree.treeinfo_idx,
        parent_treeinfo_idx: tree.parent_treeinfo_idx,
        note_exam_asks: newNoteExam,
      }

      apiData
        .updateDataroomNoteExam(data)
        .then(() => {
          this.onCloseNoteTestAddModal()
          this.setUpdateTree(data.datatable_type)
          this.openModalDesc('수정 성공', '자료를 수정했습니다.')
        })
        .catch(() => {})
    },

    // 파일 이동
    async postMoveData({ datatable_type, parent_treeinfo_idx, treeinfo_idx }) {
      const payload = { datatable_type, parent_treeinfo_idx, treeinfo_idx }
      await apiData.postMoveData(payload).then(() => {
        this.setUpdateTree(datatable_type)
      })
    },

    // 파일 삭제
    deleteData({ datatable_type }) {
      if (this.isApiCall) return false
      this.setCallTimeout()
      const payload = {
        treeinfo_idx: this.deleteTreeIdx,
        datatable_type,
      }
      apiData
        .deleteData(payload)
        .then(() => {
          this.isSelectModal.open = false
          this.setUpdateTree(payload.datatable_type)
          this.openModalDesc('삭제 성공', '자료를 삭제했습니다.')
        })
        .catch(() => {})
    },

    // 트리에서 자료 삭제
    deleteMoreMenuBtn(node) {
      this.deleteTreeIdx = node.treeViewId
      this.referenceData.datatable_type = node.type
      this.isSelectModal.open = true
    },

    // 등록 자료 초기화
    initReference() {
      const init = jsonItem(this.initReferenceData)
      setTimeout(() => {
        this.currentPageIdx = 0
        this.referenceData = init
        this.urlData = {
          youtube: '',
          page: '',
        }
        this.uploadInfo.saveFolderPath = ''
        this.selectDatatableType = 'ID'
      }, 300)
    },

    // Modal Event
    openModalDesc(tit, msg, to) {
      if (to) {
        this[to] = false
      }
      this.modalDesc = {
        open: true,
        title: tit,
        desc: msg,
        path: to,
      }
    },

    onCloseModalDesc() {
      this.modalDesc.open = false
      if (this.modalDesc.path) {
        this[this.modalDesc.path] = true
      }
    },

    // 등록시 이름 변경
    openSelectReferenceType() {
      this.setModalTitle('등록')
    },

    // 등록 유형 선택 모달
    openSelectModal(url) {
      this.modalTitle = '등록'
      this[url] = false
      this.isSelectModal = {
        open: true,
        prevPage: url,
      }
    },

    onCloseSelectModal() {
      this[this.isSelectModal.prevPage] = true
      this.isSelectModal.open = false
    },

    // 자료 추가 모달
    onOpenReferenceAddModal() {
      this.isReferenceAddModal = true
    },

    onCloseReferenceAddModal() {
      this.isReferenceAddModal = false
      this.initReference()
    },

    // 퀴즈 추가 모달
    onOpenQuizAddModal() {
      this.setModalTitle('등록')
      this.referenceData = {
        ...this.referenceData,
        datatype: '03',
        quiz_asks: [{ ...this.quizItem }],
      }
      this.isQuizAddModal = true
    },

    onCloseQuizAddModal() {
      this.isQuizAddModal = false
      this.initReference()
    },

    // 쪽지시험 추가 모달
    onOpenNoteTestAddModal() {
      this.setModalTitle('등록')
      this.referenceData = {
        ...this.referenceData,
        datatype: '04',
        note_exam_asks: [{ ...jsonItem(this.testItem) }],
      }
      this.isNoteTestAddModal = true
    },

    onCloseNoteTestAddModal() {
      this.isNoteTestAddModal = false
      this.initReference()
    },

    // 자료 조회
    onOpenReferenceBrowseModal() {
      this.isReferenceBrowse = true
    },

    onCloseReferenceBrowseModal() {
      this.isReferenceBrowse = false
      this.initReference()
    },

    // 퀴즈 조회
    onOpenQuizBrowseModal() {
      this.isQuizBrowse = true
    },

    onCloseQuizBrowseModal() {
      this.isQuizBrowse = false
      this.initReference()
    },

    // 쪽지시험 조회
    onOpenNoteTestBrowseModal() {
      this.isNoteTestBrowse = true
    },

    onCloseNoteTestBrowseModal() {
      this.isNoteTestBrowse = false
      this.initReference()
    },

    // 퀴즈 수정 셋팅
    onOpenQuizChangeModal() {
      this.setModalTitle('수정')
      if (this.isQuizBrowse) {
        this.isQuizBrowse = false
      }
      this.isQuizAddModal = true
    },

    // 쪽지시험 셋팅
    onOpenNoteTestChangeModal() {
      this.setModalTitle('수정')
      if (this.isNoteTestBrowse) {
        this.isNoteTestBrowse = false
      }
      this.isNoteTestAddModal = true
    },

    // 퀴즈 미리보기 모달
    onOpenQuizPreviewModal(prevPath, page) {
      this.isQuizPreviewModal = {
        open: true,
        prevPage: prevPath,
      }
      if (page === 'first') {
        this.currentPageIdx = 0
      }
      if (prevPath === 'add') {
        this.isQuizAddModal = false
        this.isQuizPreviewModal.select = false
      } else if (prevPath === 'browse') {
        this.isQuizBrowse = false
        this.isQuizPreviewModal.select = true
      } else {
        this.isQuizChange = false
        this.isQuizPreviewModal.select = true
      }
    },

    onCloseQuizPreviewModal() {
      this.isQuizPreviewModal.open = false
      const target = this.isQuizPreviewModal.prevPage
      if (target === 'add') {
        this.isQuizAddModal = true
      } else if (target === 'browse') {
        this.isQuizBrowse = true
      } else {
        this.isQuizChange = true
      }
    },

    // 쪽지시험 미리보기 모달
    onOpenNoteTestPreviewModal(prevPath, page) {
      this.isNoteTestPreviewModal = {
        open: true,
        prevPage: prevPath,
      }
      if (page === 'first') {
        this.currentPageIdx = 0
      }
      if (prevPath === 'add') {
        this.isNoteTestAddModal = false
        this.isNoteTestPreviewModal.select = false
      } else if (prevPath === 'browse') {
        this.isNoteTestBrowse = false
        this.isNoteTestPreviewModal.select = true
      } else {
        this.isNoteTestChange = false
        this.isNoteTestPreviewModal.select = true
      }
    },

    onCloseNoteTestPreviewModal() {
      this.isNoteTestPreviewModal.open = false
      const target = this.isNoteTestPreviewModal.prevPage
      if (target === 'add') return (this.isNoteTestAddModal = true)
      else if (target === 'browse') return (this.isNoteTestBrowse = true)
      else return (this.isNoteTestChange = true)
    },

    // 공유하기 모달
    onOpenShareViewModal(path, url) {
      if (this[path]) {
        this[path] = false
      }
      this.isShareViewModal = {
        open: true,
        path,
        url,
      }
    },

    onCloseShareViewModal() {
      this.isShareViewModal.open = false
      this[this.isShareViewModal.path] = true
    },

    // 저장 경로 모달
    onOpenSavePathModal(path) {
      if (this[path]) {
        this[path] = false
      }
      this.isSavePathModal = {
        open: true,
        prevPage: path,
      }
    },

    onCloseSavePathModal() {
      this.isSavePathModal.open = false
      this[this.isSavePathModal.prevPage] = true
    },

    // 이동 경로 모달
    openMovePathModal(path) {
      if (this[path]) {
        this[path] = false
      }
      this.isMovePathModal = {
        open: true,
        prevPage: path,
      }
    },

    closeMovePathModal() {
      this.isMovePathModal.open = false
      this[this.isMovePathModal.prevPage] = true
    },

    // 필터 모달
    openFilterModal(path) {
      if (this.isSearchListModal) {
        this.isSearchListModal = false
      }
      this.isFilterModal.open = true
      if (path !== '') {
        this.isFilterModal.prevPage = path
      }
    },

    closeFilterModal() {
      this.isFilterModal.open = false
      if (this.isFilterModal.prevPage === 'prev') {
        this.openSearchListModal()
      }
    },

    // 검색 모달
    openSearchListModal() {
      this.isFilterModal.prevPage = ''
      if (this.isFilterModal) {
        this.closeFilterModal()
      }
      return (this.isSearchListModal = true)
    },

    closeSearchListModal() {
      const newItem = jsonItem(this.initSearchData)
      this.searchData = newItem
      return (this.isSearchListModal = false)
    },

    setModalTitle(str) {
      this.modalTitle = str
    },

    setCreateModalTitle() {
      this.modalTitle = '등록'
    },

    // 스넥바 오픈
    openSnackbar(msg) {
      this.isSnackbar.open = {
        open: true,
        message: msg,
      }
    },

    closeSnackbar() {
      this.isSnackbar.open = false
    },

    // Event Listener
    // 자료 수정 할때 모달 타이틀 변경
    onOpenReferenceChangeModal() {
      this.setModalTitle('수정')
      if (this.isReferenceBrowse) {
        this.isReferenceBrowse = false
      }
      this.isReferenceAddModal = true
    },

    // 등록 유형 설정하기
    setUploadType(type) {
      this.selectDataType = type
    },

    // 필터링 리턴값 변경 이벤트
    matchFilterArrayName(name) {
      if (name === 'type') return 'typeList'
      else if (name === 'subject') return 'subjectList'
      else return 'categoryList'
    },

    // 자료 검색 내용 change Event
    changeSearchData(e) {
      const { name, checked, dataset, value } = e.target
      const result = this.searchData
      if (name === 'word') return (result[name] = value)
      else if (checked) {
        if (dataset.value === '전체') return (result[name] = [])
        else if (
          result[name].length ===
          this[this.matchFilterArrayName(name)].length - 2
        ) {
          result[name] = []
          return (e.target.checked = false)
        } else return (result[name] = [...result[name], dataset.value])
      } else {
        const idx = result[name]?.findIndex((item) => item === dataset?.value)
        return result[name].splice(idx, 1)
      }
    },

    // 필터링 시 이름 return
    setType(item) {
      if (item === 'video' || item === 'youtube') return '동영상'
      else if (item === 'pdf' || item === 'url') return '문서'
      else if (item === 'quiz') return '퀴즈'
      else return '쪽지시험'
    },

    // 자료 검색 필터링 result
    filterItem(list) {
      const filter = this.searchData
      const filterName = () => {
        if (filter && filter.word !== '')
          return list.filter(
            (item) =>
              item.name.includes(filter.word) ||
              item.keyword.includes(filter.word)
          )
        else return []
      }
      const filterSubject = () => {
        if (filter.subject?.length)
          return filterName().filter((item) =>
            filter.subject.includes(item.subject)
          )
        else return filterName()
      }

      const filterDivision = () => {
        if (filter.type?.length)
          return filterSubject().filter((item) =>
            filter.type.includes(item.datatable_type)
          )
        else return filterSubject()
      }

      const filterCategory = () => {
        if (filter.datatype?.length)
          return filterDivision().filter((item) =>
            filter.datatype.includes(this.setType(item.datatype))
          )
        else return filterDivision()
      }
      return filterCategory()
    },

    onClickDetailView(item) {
      this.referenceData = jsonItem(item)
    },

    // 검색결과 체크박스
    checkHandler({ target: { checked, value, id } }) {
      const idx = this.referenceList?.findIndex((item) => item.name === value)
      if (id === 'all_check') {
        if (checked) return (this.checkList = [...this.referenceList])
        else return (this.checkList = [])
      } else if (checked)
        return (this.checkList = [...this.checkList, this.referenceList[idx]])
      else return this.checkList.splice(idx, 1)
    },

    // 검색결과에서 상세 보기
    onClickViewDetail(data) {
      this.onClickView(data)
      this.isSearchListModal = false
    },

    // 유튜브, 링크 변경
    onChangeUrl({ target: { name, value } }) {
      return (this.urlData[name] = value)
    },

    // 퀴즈 변경 핸들러
    onChangeQuiz({ target: { value, id } }, idx) {
      const numberOnly = value.replace(/[^0-9.]/g, '').replace(/ /g, '')
      if (id === 'limit_time') {
        return (this.referenceData.quiz_asks[idx][id] = Number(numberOnly))
      } else {
        return (this.referenceData.quiz_asks[idx][id] = value)
      }
    },

    // 쪽지시험 변경 핸들러
    onChangeTest({ target: { value, name, type, checked, id } }, idx) {
      const numberOnly = value.replace(/[^0-9.]/g, '').replace(/ /g, '')
      const testElem = this.referenceData.note_exam_asks[idx]
      if (type === 'checkbox') {
        if (checked) return (testElem[name] = true)
        else {
          if (name === 'isCommentary') {
            testElem.explain = ''
          }
          testElem[name] = false
        }
      } else if (id === 'limit_time') return (testElem[id] = numberOnly)
      else {
        testElem[id] = value
      }
    },

    // 키워드 변경 핸들러
    setKeyword({ target: { value } }) {
      const noSpace = /\s/g
      if (!noSpace.test(value) && value.length > 0 && value.length < 26) {
        const keywordList = [...this.referenceData.keyword, value]
        this.referenceData.keyword = setNewArray(keywordList)
        this.pushKeyword = this.pushKeyword.replace(/.+/g, '')
      } else {
        this.pushKeyword = ''
      }
    },

    deleteKeyword(idx) {
      this.referenceData.keyword.splice(idx, 1)
    },

    changePushKeyword({ target: { value } }) {
      const newVal = value.replace(/\s/g, '')
      this.pushKeyword = newVal
    },

    // 저장 경로 선택 하기
    setSavePath(data) {
      this.referenceData = {
        ...this.referenceData,
        parent_treeinfo_idx: data.id,
        tree: { parent_treeinfo_idx: data.id },
        datatable_type: data.type,
      }
      return (this.uploadInfo.saveFolderPath = data.path)
    },

    // 트리 저장경로 설정
    getSavePath(path) {
      this.deleteTreeIdx = path.treeViewId
      this.selectDatatableType = path.type
      this.uploadInfo.saveFolderPath = path.path
    },

    // 파일 사이즈 가져오기
    async getFileSize(url) {
      const getByteSize = (size) => {
        const byteUnits = ['KB', 'MB', 'GB', 'TB']
        for (const i in byteUnits) {
          size = Math.floor(size / 1024)
          if (size < 1024) return size.toFixed(1) + byteUnits[i]
        }
      }
      if (url.toString().includes('http')) {
        await file_size_url(url)
          .then((res) => {
            this.uploadInfo.fileSize = res
          })
          .catch((error) => console.log(error))
      } else {
        this.uploadInfo.fileSize = getByteSize(url)
      }
    },

    // 비디오 업로드
    onUploadVideo(e) {
      const {
        target: { files },
      } = e
      if (files[0].type === 'video/mp4') {
        this.postFile(files[0])
        this.referenceData = {
          ...this.referenceData,
          title: files[0].name.replace('.mp4', ''),
          file_name: files[0].name,
          full_path: URL.createObjectURL(files[0]),
          // datatable_type: 'ID',
          datatype: '01',
        }
        this.getFileSize(files[0].size)
      } else {
        this.openModalDesc('', '형식의 맞는 파일을 업로드해주세요.')
      }
      return (e.target.value = '')
    },

    // PDF 업로드
    onUploadPdf(e) {
      const {
        target: { files },
      } = e
      const target = files[0]
      if (target.type === 'application/pdf') {
        this.postFile(files[0])
        this.referenceData = {
          ...this.referenceData,
          title: target.name.replace('.pdf', ''),
          file_name: target.name,
          full_path: URL.createObjectURL(files[0]),
          // datatable_type: 'ID',
          datatype: '02',
        }
        this.getFileSize(files[0].size)
      } else {
        this.openModalDesc('', '형식의 맞는 파일을 업로드해주세요.')
      }
      e.target.value = ''
    },

    // 유튜브 API 호출
    async getYoutubeData(youtubeUrl) {
      await apiData
        .getYoutubeData(youtubeUrl)
        .then(
          ({
            data: {
              items: [item],
            },
          }) => {
            this.referenceData = {
              ...this.referenceData,
              title: item.snippet.localized.title
                .replace(/\./, '')
                .substring(0, 60),
              file_name: item.snippet.localized.title
                .replace(/\./, '')
                .substring(0, 60),
              description: item.snippet.localized.description.substring(0, 100),
              // datatable_type: 'ID',
              datatype: '05',
              full_path: `//www.youtube.com/embed/${youtubeUrl}`,
              file: `//www.youtube.com/embed/${youtubeUrl}`,
            }
            // 유튜브 재생시간 가져오기
            const playTime = item.contentDetails.duration
            this.uploadInfo.youtubePlayTime = playTime
            $('#modalDataregi03').modal('hide')
            this.onOpenReferenceAddModal()
          }
        )
        .catch(() => {
          this.openModalDesc('실패', '유효하지 않은 주소입니다.')
        })
    },

    // 유튜브 재생시간 가져오기
    async setYoutubeTime(youtubeUrl) {
      await apiData.getYoutubeData(youtubeUrl).then(
        ({
          data: {
            items: [item],
          },
        }) => {
          // 유튜브 재생시간 가져오기
          const playTime = item.contentDetails.duration
          this.uploadInfo.youtubePlayTime = playTime
        }
      )
    },

    // 유튜브 업로드
    onUploadYoutube() {
      const youtubeUrl = this.urlData.youtube.replace('https://youtu.be/', '')
      this.getYoutubeData(youtubeUrl)
    },

    // URL 업로드
    onUploadUrl() {
      const url = this.urlData.page
      const isTest = urlRegex.test(this.urlData.page)
      if (isTest) {
        this.referenceData = {
          ...this.referenceData,
          name: url,
          file_name: url,
          // datatable_type: 'ID',
          datatype: '06',
          full_path: url,
          file: url,
        }
        $('#modalDataregi03').modal('hide')
        this.onOpenReferenceAddModal()
      } else {
        this.openModalDesc('실패', 'URL을 정확히 입력해주세요')
      }
    },

    // [자료실]수정 페이지 파일 변경
    changeFile(e) {
      const {
        target: { files, name },
      } = e
      if (files[0]) {
        this.postFile(files[0])
        this.referenceData = {
          ...this.referenceData,
          title: files[0].name,
          full_path: URL.createObjectURL(files[0]),
          file_name: files[0].name,
          // datatable_type: 'ID',
          datatype: name,
        }
      }
    },

    // 퀴즈 변경 UI
    onClickPagination(idx) {
      this.currentPageIdx = idx
      this.focusEditorField()
    },

    // Editor focus
    focusEditorField() {
      setTimeout(() => {
        const targetElem = document.getElementById(`quiz_editor`)
        targetElem.childNodes[0].focus()
      }, 200)
    },

    // 퀴즈 페이지네이션
    onClickQuizPagination(direction, max) {
      const idx = this.currentPageIdx
      const isPlus = direction === 'plus'
      if (isPlus) {
        idx < max - 1 && (this.currentPageIdx += 1)
        this.focusEditorField()
      } else {
        idx !== 0 && (this.currentPageIdx -= 1)
        this.focusEditorField()
      }
    },

    //  퀴즈 추가
    onPlusQuizList() {
      const target = this.referenceData
      const len = target.quiz_asks.length
      const isLength = len <= 19
      this.currentPageIdx = len
      if (isLength) {
        target.quiz_asks = [
          ...target.quiz_asks,
          {
            ...this.quizItem,
            no: len + 1,
          },
        ]
        this.focusEditorField()
      }
    },

    // 선택한 퀴즈 지우기
    onDeleteQuizItem(idx) {
      if (this.referenceData.quiz_asks.length > 1) {
        this.referenceData.quiz_asks.splice(idx, 1)
        if (idx !== 0) {
          this.currentPageIdx = 0
        }
        this.focusEditorField()
      }
    },

    // 퀴즈 타입 변경
    onClickQuizType({ target: { value } }, idx, num) {
      const target = this.referenceData.quiz_asks[idx]
      if (num === 'OX') {
        target.correct = 'O'
        target.wrong = 'X'
      } else if (num === 'SA') {
        target.correct = ''
        target.wrong = ''
      } else {
        target.correct = ''
        target.wrong = ''
      }
      return (target.type = value)
    },

    // ox클릭 이벤트
    onSelectOx(idx, correct) {
      if (correct === 'O') {
        this.referenceData.quiz_asks[idx].correct = 'O'
        this.referenceData.quiz_asks[idx].wrong = 'x'
      } else {
        this.referenceData.quiz_asks[idx].correct = 'X'
        this.referenceData.quiz_asks[idx].wrong = 'O'
      }
    },

    // 난이도 설정
    onSelectDificultade(idx, num) {
      this.referenceData.quiz_asks[idx].level = num
    },

    // 난이도 설정 쪽지 시험
    onSelectDificultadeTest(idx, num) {
      this.referenceData.note_exam_asks[idx].level = num
    },

    // 쪽지 시험
    // 쪽지 시험 추가
    onPlusNoteTestList() {
      const target = this.referenceData
      const len = target.note_exam_asks.length
      const isLength = len <= 19
      const setId = len + 1
      this.currentPageIdx = len
      if (isLength) {
        target.note_exam_asks = [
          ...target.note_exam_asks,
          { ...jsonItem(this.testItem), no: setId },
        ]
        this.focusEditorField()
      }
    },

    // 선택한 쪽지시험 지우기
    onDeleteNoteTest(idx) {
      if (this.referenceData.note_exam_asks.length > 1) {
        this.referenceData.note_exam_asks.splice(idx, 1)
        if (idx !== 0) {
          this.currentPageIdx = idx - 1
        }
        this.focusEditorField()
      }
    },

    // 정답 입력
    onSelectAnswer(idx, targetIdx) {
      this.referenceData.note_exam_asks[idx].correct_no = Number(targetIdx + 1)
    },

    // 쪽지시험 예제 추가
    plusExampleList(idx) {
      const id =
        this.referenceData.note_exam_asks[idx].note_exam_ask_views.length + 1
      const example = { no: id, question: '' }
      this.referenceData.note_exam_asks[idx].note_exam_ask_views.push(example)
    },

    // 쪽지시험 예제 제거
    deleteExample(idx, targetIdx) {
      this.referenceData.note_exam_asks[idx].note_exam_ask_views.splice(
        targetIdx,
        1
      )
    },

    // 자료 조회
    onClickView(data) {
      this.setModalTitle('등록')
      console.log(data)
      const type = data.datatype
      this.selectDataroomType(type, data)
    },

    // 자료 수정
    updateSelectData(data) {
      this.setModalTitle('수정')
      const type = data.datatype
      this.selectDataroomType(type, data)
    },

    copyData() {
      const instiTab = document.getElementById('institute')
      if (instiTab.classList.contains('show')) {
        this.isCopyType = 'institution'
        return this.$refs.mainEducation.$refs.education.$refs.institution.copyData()
      } else {
        this.isCopyType = 'franchise'
        return this.$refs.mainEducation.$refs.education.$refs.franchise.copyData()
      }
    },

    copyDataCallBack(copyData) {
      this.copyCheckData = copyData
      console.log(
        'this.copyCheckData   ' + this.copyCheckData,
        this.copyCheckData.copyType
      )
    },

    pasteData() {
      const parentIdxList =
        this.$refs.mainEducation.$refs.myData.$refs.mydata.checkPastePosition()
      this.copyCheckData.pasteParentIdxs = parentIdxList
      if (
        this.copyCheckData.pasteParentIdxs.length > 0 &&
        this.copyCheckData.copyTreeData.length > 0
      ) {
        /* console.log('parentIdxList  ',JSON.stringify(parentIdxList)) */
        // console.log("this.parentIdxList   "+JSON.stringify(this.copyCheckData))
        this.copyTreeViewList()
      }
    },

    delData() {
      if (this.identity === 'institution') {
        const instiTab = document.getElementById('institute')
        if (instiTab.classList.contains('show'))
          this.$refs.mainEducation.$refs.education.$refs.institution.delData()
        else this.$refs.mainEducation.$refs.education.$refs.franchise.delData()
      }
      this.$refs.mainEducation.$refs.myData.$refs.mydata.delData()
    },

    // PDF변환
    exportPdf(target) {
      window.scrollTo(0, 0)
      const targetId = target === 'quiz' ? '#pdfSave' : '#pdfSaveNoteTest'
      const targetElem = document.querySelector(targetId)
      setTimeout(() => {
        this.isNoteTestPrint = true
        html2pdf(targetElem, {
          margin: 0,
          file_name: `${target}.pdf`,
          image: { type: 'jpeg', quality: 0.95 },
          html2canvas: {
            scrollY: 0,
            scale: 2,
            dpi: 300,
            letterRendering: true,
            allowTaint: false,
            ignoreElements(element) {
              // pdf에 출력하지 않아야할 dom이 있다면 해당 옵션 사용
              if (element.id === 'noneItem') {
                return true
              }
            },
          },
          jsPDF: {
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compressPDF: true,
          },
        })
        this.isNoteTestPrint = false
      }, 1500)
    },

    // 다운로드 a태그 만들기
    createAtag(path) {
      const downBtn = document.createElement('a')
      downBtn.setAttribute('href', path)
      downBtn.setAttribute('download', 'download')
      downBtn.setAttribute('target', '_blank')
      downBtn.click()
      downBtn.remove()
    },

    // tree menu download button
    downloadSelectData(data) {
      const newItem = jsonItem(data)
      this.referenceData = newItem
      const type = data.datatype
      if (type === '03') return false
      else if (type === '04') return false
      return this.createAtag(newItem.save_path)
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
</style>
