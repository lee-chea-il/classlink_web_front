<template>
  <div ref="generatePdf">
    <PageHeader title="자료실" />
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
            <div class="input-group input-search form-inline">
              <input
                type="text"
                placeholder="검색어 입력"
                class="form-control"
              />
              <div class="input-group-append">
                <button
                  class="btn icons_search_off"
                  type="button"
                  data-toggle="modal"
                  data-target="#modalDatafilterResult"
                  data-dismiss="modal"
                ></button>
              </div>
            </div>
            <button
              class="btn btn_filter"
              data-toggle="modal"
              data-target="#modalDatafilter"
            >
              필터
            </button>
            <button
              class="btn btn_crud_point"
              data-toggle="modal"
              data-target="#modalDataregi"
            >
              등록
            </button>
          </div>
        </div>
        <!-- /.컨트롤 버튼 영역 -->

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
                <ReferenceTreeView
                  ref="institution"
                  :dataList="receiveInstitutionData"
                  :editable="identity == 'master' ? true : false"
                  :identity="identity"
                  :pidNum="0"
                  @file-view="onClick"
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
                <ReferenceTreeView
                  ref="franchise"
                  :dataList="receiveFranchiseData"
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
                  내 자료
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
                <ReferenceTreeView
                  ref="curriculum"
                  :expanded="false"
                  :dataList="receiveCurriculumData"
                  identity="master"
                  :pidNum="2000"
                />
                <br />
                <br />
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

    <!-- 등록 파일 선택 -->
    <ReferenceSelectModal
      :uploadType="uploadType"
      @add-quiz="onOpenQuizAddModal"
      @add-test="onOpenNoteTestAddModal"
    />

    <!-- 파일 등록 (동영상,문서,유튜브,url) -->
    <ReferenceAddModal
      :open="isReferenceAddModal"
      :uploadType="uploadType"
      :uploadFile="uploadFile"
      :reference="reference"
      :pushKeyword="pushKeyword"
      @change-keyword="changePushKeyword"
      @change-input="onChangeUploadFile"
      @close="onCloseReferenceAddModal"
      @set-keyword="setKeyword"
      @delete-keyword="deleteKeyword"
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

    <!-- 퀴즈 등록 -->
    <QuizAddModal
      :open="isQuizAddModal"
      :reference="reference"
      :quizList="quizList"
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
    />

    <!-- 쪽지시험 등록 -->
    <NoteTestAddModal
      :open="isNoteTestAddModal"
      :reference="reference"
      :noteTestList="noteTestList"
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
    />

    <!-- 저장경로 설정 -->
    <SavePathModal />

    <!-- 자료실 검색 필터 -->
    <ReferenceFilterModal />

    <!-- 자료실 검색 성공 -->
    <SearchResultModal />

    <!-- 비디오 & 문서 & 유튜브 & url 보기 -->
    <VideoBrowseModal
      :open="isReferenceBrowseModal"
      :selectData="selectData"
      @close="onCloseReferenceBrowseModal"
      @reference-change="onOpenReferenceChangeModal"
      @view-url="onOpenSavePathModal"
      @delete="openSelectModal"
    />

    <!-- 퀴즈 보기 -->
    <QuizBrowseModal
      :open="isQuizBrowseModal"
      :selectData="selectData"
      :currentPageIdx="currentPageIdx"
      @change-number="onClickPagination"
      @close="onCloseQuizBrowseModal"
      @pagination="onClickQuizPagination"
      @change="onOpenQuizChangeModal"
      @preview="onOpenQuizPreviewModal"
      @view-url="onOpenSavePathModal"
      @delete="openSelectModal"
    />

    <!-- 퀴즈 미리보기 -->
    <QuizPreviewModal
      :open="isQuizPreviewModal.open"
      :quizList="isQuizPreviewModal.select ? selectData.quizList : quizList"
      :currentPageIdx="currentPageIdx"
      @close="onCloseQuizPreviewModal"
      @pagination="onClickQuizPagination"
    />

    <!-- 쪽지시험 보기 -->
    <NoteTestBrowseModal
      :open="isNoteTestBrowseModal"
      :selectData="selectData"
      :currentPageIdx="currentPageIdx"
      @change-number="onClickPagination"
      @close="onCloseNoteTestBrowseModal"
      @pagination="onClickQuizPagination"
      @change="onOpenNoteTestChangeModal"
      @preview="onOpenNoteTestPreviewModal"
      @view-url="onOpenSavePathModal"
      @delete="openSelectModal"
    />

    <!-- 쪽지시험 미리보기 -->
    <NoteTestPreviewModal
      :open="isNoteTestPreviewModal.open"
      :testList="
        isNoteTestPreviewModal.select ? selectData.noteTestList : noteTestList
      "
      :currentPageIdx="currentPageIdx"
      @close="onCloseNoteTestPreviewModal"
      @pagination="onClickQuizPagination"
    />

    <!-- 자료 수정 -->
    <ReferenceChangeModal
      :open="isReferenceChangeModal"
      :reference="selectData"
      :pushKeyword="pushKeyword"
      @close="onCloseReferenceChangeModal"
      @change-input="onChangeSelectData"
      @change-keyword="changePushKeyword"
      @set-keyword="setSelectKeyword"
      @delete-keyword="deleteSelectKeyword"
    />

    <!-- 퀴즈 수정 -->
    <QuizChangeModal
      :open="isQuizChangeModal"
      :quiz="selectData"
      :currentPageIdx="currentPageIdx"
      :pushKeyword="pushKeyword"
      @delete-quiz="onDeleteSelectQuizItem"
      @close="onCloseQuizChangeModal"
      @change-input="onChangeSelectData"
      @change-number="onClickPagination"
      @pagination="onClickQuizPagination"
      @plus-item="onPlusSelectQuizList"
      @select-type="onClickSelectQuizType"
      @select-ox="onSelectChangeOx"
      @select-dificultade="onSelectChangeDificultade"
      @change-item="onChangeSelectQuiz"
      @preview="onOpenQuizPreviewModal"
      @change-keyword="changePushKeyword"
      @set-keyword="setSelectKeyword"
      @delete-keyword="deleteSelectKeyword"
    />

    <!-- 쪽지시험 수정 -->
    <NoteTestChangeModal
      :open="isNoteTestChangeModal"
      :reference="selectData"
      :noteTestList="noteTestList"
      :currentPageIdx="currentPageIdx"
      :pushKeyword="pushKeyword"
      @close="onCloseNoteTestChangeModal"
      @change-item="onChangeSelectTest"
      @change-input="onChangeSelectData"
      @change-number="onClickPagination"
      @change-dificultade="onSelectChangeDificultadeTest"
      @delete-item="onDeleteSelectNoteTest"
      @pagination="onClickQuizPagination"
      @select-answer="onSelectChangeAnswer"
      @plus-item="onPlusSelectNoteTestList"
      @preview="onOpenNoteTestPreviewModal"
      @change-keyword="changePushKeyword"
      @set-keyword="setSelectKeyword"
      @delete-keyword="deleteSelectKeyword"
    />

    <!-- 공유하기 -->
    <ShareViewModal
      :open="isShareViewModal.open"
      :url="isShareViewModal.url"
      @close="onCloseSavePathModal"
    />

    <!-- 주소 복사 성공 -->
    <AddressCopySuccessModal />

    <!-- 삭제 모달 -->
    <DeleteModal :open="isSelectModal.open" @close="onCloseSelectModal" />

    <!-- 설명 모달 -->
    <ModalDeac
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />

    <button @click="exportToPDF">Export to PDF</button>
  </div>
