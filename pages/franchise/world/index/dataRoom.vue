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
          @open-add="openSelectReferenceType"
        />
        <!-- /.컨트롤 버튼 영역 -->

        <!-- 2단 분류 컨텐츠 -->
        <TreeSection
          ref="mainEducation"
          pageType="reference"
          :identity="identity"
          :institutionData="receiveInstitutionData"
          :franchiseData="receiveFranchiseData"
          :openData="receiveOpenData"
          :myDataList="receiveMyData"
          @open-data="onClickView"
          @copyDataCallBack="copyDataCallBack"
          @download-data="downloadSelectData"
          @update-data="updateSelectData"
          @get-savepath="getSavePath"
        />
        <!-- /.2단 분류 컨텐츠 -->
      </div>
    </div>

    <!-- 월드용 -->
    <!-- 월드용 -->
    <!-- 등록 파일 선택 -->
    <SelectReferenceModal
      pageRoot="world"
      @add-quiz="onOpenQuizAddModal"
      @add-test="onOpenNoteTestAddModal"
      @set-type="setUploadType"
    />

    <!-- 비디오 & 파일 업로드 선택 -->
    <UploadVideoFileModal
      :selectDataType="selectDataType"
      @upload-video="onUploadVideo"
      @upload-pdf="onUploadPdf"
      @upload-music="uploadMusic"
    />

    <!-- 파일 등록 (동영상,문서,유튜브,url) -->
    <AddReferenceModal
      pageRoot="world"
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
      @delete-thumbnail="deleteThumbnail"
      @submit="postDataroomFile"
      @change-submit="updateDataroomFile"
      @change-file="changeFile"
    />

    <!-- 퀴즈 등록 -->
    <AddQuizModal
      pageRoot="world"
      :open="isQuizAddModal"
      :modalTitle="modalTitle"
      :reference="referenceData"
      :quizList="referenceData.quiz"
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
      @delete-thumbnail="deleteThumbnail"
      @submit="postDataroomQuiz"
      @change-submit="updateDataroomQuiz"
    />

    <!-- 쪽지시험 등록 -->
    <AddNoteTestModal
      pageRoot="world"
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
      @delete-thumbnail="deleteThumbnail"
      @submit="postDataroomNoteExam"
      @change-submit="updateDataroomNoteExam"
    />

    <!-- 비디오 & 문서 & 유튜브 & url 보기 -->
    <BrowseReferenceModal
      pageRoot="world"
      :open="isReferenceBrowse"
      :identity="identity"
      :selectData="referenceData"
      @close="onCloseReferenceBrowseModal"
      @reference-change="onOpenReferenceChangeModal"
      @view-url="onOpenShareViewModal"
      @delete="openSelectModal"
      @open-save-path="onOpenSavePathModal"
    />
    <!-- 월드용 -->
    <!-- 월드용 -->

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
      @change-number="onClickPagination"
      @close="onCloseQuizBrowseModal"
      @pagination="onClickQuizPagination"
      @change="onOpenQuizChangeModal"
      @preview="onOpenQuizPreviewModal"
      @view-url="onOpenShareViewModal"
      @delete="openSelectModal"
      @open-save-path="onOpenSavePathModal"
      @export-pdf="exportPdf"
    />

    <!-- 퀴즈 미리보기 -->
    <PreviewQuizModal
      :open="isQuizPreviewModal.open"
      :quizList="referenceData.quiz"
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
      @change-number="onClickPagination"
      @close="onCloseNoteTestBrowseModal"
      @pagination="onClickQuizPagination"
      @change="onOpenNoteTestChangeModal"
      @preview="onOpenNoteTestPreviewModal"
      @view-url="onOpenShareViewModal"
      @delete="openSelectModal"
      @open-save-path="onOpenSavePathModal"
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
      :open="isSavePathModal.open"
      :institutionData="receiveInstitutionData"
      :franchiseData="receiveFranchiseData"
      :myData="receiveMyData"
      @save-file-path="setSavePath"
      @close="onCloseSavePathModal"
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
    <PrintQuizModal v-show="isQuizPrint" :quizList="referenceData.quiz" />

    <!-- 쪽지시험 프린트 영역 -->
    <PrintNoteTestModal
      v-show="isNoteTestPrint"
      :noteTestList="referenceData.note_exam_asks"
    />

    <CustomSnackbar :show="isSnackbar.open" :message="isSnackbar.message" />
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'
import $ from 'jquery'
import file_size_url from 'file_size_url'
import MainBtnBox from '~/components/common/MainBtnBox.vue'
import PageHeader from '~/components/common/PageHeader.vue'
import ModalDesc from '~/components/common/modal/ModalDesc.vue'
import DeleteModal from '~/components/common/modal/DeleteModal.vue'
import SavePathModal from '~/components/common/modal/SavePathModal.vue'
import TreeSection from '~/components/franchiseWorld/common/TreeSection.vue'
import CustomSnackbar from '~/components/common/CustomSnackbar.vue'

