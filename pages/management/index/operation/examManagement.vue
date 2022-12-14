<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <NavBox
        title1="선생님관리"
        title2="학생 관리"
        title3="반 관리"
        title4="시험관리"
        url1="/management/operation/teachermanagement"
        url2="/management/operation/studentmanagement"
        url3="/management/operation/classmanagement"
        url4="/management/operation/exammanagement"
      />

      <div class="tab-content depth03 ac_manage_exam">
        <div class="tab-pane active">
          <!-- 필터영역 -->
          <div class="search_section">
            <div class="box01">
              <div class="row">
                <div class="keyword_area left_area">
                  <div class="keyword_area_01">
                    <span
                      v-for="(item, idx) in filterTag"
                      :key="idx"
                      class="keyword"
                    >
                      <span class="keyword01-1">{{ item }}</span
                      ><span
                        class="x cursor"
                        @click="onClickDeleteFilterTag(idx)"
                      ></span>
                    </span>
                  </div>
                </div>
                <div class="right_area">
                  <div class="date_box inline_block">
                    {{ studentSearchDate.date_range_start }} -
                    {{ studentSearchDate.date_range_end }}
                  </div>
                  <button
                    class="btn icons_calendar_off"
                    @click="openDatePickerModalDesc"
                  ></button>
                  <div class="input-group input-search form-inline">
                    <input
                      type="text"
                      placeholder="학생 이름, 반 검색"
                      class="form-control"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                      ></button>
                    </div>
                  </div>
                  <button
                    class="btn btn_filter"
                    data-toggle="modal"
                    data-target="#modalExamFiter"
                  >
                    상세
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- /.필터영역 -->
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="left_area">
              <div class="dropdown form-inline">
                <!-- <select class="btn dropdown-toggle" @change="onChangeSort">
                  <option value="all" class="dropdown-item">전체</option>
                  <option value="highLesson" class="dropdown-item">
                    레슨 높은 순
                  </option>
                  <option value="lowLesson" class="dropdown-item">
                    레슨 낮은 순
                  </option>
                  <option value="highScore" class="dropdown-item">
                    점수 높은 순
                  </option>
                  <option value="lowScore" class="dropdown-item">
                    점수 낮은 순
                  </option>
                </select> -->
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ sortSelect }}
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" @click="onChangeSort">전체</a>
                  <a class="dropdown-item" @click="onChangeSort"
                    >레슨 높은 순</a
                  >
                  <a class="dropdown-item" @click="onChangeSort"
                    >레슨 낮은 순</a
                  >
                  <a class="dropdown-item" @click="onChangeSort"
                    >점수 높은 순</a
                  >
                  <a class="dropdown-item" @click="onChangeSort"
                    >점수 낮은 순</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- /.검색 영역 -->
          <!-- 테이블 영역 -->
          <div class="search_result">
            <table class="table table-borderless">
              <!-- 	<colgroup>
								<col width="10%">
								<col width="10%">
								<col width="12%">
								<col width="10%">
								<col width="10%">
								<col width="10%">
								<col width="10%">
								<col width="18%">
								<col width="10%">
							</colgroup> -->
              <thead>
                <tr>
                  <th class="th01">반</th>
                  <th class="th02">이름</th>
                  <th class="th03">강좌</th>
                  <th class="th04">레슨</th>
                  <th class="th05">유형</th>
                  <th class="th06">점수</th>
                  <th class="th07">반평균</th>
                  <th class="th08">응시일</th>
                  <th class="th09">응시인원</th>
                </tr>
              </thead>
            </table>
            <div class="tbl_overflow">
              <table class="table table-borderless">
                <!-- 	<colgroup>
									<col width="10%">
									<col width="10%">
									<col width="12%">
									<col width="10%">
									<col width="10%">
									<col width="10%">
									<col width="10%">
									<col width="18%">
									<col width="10%">
								</colgroup> -->
                <tbody>
                  <tr v-for="(item, idx) in examList" :key="idx">
                    <td class="td01">{{ item.class }}</td>
                    <td class="td02">{{ item.name }}</td>
                    <td class="td03">{{ item.course }}</td>
                    <td class="td04">레슨{{ item.lesson }}</td>
                    <td class="td05">
                      {{
                        item.fileType === 'quiz'
                          ? '퀴즈'
                          : item.fileType === 'test'
                          ? '쪽지시험'
                          : ''
                      }}
                    </td>
                    <td class="td06">
                      <a
                        class="cursor"
                        @click="onClickSelectExam(item, item.id)"
                      >
                        {{ item.score }}
                      </a>
                    </td>
                    <td class="td07">
                      <a
                        class="cursor"
                        @click="onClickSelectedAverage(item, item.id)"
                        >{{ item.average }}</a
                      >
                    </td>
                    <td class="td08">
                      <span>{{ item.date }}</span> <span>{{ item.time }}</span>
                    </td>
                    <td class="td09">
                      {{ item.personnel }}/{{ item.totalPersonnel }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- /.테이블 영역 -->
        </div>
      </div>
    </div>

    <!-- 상세검색 모달 -->
    <ExamFilterModal
      :tagList="tagList"
      :filterList="filterList"
      :filterOpen="filterDatePickerModalDesc"
      :filterRange="filterRange"
      :filterSearchDate="filterStudentSearchDate"
      @filter-select-range="filterSelectRange"
      @filter-modal-open="filterOpenDatePickerModalDesc"
      @filter-close="filterOnCloseDatePickerModalDesc"
      @filter-confirm="filterOnClickConfirmBtn"
      @all-check="onClickTagAllCheck"
      @add-tag="onClickTagList"
      @complete="onClickAddFilterTag"
    />
    <!-- 시험결과 모달 -->
    <ExamResult
      :open="openExamResult.open"
      :selectedExamInfo="selectedExamInfo"
      :examQuestion="examQuestion"
      :openDetail="openDetail"
      @open-detail="onClickOpenDetail"
      @close-detail="onClickCloseDetail"
      @close="onCloseExamResult"
      @setting-answer="onSettingClassAnswer"
    />
    <!-- 반평균 모달 -->
    <ClassAverage
      :open="openClassAverage.open"
      :selectedExamInfo="selectedExamInfo"
      :examQuestion="examQuestion"
      :openDetail="openDetail"
      @open-detail="onClickOpenDetail"
      @close-detail="onClickCloseDetail"
      @close="onCloseClassAverage"
    />

    <RangeDataPicker
      :open="datePickerModalDesc.open"
      @select-date="onClickConfirmBtn"
      @close="onCloseDatePickerModalDesc"
    />

    <RangeDataPicker
      :open="filterDatePickerModalDesc.open"
      @select-date="filterOnClickConfirmBtn"
      @close="filterOnCloseDatePickerModalDesc"
    />
  </div>
</template>

<script>
import NavBox from '@/components/operation/NavBox.vue'
import ExamFilterModal from '@/components/common/modal/operation/ExamFilterModal.vue'
import ExamResult from '@/components/common/modal/operation/ExamResult.vue'
import ClassAverage from '@/components/common/modal/operation/ClassAverage.vue'
import RangeDataPicker from '@/components/common/modal/RangeDataPicker.vue'

export default {
  name: 'TestManagement',
  components: {
    NavBox,
    ExamFilterModal,
    ExamResult,
    ClassAverage,
    RangeDataPicker,
  },
  data() {
    return {
      examList: [
        {
          id: 1,
          class: '심화A반',
          name: '홍길동',
          course: '영어리딩심화',
          lesson: 3,
          fileType: 'quiz',
          score: 65,
          average: 80,
          date: '2022.01.01',
          time: '00:00:00',
          personnel: 9,
          totalPersonnel: 99,
          examResult: [
            {
              num: 1,
              check: 0,
            },
            {
              num: 2,
              check: 0,
            },
            {
              num: 3,
              check: 0,
            },
            {
              num: 4,
              check: 1,
            },
            {
              num: 5,
              check: 0,
            },
            {
              num: 6,
              check: 1,
            },
          ],
        },
        {
          id: 2,
          class: '심화B반',
          name: '홍동길',
          course: '영어리딩심화',
          lesson: 1,
          fileType: 'test',
          score: 73,
          average: 76,
          date: '2022.11.22',
          time: '00:00:00',
          personnel: 9,
          totalPersonnel: 9,
          examResult: [
            {
              num: 1,
              check: 0,
            },
            {
              num: 2,
              check: 3,
            },
            {
              num: 3,
              check: 2,
            },
            {
              num: 4,
              check: 1,
            },
          ],
        },
        {
          id: 3,
          class: '심화C반',
          name: '홍길순',
          course: '영어리딩심화',
          lesson: 2,
          fileType: 'test',
          score: 56,
          average: 63,
          date: '2022.11.29',
          time: '00:00:00',
          personnel: 4,
          totalPersonnel: 15,
          examResult: [
            {
              id: 0,
              num: 1,
              check: 0,
            },
            {
              id: 1,
              num: 2,
              check: 1,
            },
          ],
        },
      ],

      exam: [
        {
          id: 0,
          name: '영어 단어 퀴즈.quiz',
          subject: '영어',
          desc: '등록한 자료 1',
          keyword: ['국어', '수학'],
          registrant: '등록인',
          savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          isOpenEducation: true,
          isOpenReference: true,
          fileName: '',
          fileDivision: '교육기관',
          fileType: 'quiz',
          uploadType: 'quiz',
          fileVolume: '',
          createAt: '',
          quizList: [
            {
              id: 0,
              problem:
                '<p><img src="data:image/png;base64,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"></p>',
              oxAnswer: 0,
              dificultade: 1,
              limitTime: '3분',
              quizType: 0,
              shortAnswer: '123',
              subjectiveAnswer: '123',
              shortWrongAnswer: '123',
            },
            {
              id: 1,
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
          dbIdx: 1,
          type: 'franchise',
        },
        {
          id: 1,
          name: '수학 쪽지시험.test',
          subject: '수학',
          desc: '등록한 자료 1',
          keyword: ['국어', '수학'],
          registrant: '등록인',
          savePath: 'https://sciencelove.com/725',
          saveFolder: '',
          isOpenEducation: true,
          isOpenReference: true,
          fileName: '',
          fileDivision: '교육기관',
          fileType: 'test',
          uploadType: 'test',
          fileVolume: '',
          createAt: '',
          quizList: [],
          questionList: [
            {
              id: 0,
              problem:
                '<p class="ql-align-center"><img src="data:image/png;base64,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"></p>',
              exampleList: [
                {
                  id: '',
                  example:
                    '<p><img src="data:image/png;base64,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"></p>',
                },
                {
                  id: '',
                  example:
                    '<p><img src="data:image/png;base64,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"></p>',
                },
                {
                  id: '',
                  example:
                    '<p><img src="data:image/png;base64,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"></p>',
                },
                {
                  id: '',
                  example:
                    '<p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAMAAAFVDZ+0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB1UExURQAAAP4AAP8AAP4AAP4AAP8AAP4AAP4AAP8AAP4AAP4AAP4AAP4AAP8AAP4AAP4AAP8AAP4AAP4AAP4AAP8AAP4AAP8AAP4AAP4AAP4AAP8AAP4AAP4AAP4AAP8AAP4AAP8AAP4AAP4AAP8AAP4AAP8AAP4AAPnU2EQAAAAndFJOUwBoCNccEIskGOcs7zQo96tAVMPLBNNg24d0FOPrl3ifgPtIPLf/vyFRMpMAAAAJcEhZcwAAFxEAABcRAcom8z8AAADHSURBVChTXZBXFoJAEARHFBOIOSEKhvb+R3RCi0h9sF29s8BbCbbQB+zxsGDZxJIvwDQW4BqVMY7tGC3iiI2sY5KHBQMGQ+sloyQ+dQnJXRSTG7Mi8mJyfDZ+s2XwbR3gxKQsf0cUe8GWWWZmSEJGLijCQoDcZE2JFzEqZ5Ero9HdAl42+2U33O8Ye6QVUKWUPyZ2nygm1A4r/4DyZNFy4IZyYEUa1k7D0qlZkpq1smHV8uZGcmTR4ej3WGbUP7JSZH6n9LgvPi1+Kz6lcBoiAAAAAElFTkSuQmCC"></p>',
                },
              ],
              dificultade: 0,
              limitTime: '',
              answer: 1,
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
            },
            {
              id: 2,
              problem: '<p>2번 문제</p>',
              exampleList: [
                { id: '', example: '<p>답 5임</p>' },
                { id: '', example: '<p>답 6임</p>' },
                { id: '', example: '<p>답 7임</p>' },
                { id: '', example: '<p>답 8임</p>' },
              ],
              dificultade: 1,
              limitTime: '',
              answer: 1,
            },
            {
              id: 3,
              problem: '<p>2번 문제</p>',
              exampleList: [
                { id: '', example: '<p>답 5임</p>' },
                { id: '', example: '<p>답 6임</p>' },
                { id: '', example: '<p>답 7임</p>' },
                { id: '', example: '<p>답 8임</p>' },
              ],
              dificultade: 2,
              limitTime: '',
              answer: 3,
            },
          ],
          isLeaf: false,
          dbIdx: 2,
          type: 'institution',
        },
        {
          id: 2,
          name: '수학 쪽지시험.test',
          subject: '수학',
          desc: '등록한 자료 1',
          keyword: ['국어', '수학'],
          registrant: '등록인',
          savePath: 'https://sciencelove.com/725',
          isOpenEducation: true,
          isOpenReference: true,
          fileName: '',
          fileDivision: '교육기관',
          fileType: 'test',
          uploadType: 'test',
          fileVolume: '',
          createAt: '',
          questionList: [
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
              answer: 1,
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
            },
          ],
          isLeaf: false,
          dbIdx: 3,
          type: 'institution',
        },
      ],
      examQuestion: {
        id: 0,
        name: '수학 쪽지시험.test',
        subject: '수학',
        desc: '등록한 자료 1',
        keyword: ['국어', '수학'],
        registrant: '등록인',
        savePath: 'https://sciencelove.com/725',
        isOpenEducation: true,
        isOpenReference: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'test',
        uploadType: 'test',
        fileVolume: '',
        createAt: '',
        questionList: [
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
            answer: 1,
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
          },
        ],
        isLeaf: false,
        dbIdx: 1,
        type: 'institution',
      },
      selectedExamInfo: {
        id: 1,
        class: '심화A반',
        name: '홍길순',
        course: '영어리딩심화',
        lesson: 2,
        fileType: 'test',
        score: 56,
        average: 63,
        date: '2022.11.29',
        time: '00:00:00',
        personnel: 4,
        totalPersonnel: 15,
        examResult: [
          {
            id: 0,
            num: 1,
            check: 0,
          },
          {
            id: 1,
            num: 2,
            check: 1,
          },
        ],
      },
      openDetail: null,

      sortSelect: '전체',

      filterList: {
        class: ['심화A반', '심화B반', '심화C반'],
        subject: ['수학', '국어', '영어', '사회'],
        course: ['영어리딩심화', '영어리딩기초'],
        exam: ['쪽지시험', '퀴즈'],
        student: ['홍길동', '홍길순'],
      },
      tagList: {
        classList: [],
        subjectList: [],
        courseList: [],
        examList: [],
        studentList: [],
      },
      filterTag: ['영어리딩심화', '영어리딩기초'],

      datePickerModalDesc: {
        open: false,
      },
      studentSearchDate: {
        date_range_start: `${new Date().getFullYear()}.${(
          '0' +
          (new Date().getMonth() + 1)
        ).slice(-2)}.${('0' + new Date().getDate()).slice(-2)}`,
        date_range_end: `${new Date().getFullYear()}.${(
          '0' +
          (new Date().getMonth() + 1)
        ).slice(-2)}.${('0' + new Date().getDate()).slice(-2)}`,
      },
      range: {
        start: new Date(),
        end: new Date(),
      },

      filterDatePickerModalDesc: {
        open: false,
      },
      filterStudentSearchDate: {
        date_range_start: `${new Date().getFullYear()}.${(
          '0' +
          (new Date().getMonth() + 1)
        ).slice(-2)}.${('0' + new Date().getDate()).slice(-2)}`,
        date_range_end: `${new Date().getFullYear()}.${(
          '0' +
          (new Date().getMonth() + 1)
        ).slice(-2)}.${('0' + new Date().getDate()).slice(-2)}`,
      },
      filterRange: {
        start: new Date(),
        end: new Date(),
      },

      openExamResult: {
        open: false,
      },
      openClassAverage: {
        open: false,
      },

      number: ['①', '②', '③', '④'],
    }
  },
  computed: {
    // onSettingAnswerNumber(item) {
    //   for (let i = 0; i<4; i++) {
    //   }
    //   return
    // },
  },
  methods: {
    // 모달
    onOpenExamResult() {
      this.openExamResult.open = true
    },
    onCloseExamResult() {
      this.openExamResult.open = false
    },
    onOpenClassAverage() {
      this.openClassAverage.open = true
    },
    onCloseClassAverage() {
      this.openClassAverage.open = false
    },

    // 날짜 지정
    selectRange(e) {
      this.range.start = e.start
      this.range.end = e.end
    },
    openDatePickerModalDesc() {
      this.datePickerModalDesc.open = true
    },
    onCloseDatePickerModalDesc() {
      this.datePickerModalDesc.open = false
    },
    changeDateFormat(date) {
      const year = date.getFullYear()
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      const day = ('0' + date.getDate()).slice(-2)
      const dateString = year + '.' + month + '.' + day
      return dateString
    },
    onClickConfirmBtn({ start, end }) {
      const setDate = (date) =>
        `${date?.getFullYear()}.${date?.getMonth() + 1}.${date?.getDate()}`
      this.studentSearchDate.date_range_start = setDate(start)
      this.studentSearchDate.date_range_end = setDate(end)
      this.datePickerModalDesc.open = false
    },

    // 상세검색 날짜 지정
    filterSelectRange(e) {
      this.filterRange.start = e.start
      this.filterRange.end = e.end
      // console.log(this.range)
    },
    filterOpenDatePickerModalDesc() {
      this.filterDatePickerModalDesc.open = true
    },
    filterOnCloseDatePickerModalDesc() {
      this.filterDatePickerModalDesc.open = false
    },
    filterOnClickConfirmBtn({ start, end }) {
      const setDate = (date) =>
        `${date?.getFullYear()}.${date?.getMonth() + 1}.${date?.getDate()}`
      this.filterStudentSearchDate.date_range_start = setDate(start)
      this.filterStudentSearchDate.date_range_end = setDate(end)
      this.filterDatePickerModalDesc.open = false
    },

    // 시험결과 상세버튼
    onClickOpenDetail(idx) {
      this.openDetail = idx
    },
    onClickCloseDetail() {
      this.openDetail = null
    },

    // 시험결과에 넣을 데이터
    onClickSelectExam(data, id) {
      this.openDetail = null
      this.selectedExamInfo = data
      this.examQuestion = this.exam[id - 1]

      this.onOpenExamResult()
    },
    // 시험 평균에 넣을 데이터
    onClickSelectedAverage(data, id) {
      this.openDetail = null
      this.selectedExamInfo = data
      this.examQuestion = this.exam[id - 1]

      this.onOpenClassAverage()
    },

    // 정렬
    onChangeSort(e) {
      this.sortSelect = e.target.innerText
      if (e.target.innerText === '레슨 높은 순') {
        this.examList = this.examList.sort((a, b) => {
          return b.lesson - a.lesson
        })
      } else if (e.target.innerText === '레슨 낮은 순') {
        this.examList = this.examList.sort((a, b) => {
          return a.lesson - b.lesson
        })
      } else if (e.target.innerText === '점수 높은 순') {
        this.examList = this.examList.sort((a, b) => {
          return b.score - a.score
        })
      } else if (e.target.innerText === '점수 낮은 순') {
        this.examList = this.examList.sort((a, b) => {
          return a.score - b.score
        })
      } else {
        this.examList = this.examList.sort((a, b) => {
          return a.id - b.id
        })
      }
    },

    // 필터 태그
    onClickTagAllCheck(title) {
      if (title === 'classList') {
        this.tagList.classList = []
      } else if (title === 'subjectList') {
        this.tagList.subjectList = []
      } else if (title === 'courseList') {
        this.tagList.courseList = []
      } else if (title === 'examList') {
        this.tagList.examList = []
      } else {
        this.tagList.studentList = []
      }
      console.log(this.tagList.classList)
    },
    onClickTagList(text, title, e) {
      if (title === 'classList') {
        if (this.tagList.classList.includes(text)) {
          this.tagList.classList = this.tagList.class.filter(
            (item) => item !== text
          )
        } else {
          console.log(text)
          this.tagList.classList.push(text)
          if (this.tagList.classList.length === this.filterList.class.length) {
            this.tagList.classList = []
            e.target.checked = false
          }
        }
      } else if (title === 'subjectList') {
        if (this.tagList.subjectList.includes(text)) {
          this.tagList.subjectList = this.tagList.subjectList.filter(
            (item) => item !== text
          )
        } else {
          console.log(text)
          this.tagList.subjectList.push(text)
          if (
            this.tagList.subjectList.length === this.filterList.subject.length
          ) {
            this.tagList.subjectList = []
            e.target.checked = false
          }
        }
      } else if (title === 'courseList') {
        if (this.tagList.courseList.includes(text)) {
          this.tagList.courseList = this.tagList.courseList.filter(
            (item) => item !== text
          )
        } else {
          console.log(text)
          this.tagList.courseList.push(text)
          if (
            this.tagList.courseList.length === this.filterList.course.length
          ) {
            this.tagList.courseList = []
            e.target.checked = false
          }
        }
      } else if (title === 'examList') {
        if (this.tagList.examList.includes(text)) {
          this.tagList.examList = this.tagList.examList.filter(
            (item) => item !== text
          )
        } else {
          console.log(text)
          this.tagList.examList.push(text)
          if (this.tagList.examList.length === this.filterList.exam.length) {
            this.tagList.examList = []
            e.target.checked = false
          }
        }
      } else if (title === 'studentList') {
        if (this.tagList.studentList.includes(text)) {
          this.tagList.studentList = this.tagList.studentList.filter(
            (item) => item !== text
          )
        } else {
          console.log(text)
          this.tagList.studentList.push(text)
          if (
            this.tagList.studentList.length === this.filterList.student.length
          ) {
            this.tagList.studentList = []
            e.target.checked = false
          }
        }
      }
      console.log(
        this.tagList.subjectList.length,
        this.filterList.subject.length
      )
      console.log(this.tagList)
    },
    onClickAddFilterTag() {
      if (
        this.tagList.classList.length !== 0 ||
        this.tagList.subjectList.length !== 0 ||
        this.tagList.courseList.length !== 0 ||
        this.tagList.examList.length !== 0 ||
        this.tagList.studentList.length !== 0
      ) {
        for (const value in this.tagList.classList) {
          this.filterTag.push(this.tagList.classList[value])
        }
        for (const value in this.tagList.subjectList) {
          this.filterTag.push(this.tagList.subjectList[value])
        }
        for (const value in this.tagList.courseList) {
          this.filterTag.push(this.tagList.courseList[value])
        }
        for (const value in this.tagList.examList) {
          this.filterTag.push(this.tagList.examList[value])
        }
        for (const value in this.tagList.studentList) {
          this.filterTag.push(this.tagList.studentList[value])
        }

        this.tagList = {
          classList: [],
          subjectList: [],
          courseList: [],
          examList: [],
          studentList: [],
        }
      }
    },
    onClickDeleteFilterTag(idx) {
      this.filterTag.splice(idx, 1)
    },

    onSettingClassAnswer(answer, id, idx) {
      let result = ''
      console.log(answer, id)
      if (answer === id) {
        result = 'blue'
      } else if (
        this.selectedExamInfo.examResult[
          Math.ceil(this.selectedExamInfo.examResult.length / 2) + idx
        ].check !== id &&
        id !== answer
      ) {
        result = ''
      } else {
        result = 'red'
      }

      console.log(result)
      return result
    },
  },
}
</script>

<style scoped>
.ac_manage_exam .keyword {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 28px;
  background: #d1dbff;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.modal-index {
  z-index: 999 !important;
}

.cursor {
  cursor: pointer;
}
</style>
