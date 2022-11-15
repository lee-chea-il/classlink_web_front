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
                오전
              </button>
              <span class="dropdown-menu">
                <a class="dropdown-item cursor" @click="$emit('start-time')"
                  >오후</a
                >
              </span>
            </span>
            <input
              id="time_range_start"
              type="text"
              placeholder="09:00"
              value="09:00"
              class="form-control form-inline form-time"
            />
            -
            <div class="dropdown form-inline">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                오전
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item cursor" @click="$emit('end-time')"
                  >오후</a
                >
              </div>
            </div>
            <input
              id="time_range_end"
              type="text"
              placeholder="11:59"
              value="11:59"
              class="form-control form-inline form-time"
            />
          </div>
          <div class="notice_date">
            <div class="title02">날짜 설정</div>
            <div class="calendar">
              <div class="calendar_box">
                <DatePicker
                  v-model="dateRange"
                  :value="dateRange"
                  trim-weeks
                  is-expanded
                  is-range
                  @dayclick="$emit('click-date', $event)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point">완료</button>
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
    lecturePlan: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      today: new Date(),
    }
  },
  computed: {
    dateRange: {
      set(val) {
        console.log(val)
        console.log(val.start)
        console.log(val.end)
        // action after date change here
      },
      get() {
        const range = {
          start: new Date(),
          end: new Date(),
        }
        // action after receives date from props
        return range
      },
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
