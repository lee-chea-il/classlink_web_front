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
      :open="isAddLesson.open"
      :identity="identity"
      :isLesson="isLesson"
      :receiveInstitutionLessonData="receiveInstitutionLessonData"
      :receiveFranchiseLessonData="receiveFranchiseLessonData"
      :createLessonData="createLessonData"
      :receiveInstitutionData="receiveInstitutionData"
      :receiveFranchiseData="receiveFranchiseData"
      :pushKeyword="pushKeyword"
      @add-lesson="addLessonList"
      @change-lesson="changeCreateLesson"
      @call-back="copyDataCallBack"
      @close="closeLessonAdd"
      @change-keyword="changePushKeyword"
      @delete-keyword="deleteKeyword"
      @open-data="openLessonBrowseModal"
      @open-reference="openReference"
      @remove-lesson="removeLessonItem"
      @set-lesson="setLessonFlag"
      @set-keyword="setKeyword"
      @open-save-path="openSavePathModal"
    />

    <!-- 레슨 변경 -->
    <LessonChangeModal
      :open="isChangeLesson.open"
      :lessonItem="changeLessonItem"
      :identity="identity"
      :isLesson="isLesson"
      :receiveInstitutionLessonData="receiveInstitutionLessonData"
      :receiveFranchiseLessonData="receiveFranchiseLessonData"
      :createLessonData="createLessonData"
      :receiveInstitutionData="receiveInstitutionData"
      :receiveFranchiseData="receiveFranchiseData"
      :pushKeyword="pushKeyword"
      @add-lesson="addChangePageLessonList"
      @change-lesson="onChangeLesson"
      @set-lesson="setLessonFlag"
      @remove-lesson="removeLessonItem"
      @call-back="copyDataCallBack"
      @change-keyword="changeChangePagePushKeyword"
      @set-keyword="setChangePageKeyword"
      @delete-keyword="deleteChangePageKeyword"
      @close="closeLessonChangeModal"
      @open-data="openLessonBrowseModal"
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

    <!-- 등록 자료실 자료 열람 -->
    <VideoBrowseModal
      :open="isReferenceBrowse.open"
      :selectData="selectReferenceItem"
      @close="closeReferenceBrowse"
    />

    <QuizBrowseModal
      :open="isQuizBrowse.open"
      :selectData="selectReferenceItem"
      @close="closeBrowseQuiz"
      @preview="onOpenQuizPreviewModal"
    />

    <NoteTestBrowseModal
      :open="isNoteTestBrowse.open"
      :selectData="selectReferenceItem"
      @close="closeBrowseNoteTest"
      @preview="openNoteTestPreview"
    />

    <SavePathModal
      :open="isSavePath.open"
      :institutionData="receiveInstitutionLessonData"
      :franchiseData="receiveFranchiseLessonData"
      :myData="receiveLessonList"
      @close="closeSavePathModal"
      @save-file-path="setSaveFilePath"
    />
  </div>
</template>

