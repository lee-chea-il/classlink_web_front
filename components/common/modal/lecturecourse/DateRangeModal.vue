<template>
  <div
    id="modalNoticeData"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">
            열람 기한 및 시간 설정
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="notice_time">
            <span class="title">시간 설정</span>
            <span class="dropdown form-inline">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {{ isStartTime ? '오전' : '오후' }}
              </button>
              <span class="dropdown-menu">
                <a class="dropdown-item cursor" @click="$emit('start-time')">{{
                  isStartTime ? '오후' : '오전'
                }}</a>
              </span>
            </span>
            <input
              v-if="!isTask"
              id="lep_time_stime"
              type="text"
              placeholder="09:00"
              maxlength="5"
              :value="rangeInfo.lep_time_stime"
              class="form-control form-inline form-time"
              @input="$emit('change-input', $event)"
            />
            <input
              v-if="isTask"
              id="hwb_time_stime"
              type="text"
              placeholder="09:00"
              maxlength="5"
              :value="rangeInfo.hwb_time_stime"
              class="form-control form-inline form-time"
              @input="$emit('change-input', $event)"
            />
            -
            <div class="dropdown form-inline">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {{ isEndTime ? '오전' : '오후' }}
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item cursor" @click="$emit('end-time')">{{
                  isEndTime ? '오후' : '오전'
                }}</a>
              </div>
            </div>
            <input
              v-if="!isTask"
              id="lep_time_etime"
              type="text"
              placeholder="11:59"
              maxlength="5"
              :value="rangeInfo.lep_time_etime"
              class="form-control form-inline form-time"
              @input="$emit('change-input', $event)"
            />
            <input
              v-if="isTask"
              id="hwb_time_etime"
              type="text"
              placeholder="11:59"
              maxlength="5"
              :value="rangeInfo.hwb_time_etime"
              class="form-control form-inline form-time"
              @input="$emit('change-input', $event)"
            />
          </div>
          <div class="notice_date">
            <div class="title02">날짜 설정</div>
            <div class="calendar">
              <div class="calendar_box">
                <DatePicker
                  :value="range"
                  :masks="{ title: 'YYYY MMM' }"
                  trim-weeks
                  is-expanded
                  is-range
                  @input="$emit('select-range', $event)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn_crud_point"
            data-dismiss="modal"
            @click="$emit('click-confirmBtn')"
          >
            완료
          </button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
  name: 'DateRangeModal',
  components: {
    DatePicker,
  },
  props: {
    rangeInfo: {
      type: Object,
      default: () => {},
    },
    range: {
      type: Object,
      default: () => {},
    },
    isStartTime: {
      type: Boolean,
      default: true,
    },
    isEndTime: {
      type: Boolean,
      default: true,
    },
    isTask: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.calendar_box {
  border: 0 !important;
}
</style>
<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
/deep/ .vc-container {
  --day-width: 90px;
  --day-height: 150px;
  --weekday-bg: #f8fafc;
  --teal-600: #bee3f8;
  border-radius: 5px;
  border: 0.4px solid rgba(167, 169, 172, 0.4);
}
/deep/ .vc-weeks {
  padding-top: 20px;
  color: #454545;
  height: 239px;
}
/deep/ .vc-container [role='button'] {
  cursor: pointer;
  color: #454545;
}

/deep/ .vc-weeks span {
  font-size: 15px;
}
/deep/ .vc-pane-container {
  color: #454545;
}

/deep/ .vc-nav-popover-container {
  background: #f9f9fc;
}
/deep/ .vc-title {
  color: #454545;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
}
/deep/ .vc-nav-item:hover {
  background: #f9f9fc;
}
/deep/ .vc-nav-arrow:hover {
  background: #f9f9fc;
}
/deep/ .vc-nav-title.vc-grid-focus {
  background: #f9f9fc;
}
/deep/ .vc-popover-content.direction-bottom {
  border: 1px solid #dbdbdb;
}
/deep/ .vc-nav-item.is-active {
  background: #f9f9fc;
}
/deep/ .vc-day-content:focus {
  background-color: rgb(204 214 224 / 0%);
}
/deep/ .vc-day-content:hover {
  background-color: rgb(204 214 224 / 0%);
}
/deep/ .vc-arrow:hover {
  background-color: rgb(204 214 224 / 0%);
}

.vc-day-content: hover;
</style>
