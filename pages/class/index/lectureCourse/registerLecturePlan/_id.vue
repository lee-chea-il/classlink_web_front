<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item cursor">
          <div class="nav-link active" @click="onClickLecturePlan">
            강의계획서
          </div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickHomeWorkBox">과제함</div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickNoteBox">노트함</div>
        </li>
      </ul>
      <div
        class="tab-content depth03 ac_manage_notice notice_rigi ac_manage_taskregi"
      >
        <div class="tab-pane active">
          <div class="left_area">
            <div class="taskregi_tit">
              <span class="course_tit">{{ lectureCourse.subject }}</span>
              <span class="course_con"
                >{{ lectureCourse.lessonTitle }} /
                {{ lectureCourse.lessonClass }} /
                {{ lectureCourse.teacher }}</span
              >
            </div>
          </div>
          <ValidationObserver v-slot="{ invalid }">
            <div class="setting_section">
              <div class="left_section">
                <ValidationProvider v-slot="{ errors }" rules="required">
                  <div class="subject_area">
                    <span class="title">제목</span>
                    <input
                      id="lep_title"
                      name="제목"
                      type="text"
                      placeholder="제목을 입력해주세요."
                      class="form-control form-inline"
                      rules="required"
                      :value="syllabus.lep_title"
                      @input="onChangePlanInput"
                    />
                    <span class="content"
                      >작성자는 자동으로 기록에 남습니다.</span
                    >
                    <div
                      v-if="errors[0] !== ''"
                      class="invalid_text text_position_title"
                    >
                      {{ errors[0] }}
                    </div>
                  </div>
                </ValidationProvider>
                <div class="file_area">
                  <span class="title">파일첨부</span>
                  <button
                    class="btn btn_crud_default mypc"
                    @click="onClickFileInputBtn"
                  >
                    내 PC
                  </button>
                  <button class="btn btn_crud_default">삭제</button>
                  <input id="upload-input" type="file" />
                </div>
              </div>
              <div class="right_section">
                <div class="date_area">
                  <button
                    class="btn btn_crud_default"
                    data-toggle="modal"
                    data-target="#modalNoticeData"
                  >
                    기한 설정
                  </button>
                  <span class="box01 box_padding">
                    <span
                      v-if="syllabus.lep_time_sdate !== ''"
                      class="content02"
                    >
                      {{ syllabus.lep_time_sdate }} ~
                      {{ syllabus.lep_time_edate }}
                      {{ syllabus.time_range_start_m === 0 ? '오전' : '오후' }}
                      {{ syllabus.lep_time_stime }} -
                      {{ syllabus.time_range_end_m === 0 ? '오전' : '오후' }}
                      {{ syllabus.lep_time_etime }}
                    </span>
                    <span v-else class="content02"> 기한을 설정해주세요. </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="file_list">
              <div id="searchTable" class="search_result">
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">선택</th>
                      <th scope="col">파일이름</th>
                      <th scope="col">업로드 상태</th>
                      <th scope="col">용량</th>
                      <th scope="col">첨부방식(전환)</th>
                      <th scope="col">다운로드 가능기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <!-- [개발참조] 첨부파일 없을때	
										<td colspan="6">
											<span class="exp_txt">마우스로 파일을 끌어오세요</span>
										</td> -->
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk01"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk01"
                          ></label>
                        </div>
                      </td>
                      <td>영어리딩심화.pdf</td>
                      <td></td>
                      <td>4MB</td>
                      <td>대용량첨부</td>
                      <td>~22/08/01(30일간)</td>
                    </tr>

                    <tr>
                      <!-- [개발참조] 첨부파일 없을때	
											<td colspan="6">
												<span class="exp_txt">마우스로 파일을 끌어오세요</span>
											</td> -->
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk01"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk01"
                          ></label>
                        </div>
                      </td>
                      <td>영어리딩심화.pdf</td>
                      <td></td>
                      <td>4MB</td>
                      <td>일반첨부</td>
                      <td>제한없음</td>
                    </tr>

                    <tr>
                      <!-- [개발참조] 첨부파일 없을때	
												<td colspan="6">
													<span class="exp_txt">마우스로 파일을 끌어오세요</span>
												</td> -->
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk01"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk01"
                          ></label>
                        </div>
                      </td>
                      <td>영어리딩심화.pdf</td>
                      <td></td>
                      <td>4MB</td>
                      <td>일반첨부</td>
                      <td>제한없음</td>
                    </tr>

                    <tr>
                      <!-- [개발참조] 첨부파일 없을때	
												<td colspan="6">
													<span class="exp_txt">마우스로 파일을 끌어오세요</span>
												</td> -->
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk01"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk01"
                          ></label>
                        </div>
                      </td>
                      <td>영어리딩심화.pdf</td>
                      <td></td>
                      <td>4MB</td>
                      <td>일반첨부</td>
                      <td>제한없음</td>
                    </tr>

                    <tr>
                      <!-- [개발참조] 첨부파일 없을때	
											<td colspan="6">
												<span class="exp_txt">마우스로 파일을 끌어오세요</span>
											</td> -->
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk01"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk01"
                          ></label>
                        </div>
                      </td>
                      <td>영어리딩심화.pdf</td>
                      <td></td>
                      <td>4MB</td>
                      <td>일반첨부</td>
                      <td>제한없음</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <ValidationProvider v-slot="{ errors }" rules="contents_required">
              <VueEditor
                v-model="syllabus.lep_content"
                :editorOptions="editorOptions"
                :editorToolbar="editorToolbar"
              />
              <div v-if="errors[0] !== ''" class="invalid_text text_position">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
            <!-- <div class="write_area">
            <div class="page_nodata">글쓰기 공간입니다.</div>
          </div> -->
            <div class="custom-control custom-checkbox form-inline open_regi">
              <input
                id="open"
                type="checkbox"
                class="custom-control-input"
                @input="onChangePlanInput"
              />
              <label class="custom-control-label" for="open"
                >글을 공개 상태로 등록합니다.</label
              >
            </div>
            <div class="btn_area">
              <button
                class="btn btn_crud_point"
                :disabled="invalid"
                @click="registerSyllabus"
              >
                등록
              </button>
              <a class="btn btn_crud_default" @click="openPreviousPageModal"
                >취소</a
              >
              <button class="btn btn_crud_default" @click="openPreviewModal">
                미리보기
              </button>
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
    <!-- 강의계획서 미리보기 -->
    <PreviewModal
      title="강의계획서"
      :syllabus="syllabus"
      :lecturePlan="lecturePlan"
      :open="previewModalDesc.open"
      @close="onClosePreviewModal"
    />
    <!-- 기간선택 모달 -->
    <DateRangeModal
      :rangeInfo="syllabus"
      :range="range"
      :isStartTime="isStartTime"
      :isEndTime="isEndTime"
      @select-range="selectRange"
      @click-confirmBtn="onClickConfirmBtn"
      @change-input="onChangePlanInput"
      @start-time="onClickStartTimeSelect"
      @end-time="onClickEndTimeSelect"
    />
    <!-- 설명 모달 -->
    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />
    <!-- 작성 취소 모달 -->
    <PreviousPageModal
      :open="previousPageModalDesc.open"
      @close="onClosePreviousPageModal"
      @prev="goPreviousPage"
    />
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

