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
          <button
            class="btn btn_crud_danger"
            data-toggle="modal"
            data-target="#modalDataDelete"
            data-dismiss="modal"
            @click="checkboxDel"
          >
            삭제
          </button>
          <ul id="myTab" class="nav nav-tabs" role="tablist">
            <!-- <li class="nav-item" role="presentation">
									<button class="nav-link active" id="grade-tab" data-toggle="tab" data-target="#institute" type="button" role="tab" aria-controls="home" aria-selected="true">
										교육기관
									</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="class-tab" data-toggle="tab" data-target="#franchise" type="button" role="tab" aria-controls="profile" aria-selected="false">
										프랜차이즈
									</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="class-tab" data-toggle="tab" data-target="#open" type="button" role="tab" aria-controls="profile" aria-selected="false">
										공개자료실
									</button>
								</li> -->
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
          <div class="thumb_box">
            <div class="row">
              <div class="title">자료 열람</div>
              <div class="thumbnail_view">
                <button class="btn icons_fullscreen"></button>
              </div>
            </div>

            <div class="row name">
              <label for="" class="title02">파일 이름</label>
              <div class="col">
                <span>등록한 자료 이름</span>
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
                  <span>ON</span>
                </div>
              </div>

              <div class="row">
                <label for="" class="title02 cont">과목</label>
                <div class="col cont">
                  <span>수학</span>
                </div>
              </div>

              <div class="row">
                <label for="" class="title02 cont">경로</label>
                <div class="col cont">
                  <span>저장 경로가 입력되는 공간입니다.</span>
                </div>
              </div>
            </div>

            <!-- [개발참조] 자료열람 - 선택 안 했을 때 출력되는 문구 -->
            <!-- <div class="nodata">
									자료를 확인하는 공간입니다. <br>
									자료의 <i class="icons_zoom_off"></i> 버튼을 누르면 해당 자료를 볼 수 있습니다.
								</div> -->
          </div>
          <!-- div class="thumb_box" -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TreeView from '~/components/common/custom/CustomReferenceTreeView.vue'
export default {
  name: 'NoteBox',
  components: { TreeView },
  props: {
    lectureCourse: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
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
    }
  },
  methods: {
    moreShowClick(node) {
      console.log(`moreShowClick ${node}`)
    },
    checkboxDel() {
      this.$refs.noteBox.delData()
    },
    getCheckboxData() {
      const checkDatas = this.$refs.noteBox.getCheckDataList()
      console.log(checkDatas)
    },
  },
}
</script>
<style></style>