<script>
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
  },
  layout: 'EducationLayout',
  data() {
    return initialState()
  },
  methods: {
    openLessonAdd() {
      this.isAddLesson.open = true
    },

    closeLessonAdd() {
      this.isAddLesson.open = false
    },

    openLessonChangeModal(data) {
      if (this.isLessonBrowse) {
        this.closeLessonBrowseModal()
      }
      const newItem = this.jsonItem(data)
      this.changeLessonItem = newItem
      this.isChangeLesson.open = true
    },

    closeLessonChangeModal() {
      this.isChangeLesson.open = false
    },

    // 열람 데이터 초기 설정
    setViewLesson(item) {
      const newItem = this.jsonItem(item)
      this.setViewLessonFirstReference(newItem)
      return (this.viewLessonItem = newItem)
    },

    setViewLessonFirstReference(item) {
      this.selectReferenceItem = item?.referenceList[0]
    },

    // 레슨 열기
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
      this.isLessonBrowse.open = false
      if (this.isLessonBrowse.prevPage !== '') {
        this[this.isLessonBrowse.prevPage] = true
      }
    },

    // 자료실 자료 열람 하기
    openReference(item, prev) {
      if (this[prev]) {
        this[prev] = false
      }
      this.setReference(item)
      if (item.uploadType === 'quiz') return this.openBrowseQuiz(prev)
      else if (item.uploadType === 'test') return this.openBrowseNoteTest(prev)
      else return this.openReferenceBrowse(prev)
    },

    // [자료열람] 동영상,pdf,youtube,url
    openReferenceBrowse(prev) {
      this.isReferenceBrowse = {
        open: true,
        prevPage: prev,
      }
    },

    closeReferenceBrowse() {
      if (this.isReferenceBrowse.prevPage) {
        this[this.isReferenceBrowse.prevPage] = true
      }
      this.isReferenceBrowse.open = false
    },

    // [자료열람] 퀴즈
    openBrowseQuiz(prev) {
      this.isQuizBrowse = {
        open: true,
        prevPage: prev,
      }
    },

    closeBrowseQuiz() {
      if (this.isQuizBrowse.prevPage) {
        this[this.isQuizBrowse.prevPage] = true
      }
      this.isQuizBrowse.open = false
    },

    // [자료열람] 쪽지시험
    openBrowseNoteTest(prev) {
      this.isNoteTestBrowse = {
        open: true,
        prevPage: prev,
      }
    },

    closeBrowseNoteTest() {
      if (this.isNoteTestBrowse.prevPage) {
        this[this.isNoteTestBrowse.prevPage] = true
      } else if (this.isNoteTestBrowse.prevPage === 'browse') {
        this.isQuizBrowse.oepn = true
      }
      this.isNoteTestBrowse = false
    },

    // [자료미리보기] 퀴즈
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

    // [자료미리보기] 쪽지시험
    openNoteTestPreview(page) {
      this[page].open = false
      this.isNoteTestPreviewModal = {
        open: true,
        prevPage: page,
      }
    },

    closeNoteTestPreview() {
      if (this.isNoteTestPreviewModal.prevPage) {
        this[this.isNoteTestPreviewModal.prevPage].open = true
      }
      this.isNoteTestPreviewModal = {
        open: false,
      }
    },

    onOpenQuizPreviewModal(prevItem, page) {
      console.log(prevItem)
      const target =
        prevItem === 'browse' ? 'isQuizBrowse' : 'isQuizChangeModal'
      this.isQuizPreviewModal = {
        open: true,
        prevPage: target,
      }
      if (page === 'first') {
        this.currentPageIdx = 0
      }
      if (prevItem === 'browse') {
        this.isQuizBrowse.open = false
        this.isQuizPreviewModal.select = true
      } else {
        this.isQuizChangeModal = false
        this.isQuizPreviewModal.select = true
      }
    },

    onOpenNoteTestPreviewModal(prevItem, page) {
      this.isNoteTestPreviewModal = {
        open: true,
        prevPage: prevItem,
      }
      if (page === 'first') {
        this.currentPageIdx = 0
      }
      if (prevItem === 'add') {
        this.isNoteTestAddModal = false
        this.isNoteTestPreviewModal.select = false
      } else if (prevItem === 'browse') {
        this.isNoteTestBrowseModal = false
        this.isNoteTestPreviewModal.select = true
      } else {
        this.isNoteTestChangeModal = false
        this.isNoteTestPreviewModal.select = true
      }
    },

    // [저장경로 모달]
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

    // [자료등록,수정] 트리뷰 변경 flag
    setLessonFlag(flag) {
      this.isLesson = flag
    },

    copyData() {
      const instiTab = document.getElementById('institute')
      if (instiTab.classList.contains('show')) {
        this.$refs.education.$refs.institution.copyData()
      } else {
        this.$refs.education.$refs.franchise.copyData()
      }
    },

    pasteData() {
      this.$refs.myData.$refs.curriculum.pasteData(this.copyCheckData)
    },

    delData() {
      this.$refs.myData.$refs.curriculum.delData()
    },

    copyDataCallBack(copyData) {
      this.copyCheckData = copyData
      console.log(this.copyCheckData)
    },

    // 자료실 자료 설정
    setReference(item) {
      this.selectReferenceItem = this.jsonItem(item)
    },

    // 레슨 열람 자료 보기 페이지
    setSelectReference(reference) {
      this.selectReferenceItem = reference
      this.currentIdx = 0
    },

    // 페이지 네이션
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

    // 순환 구조를 Json으로 변환
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

    // json으로 변환 후 return
    jsonItem(data) {
      const spare = JSON.stringify(data, this.getCircularReplacer())
      return JSON.parse(spare)
    },

    // 레슨 추가
    addLessonList({ children }) {
      const list = this.jsonItem(children)
      const filterItem = list.filter((item) => item.dbIdx !== -1)
      return (this.createLessonData.referenceList = filterItem)
    },

    // 수정페이지 레슨 추가
    addChangePageLessonList({ children }) {
      const list = this.jsonItem(children)
      const filterItem = list.filter((item) => item.dbIdx !== -1)
      return (this.changeLessonItem.referenceList = filterItem)
    },

    // 레슨 지우기
    removeLessonItem({ id }) {
      const newArray = this.createLessonData.referenceList
      const filterItem = newArray.filter((data) => data.id !== id)
      return (this.createLessonData.referenceList = filterItem)
    },

    // 레슨 수정
    changeCreateLesson({ target: { id, name, value, checked } }) {
      const isCheckbox =
        name === 'isOpenEducation' || name === 'isContinuedRegist'
      if (isCheckbox) return (this.createLessonData[name] = checked)
      else return (this.createLessonData[id] = value)
    },

    // 수정페이지 레슨 수정
    onChangeLesson({ target: { id, name, value, checked } }) {
      const isCheckbox =
        name === 'isOpenEducation' || name === 'isContinuedRegist'
      if (isCheckbox) return (this.changeLessonItem[name] = checked)
      else return (this.changeLessonItem[id] = value)
    },

    // 저장경로 수정
    setSaveFilePath(path) {
      console.log(path)
      if (this.isSavePath.prevPage === 'isAddLesson') {
        this.createLessonData.savePath = path
      } else {
        this.changeLessonItem.savePath = path
      }
    },

    // 키워드 변경
    setKeyword({ target: { value } }) {
      const keywordList = [...this.createLessonData.keyword, value]
      this.pushKeyword = ''
      this.createLessonData.keyword = Array.from(new Set(keywordList))
    },

    // 키워드 삭제
    deleteKeyword(idx) {
      this.createLessonData.keyword.splice(idx, 1)
    },

    // 키워드 내용 변경
    changePushKeyword({ target: { value } }) {
      this.pushKeyword = value
    },

    // 수정 페이지키워드 변경
    setChangePageKeyword({ target: { value } }) {
      const keywordList = [...this.changeLessonItem.keyword, value]
      this.pushKeyword = ''
      this.changeLessonItem.keyword = Array.from(new Set(keywordList))
    },

    // 수정 페이지키워드 삭제
    deleteChangePageKeyword(idx) {
      this.changeLessonItem.keyword.splice(idx, 1)
    },

    // 수정 페이지키워드 내용 변경
    changeChangePagePushKeyword({ target: { value } }) {
      this.pushKeyword = value
    },
  },
}
</script>
