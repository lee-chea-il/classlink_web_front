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
              @file-view="openReferenceDetail"
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
      :open="isLessonAdd"
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
      @set-lesson="setLessonFlag"
      @remove-lesson="removeLessonItem"
      @call-back="copyDataCallBack"
      @close="isLessonAdd = false"
      @change-keyword="changePushKeyword"
      @set-keyword="setKeyword"
      @delete-keyword="deleteKeyword"
      @open-reference="openReferenceDetail"
    />

    <!-- 레슨 변경 -->
    <LessonChangeModal
      :open="isLessonChange"
      :lessonItem="selectLesson"
      :identity="identity"
      :isLesson="isLesson"
      :receiveInstitutionLessonData="receiveInstitutionLessonData"
      :receiveFranchiseLessonData="receiveFranchiseLessonData"
      :createLessonData="createLessonData"
      :receiveInstitutionData="receiveInstitutionData"
      :receiveFranchiseData="receiveFranchiseData"
      :pushKeyword="pushKeyword"
      @add-lesson="addChangePageLessonList"
      @change-lesson="changeLesson"
      @set-lesson="setLessonFlag"
      @remove-lesson="removeLessonItem"
      @call-back="copyDataCallBack"
      @change-keyword="changeChangePagePushKeyword"
      @set-keyword="setChangePageKeyword"
      @delete-keyword="deleteChangePageKeyword"
      @open-reference="openReferenceDetail"
      @close="closeLessonChangeModal"
    />

    <!-- 레슨 열람 -->
    <LessonBrowseModal
      :open="isLessonBrowse.open"
      :lessonItem="selectLesson"
      :selectReference="selectReference"
      :currentIdx="currentIdx"
      @pagination="setPagination"
      @select-reference="setSelectReference"
      @close="closeLessonBrowseModal"
      @quiz-preview="openQuizPreview"
      @test-preview="openNoteTestPreview"
    />

    <!-- 퀴즈 미리보기 -->
    <QuizPreviewModal
      :open="isQuizPreviewModal.open"
      :quizList="selectReference.quizList"
      :currentPageIdx="currentIdx"
      @close="closeQuizPreview"
      @pagination="setPagination"
    />

    <!-- 쪽지시험 미리보기 -->
    <NoteTestPreviewModal
      :open="isNoteTestPreviewModal.open"
      :testList="selectReference.noteTestList"
      :currentPageIdx="currentIdx"
      @pagination="setPagination"
      @close="closeNoteTestPreview"
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
  },
  layout: 'EducationLayout',
  data() {
    return initialState()
  },
  methods: {
    openLessonAdd() {
      this.isLessonAdd = !this.isLessonAdd
    },

    openLessonChangeModal(data) {
      const newItem = this.jsonItem(data)
      this.selectLesson = newItem
      this.isLessonChange = true
    },

    closeLessonChangeModal() {
      this.isLessonChange = false
    },

    // 열람 데이터 초기 설정
    setSelectLesson(item) {
      this.setSelectFirstReference(item)
      return (this.selectLesson = item)
    },

    setSelectFirstReference(item) {
      this.selectReference = item.referenceList[0]
    },

    openLessonBrowseModal(item, prev) {
      this.setSelectLesson(item)
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

    openQuizPreview(page) {
      this[page] = false
      this.isQuizPreviewModal = {
        open: true,
        prevPage: page,
      }
    },

    closeQuizPreview() {
      this[this.isQuizPreviewModal.prevPage] = true
      this.isQuizPreviewModal = {
        open: false,
      }
    },

    openNoteTestPreview(page) {
      this[page] = false
      this.isNoteTestPreviewModal = {
        open: true,
        prevPage: page,
      }
    },

    closeNoteTestPreview() {
      this[this.isNoteTestPreviewModal.prevPage] = true
      this.isNoteTestPreviewModal = {
        open: false,
      }
    },

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

    // 자료 보기 페이지
    setSelectReference(reference) {
      console.log(reference, 'reference')
      this.selectReference = reference
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
      return (this.selectLesson.referenceList = filterItem)
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
    changeLesson({ target: { id, name, value, checked } }) {
      const isCheckbox =
        name === 'isOpenEducation' || name === 'isContinuedRegist'
      if (isCheckbox) return (this.selectLesson[name] = checked)
      else return (this.selectLesson[id] = value)
    },

    // 레슨 자료 보기
    openReferenceDetail(reference) {
      const list = this.jsonItem(reference)
      this.selectLesson = list
      // this.selectLesson = list
      // this.selectReference = list.referenceList
      // this.isLessonAdd = false
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
      const keywordList = [...this.selectLesson.keyword, value]
      this.pushKeyword = ''
      this.selectLesson.keyword = Array.from(new Set(keywordList))
    },

    // 수정 페이지키워드 삭제
    deleteChangePageKeyword(idx) {
      this.selectLesson.keyword.splice(idx, 1)
    },

    // 수정 페이지키워드 내용 변경
    changeChangePagePushKeyword({ target: { value } }) {
      this.pushKeyword = value
    },
  },
}
</script>
