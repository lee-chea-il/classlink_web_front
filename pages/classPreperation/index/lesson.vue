<template>
  <div>
    <PageHeader title="레슨" />

    <div class="tab-content depth03 ac_manage_dtr">
      <div class="tab-pane active">
        <!-- 컨트롤 버튼 영역 -->

        <LessonBtnBox
          @open-add="openLessonAdd"
          @copy="copyData"
          @paste="pasteData"
          @delete="delData"
        />

        <div class="divide_section">
          <!-- 왼쪽 영역 -->
          <div class="divide_area left">
            <EducationTabMenu />
            <LeftTreeTab
              ref="education"
              :identity="identity"
              :institutionData="receiveInstitutionLessonData"
              :franchiseData="receiveFranchiseLessonData"
              @copyDataCallBack="copyDataCallBack"
              @open-data="openLessonBrowseModal"
              @update-data="openLessonChangeModal"
            />
          </div>

          <div class="divide_area right">
            <!-- 오른쪽 영역 -->
            <MyTabMenu title="내 레슨" />
            <RightTreeTab ref="myData" :receiveLessonList="receiveLessonList" />
          </div>
        </div>
      </div>
    </div>

    <!-- 레슨 추가 -->
    <LessonAddModal
      ref="lessonAdd"
      :open="isAddLesson.open"
      :identity="identity"
      :isLesson="isLesson"
      :receiveInstitutionLessonData="receiveInstitutionLessonData"
      :receiveFranchiseLessonData="receiveFranchiseLessonData"
      :createLessonData="createLessonData"
      :receiveInstitutionData="receiveInstitutionData"
      :receiveFranchiseData="receiveFranchiseData"
      :pushKeyword="pushKeyword"
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
    />

    <!-- 레슨 변경 -->
    <LessonChangeModal
      :open="isChangeLesson.open"
      :identity="identity"
      :isLesson="isLesson"
      :receiveInstitutionLessonData="receiveInstitutionLessonData"
      :receiveFranchiseLessonData="receiveFranchiseLessonData"
      :createLessonData="changeLessonItem"
      :receiveInstitutionData="receiveInstitutionData"
      :receiveFranchiseData="receiveFranchiseData"
      :pushKeyword="pushKeyword"
      @add-reference="addChangePageReferenceOfLesson"
      @change-lesson="onChangeLesson"
      @set-lesson="setLessonFlag"
      @remove-reference="removeReferenceOfLessonItemChange"
      @call-back="copyDataCallBack"
      @change-keyword="changeChangePagePushKeyword"
      @set-keyword="setChangePageKeyword"
      @delete-keyword="deleteChangePageKeyword"
      @close="closeLessonChangeModal"
      @open-data="openLessonBrowseModal"
      @open-reference="openReference"
      @open-save-path="openSavePathModal"
    />

    <!-- 레슨 열람 -->
    <LessonBrowseModal
      :open="isLessonBrowse.open"
      :lessonItem="viewLessonItem"
      :selectReference="selectReferenceItem"
      :currentIdx="currentIdx"
      @pagination="setPagination"
      @select-reference="setSelectReference"
      @close="closeLessonBrowseModal"
      @quiz-preview="openQuizPreview"
      @test-preview="openNoteTestPreview"
      @lesson-change="openLessonChangeModal"
    />

    <!-- 퀴즈 미리보기 -->
    <QuizPreviewModal
      :open="isQuizPreviewModal.open"
      :quizList="selectReferenceItem.quizList"
      :currentPageIdx="currentIdx"
      @close="closeQuizPreview"
      @pagination="setPagination"
    />

    <!-- 쪽지시험 미리보기 -->
    <NoteTestPreviewModal
      :open="isNoteTestPreviewModal.open"
      :testList="selectReferenceItem.noteTestList"
      :currentPageIdx="currentIdx"
      @pagination="setPagination"
      @close="closeNoteTestPreview"
    />

    <!-- 자료실 자료 열람 -->
    <VideoBrowseModal
      :open="isReferenceBrowse.open"
      :selectData="selectReferenceItem"
      @close="closeReferenceBrowse"
      @reference-change="onOpenReferenceChangeModal"
      @view-url="onOpenShareViewModal"
      @delete="openSelectModal"
      @open-save-path="onOpenSavePathModal"
    />

    <!-- 자료실 퀴즈 열람 -->
    <QuizBrowseModal
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
    <NoteTestBrowseModal
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
    <ReferenceChangeModal
      :open="isReferenceChange.open"
      :reference="selectReferenceItem"
      :pushKeyword="pushKeyword"
      @close="onCloseReferenceChangeModal"
      @change-input="onChangeUploadFile"
      @change-keyword="changePushKeyword"
      @set-keyword="setReferenceKeyword"
      @delete-keyword="deleteReferenceKeyword"
      @open-save-path="onOpenSavePathModal"
    />

    <!-- 퀴즈 수정 -->
    <QuizChangeModal
      :open="isQuizChange.open"
      :quiz="selectReferenceItem"
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
    <NoteTestChangeModal
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

    <!-- 레슨 저장경로 모달 -->
    <SavePathModal
      :open="isSavePath.open"
      :institutionData="receiveInstitutionLessonData"
      :franchiseData="receiveFranchiseLessonData"
      :myData="receiveLessonList"
      @close="closeSavePathModal"
      @save-file-path="setSaveFilePath"
    />

    <!-- 자료실 공유하기 -->
    <ShareViewModal
      :open="isShareViewModal.open"
      :url="isShareViewModal.url"
      @close="onCloseShareViewModal"
    />

    <!-- 자료실 삭제 모달 -->
    <DeleteModal :open="isSelectModal.open" @close="onCloseSelectModal" />

    <!-- 자료실 자료 저장경로 설정 -->
    <!-- 저장경로 설정 -->
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
import LessonAddModal from '~/components/common/modal/lesson/LessonAddModal.vue'
import LessonBrowseModal from '~/components/common/modal/lesson/LessonBrowseModal.vue'
import LessonChangeModal from '~/components/common/modal/lesson/LessonChangeModal.vue'
import NoteTestPreviewModal from '~/components/common/modal/reference/NoteTestPreviewModal.vue'
import QuizPreviewModal from '~/components/common/modal/reference/QuizPreviewModal.vue'
import PageHeader from '~/components/common/PageHeader.vue'
import LessonBtnBox from '~/components/lesson/Main/LessonBtnBox.vue'
import initialState from '~/data/lesson/initialState'
import MyTabMenu from '~/components/common/MyTabMenu.vue'
import LeftTreeTab from '~/components/lesson/Main/LeftTreeTab.vue'
import RightTreeTab from '~/components/lesson/Main/RightTreeTab.vue'
import EducationTabMenu from '~/components/common/EducationTabMenu.vue'
import VideoBrowseModal from '~/components/common/modal/reference/VideoBrowseModal.vue'
import QuizBrowseModal from '~/components/common/modal/reference/QuizBrowseModal.vue'
import NoteTestBrowseModal from '~/components/common/modal/reference/NoteTestBrowseModal.vue'
import SavePathModal from '~/components/common/modal/lesson/SavePathModal.vue'
import ShareViewModal from '~/components/common/modal/reference/ShareViewModal.vue'
import DeleteModal from '~/components/common/modal/reference/DeleteModal.vue'
import ReferenceSavePathModal from '~/components/common/modal/reference/SavePathModal.vue'
import ReferenceChangeModal from '~/components/common/modal/reference/ReferenceChangeModal.vue'
import QuizChangeModal from '~/components/common/modal/reference/QuizChangeModal.vue'
import NoteTestChangeModal from '~/components/common/modal/reference/NoteTestChangeModal.vue'

