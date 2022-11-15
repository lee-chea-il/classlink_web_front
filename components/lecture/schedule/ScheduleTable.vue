<template>
  <table class="table">
    <TableColGroup />
    <thead>
      <tr>
        <th
          class="weeks sun"
          style="
            border: none;
            background: #f8f8fc;
            border-top: 1px solid #dee2e6;
          "
        />
        <th class="weeks sun">
          <div class="tit_week" style="border-left: 1px solid #dfe0e4">
            일<br />08
          </div>
        </th>
        <th class="weeks">
          <div class="tit_week">월<br />08</div>
        </th>
        <th class="weeks">
          <div class="tit_week">화<br />08</div>
        </th>
        <th class="weeks">
          <div class="tit_week">수<br />08</div>
        </th>
        <th class="weeks">
          <div class="tit_week">목<br />08</div>
        </th>
        <th class="weeks">
          <div class="tit_week">금<br />08</div>
        </th>
        <th class="weeks sat">
          <div class="tit_week">토<br />08</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, idx) in hourData" :key="idx" class="line_box">
        <td class="weeks" style="border: none; background: #f8f8fc">
          <div class="half-hour table_time">
            <div>
              {{ idx === 0 || idx % 6 === 0 ? `${item}:00` : '' }}
            </div>
          </div>
        </td>
        <CustomTableCell
          weekName="sun"
          :idx="idx"
          :currentTime="setTimeList(item)"
          :scheduleWeekList="scheduleWeekList"
          @delete-schedule="setDeleteSchedule"
        />
        <CustomTableCell
          weekName="mon"
          :idx="idx"
          :currentTime="setTimeList(item)"
          :scheduleWeekList="scheduleWeekList"
          @delete-schedule="setDeleteSchedule"
        />
        <CustomTableCell
          weekName="tue"
          :idx="idx"
          :currentTime="setTimeList(item)"
          :scheduleWeekList="scheduleWeekList"
          @delete-schedule="setDeleteSchedule"
        />
        <CustomTableCell
          weekName="wed"
          :idx="idx"
          :currentTime="setTimeList(item)"
          :scheduleWeekList="scheduleWeekList"
          @delete-schedule="setDeleteSchedule"
        />
        <CustomTableCell
          weekName="thu"
          :idx="idx"
          :currentTime="setTimeList(item)"
          :scheduleWeekList="scheduleWeekList"
          @delete-schedule="setDeleteSchedule"
        />
        <CustomTableCell
          weekName="fri"
          :idx="idx"
          :currentTime="setTimeList(item)"
          :scheduleWeekList="scheduleWeekList"
          @delete-schedule="setDeleteSchedule"
        />
        <CustomTableCell
          weekName="set"
          :idx="idx"
          :currentTime="setTimeList(item)"
          :scheduleWeekList="scheduleWeekList"
          @delete-schedule="setDeleteSchedule"
        />
      </tr>
    </tbody>
  </table>
</template>

<script>
import TableColGroup from './TableColGroup.vue'
import CustomTableCell from '~/components/lecture/custom/CustomTableCell.vue'

export default {
  name: 'ScheduleTable',
  components: { TableColGroup, CustomTableCell },
  props: {
    hourData: { type: Array, default: () => [] },
    scheduleWeekList: { type: Object, default: () => {} },
  },
  methods: {
    // 테이블 아이템 시간으로 설정
    setTimeList(timeData) {
      const time = timeData.toString()
      const timeLen = time.length
      const isOnTime = time.includes('.5')
      const timeSet = (a, b) => {
        return time.replace(a, b)
      }
      if (isOnTime) {
        if (timeLen === 3) {
          return Number(timeSet(/(\d)(.5)/, '0$130'))
        } else {
          return Number(timeSet(/(\d)(.5)/, '$130'))
        }
      } else if (timeLen === 1) {
        return Number(timeSet(/(\d)/, '0$100'))
      } else {
        return Number(timeSet(/(\d\d)/, '$100'))
      }
    },
    setDeleteSchedule(e, idx) {
      this.$emit('delete-schedule', e, idx)
    },
  },
}
</script>

<style scoped>
.table {
  width: 100%;
  height: 100%;
  margin: 0;
}

.weeks {
  padding: 0 !important;
}

.table_time {
  position: relative;
  border-top: 0 !important;
}
.table_time > div {
  position: absolute;
  top: -10px;
  left: 9px;
  font-size: 14px;
  text-align: center;
  width: 34px;
}
</style>
