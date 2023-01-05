<template>
  <div>
    <div>
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickLecturePlan">강의계획서</div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link active" @click="onClickHomeWorkBox">과제함</div>
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
              <span class="course_tit">{{ lectureInfo.lecture }}</span>
              <span class="course_con"
                >{{ lectureInfo.class }} /
                {{ lectureInfo.teacher }} 선생님</span
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
                      id="hwb_title"
                      name="제목"
                      type="text"
                      placeholder="제목을 입력해주세요."
                      class="form-control form-inline"
                      rules="required"
                      :value="task.hwb_title"
                      @input="onChangeHomeWorkInput"
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
                    <span v-if="task.hwb_time_sdate !== ''" class="content02">
                      {{ task.hwb_time_sdate }} ~
                      {{ task.hwb_time_edate }}
                      {{ isStartTime ? '오전' : '오후' }}
                      {{ task.hwb_time_stime }} -
                      {{ isEndTime ? '오전' : '오후' }}
                      {{ task.hwb_time_etime }}
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
                v-model="task.hwb_content"
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
            <div class="reply_onoff">
              <div class="custom-control custom-switch">
                <input
                  id="hwb_open_yn"
                  type="checkbox"
                  class="custom-control-input"
                  :checked="task.hwb_open_yn"
                  @input="onChangeHomeWorkInput"
                />
                <label class="custom-control-label" for="hwb_open_yn"
                  >공개 ON / OFF</label
                >
              </div>
            </div>
            <div class="btn_area">
              <button
                class="btn btn_crud_point"
                :disabled="invalid"
                @click="registerTask"
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
    <!-- 과제 미리보기 -->
    <PreviewModal
      title="과제"
      :homeWork="task"
      :open="previewModalDesc.open"
      @close="onClosePreviewModal"
    />
    <!-- 기간선택 모달 -->
    <DateRangeModal
      :rangeInfo="task"
      :range="range"
      :isStartTime="isStartTime"
      :isEndTime="isEndTime"
      :isTask="true"
      @select-range="selectRange"
      @click-confirmBtn="onClickConfirmBtn"
      @change-input="onChangeHomeWorkInput"
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
import { apiLectureCourse } from '~/services'
import DateRangeModal from '@/components/common/modal/lecturecourse/DateRangeModal.vue'
import PreviewModal from '@/components/common/modal/lecturecourse/PreviewModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import PreviousPageModal from '@/components/common/modal/lecturecourse/PreviousPageModal.vue'
export default {
  name: 'RegisterHomeWork',
  components: {
    PreviewModal,
    DateRangeModal,
    ModalDesc,
    PreviousPageModal,
    ValidationObserver,
    ValidationProvider,
  },
  props: {},
  data() {
    return {
      // 코스 정보
      lectureInfo: {
        lectureIdx: this.$route.params.id,
        class: this.$route.query.class,
        lecture: this.$route.query.lecture,
        teacher: this.$route.query.teacher,
      },
      task: {
        fileCheck: false,
        fileList: [
          {
            lpa_file: 'string',
            lpa_size: 0,
          },
        ],
        hwb_content: '',
        hwb_open_yn: true,
        hwb_time_edate: '',
        hwb_time_etime: '',
        hwb_time_sdate: '',
        hwb_time_stime: '',
        hwb_title: '',
        lec_idx: this.$route.params.id,
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
    }
  },
  methods: {
    // 과제 등록 api
    async registerTask() {
      this.task.hwb_time_stime = this.changeTimeFormat(
        this.isStartTime,
        this.task.hwb_time_stime
      )
      this.task.hwb_time_etime = this.changeTimeFormat(
        this.isEndTime,
        this.task.hwb_time_etime
      )
      const payload = this.task
      await apiLectureCourse
        .postRegisterTask(payload)
        .then((res) => {
          console.log(res)
          this.onClickHomeWorkBox()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 과제 수정
    onChangeHomeWorkInput({ target: { value, id, checked } }) {
      this.task[id] = value
      if (id === 'hwb_open_yn') {
        this.task[id] = checked
      } else {
        this.task[id] = value
      }
      if (id === 'hwb_time_stime' || id === 'hwb_time_etime') {
        this.task[id] = value
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

    onClickConfirmBtn() {
      this.task.hwb_time_sdate = this.changeDateFormat(this.range.start)
      this.task.hwb_time_edate = this.changeDateFormat(this.range.end)
      console.log(this.task.hwb_time_sdate, this.task.hwb_time_edate)
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
    goPreviousPage() {
      this.$router.push(
        `/class/lecturecourse/homeworkbox/${this.$route.params.id}`
      )
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
