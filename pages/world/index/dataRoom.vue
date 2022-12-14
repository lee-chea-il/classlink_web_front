<template>
  <div>
    <PageHeader title="자료실" />

    <div class="tab-content depth03 ac_manage_dtr">
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
          :pageType="pageType"
          :identity="identity"
          :institutionData="receiveInstitutionData"
          :franchiseData="receiveFranchiseData"
          :openData="receiveOpenData"
          :myDataList="receiveMyData"
          @open-data="onClickView"
          @copyDataCallBack="copyDataCallBack"
          @download-data="downloadSelectData"
          @update-data="updateSelectData"
        />
        <!-- /.2단 분류 컨텐츠 -->
      </div>
    </div>

    <!-- 등록 파일 선택 -->
    <SelectReferenceModal
      :pageRoot="pageRoot"
      @add-quiz="onOpenQuizAddModal"
      @add-test="onOpenNoteTestAddModal"
      @set-type="setUploadType"
    />

    <!-- 비디오 & 파일 업로드 선택 -->
    <UploadVideoFileModal
      :uploadType="uploadType"
      @upload-video="onUploadVideo"
      @upload-pdf="onUploadPdf"
      @upload-music="uploadMusic"
    />

    <!-- 유튜브 & url 업로드 선택 -->
    <UploadYoutubeModal
      :urlData="urlData"
      :uploadType="uploadType"
      @change-url="onChangeUrl"
      @upload-youtube="onUploadYoutube"
      @upload-page="onUploadUrl"
    />

    <!-- 파일 등록 (동영상,문서,유튜브,url) -->
    <AddReferenceModal
      :pageRoot="pageRoot"
      :open="isReferenceAddModal"
      :modalTitle="modalTitle"
      :reference="referenceData"
      :pushKeyword="pushKeyword"
      @change-keyword="changePushKeyword"
      @change-input="onChangeUploadFile"
      @close="onCloseReferenceAddModal"
      @set-keyword="setKeyword"
      @delete-keyword="deleteKeyword"
      @open-save-path="onOpenSavePathModal"
      @delete-thumbnail="deleteThumbnail"
      @submit="onSubmitAddData"
      @change-file="changeFile"
    />

    <!-- 퀴즈 등록 -->
    <AddQuizModal
      :open="isQuizAddModal"
      :modalTitle="modalTitle"
      :reference="referenceData"
      :quizList="referenceData.quizList"
      :currentPageIdx="currentPageIdx"
      :pushKeyword="pushKeyword"
      :pageRoot="pageRoot"
      @change-number="onClickPagination"
      @pagination="onClickQuizPagination"
      @plus-item="onPlusQuizList"
      @delete-quiz="onDeleteQuizItem"
      @change-item="onChangeQuiz"
      @select-type="onClickQuizType"
      @change-input="onChangeUploadFile"
      @select-ox="onSelectOx"
      @select-dificultade="onSelectDificultade"
      @close="onCloseQuizAddModal"
      @preview="onOpenQuizPreviewModal"
      @change-keyword="changePushKeyword"
      @set-keyword="setKeyword"
      @delete-keyword="deleteKeyword"
      @open-save-path="onOpenSavePathModal"
      @delete-thumbnail="deleteThumbnail"
      @submit="onSubmitAddQuiz"
    />

    <!-- 쪽지시험 등록 -->
    <AddNoteTestModal
      :open="isNoteTestAddModal"
      :modalTitle="modalTitle"
      :reference="referenceData"
      :currentPageIdx="currentPageIdx"
      :pushKeyword="pushKeyword"
      :pageRoot="pageRoot"
      @change-number="onClickPagination"
      @change-input="onChangeUploadFile"
      @change-dificultade="onSelectDificultadeTest"
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
      @submit="onSubmitAddTest"
    />

    <!-- 비디오 & 문서 & 유튜브 & url 보기 -->
    <BrowseReferenceModal
      :open="isReferenceBrowse"
      :selectData="referenceData"
      :pageRoot="pageRoot"
      @close="onCloseReferenceBrowseModal"
      @reference-change="onOpenReferenceChangeModal"
      @view-url="onOpenShareViewModal"
      @delete="openSelectModal"
      @open-save-path="onOpenSavePathModal"
    />

    <!-- 퀴즈 보기 -->
    <BrowseQuizModal
      :open="isQuizBrowse"
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
      :quizList="referenceData.quizList"
      :currentPageIdx="currentPageIdx"
      @close="onCloseQuizPreviewModal"
      @pagination="onClickQuizPagination"
    />

    <!-- 쪽지시험 보기 -->
    <BrowseNoteTestModal
      :open="isNoteTestBrowse"
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
      :testList="referenceData.noteTestList"
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
    <DeleteModal :open="isSelectModal.open" @close="onCloseSelectModal" />

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
    <PrintQuizModal v-show="isQuizPrint" :quizList="referenceData.quizList" />

    <!-- 쪽지시험 프린트 영역 -->
    <PrintNoteTestModal
      v-show="isNoteTestPrint"
      :noteTestList="referenceData.noteTestList"
    />

    <CustomSnackbar :show="isSnackbar.open" :message="isSnackbar.message" />
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'
import $ from 'jquery'
import MainBtnBox from '~/components/common/MainBtnBox.vue'
import PageHeader from '~/components/common/PageHeader.vue'
import ModalDesc from '~/components/common/modal/ModalDesc.vue'
import DeleteModal from '~/components/common/modal/DeleteModal.vue'
import SavePathModal from '~/components/common/modal/SavePathModal.vue'
import TreeSection from '~/components/world/common/TreeSection.vue'
import CustomSnackbar from '~/components/common/CustomSnackbar.vue'

