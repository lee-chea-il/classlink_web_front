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
          :institutionData="receiveInstitutionData"
          :franchiseData="receiveFranchiseData"
          :identity="identity"
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
    <ReferenceSelectModal
      :uploadType="uploadType"
      @add-quiz="onOpenQuizAddModal"
      @add-test="onOpenNoteTestAddModal"
    />

    <!-- 비디오 & 파일 업로드 선택 -->
    <VideoFileUploadModal
      @upload-video="onUploadVideo"
      @upload-pdf="onUploadPdf"
    />

    <!-- 유튜브 & url 업로드 선택 -->
    <YoutubeUploadModal
      :urlData="urlData"
      @change-url="onChangeUrl"
      @upload-youtube="onUploadYoutube"
      @upload-page="onUploadUrl"
    />

    <!-- 파일 등록 (동영상,문서,유튜브,url) -->
    <ReferenceAddModal
      :open="isReferenceAddModal"
      :uploadType="uploadType"
      :uploadFile="uploadFile"
      :reference="referenceData"
      :pushKeyword="pushKeyword"
      @change-keyword="changePushKeyword"
      @change-input="onChangeUploadFile"
      @close="onCloseReferenceAddModal"
      @set-keyword="setKeyword"
      @delete-keyword="deleteKeyword"
      @open-save-path="onOpenSavePathModal"
    />

    <!-- 퀴즈 등록 -->
    <QuizAddModal
      :open="isQuizAddModal"
      :reference="referenceData"
      :quizList="referenceData.quizList"
      :currentPageIdx="currentPageIdx"
      :pushKeyword="pushKeyword"
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
    />

    <!-- 쪽지시험 등록 -->
    <NoteTestAddModal
      :open="isNoteTestAddModal"
      :reference="referenceData"
      :currentPageIdx="currentPageIdx"
      :pushKeyword="pushKeyword"
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
    />

    <!-- 비디오 & 문서 & 유튜브 & url 보기 -->
    <VideoBrowseModal
      :open="isReferenceBrowse"
      :selectData="referenceData"
      @close="onCloseReferenceBrowseModal"
      @reference-change="onOpenReferenceChangeModal"
      @view-url="onOpenShareViewModal"
      @delete="openSelectModal"
      @open-save-path="onOpenSavePathModal"
    />

    <!-- 퀴즈 보기 -->
    <QuizBrowseModal
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
    <QuizPreviewModal
      :open="isQuizPreviewModal.open"
      :quizList="referenceData.quizList"
      :currentPageIdx="currentPageIdx"
      @close="onCloseQuizPreviewModal"
      @pagination="onClickQuizPagination"
    />

    <!-- 쪽지시험 보기 -->
    <NoteTestBrowseModal
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
    <NoteTestPreviewModal
      :open="isNoteTestPreviewModal.open"
      :testList="referenceData.noteTestList"
      :currentPageIdx="currentPageIdx"
      @close="onCloseNoteTestPreviewModal"
      @pagination="onClickQuizPagination"
    />

    <!-- 자료 수정 -->
    <ReferenceChangeModal
      :open="isReferenceChange"
      :reference="referenceData"
      :pushKeyword="pushKeyword"
      @close="onCloseReferenceChangeModal"
      @change-input="onChangeUploadFile"
      @change-keyword="changePushKeyword"
      @set-keyword="setKeyword"
      @delete-keyword="deleteKeyword"
      @open-save-path="onOpenSavePathModal"
    />

    <!-- 퀴즈 수정 -->
    <QuizChangeModal
      :open="isQuizChange"
      :quiz="referenceData"
      :currentPageIdx="currentPageIdx"
      :pushKeyword="pushKeyword"
      @close="onCloseQuizChangeModal"
      @change-input="onChangeUploadFile"
      @change-item="onChangeQuiz"
      @change-keyword="changePushKeyword"
      @change-number="onClickPagination"
      @delete-quiz="onDeleteQuizItem"
      @delete-keyword="deleteKeyword"
      @open-save-path="onOpenSavePathModal"
      @pagination="onClickQuizPagination"
      @plus-item="onPlusQuizList"
      @preview="onOpenQuizPreviewModal"
      @select-dificultade="onSelectDificultade"
      @select-type="onClickQuizType"
      @select-ox="onSelectOx"
      @set-keyword="setKeyword"
    />

    <!-- 쪽지시험 수정 -->
    <NoteTestChangeModal
      :open="isNoteTestChange"
      :reference="referenceData"
      :currentPageIdx="currentPageIdx"
      :pushKeyword="pushKeyword"
      @close="onCloseNoteTestChangeModal"
      @change-item="onChangeTest"
      @change-input="onChangeUploadFile"
      @change-number="onClickPagination"
      @change-dificultade="onSelectDificultadeTest"
      @delete-item="onDeleteNoteTest"
      @pagination="onClickQuizPagination"
      @select-answer="onSelectAnswer"
      @plus-item="onPlusNoteTestList"
      @preview="onOpenNoteTestPreviewModal"
      @change-keyword="changePushKeyword"
      @set-keyword="setKeyword"
      @delete-keyword="deleteKeyword"
      @open-save-path="onOpenSavePathModal"
      @add-example="plusExampleList"
      @delete-example="deleteExample"
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
    <ReferenceFilterModal
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
    <QuizPrintPage v-show="isQuizPrint" :quizList="referenceData.quizList" />

    <!-- 쪽지시험 프린트 영역 -->
    <NoteTestPrintPage
      v-show="isNoteTestPrint"
      :noteTestList="referenceData.noteTestList"
    />
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'
import MainBtnBox from '~/components/common/MainBtnBox.vue'
import PageHeader from '~/components/common/PageHeader.vue'
import TreeSection from '~/components/common/TreeSection.vue'
import ModalDesc from '~/components/common/modal/ModalDesc.vue'
import DeleteModal from '~/components/common/modal/DeleteModal.vue'
import SavePathModal from '~/components/common/modal/SavePathModal.vue'
import QuizPrintPage from '~/components/reference/QuizPrintPage.vue'
import NoteTestPrintPage from '~/components/reference/NoteTestPrintPage.vue'
import QuizAddModal from '~/components/common/modal/reference/QuizAddModal.vue'
import ShareViewModal from '~/components/common/modal/reference/ShareViewModal.vue'
import QuizBrowseModal from '~/components/common/modal/reference/QuizBrowseModal.vue'
import QuizChangeModal from '~/components/common/modal/reference/QuizChangeModal.vue'
import NoteTestAddModal from '~/components/common/modal/reference/NoteTestAddModal.vue'
import VideoBrowseModal from '~/components/common/modal/reference/VideoBrowseModal.vue'
import QuizPreviewModal from '~/components/common/modal/reference/QuizPreviewModal.vue'
import ReferenceAddModal from '~/components/common/modal/reference/ReferenceAddModal.vue'
import SearchResultModal from '~/components/common/modal/reference/SearchResultModal.vue'
import YoutubeUploadModal from '~/components/common/modal/reference/YoutubeUploadModal.vue'
import NoteTestBrowseModal from '~/components/common/modal/reference/NoteTestBrowseModal.vue'
import NoteTestChangeModal from '~/components/common/modal/reference/NoteTestChangeModal.vue'
import ReferenceSelectModal from '~/components/common/modal/reference/ReferenceSelectModal.vue'
import VideoFileUploadModal from '~/components/common/modal/reference/VideoFileUploadModal.vue'
import ReferenceFilterModal from '~/components/common/modal/reference/ReferenceFilterModal.vue'
import ReferenceChangeModal from '~/components/common/modal/reference/ReferenceChangeModal.vue'
import NoteTestPreviewModal from '~/components/common/modal/reference/NoteTestPreviewModal.vue'
import { apiReference } from '~/services'
import { urlRegex, youtubeRegex, setNewArray, jsonItem } from '~/utiles/common'
import initialState from '~/data/reference/initialState'

