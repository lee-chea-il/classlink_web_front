<template>
  <div>
    <div class="content_area">
      <!--  3Depth -->
      <CustomPageHeader />
      <div class="tab-content depth03 ac_manage_notice notice_rigi">
        <RegistEducationBox
          :noticeList.sync="noticeList"
          :editorToolbar="editorToolbar"
          :editorOptions="editorOptions"
          @regist-notice="onClickNoticeRegist"
        />
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
      @after-deadline="onClickAfterDeadlineCheck"
      @notice-alarm="onClickNoticeAlarmCheck"
    />
    <!-- @click-date="onDayClick" -->
    <SettingNoticeTarget
      :noticeList="noticeList"
      :target="target"
      :targetList="targetList"
      :allCheck="allcheck"
      @onClickTargetAllCheck="onClickTargetAllCheck"
      @target-setting="onClickTargetSetting"
      @complete="onClickTargetSeleted"
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
import RegistEducationBox from '@/components/notice/RegistEducationBox.vue'
import CustomPageHeader from '~/components/notice/CustomPageHeader.vue'
import SettingNoticeDeadline from '~/components/common/modal/notice/SettingNoticeDeadline.vue'
import SettingNoticeTarget from '~/components/common/modal/notice/SettingNoticeTarget.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'

export default {
  name: 'All',
  components: {
    RegistEducationBox,
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
        after_deadline: true,
        notice_alarm: false,
        targetSetting: ['홍길동', '김철수', '이유리'],
      },
      target: ['홍길동', '김철수', '이유리'],
      targetList: ['홍길동', '김철수', '이유리'],

      masks: {
        input: 'YYYY-MM-DD h:mm A',
      },

      allcheck: true,

      selectedDateTitle: '',
      editorOptions: {
        modules: {
          imageDrop: true,
          imageEdit: true,
        },
      },
      editorToolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' },
        ],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image'],
      ],
      range: {
        start: new Date(),
        end: new Date(),
        time_range_start: '09:00',
        time_range_end: '11:59',
        time_range_start_m: 0,
        time_range_end_m: 0,
        after_deadline: true,
        notice_alarm: false,
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
      this.noticeList.time_range_start = this.range.time_range_start
      this.noticeList.time_range_end = this.range.time_range_end
      this.noticeList.time_range_start_m = this.range.time_range_start_m
      this.noticeList.time_range_end_m = this.range.time_range_end_m
      this.noticeList.after_deadline = this.range.after_deadline
      this.noticeList.notice_alarm = this.range.notice_alarm

      // console.log(
      //   '날짜',
      //   this.noticeList.date_range_start,
      //   this.noticeList.date_range_end,
      //   '시간',
      //   this.noticeList.time_range_start,
      //   this.noticeList.time_range_end,
      //   this.noticeList.time_range_start_m,
      //   this.noticeList.time_range_end_m,
      //   '체크박스',
      //   this.noticeList.after_deadline,
      //   this.noticeList.notice_alarm
      // )
    },
    onChangePlanInput({ target: { value, id, checked } }) {
      this.range[id] = value
      if (id === 'open') {
        this.range[id] = checked
      } else {
        this.range[id] = value
      }
      if (id === 'time_range_start' || id === 'time_range_end') {
        this.range[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,2})(\d{0,2})$/g, '$1:$2')
          .replace(/(:{1})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
    },

    onClickStartTimeSelect() {
      if (this.range.time_range_start_m === 0) {
        this.range.time_range_start_m = 1
      } else {
        this.range.time_range_start_m = 0
      }
    },
    onClickEndTimeSelect() {
      if (this.range.time_range_end_m === 0) {
        this.range.time_range_end_m = 1
      } else {
        this.range.time_range_end_m = 0
      }
    },

    // 기한 설정 체크박스
    onClickAfterDeadlineCheck() {
      if (this.range.after_deadline) {
        this.range.after_deadline = false
      } else {
        this.range.after_deadline = true
      }
    },
    onClickNoticeAlarmCheck() {
      if (this.range.notice_alarm) {
        this.range.notice_alarm = false
      } else {
        this.range.notice_alarm = true
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
    // onClickTargetSetting(data) {
    //   console.log(data)
    //   if (this.targetList[data.id - 1].state) {
    //     data.state = false
    //     this.noticeList.targetSetting = this.noticeList.targetSetting.filter(
    //       (item) => item !== data.text
    //     )
    //   } else {
    //     data.state = true
    //     this.noticeList.targetSetting.push(data.text)
    //   }
    // },

    onClickTargetAllCheck() {
      if (this.allcheck) {
        this.allcheck = false
        this.targetList.splice(0, this.targetList.length)
      } else {
        this.allcheck = true
        this.targetList.splice(0, this.targetList.length)
        for (let i = 0; i < this.target.length; i++) {
          this.targetList.push(this.target[i])
        }
      }
    },

    onClickTargetSetting(data) {
      console.log(data, this.targetList.includes(data))
      if (this.targetList.includes(data)) {
        this.targetList = this.targetList.filter((item) => item !== data)
        if (this.target.length !== this.targetList.length) {
          this.allcheck = false
        }
      } else {
        this.targetList.push(data)
        if (this.target.length === this.targetList.length) {
          this.allcheck = true
        }
      }

      // if (this.targetList[data.id - 1].state) {
      //   data.state = false
      //   this.target = this.target.filter((item) => item !== data.text)
      //   if (this.target.length !== this.targetList.length) {
      //     this.allcheck = false
      //   }
      // } else {
      //   data.state = true
      //   this.target.push(data.text)
      //   if (this.target.length === this.targetList.length) {
      //     this.allcheck = true
      //   }
      // }
    },

    onClickTargetSeleted() {
      console.log('asdfsa')
      this.noticeList.targetSetting = this.targetList
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
</style>
