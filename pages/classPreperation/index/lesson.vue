<template>
  <div>
    <PageHeader title="레슨" />

    <div class="tab-content depth03 ac_manage_dtr">
      <div class="tab-pane active">
        <!-- 컨트롤 버튼 영역 -->
        <div class="search_section">
          <div class="left_area">
            <div class="btn btn_crud_default" @click="copyData">복사</div>
            <button class="btn btn_crud_default" @click="pasteData">
              붙여넣기
            </button>
            <button class="btn btn_crud_default" @click="delData">삭제</button>
          </div>
          <div class="right_area">
            <button
              class="btn btn_crud_point"
              data-toggle="modal"
              data-target="#modalCuriRegi"
              @click="openLessonAdd"
            >
              등록
            </button>
          </div>
        </div>
        <!-- /.컨트롤 버튼 영역 -->

        <!-- [개발참조] 레슨 : 컨텐츠구성 자료실과 동일 -->
        <!-- 2단 분류 컨텐츠 -->
        <div class="divide_section">
          <!-- 왼쪽 영역 -->
          <div class="divide_area left">
            <!-- 탭 컨텐츠 -->
            <ul id="myTab" class="nav nav-tabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  id="grade-tab"
                  class="nav-link active"
                  data-toggle="tab"
                  data-target="#institute"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <span class="icon_institute"></span>
                  교육기관
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  id="class-tab"
                  class="nav-link"
                  data-toggle="tab"
                  data-target="#franchise"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <span class="icon_fran"></span>
                  프랜차이즈
                </button>
              </li>
            </ul>

            <div id="myTabContent" class="tab-content">
              <!-- 탭 내용01 -->
              <div
                id="institute"
                class="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="grade-tab"
              >
                <TreeView
                  ref="institution"
                  :dataList="receiveInstitutionLessonData"
                  :editable="identity == 'master' ? true : false"
                  :identity="identity"
                  :pidNum="0"
                  @copyDataCallBack="copyDataCallBack"
                />
              </div>
              <!-- /.탭 내용01 -->
              <!-- 탭 내용02 -->
              <div
                id="franchise"
                class="tab-pane fade"
                role="tabpanel"
                aria-labelledby="class-tab"
              >
                <TreeView
                  ref="franchise"
                  :dataList="receiveFranchiseLessonData"
                  :editable="identity == 'master' ? true : false"
                  :identity="identity"
                  :pidNum="1000"
                  @copyDataCallBack="copyDataCallBack"
                />
              </div>
              <!-- /.탭 내용02 -->
            </div>
            <!-- /.탭 컨텐츠 -->
          </div>
          <!-- /.왼쪽 영역 -->

          <!-- 오른쪽 영역 -->
          <div class="divide_area right">
            <!-- 탭 컨텐츠 -->
            <ul id="myTab" class="nav nav-tabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  id="grade-tab"
                  class="nav-link active"
                  data-toggle="tab"
                  data-target="#mydata"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <span class="icon_mydata"></span>
                  내 레슨
                </button>
              </li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <!-- 탭 내용01 -->
              <div
                id="mydata"
                class="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="grade-tab"
              >
                <TreeView
                  ref="curriculum"
                  :expanded="false"
                  :dataList="receiveLessonList"
                  identity="master"
                  :pidNum="2000"
                />
              </div>
              <!-- /.탭 내용01 -->
            </div>
            <!-- /.탭 컨텐츠 -->
          </div>
          <!-- /.오른쪽 영역 -->
        </div>
        <!-- /.2단 분류 컨텐츠 -->
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
    <LessonChangeModal :open="isLessonChange" @close="closeLessonChangeModal" />

    <!-- 레슨 열람 -->
    <LessonBrowseModal
      :open="isLessonBrowse.open"
      :lessonItem="lessonItem"
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

    <button @click="openLessonChangeModal">레슨변경</button>
    <button @click="openLessonBrowseModal">레슨열람</button>
  </div>
</template>

<script>
import TreeView from '~/components/common/custom/CustomReferenceTreeView.vue'
import LessonAddModal from '~/components/common/modal/lesson/LessonAddModal.vue'
import LessonBrowseModal from '~/components/common/modal/lesson/LessonBrowseModal.vue'
import LessonChangeModal from '~/components/common/modal/lesson/LessonChangeModal.vue'
import NoteTestPreviewModal from '~/components/common/modal/reference/NoteTestPreviewModal.vue'
import QuizPreviewModal from '~/components/common/modal/reference/QuizPreviewModal.vue'
import PageHeader from '~/components/common/PageHeader.vue'