import DateRangeModal from '@/components/common/modal/lecturecourse/DateRangeModal.vue'
import PreviewModal from '@/components/common/modal/lecturecourse/PreviewModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import PreviousPageModal from '@/components/common/modal/lecturecourse/PreviousPageModal.vue'
import { apiLectureCourse } from '~/services'
export default {
  name: 'RegisterLecturePlan',
  components: {
    DateRangeModal,
    PreviewModal,
    ModalDesc,
    PreviousPageModal,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      // 강의계획서
      syllabus: {
        file_exist: false,
        lec_idx: this.$route.params.id,
        lep_content: '',
        lep_delete_yn: 'N',
        lep_idx: 0,
        lep_time_edate: '',
        lep_time_etime: '',
        lep_time_sdate: '',
        lep_time_stime: '',
        lep_title: '',
        lpa_file: ['파일이름'],
        lpa_size: [0],
        mem_idx: this.$store.state.common.user.mem_idx,
      },
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
      lecturePlan: {
        id: 0,
        course_id: 0,
        title: '',
        writer: '',
        created_at: '',
        date_range_start: '',
        date_range_end: '',
        time_range_start: '',
        time_range_end: '',
        time_range_start_m: 0,
        time_range_end_m: 0,
        open: true,
        views: 0,
        contents: '',
      },
      // modal
      previewModalDesc: {
        open: false,
      },
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      previousPageModalDesc: {
        open: false,
      },
      // editor
      editorOptions: {
        modules: {
          imageDrop: true,
          imageEdit: true,
        },
      },
      editorToolbar: [
        // [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline', 'strike'],
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' },
        ],
        // ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        // [{ indent: '-1' }, { indent: '+1' }],
        // [{ color: [] }, { background: [] }],
        ['image'],
      ],
      // calendar
      range: {
        start: new Date(),
        end: new Date(),
      },
      isStartTime: true,
      isEndTime: true,
      time: '11:00',
    }
  },
  methods: {
    // 강의계획서 등록 api
    async registerSyllabus() {
      this.syllabus.lep_time_stime = this.changeTimeFormat(
        this.isStartTime,
        this.syllabus.lep_time_stime
      )
      this.syllabus.lep_time_etime = this.changeTimeFormat(
        this.isEndTime,
        this.syllabus.lep_time_etime
      )
      const payload = this.syllabus
      await apiLectureCourse
        .postRegisterSyllabus(payload)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 강의계획서 등록/수정
    onChangePlanInput({ target: { value, id, checked } }) {
      this.syllabus[id] = value
      // if (id === 'open') {
      //   this.syllabus[id] = checked
      // } else {
      //   this.syllabus[id] = value
      // }
      if (id === 'lep_time_stime' || id === 'lep_time_etime') {
        this.syllabus[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,2})(\d{0,2})$/g, '$1:$2')
          .replace(/(:{1})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
    },
    // 캘린더 기간 설정
    selectRange(e) {
      this.range.start = e.start
      this.range.end = e.end
      console.log(this.range)
    },
    // 날짜 변환
    changeDateFormat(date) {
      const year = date.getFullYear()
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      const day = ('0' + date.getDate()).slice(-2)
      const dateString = year + '-' + month + '-' + day
      return dateString
    },
    // 캘린더 시간 설정
    onClickStartTimeSelect() {
      if (this.isStartTime) {
        this.isStartTime = false
      } else {
        this.isStartTime = true
      }
    },
    onClickEndTimeSelect() {
      if (this.isEndTime) {
        this.isEndTime = false
      } else {
        this.isEndTime = true
      }
    },
    // 시간 변환
    changeTimeFormat(m, time) {
      if (!m) {
        let hh = time.slice(0, 2)
        const mm = time.slice(3, 5)
        hh = Number(hh) + 12
        return `${hh}:${mm}`
      } else {
        return time
      }
    },

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
    onClickNoteBox() {
      this.$router.push(`/class/lecturecourse/notebox/${this.$route.params.id}`)
    },

    onClickFileInputBtn() {
      const inputBtn = document.getElementById('upload-input')
      inputBtn.click()
    },

    // 미리보기 모달
    openPreviewModal() {
      this.previewModalDesc.open = true
    },
    onClosePreviewModal() {
      this.previewModalDesc.open = false
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
    openPreviousPageModal() {
      this.previousPageModalDesc.open = true
    },
    onClosePreviousPageModal() {
      this.previousPageModalDesc.open = false
    },
    //
    registerLecturePlan() {
      this.openModalDesc('강의계획서 등록', '강의계획서가 등록되었습니다.')
    },
    goPreviousPage() {
      this.$router.push(
        `/class/lecturecourse/lectureplan/${this.$route.params.id}`
      )
    },
    onClickConfirmBtn() {
      this.syllabus.lep_time_sdate = this.changeDateFormat(this.range.start)
      this.syllabus.lep_time_edate = this.changeDateFormat(this.range.end)
      console.log(this.syllabus.lep_time_sdate, this.syllabus.lep_time_edate)
    },
  },
}
</script>
<style lang="postcss" scoped>
/deep/.quillWrapper {
  margin-top: 15px !important;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 0.4px solid rgba(167, 169, 172, 0.4);
  border-radius: 5px !important;
}
/deep/.ql-toolbar,
/deep/.ql-container {
  border-width: 0 !important;
}
/deep/.ql-toolbar {
  border-bottom: 0.4px solid rgba(167, 169, 172, 0.4) !important;
}
/deep/.ql-editor {
  min-height: 400px;
  font-size: 15px;
}
</style>
<style scoped>
#upload-input {
  visibility: hidden;
}
.cursor {
  cursor: pointer;
}
.box_padding {
  padding: 3px 50px 10px 50px !important;
}
.text_position {
  margin-top: 0px;
}
.text_position_title {
  margin-top: 0px;
  padding-left: 95px;
}
</style>