import AddQuizModal from '~/components/franchiseWorld/modal/AddQuizModal.vue'
import AddNoteTestModal from '~/components/franchiseWorld/modal/AddNoteTestModal.vue'
import AddReferenceModal from '~/components/franchiseWorld/modal/AddReferenceModal.vue'
import BrowseQuizModal from '~/components/franchiseWorld/modal/BrowseQuizModal.vue'
import BrowseReferenceModal from '~/components/franchiseWorld/modal/BrowseReferenceModal.vue'
import BrowseNoteTestModal from '~/components/franchiseWorld/modal/BrowseNoteTestModal.vue'
import FilterReferenceModal from '~/components/franchiseWorld/modal/FilterReferenceModal.vue'
import PreviewQuizModal from '~/components/franchiseWorld/modal/PreviewQuizModal.vue'
import PrintQuizModal from '~/components/franchiseWorld/modal/PrintQuizModal.vue'
import PrintNoteTestModal from '~/components/franchiseWorld/modal/PrintNoteTestModal.vue'
import PreviewNoteTestModal from '~/components/franchiseWorld/modal/PreviewNoteTestModal.vue'
import ShareViewModal from '~/components/franchiseWorld/modal/ShareViewModal.vue'
import SearchResultModal from '~/components/franchiseWorld/modal/SearchResultModal.vue'
import SelectReferenceModal from '~/components/franchiseWorld/modal/SelectReferenceModal.vue'
import UploadYoutubeModal from '~/components/franchiseWorld/modal/UploadYoutubeModal.vue'
import UploadVideoFileModal from '~/components/franchiseWorld/modal/UploadVideoFileModal.vue'

