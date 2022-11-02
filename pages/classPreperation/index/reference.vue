<template>
  <div>
    <PageHeader title="자료실" />
    <div class="tab-content depth03 ac_manage_dtr">
      <div class="tab-pane active">
        <!-- 컨트롤 버튼 영역 -->
        <div class="search_section">
          <div class="left_area">
            <div class="btn btn_crud_default">복사</div>
            <button class="btn btn_crud_default">붙여넣기</button>
            <button class="btn btn_crud_default">삭제</button>
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
                  프랜차이즈
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  id="class-tab"
                  class="nav-link"
                  data-toggle="tab"
                  data-target="#open"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  공개자료실
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
                <ul>
                  <li>
                    <!-- 리스트01 -->
                    <div class="list">
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkA01"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="chkA01"
                        ></label>
                      </div>
                      <i id="show_sublist01" class="btn icons_arrow_r"></i>
                      <span class="text">국어</span>
                      <i class="icons_plus_circle_off"></i>
                    </div>
                    <!-- 리스트01_sub-->
                    <div id="list_sub01" class="list_sub" style="display: none">
                      <ul>
                        <li>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chkB01"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chkB01"
                            ></label>
                          </div>
                          <i
                            id="show_sublist01_sub"
                            class="btn icons_arrow_r"
                          ></i>
                          <span class="text">대단원1</span>
                          <i class="icons_plus_circle_off"></i>
                        </li>
                      </ul>
                    </div>
                    <!-- /.리스트01_sub-->
                    <!-- 리스트01_sub_sub-->
                    <div
                      id="list_sub01_sub"
                      class="list_sub_sub"
                      style="display: none"
                    >
                      <ul>
                        <li class="found">
                          <!-- [개발참조] 찾은자료 표시  class="found" -->
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chkC01"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chkC01"
                            ></label>
                          </div>
                          <span class="text">문서,동영상일경우</span>
                          <i class="btn icons_mu_off more_mu">
                            <div class="more_list" style="display: none">
                              <ul>
                                <li data-toggle="modal" data-target="#">
                                  다운로드
                                </li>
                                <li
                                  data-toggle="modal"
                                  data-target="#modalDataRegiModi"
                                >
                                  수정
                                </li>
                                <li
                                  data-toggle="modal"
                                  data-target="#modalDataRead"
                                >
                                  보기
                                </li>
                                <li data-toggle="modal" data-target="#">
                                  삭제
                                </li>
                                <li data-toggle="modal" data-target="#">
                                  복사
                                </li>
                              </ul>
                            </div>
                          </i>
                        </li>
                        <li>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chkC02"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chkC02"
                            ></label>
                          </div>
                          <span class="text">퀴즈일 경우</span>
                          <i class="btn icons_mu_off more_mu">
                            <div class="more_list" style="display: none">
                              <ul>
                                <li data-toggle="modal" data-target="#">
                                  다운로드
                                </li>
                                <li
                                  data-toggle="modal"
                                  data-target="#modalDataRegiQuiz"
                                >
                                  수정
                                </li>
                                <li
                                  data-toggle="modal"
                                  data-target="#modalDataReadQuiz"
                                >
                                  보기
                                </li>
                                <li data-toggle="modal" data-target="#">
                                  삭제
                                </li>
                                <li data-toggle="modal" data-target="#">
                                  복사
                                </li>
                              </ul>
                            </div>
                          </i>
                        </li>
                        <li>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chkC02"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chkC02"
                            ></label>
                          </div>
                          <span class="text">쪽지시험일 경우</span>
                          <i class="btn icons_mu_off more_mu">
                            <div class="more_list" style="display: none">
                              <ul>
                                <li data-toggle="modal" data-target="#">
                                  다운로드
                                </li>
                                <li
                                  data-toggle="modal"
                                  data-target="#modalDataRegiNote"
                                >
                                  수정
                                </li>
                                <li
                                  data-toggle="modal"
                                  data-target="#modalDataReadNote"
                                >
                                  보기
                                </li>
                                <li data-toggle="modal" data-target="#">
                                  삭제
                                </li>
                                <li data-toggle="modal" data-target="#">
                                  복사
                                </li>
                              </ul>
                            </div>
                          </i>
                        </li>
                      </ul>
                    </div>
                    <!-- /.리스트01_sub_sub-->
                    <!-- /.리스트01 -->
                  </li>
                  <li>
                    <!-- 리스트02 -->
                    <div class="list">
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkA02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="chkA02"
                        ></label>
                      </div>
                      <i id="show_sublist02" class="btn icons_arrow_r"></i>
                      <span class="text">수학</span>
                      <i class="icons_plus_circle_off"></i>
                    </div>
                    <div id="list_sub02" class="list_sub" style="display: none">
                      <ul>
                        <li>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chkB02"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chkB02"
                            ></label>
                          </div>
                          <i
                            id="show_sublist02_sub"
                            class="btn icons_arrow_r"
                          ></i>
                          <span class="text">자연수 I</span>
                          <i class="icons_plus_circle_off"></i>
                        </li>
                      </ul>
                    </div>
                    <!-- /.리스트02 -->
                  </li>
                </ul>
              </div>
              <!-- /.탭 내용01 -->
              <!-- 탭 내용02 -->
              <div
                id="franchise"
                class="tab-pane fade"
                role="tabpanel"
                aria-labelledby="class-tab"
              >
                프랜차이즈 동일 구성
              </div>
              <!-- /.탭 내용02 -->
              <!-- 탭 내용03 -->
              <div
                id="open"
                class="tab-pane fade"
                role="tabpanel"
                aria-labelledby="class-tab"
              >
                공개자료실 동일 구성
              </div>
              <!-- /.탭 내용03 -->
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
                <ul>
                  <li>
                    <!-- 리스트01 -->
                    <div class="list">
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkAr01"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="chkAr01"
                        ></label>
                      </div>
                      <i id="show_sublist01" class="btn icons_arrow_r"></i>
                      <span class="text">국어</span>
                      <i class="icons_plus_circle_off"></i>
                    </div>
                    <!-- /.리스트01 -->
                  </li>
                  <li>
                    <!-- 리스트02 -->
                    <div class="list">
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkAr02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="chkAr02"
                        ></label>
                      </div>
                      <i id="show_sublist02" class="btn icons_arrow_r"></i>
                      <span class="text">수학</span>
                      <i class="icons_plus_circle_off"></i>
                    </div>
                    <!-- /.리스트02 -->
                  </li>
                </ul>
              </div>
              <!-- /.탭 내용01 -->
            </div>
            <!-- /.탭 컨텐츠 -->
          </div>
          <!-- /.오른쪽 영역 -->
        </div>
        <!-- /.2단 분류 컨텐츠 -->
      </div>
      <!-- <div v-html="quizList[0]"></div> -->
    </div>

    <!-- 등록 파일 선택 -->
    <ReferenceSelectModal :uploadType="uploadType" />

    <!-- 파일 등록 -->
    <ReferenceAddModal
      :uploadType="uploadType"
      pagination
      :uploadFile="uploadFile"
      :reference="reference"
      @change-input="onChangeUploadFile"
    />

    <!-- 비디오& 파일 업로드 -->
    <VideoFileUploadModal
      @upload-video="onUploadVideo"
      @upload-pdf="onUploadPdf"
    />

    <!-- 유튜브 업로드 -->
    <YoutubeUploadModal
      :urlData="urlData"
      @change-url="onChangeUrl"
      @upload-youtube="onUploadYoutube"
      @upload-page="onUploadUrl"
    />

    <!-- 퀴즈 업로드 
      change-number= 해당 퀴즈 editor 변경 이벤트
      change-item = 해당 퀴즈 내용 변경 이벤트
    -->
    <QuizAddModal
      :reference="reference"
      :quizList="quizList"
      :currentQuizIdx="currentQuizIdx"
      @change-number="onClickQuizList"
      @quiz-pagination="onClickQuizPagination"
      @plus-item="onPlusQuizList"
      @delete-quiz="onDeleteQuizItem"
      @change-item="onChangeQuiz"
      @select-type="onClickQuizType"
      @change-input="onChangeUploadFile"
      @select-ox="onSelectOx"
      @select-dificultade="onSelectDificultade"
    />

    <!-- 쪽지시험 업로드 -->
    <NoteTestAddModal
      :reference="reference"
      :noteTestList="noteTestList"
      :currentNoteTestIdx="currentNoteTestIdx"
      @plus-test="onPlusNoteTestList"
      @change-number="onClickNoteTestList"
      @plus-item="onPlusNoteTestList"
      @change-input="onChangeUploadFile"
      @change-dificultade="onSelectDificultadeTest"
      @change-item="onChangeTest"
      @select-answer="onSelectAnswer"
    />

    <!-- 저장경로 설정 -->
    <SavePathModal />

    <!-- 자료실 검색 필터 -->
    <ReferenceFilterModal />

    <!-- 자료실 검색 성공 -->
    <SearchResultModal />

    <!-- 비디오 보기 -->
    <VideoBrowseModal />

    <!-- 퀴즈 보기 -->
    <QuizBrowseModal />

    <!-- 쪽지시험 보기 -->
    <NoteTestBrowseModal />

    <!-- 공유하기 -->
    <ShareViewModal />

    <!-- 주소 복사 성공 -->
    <AddressCopySuccessModal />

    <!-- 삭제 모달 -->
    <DeleteModal />
    <!-- 설명 모달 -->
    <ModalDeac
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />
  </div>
