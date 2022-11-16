<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <CustomPageHeader
        title1="전체"
        title2="반"
        title3="개인"
        url1="/management/notice/all"
        url2="/management/notice/class"
        url3="/management/notice/individual"
      />
      <div class="tab-content depth03 ac_manage_notice notice_rigi">
        <div class="tab-pane active">
          <div class="setting_section">
            <div class="left_section">
              <div class="subject_area">
                <span class="title">제목</span>
                <input
                  v-model="noticeList.title"
                  type="text"
                  placeholder="제목을 입력해주세요."
                  class="form-control form-inline"
                />
                <span class="content">작성자는 자동으로 기록에 남습니다.</span>
              </div>
              <div class="file_area">
                <span class="title">파일첨부</span>
                <input
                  id="fileSelect"
                  type="file"
                  class="custom-control-input"
                />
                <label for="fileSelect" class="btn btn_crud_default mypc"
                  >내 PC</label
                >
                <button class="btn btn_crud_default">삭제</button>
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
                <span class="box01">
                  <span class="content02">
                    {{ noticeList.date_range_start }} -
                    {{ noticeList.date_range_end }}
                    {{ noticeList.time_range_start_m === 0 ? '오전' : '오후' }}
                    {{ noticeList.time_range_start }} -
                    {{ noticeList.time_range_end_m === 0 ? '오전' : '오후' }}
                    {{ noticeList.time_range_end }}
                  </span>
                </span>
              </div>
              <div class="target_area">
                <button
                  class="btn btn_crud_default"
                  data-toggle="modal"
                  data-target="#modalNoticeTarget"
                >
                  대상 설정
                </button>
                <span class="box02">
                  <span class="content02">
                    <span
                      v-for="(item, idx) in noticeList.targetSetting"
                      :key="idx"
                    >
                      {{ item }}
                      <span v-if="noticeList.targetSetting.length - 1 !== idx"
                        >|</span
                      >
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div class="file_list mb-3">
            <div id="searchTable" class="search_result">
              <table class="table table-borderless">
                <!-- <colgroup>
									<col width="10%" />
									<col width="20%" />
									<col width="20%" />
									<col width="10%" />
									<col width="20%" />
									<col width="20%" />
								</colgroup> -->
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
                  <!-- 	<tr>
										<td colspan="6">
											<span class="exp_txt">마우스로 파일을 끌어오세요</span>
										</td>
									</tr> -->

                  <tr v-for="(item, idx) in 5" :key="idx">
                    <td>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          :id="`chk${idx}`"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          :for="`chk${idx}`"
                        ></label>
                      </div>
                    </td>
                    <td class="table001">영어리딩심화.pdf</td>
                    <td></td>
                    <td>4MB</td>
                    <td>대용량첨부</td>
                    <td>~22/08/01(30일간)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <VueEditor
            v-model="noticeList.content"
            :editorOptions="editorOptions"
            :editorToolbar="editorToolbar"
          />
          <div class="btn_area">
            <button class="btn btn_crud_point" @click="onClickNoticeRegist">
              등록
            </button>
            <NuxtLink to="/management/notice/all" class="btn btn_crud_default"
              >취소</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <SettingNoticeDeadline
      :noticeList="noticeList"
      :range="range"
      @select-range="selectRange"
      @click-confirmBtn="onClickConfirmBtn"
      @change-input="onChangePlanInput"
      @start-time="onClickStartTimeSelect"
      @end-time="onClickEndTimeSelect"
    />
    <!-- @click-date="onDayClick" -->
    <SettingNoticeTarget
      :noticeList="noticeList"
      :target="target"
      @target-setting="onClickTargetSetting"
    />

    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />
  </div>
</template>

<script>
// import PageHeader from '~/components/common/PageHeader.vue'
import CustomPageHeader from '~/components/common/custom/CustomPageHeader.vue'
import SettingNoticeDeadline from '~/components/common/modal/notice/SettingNoticeDeadline.vue'
import SettingNoticeTarget from '~/components/common/modal/notice/SettingNoticeTarget.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'

