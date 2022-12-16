<template>
  <div>
    <PageHeader title="패키지" />

    <div class="tab-content depth03 ac_manage_dtr">
      <div class="tab-pane active">
        <!-- 컨트롤 버튼 영역 -->
        <MainBtnBox
          pageType="lesson"
          @open-add="openLessonAdd"
          @copy="copyData"
          @paste="pasteData"
          @delete="delData"
        />
        <!-- /.컨트롤 버튼 영역 -->

        <!-- 2단 분류 컨텐츠 -->
        <TreeSection
          ref="mainEducation"
          :institutionData="receiveInstitutionLessonData"
          :franchiseData="receiveFranchiseLessonData"
          :identity="identity"
          :myDataList="receiveLessonList"
          @open-data="openFirstLessonBrowseModal"
          @copyDataCallBack="copyDataCallBack"
          @update-data="openLessonChangeModal"
        />
        <!-- /.2단 분류 컨텐츠 -->
      </div>
    </div>

    <!-- 레슨 추가 -->
    <AddLessonModal
      ref="lessonAdd"
      :modalTitle="modalTitle"
      :open="isAddLesson.open"
      :identity="identity"
      :isLesson="isLesson"
      :receiveInstitutionLessonData="receiveInstitutionLessonData"
      :receiveFranchiseLessonData="receiveFranchiseLessonData"
      :lessonData="lessonData"
      :referenceList="treeReferenceList"
      :receiveInstitutionData="receiveInstitutionData"
      :receiveFranchiseData="receiveFranchiseData"
      :pushKeyword="pushKeyword"
      :receiveMyData="receiveMyData"
      :receiveLessonList="receiveLessonList"
      @add-reference="addReferenceOfLesson"
      @change-lesson="changeCreateLesson"
      @call-back="copyDataCallBack"
      @close="closeLessonAdd"
      @change-keyword="changePushKeyword"
      @delete-keyword="deleteKeyword"
      @open-data="openLessonBrowseModal"
      @open-reference="openReference"
      @remove-reference="removeReferenceOfLessonItem"
      @set-lesson="setLessonFlag"
      @set-keyword="setKeyword"
      @open-save-path="openSavePathModal"
      @submit="onSubmitAddLesson"
    />

    <!-- 레슨 열람 -->
    <BrowseLessonModal
      :open="isLessonBrowse.open"
      :lessonItem="lessonViewData"
      :selectReference="selectReferenceItem"
      :currentIdx="currentIdx"
      :pageRoot="pageRoot"
      @pagination="setPagination"
      @select-reference="setSelectReference"
      @close="closeLessonBrowseModal"
      @quiz-preview="openQuizPreview"
      @test-preview="openNoteTestPreview"
      @lesson-change="openLessonChangeModal"
    />

    <!-- 퀴즈 미리보기 -->
    <PreviewQuizModal
      :open="isQuizPreviewModal.open"
      :quizList="selectReferenceItem.quizList"
      :currentPageIdx="currentIdx"
      @close="closeQuizPreview"
      @pagination="setPagination"
    />

    <!-- 쪽지시험 미리보기 -->
    <PreviewNoteTestModal
      :open="isNoteTestPreviewModal.open"
      :testList="selectReferenceItem.noteTestList"
      :currentPageIdx="currentIdx"
      @pagination="setPagination"
      @close="closeNoteTestPreview"
    />

    <!-- 자료실 자료 열람 -->
    <BrowseReferenceModal
      :open="isReferenceBrowse.open"
      :selectData="selectReferenceItem"
      :pageRoot="pageRoot"
      @close="closeReferenceBrowse"
      @reference-change="onOpenReferenceChangeModal"
      @view-url="onOpenShareViewModal"
      @delete="openSelectModal"
      @open-save-path="onOpenSavePathModal"
    />

    <!-- 자료실 퀴즈 열람 -->
    <BrowseQuizModal
      :open="isQuizBrowse.open"
      :selectData="selectReferenceItem"
      :currentPageIdx="currentIdx"
      @close="closeBrowseQuiz"
      @change-number="onClickPagination"
      @change="onOpenQuizChangeModal"
      @preview="onOpenQuizPreviewModal"
      @view-url="onOpenShareViewModal"
      @delete="openSelectModal"
      @open-save-path="onOpenSavePathModal"
      @pagination="onClickQuizPagination"
      @export-pdf="exportPdf"
    />

    <!-- 자료실 쪽지시험 열람 -->
    <BrowseNoteTestModal
      :open="isNoteTestBrowse.open"
      :selectData="selectReferenceItem"
      :currentPageIdx="currentIdx"
      @close="closeBrowseNoteTest"
      @change-number="onClickPagination"
      @change="onOpenNoteTestChangeModal"
      @pagination="onClickQuizPagination"
      @preview="openNoteTestPreview"
      @view-url="onOpenShareViewModal"
      @delete="openSelectModal"
      @open-save-path="onOpenSavePathModal"
      @export-pdf="exportPdf"
    />

    <!-- 자료 수정 -->
    <ChangeReferenceModal
      modalTitle="수정"
      :open="isReferenceChange.open"
      :reference="selectReferenceItem"
      :pushKeyword="pushKeyword"
      @close="onCloseReferenceChangeModal"
      @change-input="onChangeUploadFile"
      @change-keyword="changePushKeyword"
      @set-keyword="setReferenceKeyword"
      @delete-keyword="deleteReferenceKeyword"
      @open-save-path="onOpenSavePathModal"
      @change-file="changeFile"
    />

    <!-- 퀴즈 수정 -->
    <ChangeQuizModal
      modalTitle="수정"
      :open="isQuizChange.open"
      :reference="selectReferenceItem"
      :currentPageIdx="currentIdx"
      :pushKeyword="pushKeyword"
      @close="onCloseQuizChangeModal"
      @change-input="onChangeUploadFile"
      @change-item="onChangeQuizItem"
      @change-keyword="changePushKeyword"
      @change-number="onClickPagination"
      @delete-quiz="onDeleteQuizItem"
      @delete-keyword="deleteReferenceKeyword"
      @open-save-path="onOpenSavePathModal"
      @pagination="setPagination"
      @plus-item="onPlusQuizList"
      @preview="onOpenQuizPreviewModal"
      @select-dificultade="onSelectDificultade"
      @select-type="onClickQuizType"
      @select-ox="onSelectOx"
      @set-keyword="setReferenceKeyword"
    />

    <!-- 쪽지시험 수정 -->
    <ChangeNoteTestModal
      modalTitle="수정"
      :open="isNoteTestChange.open"
      :reference="selectReferenceItem"
      :currentPageIdx="currentIdx"
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
      @set-keyword="setReferenceKeyword"
      @delete-keyword="deleteReferenceKeyword"
      @open-save-path="onOpenSavePathModal"
      @add-example="plusExampleList"
      @delete-example="deleteExample"
    />

    <!-- 자료실 공유하기 -->
    <ShareViewModal
      :open="isShareViewModal.open"
      :url="isShareViewModal.url"
      @close="onCloseShareViewModal"
    />

    <!-- 자료실 삭제 모달 -->
    <DeleteModal :open="isSelectModal.open" @close="onCloseSelectModal" />

    <!-- 레슨 저장경로 모달 -->
    <SavePathModal
      :open="isSavePath.open"
      :institutionData="receiveInstitutionLessonData"
      :franchiseData="receiveFranchiseLessonData"
      :myData="receiveLessonList"
      @close="closeSavePathModal"
      @save-file-path="setSaveFilePath"
    />

    <!-- 자료실 자료 저장경로 설정 -->
    <ReferenceSavePathModal
      :open="isSavePathModal.open"
      :institutionData="receiveInstitutionData"
      :franchiseData="receiveFranchiseData"
      :myData="receiveMyData"
      @save-file-path="setSavePath"
      @close="onCloseSavePathModal"
    />
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'
import PageHeader from '~/components/common/PageHeader.vue'
import MainBtnBox from '~/components/common/MainBtnBox.vue'
import DeleteModal from '~/components/common/modal/DeleteModal.vue'
import ReferenceSavePathModal from '~/components/common/modal/SavePathModal.vue'