import AddQuizModal from '~/components/world/modal/AddQuizModal.vue'
import AddNoteTestModal from '~/components/world/modal/AddNoteTestModal.vue'
import AddReferenceModal from '~/components/world/modal/AddReferenceModal.vue'
import BrowseQuizModal from '~/components/world/modal/BrowseQuizModal.vue'
import BrowseReferenceModal from '~/components/world/modal/BrowseReferenceModal.vue'
import BrowseNoteTestModal from '~/components/world/modal/BrowseNoteTestModal.vue'
import FilterReferenceModal from '~/components/world/modal/FilterReferenceModal.vue'
import PreviewQuizModal from '~/components/world/modal/PreviewQuizModal.vue'
import PrintQuizModal from '~/components/world/modal/PrintQuizModal.vue'
import PrintNoteTestModal from '~/components/world/modal/PrintNoteTestModal.vue'
import PreviewNoteTestModal from '~/components/world/modal/PreviewNoteTestModal.vue'
import ShareViewModal from '~/components/world/modal/ShareViewModal.vue'
import SearchResultModal from '~/components/world/modal/SearchResultModal.vue'
import SelectReferenceModal from '~/components/world/modal/SelectReferenceModal.vue'
import UploadYoutubeModal from '~/components/world/modal/UploadYoutubeModal.vue'
import UploadVideoFileModal from '~/components/world/modal/UploadVideoFileModal.vue'

import initialState from '~/data/world/worldReference/initialState'
import { urlRegex, youtubeRegex, setNewArray, jsonItem } from '~/utiles/common'
import { apiReference } from '~/services'