export default {
  name: 'All',
  components: {
    CustomPageHeader,
    SettingNoticeDeadline,
    SettingNoticeTarget,
    ModalDesc,
  },
  data() {
    return {
      noticeList: {
        title: '컴플레인 이슈사항 공지드립니다.',
        content:
          '안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.  안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다. 안녕하십니까? 홍길동 학원장입니다. 컴플레인 관련 이슈사항 공지드립니다.',
        date_range_start: '2022.08.05',
        date_range_end: '2022.08.07',
        time_range_start: '09:00',
        time_range_end: '11:59',
        time_range_start_m: 0,
        time_range_end_m: 0,
        notice_alarm: true,
        targetSetting: [],
      },
      target: ['선생님', '학부모', '학생'],
      // targetTest: [
      //   {
      //     text: '선생님',
      //     state: true,
      //   },
      //   {
      //     text: '학부모',
      //     state: true,
      //   },
      //   {
      //     text: '선생님',
      //     state: true,
      //   },
      // ],

      masks: {
        input: 'YYYY-MM-DD h:mm A',
      },

      selectedDateTitle: '',
      editorOptions: {
        modules: {
          imageDrop: true,
          imageEdit: true,
        },
      },
      editorToolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline', 'strike'],
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' },
        ],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ color: [] }, { background: [] }],
        ['image'],
      ],
      range: {
        start: new Date(),
        end: new Date(),
      },

      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
    }
  },
  methods: {
    // 캘린더
    selectRange(e) {
      this.range.start = e.start
      this.range.end = e.end
      console.log(this.range)
    },
    changeDateFormat(date) {
      const year = date.getFullYear()
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      const day = ('0' + date.getDate()).slice(-2)
      const dateString = year + '.' + month + '.' + day
      return dateString
    },
    onClickConfirmBtn() {
      this.noticeList.date_range_start = this.changeDateFormat(this.range.start)
      this.noticeList.date_range_end = this.changeDateFormat(this.range.end)

      console.log(
        this.noticeList.date_range_start,
        this.noticeList.date_range_end,
        this.noticeList.notice_alarm
      )
    },
    onChangePlanInput({ target: { value, id, checked } }) {
      this.noticeList[id] = value
      if (id === 'open') {
        this.noticeList[id] = checked
      } else {
        this.noticeList[id] = value
      }
      if (id === 'time_range_start' || id === 'time_range_end') {
        this.noticeList[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,2})(\d{0,2})$/g, '$1:$2')
          .replace(/(:{1})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
    },

    onClickStartTimeSelect() {
      if (this.noticeList.time_range_start_m === 0) {
        this.noticeList.time_range_start_m = 1
      } else {
        this.noticeList.time_range_start_m = 0
      }
    },
    onClickEndTimeSelect() {
      if (this.noticeList.time_range_end_m === 0) {
        this.noticeList.time_range_end_m = 1
      } else {
        this.noticeList.time_range_end_m = 0
      }
    },

    // 모달 이벤트
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

    // 공지사항 등록
    onClickNoticeRegist() {
      if (
        this.noticeList.title === '' ||
        this.noticeList.content === '' ||
        this.noticeList.targetSetting.length === 0
      ) {
        this.openModalDesc(
          '공지사항 등록 실패',
          '공지사항을 작성하고 클릭해주세요.'
        )
      } else {
        this.openModalDesc('공지사항 등록', '공지사항이 등록되었습니다.')
      }
    },

    // 대상 설정 체크박스
    onClickTargetSetting({ target: { id, checked } }) {
      console.log(id, checked)
      if (checked) {
        this.noticeList.targetSetting.push(this.target[id])
      } else {
        this.noticeList.targetSetting.splice(id, 1)
      }
      console.log(this.noticeList.targetSetting)
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
.custom-control-label::after {
  left: -1.65rem !important;
}
</style>
