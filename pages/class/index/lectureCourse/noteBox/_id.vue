<template>
  <div>
    <div>
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickLecturePlan">강의계획서</div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickHomeWorkBox">과제함</div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link active">노트함</div>
        </li>
      </ul>
      <div
        id="modalLessonView"
        class="tab-content depth03 ac_manage_dtr ac_manage_note"
      >
        <div class="tab-pane active">
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="left_area">
              <span class="course_tit">{{ lectureCourse.subject }}</span>
              <span class="course_con"
                >{{ lectureCourse.lessonTitle }} /
                {{ lectureCourse.lessonClass }} /
                {{ lectureCourse.teacher }}</span
              >
            </div>
            <div class="right_area">
              <nuxt-link to="/class/lecturecourse" class="btn btn_crud_default"
                >강의목록 보기</nuxt-link
              >
            </div>
          </div>
          <!-- /.검색 영역 -->
          <!-- 2단 분류 컨텐츠 -->
          <div class="divide_section">
            <!-- 왼쪽 영역 -->
            <div class="divide_area left_area">
              <!-- 탭 컨텐츠 -->
              <button class="btn btn_crud_default" @click="getCheckboxData">
                다운로드
              </button>
              <button class="btn btn_crud_danger" @click="onClickDeleteBtn">
                삭제
              </button>
              <div id="myTabContent" class="tab-content border">
                <!-- 탭 내용01 -->
                <div
                  id="institute"
                  class="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="grade-tab"
                >
                  <TreeView
                    ref="noteBox"
                    listType="lesson"
                    :dataList="noteBoxData"
                    :editable="false"
                    :pidNum="3000"
                    @moreShowClick="moreShowClick"
                  />
                </div>
                <!-- /.탭 내용01 -->
              </div>
              <!-- /.탭 컨텐츠 -->
            </div>
            <!-- /.왼쪽 영역 -->
            <!-- 오른쪽 영역 -->

            <div class="divide_area right_area">
              <div v-if="!isMoreBtn" class="nodata">
                자료를 확인하는 공간입니다. <br />
                자료의 <i class="icons_zoom_off"></i> 버튼을 누르면 해당 자료를
                볼 수 있습니다.
              </div>
              <div v-else class="thumb_box">
                <div class="row">
                  <div class="title">자료 열람</div>

                  <div class="thumbnail_view">
                    <NoteView
                      :open="noteDetail.category === '02'"
                      :data="noteDetail"
                    />
                    <!-- <button class="btn icons_fullscreen"></button> -->
                    <a
                      class="btn icons_fullscreen"
                      :href="noteDetail.savepath"
                      target="_blank"
                    ></a>
                  </div>
                </div>

                <div class="row name">
                  <label for="" class="title02">파일 이름</label>
                  <div class="col">
                    <span>{{ noteDetail.name }}</span>
                  </div>
                </div>

                <div class="div_line01"></div>

                <div class="div_cont02">
                  <div class="row">
                    <label for="" class="title02 cont">콘텐츠 유형</label>
                    <div class="col cont">
                      <span>PDF</span>
                    </div>
                  </div>

                  <div class="row">
                    <label for="" class="title02 cont">공개 여부</label>
                    <div class="col cont">
                      <span>{{
                        noteDetail.public_open_yn ? 'ON' : 'OFF'
                      }}</span>
                    </div>
                  </div>

                  <div class="row">
                    <label for="" class="title02 cont">과목</label>
                    <div class="col cont">
                      <span>{{ noteDetail.subject }}</span>
                    </div>
                  </div>

                  <div class="row">
                    <label for="" class="title02 cont">경로</label>
                    <div class="col cont">
                      <span>{{ noteDetail.savepath }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 설명 모달 -->
    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />
    <!-- 삭제 모달 -->
    <DeletePlanModal
      :open="deleteModalDesc.open"
      :title="deleteModalDesc.title"
      @delete="checkboxDel"
      @close="onCloseDeleteModalDesc"
    />
  </div>
</template>
<script>
import TreeView from '@/components/common/custom/CustomReferenceTreeView.vue'
import NoteView from '@/components/lecturecourse/NoteView.vue'
import DeletePlanModal from '@/components/lecturecourse/DeletePlanModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
// import NoteBox from '@/components/lecturecourse/NoteBox.vue'
export default {
  name: 'LectureDetail',
  components: {
    // NoteBox,
    ModalDesc,
    DeletePlanModal,
    TreeView,
    NoteView,
  },
  data() {
    return {
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      deleteModalDesc: {
        open: false,
        title: '',
      },
      //
      deleteIdxList: [],
      // mock
      lectureCourse: {
        id: 0,
        academy: '일산어학원',
        time: '월수금 09:00 ~ 12:00',
        subject: '영어심화리딩',
        lessonTitle: '영어',
        lessonClass: '심화 A반',
        teacher: '홍길동 선생님',
        state: true,
        students: 12,
      },
      isMoreBtn: false,
      noteDetail: {},
      noteBoxData: [
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
                      name: '국어학습노트_221117.pdf',
                      subject: '국어',
                      desc: '등록한 자료 1',
                      keyword: ['국어', '수학'],
                      worker: '등록인',
                      savepath:
                        'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                      public_open_yn: true,
                      open_yn: true,
                      filename: '',
                      dataroom_type: '교육기관',

                      uploadType: 'pdf',
                      fileSize: '',
                      createAt: '',
                      dbIdx: 1,
                      type: 'institution',
                    },
                    {
                      id: 0,
                      name: '국어학습노트_221117_1.pdf',
                      subject: '국어',
                      desc: '등록한 자료 2',
                      keyword: ['국어', '수학'],
                      worker: '등록인',
                      savepath:
                        'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                      public_open_yn: true,
                      open_yn: true,
                      filename: '',
                      dataroom_type: '교육기관',

                      uploadType: 'pdf',
                      fileSize: '',
                      createAt: '',
                      dbIdx: 2,
                      type: 'institution',
                    },
                    {
                      id: 0,
                      name: '국어학습노트_221117_2.pdf',
                      subject: '국어',
                      desc: '등록한 자료 3',
                      keyword: ['국어', '수학'],
                      worker: '등록인',
                      savepath:
                        'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                      public_open_yn: true,
                      open_yn: true,
                      filename: '',
                      dataroom_type: '교육기관',

                      uploadType: 'pdf',
                      fileSize: '',
                      createAt: '',
                      dbIdx: 3,
                      type: 'institution',
                    },
                    {
                      id: 0,
                      name: '국어학습노트_221117_3.pdf',
                      subject: '국어',
                      desc: '등록한 자료 4',
                      keyword: ['국어', '수학'],
                      worker: '등록인',
                      savepath:
                        'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                      public_open_yn: false,
                      open_yn: false,
                      filename: '',
                      dataroom_type: '교육기관',

                      uploadType: 'pdf',
                      fileSize: '',
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
    }
  },
  created() {},
  methods: {
    // click tab-menu
    onClickLecturePlan() {
      this.$router.push(
        `/class/lecturecourse/lectureplan/${this.$route.params.id}`
      )
    },
    onClickHomeWorkBox() {
      this.$router.push(
        `/class/lecturecourse/homeworkbox/${this.$route.params.id}`
      )
    },
    // modal event
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
    openDeleteModalDesc(tit) {
      this.deleteModalDesc = {
        open: true,
        title: tit,
      }
    },
    onCloseDeleteModalDesc() {
      this.deleteModalDesc.open = false
    },

    // 노트
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

    // 노트 자료 보기
    moreShowClick(note) {
      this.isMoreBtn = true
      const str = JSON.stringify(note, this.getCircularReplacer())
      this.noteDetail = JSON.parse(str)
    },

    getCheckboxData() {
      const checkDatas = this.$refs.noteBox.getCheckDataList()
      console.log(checkDatas)
    },

    // 노트 자료 삭제
    onClickDeleteBtn() {
      const checkDatas = this.$refs.noteBox.getCheckDataList()
      if (checkDatas.length === 0) {
        this.openModalDesc('노트 삭제', '삭제할 노트를 선택해주세요.')
      } else {
        this.openDeleteModalDesc('노트')
      }
    },
    checkboxDel() {
      console.log(this.$refs.noteBox)
      this.$refs.noteBox.delData()
      this.deleteModalDesc.open = false
    },
  },
}
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
.border {
  border-radius: 5px !important;
  padding: 30px 15px;
}
.icons_fullscreen {
  right: 27px !important;
  top: 168px !important;
}
</style>