export default {
  name: 'LessonPage',
  components: {
    PageHeader,
    LessonAddModal,
    LessonChangeModal,
    LessonBrowseModal,
    QuizPreviewModal,
    NoteTestPreviewModal,
    LessonBtnBox,
    MyTabMenu,
    LeftTreeTab,
    RightTreeTab,
    EducationTabMenu,
    VideoBrowseModal,
    QuizBrowseModal,
    NoteTestBrowseModal,
    SavePathModal,
    ShareViewModal,
    DeleteModal,
    ReferenceSavePathModal,
    ReferenceChangeModal,
    QuizChangeModal,
    NoteTestChangeModal,
  },
  layout: 'EducationLayout',
  data() {
    return initialState()
  },
  methods: {
    // [공통] 리셋
    initAddReferenceData() {
      Object.assign(this.$data, initialState())
    },

    // [공통] 페이지 네이션
    setPagination(direction, maxLength) {
      if (direction === 'plus') {
        if (this.currentIdx + 1 < maxLength) {
          this.currentIdx += 1
        }
      } else if (direction === 'min') {
        if (this.currentIdx > 0) {
          this.currentIdx -= 1
        }
      } else {
        return null
      }
    },

    // [공통] 순환 구조를 Json으로 변환
    getCircularReplacer() {
      const seen = new WeakSet()
      return (key, value) => {
        if (typeof value === 'object' && value !== null) {
          if (seen.has(value)) {
            return
          }
          seen.add(value)
        }
        return value
      }
    },

    // [공통] json으로 변환 후 return
    jsonItem(data) {
      const spare = JSON.stringify(data, this.getCircularReplacer())
      return JSON.parse(spare)
    },

    // [공통] 키워드 변경
    setKeyword({ target: { value } }) {
      const keywordList = [...this.createLessonData.keyword, value]
      this.pushKeyword = ''
      this.createLessonData.keyword = Array.from(new Set(keywordList))
    },

    // [공통] 키워드 내용 변경
    changePushKeyword({ target: { value } }) {
      this.pushKeyword = value
    },

    // [레슨] 레슨 등록
    openLessonAdd() {
      this.createLessonData = {
        name: '',
        role: '',
        desc: '',
        savePath: '',
        keyword: [],
        isOpenEducation: true,
        isContinuedRegist: true,
        createAt: '',
        referenceList: [],
      }
      this.isAddLesson.open = true
    },

    closeLessonAdd() {
      this.isAddLesson.open = false
    },

    // [레슨] 레슨 수정
    openLessonChangeModal(data) {
      if (this.isLessonBrowse.open) {
        this.closeLessonBrowseModal()
      }
      const newItem = this.jsonItem(data)
      this.changeLessonItem = newItem
      this.isChangeLesson.open = true
    },

    closeLessonChangeModal() {
      this.isChangeLesson.open = false
    },

    // [레슨] 열람 데이터 초기 설정
    setViewLesson(item) {
      const newItem = this.jsonItem(item)
      this.setViewLessonFirstReference(newItem)
      return (this.viewLessonItem = newItem)
    },

    setViewLessonFirstReference(item) {
      this.selectReferenceItem = item?.referenceList[0]
    },

    // [레슨] 조회 열기
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
      this.isLessonBrowse.open = false
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
      const list = this.jsonItem(children)
      const filterItem = list.filter((item) => item.dbIdx !== -1)
      this.treeReferenceList = filterItem
      console.log(this.treeReferenceList)
    },

    // [레슨] 수정페이지 레슨에  추가
    addChangePageReferenceOfLesson({ children }) {
      const list = this.jsonItem(children)
      const filterItem = list.filter((item) => item.dbIdx !== -1)
      return (this.changeLessonItem.referenceList = filterItem)
    },

    // [레슨] 레슨 지우기
    removeReferenceOfLessonItem({ id }) {
      const newArray = this.treeReferenceList
      const filterItem = newArray.filter((data) => data.id !== id)
      this.treeReferenceList = filterItem
      console.log(this.treeReferenceList)
    },

    // [레슨] 수정 페이지 레슨 지우기
    removeReferenceOfLessonItemChange({ id }) {
      const newArray = this.changeLessonItem.referenceList
      const filterItem = newArray.filter((data) => data.id !== id)
      return (this.changeLessonItem.referenceList = filterItem)
    },

    // [레슨] 레슨 수정
    changeCreateLesson({ target: { id, name, value, checked } }) {
      const isCheckbox =
        name === 'isOpenEducation' || name === 'isContinuedRegist'
      if (isCheckbox) return (this.createLessonData[name] = checked)
      else return (this.createLessonData[id] = value)
    },

    // [레슨] 수정페이지 레슨 수정
    onChangeLesson({ target: { id, name, value, checked } }) {
      const isCheckbox =
        name === 'isOpenEducation' || name === 'isContinuedRegist'
      if (isCheckbox) return (this.changeLessonItem[name] = checked)
      else return (this.changeLessonItem[id] = value)
    },

    // [레슨] 저장경로 수정
    setSaveFilePath(path) {
      console.log(path)
      if (this.isSavePath.prevPage === 'isAddLesson') {
        this.createLessonData.savePath = path
      } else {
        this.changeLessonItem.savePath = path
      }
    },

    // [레슨] 페이지키워드 변경
    setChangePageKeyword({ target: { value } }) {
      const keywordList = [...this.changeLessonItem.keyword, value]
      this.pushKeyword = ''
      this.changeLessonItem.keyword = Array.from(new Set(keywordList))
    },

    // [레슨] 페이지키워드 삭제
    deleteChangePageKeyword(idx) {
      this.changeLessonItem.keyword.splice(idx, 1)
    },

    // [레슨] 페이지키워드 내용 변경
    changeChangePagePushKeyword({ target: { value } }) {
      this.pushKeyword = value
    },

    // [레슨] 키워드 삭제
    deleteKeyword(idx) {
      this.createLessonData.keyword.splice(idx, 1)
    },

    // [자료실] 자료 클릭시 해당자료 열기
    openReference(item, prev) {
      if (this[prev]) {
        this[prev].open = false
      }
      this.setReference(item)
      console.log(item.uploadType)
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
      // this.openReferenceBrowse()
      this.isReferenceBrowse.open = true
      this.isReferenceChange.open = false
    },

    // [자료실] 퀴즈 수정 모달
    onOpenQuizChangeModal() {
      if (this.isQuizBrowse.open) {
        this.isQuizBrowse.open = false
        // this.closeLessonAdd()
      }
      this.isQuizChange.open = true
    },

    onCloseQuizChangeModal() {
      // this.openBrowseQuiz()
      this.isQuizBrowse.open = true
      this.isQuizChange.open = false
    },

    // [자료실] 쪽지시험 수정 모달
    onOpenNoteTestChangeModal() {
      if (this.isNoteTestBrowse.open) {
        // this.closeBrowseNoteTest()
        this.isNoteTestBrowse.open = false
        // this.closeLessonAdd()
      }
      this.isNoteTestChange.open = true
    },

    onCloseNoteTestChangeModal() {
      // this.openBrowseNoteTest()
      console.log(this.isNoteTestBrowse)
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
      if (type === 'checkbox') {
        if (checked) {
          this.selectReferenceItem[id] = true
        } else {
          this.selectReferenceItem[id] = false
        }
      } else if (name === 'isOpenReference' || name === 'isOpenEducation') {
        this.selectReferenceItem[name] = value
      } else {
        this.selectReferenceItem[id] = value
      }
    },

    // [자료실] 트리뷰 변경 flag
    setLessonFlag(flag) {
      this.isLesson = flag
    },

    // [자료실] 자료실 자료 설정
    setReference(item) {
      this.selectReferenceItem = this.jsonItem(item)
    },

    // [자료실] 키워드 변경
    setReferenceKeyword({ target: { value } }) {
      const keywordList = [...this.selectReferenceItem.keyword, value]
      this.pushKeyword = ''
      this.selectReferenceItem.keyword = Array.from(new Set(keywordList))
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
      this.currentIdx = idx
    },

    // [자료실] 퀴즈 지우기
    onDeleteQuizItem(idx) {
      if (this.selectReferenceItem.quizList.length > 1) {
        this.selectReferenceItem.quizList.splice(idx, 1)
      }
    },

    // [자료실] 쪽지시험 지우기
    onDeleteNoteTest(idx) {
      if (this.selectReferenceItem.noteTestList.length > 1) {
        this.selectReferenceItem.noteTestList.splice(idx, 1)
      }
    },

    // [자료실] 퀴즈 추가
    onPlusQuizList() {
      if (this.selectReferenceItem.quizList.length <= 19) {
        const quizItem = {
          id: this.selectReferenceItem.quizList.length + 1,
          problem: '',
          dificultade: 0,
          limitTime: 0,
          quizType: 0,
          oxAnswer: 0,
          shortAnswer: '',
          subjectiveAnswer: '',
          shortWrongAnswer: '',
        }
        this.selectReferenceItem.quizList.push(quizItem)
      }
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
      if (type === 'checkbox') {
        if (checked) {
          this.selectReferenceItem.noteTestList[idx][name] = true
        } else {
          this.selectReferenceItem.noteTestList[idx][name] = false
        }
      } else {
        this.selectReferenceItem.noteTestList[idx][name] = value
      }
    },

    // 퀴즈 변경 UI
    onClickNoteTestList(idx) {
      this.currentPageIdxio = idx
    },

    // 쪽지 시험 추가
    onPlusNoteTestList() {
      if (this.selectReferenceItem.noteTestList.length <= 19) {
        const noteTestItem = {
          id: this.selectReferenceItem.noteTestList.length,
          problem: '',
          exampleList: [
            { id: '', example: '' },
            { id: '', example: '' },
            { id: '', example: '' },
            { id: '', example: '' },
            { id: '', example: '' },
          ],
          dificultade: 0,
          limitTime: '',
          answer: 0,
        }

        this.selectReferenceItem.noteTestList.push(noteTestItem)
      }
    },

    // 정답 입력
    onSelectAnswer(idx, targetIdx) {
      console.log(idx, targetIdx)
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
      if (direction === 'plus') {
        if (this.currentIdx < max - 1) this.currentIdx += 1
      } else if (direction === 'min') {
        if (this.currentIdx !== 0) this.currentIdx -= 1
      }
    },

    // [트리]
    copyData() {
      const instiTab = document.getElementById('institute')
      if (instiTab.classList.contains('show')) {
        this.$refs.education.$refs.institution.copyData()
      } else {
        this.$refs.education.$refs.franchise.copyData()
      }
    },

    // [트리]
    pasteData() {
      this.$refs.myData.$refs.curriculum.pasteData(this.copyCheckData)
    },
    // [트리]
    delData() {
      this.$refs.myData.$refs.curriculum.delData()
    },
    // [트리]
    copyDataCallBack(copyData) {
      this.copyCheckData = copyData
      console.log(this.copyCheckData)
    },
  },
}
</script>