export default {
  name: 'ReferenceRoom',
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
  },
  data() {
    return initialState()
  },
  methods: {
    // 등록 자료 초기화
    initReference() {
      const init = jsonItem(this.initReferenceData)
      setTimeout(() => {
        this.currentPageIdx = 0
        this.referenceData = init
      }, 400)
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
        fileDivision: '교육기관',
        fileType: 'quiz',
        uploadType: 'quiz',
        fileVolume: '0',
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
        fileDivision: '교육기관',
        fileType: 'test',
        uploadType: 'test',
        fileVolume: '0',
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
      this.initReference()
      this.isQuizBrowse = false
    },

    // 쪽지시험 조회
    onOpenNoteTestBrowseModal() {
      this.isNoteTestBrowse = true
    },

    onCloseNoteTestBrowseModal() {
      this.initReference()
      this.isNoteTestBrowse = false
    },

    // 퀴즈 수정 셋팅
    onOpenQuizChangeModal() {
      this.setModalTitle('수정')
      if (this.isQuizBrowse) {
        this.onCloseQuizBrowseModal()
      }
      this.isQuizAddModal = true
    },

    // 쪽지시험 셋팅
    onOpenNoteTestChangeModal() {
      this.setModalTitle('수정')
      if (this.isNoteTestBrowse) {
        this.onCloseNoteTestBrowseModal()
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
      if (this.isFilterModal.open) {
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
      this.uploadType = type
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
            filter.type.includes(item.fileDivision)
          )
        else return filterSubject()
      }

      const filterCategory = () => {
        if (filter.category?.length)
          return filterDivision().filter((item) =>
            filter.category.includes(this.setType(item.uploadType))
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

    // 등록 자료 내용 변경
    onChangeUploadFile(e) {
      const {
        target: { id, value, type, checked, name, files },
      } = e
      const elem = this.referenceData
      const isCheckbox =
        name === 'isOpenReference' || name === 'isOpenEducation'
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

    // 유튜브, 링크 변경
    onChangeUrl({ target: { name, value } }) {
      return (this.urlData[name] = value)
    },

    // 퀴즈 변경 핸들러
    onChangeQuiz({ target: { value, id } }, idx) {
      const numberOnly = value.replace(/[^0-9.]/g, '').replace(/ /g, '')
      if (id === 'limitTime') {
        return (this.referenceData.quizList[idx][id] = numberOnly)
      } else {
        return (this.referenceData.quizList[idx][id] = value)
      }
    },

    // 쪽지시험 변경 핸들러
    onChangeTest({ target: { value, name, type, checked, id } }, idx) {
      const numberOnly = value.replace(/[^0-9.]/g, '').replace(/ /g, '')
      const testElem = this.referenceData.noteTestList[idx]
      if (type === 'checkbox') {
        if (checked) return (testElem[name] = true)
        else {
          if (name === 'isCommentary') {
            testElem.commentary = ''
          }
          testElem[name] = false
        }
      } else if (id === 'limitTime') return (testElem[id] = numberOnly)
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
      return (this.referenceData.saveFolder = path)
    },

    // 비디오 업로드
    onUploadVideo(e) {
      this.setModalTitle('등록')
      const {
        target: { files },
      } = e
      if (files[0] && files[0].type === 'video/mp4') {
        $('#modalDataregi02').modal('hide')
        this.onOpenReferenceAddModal()
        this.referenceData = {
          ...this.referenceData,
          name: files[0].name,
          fileName: files[0].name,
          fileDivision: '교육기관',
          fileType: files[0].type,
          uploadType: 'video',
          fileVolume: files[0].size,
          createAt: files[0].lastModifiedDate,
          savePath: URL.createObjectURL(files[0]),
        }
      } else {
        this.openModalDesc('', '형식의 맞는 파일을 업로드해주세요.')
      }
      return (e.target.value = '')
    },

    // PDF 업로드
    onUploadPdf(e) {
      this.setModalTitle('등록')
      const {
        target: { files },
      } = e
      const target = files[0]
      if (target.type === 'application/pdf') {
        const item = URL.createObjectURL(target)
        this.referenceData = {
          ...this.referenceData,
          name: target.name,
          fileName: target.name,
          fileDivision: '교육기관',
          fileType: target.type,
          uploadType: 'pdf',
          fileVolume: target.size,
          createAt: target.lastModifiedDate,
          savePath: item,
        }
        $('#modalDataregi02').modal('hide')
        this.onOpenReferenceAddModal()
      } else {
        this.openModalDesc('', '형식의 맞는 파일을 업로드해주세요.')
      }
      e.target.value = ''
    },

    // 배경음악 업로드
    uploadMusic(e) {
      this.setModalTitle('등록')
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
          fileName: files[0].name,
          fileDivision: '교육기관',
          fileType: files[0].type,
          uploadType: 'music',
          fileVolume: files[0].size,
          createAt: files[0].lastModifiedDate,
          savePath: URL.createObjectURL(files[0]),
        }
      } else {
        this.openModalDesc('', '형식의 맞는 파일을 업로드해주세요.')
      }
      return (e.target.value = '')
    },

    // 유튜브 API 호출
    async getYoutubeData(youtubeUrl) {
      await apiReference
        .getYoutubeData(youtubeUrl)
        .then(({ data: { items } }) => {
          this.referenceData = {
            ...this.referenceData,
            name: items[0].snippet.title,
            fileName: items[0].snippet.title,
            fileDivision: '교육기관',
            fileType: 'youtube',
            uploadType: 'youtube',
            fileVolume: 0,
            createAt: new Date(),
            savePath: `https://www.youtube.com/embed/${youtubeUrl}`,
          }
          $('#modalDataregi03').modal('hide')
          this.onOpenReferenceAddModal()
        })
        .catch((err) => {
          console.log(err)
          this.openModalDesc('실패', '유효하지 않은 주소입니다.')
        })
    },

    // 유튜브 업로드
    onUploadYoutube() {
      this.setModalTitle('등록')
      const youtubeUrl = this.urlData.youtube.replace('https://youtu.be/', '')
      if (youtubeRegex.test(this.urlData.youtube) === true) {
        this.getYoutubeData(youtubeUrl)
      } else {
        this.openModalDesc('실패', '유튜브 형식의 URL을 입력해주세요')
      }
    },

    // URL 업로드
    onUploadUrl() {
      this.setModalTitle('등록')
      const url = this.urlData.page
      if (urlRegex.test(this.urlData.page) === true) {
        this.referenceData = {
          ...this.referenceData,
          name: url,
          fileName: url,
          fileDivision: '교육기관',
          fileType: 'url',
          uploadType: 'url',
          fileVolume: 0,
          createAt: new Date(),
          savePath: url,
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
        this.referenceData = {
          ...this.referenceData,
          name: files[0].name,
          fileName: files[0].name,
          fileDivision: '교육기관',
          fileType: files[0].type,
          uploadType: name,
          fileVolume: files[0].size,
          createAt: files[0].lastModifiedDate,
          savePath: URL.createObjectURL(files[0]),
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
      const len = target.quizList.length
      const isLength = len <= 19
      this.currentPageIdx = len
      if (isLength) {
        target.quizList = [
          ...target.quizList,
          {
            ...this.quizItem,
            id: target.length + 1,
          },
        ]
        this.focusEditorField()
      }
    },

    // 선택한 퀴즈 지우기
    onDeleteQuizItem(idx) {
      if (this.referenceData.quizList.length > 1) {
        this.referenceData.quizList.splice(idx, 1)
        this.currentPageIdx = idx - 1
        this.focusEditorField()
      }
    },

    // 퀴즈 타입 변경
    onClickQuizType({ target: { value } }, idx, num) {
      const target = this.referenceData.quizList[idx]
      if (num === 0) {
        target.shortAnswer = ''
        target.subjectiveAnswer = ''
        target.shortWrongAnswer = ''
      } else if (num === 1) {
        target.oxAnswer = 0
        target.shortAnswer = ''
        target.shortWrongAnswer = ''
      } else {
        target.oxAnswer = 0
        target.subjectiveAnswer = ''
      }
      return (target.quizType = Number(value))
    },

    // ox클릭 이벤트
    onSelectOx(idx, num) {
      this.referenceData.quizList[idx].oxAnswer = num
    },

    // 난이도 설정
    onSelectDificultade(idx, num) {
      this.referenceData.quizList[idx].dificultade = num
    },

    // 난이도 설정 쪽지 시험
    onSelectDificultadeTest(idx, num) {
      this.referenceData.noteTestList[idx].dificultade = num
    },

    // 쪽지 시험
    // 쪽지 시험 추가
    onPlusNoteTestList() {
      const target = this.referenceData
      const len = target.noteTestList.length
      const isLength = len <= 19
      const setId = len + 1
      this.currentPageIdx = len
      if (isLength) {
        target.noteTestList = [
          ...target.noteTestList,
          { ...this.testItem, id: setId },
        ]
        this.focusEditorField()
      }
    },

    // 선택한 쪽지시험 지우기
    onDeleteNoteTest(idx) {
      if (this.referenceData.noteTestList.length > 1) {
        this.referenceData.noteTestList.splice(idx, 1)
        this.currentPageIdx = idx - 1
        this.focusEditorField()
      }
    },

    // 정답 입력
    onSelectAnswer(idx, targetIdx) {
      this.referenceData.noteTestList[idx].answer = Number(targetIdx + 1)
    },

    // 쪽지시험 예제 추가
    plusExampleList(idx) {
      const example = { id: '', example: '' }
      this.referenceData.noteTestList[idx].exampleList.push(example)
    },

    // 쪽지시험 예제 제거
    deleteExample(idx, targetIdx) {
      this.referenceData.noteTestList[idx].exampleList.splice(targetIdx, 1)
    },

    // 자료 클릭 이벤트
    onClickSelectData(data) {
      this.referenceData = jsonItem(data)
      if (data.uploadType === 'quiz') return this.onOpenQuizBrowseModal()
      else if (data.uploadType === 'test')
        return this.onOpenNoteTestBrowseModal()
      else return this.onOpenReferenceBrowseModal()
    },

    // 자료 조회
    onClickView(params) {
      this.referenceData = jsonItem(params)
      const type = params.uploadType
      if (type === 'quiz') return this.onOpenQuizBrowseModal()
      else if (type === 'test') return this.onOpenNoteTestBrowseModal()
      else return this.onOpenReferenceBrowseModal()
    },

    // 자료 등록 Submit
    onSubmitAddData() {
      // api연동후 api요청 함수 넣을예정
      this.onCloseReferenceAddModal()
      this.openModalDesc('등록 성공', '자료를 등록했습니다.(임시기능)')
    },

    // 퀴즈 등록 Submit
    onSubmitAddQuiz() {
      // api연동후 api요청 함수 넣을예정
      this.onCloseQuizAddModal()
      this.openModalDesc('등록 성공', '자료를 등록했습니다.(임시기능)')
    },

    // 쪽지시험 등록 Submit
    onSubmitAddTest() {
      // api연동후 api요청 함수 넣을예정
      this.onCloseNoteTestAddModal()
      this.openModalDesc('등록 성공', '자료를 등록했습니다.(임시기능)')
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
      if (this.identity === 'master') {
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
          filename: `${target}.pdf`,
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
      const type = newItem.uploadType
      if (type === 'quiz') return false
      else if (type === 'test') return false
      return this.createAtag(newItem.savePath)
    },

    // tree menu change button
    updateSelectData(data) {
      this.setModalTitle('수정')
      this.referenceData = jsonItem(data)
      const type = data.uploadType
      if (type === 'quiz') return this.onOpenQuizChangeModal()
      else if (type === 'test') return this.onOpenNoteTestChangeModal()
      else return this.onOpenReferenceChangeModal()
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