export default {
  name: 'ReferenceRoom',
  components: {
    ModalDesc,
    PageHeader,
    MainBtnBox,
    DeleteModal,
    TreeSection,
    QuizAddModal,
    SavePathModal,
    QuizPrintPage,
    ShareViewModal,
    QuizBrowseModal,
    QuizChangeModal,
    NoteTestAddModal,
    VideoBrowseModal,
    QuizPreviewModal,
    SearchResultModal,
    ReferenceAddModal,
    NoteTestPrintPage,
    YoutubeUploadModal,
    NoteTestChangeModal,
    NoteTestBrowseModal,
    ReferenceSelectModal,
    VideoFileUploadModal,
    ReferenceFilterModal,
    ReferenceChangeModal,
    NoteTestPreviewModal,
  },
  layout: 'EducationLayout',
  data() {
    return initialState()
  },
  methods: {
    // Modal Event
    openModalDesc(tit, msg) {
      this.modalDesc = {
        open: true,
        title: tit,
        desc: msg,
      }
    },

    onCloseModalDesc() {
      this.modalDesc.open = false
    },

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

    onOpenReferenceAddModal() {
      this.isReferenceAddModal = true
    },

    onCloseReferenceAddModal() {
      this.initAddReferenceData()
      this.isReferenceAddModal = false
    },

    onOpenQuizAddModal() {
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
      this.initAddReferenceData()
      this.isQuizAddModal = false
    },
    onOpenNoteTestAddModal() {
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

    onOpenReferenceBrowseModal() {
      this.isReferenceBrowse = true
    },

    onCloseReferenceBrowseModal() {
      this.isReferenceBrowse = false
    },

    onCloseNoteTestAddModal() {
      this.isNoteTestAddModal = false
    },

    onOpenQuizBrowseModal() {
      this.isQuizBrowse = true
    },

    onCloseQuizBrowseModal() {
      this.initAddReferenceData()
      this.isQuizBrowse = false
    },

    onOpenNoteTestBrowseModal() {
      this.isNoteTestBrowse = true
    },

    onCloseNoteTestBrowseModal() {
      this.initAddReferenceData()
      this.isNoteTestBrowse = false
    },

    onOpenReferenceChangeModal() {
      if (this.isReferenceBrowse) {
        this.onCloseReferenceBrowseModal()
      }
      this.isReferenceChange = true
    },

    onCloseReferenceChangeModal() {
      this.initAddReferenceData()
      this.isReferenceChange = false
    },

    onOpenQuizChangeModal() {
      if (this.isQuizBrowse) {
        this.onCloseQuizBrowseModal()
      }
      this.isQuizChange = true
    },

    onCloseQuizChangeModal() {
      this.initAddReferenceData()
      this.isQuizChange = false
    },

    onOpenNoteTestChangeModal() {
      if (this.isNoteTestBrowse) {
        this.onCloseNoteTestBrowseModal()
      }
      this.isNoteTestChange = true
    },

    onCloseNoteTestChangeModal() {
      this.initAddReferenceData()
      this.isNoteTestChange = false
    },

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
        this.closeSearchListModal()
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
      if (this.searchData.word !== '') {
        return (this.isSearchListModal = true)
      } else {
        return this.openModalDesc('', '검색어를 입력해주세요')
      }
    },

    closeSearchListModal() {
      return (this.isSearchListModal = false)
    },

    // 자료 선택 모달
    openSelectReferenceType() {
      this.isSelectType = true
    },

    closeSelectReferenceType() {
      this.isSelectType = false
    },

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
    onChangeUploadFile({ target: { id, value, type, checked, name } }) {
      const elem = this.referenceData
      const isCheckbox =
        name === 'isOpenReference' || name === 'isOpenEducation'
      if (type === 'checkbox') {
        if (checked) return (elem[id] = true)
        else return (elem[id] = false)
      } else if (isCheckbox) return (elem[name] = value)
      else return (elem[id] = value)
    },

    // 유튜브, 링크 변경
    onChangeUrl({ target: { name, value } }) {
      return (this.urlData[name] = value)
    },

    onChangeQuiz({ target: { value, name } }, idx) {
      return (this.referenceData.quizList[idx][name] = value)
    },

    onChangeTest({ target: { value, name, type, checked } }, idx) {
      const testElem = this.referenceData.noteTestList[idx]
      if (type === 'checkbox') {
        if (checked) return (testElem[name] = true)
        else return (testElem[name] = false)
      } else return (testElem[name] = value)
    },

    setKeyword({ target: { value } }) {
      const keywordList = [...this.referenceData.keyword, value]
      this.pushKeyword = ''
      this.referenceData.keyword = setNewArray(keywordList)
    },

    deleteKeyword(idx) {
      this.referenceData.keyword.splice(idx, 1)
    },

    changePushKeyword({ target: { value } }) {
      this.pushKeyword = value
    },

    // 저장 경로 선택 하기
    setSavePath(path) {
      return (this.referenceData.saveFolder = path)
    },

    // 비디오 업로드 시 미리보기 보여주기
    setThumbnail(files) {
      const _video = document.querySelector('#video')
      const _canvas = document.querySelector('#thumb_canvas')
      const _ctx = _canvas.getContext('2d')
      _video.setAttribute('src', URL.createObjectURL(files[0]))
      _video.addEventListener('loadedmetadata', function () {
        // 비디오 태그의 메타데이터가 들어오면
        _canvas.width = _video.videoWidth
        _canvas.height = _video.videoHeight
        const time = Math.random() * _video.duration // 비디오의 영상길이 중 랜덤 타임을 뽑음
        _video.currentTime = time // 해당 시간으로 이동
        setTimeout(() => {
          // 바로 출력하면 비디오가 불러오기 전이라 동작이 안됨. 잠깐의 기다림 후 캔버스에 해당 이미지를 그림.
          _ctx.drawImage(_video, 0, 0, _video.videoWidth, _video.videoHeight)
        }, 400)
      })
    },

    // 비디오 업로드
    onUploadVideo(e) {
      const {
        target: { files },
      } = e
      this.uploadType = 'video'
      this.uploadFile = {}
      if (files[0] && files[0].type === 'video/mp4') {
        document.getElementById('selectClose').click()
        this.onOpenReferenceAddModal()
        this.setThumbnail(files)
        this.uploadFile = files[0]
        this.referenceData = {
          ...this.referenceData,
          name: files[0].name,
          fileName: files[0].name,
          fileDivision: '교육기관',
          fileType: files[0].type,
          uploadType: 'video',
          fileVolume: files[0].size,
          createAt: files[0].lastModifiedDate,
        }
      } else {
        this.openModalDesc('', '형식의 맞는 파일을 업로드해주세요.')
      }
      return (e.target.value = '')
    },

    // 호출 성공시 미리보기 만들기
    getPreviewData(payload) {
      const _embed = document.querySelector('#embed')
      _embed.setAttribute('src', payload)
    },

    // PDF 업로드
    onUploadPdf(e) {
      const {
        target: { files },
      } = e
      this.uploadType = 'pdf'
      this.uploadFile = {}
      if (files[0] && files[0].type === 'application/pdf') {
        document.getElementById('selectClose').click()
        this.uploadFile = files[0]
        this.referenceData = {
          ...this.referenceData,
          name: files[0].name,
          fileName: files[0].name,
          fileDivision: '교육기관',
          fileType: files[0].type,
          uploadType: 'pdf',
          fileVolume: files[0].size,
          createAt: files[0].lastModifiedDate,
        }
        this.onOpenReferenceAddModal()
        this.getPreviewData(
          URL.createObjectURL(files[0]) + '#toolbar=0&navpanes=0&scrollbar=0'
        )
        this.onOpenReferenceAddModal()
      } else {
        this.openModalDesc('', '형식의 맞는 파일을 업로드해주세요.')
      }
      e.target.value = ''
    },

    // 유튜브 API 호출
    async getYoutubeData(youtubeUrl) {
      await apiReference
        .getYoutubeData(youtubeUrl)
        .then(({ data: { items } }) => {
          this.uploadFile = {
            name: items[0].snippet.title,
            type: 'YOUTUBE',
            lastModifiedDate: new Date(),
            size: 0,
          }
          this.referenceData = {
            ...this.referenceData,
            name: items[0].snippet.title,
            fileName: items[0].snippet.title,
            fileDivision: '교육기관',
            fileType: 'youtube',
            uploadType: 'youtube',
            fileVolume: 0,
            createAt: new Date(),
          }
          document.getElementById('selectCloseYoutube').click()
          this.onOpenReferenceAddModal()
          this.getPreviewData(`https://www.youtube.com/embed/${youtubeUrl}`)
        })
        .catch((err) => {
          console.log(err)
          this.openModalDesc('실패', '유효하지 않은 주소입니다.')
          return false
        })
    },

    // 유튜브 업로드
    onUploadYoutube() {
      this.uploadType = 'youtube'
      const youtubeUrl = this.urlData.youtube.replace('https://youtu.be/', '')
      if (youtubeRegex.test(this.urlData.youtube) === true) {
        this.getYoutubeData(youtubeUrl)
      } else {
        this.openModalDesc('실패', '유튜브 형식의 URL을 입력해주세요')
      }
    },

    // URL 업로드
    onUploadUrl() {
      this.uploadType = 'file'
      const url = this.urlData.page
      this.uploadFile = {
        name: '',
        type: 'WEB',
        lastModifiedDate: new Date(),
        size: 0,
      }
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
        }
        const _iframe = document.querySelector('#iframe')
        _iframe.setAttribute('src', url)
        document.getElementById('selectCloseYoutube').click()
        this.onOpenReferenceAddModal()
      } else {
        this.openModalDesc('실패', 'URL을 정확히 입력해주세요')
      }
    },

    // 퀴즈 변경 UI
    onClickPagination(idx) {
      this.currentPageIdx = idx
    },

    // 퀴즈 페이지네이션
    onClickQuizPagination(direction, max) {
      const idx = this.currentPageIdx
      const isPlus = direction === 'plus'
      if (isPlus) return idx < max - 1 && (this.currentPageIdx += 1)
      else return idx !== 0 && (this.currentPageIdx -= 1)
    },

    //  퀴즈 추가
    onPlusQuizList() {
      const target = this.referenceData
      const isLength = target.quizList.length <= 19
      if (isLength)
        return (target.quizList = [
          ...target.quizList,
          {
            ...this.quizItem,
            id: target.length + 1,
          },
        ])
    },

    // 선택한 퀴즈 지우기
    onDeleteQuizItem(idx) {
      if (this.referenceData.quizList.length > 1) {
        this.referenceData.quizList.splice(idx, 1)
      }
    },

    // 선택한 쪽지시험 지우기
    onDeleteNoteTest(idx) {
      if (this.referenceData.noteTestList.length > 1) {
        this.referenceData.noteTestList.splice(idx, 1)
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
      const isLength = target.noteTestList.length <= 19
      const setId = target.noteTestList.length + 1
      if (isLength)
        return (target.noteTestList = [
          ...target.noteTestList,
          { ...this.testItem, id: setId },
        ])
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

    // 취소시 등록 하려고했던 데이터 지우기
    initAddReferenceData() {
      Object.assign(this.$data, initialState())
    },

    onClickView(params) {
      this.referenceData = jsonItem(params)
      const type = params.uploadType
      if (type === 'quiz') return this.onOpenQuizBrowseModal()
      else if (type === 'test') return this.onOpenNoteTestBrowseModal()
      else return this.onOpenReferenceBrowseModal()
    },

    copyData() {
      const instiTab = document.getElementById('institute')
      if (instiTab.classList.contains('show'))
        return this.$refs.mainEducation.$refs.education.$refs.institution.copyData()
      else
        return this.$refs.mainEducation.$refs.education.$refs.franchise.copyData()
    },

    pasteData() {
      this.$refs.mainEducation.$refs.myData.$refs.curriculum.pasteData(
        this.copyCheckData
      )
    },

    delData() {
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
      if (type === 'quiz') return this.exportPdf('quiz')
      else if (type === 'test') return this.exportPdf('test')
      return this.createAtag(newItem.savePath)
    },

    // tree menu change button
    updateSelectData(data) {
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