</template>

<script>
// import { jsPDF } from 'jspdf'
import html2pdf from 'html2pdf.js'
import PageHeader from '~/components/common/PageHeader.vue'
import ModalDeac from '~/components/common/modal/ModalDesc.vue'
import SavePathModal from '~/components/common/modal/reference/SavePathModal.vue'
import ReferenceSelectModal from '~/components/common/modal/reference/ReferenceSelectModal.vue'
import ReferenceAddModal from '~/components/common/modal/reference/ReferenceAddModal.vue'
import VideoFileUploadModal from '~/components/common/modal/reference/VideoFileUploadModal.vue'
import YoutubeUploadModal from '~/components/common/modal/reference/YoutubeUploadModal.vue'
import QuizAddModal from '~/components/common/modal/reference/QuizAddModal.vue'
import NoteTestAddModal from '~/components/common/modal/reference/NoteTestAddModal.vue'
import ReferenceFilterModal from '~/components/common/modal/reference/ReferenceFilterModal.vue'
import SearchResultModal from '~/components/common/modal/reference/SearchResultModal.vue'
import VideoBrowseModal from '~/components/common/modal/reference/VideoBrowseModal.vue'
import QuizBrowseModal from '~/components/common/modal/reference/QuizBrowseModal.vue'
import NoteTestBrowseModal from '~/components/common/modal/reference/NoteTestBrowseModal.vue'
import ShareViewModal from '~/components/common/modal/reference/ShareViewModal.vue'
import AddressCopySuccessModal from '~/components/common/modal/reference/AddressCopySuccessModal.vue'
import DeleteModal from '~/components/common/modal/reference/DeleteModal.vue'
import ReferenceChangeModal from '~/components/common/modal/reference/ReferenceChangeModal.vue'
import QuizChangeModal from '~/components/common/modal/reference/QuizChangeModal.vue'
import NoteTestChangeModal from '~/components/common/modal/reference/NoteTestChangeModal.vue'
import { apiReference } from '~/services'
import QuizPreviewModal from '~/components/common/modal/reference/QuizPreviewModal.vue'
import NoteTestPreviewModal from '~/components/common/modal/reference/NoteTestPreviewModal.vue'
import ReferenceTreeView from '~/components/common/custom/CustomReferenceTreeView.vue'
export default {
  name: 'ReferenceRoom',
  components: {
    PageHeader,
    ReferenceSelectModal,
    ReferenceAddModal,
    VideoFileUploadModal,
    YoutubeUploadModal,
    ModalDeac,
    QuizAddModal,
    NoteTestAddModal,
    SavePathModal,
    ReferenceFilterModal,
    SearchResultModal,
    VideoBrowseModal,
    QuizBrowseModal,
    NoteTestBrowseModal,
    ShareViewModal,
    AddressCopySuccessModal,
    DeleteModal,
    ReferenceChangeModal,
    QuizChangeModal,
    NoteTestChangeModal,
    QuizPreviewModal,
    NoteTestPreviewModal,
    ReferenceTreeView,
  },
  layout: 'EducationLayout',
  data() {
    return {
      identity: 'teacher',
      pushKeyword: '',
      // Modal Flag
      isReferenceAddModal: false,
      isQuizAddModal: false,
      isNoteTestAddModal: false,
      isReferenceBrowseModal: false,
      isQuizBrowseModal: false,
      isNoteTestBrowseModal: false,
      isReferenceChangeModal: false,
      isQuizChangeModal: false,
      isNoteTestChangeModal: false,
      isQuizPreviewModal: {
        open: false,
        previewPage: '',
        select: false,
      },
      isNoteTestPreviewModal: {
        open: false,
        previewPage: '',
        select: false,
      },
      isShareViewModal: {
        open: false,
        path: '',
        url: '',
      },
      isSelectModal: {
        open: false,
        previewPage: '',
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
                      inOpenReferenceRoom: true,
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
                      inOpenReferenceRoom: true,
                      fileName: '',
                      fileDivision: '교육기관',
                      fileType: 'application/pdf',
                      uploadType: 'pdf',
                      fileVolume: '',
                      createAt: '',
                      isLeaf: false,
                      dbIdx: 2,
                      type: 'institution',
                    },
                    {
                      id: 2,
                      name: '영어 단어 퀴즈.quiz',
                      subject: '영어',
                      desc: '등록한 자료 1',
                      keyword: ['국어', '수학'],
                      registrant: '등록인',
                      savePath:
                        'https://media.w3.org/2010/05/sintel/trailer.mp4',
                      isOpenEducation: true,
                      inOpenReferenceRoom: true,
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
                      type: 'institution',
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
                      inOpenReferenceRoom: true,
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
                      inOpenReferenceRoom: true,
                      fileName: '',
                      fileDivision: '교육기관',
                      fileType: 'test',
                      uploadType: 'url',
                      fileVolume: '',
                      createAt: '',
                      isLeaf: false,
                      dbIdx: 5,
                      type: 'institution',
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
                      inOpenReferenceRoom: true,
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
                            { id: '', example: '<p>답 5임</p>' },
                          ],
                          dificultade: 0,
                          limitTime: '',
                          answer: 0,
                        },
                        {
                          id: 1,
                          problem: '<p>2번 문제</p>',
                          exampleList: [
                            { id: '', example: '<p>답 5임</p>' },
                            { id: '', example: '<p>답 6임</p>' },
                            { id: '', example: '<p>답 7임</p>' },
                            { id: '', example: '<p>답 8임</p>' },
                            { id: '', example: '<p>답 9임</p>' },
                          ],
                          dificultade: 2,
                          limitTime: '',
                          answer: 2,
                        },
                      ],
                      isLeaf: false,
                      dbIdx: 6,
                      type: 'institution',
                    },
                  ],
                },
                {
                  name: '2단원',
                  children: [
                    {
                      name: '법과 작문1.link',
                      type: 'institution',
                      dbIdx: 5,
                    },
                    {
                      name: '법과 작문2.link',
                      type: 'institution',
                      dbIdx: 6,
                    },
                    {
                      name: '법과 작문3.link',
                      type: 'institution',
                      dbIdx: 7,
                    },
                    {
                      name: '법과 작문4.link',
                      type: 'institution',
                      dbIdx: 8,
                    },
                  ],
                },
              ],
            },
            {
              name: '수학',
              children: [
                {
                  name: '1단원',
                  children: [
                    {
                      name: '삼각함수1.link',
                      type: 'institution',
                      dbIdx: 1,
                    },
                    {
                      name: '삼각함수2.link',
                      type: 'institution',
                      dbIdx: 2,
                    },
                    {
                      name: '삼각함수3.link',
                      type: 'institution',
                      dbIdx: 3,
                    },
                    {
                      name: '삼각함수4.link',
                      type: 'institution',
                      dbIdx: 4,
                    },
                  ],
                },
                {
                  name: '2단원',
                  children: [
                    {
                      name: '2차 방정식1.link',
                      type: 'institution',
                      dbIdx: 5,
                    },
                    {
                      name: '2차 방정식2.link',
                      type: 'institution',
                      dbIdx: 6,
                    },
                    {
                      name: '2차 방정식3.link',
                      type: 'institution',
                      dbIdx: 7,
                    },
                    {
                      name: '2차 방정식4.link',
                      type: 'institution',
                      dbIdx: 8,
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
                      name: '일산화탄소1.link',
                      type: 'franchise',
                      dbIdx: 1,
                    },
                    {
                      name: '일산화탄소2.link',
                      type: 'franchise',
                      dbIdx: 2,
                    },
                    {
                      name: '일산화탄소3.link',
                      type: 'franchise',
                      dbIdx: 3,
                    },
                    {
                      name: '일산화탄소4.link',
                      type: 'franchise',
                      dbIdx: 4,
                    },
                  ],
                },
                {
                  name: '2단원',
                  children: [
                    {
                      name: '이산화탄소1.link',
                      type: 'franchise',
                      dbIdx: 5,
                    },
                    {
                      name: '이산화탄소2.link',
                      type: 'franchise',
                      dbIdx: 6,
                    },
                    {
                      name: '이산화탄소3.link',
                      type: 'franchise',
                      dbIdx: 7,
                    },
                    {
                      name: '이산화탄소4.link',
                      type: 'franchise',
                      dbIdx: 8,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      receiveCurriculumData: [
        {
          name: '국어',
          children: [
            {
              name: '1단원',
              children: [
                {
                  name: '사투리 작문1.link',
                  type: 'institution',
                },
                {
                  name: '사투리 작문2.link',
                  type: 'franchise',
                },
              ],
            },
            {
              name: '2단원',
              children: [
                {
                  name: '부산 사투리 작문1.link',
                  type: 'curriculum',
                },
                {
                  name: '부산 사투리 작문2.link',
                  type: 'institution',
                },
                {
                  name: '부산 사투리 작문2.link',
                  type: 'franchise',
                },
                {
                  name: '부산 사투리 작문2.link',
                  type: 'institution',
                },
                {
                  name: '부산 사투리 작문2.link',
                  type: 'franchise',
                },
                {
                  name: '네이버란.link',
                  type: 'curriculum',
                },
              ],
            },
          ],
        },
      ],

      uploadType: '',
      currentPageIdx: 0,
      uploadFile: {},
      selectData: {},
      referenceList: [
        {
          id: 0,
          name: '국어학습자료 애니메이션.mp4',
          subject: '국어',
          desc: '등록한 자료 1',
          keyword: [{ title: '국어' }, { title: '수학' }, { title: '과학' }],
          registrant: '등록인',
          savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          isOpenEducation: true,
          inOpenReferenceRoom: true,
          fileName: '',
          fileDivision: '교육기관',
          fileType: 'video/mp4',
          uploadType: 'video',
          fileVolume: '',
          createAt: '',
          children: [],
        },
        {
          id: 1,
          name: '수학 학습자료.pdf',
          subject: '수학',
          desc: '등록한 자료 2',
          keyword: [{ title: '국어' }, { title: '수학' }, { title: '과학' }],
          registrant: '등록인',
          savePath:
            'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
          isOpenEducation: true,
          inOpenReferenceRoom: true,
          fileName: '',
          fileDivision: '교육기관',
          fileType: 'application/pdf',
          uploadType: 'pdf',
          fileVolume: '',
          createAt: '',
          isLeaf: false,
        },
        {
          id: 2,
          name: '영어 단어 퀴즈.quiz',
          subject: '영어',
          desc: '등록한 자료 1',
          keyword: [{ title: '국어' }, { title: '수학' }, { title: '과학' }],
          registrant: '등록인',
          savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          isOpenEducation: true,
          inOpenReferenceRoom: true,
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
        },
        {
          id: 3,
          name: '사회 쪽지시험 영상.youtube',
          subject: '사회',
          desc: '등록한 자료 1',
          keyword: [{ title: '국어' }, { title: '수학' }, { title: '과학' }],
          registrant: '등록인',
          savePath: 'https://www.youtube.com/embed/1CYbySbtyF0',
          isOpenEducation: true,
          inOpenReferenceRoom: true,
          fileName: '',
          fileDivision: '교육기관',
          fileType: 'youtube',
          uploadType: 'youtube',
          fileVolume: '',
          createAt: '',
          isLeaf: false,
        },
        {
          id: 4,
          name: '과학 사이트 참고용.url',
          subject: '과학',
          desc: '등록한 자료 1',
          keyword: [{ title: '국어' }, { title: '수학' }, { title: '과학' }],
          registrant: '등록인',
          savePath: 'https://sciencelove.com/725',
          isOpenEducation: true,
          inOpenReferenceRoom: true,
          fileName: '',
          fileDivision: '교육기관',
          fileType: 'test',
          uploadType: 'url',
          fileVolume: '',
          createAt: '',
          isLeaf: false,
        },
        {
          id: 5,
          name: '수학 쪽지시험.test',
          subject: '수학',
          desc: '등록한 자료 1',
          keyword: [{ title: '국어' }, { title: '수학' }, { title: '과학' }],
          registrant: '등록인',
          savePath: 'https://sciencelove.com/725',
          isOpenEducation: true,
          inOpenReferenceRoom: true,
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
                { id: '', example: '<p>답 5임</p>' },
              ],
              dificultade: 0,
              limitTime: '',
              answer: 0,
            },
            {
              id: 1,
              problem: '<p>2번 문제</p>',
              exampleList: [
                { id: '', example: '<p>답 5임</p>' },
                { id: '', example: '<p>답 6임</p>' },
                { id: '', example: '<p>답 7임</p>' },
                { id: '', example: '<p>답 8임</p>' },
                { id: '', example: '<p>답 9임</p>' },
              ],
              dificultade: 2,
              limitTime: '',
              answer: 2,
            },
          ],
          isLeaf: false,
        },
      ],
      reference: {
        name: '',
        subject: '',
        desc: '',
        keyword: ['수학', '과학'],
        registrant: '',
        savePath: '',
        isOpenEducation: true,
        inOpenReferenceRoom: true,
        fileName: '',
        fileDivision: '',
        fileType: '',
        uploadType: '',
        fileVolume: '',
        createAt: '',
      },
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      urlData: {
        youtube: '',
        page: '',
      },
      keywordList: [
        { value: '국어', code: 'im' },
        { value: '수학', code: 'am' },
        { value: '사회', code: 'ca' },
        { value: '과학', code: 'th' },
        { value: '영어', code: 'sm' },
      ],
      quizList: [
        {
          id: 0,
          problem: '',
          oxAnswer: 0,
          dificultade: 1,
          limitTime: 0,
          quizType: 0,
          subjectiveAnswer: '',
          shortAnswer: '',
          shortWrongAnswer: '',
        },
      ],
      noteTestList: [
        {
          id: 0,
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
        },
      ],
    }
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
      console.log(url)
      this[url] = false
      this.isSelectModal = {
        open: true,
        previewPage: url,
      }
    },

    onCloseSelectModal() {
      this[this.isSelectModal.previewPage] = true
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
      this.reference.fileDivision = '교육기관'
      this.reference.fileType = 'quiz'
      this.reference.uploadType = 'quiz'
      this.reference.fileVolume = 0
      this.reference.createAt = new Date()
      document.getElementById('referenceSelectClose').click()
      this.isQuizAddModal = true
    },

    onCloseQuizAddModal() {
      this.initAddReferenceData()
      this.isQuizAddModal = false
    },
    onOpenNoteTestAddModal() {
      this.reference.fileDivision = '교육기관'
      this.reference.fileType = 'test'
      this.reference.uploadType = 'test'
      this.reference.fileVolume = 0
      document.getElementById('referenceSelectClose').click()
      this.isNoteTestAddModal = true
    },

    onOpenReferenceBrowseModal() {
      this.isReferenceBrowseModal = true
    },

    onCloseReferenceBrowseModal() {
      this.isReferenceBrowseModal = false
    },

    onCloseNoteTestAddModal() {
      this.isNoteTestAddModal = false
    },

    onOpenQuizBrowseModal() {
      this.isQuizBrowseModal = true
    },

    onCloseQuizBrowseModal() {
      this.initAddReferenceData()
      this.isQuizBrowseModal = false
    },

    onOpenNoteTestBrowseModal() {
      this.isNoteTestBrowseModal = true
    },

    onCloseNoteTestBrowseModal() {
      this.initAddReferenceData()
      this.isNoteTestBrowseModal = false
    },

    onOpenReferenceChangeModal() {
      this.onCloseReferenceBrowseModal()
      this.isReferenceChangeModal = true
    },

    onCloseReferenceChangeModal() {
      this.initAddReferenceData()
      this.selectData = {}
      this.isReferenceChangeModal = false
    },

    onOpenQuizChangeModal() {
      this.onCloseQuizBrowseModal()
      this.isQuizChangeModal = true
    },

    onCloseQuizChangeModal() {
      this.selectData = {}
      this.isQuizChangeModal = false
    },

    onOpenNoteTestChangeModal() {
      this.onCloseNoteTestBrowseModal()
      this.isNoteTestChangeModal = true
    },

    onCloseNoteTestChangeModal() {
      this.selectData = {}
      this.isNoteTestChangeModal = false
    },

    onOpenQuizPreviewModal(prevPage, page) {
      this.isQuizPreviewModal = {
        open: true,
        previewPage: prevPage,
      }
      if (page === 'first') {
        this.currentPageIdx = 0
      }
      if (prevPage === 'add') {
        this.isQuizAddModal = false
        this.isQuizPreviewModal.select = false
      } else if (prevPage === 'browse') {
        this.isQuizBrowseModal = false
        this.isQuizPreviewModal.select = true
      } else {
        this.isQuizChangeModal = false
        this.isQuizPreviewModal.select = true
      }
    },

    onCloseQuizPreviewModal() {
      this.isQuizPreviewModal.open = false
      const target = this.isQuizPreviewModal.previewPage
      if (target === 'add') {
        this.isQuizAddModal = true
      } else if (target === 'browse') {
        this.isQuizBrowseModal = true
      } else {
        this.isQuizChangeModal = true
      }
    },

    onOpenNoteTestPreviewModal(prevPage, page) {
      this.isNoteTestPreviewModal = {
        open: true,
        previewPage: prevPage,
      }

      if (page === 'first') {
        this.currentPageIdx = 0
      }
      if (prevPage === 'add') {
        this.isNoteTestAddModal = false
        this.isNoteTestPreviewModal.select = false
      } else if (prevPage === 'browse') {
        this.isNoteTestBrowseModal = false
        this.isNoteTestPreviewModal.select = true
      } else {
        this.isNoteTestChangeModal = false
        this.isNoteTestPreviewModal.select = true
      }
    },

    onCloseNoteTestPreviewModal() {
      this.isNoteTestPreviewModal.open = false
      const target = this.isNoteTestPreviewModal.previewPage
      if (target === 'add') {
        this.isNoteTestAddModal = true
      } else if (target === 'browse') {
        this.isNoteTestBrowseModal = true
      } else {
        this.isNoteTestChangeModal = true
      }
    },

    onOpenSavePathModal(path, url) {
      this[path] = false
      this.isShareViewModal = {
        open: true,
        path,
        url,
      }
    },

    onCloseSavePathModal() {
      this.isShareViewModal.open = false
      console.log(this.isShareViewModal)
      this[this.isShareViewModal.path] = true
    },

    // 등록 자료 내용 변경
    onChangeUploadFile({ target: { id, value, type, checked, name } }) {
      if (
        id === 'keywordInputQuiz' ||
        id === 'keywordInputNoteTest' ||
        id === 'keywordInput' ||
        id === 'keywordChange'
      ) {
        this.reference[name] = value
      } else if (type === 'checkbox') {
        if (checked) {
          this.reference[id] = true
        } else {
          this.reference[id] = false
        }
      } else {
        this.reference[id] = value
      }
    },

    onChangeSelectData({ target: { id, value, type, checked, name } }) {
      if (
        id === 'keywordInputQuiz' ||
        id === 'keywordInputNoteTest' ||
        id === 'keywordInput' ||
        id === 'keywordChange'
      ) {
        this.selectData[name] = value
      } else if (type === 'checkbox') {
        if (checked) {
          this.selectData[id] = true
        } else {
          this.selectData[id] = false
        }
      } else {
        this.selectData[id] = value
      }
    },

    // 유튜브, 링크 변경
    onChangeUrl({ target: { name, value } }) {
      this.urlData[name] = value
    },

    onChangeQuiz({ target: { value, name } }, idx) {
      this.quizList[idx][name] = value
    },

    // 수정 페이지 변경
    onChangeSelectQuiz({ target: { value, name } }, idx) {
      this.selectData.quizList[idx][name] = value
    },

    onChangeTest({ target: { value, name } }, idx) {
      this.noteTestList[idx][name] = value
    },

    onChangeSelectTest({ target: { value, name } }, idx) {
      this.selectData.noteTestList[idx][name] = value
    },

    setKeyword({ target: { value } }) {
      const keywordList = [...this.reference.keyword]
      keywordList.push(value)
      this.pushKeyword = ''
      this.reference.keyword = Array.from(new Set(keywordList))
    },

    deleteKeyword(idx) {
      this.reference.keyword.splice(idx, 1)
    },

    setSelectKeyword({ target: { value } }) {
      const keywordList = [...this.selectData.keyword]
      keywordList.push(value)
      this.pushKeyword = ''
      this.selectData.keyword = Array.from(new Set(keywordList))
    },

    deleteSelectKeyword(idx) {
      this.selectData.keyword.splice(idx, 1)
    },

    changePushKeyword({ target: { value } }) {
      this.pushKeyword = value
    },

    // 비디오 업로드
    onUploadVideo({ target: { files, value } }) {
      this.uploadType = 'video'
      this.uploadFile = {}
      const _video = document.querySelector('#video')
      const _canvas = document.querySelector('#thumb_canvas')
      document.getElementById('selectClose').click()
      this.onOpenReferenceAddModal()
      const _ctx = _canvas.getContext('2d')
      if (files[0] && files[0].type === 'video/mp4') {
        this.uploadFile = files[0]
        this.reference.name = files[0].name
        this.reference.fileName = files[0].name
        this.reference.fileDivision = '교육기관'
        this.reference.fileType = files[0].type
        this.reference.uploadType = 'video'
        this.reference.fileVolume = files[0].size
        this.reference.createAt = files[0].lastModifiedDate

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
      } else {
        this.openModalDesc('', '형식의 맞는 파일을 업로드해주세요.')
      }
    },

    // PDF 업로드
    onUploadPdf({ target: { files } }) {
      this.uploadType = 'pdf'
      this.uploadFile = {}
      const _embed = document.querySelector('#embed')
      document.getElementById('selectClose').click()
      this.onOpenReferenceAddModal()
      if (files[0] && files[0].type === 'application/pdf') {
        this.uploadFile = files[0]
        this.reference.name = files[0].name
        this.reference.fileName = files[0].name
        this.reference.fileDivision = '교육기관'
        this.reference.fileType = files[0].type
        this.reference.uploadType = 'pdf'
        this.reference.fileVolume = files[0].size
        this.reference.createAt = files[0].lastModifiedDate
        _embed.setAttribute(
          'src',
          URL.createObjectURL(files[0]) + '#toolbar=0&navpanes=0&scrollbar=0'
        )
        this.onOpenReferenceAddModal()
      } else {
        this.openModalDesc('', '형식의 맞는 파일을 업로드해주세요.')
      }
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
          this.reference.name = items[0].snippet.title
          this.reference.fileName = items[0].snippet.title
          this.reference.fileDivision = '교육기관'
          this.reference.fileType = 'YOUTUBE'
          this.reference.uploadType = 'youtube'
          this.reference.fileVolume = 0
          this.reference.createAt = new Date()
        })
    },

    // 유튜브 업로드
    onUploadYoutube() {
      this.uploadType = 'youtube'
      const youtubeRegex =
        /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/g
      const youtubeUrl = this.urlData.youtube.replace('https://youtu.be/', '')
      const _embed = document.querySelector('#embed')
      if (youtubeRegex.test(this.urlData.youtube) === true) {
        this.getYoutubeData(youtubeUrl)
        _embed.setAttribute(
          'src',
          `https://www.youtube.com/embed/${youtubeUrl}`
        )
        document.getElementById('selectUrlClose').click()
        this.onOpenReferenceAddModal()
      } else {
        this.openModalDesc('실패', '유튜브 형식의 URL을 입력해주세요')
      }
    },

    // URL 업로드
    onUploadUrl() {
      const urlRegex = /^(http(s)?:\/\/)([^\/]*)(\.)(com|net|kr|my|shop)/gi
      this.uploadType = 'file'
      const url = this.urlData.page
      this.uploadFile = {
        name: '',
        type: 'WEB',
        lastModifiedDate: new Date(),
        size: 0,
      }
      if (urlRegex.test(this.urlData.page) === true) {
        this.reference.name = url
        this.reference.fileName = url
        this.reference.fileDivision = '교육기관'
        this.reference.fileType = 'URL'
        this.reference.uploadType = 'url'
        this.reference.fileVolume = 0
        this.reference.createAt = new Date()
        const _iframe = document.querySelector('#iframe')
        _iframe.setAttribute('src', url)
        document.getElementById('selectUrlClose').click()
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
      if (direction === 'plus') {
        if (this.currentPageIdx < max - 1) this.currentPageIdx += 1
      } else if (direction === 'min') {
        if (this.currentPageIdx !== 0) this.currentPageIdx -= 1
      }
    },

    // 퀴즈 리스트 하나 추가
    onPlusQuizList() {
      if (this.quizList.length <= 19) {
        const quizItem = {
          id: this.quizList.length + 1,
          problem: '',
          dificultade: 0,
          limitTime: 0,
          quizType: 0,
          oxAnswer: 0,
          shortAnswer: '',
          subjectiveAnswer: '',
          shortWrongAnswer: '',
        }
        this.quizList.push(quizItem)
      }
    },

    // 퀴즈 수정페이지 리스트 추가
    onPlusSelectQuizList() {
      if (this.selectData.quizList.length <= 19) {
        const quizItem = {
          id: this.selectData.quizList.length + 1,
          problem: '',
          dificultade: 0,
          limitTime: 0,
          quizType: 0,
          oxAnswer: 0,
          shortAnswer: '',
          subjectiveAnswer: '',
          shortWrongAnswer: '',
        }
        this.selectData.quizList.push(quizItem)
      }
    },

    // 선택한 퀴즈 지우기
    onDeleteQuizItem(idx) {
      if (this.quizList.length > 1) {
        this.quizList.splice(idx, 1)
      }
    },
    // 수정 페이지 퀴즈 지우기
    onDeleteSelectQuizItem(idx) {
      if (this.selectData.quizList.length > 1) {
        this.selectData.quizList.splice(idx, 1)
      }
    },

    // 선택한 퀴즈 지우기
    onDeleteNoteTest(idx) {
      if (this.noteTestList.length > 1) {
        this.noteTestList.splice(idx, 1)
      }
    },
    // 수정 페이지 퀴즈 지우기
    onDeleteSelectNoteTest(idx) {
      if (this.selectData.noteTestList.length > 1) {
        this.selectData.noteTestList.splice(idx, 1)
      }
    },

    // 퀴즈 타입 변경
    onClickQuizType(idx, num) {
      this.quizList[idx].quizType = num
      if (num === 0) {
        this.quizList[idx].shortAnswer = ''
        this.quizList[idx].subjectiveAnswer = ''
        this.quizList[idx].shortWrongAnswer = ''
      } else if (num === 1) {
        this.quizList[idx].oxAnswer = 0
        this.quizList[idx].subjectiveAnswer = ''
      } else {
        this.quizList[idx].oxAnswer = 0
        this.quizList[idx].shortAnswer = ''
        this.quizList[idx].shortWrongAnswer = ''
      }
    },

    // 수정 페이지 퀴즈 타입 변경
    onClickSelectQuizType(idx, num) {
      this.selectData.quizList[idx].quizType = num
      if (num === 0) {
        this.selectData.quizList[idx].shortAnswer = ''
        this.selectData.quizList[idx].subjectiveAnswer = ''
        this.selectData.quizList[idx].shortWrongAnswer = ''
      } else if (num === 1) {
        this.selectData.quizList[idx].oxAnswer = 0
        this.selectData.quizList[idx].subjectiveAnswer = ''
      } else {
        this.selectData.quizList[idx].oxAnswer = 0
        this.selectData.quizList[idx].shortAnswer = ''
        this.selectData.quizList[idx].shortWrongAnswer = ''
      }
    },

    // ox클릭 이벤트
    onSelectOx(idx, num) {
      this.quizList[idx].oxAnswer = num
    },

    // 수정 페이지ox클릭 이벤트
    onSelectChangeOx(idx, num) {
      this.selectData.quizList[idx].oxAnswer = num
    },

    // 난이도 설정
    onSelectDificultade(idx, num) {
      this.quizList[idx].dificultade = num
    },

    // 수정 페이지난이도 설정
    onSelectChangeDificultade(idx, num) {
      this.selectData.quizList[idx].dificultade = num
    },

    // 난이도 설정 쪽지 시험
    onSelectDificultadeTest(idx, num) {
      this.noteTestList[idx].dificultade = num
    },

    // 수정 페이지 난이도 설정 쪽지 시험
    onSelectChangeDificultadeTest(idx, num) {
      this.selectData.noteTestList[idx].dificultade = num
    },

    // 쪽지 시험
    // 퀴즈 변경 UI
    onClickNoteTestList(idx) {
      this.currentPageIdx = idx
    },

    // 쪽지 시험 추가
    onPlusNoteTestList() {
      if (this.noteTestList.length <= 19) {
        const noteTestItem = {
          id: this.noteTestList.length,
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

        this.noteTestList.push(noteTestItem)
      }
    },

    // 수정 페이지 쪽지 시험 추가
    onPlusSelectNoteTestList() {
      if (this.selectData.noteTestList.length <= 19) {
        const noteTestItem = {
          id: this.selectData.noteTestList.length,
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

        this.selectData.noteTestList.push(noteTestItem)
      }
    },

    onSelectAnswer(idx, targetIdx) {
      this.noteTestList[idx].answer = targetIdx + 1
    },

    // 수정 페이지
    onSelectChangeAnswer(idx, targetIdx) {
      console.log(targetIdx)
      this.selectData.noteTestList[idx].answer = targetIdx + 1
    },

    // 자료 클릭 이벤트
    onClickSelectData(data) {
      this.selectData = data
      if (
        data.uploadType === 'video' ||
        data.uploadType === 'pdf' ||
        data.uploadType === 'youtube' ||
        data.uploadType === 'url'
      ) {
        this.onOpenReferenceBrowseModal()
      } else if (data.uploadType === 'quiz') {
        this.onOpenQuizBrowseModal()
      } else if (data.uploadType === 'test') {
        this.onOpenNoteTestBrowseModal()
      }
    },

    // 취소시 등록 하려고했던 데이터 지우기
    initAddReferenceData() {
      this.uploadType = ''
      this.currentPageIdx = 0
      this.uploadFile = {}
      this.reference = {
        name: '',
        subject: '',
        desc: '',
        keyword: [],
        registrant: '',
        savePath: '',
        isOpenEducation: true,
        inOpenReferenceRoom: true,
        fileName: '',
        fileDivision: '',
        fileType: '',
        fileVolume: '',
        createAt: '',
      }

      this.urlData = {
        youtube: '',
        page: '',
      }

      this.quizList = [
        {
          id: 0,
          problem: '',
          oxAnswer: 0,
          dificultade: 1,
          limitTime: 0,
          quizType: 0,
          shortAnswer: '',
          subjectiveAnswer: '',
          shortWrongAnswer: '',
        },
      ]

      this.noteTestList = [
        {
          id: 0,
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
        },
      ]

      // tree component
    },

    // tree component
    onDel(node) {
      console.log(node)
      node.remove()
    },

    onChangeName(params) {
      console.log(params)
    },

    onAddNode(params) {
      console.log(params)
    },

    onClick(params) {
      this.selectData = params
      if (
        params.uploadType === 'video' ||
        params.uploadType === 'pdf' ||
        params.uploadType === 'youtube' ||
        params.uploadType === 'url'
      ) {
        this.onOpenReferenceBrowseModal()
      } else if (params.uploadType === 'quiz') {
        this.onOpenQuizBrowseModal()
      } else if (params.uploadType === 'test') {
        this.onOpenNoteTestBrowseModal()
      }
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

    exportToPDF() {
      window.scrollTo(0, 0)
      html2pdf(this.$refs.generatePdf, {
        margin: 0,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: {
          scrollY: 0,
          scale: 4,
          dpi: 300,
          letterRendering: true,
          allowTaint: false,
          ignoreElements(element) {
            // pdf에 출력하지 않아야할 dom이 있다면 해당 옵션 사용
            if (element.id === 'pdf-button-area') {
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

      // const pages = document.querySelector('#itemDiv')
      // this.workspaceService.exportAllToPDF(pages)

      /* eslint-disable new-cap */
      // const doc = new jsPDF({
      //   orientation: 'portrait',
      //   unit: 'px',
      //   format: 'a4',
      //   compressPDF: true,
      // })

      // doc.html(pages, {
      //   callback: (doc) => {
      //     doc.deletePage(doc.getNumberOfPages())
      //     doc.save('pdf-export')
      //   },
      // })

      // doc.save('test.pdf')
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
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  margin-left: 0.15rem;
}
</style>