export default {
  name: 'LessonPage',
  components: {
    PageHeader,
    TreeView,
    LessonAddModal,
    LessonChangeModal,
    LessonBrowseModal,
    QuizPreviewModal,
    NoteTestPreviewModal,
  },
  layout: 'EducationLayout',
  data() {
    return {
      identity: 'teacher',
      isLesson: false,
      isLessonAdd: false,
      isLessonChange: false,
      isLessonBrowse: { open: false, prevPage: '' },
      pushKeyword: '',
      copyCheckData: [],
      isQuizPreviewModal: {
        open: false,
        prevPage: '',
      },
      isNoteTestPreviewModal: {
        open: false,
        prevPage: '',
      },
      receiveInstitutionLessonData: [
        {
          name: '마포 학원',
          children: [
            {
              name: '국어',
              children: [
                {
                  name: '1단원',
                  children: [
                    {
                      name: '일산화탄소1.lesson',
                      type: 'institution',
                      dbIdx: 1,
                    },
                    {
                      name: '일산화탄소2.lesson',
                      type: 'institution',
                      dbIdx: 2,
                    },
                    {
                      name: '일산화탄소3.lesson',
                      type: 'institution',
                      dbIdx: 3,
                    },
                    {
                      name: '일산화탄소4.lesson',
                      type: 'institution',
                      dbIdx: 4,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      receiveFranchiseLessonData: [
        {
          name: '서울 학원',
          children: [
            {
              name: '과학',
              children: [
                {
                  name: '1단원',
                  children: [
                    {
                      name: '일산화탄소1.lesson',
                      type: 'franchise',
                      dbIdx: 1,
                    },
                    {
                      name: '일산화탄소2.lesson',
                      type: 'franchise',
                      dbIdx: 2,
                    },
                    {
                      name: '일산화탄소3.lesson',
                      type: 'franchise',
                      dbIdx: 3,
                    },
                    {
                      name: '일산화탄소4.lesson',
                      type: 'franchise',
                      dbIdx: 4,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      receiveLessonList: [
        {
          name: '국어',
          children: [
            {
              name: '1단원',
              children: [
                {
                  name: '사투리 작문1.lesson',
                  type: 'institution',
                },
                {
                  name: '사투리 작문2.lesson',
                  type: 'franchise',
                },
              ],
            },
            {
              name: '2단원',
              children: [
                {
                  name: '부산 사투리 작문1.lesson',
                  type: 'curriculum',
                },
                {
                  name: '부산 사투리 작문2.lesson',
                  type: 'institution',
                },
                {
                  name: '부산 사투리 작문2.lesson',
                  type: 'franchise',
                },
                {
                  name: '부산 사투리 작문2.lesson',
                  type: 'institution',
                },
                {
                  name: '부산 사투리 작문2.lesson',
                  type: 'franchise',
                },
                {
                  name: '네이버란.lesson',
                  type: 'curriculum',
                },
              ],
            },
          ],
        },
      ],
      createLessonData: {
        name: '',
        educationalGoals: '',
        desc: '',
        savePath: '',
        keyword: [],
        isOpenEducation: false,
        isContinuedRegist: false,
        createAt: '',
        referenceList: [],
      },
      receiveInstitutionData: [
        {
          name: '마포 학원',
          children: [
            {
              name: '국어',
              children: [
                {
                  name: '1단원',
                  children: [
                    {
                      id: 0,
                      name: '국어학습자료 애니메이션.mp4',
                      subject: '국어',
                      desc: '등록한 자료 1',
                      keyword: ['국어', '수학'],
                      registrant: '등록인',
                      savePath:
                        'https://media.w3.org/2010/05/sintel/trailer.mp4',
                      isOpenEducation: true,
                      isContinueRegister: true,
                      fileName: '',
                      fileDivision: '교육기관',
                      fileType: 'video/mp4',
                      uploadType: 'video',
                      fileVolume: '',
                      createAt: '',
                      dbIdx: 1,
                      type: 'institution',
                    },
                    {
                      id: 0,
                      name: '국어학습자료 애니메이션2.mp4',
                      subject: '국어',
                      desc: '등록한 자료 2',
                      keyword: ['국어', '수학'],
                      registrant: '등록인',
                      savePath:
                        'https://media.w3.org/2010/05/sintel/trailer.mp4',
                      isOpenEducation: true,
                      isContinueRegister: true,
                      fileName: '',
                      fileDivision: '교육기관',
                      fileType: 'video/mp4',
                      uploadType: 'video',
                      fileVolume: '',
                      createAt: '',
                      dbIdx: 2,
                      type: 'institution',
                    },
                    {
                      id: 0,
                      name: '국어학습자료 애니메이션3.mp4',
                      subject: '국어',
                      desc: '등록한 자료 3',
                      keyword: ['국어', '수학'],
                      registrant: '등록인',
                      savePath:
                        'https://media.w3.org/2010/05/sintel/trailer.mp4',
                      isOpenEducation: true,
                      isContinueRegister: true,
                      fileName: '',
                      fileDivision: '교육기관',
                      fileType: 'video/mp4',
                      uploadType: 'video',
                      fileVolume: '',
                      createAt: '',
                      dbIdx: 3,
                      type: 'institution',
                    },
                    {
                      id: 0,
                      name: '국어학습자료 애니메이션4.mp4',
                      subject: '국어',
                      desc: '등록한 자료 4',
                      keyword: ['국어', '수학'],
                      registrant: '등록인',
                      savePath:
                        'https://media.w3.org/2010/05/sintel/trailer.mp4',
                      isOpenEducation: true,
                      isContinueRegister: true,
                      fileName: '',
                      fileDivision: '교육기관',
                      fileType: 'video/mp4',
                      uploadType: 'video',
                      fileVolume: '',
                      createAt: '',
                      dbIdx: 4,
                      type: 'institution',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      receiveFranchiseData: [
        {
          name: '서울 학원',
          children: [
            {
              name: '과학',
              children: [
                {
                  name: '1단원',
                  children: [
                    {
                      name: '일산화탄소1.mp4',
                      type: 'franchise',
                      dbIdx: 1,
                    },
                    {
                      name: '일산화탄소2.mp4',
                      type: 'franchise',
                      dbIdx: 2,
                    },
                    {
                      name: '일산화탄소3.mp4',
                      type: 'franchise',
                      dbIdx: 3,
                    },
                    {
                      name: '일산화탄소4.mp4',
                      type: 'franchise',
                      dbIdx: 4,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      lessonItem: {
        title: '3-1반 수업',
        desc: '3-1반 전체 수업 내용',
        role: '3-1반 학생들의 평균적인 이해를 도와줄 수 있다.',
        keyword: ['국어', '수학', '영어', '사회'],
        isOpen: true,
        type: '프랜차이즈',
        savePath: '수학>대단원>피타고라스',
        createAt: '2022.05.03',
        ragistrant: '홍길남',
        subject: '수학',
        referenceList: [
          {
            id: 0,
            name: '국어학습자료 애니메이션.mp4',
            subject: '국어',
            desc: '등록한 자료 1',
            keyword: ['국어', '수학'],
            registrant: '등록인',
            savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
            isOpenEducation: true,
            isContinueRegister: true,
            fileName: '',
            fileDivision: '교육기관',
            fileType: 'video/mp4',
            uploadType: 'video',
            fileVolume: '',
            createAt: '',
            dbIdx: 1,
            type: 'institution',
          },
          {
            id: 1,
            name: '수학 학습자료.pdf',
            subject: '수학',
            desc: '등록한 자료 2',
            keyword: ['국어', '수학'],
            registrant: '등록인',
            savePath:
              'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
            isOpenEducation: true,
            isContinueRegister: true,
            fileName: '',
            fileDivision: '교육기관',
            fileType: 'application/pdf',
            uploadType: 'pdf',
            fileVolume: '',
            createAt: '',
            isLeaf: false,
            dbIdx: 2,
            type: 'franchise',
          },
          {
            id: 2,
            name: '영어 단어 퀴즈.quiz',
            subject: '영어',
            desc: '등록한 자료 1',
            keyword: ['국어', '수학'],
            registrant: '등록인',
            savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
            isOpenEducation: true,
            isContinueRegister: true,
            fileName: '',
            fileDivision: '교육기관',
            fileType: 'quiz',
            uploadType: 'quiz',
            fileVolume: '',
            createAt: '',
            quizList: [
              {
                id: 0,
                problem: '<p>asdfaaaaasdf</p>',
                oxAnswer: 0,
                dificultade: 1,
                limitTime: '3분',
                quizType: 0,
                shortAnswer: '123',
                subjectiveAnswer: '123',
                shortWrongAnswer: '123',
              },
              {
                id: 2,
                problem: '<p>asdggggg</p>',
                dificultade: 0,
                limitTime: '5분',
                quizType: 0,
                oxAnswer: 0,
                shortAnswer: '234',
                subjectiveAnswer: '234',
                shortWrongAnswer: '234',
              },
              {
                id: 3,
                problem: '<p>234242242424</p>',
                dificultade: 0,
                limitTime: '2분',
                quizType: 0,
                oxAnswer: 0,
                shortAnswer: '345',
                subjectiveAnswer: '345',
                shortWrongAnswer: '345',
              },
              {
                id: 4,
                problem: '<p>555555555</p>',
                dificultade: 0,
                limitTime: '4분',
                quizType: 0,
                oxAnswer: 0,
                shortAnswer: '456',
                subjectiveAnswer: '456',
                shortWrongAnswer: '456',
              },
              {
                id: 5,
                problem: '<p>asx c</p>',
                dificultade: 0,
                limitTime: '5분',
                quizType: 0,
                oxAnswer: 0,
                shortAnswer: '567',
                subjectiveAnswer: '567',
                shortWrongAnswer: '567',
              },
            ],
            isLeaf: false,
            dbIdx: 3,
            type: 'franchise',
          },
          {
            id: 3,
            name: '사회 쪽지시험 영상.youtube',
            subject: '사회',
            desc: '등록한 자료 1',
            keyword: ['국어', '수학'],
            registrant: '등록인',
            savePath: 'https://www.youtube.com/embed/1CYbySbtyF0',
            isOpenEducation: true,
            isContinueRegister: true,
            fileName: '',
            fileDivision: '교육기관',
            fileType: 'youtube',
            uploadType: 'youtube',
            fileVolume: '',
            createAt: '',
            isLeaf: false,
            dbIdx: 4,
            type: 'institution',
          },
          {
            id: 4,
            name: '과학 사이트 참고용.url',
            subject: '과학',
            desc: '등록한 자료 1',
            keyword: ['국어', '수학'],
            registrant: '등록인',
            savePath: 'https://sciencelove.com/725',
            isOpenEducation: true,
            isContinueRegister: true,
            fileName: '',
            fileDivision: '교육기관',
            fileType: 'test',
            uploadType: 'url',
            fileVolume: '',
            createAt: '',
            isLeaf: false,
            dbIdx: 5,
            type: 'franchise',
          },
          {
            id: 5,
            name: '수학 쪽지시험.test',
            subject: '수학',
            desc: '등록한 자료 1',
            keyword: ['국어', '수학'],
            registrant: '등록인',
            savePath: 'https://sciencelove.com/725',
            isOpenEducation: true,
            isContinueRegister: true,
            fileName: '',
            fileDivision: '교육기관',
            fileType: 'test',
            uploadType: 'test',
            fileVolume: '',
            createAt: '',
            noteTestList: [
              {
                id: 0,
                problem: '<p>1번 문제</p>',
                exampleList: [
                  { id: '', example: '<p>답 1임</p>' },
                  { id: '', example: '<p>답 2임</p>' },
                  { id: '', example: '<p>답 3임</p>' },
                  { id: '', example: '<p>답 4임</p>' },
                ],
                dificultade: 0,
                limitTime: '',
                answer: 0,
                isCommentary: true,
                commentary: '',
              },
              {
                id: 1,
                problem: '<p>2번 문제</p>',
                exampleList: [
                  { id: '', example: '<p>답 5임</p>' },
                  { id: '', example: '<p>답 6임</p>' },
                  { id: '', example: '<p>답 7임</p>' },
                  { id: '', example: '<p>답 8임</p>' },
                ],
                dificultade: 2,
                limitTime: '',
                answer: 2,
                isCommentary: true,
                commentary: '',
              },
            ],
            isLeaf: false,
            dbIdx: 6,
            type: 'institution',
          },
        ],
      },
      selectReference: {},
      currentIdx: 0,
    }
  },
  methods: {
    openLessonAdd() {
      this.isLessonAdd = !this.isLessonAdd
    },

    openLessonChangeModal() {
      this.isLessonChange = true
    },

    closeLessonChangeModal() {
      this.isLessonChange = false
    },

    // 열람 데이터 초기 설정
    setSelectAndFirstReference(item) {
      if (item) {
        return (this.selectReference = item)
      } else {
        return (this.selectReference = this.lessonItem.referenceList[0])
      }
    },

    openLessonBrowseModal(prev, item) {
      this.setSelectAndFirstReference(item)
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
        this.$refs.institution.copyData()
      } else {
        this.$refs.franchise.copyData()
      }
    },

    pasteData() {
      this.$refs.curriculum.pasteData(this.copyCheckData)
    },

    delData() {
      this.$refs.curriculum.delData()
    },

    copyDataCallBack(copyData) {
      this.copyCheckData = copyData
      console.log(this.copyCheckData)
    },

    // 자료 보기 페이지
    setSelectReference(reference) {
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

    // 레슨 자료 보기
    openReferenceDetail(reference) {
      console.log(reference)
      const list = this.jsonItem(reference)
      this.openLessonBrowseModal('isLessonAdd')
      this.selectReference = list
      this.isLessonAdd = false
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
  height: 349px;
}
.main > ul {
  display: none;
}
</style>
