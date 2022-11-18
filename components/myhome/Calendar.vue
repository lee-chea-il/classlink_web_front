<template>
  <div class="calendar_section">
    <!-- 캘린더 영역 -->
    <DatePicker
      :value="attributes"
      trim-weeks
      class="custom-calendar"
      color="teal"
      :masks="{ title: 'YYYY MMM' }"
      :attributes="attributes"
      @dayclick="$emit('click-date', $event)"
    />
    <!-- / 캘린더 영역 -->
    <!-- 선택일자 스케쥴 -->
    <div class="schedule">
      <div class="date">{{ selectedDateTitle }}</div>
      <div class="list_area">
        <div v-if="selectedDateTaskList.length === 0" class="nothing_txt">
          오늘의 일정이 없습니다.
        </div>
        <ul>
          <li v-for="(item, idx) in selectedDateTaskList" :key="idx">
            <div class="time">{{ item.time_start }}</div>
            <div class="lesson_info">
              <div class="subject">
                {{ item.subject }}
              </div>
              <div class="lesson">
                <span>{{ item.lessonTitle }}</span
                ><span class="divid"></span> <span>{{ item.lessonClass }}</span
                ><span class="divid"></span>
                <span class="teacher">{{ item.teacher }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- /.선택일자 스케쥴 -->
  </div>
</template>
<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
  name: 'Calendar',
  components: {
    DatePicker,
  },
  date() {
    return {}
  },
  props: {
    selectedDateTaskList: {
      type: Array,
      default: () => [],
    },
    selectedDateTitle: {
      type: String,
      default: '',
    },
    attributes: {
      type: Array,
      default: () => [],
    },
    
  },
}
</script>
<style scoped>
.nothing_txt {
  justify-content: flex-start;
  top: 35px;
}
</style>
<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #f9f9fc;
  --day-width: 90px;
  --day-height: 150px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #f9f9fc;
  --blue-600: #d1dbff;
  --teal-600: #afeced;
  --white: #2c51d7;
  border: 0;
  background-color: #f9f9fc;
  width: 100%;
}
/deep/ .vc-weeks {
  padding-top: 20px;
  color: #2c51d7;
  height: 250px;
}
/deep/ .vc-container [role='button'] {
  cursor: pointer;
  color: #2c51d7;
}

/deep/ .vc-weeks span {
  font-size: 15px;
}

/deep/ .vc-weekday {
  color: #2c51d7;
  border-bottom: 1px solid #2c51d7;
  padding-top: 8px;
  padding-bottom: 4px;
}

/deep/ .vc-pane-container {
  color: #2c51d7;
}

/deep/ .vc-svg-icon {
  color: #7391fa;
  background: white;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  box-shadow: 1px 1px 4px 4px #eae9e9;
}

/deep/ .vc-nav-popover-container {
  background: #f9f9fc;
}
/deep/ .vc-title {
  color: #2c51d7;
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
