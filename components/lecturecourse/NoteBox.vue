<template>
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
            >{{ lectureCourse.lessonTitle }} / {{ lectureCourse.lessonClass }} /
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
            자료의 <i class="icons_zoom_off"></i> 버튼을 누르면 해당 자료를 볼
            수 있습니다.
          </div>
          <div v-else class="thumb_box">
            <div class="row">
              <div class="title">자료 열람</div>

              <div class="thumbnail_view">
                <NoteView
                  :open="noteDetail.uploadType === 'pdf'"
                  :data="noteDetail"
                />
                <!-- <button class="btn icons_fullscreen"></button> -->
                <a
                  class="btn icons_fullscreen"
                  :href="noteDetail.savePath"
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
                  <span>{{ noteDetail.isOpenEducation ? 'ON' : 'OFF' }}</span>
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
                  <span>{{ noteDetail.savePath }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TreeView from '@/components/common/custom/CustomReferenceTreeView.vue'
import NoteView from '@/components/lecturecourse/NoteView.vue'
export default {
  name: 'NoteBox',
  components: { TreeView, NoteView },
  props: {
    lectureCourse: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
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
                      registrant: '등록인',
                      savePath:
                        'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                      isOpenEducation: true,
                      isContinueRegister: true,
                      fileName: '',
                      fileDivision: '교육기관',
                      fileType: 'pdf',
                      uploadType: 'pdf',
                      fileVolume: '',
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
                      registrant: '등록인',
                      savePath:
                        'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                      isOpenEducation: true,
                      isContinueRegister: true,
                      fileName: '',
                      fileDivision: '교육기관',
                      fileType: 'pdf',
                      uploadType: 'pdf',
                      fileVolume: '',
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
                      registrant: '등록인',
                      savePath:
                        'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                      isOpenEducation: true,
                      isContinueRegister: true,
                      fileName: '',
                      fileDivision: '교육기관',
                      fileType: 'pdf',
                      uploadType: 'pdf',
                      fileVolume: '',
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
                      registrant: '등록인',
                      savePath:
                        'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                      isOpenEducation: false,
                      isContinueRegister: false,
                      fileName: '',
                      fileDivision: '교육기관',
                      fileType: 'pdf',
                      uploadType: 'pdf',
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
    }
  },
  methods: {
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

    checkboxDel() {
      console.log(this.$refs.noteBox)
      this.$refs.noteBox.delData()
    },

    getCheckboxData() {
      const checkDatas = this.$refs.noteBox.getCheckDataList()
      console.log(checkDatas)
    },

    onClickDeleteBtn() {
      const checkDatas = this.$refs.noteBox.getCheckDataList()
      if (checkDatas.length === 0) {
        console.log('삭제할 노트를 선택해주세요.')
      } else {
        console.log('삭제하시겠습니까')
        this.checkboxDel()
      }
    },
  },
}
</script>
<style scoped>
.border {
  border-radius: 5px !important;
  padding: 30px 15px;
}
.icons_fullscreen {
  right: 27px !important;
  top: 168px !important;
}
</style>