</template>

<script>
import Tagify from '@yaireo/tagify'
import PageHeader from '@/components/common/PageHeader.vue'
import ModalDeac from '@/components/common/modal/ModalDesc.vue'
import SavePathModal from '@/components/common/modal/reference/SavePathModal.vue'
import ReferenceSelectModal from '@/components/common/modal/reference/ReferenceSelectModal.vue'
import ReferenceAddModal from '@/components/common/modal/reference/ReferenceAddModal.vue'
import VideoFileUploadModal from '@/components/common/modal/reference/VideoFileUploadModal.vue'
import YoutubeUploadModal from '@/components/common/modal/reference/YoutubeUploadModal.vue'
import QuizAddModal from '@/components/common/modal/reference/QuizAddModal.vue'
import NoteTestAddModal from '@/components/common/modal/reference/NoteTestAddModal.vue'
import ReferenceFilterModal from '@/components/common/modal/reference/ReferenceFilterModal.vue'
import SearchResultModal from '@/components/common/modal/reference/SearchResultModal.vue'
import VideoBrowseModal from '@/components/common/modal/reference/VideoBrowseModal.vue'
import QuizBrowseModal from '@/components/common/modal/reference/QuizBrowseModal.vue'
import NoteTestBrowseModal from '@/components/common/modal/reference/NoteTestBrowseModal.vue'
import ShareViewModal from '@/components/common/modal/reference/ShareViewModal.vue'
import AddressCopySuccessModal from '@/components/common/modal/reference/AddressCopySuccessModal.vue'
import DeleteModal from '@/components/common/modal/reference/DeleteModal.vue'
import { apiReference } from '@/services'
import '@yaireo/tagify/dist/tagify.css'

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
  },
  layout: 'EducationLayout',
  data() {
    return {
      uploadType: '',
      currentQuizIdx: 0,
      currentNoteTestIdx: 0,
      uploadFile: {},
      reference: {
        name: '',
        subject: 0,
        desc: '',
        keyword: [],
        registrant: '',
        savePath: '',
        isOpenEducation: true,
        inOpenReferenceRoom: true,
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
          shortAnswer: '',
          subjectiveAnswer: '',
          subjectiveWrongAnswer: '',
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
  mounted() {
    this.getTagify()
    this.getTagifyQuiz()
    this.getTagifyNoteTest()
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

    // 태그 컴포넌트 가져오기
    getTagify() {
      const input = document.getElementById('keywordInput')
      if (input) {
        const tagify = new Tagify(input, {
          whitelist: this.keywordList,
          //  whitelist: ["ironman", "antman", "captain america", "thor", "spiderman"],
          enforceWhitelist: false, // true일때 keywordList에 있는 태그만 사용
        })
        tagify.on('add', function () {})
      }
    },

    // 퀴즈 태그 컴포넌트 가져오기
    getTagifyQuiz() {
      const input = document.getElementById('keywordInputQuiz')
      if (input) {
        const tagify = new Tagify(input, {
          whitelist: this.keywordList,
          enforceWhitelist: false,
        })
        tagify.on('add', function () {})
      }
    },

    // 쪽지시험 태그 컴포넌트 가져오기
    getTagifyNoteTest() {
      const input = document.getElementById('keywordInputNoteTest')
      if (input) {
        const tagify = new Tagify(input, {
          whitelist: this.keywordList,
          enforceWhitelist: false,
        })
        tagify.on('add', function () {})
      }
    },

    onCloseModalDesc() {
      this.modalDesc.open = false
    },

    // 등록 자료 내용 변경
    onChangeUploadFile({ target: { id, value, type, checked } }) {
      if (type === 'checkbox') {
        if (checked) {
          this.reference[id] = true
        } else {
          this.reference[id] = false
        }
      } else {
        this.reference[id] = value
      }
    },

    // 유튜브, 링크 변경
    onChangeUrl({ target: { name, value } }) {
      this.urlData[name] = value
    },

    onChangeQuiz({ target: { value, name } }, idx) {
      this.quizList[idx][name] = value
    },

    onChangeTest({ target: { value, name } }, idx) {
      this.noteTestList[idx][name] = value
    },

    // 비디오 업로드
    onUploadVideo({ target: { files } }) {
      this.uploadType = 'video'
      this.uploadFile = {}
      const _video = document.querySelector('#video')
      const targetBtn = document.getElementById('video_target')
      const _canvas = document.querySelector('#thumb_canvas')
      const _ctx = _canvas.getContext('2d')
      if (files[0] && files[0].type === 'video/mp4') {
        this.uploadFile = files[0]
        this.reference.name = files[0].name
        _video.setAttribute('src', URL.createObjectURL(files[0]))
        _video.addEventListener('loadedmetadata', function () {
          // 비디오 태그의 메타데이터가 들어오면
          _canvas.width = _video.videoWidth
          _canvas.height = _video.videoHeight
          // console.log(_video.duration, _video.currentTime)
          const time = Math.random() * _video.duration // 비디오의 영상길이 중 랜덤 타임을 뽑음
          _video.currentTime = time // 해당 시간으로 이동
          setTimeout(() => {
            // 바로 출력하면 비디오가 불러오기 전이라 동작이 안됨. 잠깐의 기다림 후 캔버스에 해당 이미지를 그림.
            _ctx.drawImage(_video, 0, 0, _video.videoWidth, _video.videoHeight)
          }, 400)
        })
        targetBtn.click()
      } else {
        this.openModalDesc('', '형식의 맞는 파일을 업로드해주세요.')
      }
    },

    // PDF 업로드
    onUploadPdf({ target: { files } }) {
      this.uploadType = 'pdf'
      this.uploadFile = {}
      const _embed = document.querySelector('#embed')
      const targetBtn = document.getElementById('video_target')
      if (files[0] && files[0].type === 'application/pdf') {
        this.uploadFile = files[0]
        this.reference.name = files[0].name
        _embed.setAttribute(
          'src',
          URL.createObjectURL(files[0]) + '#toolbar=0&navpanes=0&scrollbar=0'
        )
        targetBtn.click()
      } else {
        this.openModalDesc('', '형식의 맞는 파일을 업로드해주세요.')
      }
    },

    // 유튜브 API 호출
    async getYoutubeData(youtubeUrl) {
      const targetBtn = document.querySelector('#youtube_btn')
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
          targetBtn.click()
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
      } else {
        this.openModalDesc('실패', '유튜브 형식의 URL을 입력해주세요')
      }
    },

    // URL 업로드
    onUploadUrl() {
      const urlRegex = /^(http(s)?:\/\/)([^\/]*)(\.)(com|net|kr|my|shop)/gi
      this.uploadType = 'file'
      const url = this.urlData.page
      const targetBtn = document.querySelector('#youtube_btn')
      this.uploadFile = {
        name: '',
        type: 'WEB',
        lastModifiedDate: new Date(),
        size: 0,
      }
      if (urlRegex.test(this.urlData.page) === true) {
        this.reference.name = url

        const _iframe = document.querySelector('#iframe')
        _iframe.setAttribute('src', url)
        targetBtn.click()
      } else {
        this.openModalDesc('실패', 'URL을 정확히 입력해주세요')
      }
    },

    // 퀴즈 변경 UI
    onClickQuizList(idx) {
      this.currentQuizIdx = idx
    },

    // 퀴즈 페이지네이션
    onClickQuizPagination(direction) {
      if (direction === 'plus') {
        if (this.currentQuizIdx < this.quizList.length - 1)
          this.currentQuizIdx += 1
      } else if (direction === 'min') {
        if (this.currentQuizIdx !== 0) this.currentQuizIdx -= 1
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
        }
        this.quizList.push(quizItem)
      }
    },

    // 선택한 퀴즈 지우기
    onDeleteQuizItem(idx) {
      if (this.quizList.length > 1) {
        this.quizList.splice(idx, 1)
      }
    },

    // 퀴즈 타입 변경
    onClickQuizType(idx, num) {
      this.quizList[idx].quizType = num
      if (num === 0) {
        this.quizList[idx].shortAnswer = ''
        this.quizList[idx].subjectiveAnswer = ''
        this.quizList[idx].subjectiveWrongAnswer = ''
      } else if (num === 1) {
        this.quizList[idx].oxAnswer = 0
        this.quizList[idx].subjectiveAnswer = ''
        this.quizList[idx].subjectiveWrongAnswer = ''
      } else {
        this.quizList[idx].oxAnswer = 0
        this.quizList[idx].shortAnswer = ''
      }
    },

    // ox클릭 이벤트
    onSelectOx(idx, num) {
      this.quizList[idx].oxAnswer = num
    },

    // 난이도 설정
    onSelectDificultade(idx, num) {
      this.quizList[idx].dificultade = num
    },

    // 난이도 설정 쪽지 시험
    onSelectDificultadeTest(idx, num) {
      this.noteTestList[idx].dificultade = num
    },

    // 쪽지 시험
    // 퀴즈 변경 UI
    onClickNoteTestList(idx) {
      this.currentNoteTestIdx = idx
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

    onSelectAnswer(idx, targetIdx) {
      this.noteTestList[idx].answer = targetIdx
    },
  },
}
</script>
<style></style>