import AddLessonModal from '~/components/world/modal/AddLessonModal.vue'
import BrowseQuizModal from '~/components/world/modal/BrowseQuizModal.vue'
import BrowseReferenceModal from '~/components/world/modal/BrowseReferenceModal.vue'
import BrowseNoteTestModal from '~/components/world/modal/BrowseNoteTestModal.vue'
import BrowseLessonModal from '~/components/world/modal/BrowseLessonModal.vue'
import ChangeQuizModal from '~/components/world/modal/AddQuizModal.vue'
import ChangeNoteTestModal from '~/components/world/modal/AddNoteTestModal.vue'
import ChangeReferenceModal from '~/components/world/modal/AddReferenceModal.vue'
import SavePathModal from '~/components/world/modal/SavePathLessonModal.vue'
import ShareViewModal from '~/components/world/modal/ShareViewModal.vue'
import TreeSection from '~/components/world/common/TreeSection.vue'
import PreviewQuizModal from '~/components/world/modal/PreviewQuizModal.vue'
import PreviewNoteTestModal from '~/components/world/modal/PreviewNoteTestModal.vue'

import initialState from '~/data/franchise/world/package/initialState'
import { setNewArray, jsonItem } from '~/utiles/common'

export default {
  name: 'PackagePage',
  components: {
    PageHeader,
    DeleteModal,
    MainBtnBox,
    ReferenceSavePathModal,

    AddLessonModal,
    BrowseQuizModal,
    BrowseReferenceModal,
    BrowseNoteTestModal,
    BrowseLessonModal,
    ChangeQuizModal,
    ChangeNoteTestModal,
    ChangeReferenceModal,
    SavePathModal,
    ShareViewModal,
    TreeSection,
    PreviewQuizModal,
    PreviewNoteTestModal,
  },
  data() {
    return initialState()
  },
  methods: {
    // [공통] 리셋
    initAddReferenceData() {
      Object.assign(this.$data, initialState())
    },

    setModalTitle(str) {
      this.modalTitle = str
    },

    // [공통] 페이지 네이션
    setPagination(direction, maxLength) {
      if (direction === 'plus') {
        if (this.currentIdx + 1 < maxLength) return (this.currentIdx += 1)
      } else if (this.currentIdx > 0) return (this.currentIdx -= 1)
    },

    // [공통] 키워드 변경
    setKeyword({ target: { value } }) {
      const noSpace = /\s/g
      if (!noSpace.test(value) && value.length > 0) {
        const keywordList = [...this.lessonData.keyword, value]
        this.lessonData.keyword = setNewArray(keywordList)
        this.pushKeyword = this.pushKeyword.replace(/.+/g, '')
      } else {
        this.pushKeyword = ''
      }
    },

    // [공통] 키워드 내용 변경
    changePushKeyword({ target: { value } }) {
      const newVal = value.replace(/\s/g, '')
      this.pushKeyword = newVal
    },

    // [레슨] 레슨 등록 모달
    openLessonAdd() {
      this.lessonData = {
        name: '',
        role: '',
        desc: '',
        savePath: '',
        keyword: [],
        publicOpenYn: true,
        isContinuedRegist: true,
        createAt: '',
        referenceList: [],
      }
      this.setModalTitle('등록')
      this.treeReferenceList = []
      this.isAddLesson.open = true
    },

    closeLessonAdd() {
      this.isAddLesson.open = false
    },

    // [레슨] 레슨 수정 모달
    openLessonChangeModal(data) {
      if (this.isLessonBrowse.open) {
        this.closeLessonBrowseModal()
      }
      this.setModalTitle('수정')
      const newItem = jsonItem(data)
      this.lessonData = newItem
      this.treeReferenceList = newItem.referenceList
      this.isAddLesson.open = true
    },

    closeLessonChangeModal() {
      this.isChangeLesson.open = false
    },

    // [레슨] 열람 데이터 초기 설정
    setViewLesson(item) {
      this.setViewLessonFirstReference(jsonItem(item))
      return (this.lessonViewData = jsonItem(item))
    },

    setViewLessonFirstReference(item) {
      const result = item.referenceList
      if (result) return (this.selectReferenceItem = result[0])
      else return (this.selectReferenceItem = {})
    },

    // 트리에서 레슨 열때
    openFirstLessonBrowseModal(item) {
      this.setViewLesson(item)
      this.isLessonBrowse.open = true
    },

    // [레슨] 등록 수정에서 레슨 조회 열기
    openLessonBrowseModal(item, prev) {
      if (this.isAddLesson.open === true) {
        this.closeLessonAdd()
      }

      if (this.isChangeLesson.open === true) {
        this.closeLessonChangeModal()
      }

      this.setViewLesson(item)
      return (this.isLessonBrowse = {
        open: true,
        prevPage: prev,
      })
    },

    closeLessonBrowseModal() {
      console.log(this.isLessonBrowse)
      if (this.isLessonBrowse.prevPage) {
        this[this.isLessonBrowse.prevPage].open = true
      }
      this.isLessonBrowse = {
        prevPage: '',
        open: false,
      }
    },

    // [레슨] 퀴즈 조회
    onOpenQuizPreviewModal(prevItem, page) {
      console.log(prevItem)
      const target = prevItem === 'browse' ? 'isQuizBrowse' : 'isQuizChange'
      this.isQuizPreviewModal = {
        open: true,
        prevPage: target,
      }
      if (page === 'first') {
        this.currentIdx = 0
      }
      if (prevItem === 'browse') {
        this.isQuizBrowse.open = false
        this.isQuizPreviewModal.select = true
      } else {
        this.isQuizChange.open = false
        this.isQuizPreviewModal.select = true
      }
    },

    onOpenNoteTestPreviewModal(prevItem, page) {
      this.isNoteTestPreviewModal = {
        open: true,
        prevPage: prevItem,
      }
      if (page === 'first') {
        this.currentIdx = 0
      }
      if (prevItem === 'add') {
        this.isNoteTestAddModal = false
        this.isNoteTestPreviewModal.select = false
      } else if (prevItem === 'browse') {
        this.isNoteTestBrowse.open = false
        this.isNoteTestPreviewModal.select = true
      } else {
        this.isNoteTestChange.open = false
        this.isNoteTestPreviewModal.select = true
      }
    },

    // [레슨] 저장경로 모달
    openSavePathModal(prev) {
      if (this[prev].open) {
        this[prev].open = false
      }
      this.isSavePath = {
        open: true,
        prevPage: prev,
      }
    },

    closeSavePathModal() {
      this.isSavePath.open = false
      if (this.isSavePath.prevPage) {
        this[this.isSavePath.prevPage].open = true
      }
    },

    // [레슨] 레슨 열람 자료 보기 페이지
    setSelectReference(reference) {
      this.selectReferenceItem = reference
      this.currentIdx = 0
    },

    // [레슨] 레슨에 자료 추가
    addReferenceOfLesson({ children }) {
      const list = jsonItem(children)
      const filterItem = list.filter((item) => item.dbIdx !== -1)
      return (this.treeReferenceList = filterItem)
    },

    // [레슨] 레슨 지우기
    removeReferenceOfLessonItem({ id }) {
      const newArray = this.treeReferenceList
      const filterItem = newArray.filter((data) => data.id !== id)
      this.treeReferenceList = filterItem
    },

    // [레슨] 레슨 수정
    changeCreateLesson({ target: { id, name, value, checked, type } }) {
      const isCkbox = type === 'checkbox'
      if (isCkbox) return (this.lessonData[name] = checked)
      else return (this.lessonData[id] = value)
    },

    // [레슨] 저장경로 수정
    setSaveFilePath(path) {
      const createElem = this.lessonData
      return (createElem.savePath = path)
    },

    // [레슨] 페이지키워드 내용 변경
    changeChangePagePushKeyword({ target: { value } }) {
      this.pushKeyword = value
    },

    // [레슨] 키워드 삭제
    deleteKeyword(idx) {
      this.lessonData.keyword.splice(idx, 1)
    },

    // [레슨] 레슨 추가 Submit (임시)
    onSubmitAddLesson() {
      // 레슨 추가시 tree자료로 바꾸기 임시
      return (this.lessonData.referenceList = this.treeReferenceList)
    },

    // [자료실] 자료 클릭시 해당자료 열기
    openReference(item, prev) {
      if (this[prev]) {
        this[prev].open = false
      }
      this.setReference(item)
      if (item.uploadType === 'quiz') return this.openBrowseQuiz(prev)
      else if (item.uploadType === 'test') return this.openBrowseNoteTest(prev)
      else return this.openReferenceBrowse(prev)
    },

    // [자료실] 동영상,pdf,youtube,url 모달
    openReferenceBrowse(prev) {
      this.isReferenceBrowse = {
        open: true,
        prevPage: prev,
      }
    },

    closeReferenceBrowse() {
      if (this.isReferenceBrowse.prevPage) {
        this[this.isReferenceBrowse.prevPage].open = true
      }
      this.isReferenceBrowse.open = false
    },

    // [자료실] 퀴즈 모달
    openBrowseQuiz(prev) {
      this.isQuizBrowse = {
        open: true,
        prevPage: prev,
      }
    },

    closeBrowseQuiz() {
      if (this.isQuizBrowse.prevPage) {
        this[this.isQuizBrowse.prevPage].open = true
      }
      this.isQuizBrowse.open = false
    },

    // [자료실] 쪽지시험 모달
    openBrowseNoteTest(prev) {
      this.isNoteTestBrowse = {
        open: true,
        prevPage: prev,
      }
    },

    closeBrowseNoteTest() {
      if (this.isNoteTestBrowse.prevPage) {
        this[this.isNoteTestBrowse.prevPage].open = true
      } else if (this.isNoteTestBrowse.prevPage === 'browse') {
        this.isQuizBrowse.open = true
      }
      this.isNoteTestBrowse.open = false
    },

    // [자료실] 자료 수정 모달
    onOpenReferenceChangeModal() {
      if (this.isReferenceBrowse.open) {
        this.isReferenceBrowse.open = false
      }
      this.isReferenceChange.open = true
    },

    onCloseReferenceChangeModal() {
      this.isReferenceBrowse.open = true
      this.isReferenceChange.open = false
    },

    // [자료실] 퀴즈 수정 모달
    onOpenQuizChangeModal() {
      if (this.isQuizBrowse.open) {
        this.isQuizBrowse.open = false
      }
      this.isQuizChange.open = true
    },

    onCloseQuizChangeModal() {
      this.isQuizBrowse.open = true
      this.isQuizChange.open = false
    },

    // [자료실] 쪽지시험 수정 모달
    onOpenNoteTestChangeModal() {
      if (this.isNoteTestBrowse.open) {
        this.isNoteTestBrowse.open = false
      }
      this.isNoteTestChange.open = true
    },

    onCloseNoteTestChangeModal() {
      this.isNoteTestBrowse.open = true
      this.isNoteTestChange.open = false
    },

    // [자료실] 퀴즈 미리보기
    openQuizPreview(page) {
      this[page].open = false
      this.isQuizPreviewModal = {
        open: true,
        prevPage: page,
      }
    },

    closeQuizPreview() {
      if (this.isQuizPreviewModal.prevPage) {
        this[this.isQuizPreviewModal.prevPage].open = true
      }
      this.isQuizPreviewModal = {
        open: false,
      }
    },

    // [자료실] 쪽지시험 미리보기
    openNoteTestPreview(page) {
      console.log(page)
      if (page === 'browse') {
        this.isNoteTestBrowse.open = false
        this.isNoteTestPreviewModal = {
          open: true,
          prevPage: 'isNoteTestBrowse',
        }
      } else {
        this[page].open = false
        this.isNoteTestPreviewModal = {
          open: true,
          prevPage: page,
        }
      }
    },

    closeNoteTestPreview() {
      console.log(this.isNoteTestPreviewModal.prevPage)
      if (this.isNoteTestPreviewModal.prevPage) {
        this[this.isNoteTestPreviewModal.prevPage].open = true
      }
      this.isNoteTestPreviewModal = {
        open: false,
      }
    },

    // [자료실] 공유하기
    onOpenShareViewModal(path, url) {
      this[path].open = false
      this.isShareViewModal = {
        open: true,
        path,
        url,
      }
    },

    onCloseShareViewModal() {
      this[this.isShareViewModal.path].open = true
      this.isShareViewModal.open = false
    },

    // [자료실] 삭제
    openSelectModal(url) {
      this[url].open = false
      this.isSelectModal = {
        open: true,
        prevPage: url,
      }
    },

    onCloseSelectModal() {
      this[this.isSelectModal.prevPage].open = true
      this.isSelectModal.open = false
    },

    // [자료실] 저장경로
    onOpenSavePathModal(path) {
      this[path].open = false
      this.isSavePathModal = {
        open: true,
        prevPage: path,
      }
    },

    onCloseSavePathModal() {
      this[this.isSavePathModal.prevPage].open = true
      this.isSavePathModal.open = false
    },

    // [자료실] 저장 경로 선택 하기
    setSavePath(path) {
      return (this.selectReferenceItem.saveFolder = path)
    },

    // [자료실] 등록 자료 내용 변경
    onChangeUploadFile({ target: { id, value, type, checked, name } }) {
      const elem = this.selectReferenceItem
      const isCkbox = type === 'checkbox'
      if (isCkbox) return (elem[name] = checked)
      else return (elem[id] = value)
    },

    // [자료실]수정 페이지 파일 변경
    changeFile(e) {
      const {
        target: { files, name },
      } = e
      if (files[0]) {
        this.selectReferenceItem = {
          ...this.selectReferenceItem,
          name: files[0].name,
          fileName: files[0].name,
          fileDivision: '교육기관',
          fileType: files[0].type,
          uploadType: name,
          fileSize: files[0].size,
          createAt: files[0].lastModifiedDate,
          savePath: URL.createObjectURL(files[0]),
        }
      }
    },

    // [자료실] 트리뷰 변경 flag
    setLessonFlag(flag) {
      this.isLesson = flag
    },

    // [자료실] 자료실 자료 설정
    setReference(item) {
      this.selectReferenceItem = jsonItem(item)
    },

    // [자료실] 키워드 변경
    setReferenceKeyword({ target: { value } }) {
      const keywordList = [...this.selectReferenceItem.keyword, value]
      this.pushKeyword = ''
      this.selectReferenceItem.keyword = setNewArray(keywordList)
    },

    // [자료실] 키워드 삭제
    deleteReferenceKeyword(idx) {
      this.selectReferenceItem.keyword.splice(idx, 1)
    },

    // [자료실] 퀴즈 내용 수정
    onChangeQuizItem({ target: { value, name } }, idx) {
      this.selectReferenceItem.quizList[idx][name] = value
    },

    // [자료실] 퀴즈 변경 UI
    onClickPagination(idx) {
      this.currentIdx = Number(idx)
    },

    // [자료실] 퀴즈 지우기
    onDeleteQuizItem(idx) {
      const elem = this.selectReferenceItem.quizList
      return elem.length > 1 && elem.splice(idx, 1)
    },

    // [자료실] 쪽지시험 지우기
    onDeleteNoteTest(idx) {
      const elem = this.selectReferenceItem.noteTestList
      return elem.length > 1 && elem.splice(idx, 1)
    },

    // [자료실] 퀴즈 추가
    onPlusQuizList() {
      const elem = this.selectReferenceItem
      const isLength = elem.quizList.length <= 19

      return (
        isLength &&
        (elem.quizList = [
          ...elem.quizList,
          {
            ...this.quizItem,
            id: elem.length + 1,
          },
        ])
      )
    },

    // [자료실] 퀴즈 타입 변경
    onClickQuizType({ target: { value } }, idx, num) {
      const target = this.selectReferenceItem.quizList[idx]
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

    // [자료실] ox클릭 이벤트
    onSelectOx(idx, num) {
      this.selectReferenceItem.quizList[idx].oxAnswer = num
    },

    // [자료실] 난이도 설정
    onSelectDificultade(idx, num) {
      this.selectReferenceItem.quizList[idx].dificultade = num
    },

    // [자료실] 난이도 설정 쪽지 시험
    onSelectDificultadeTest(idx, num) {
      this.selectReferenceItem.noteTestList[idx].dificultade = num
    },

    // [자료실] 쪽지시험 내용 수정
    onChangeTest({ target: { value, name, type, checked } }, idx) {
      const item = this.selectReferenceItem.noteTestList[idx]
      if (type === 'checkbox') return (item[name] = checked)
      else return (item[name] = value)
    },

    // 쪽지 시험 추가
    onPlusNoteTestList() {
      const target = this.selectReferenceItem
      const isLength = target.noteTestList.length <= 19
      const setId = target.noteTestList.length + 1
      return (
        isLength &&
        (target.noteTestList = [
          ...target.noteTestList,
          { ...this.testItem, id: setId },
        ])
      )
    },

    // 정답 입력
    onSelectAnswer(idx, targetIdx) {
      this.selectReferenceItem.noteTestList[idx].answer = Number(targetIdx + 1)
    },

    // 쪽지시험 예제 추가
    plusExampleList(idx) {
      const example = { id: '', example: '' }
      this.selectReferenceItem.noteTestList[idx].exampleList.push(example)
    },

    // 쪽지시험 예제 제거
    deleteExample(idx, targetIdx) {
      this.selectReferenceItem.noteTestList[idx].exampleList.splice(
        targetIdx,
        1
      )
    },

    // [자료실]PDF변환
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

    // [자료실] 퀴즈 페이지네이션
    onClickQuizPagination(direction, max) {
      if (direction === 'plus')
        return this.currentIdx < max - 1 && (this.currentIdx += 1)
      else return this.currentIdx !== 0 && (this.currentIdx -= 1)
    },

    // [트리]
    copyData() {
      const instiTab = document.getElementById('institute')
      if (instiTab.classList.contains('show')) {
        this.isCopyType = 'institution'
        this.$refs.mainEducation.$refs.education.$refs.institution.copyData()
      } else {
        this.isCopyType = 'franchise'
        this.$refs.mainEducation.$refs.education.$refs.franchise.copyData()
      }
    },

    // [트리]
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

    // [트리]
    delData() {
      if (this.identity === 'master') {
        const instiTab = document.getElementById('institute')
        if (instiTab.classList.contains('show')) {
          this.$refs.mainEducation.$refs.education.$refs.institution.delData()
        } else {
          this.$refs.mainEducation.$refs.education.$refs.franchise.delData()
        }
      }
      this.$refs.mainEducation.$refs.myData.$refs.curriculum.delData()
    },

    // [트리]
    copyDataCallBack(copyData) {
      this.copyCheckData = copyData
    },
  },
}
</script>