import initialState from '~/data/common/dataRoom/initialState'
import { urlRegex, setNewArray, deepCopy } from '~/utiles/common'
import { api, apiData } from '~/services'
import LoadingBox from '~/components/common/LoadingBox.vue'
export default {
  name: 'FranchiseWorldReference',
  components: {
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
    LoadingBox,
  },
  data() {
    return initialState()
  },
  mounted() {
    this.getServerUrl()
    this.identity = localStorage.getItem('identity')
    const user = this.$store.state.common.user
    this.initReferenceData = {
      ...this.initReferenceData,
      fra_code: user.fra_code,
      ins_code: user.ins_code,
      registrant: user.mem_idx,
      registrant_name: user.mem_name,
    }
    this.referenceData = {
      ...this.initReferenceData,
    }
  },
  methods: {
    // 월드용
    // 월드용
    // 등록 자료 내용 변경
    onChangeUploadFile(e) {
      const {
        target: { id, value, type, checked, name, files },
      } = e
      const elem = this.referenceData
      const isCheckbox = name === 'open_yn' || name === 'public_open_yn'
      if (type === 'checkbox') {
        if (checked) return (elem[id] = true)
        else return (elem[id] = false)
      } else if (isCheckbox) return (elem[name] = value)
      else if (files && id === 'thumbnail') {
        elem[id] = URL.createObjectURL(files[0])
        e.target.value = ''
      } else {
        return (elem[id] = value)
      }
    },

    deleteThumbnail() {
      this.referenceData.thumbnail = ''
    },

    // 배경음악 업로드
    uploadMusic(e) {
      const {
        target: { files },
      } = e
      console.log(files)
      if (files[0] && files[0].type.includes('audio/')) {
        $('#modalDataregi02').modal('hide')
        this.onOpenReferenceAddModal()
        this.referenceData = {
          ...this.referenceData,
          name: files[0].name,
          file_name: files[0].name,
          datatable_type: 'ID',
          worker: this.userInfo.mem_name,
          datatype: '07',
          fileSize: files[0].size,
          createAt: files[0].lastModifiedDate,
          save_path: URL.createObjectURL(files[0]),
        }
      } else {
        this.openModalDesc('', '형식의 맞는 파일을 업로드해주세요.')
      }
      return (e.target.value = '')
    },
    // 월드용
    // 월드용

    // api 통신
    // 업로드 주소 가져오기
    getServerUrl() {
      this.isLoading = true
      apiData
        .getServerUrl()
        .then(() => {
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 파일서버 업로드
    postFile(file) {
      this.isUploading = true
      const formData = new FormData()
      formData.append('file', file)
      api
        .postFile(formData)
        .then(({ data: { data } }) => {
          this.referenceData = {
            file: data.savedNm,
            save_path: data.savePath,
            upload_date: data.uploadDate,
          }
          $('#modalDataregi02').modal('hide')
          this.getFileSize(`${process.env.VUE_APP_FILE_URL}${data.savedNm}`)
          this.onOpenReferenceAddModal()
          this.isUploading = false
        })
        .catch((err) => {
          console.log(err)
          this.isUploading = false
        })
    },

    // 파일 업로드
    // 동영상, PDF, YOUTUBE, URL 업로드
    postDataroomFile() {
      const { thumbnail, ...rest } = this.referenceData
      const payload = {
        ...rest,
        keyword: rest.keyword.join(','),
      }
      apiData
        .postDataroomFile(payload)
        .then(() => {
          this.onCloseReferenceAddModal()
          this.openModalDesc('등록 성공', '자료를 등록했습니다.')
        })
        .catch(() => {
          console.log(thumbnail)
          this.openModalDesc('등록 실패', '자료 등록을 실패했습니다.')
        })
    },

    // 퀴즈 업로드
    postDataroomQuiz() {
      const { thumbnail, ...rest } = this.referenceData
      const payload = {
        ...rest,
        keyword: rest.keyword.join(','),
      }
      apiData
        .postDataroomQuiz(payload)
        .then(() => {
          this.onCloseQuizAddModal()
          this.openModalDesc('등록 성공', '자료를 등록했습니다.')
        })
        .catch(() => {
          console.log(thumbnail)
          this.openModalDesc('등록 실패', '자료 등록을 실패했습니다.')
        })
    },

    // 쪽지시험 업로드
    postDataroomNoteExam() {
      const { thumbnail, ...rest } = this.referenceData
      const payload = {
        ...rest,
        keyword: rest.keyword.join(','),
      }
      apiData
        .postDataroomNoteExam(payload)
        .then(() => {
          this.onCloseNoteTestAddModal()
          this.openModalDesc('등록 성공', '자료를 등록했습니다.')
        })
        .catch(() => {
          console.log(thumbnail)
          this.openModalDesc('등록 실패', '자료 등록을 실패했습니다.')
        })
    },

    // 파일 조회
    // 동영상, PDF, YOUTUBE, URL 조회
    getDataroomFile({ dataroom_idx, type }) {
      const payload = { dataroom_idx, datatable_type: type }
      apiData
        .getDataroomFile(payload)
        .then(({ data: { data } }) => {
          this.referenceData = {
            ...data,
            keyword: data.keyword.split(','),
            name: data.title,
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 퀴즈 조회
    getDataroomQuiz({ dataroom_idx, type }) {
      const payload = { dataroom_idx, datatable_type: type }
      apiData
        .getDataroomQuiz(payload)
        .then(({ data: { data } }) => {
          this.referenceData = {
            ...data,
            keyword: data.keyword.split(','),
            name: data.title,
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 쪽지시험 조회
    getDataroomNoteExam({ dataroom_idx, type }) {
      const payload = { dataroom_idx, datatable_type: type }
      apiData
        .getDataroomNoteExam(payload)
        .then(({ data: { data } }) => {
          this.referenceData = {
            ...data,
            keyword: data.keyword.split(','),
            name: data.title,
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 자료 유형별 핸들러
    selectDataroomType(type, data) {
      const payload = {
        dataroom_idx: data.dataroom_idx,
        type: data.datatable_type,
      }
      if (type === '03') return this.getDataroomQuiz(payload)
      else if (type === '04') return this.getDataroomNoteExam(payload)
      else return this.getDataroomFile(payload)
    },

    // 파일 수정
    // 동영상, PDF, YOUTUBE, URL 수정
    updateDataroomFile() {
      const { thumbnail, ...rest } = this.referenceData
      const data = {
        ...rest,
        keyword: rest.keyword.join(','),
      }
      apiData
        .updateDataroomFile(data)
        .then(() => {
          this.onCloseReferenceAddModal()
          this.openModalDesc('수정 성공', '자료를 수정했습니다.')
        })
        .catch((err) => {
          console.log(thumbnail)
          console.log(err)
        })
    },

    // 퀴즈 수정
    updateDataroomQuiz() {
      const { thumbnail, ...rest } = this.referenceData
      const data = {
        ...rest,
        keyword: rest.keyword.join(','),
      }
      apiData
        .updateDataroomQuiz(data)
        .then(() => {
          this.onCloseQuizAddModal()
          this.openModalDesc('수정 성공', '자료를 수정했습니다.')
        })
        .catch((err) => {
          console.log(thumbnail)
          console.log(err)
        })
    },

    // 쪽지 시험 수정
    updateDataroomNoteExam() {
      const { thumbnail, ...rest } = this.referenceData
      const data = {
        ...rest,
        keyword: rest.keyword.join(','),
      }
      apiData
        .updateDataroomNoteExam(data)
        .then(() => {
          this.onCloseNoteTestAddModal()
          this.openModalDesc('수정 성공', '자료를 수정했습니다.')
        })
        .catch((err) => {
          console.log(thumbnail)
          console.log(err)
        })
    },

    // 파일 삭제
    deleteData({ dataroom_idx, datatable_type }) {
      const payload = {
        dataroom_idx,
        datatable_type,
      }
      apiData
        .deleteData(payload)
        .then((res) => {
          console.log(res)
          this.isSelectModal.open = false
          this.openModalDesc('삭제 성공', '자료를 삭제했습니다.')
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 등록 자료 초기화
    initReference() {
      const init = deepCopy(this.initReferenceData)
      setTimeout(() => {
        this.currentPageIdx = 0
        this.referenceData = init
        this.urlData = {
          youtube: '',
          page: '',
        }
        this.uploadInfo.saveFolderPath = ''
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

    // 등록 유형 선택 모달
    openSelectModal(url) {
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
      this.setModalTitle('등록')
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
        datatable_type: 'ID',
        datatype: '03',
        fileSize: '0',
        quiz: [{ ...this.quizItem }],
      }
      this.referenceData.createAt = new Date()
      document.getElementById('referenceSelectClose').click()
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
        datatable_type: 'ID',
        datatype: '04',
        fileSize: '0',
        note_exam_asks: [{ ...this.testItem }],
      }
      document.getElementById('referenceSelectClose').click()
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
        this.isQuizBrowse = false
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
      const newItem = deepCopy(this.initSearchData)
      this.searchData = newItem
      return (this.isSearchListModal = false)
    },

    setModalTitle(str) {
      this.modalTitle = str
    },

    // 자료 선택 모달
    openSelectReferenceType() {
      this.setModalTitle('등록')
      this.isSelectType = true
    },

    closeSelectReferenceType() {
      this.isSelectType = false
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
        this.onCloseReferenceBrowseModal()
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
      this.referenceData = deepCopy(item)
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
        return (this.referenceData.quiz[idx][id] = numberOnly)
      } else {
        return (this.referenceData.quiz[idx][id] = value)
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
      if (!noSpace.test(value) && value.length > 0) {
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
    setSavePath(path) {
      return (this.uploadInfo.saveFolderPath = path)
    },

    // 트리 저장경로 설정
    getSavePath(path) {
      this.uploadInfo.saveFolderPath = path
    },

    // 파일 사이즈 가져오기
    async getFileSize(url) {
      if (url) {
        await file_size_url(url)
          .then((res) => {
            this.uploadInfo.fileSize = res
          })
          .catch((error) => console.log(error))
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
          name: files[0].name,
          file_name: files[0].name,
          datatable_type: 'ID',
          datatype: '01',
        }
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
          name: target.name,
          file_name: target.name,
          datatable_type: 'ID',
          datatype: '02',
        }
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
              name: item.snippet.localized.title,
              file_name: item.snippet.localized.title,
              description: item.snippet.localized.description,
              datatable_type: 'ID',
              datatype: '05',
              save_path: `//www.youtube.com/embed/${youtubeUrl}`,
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
          datatable_type: 'ID',
          datatype: '06',
          save_path: url,
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
          name: files[0].name,
          file_name: files[0].name,
          datatable_type: 'ID',
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
      const len = target.quiz.length
      const isLength = len <= 19
      this.currentPageIdx = len
      if (isLength) {
        target.quiz = [
          ...target.quiz,
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
      if (this.referenceData.quiz.length > 1) {
        this.referenceData.quiz.splice(idx, 1)
        this.currentPageIdx = idx - 1
        this.focusEditorField()
      }
    },

    // 퀴즈 타입 변경
    onClickQuizType({ target: { value } }, idx, num) {
      const target = this.referenceData.quiz[idx]
      console.log(value)
      if (num === 'OX') {
        target.correct = 'O'
        target.wrong = 'X'
      } else if (num === 'EQ') {
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
        this.referenceData.quiz[idx].correct = 'O'
        this.referenceData.quiz[idx].wrong = 'x'
      } else {
        this.referenceData.quiz[idx].correct = 'X'
        this.referenceData.quiz[idx].wrong = 'O'
      }
    },

    // 난이도 설정
    onSelectDificultade(idx, num) {
      this.referenceData.quiz[idx].level = num
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
          { ...this.testItem, no: setId },
        ]
        this.focusEditorField()
      }
    },

    // 선택한 쪽지시험 지우기
    onDeleteNoteTest(idx) {
      if (this.referenceData.note_exam_asks.length > 1) {
        this.referenceData.note_exam_asks.splice(idx, 1)
        this.currentPageIdx = idx - 1
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

    // 자료 클릭 이벤트
    onClickSelectData(data) {
      this.referenceData = deepCopy(data)
      if (data.datatype === '03') return this.onOpenQuizBrowseModal()
      else if (data.datatype === '04') return this.onOpenNoteTestBrowseModal()
      else return this.onOpenReferenceBrowseModal()
    },

    // 자료 조회
    onClickView(params) {
      const type = params.datatype
      this.selectDataroomType(type, params)
      if (type === '03') return this.onOpenQuizBrowseModal()
      else if (type === '04') return this.onOpenNoteTestBrowseModal()
      else return this.onOpenReferenceBrowseModal()
    },

    // 자료 수정
    updateSelectData(data) {
      this.setModalTitle('수정')
      const type = data.datatype
      this.selectDataroomType(type, data)
      this.getFileSize(data.save_path)
      if (type === '03') return this.onOpenQuizChangeModal()
      else if (type === '04') return this.onOpenNoteTestChangeModal()
      else return this.onOpenReferenceChangeModal()
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

    pasteData() {
      this.$refs.mainEducation.$refs.myData.$refs.curriculum.pasteData(
        this.copyCheckData
      )
      if (this.isCopyType === 'institution') {
        this.$refs.mainEducation.$refs.education.$refs.institution.copyComp()
      } else if (this.isCopyType === 'franchise') {
        this.$refs.mainEducation.$refs.education.$refs.franchise.copyComp()
      }
    },

    delData() {
      if (this.identity === 'institution') {
        const instiTab = document.getElementById('institute')
        if (instiTab.classList.contains('show'))
          this.$refs.mainEducation.$refs.education.$refs.institution.delData()
        else this.$refs.mainEducation.$refs.education.$refs.franchise.delData()
      }
      this.$refs.mainEducation.$refs.myData.$refs.curriculum.delData()
    },

    copyDataCallBack(copyData) {
      this.copyCheckData = copyData
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
      const newItem = deepCopy(data)
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
