<template>
  <td
    v-if="isSchedule === 1"
    class="weeks is_time"
    :style="getBg"
    :rowspan="rowSpanIdx"
  >
    <div :class="isTrue(idx)" />
    <button
      class="btn icons_minus_circle_alph"
      @click="$emit('delete-schedule', weekName, weekData)"
    ></button>
  </td>

  <td v-else-if="isSchedule === 2" class="none"></td>

  <td v-else class="weeks">
    <div :class="isTrue(idx)" />
  </td>
</template>

<script>
export default {
  name: 'CustomTableCell',
  props: {
    currentTime: { type: Number, default: 0 },
    weekName: { type: String, default: '' },
    scheduleWeekList: { type: Object, default: () => {} },
    idx: { type: Number, default: 0 },
  },
  computed: {
    weekData() {
      const filterItem = this.scheduleWeekList[this.weekName]?.find(
        (time) =>
          time?.startTime <= this.currentTime &&
          this.currentTime < time?.endTime
      )
      return filterItem
    },
    getBg() {
      return { background: this.weekData?.bgColor }
    },
    isSchedule() {
      let start = 0
      let end = 0
      let currentTime = 0
      let isTime = false
      let isWeekNoTime = false
      if (this.weekData) {
        const { startTime, endTime } = this.weekData
        start = Number(startTime.replace(':', ''))
        end = Number(endTime.replace(':', ''))
        currentTime = this.currentTime
        isTime = currentTime === Number(start)
        isWeekNoTime = currentTime > start && currentTime < end
      }

      if (isWeekNoTime) return 2
      else if (isTime) return 1
      else return 3
    },
    rowSpanIdx() {
      const { startTime, endTime } = this.weekData
      const setNum = (item) => Number(item.replace(':', '').substr(0, 2))
      if (setNum(endTime) === setNum(startTime)) {
        return 1
      } else return (setNum(endTime) - setNum(startTime)) * 2
    },
  },
  methods: {
    isTrue(idx) {
      if (idx % 6 === 0) return 'half-hour lined'
      else return 'half-hour'
    },
  },
}
</script>

<style scoped>
td.none {
  display: none;
}
.is_time {
  position: relative;
}

.icons_minus_circle_alph {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
